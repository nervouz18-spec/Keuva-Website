#!/usr/bin/env bash
#
# Setup awal KeuvaWeb di VPS (Ubuntu 22.04/24.04 atau Debian 12).
# Idempoten: aman dijalankan berulang.
#
# Pemakaian:
#   sudo DOMAIN=keuvaweb.com EMAIL=you@example.com bash deploy/setup-vps.sh
#
# Variabel lingkungan (opsional):
#   DOMAIN    domain utama             (default: keuvaweb.com)
#   REPO_URL  URL repo git             (default: repo GitHub KeuvaWeb)
#   APP_DIR   direktori aplikasi       (default: /var/www/keuvaweb)
#   EMAIL     email untuk Let's Encrypt (wajib bila ingin HTTPS)
#   BRANCH    branch yang di-deploy     (default: main)

set -euo pipefail

DOMAIN="${DOMAIN:-keuvaweb.com}"
REPO_URL="${REPO_URL:-https://github.com/nervouz18-spec/Keuva-Website.git}"
APP_DIR="${APP_DIR:-/var/www/keuvaweb}"
BRANCH="${BRANCH:-main}"
EMAIL="${EMAIL:-}"
NGINX_SITE="/etc/nginx/sites-available/${DOMAIN}"

log()  { printf '\033[1;34m==>\033[0m %s\n' "$*"; }
warn() { printf '\033[1;33m[!]\033[0m %s\n' "$*"; }
die()  { printf '\033[1;31m[x]\033[0m %s\n' "$*" >&2; exit 1; }

[[ $EUID -eq 0 ]] || die "Jalankan sebagai root: sudo bash deploy/setup-vps.sh"

export DEBIAN_FRONTEND=noninteractive

log "Memperbarui paket sistem"
apt-get update -y
apt-get install -y --no-install-recommends ca-certificates curl git nginx

# --- Swap (penting untuk VPS RAM kecil saat proses build) ---
if [[ ! -f /swapfile ]] && [[ "$(free -m | awk '/Mem:/{print $2}')" -lt 2048 ]]; then
  log "Membuat swap 1 GB (RAM < 2 GB)"
  fallocate -l 1G /swapfile || dd if=/dev/zero of=/swapfile bs=1M count=1024
  chmod 600 /swapfile
  mkswap /swapfile
  swapon /swapfile
  grep -q '/swapfile' /etc/fstab || echo '/swapfile none swap sw 0 0' >> /etc/fstab
fi

# --- Node.js 20 ---
if ! command -v node >/dev/null 2>&1 || [[ "$(node -v)" != v20* ]]; then
  log "Memasang Node.js 20 (NodeSource)"
  curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
  apt-get install -y nodejs
fi
log "Node $(node -v) • npm $(npm -v)"

# --- Ambil kode ---
if [[ -d "$APP_DIR/.git" ]]; then
  log "Menarik pembaruan terbaru di $APP_DIR"
  git -C "$APP_DIR" fetch --prune origin
  git -C "$APP_DIR" checkout "$BRANCH"
  git -C "$APP_DIR" reset --hard "origin/$BRANCH"
else
  log "Clone repo ke $APP_DIR"
  mkdir -p "$(dirname "$APP_DIR")"
  git clone --branch "$BRANCH" "$REPO_URL" "$APP_DIR"
fi

# --- Build ---
log "Memasang dependensi & build produksi"
cd "$APP_DIR"
npm ci || npm install
npm run build
[[ -f "$APP_DIR/dist/index.html" ]] || die "Build gagal: dist/index.html tidak ada"

# --- Nginx ---
log "Menulis konfigurasi Nginx: $NGINX_SITE"
cat > "$NGINX_SITE" <<EOF
server {
    listen 80;
    listen [::]:80;
    server_name ${DOMAIN} www.${DOMAIN};

    root ${APP_DIR}/dist;
    index index.html;

    location / {
        try_files \$uri \$uri/ /index.html;
    }

    location = /index.html {
        add_header Cache-Control "no-cache";
    }

    location /assets/ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    gzip on;
    gzip_comp_level 6;
    gzip_min_length 1024;
    gzip_types text/plain text/css application/javascript application/json image/svg+xml application/xml;

    add_header X-Content-Type-Options "nosniff" always;
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header Referrer-Policy "strict-origin-when-cross-origin" always;
}
EOF

ln -sf "$NGINX_SITE" "/etc/nginx/sites-enabled/${DOMAIN}"
rm -f /etc/nginx/sites-enabled/default

log "Menguji & me-reload Nginx"
nginx -t
systemctl enable --now nginx
systemctl reload nginx

# --- HTTPS ---
if [[ -n "$EMAIL" ]]; then
  log "Memasang sertifikat HTTPS (Let's Encrypt)"
  apt-get install -y certbot python3-certbot-nginx
  certbot --nginx -d "${DOMAIN}" -d "www.${DOMAIN}" \
    --non-interactive --agree-tos -m "$EMAIL" --redirect
  log "HTTPS aktif: https://${DOMAIN}"
else
  warn "EMAIL kosong — HTTPS dilewati. Jalankan lagi dengan EMAIL=... atau:"
  warn "  certbot --nginx -d ${DOMAIN} -d www.${DOMAIN}"
fi

log "Selesai. Situs: http://${DOMAIN} (root: ${APP_DIR}/dist)"
