export const MODULE_CONFIG = {
  starter: { label: 'Starter Website', sub: 'Website sederhana', price: 500000, days: 3 },
  business: {
    label: 'Business Website',
    sub: 'Company profile 6 halaman',
    price: 1500000,
    days: 5,
  },
  system: { label: 'Business System', sub: 'Aplikasi web full-stack', price: 3000000, days: 14 },
} as const;

export const MODULE_KEYS = ['starter', 'business', 'system'] as const;
export type ModuleKey = (typeof MODULE_KEYS)[number];

export const ADDON_CONFIG = {
  payment: { label: 'Integrasi Pembayaran Otomatis', price: 1200000, days: 2 },
  seo: { label: 'Paket SEO Premium & Schema', price: 800000, days: 2 },
  multilingual: { label: 'Multi-Bahasa (Bilingual ID/EN)', price: 1500000, days: 3 },
  dashboard: { label: 'Custom Dashboard / Database', price: 2000000, days: 4 },
} as const;

export const ADDON_KEYS = ['payment', 'seo', 'multilingual', 'dashboard'] as const;
export type AddonKey = (typeof ADDON_KEYS)[number];

export interface PlanFeature {
  icon: string;
  text: string;
  strong?: boolean;
}

export interface PricingPlan {
  id: ModuleKey;
  featured?: boolean;
  eyebrow: string;
  badge?: string;
  delivery: string;
  name: string;
  tagline: string;
  pricePrefix?: string;
  priceNote: string;
  features: PlanFeature[];
  footnote?: string;
  cta: { label: string; icon: string };
}

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'starter',
    eyebrow: 'Entry-level',
    delivery: '1–3 Hari Kerja',
    name: 'Starter Website',
    tagline: 'Cocok untuk usaha kecil yang baru mulai online.',
    priceNote: 'Sekali bayar untuk jasa pengerjaan',
    features: [
      { icon: 'check_circle', text: 'Landing page atau website sederhana' },
      { icon: 'check_circle', text: 'Desain responsif' },
      { icon: 'check_circle', text: 'Informasi produk dan layanan' },
      { icon: 'check_circle', text: 'Tombol WhatsApp dan kontak' },
      { icon: 'check_circle', text: 'SEO dasar' },
      { icon: 'check_circle', text: '2 kali revisi' },
    ],
    footnote: 'Tidak termasuk backend kompleks, domain, hosting, dan biaya layanan pihak ketiga.',
    cta: { label: 'Pilih Paket Starter', icon: 'arrow_forward' },
  },
  {
    id: 'business',
    featured: true,
    badge: 'Prioritas',
    eyebrow: 'Populer',
    delivery: '3–5 Hari Kerja',
    name: 'Business Website',
    tagline:
      'Cocok untuk bisnis lokal yang ingin tampil profesional dan menerima pelanggan secara online.',
    priceNote: 'Sekali bayar untuk jasa pengerjaan',
    features: [
      { icon: 'verified', text: 'Company profile hingga 6 halaman', strong: true },
      { icon: 'check_circle', text: 'Desain semi-custom' },
      { icon: 'check_circle', text: 'Form kontak dan WhatsApp' },
      { icon: 'check_circle', text: 'Katalog layanan atau produk' },
      { icon: 'check_circle', text: 'Integrasi API sederhana bila diperlukan dan disepakati' },
      { icon: 'check_circle', text: 'SEO dasar' },
      { icon: 'check_circle', text: '3 kali revisi' },
    ],
    footnote: 'Fitur admin dan database kompleks dihitung terpisah.',
    cta: { label: 'Mulai Proyek Business Website', icon: 'rocket_launch' },
  },
  {
    id: 'system',
    eyebrow: 'Full-stack',
    delivery: '5–14 Hari Kerja',
    name: 'Business System',
    tagline: 'Cocok untuk bisnis yang ingin mengelola operasional melalui aplikasi web.',
    pricePrefix: 'Mulai',
    priceNote: 'Estimasi akhir menyesuaikan lingkup proyek',
    features: [
      { icon: 'check_circle', text: 'Login dan hak akses pengguna' },
      { icon: 'check_circle', text: 'Database dan CRUD' },
      { icon: 'check_circle', text: 'Dashboard admin' },
      { icon: 'check_circle', text: 'Pengelolaan data pelanggan atau pesanan' },
      { icon: 'check_circle', text: 'Laporan dasar' },
      { icon: 'check_circle', text: 'Dokumentasi dan pelatihan singkat' },
      { icon: 'check_circle', text: 'Pengujian fungsional' },
    ],
    cta: { label: 'Konsultasikan Kebutuhan', icon: 'arrow_forward' },
  },
];

