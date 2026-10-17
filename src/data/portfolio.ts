import type { CaseStudy } from '../types';

export const PORTFOLIO_CATEGORIES = [
  { id: 'all', label: 'Semua Studi Kasus' },
  { id: 'Fintech & B2B SaaS', label: 'Fintech & B2B SaaS' },
  { id: 'Luxury DTC E-Commerce', label: 'DTC E-Commerce' },
  { id: 'Manufaktur & Heavy Industry', label: 'Manufaktur & Industri' },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'finansia',
    client: 'PT Finansia Solusi Nusantara',
    category: 'Fintech & B2B SaaS',
    title: 'Arsitektur Web Portal B2B Eksekutif Perbankan',
    description:
      'Pembaruan menyeluruh arsitektur visual dan tech-stack menghasilkan peningkatan drastis pada reservasi demo institusional dari eksekutif perbankan nasional.',
    metricBadge: '+240% Pertumbuhan Leads',
    loadSpeed: '0.62 detik',
    bounceRateChange: 'Turun 54%',
    imageUrl: '/images/case-fintech.webp',
    imageAlt: 'PT Finansia Solusi B2B Portal',
    tags: ['Next.js 14', 'HubSpot CRM Sync', 'Tailwind CSS', 'PostgreSQL'],
    results: [
      { label: 'Conversion Rate', value: '+240%' },
      { label: 'PageSpeed Score', value: '100/100' },
      { label: 'Monthly Inbound Leads', value: '380+' },
    ],
    challenge:
      'Website lama berbasis template monolitik lambat (LCP > 4.2s), gagal meyakinkan komite tender perbankan nasional.',
    solution:
      'Rekayasa ulang dengan Next.js Server Components, integrasi autentikasi perbankan, dan formulir booking bertahap tanpa reload.',
  },
  {
    id: 'aura',
    client: 'AURA Label',
    category: 'Luxury DTC E-Commerce',
    title: 'Replatforming Toko Online & Fast 1-Click Checkout',
    description:
      'Redesain toko online mewah berfokus pada checkout kilat 1-klik dan pengalaman visual katalog mobile interaktif dengan zero lag.',
    metricBadge: '+185% Nilai Checkout',
    loadSpeed: '0.74 detik',
    bounceRateChange: 'Turun 42%',
    imageUrl: '/images/case-ecommerce.webp',
    imageAlt: 'AURA Label Luxury E-Commerce',
    tags: ['Headless Shopify', 'Midtrans Gateway', 'RajaOngkir API', 'Redis'],
    results: [
      { label: 'Gross Merchandise Value', value: '+185%' },
      { label: 'Cart Abandonment', value: '-40%' },
      { label: 'Mobile Render Time', value: '0.74s' },
    ],
    challenge:
      'Tingginya cart abandonment akibat proses checkout konvensional yang memuat 4 halaman bertingkat.',
    solution:
      'Penerapan arsitektur headless dengan modul checkout 1-halaman, integrasi QRIS instan, dan kalkulator ongkir otomatis.',
  },
  {
    id: 'mitra-perkasa',
    client: 'PT Mitra Perkasa Teknik',
    category: 'Manufaktur & Heavy Industry',
    title: 'Company Profile Ekspor Multibahasa Asia Pasifik',
    description:
      'Mentransformasi profil perusahaan konvensional menjadi etalase kapabilitas industri multibahasa yang dipercaya buyer dari 7 negara mitra di Asia Pasifik.',
    metricBadge: '#1 Rank Keyword Google',
    loadSpeed: '0.58 detik',
    bounceRateChange: 'Turun 68%',
    imageUrl: '/images/case-industry.webp',
    imageAlt: 'PT Mitra Perkasa Teknik Heavy Machinery',
    tags: ['Bilingual ID/EN', 'Cloudflare Enterprise', 'Schema B2B', 'React SSR'],
    results: [
      { label: 'Export Lead Inquiries', value: '+300%' },
      { label: 'Top-3 Google Keywords', value: '14 Keywords' },
      { label: 'Global PageSpeed', value: '99/100' },
    ],
    challenge:
      'Ketiadaan representasi digital kredibel berbahasa Inggris membuat buyer internasional ragu bertransaksi volume besar.',
    solution:
      'Desain korporat berwibawa dengan sertifikasi ISO interaktif, katalog spesifikasi teknis dinamis, dan routing multibahasa instan.',
  },
];
