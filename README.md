# KeuvaWeb

> Studio rekayasa website konversi tinggi — landing page, company profile, toko online, dan aplikasi web kustom dengan skor PageSpeed 95+.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-7-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-7-CA4245?logo=reactrouter&logoColor=white)
![License](https://img.shields.io/badge/license-Proprietary-lightgrey)

Situs marketing multi-halaman untuk **KeuvaWeb**: beranda, layanan, portofolio, paket harga, proses kerja, kontak, dan tiga halaman legal (Kebijakan Privasi, Ketentuan Layanan, Keamanan Sistem).

## Daftar Isi

- [Fitur](#fitur)
- [Tech Stack](#tech-stack)
- [Mulai Cepat](#mulai-cepat)
- [Environment Variables](#environment-variables)
- [Struktur Proyek](#struktur-proyek)
- [Routing & SEO](#routing--seo)
- [Formulir Lead](#formulir-lead)
- [Analytics](#analytics)
- [Ikon](#ikon)
- [Deployment](#deployment)
- [Kontak](#kontak)
- [Lisensi](#lisensi)

## Fitur

- **Landing page konversi tinggi** — hero, social proof (marquee klien), preview paket, FAQ, dan CTA konsultasi kilat.
- **7 halaman + 3 halaman legal** dengan URL path asli (bukan hash), siap diindeks mesin pencari.
- **Tiga formulir lead** (konsultasi kilat di beranda, form kontak, modal konsultasi) yang benar-benar mengirim data — ke webhook atau fallback WhatsApp.
- **SEO per halaman** — `<title>`, meta description, Open Graph, Twitter Card, dan JSON-LD `ProfessionalService` yang dibuat otomatis dari `src/routes.ts` dan `index.html`.
- **Analytics siap pakai** — Google Analytics 4 dan/atau Plausible, termasuk pageview SPA dan event konversi `lead_submitted`.
- **Ikon lucide-react** lewat wrapper tipis — tanpa request font ikon eksternal, ikut ter-tree-shake.
- **Estetika gelap modern** — Tailwind CSS v4, palet neon biru, animasi halus, dan responsif mobile-first.
- **Aksesibilitas** — modal dengan `role="dialog"`, fokus otomatis, tutup via `Esc`/backdrop, dan body-scroll lock.
- **Anti-spam** — honeypot pada setiap formulir.

## Tech Stack

| Kategori     | Teknologi                                  |
| ------------ | ------------------------------------------ |
| Framework    | React 19                                   |
| Build tool   | Vite 8                                     |
| Bahasa       | TypeScript 7                               |
| Styling      | Tailwind CSS v4 (`@tailwindcss/vite`)      |
| Routing      | React Router 7 (`react-router-dom`)        |
| Ikon         | lucide-react                               |
| Type-check   | `tsc --noEmit` (`npm run lint`)            |

## Mulai Cepat

**Prasyarat:** Node.js 20+ dan npm.

```bash
# 1. Install dependensi
npm install

# 2. (Opsional) siapkan environment lokal
#    Salin .env.example menjadi .env.local lalu isi bila perlu

# 3. Jalankan dev server
npm run dev
#    Buka http://localhost:3000
```

### Perintah npm

| Perintah          | Fungsi                                                   |
| ----------------- | -------------------------------------------------------- |
| `npm run dev`     | Dev server Vite di port `3000` (host `0.0.0.0`)          |
| `npm run build`   | Build produksi ke folder `dist/`                         |
| `npm run preview` | Pratinjau lokal hasil build                              |
| `npm run lint`    | Type-check TypeScript (`tsc --noEmit`)                   |
| `npm run clean`   | Hapus folder `dist/`                                     |

## Environment Variables

Semua variabel bersifat **opsional** — situs tetap berfungsi tanpa konfigurasi apa pun. Salin `.env.example` ke `.env.local` dan isi yang dibutuhkan.

| Variabel                   | Deskripsi                                                                 | Contoh                     |
| -------------------------- | ------------------------------------------------------------------------- | -------------------------- |
| `VITE_LEADS_WEBHOOK_URL`   | Endpoint POST JSON penerima data lead (Apps Script, Formspree, Web3Forms, API sendiri). Kosong = fallback WhatsApp. | `https://script.google.com/.../exec` |
| `VITE_GA4_ID`              | Measurement ID Google Analytics 4                                         | `G-XXXXXXXXXX`             |
| `VITE_PLAUSIBLE_DOMAIN`    | Domain yang didaftarkan di Plausible                                      | `keuva.shop`             |
| `VITE_PLAUSIBLE_HOST`      | Opsional, untuk Plausible self-hosted                                     | `https://plausible.io`     |

## Struktur Proyek

```
.
├── index.html                     # Shell HTML + meta default + JSON-LD
├── vite.config.ts                 # Konfigurasi Vite (+ plugin React & Tailwind)
├── deploy/
│   ├── setup-vps.sh               # Setup awal VPS (nginx + Node + build + HTTPS)
│   ├── update.sh                  # Deploy ulang (git pull + build)
│   └── nginx.conf                 # Kerangka server block Nginx (manual)
├── public/
│   ├── favicon.svg                # Ikon situs
│   ├── robots.txt                 # Izin crawler + lokasi sitemap
│   ├── sitemap.xml                # 9 URL untuk keuva.shop
│   ├── images/                    # Gambar lokal (WebP, hasil konversi)
│   └── _redirects                 # SPA fallback untuk Netlify/Cloudflare Pages
└── src/
    ├── main.tsx                   # Entry React (BrowserRouter)
    ├── App.tsx                    # Definisi route, meta SEO per halaman, analytics pageview
    ├── routes.ts                  # Peta tab <-> path, judul & deskripsi SEO, halaman legal
    ├── types.ts                   # Tipe bersama (NavTab, dll.)
    ├── components/
    │   ├── Header.tsx             # Navigasi atas + brand
    │   ├── Footer.tsx             # Footer + tautan legal
    │   ├── Icon.tsx               # Wrapper lucide-react (map nama -> komponen)
    │   ├── BerandaView.tsx        # Beranda
    │   ├── LayananView.tsx        # Layanan
    │   ├── PortofolioView.tsx     # Portofolio & studi kasus
    │   ├── PaketHargaView.tsx     # Paket harga + kalkulator estimasi
    │   ├── ProsesView.tsx         # Proses kerja & timeline
    │   ├── KontakView.tsx         # Kontak + form
    │   ├── LegalView.tsx          # Kebijakan Privasi / Ketentuan / Keamanan
    │   ├── KonsultasiModal.tsx    # Modal konsultasi kilat
    │   └── NotificationCenter.tsx # Panel notifikasi (demo push)
    ├── hooks/
    │   └── useLeadForm.ts         # State + submit bersama untuk ketiga form
    └── services/
        ├── leadService.ts         # Pengiriman lead (webhook / fallback WhatsApp)
        ├── analytics.ts           # GA4 & Plausible (env-driven)
        └── notificationService.ts # Simulasi push notification
```

### Performa

- **Code-splitting per rute** — setiap halaman di-melalui `React.lazy` (`src/App.tsx`), sehingga bundle awal turun dari ~488 kB jadi ~319 kB (gzip ~101 kB). Chunk halaman (BerandaView, LayananView, dll.) dimuat on-demand, dengan fallback spinner saat transisi.
- **Gambar lokal** — seluruh gambar tersimpan di `public/images/*.webp` (konversi dari ~393 kB menjadi ~173 kB, −56%), tanpa hotlink ke pihak ketiga.
- **Ikon lucide-react** — hanya ikon yang dipakai yang masuk bundle.

## Routing & SEO

Navigasi memakai **React Router** dengan URL path asli:

| Halaman           | Path                    |
| ----------------- | ----------------------- |
| Beranda           | `/`                     |
| Layanan           | `/layanan`              |
| Portofolio        | `/portofolio`           |
| Paket Harga       | `/paket-harga`          |
| Proses            | `/proses`               |
| Kontak            | `/kontak`               |
| Kebijakan Privasi | `/kebijakan-privasi`    |
| Ketentuan Layanan | `/ketentuan-layanan`    |
| Keamanan Sistem   | `/keamanan`             |

Judul dan meta description berubah per halaman (lihat `src/routes.ts`), dan link navigasi memakai `<Link>` agar dapat ditelusuri crawler. URL lama berbasis hash (`/#layanan`) otomatis di-redirect ke path baru.

Karena ini SPA, hosting **wajib punya fallback ke `index.html`** agar reload langsung di `/layanan` tidak 404 — lihat [Deployment](#deployment).

`robots.txt` dan `sitemap.xml` (9 URL) sudah tersedia di `public/` dan ikut ter-deploy sebagai berkas statis di akar domain. Perbarui `lastmod` di sitemap saat ada perubahan konten.

Untuk SEO maksimal (HTML statis per halaman alih-alih render client-side), tambahkan prerender/SSG (mis. `vike`, Vercel prerender, atau prerender.io) — isinya sudah siap dari `sitemap.xml`.

## Formulir Lead

Ketiga formulir mengirim data lewat `src/services/leadService.ts`:

- **Jika `VITE_LEADS_WEBHOOK_URL` diisi** — data dikirim sebagai `POST` JSON ke endpoint tersebut. Notifikasi bisa langsung masuk ke email atau spreadsheet.
- **Jika kosong** — form tetap jujur: pengunjung diarahkan mengirim data lengkap via WhatsApp dengan pesan yang sudah terisi otomatis.

Setiap formulir dilengkapi **honeypot** anti-spam. Untuk proteksi lebih lanjut (rate limit/bot), tambahkan Cloudflare Turnstile di endpoint webhook.

## Analytics

Isi env terkait di `.env.local` (salah satu atau keduanya), lalu analytics aktif otomatis:

- **GA4** — `VITE_GA4_ID`
- **Plausible** — `VITE_PLAUSIBLE_DOMAIN` (+ `VITE_PLAUSIBLE_HOST` opsional)

Pageview SPA dikirim saat pindah halaman, dan event konversi `lead_submitted` (dengan properti `source` & `channel`) dikirim setiap formulir berhasil dikirim.

## Ikon

Ikon memakai **lucide-react** melalui wrapper `src/components/Icon.tsx`, sehingga tidak ada request font ikon eksternal dan hanya ikon yang dipakai yang ikut ke bundle. Untuk menambah ikon baru, tambahkan satu entri pada map `ICONS` di file tersebut.

## Deployment

### Hosting statis (Netlify / Cloudflare Pages / Vercel)

1. Set **build command** `npm run build` dan **output directory** `dist`.
2. SPA fallback:
   - **Netlify / Cloudflare Pages** — sudah disediakan `public/_redirects` (`/* /index.html 200`).
   - **Vercel** — tambahkan rewrite `{ "source": "/(.*)", "destination": "/index.html" }`.

### VPS (Ubuntu/Debian + Nginx) — otomatis

Tersedia skrip setup idempoten di `deploy/`. Setelah DNS `keuva.shop` & `www` mengarah ke IP VPS:

```bash
# 1. Login ke VPS
ssh root@IP_VPS

# 2. Ambil repo ke direktori aplikasi (sekali saja)
sudo mkdir -p /var/www/keuvaweb
sudo git clone https://github.com/nervouz18-spec/Keuva-Website.git /var/www/keuvaweb
cd /var/www/keuvaweb

# 3. Setup: pasang nginx + Node 20, swap (bila RAM kecil),
#    build, konfigurasi nginx, dan HTTPS Let's Encrypt
sudo DOMAIN=keuva.shop EMAIL=you@example.com bash deploy/setup-vps.sh
```

Skrip melakukan: `apt` update → `nginx`/`git`/`curl` → swap 1 GB bila RAM < 2 GB → Node.js 20 → clone & `npm run build` ke `/var/www/keuvaweb/dist` → tulis server block Nginx (SPA fallback + cache aset + gzip + header keamanan) → `certbot --nginx` (HTTPS + redirect).

**Deploy pembaruan** setiap kali ada perubahan di `main`:

```bash
sudo bash /var/www/keuvaweb/deploy/update.sh
```

### VPS manual (tanpa skrip)

Jika lebih suka manual, tersedia `deploy/nginx.conf` sebagai kerangka server block. Inti konfigurasinya:

```nginx
root /var/www/keuvaweb/dist;
location / { try_files $uri $uri/ /index.html; }
location /assets/ { expires 1y; add_header Cache-Control "public, immutable"; }
```

Lalu amankan dengan HTTPS gratis:

```bash
sudo certbot --nginx -d keuva.shop -d www.keuva.shop
```

> Catatan: bila repo bersifat privat, `git clone` di VPS butuh kredensial (deploy key atau Personal Access Token).

### Apache

Tambahkan `.htaccess` di root `dist/`:

```apache
FallbackResource /index.html
```

## Kontak

- **WhatsApp:** [+62 812-9843-2865](https://wa.me/6281298432865)
- **Email:** [taufiqrahmanprasetyo@gmail.com](mailto:taufiqrahmanprasetyo@gmail.com)

## Lisensi

Hak cipta © KeuvaWeb. Seluruh hak cipta dilindungi undang-undang. Kode ini bersifat proprietary dan tidak untuk didistribusikan ulang tanpa izin.