export const COMPARISON_ROWS: {
  label: string;
  starter: string;
  business: string;
  system: string;
}[] = [
  { label: 'Harga', starter: 'Rp 500.000', business: 'Rp 1.500.000', system: 'Mulai Rp 3.000.000' },
  { label: 'Estimasi pengerjaan', starter: '1-3 hari kerja', business: '3-5 hari kerja', system: '5-14 hari kerja' },
  { label: 'Jumlah halaman', starter: 'Landing page', business: 'Hingga 6 halaman', system: 'Tak terbatas' },
  { label: 'Tingkat desain', starter: 'Responsif', business: 'Semi-custom', system: 'Custom penuh' },
  { label: 'Form kontak & WhatsApp', starter: '✓', business: '✓', system: '✓' },
  { label: 'SEO dasar', starter: '✓', business: '✓', system: '✓' },
  { label: 'Katalog produk / layanan', starter: '—', business: '✓', system: '✓' },
  { label: 'Integrasi API', starter: '—', business: 'Opsional', system: '✓' },
  { label: 'Login & hak akses pengguna', starter: '—', business: '—', system: '✓' },
  { label: 'Database & CRUD', starter: '—', business: '—', system: '✓' },
  { label: 'Dashboard admin', starter: '—', business: '—', system: '✓' },
  { label: 'Laporan dasar', starter: '—', business: '—', system: '✓' },
  { label: 'Jumlah revisi', starter: '2 kali', business: '3 kali', system: 'Sesuai kesepakatan' },
  { label: 'Onboarding & dokumentasi', starter: 'Panduan ringkas', business: 'Panduan ringkas', system: 'Walkthrough 30-45 menit' },
];

export const PRICING_FAQ = [
  {
    q: 'Bagaimana mekanisme sistem pembayaran di KeuvaWeb?',
    a: 'Kami memberlakukan sistem termin profesional: Down Payment (DP) sebesar 50% di awal setelah kontrak kerja sama disetujui, dan pelunasan 50% sisanya dilakukan setelah website selesai diuji coba (staging preview) serta siap untuk dipublikasikan ke domain utama Anda.',
  },
  {
    q: 'Apakah source code dan akses website sepenuhnya menjadi hak milik kami?',
    a: 'Ya, 100%. Tidak ada sistem lock-in atau ketergantungan sewa kode. Seluruh aset desain di Figma, repository kode sumber (GitHub/GitLab), akun server hosting, dan domain akan kami serahkan sepenuhnya kepada tim Anda saat serah terima proyek.',
  },
  {
    q: 'Apakah tim kami akan diajarkan cara mengelola dan mengubah konten website?',
    a: 'Tentu saja. Kami menyediakan sesi onboarding video walkthrough berdurasi 30-45 menit yang direkam khusus untuk tim Anda, disertai panduan dokumentasi ringkas tentang cara menambah artikel blog, mengupdate portofolio, maupun mengubah teks dan gambar mandiri tanpa koding.',
  },
  {
    q: 'Apa yang terjadi jika terdapat bug atau error setelah masa garansi habis?',
    a: 'Anda dapat memperpanjang paket Maintenance & Care Bulanan kami yang fleksibel, atau menghubungi kami kapan saja dengan sistem on-demand task hourly rate yang sangat kompetitif dan transparan.',
  },
];
