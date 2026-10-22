import type { CaseStudy } from '../types';

export const PORTFOLIO_CATEGORIES = [
  { id: 'all', label: 'Semua Studi Kasus' },
  { id: 'Web Aplikasi', label: 'Web Aplikasi' },
  { id: 'Aplikasi Keuangan', label: 'Aplikasi Keuangan' },
  { id: 'Registrasi & Admin System', label: 'Registrasi & Admin' },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'laba-pengadaan',
    client: 'Project Laba Pengadaan',
    category: 'Web Aplikasi',
    title: 'Kalkulasi Pajak & Laba Pengadaan Otomatis',
    description:
      'Sistem kalkulasi laba pengadaan yang memisahkan input data pajak & PPN ke dalam dokumen tersendiri, lalu mengalirkannya otomatis ke kalkulator keuntungan.',
    metricBadge: 'Pajak & PPN Otomatis',
    loadSpeed: '0.8 detik',
    imageUrl: '/images/proyek-1.png',
    imageAlt: 'Project Laba Pengadaan - sistem kalkulasi pajak dan laba',
    tags: ['React', 'TypeScript', 'Kalkulasi Otomatis'],
    results: [
      { label: 'Perhitungan Pajak & PPN', value: 'Otomatis' },
      { label: 'Alur Dokumen', value: 'Terpisah & Rapi' },
      { label: 'Integrasi Kalkulator', value: 'Otomatis' },
    ],
    challenge:
      'Perhitungan laba harus menggabungkan data input, pajak, dan PPN sebelum masuk ke kalkulator keuntungan — alur yang rawan salah hitung bila dicampur dalam satu proses.',
    solution:
      'Memisahkan sistem menjadi dua bagian: modul input data untuk pajak & PPN yang menghasilkan dokumen tersendiri, lalu dokumen tersebut dialirkan otomatis ke kalkulator keuntungan.',
  },
  {
    id: 'keuva-keuangan',
    client: 'Keuva Keuangan',
    category: 'Aplikasi Keuangan',
    title: 'Aplikasi Manajemen Keuangan Pribadi',
    description:
      'Aplikasi pengelolaan keuangan pribadi untuk memantau tagihan bulanan, pengeluaran harian hingga bulanan, arus kas, dan berbagai jenis tabungan dalam satu dasbor.',
    metricBadge: 'Semua Keuangan dalam 1 Dasbor',
    loadSpeed: '0.8 detik',
    imageUrl: '/images/proyek-2.png',
    imageAlt: 'Keuva Keuangan - aplikasi manajemen keuangan pribadi',
    tags: ['React', 'TypeScript', 'Data Visualization'],
    results: [
      { label: 'Pencatatan Pengeluaran', value: 'Harian–Bulanan' },
      { label: 'Jenis Tabungan', value: 'Digital, Bank, Kartu Kredit' },
      { label: 'Arus Kas', value: 'Real-time' },
    ],
    challenge:
      'Banyak orang kesulitan mengelola keuangan karena data pengeluaran, tagihan, dan tabungan tersebar di berbagai tempat.',
    solution:
      'Membangun sistem yang menghitung tagihan bulanan, pengeluaran harian–mingguan–bulanan, arus kas, serta mencatat berbagai jenis tabungan (digital, bank, kartu kredit) dalam satu aplikasi.',
  },
  {
    id: 'hackathon-undana',
    client: 'Hackathon X Undana',
    category: 'Registrasi & Admin System',
    title: 'Sistem Registrasi Event & Pembayaran QRIS',
    description:
      'Sistem registrasi event hackathon lengkap dengan pembayaran QRIS, panel admin & peserta, manajemen tim, dan pemulihan kata sandi via Gmail API.',
    metricBadge: 'Registrasi & QRIS Terintegrasi',
    loadSpeed: '0.8 detik',
    imageUrl: '/images/proyek-3.png',
    imageAlt: 'Hackathon X Undana - sistem registrasi event dan QRIS',
    tags: ['QRIS', 'Admin Panel', 'Gmail API', 'Team Management'],
    results: [
      { label: 'Pembayaran', value: 'QRIS Otomatis' },
      { label: 'Panel', value: 'Admin & Peserta' },
      { label: 'Reset Password', value: 'via Gmail API' },
    ],
    challenge:
      'Membangun registrasi event dengan pembayaran QRIS, panel admin & peserta, sistem tim, serta reset password via Gmail API dalam satu sistem terpadu.',
    solution:
      'Seluruh modul berhasil diselesaikan dan berjalan baik — mulai dari registrasi, pembayaran QRIS, manajemen tim, hingga pemulihan akun.',
  },
  {
    id: 'sistem-perdataan-p3mi',
    client: 'Kantor P3MI',
    category: 'Web Aplikasi',
    title: 'Sistem Perdataan Administrasi Kantor P3MI',
    description:
      'Aplikasi web untuk pengelolaan data dan administrasi kantor P3MI — pendataan, pencarian, dan pengarsipan data dalam satu sistem terpusat.',
    metricBadge: 'Data Administrasi Terpusat',
    loadSpeed: '0.8 detik',
    imageUrl: '/images/proyek-4.svg',
    imageAlt: 'Sistem Perdataan Kantor P3MI',
    tags: ['React', 'TypeScript', 'Database', 'Admin Panel'],
    results: [
      { label: 'Penyimpanan Data', value: 'Terpusat' },
      { label: 'Pencarian Data', value: 'Cepat' },
      { label: 'Administrasi', value: 'Digital' },
    ],
    challenge:
      'Data administrasi yang sebelumnya dicatat manual tersebar di banyak berkas, sehingga sulit dicari dan rawan duplikasi.',
    solution:
      'Membangun sistem perdataan terpusat dengan pencarian cepat, pengarsipan digital, dan panel admin untuk memudahkan pengelolaan data kantor.',
  },
];
