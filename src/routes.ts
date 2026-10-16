import type { NavTab } from './types';

export type LegalKind = 'privacy' | 'terms' | 'security';

export const LEGAL_PATHS: Record<LegalKind, string> = {
  privacy: '/kebijakan-privasi',
  terms: '/ketentuan-layanan',
  security: '/keamanan',
};

export const TAB_PATHS: Record<NavTab, string> = {
  beranda: '/',
  layanan: '/layanan',
  portofolio: '/portofolio',
  'paket-harga': '/paket-harga',
  proses: '/proses',
  kontak: '/kontak',
};

export const PATH_TABS: Record<string, NavTab> = {
  '/': 'beranda',
  '/layanan': 'layanan',
  '/portofolio': 'portofolio',
  '/paket-harga': 'paket-harga',
  '/proses': 'proses',
  '/kontak': 'kontak',
};

export const ROUTE_META: Record<NavTab, { title: string; description: string }> = {
  beranda: {
    title: 'KeuvaWeb — Rekayasa Website Konversi Tertinggi',
    description:
      'Kami merekayasa arsitektur web performa tinggi dengan skor PageSpeed 95+, UX persuasif berorientasi konversi, serta infrastruktur cloud modern yang memacu pertumbuhan omset bisnis Anda.',
  },
  layanan: {
    title: 'Layanan Pembuatan Website — Landing Page, E-Commerce & Web App | KeuvaWeb',
    description:
      'Layanan landing page konversi tinggi, company profile B2B, toko online, dan aplikasi web kustom dengan arsitektur modern, cepat, dan siap scale-up.',
  },
  portofolio: {
    title: 'Portofolio & Studi Kasus Klien — KeuvaWeb',
    description:
      'Studi kasus nyata: peningkatan konversi, skor PageSpeed 95+, dan pertumbuhan omset klien setelah rekayasa ulang website bersama KeuvaWeb.',
  },
  'paket-harga': {
    title: 'Paket Harga Jasa Pembuatan Website — KeuvaWeb',
    description:
      'Paket harga transparan jasa pembuatan website: Starter Website, Business Website, hingga Business System aplikasi web full-stack untuk bisnis Anda.',
  },
  proses: {
    title: 'Proses Kerja & Timeline Pengerjaan Website — KeuvaWeb',
    description:
      'Alur kerja transparan dari discovery, desain, development, hingga launch dan maintenance — dengan koordinasi harian dan garansi tepat waktu.',
  },
  kontak: {
    title: 'Konsultasi Gratis & Kontak Studio — KeuvaWeb',
    description:
      'Konsultasi gratis tanpa komitmen dengan lead engineer kami. Dapatkan audit website lama atau estimasi roadmap proyek baru Anda dalam 24 jam.',
  },
};

export const LEGAL_META: Record<string, { title: string; description: string }> = {
  [LEGAL_PATHS.privacy]: {
    title: 'Kebijakan Privasi — KeuvaWeb',
    description:
      'Bagaimana KeuvaWeb mengumpulkan, menggunakan, dan melindungi data pribadi Anda saat menghubungi atau menggunakan layanan kami.',
  },
  [LEGAL_PATHS.terms]: {
    title: 'Ketentuan Layanan — KeuvaWeb',
    description:
      'Syarat dan ketentuan penggunaan layanan rekayasa website KeuvaWeb: lingkup kerja, pembayaran, revisi, hak kekayaan intelektual, dan garansi.',
  },
  [LEGAL_PATHS.security]: {
    title: 'Keamanan Sistem — KeuvaWeb',
    description:
      'Praktik keamanan KeuvaWeb: enkripsi HTTPS, pengembangan aman, pengelolaan akses, backup, dan kanal pelaporan kerentanan.',
  },
};
