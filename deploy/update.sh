#!/usr/bin/env bash
#
# Deploy ulang KeuvaWeb dari repo git (git pull + build produksi).
#
# Pemakaian:
#   sudo bash deploy/update.sh
#
# Variabel lingkungan (opsional):
#   APP_DIR  direktori aplikasi (default: /var/www/keuvaweb)
#   BRANCH   branch yang di-deploy (default: main)

set -euo pipefail

APP_DIR="${APP_DIR:-/var/www/keuvaweb}"
BRANCH="${BRANCH:-main}"

log() { printf '\033[1;34m==>\033[0m %s\n' "$*"; }

command -v git >/dev/null 2>&1 || { echo "git tidak ditemukan di PATH"; exit 1; }
[[ -d "$APP_DIR" ]] || { echo "Direktori aplikasi tidak ada: $APP_DIR"; exit 1; }

cd "$APP_DIR"

log "Menarik perubahan terbaru ($BRANCH) di $APP_DIR"
git fetch --prune origin
git reset --hard "origin/$BRANCH"

log "Memasang dependensi & build produksi"
npm ci || npm install
npm run build

log "Selesai. Nginx otomatis menyajikan berkas baru di $APP_DIR/dist"
