import { Icon } from './Icon';
import React, { useState } from 'react';
import { NavTab } from '../types';
import { LazyImage } from './LazyImage';
import { useLeadForm } from '../hooks/useLeadForm';

interface BerandaViewProps {
  onTabChange: (tab: NavTab) => void;
  onOpenConsultation: () => void;
}

export const BerandaView: React.FC<BerandaViewProps> = ({
  onTabChange,
  onOpenConsultation,
}) => {
  // FAQ accordion state
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Quick form (lead capture)
  const lead = useLeadForm({ source: 'beranda' });
  const {
    name: formName,
    setName: setFormName,
    wa: formWa,
    setWa: setFormWa,
    email: formEmail,
    setEmail: setFormEmail,
    projectType: formType,
    setProjectType: setFormType,
    notes: formNotes,
    setNotes: setFormNotes,
    honeypot,
    setHoneypot,
    isSubmitting,
    isSuccess: formSubmitted,
    channel,
    waLink,
    error,
    handleSubmit: handleFormSubmit,
    reset: resetForm,
  } = lead;

  const faqData = [
    {
      q: 'Apakah saya dapat mengedit konten teks & foto sendiri nantinya?',
      a: 'Tentu saja! Kami membangun dashboard CMS mandiri yang sangat intuitif. Anda dapat mengubah foto banner, memperbarui daftar produk, menerbitkan artikel blog, atau mengganti kontak WhatsApp tanpa memerlukan keahlian koding sama sekali. Kami juga menyertakan video tutorial eksklusif untuk staf Anda.',
    },
    {
      q: 'Berapa lama rata-rata proses pengerjaan dari awal hingga tayang?',
      a: 'Untuk paket Starter Website selesai dalam 1 hingga 3 hari kerja. Paket Business Website rata-rata memerlukan 3 hingga 5 hari kerja. Proyek Business System atau aplikasi web kustom memerlukan 5 hingga 14 hari kerja, disesuaikan dengan kelengkapan materi dan integrasi sistem.',
    },
    {
      q: 'Apakah ada garansi maintenance jika terjadi kendala teknis?',
      a: 'Ya, semua paket kami dilengkapi garansi teknis gratis mulai dari 30 hari hingga 6 bulan penuh (sesuai paket). Garansi mencakup perbaikan bug, pembaruan keamanan server berkala, pencadangan otomatis (daily cloud backup), serta asistensi teknis langsung saat ada hal yang membutuhkan bantuan mendesak.',
    },
    {
      q: 'Bagaimana jika bisnis saya belum memiliki logo atau materi tulisan (copywriting)?',
      a: 'Jangan khawatir. Tim creative writer kami siap membantu menyusun naskah copywriting persuasif berbasis USP bisnis Anda, serta tim desain kami dapat mengolah aset grafis, pemilihan warna merek, dan icon pack premium agar situs Anda tampil setara perusahaan global.',
    },
  ];

  return (
    <div className="w-full">
      {/* Ambient Glow Atmosphere */}
      <div className="relative w-full overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[720px] h-[480px] bg-primary-container/15 rounded-full blur-[140px] pointer-events-none -z-10" />
        <div className="absolute top-[680px] right-0 w-[540px] h-[540px] bg-tertiary-container/10 rounded-full blur-[160px] pointer-events-none -z-10" />
        <div className="absolute top-[2100px] left-0 w-[600px] h-[600px] bg-secondary-container/15 rounded-full blur-[180px] pointer-events-none -z-10" />

        {/* 1. HERO SECTION */}
        <section className="max-w-[1280px] mx-auto px-5 md:px-12 pt-12 md:pt-16 pb-12">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            {/* Live status badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-container-high text-primary text-xs font-medium shadow-sm mb-6 border border-line">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tertiary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-tertiary"></span>
              </span>
              <span className="text-on-surface">
                Solusi Web Rekayasa Presisi #1 untuk Bisnis & Startup Modern
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl text-on-surface font-extrabold tracking-tight mb-6 leading-tight md:leading-[1.15]">
              Website Cepat, Elegan, dan Dirancang untuk{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-container to-tertiary">
                Meningkatkan Omset
              </span>{' '}
              Bisnis Anda
            </h1>

            {/* Subheadline */}
            <p className="text-base md:text-lg text-on-surface-variant max-w-2xl mb-10 leading-relaxed">
              Kami merekayasa arsitektur web performa tinggi dengan skor PageSpeed 95+, UX persuasif berorientasi konversi, serta infrastruktur cloud modern yang memacu pertumbuhan pendapatan perusahaan Anda.
            </p>

            {/* CTA Cluster */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-12">
              <button
                onClick={onOpenConsultation}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-primary-container to-secondary-container text-white font-semibold text-sm shadow-[0_12px_28px_-6px_rgba(77,142,255,0.45)] hover:scale-[1.02] active:scale-[0.98] transition-transform"
              >
                <span>Mulai Konsultasi Proyek (Gratis)</span>
                <Icon name="arrow_forward" className=" text-base" />
              </button>
              <button
                onClick={() => onTabChange('portofolio')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-surface-container-high text-on-surface font-semibold text-sm hover:bg-surface-container-highest transition-colors shadow-sm border border-line"
              >
                <Icon name="dashboard_customize" className=" text-base text-tertiary" />
                <span>Lihat Portofolio Karya</span>
              </button>
            </div>

            {/* Key Metrics Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 w-full pt-6 bg-surface-container-low/70 backdrop-blur-xl p-6 rounded-2xl shadow-xl border border-line">
              <div className="flex flex-col items-center">
                <span className="font-display text-2xl md:text-3xl font-bold text-primary tabular-nums">
                  150+
                </span>
                <span className="text-xs text-outline mt-1">Website Diluncurkan</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-display text-2xl md:text-3xl font-bold text-tertiary tabular-nums">
                  &lt; 0.8s
                </span>
                <span className="text-xs text-outline mt-1">LCP Load Speed</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-display text-2xl md:text-3xl font-bold text-primary tabular-nums">
                  99.8%
                </span>
                <span className="text-xs text-outline mt-1">Uptime Garansi SLA</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="flex items-center gap-1">
                  <span className="font-display text-2xl md:text-3xl font-bold text-on-surface tabular-nums">
                    4.9
                  </span>
                  <Icon name="star" className=" text-tertiary text-xl" filled />
                </div>
                <span className="text-xs text-outline mt-1">80+ Klien Puas</span>
              </div>
            </div>
          </div>

          {/* Hero Visual Mockup Preview with LazyImage */}
          <div className="mt-12 relative">
            <div className="w-full rounded-2xl bg-surface-container-high shadow-[0_24px_50px_rgba(0,0,0,0.6)] overflow-hidden border border-line-strong">
              {/* Browser top bar */}
              <div className="h-10 bg-surface-container-highest px-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-error/80"></span>
                  <span className="w-3 h-3 rounded-full bg-primary-container/80"></span>
                  <span className="w-3 h-3 rounded-full bg-tertiary/80"></span>
                </div>
                <div className="px-4 py-1 rounded bg-surface-container text-xs font-mono text-on-surface-variant flex items-center gap-1.5 border border-line">
                  <Icon name="lock" className=" text-sm text-tertiary" />
                  <span>https://keuva.shop/enterprise-showcase</span>
                </div>
                <div className="flex items-center gap-2 text-outline">
                  <Icon name="more_vert" className=" text-sm" />
                </div>
              </div>

              {/* Mockup screen with priority lazy loading */}
              <div className="relative h-[300px] sm:h-[420px] md:h-[500px] w-full bg-surface-container-lowest">
                <LazyImage
                  priority={true}
                  src="/images/beranda-hero.webp"
                  alt="Enterprise Dashboard Showcase Mockup"
                  className="w-full h-full object-cover"
                />

                {/* Floating Live Stat Pill */}
                <div className="absolute bottom-6 left-6 hidden sm:flex items-center gap-3 bg-surface-container-low/90 backdrop-blur-md px-4 py-3 rounded-xl shadow-xl border border-line-strong">
                  <div className="w-9 h-9 rounded-lg bg-primary/20 flex items-center justify-center text-primary">
                    <Icon name="speed" className=" text-xl" />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-[10px] font-bold tracking-wider uppercase text-outline">
                      Google PageSpeed
                    </span>
                    <span className="text-xs font-bold text-on-surface">
                      Skor 99/100 (Core Web Vitals Pass)
                    </span>
                  </div>
                </div>

                {/* Floating Tech Badges */}
                <div className="absolute top-6 right-6 flex items-center gap-2">
                  <span className="px-3 py-1 rounded-md bg-surface-container-low/90 backdrop-blur-md text-xs font-semibold text-primary shadow-sm border border-line-strong">
                    Next.js 15
                  </span>
                  <span className="px-3 py-1 rounded-md bg-surface-container-low/90 backdrop-blur-md text-xs font-semibold text-tertiary shadow-sm border border-line-strong">
                    Tailwind v4
                  </span>
                  <span className="px-3 py-1 rounded-md bg-surface-container-low/90 backdrop-blur-md text-xs font-semibold text-secondary shadow-sm border border-line-strong">
                    Headless CMS
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. LAYANAN UNGGULAN */}
        <section className="max-w-[1280px] mx-auto px-5 md:px-12 py-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div className="max-w-xl flex flex-col gap-1.5">
              <span className="text-[11px] font-bold uppercase tracking-wider text-primary">
                Kategori Spesialisasi
              </span>
              <h2 className="font-display text-3xl md:text-4xl text-on-surface font-bold">
                Layanan Rekayasa Website Konversi Tertinggi
              </h2>
            </div>
            <p className="text-sm text-on-surface-variant max-w-md leading-relaxed">
              Kami memadukan psikologi konversi visual dengan kode bersih modular tanpa bloatware pihak ketiga yang memperlambat penjualan Anda.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="p-6 rounded-2xl bg-surface-container-low flex flex-col justify-between hover:bg-surface-container transition-all group shadow-sm border border-line">
              <div className="flex flex-col gap-4">
                <div className="w-14 h-14 rounded-xl bg-primary-container/20 text-primary flex items-center justify-center">
                  <Icon name="rocket_launch" className=" text-2xl" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-tertiary">
                    Pertumbuhan Iklan
                  </span>
                  <h3 className="font-display text-xl text-on-surface font-bold group-hover:text-primary transition-colors">
                    Landing Page Konversi Tinggi
                  </h3>
                  <p className="text-xs text-outline leading-relaxed">
                    Dirancang khusus untuk kampanye Meta Ads & Google Ads. Mengeliminasi distraksi dan memaksimalkan klik pembelian atau form leads.
                  </p>
                </div>
                <div className="flex flex-col gap-2 pt-2">
                  <div className="flex items-center gap-2 text-xs text-on-surface-variant">
                    <Icon name="check_circle" className=" text-tertiary text-base" />
                    <span>Struktur Copywriting Persuasif AIDA</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-on-surface-variant">
                    <Icon name="check_circle" className=" text-tertiary text-base" />
                    <span>Optimasi Kecepatan Mobile First (&lt;1s)</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-on-surface-variant">
                    <Icon name="check_circle" className=" text-tertiary text-base" />
                    <span>Integrasi Pelacak Pixel & CAPI Akurat</span>
                  </div>
                </div>
              </div>
              <div className="pt-6 mt-6 border-t border-line flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase font-bold text-outline">
                    Durasi Pengerjaan
                  </span>
                  <span className="text-sm font-semibold text-on-surface">1 - 3 Hari Kerja</span>
                </div>
                <button
                  onClick={onOpenConsultation}
                  className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface hover:bg-primary-container hover:text-on-primary-container transition-colors"
                >
                  <Icon name="arrow_forward" className=" text-sm" />
                </button>
              </div>
            </div>

            {/* Card 2 (Featured highlight) */}
            <div className="p-6 rounded-2xl bg-surface-container-high flex flex-col justify-between shadow-xl relative overflow-hidden group border border-primary-container/30">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-container/10 rounded-full blur-2xl pointer-events-none" />
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-xl bg-primary-container text-on-primary-container flex items-center justify-center shadow-md">
                    <Icon name="domain" className=" text-2xl" />
                  </div>
                  <span className="px-3 py-1 rounded bg-primary-container/20 text-primary text-xs font-semibold">
                    Paling Diminati
                  </span>
                </div>
                <div className="flex flex-col gap-1.5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-tertiary">
                    Otoritas Merek
                  </span>
                  <h3 className="font-display text-xl text-on-surface font-bold group-hover:text-primary transition-colors">
                    Company Profile Profesional
                  </h3>
                  <p className="text-xs text-outline leading-relaxed">
                    Representasi digital kelas atas bagi B2B, korporasi, manufaktur, dan konsultan yang ingin memenangkan tender bernilai tinggi.
                  </p>
                </div>
                <div className="flex flex-col gap-2 pt-2">
                  <div className="flex items-center gap-2 text-xs text-on-surface">
                    <Icon name="check_circle" className=" text-tertiary text-base" />
                    <span>Desain Kustom Eksklusif (Tanpa Template Basi)</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-on-surface">
                    <Icon name="check_circle" className=" text-tertiary text-base" />
                    <span>Sistem CMS Mandiri yang Ramah Pengguna</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-on-surface">
                    <Icon name="check_circle" className=" text-tertiary text-base" />
                    <span>Optimasi SEO On-Page Struktur Schema B2B</span>
                  </div>
                </div>
              </div>
              <div className="pt-6 mt-6 border-t border-line flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase font-bold text-outline">
                    Durasi Pengerjaan
                  </span>
                  <span className="text-sm font-semibold text-on-surface">3 - 5 Hari Kerja</span>
                </div>
                <button
                  onClick={onOpenConsultation}
                  className="w-10 h-10 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center hover:bg-primary-hover transition-colors"
                >
                  <Icon name="arrow_forward" className=" text-sm font-bold" />
                </button>
              </div>
            </div>

            {/* Card 3 */}
            <div className="p-6 rounded-2xl bg-surface-container-low flex flex-col justify-between hover:bg-surface-container transition-all group shadow-sm border border-line">
              <div className="flex flex-col gap-4">
                <div className="w-14 h-14 rounded-xl bg-tertiary-container/25 text-tertiary flex items-center justify-center">
                  <Icon name="shopping_cart_checkout" className=" text-2xl" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-tertiary">
                    Skala & Transaksi
                  </span>
                  <h3 className="font-display text-xl text-on-surface font-bold group-hover:text-primary transition-colors">
                    Toko Online & Custom Web App
                  </h3>
                  <p className="text-xs text-outline leading-relaxed">
                    Sistem belanja mulus terintegrasi payment gateway lokal (Midtrans/Xendit), otomatisasi ongkir, serta platform portal data kustom.
                  </p>
                </div>
                <div className="flex flex-col gap-2 pt-2">
                  <div className="flex items-center gap-2 text-xs text-on-surface-variant">
                    <Icon name="check_circle" className=" text-tertiary text-base" />
                    <span>Checkout Kilat 1-Halaman Tanpa Ribet</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-on-surface-variant">
                    <Icon name="check_circle" className=" text-tertiary text-base" />
                    <span>Integrasi WhatsApp Notifikasi Otomatis</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-on-surface-variant">
                    <Icon name="check_circle" className=" text-tertiary text-base" />
                    <span>Dashboard Analitik Penjualan Real-Time</span>
                  </div>
                </div>
              </div>
              <div className="pt-6 mt-6 border-t border-line flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase font-bold text-outline">
                    Durasi Pengerjaan
                  </span>
                  <span className="text-sm font-semibold text-on-surface">5 - 14 Hari Kerja</span>
                </div>
                <button
                  onClick={onOpenConsultation}
                  className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface hover:bg-primary-container hover:text-on-primary-container transition-colors"
                >
                  <Icon name="arrow_forward" className=" text-sm" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* 3. SHOWCASE PORTOFOLIO / STUDI KASUS */}
        <section className="max-w-[1280px] mx-auto px-5 md:px-12 py-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div className="flex flex-col gap-1.5 max-w-xl">
              <span className="text-[11px] font-bold uppercase tracking-wider text-primary">
                Bukti Nyata Dampak Bisnis
              </span>
              <h2 className="font-display text-3xl md:text-4xl text-on-surface font-bold">
                Karya Unggulan yang Menghasilkan Rekor Omset
              </h2>
            </div>
            <button
              onClick={() => onTabChange('portofolio')}
              className="inline-flex items-center gap-1.5 text-primary text-sm font-semibold hover:text-ink-strong transition-colors"
            >
              <span>Lihat Semua Studi Kasus</span>
              <Icon name="arrow_forward" className=" text-base" />
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Case 1 (Span 7) with LazyImage */}
            <div className="lg:col-span-7 p-6 rounded-2xl bg-surface-container-low flex flex-col justify-between shadow-lg border border-line group">
              <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden mb-5 bg-surface-container">
                <LazyImage
                  src="/images/case-fintech.webp"
                  alt="PT Finansia Solusi Nusantara web architecture"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-surface-container-lowest/90 backdrop-blur-md px-3 py-1 rounded-full text-xs text-primary font-bold border border-line-strong">
                  Fintech & B2B SaaS
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <span className="px-2.5 py-1 rounded bg-tertiary-container/25 text-tertiary text-xs font-bold">
                    +240% Pertumbuhan Leads
                  </span>
                  <span className="text-outline text-xs">Waktu Muat: 0.62 detik</span>
                </div>
                <h3 className="font-display text-xl text-on-surface font-bold">
                  PT Finansia Solusi Nusantara - Arsitektur Web Portal B2B
                </h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  Pembaruan menyeluruh struktur visual dan performa tech-stack menghasilkan peningkatan drastis pada formulir reservasi demo institusional dari eksekutif perbankan nasional.
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  <span className="px-2.5 py-1 rounded bg-surface-container text-xs text-outline border border-line">
                    Next.js 14
                  </span>
                  <span className="px-2.5 py-1 rounded bg-surface-container text-xs text-outline border border-line">
                    HubSpot CRM Sync
                  </span>
                  <span className="px-2.5 py-1 rounded bg-surface-container text-xs text-outline border border-line">
                    Tailwind CSS
                  </span>
                </div>
              </div>
            </div>

            {/* Case 2 (Span 5) with LazyImage */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-surface-container-low flex flex-col justify-between shadow-lg border border-line group">
              <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden mb-5 bg-surface-container">
                <LazyImage
                  src="/images/case-ecommerce.webp"
                  alt="AURA Label fast online store redesign"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-surface-container-lowest/90 backdrop-blur-md px-3 py-1 rounded-full text-xs text-secondary font-bold border border-line-strong">
                  Luxury DTC E-Commerce
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <span className="px-2.5 py-1 rounded bg-primary-container/20 text-primary text-xs font-bold">
                    +185% Nilai Checkout
                  </span>
                  <span className="text-outline text-xs">Bounce Rate: Turun 42%</span>
                </div>
                <h3 className="font-display text-xl text-on-surface font-bold">
                  AURA Label - Replatforming Toko Online & Fast Checkout
                </h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  Redesain toko daring berfokus pada checkout kilat 1-klik dan pengalaman katalog visual mobile interaktif dengan zero lag.
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  <span className="px-2.5 py-1 rounded bg-surface-container text-xs text-outline border border-line">
                    Headless Shopify
                  </span>
                  <span className="px-2.5 py-1 rounded bg-surface-container text-xs text-outline border border-line">
                    Midtrans Gateway
                  </span>
                </div>
              </div>
            </div>

            {/* Case 3 (Span 12 - Full Wide banner) with LazyImage */}
            <div className="lg:col-span-12 p-6 md:p-8 rounded-2xl bg-surface-container-high flex flex-col lg:flex-row items-center gap-8 shadow-xl border border-line-strong">
              <div className="w-full lg:w-1/2 relative h-64 md:h-80 rounded-xl overflow-hidden bg-surface-container">
                <LazyImage
                  src="/images/case-industry.webp"
                  alt="PT Mitra Perkasa Teknik Heavy Industry"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full lg:w-1/2 flex flex-col gap-4">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-tertiary-container/25 text-tertiary text-xs font-semibold self-start">
                  Manufaktur & Heavy Industry
                </div>
                <h3 className="font-display text-2xl md:text-3xl text-on-surface font-bold">
                  PT Mitra Perkasa Teknik - Company Profile Ekspor Internasional
                </h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  Mentransformasi profil perusahaan konvensional menjadi etalase kapabilitas industri multibahasa yang dipercaya buyer dari 7 negara mitra di Asia Pasifik.
                </p>
                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-surface-container border border-line">
                    <span className="font-display text-xl font-bold text-primary">#1 Rank</span>
                    <p className="text-xs text-outline mt-1">Google Keyword Industri Utama</p>
                  </div>
                  <div className="p-4 rounded-xl bg-surface-container border border-line">
                    <span className="font-display text-xl font-bold text-tertiary">300%</span>
                    <p className="text-xs text-outline mt-1">Kenaikan Lead Enquiry Ekspor</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. ALUR KERJA (4 LANGKAH MUDAH) */}
        <section className="max-w-[1280px] mx-auto px-5 md:px-12 py-16">
          <div className="text-center max-w-2xl mx-auto mb-12 flex flex-col gap-1.5">
            <span className="text-[11px] font-bold uppercase tracking-wider text-primary">
              Transparan & Terstruktur
            </span>
            <h2 className="font-display text-3xl md:text-4xl text-on-surface font-bold">
              4 Langkah Mudah Meluncurkan Website Impian Anda
            </h2>
            <p className="text-sm text-on-surface-variant">
              Tidak ada jargon rumit. Anda selalu tahu status progres proyek setiap harinya melalui papan koordinasi live.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {/* Step 1 */}
            <div className="p-6 rounded-2xl bg-surface-container-low flex flex-col gap-4 shadow-sm border border-line hover:border-primary-container/30 transition-all">
              <span className="font-display text-3xl text-primary/35 font-extrabold">01</span>
              <div className="flex flex-col gap-1.5">
                <h3 className="font-display text-lg text-on-surface font-bold">Discovery & Brief</h3>
                <p className="text-xs text-outline leading-relaxed">
                  Diskusi mendalam untuk memetakan tujuan bisnis, profil audiens target, analisis kompetitor, dan struktur penawaran produk Anda.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="p-6 rounded-2xl bg-surface-container-low flex flex-col gap-4 shadow-sm border border-line hover:border-primary-container/30 transition-all">
              <span className="font-display text-3xl text-primary/35 font-extrabold">02</span>
              <div className="flex flex-col gap-1.5">
                <h3 className="font-display text-lg text-on-surface font-bold">
                  Desain UI/UX & Prototype
                </h3>
                <p className="text-xs text-outline leading-relaxed">
                  Pembuatan wireframe dan mockup visual interaktif di Figma. Anda dapat mencoba alur klik langsung sebelum sebaris kode ditulis.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="p-6 rounded-2xl bg-surface-container-low flex flex-col gap-4 shadow-sm border border-line hover:border-primary-container/30 transition-all">
              <span className="font-display text-3xl text-primary/35 font-extrabold">03</span>
              <div className="flex flex-col gap-1.5">
                <h3 className="font-display text-lg text-on-surface font-bold">Koding & Integrasi</h3>
                <p className="text-xs text-outline leading-relaxed">
                  Implementasi kode bersih berkecepatan tinggi, integrasi WhatsApp, analitik pelacak piksel, formulir data, dan setup CMS mandiri.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="p-6 rounded-2xl bg-surface-container-low flex flex-col gap-4 shadow-sm border border-line hover:border-primary-container/30 transition-all">
              <span className="font-display text-3xl text-primary/35 font-extrabold">04</span>
              <div className="flex flex-col gap-1.5">
                <h3 className="font-display text-lg text-on-surface font-bold">Testing & Go-Live</h3>
                <p className="text-xs text-outline leading-relaxed">
                  Uji coba komprehensif seluruh perangkat, audit keamanan SSL, transfer kepemilikan domain, dan panduan video pengelolaan situs.
                </p>
              </div>
              <div className="pt-2 flex items-center gap-1.5 text-xs text-tertiary font-medium">
                <Icon name="verified" className=" text-sm" />
                <span>Siap Menghasilkan Omset</span>
              </div>
            </div>
          </div>
        </section>

        {/* 5. PAKET HARGA & ESTIMASI INVESTASI OVERVIEW */}
        <section className="max-w-[1280px] mx-auto px-5 md:px-12 py-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div className="flex flex-col gap-1.5 max-w-xl">
              <span className="text-[11px] font-bold uppercase tracking-wider text-primary">
                Skema Investasi Terbuka
              </span>
              <h2 className="font-display text-3xl md:text-4xl text-on-surface font-bold">
                Investasi Transparan Tanpa Biaya Tersembunyi
              </h2>
            </div>
            <button
              onClick={() => onTabChange('paket-harga')}
              className="inline-flex items-center gap-1 text-primary text-sm font-semibold hover:underline"
            >
              <span>Buka Kalkulator & Detail Komparasi →</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {/* Starter */}
            <div className="p-6 rounded-2xl bg-surface-container-low flex flex-col justify-between shadow-sm border border-line">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] uppercase font-bold text-outline">
                    Entry-level
                  </span>
                  <h3 className="font-display text-xl text-on-surface font-bold">Starter Website</h3>
                  <p className="text-xs text-outline">
                    Cocok untuk usaha kecil yang baru mulai online.
                  </p>
                </div>
                <div className="flex items-baseline gap-1 py-2">
                  <span className="text-xs text-outline">Mulai</span>
                  <span className="font-display text-3xl font-extrabold text-on-surface">
                    Rp 500rb
                  </span>
                  <span className="text-xs text-outline">/sekali bayar</span>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-[11px] font-bold text-primary uppercase">
                    Fitur Termasuk:
                  </span>
                  <div className="flex items-center gap-2 text-xs text-on-surface-variant">
                    <Icon name="check" className=" text-primary text-base" />
                    <span>Landing page atau website sederhana</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-on-surface-variant">
                    <Icon name="check" className=" text-primary text-base" />
                    <span>Desain responsif</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-on-surface-variant">
                    <Icon name="check" className=" text-primary text-base" />
                    <span>Informasi produk dan layanan</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-on-surface-variant">
                    <Icon name="check" className=" text-primary text-base" />
                    <span>Tombol WhatsApp dan kontak</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-on-surface-variant">
                    <Icon name="check" className=" text-primary text-base" />
                    <span>SEO dasar & 2 kali revisi</span>
                  </div>
                </div>
              </div>
              <button
                onClick={onOpenConsultation}
                className="mt-8 w-full py-2.5 px-4 rounded-xl bg-surface-container-high text-on-surface font-semibold text-sm hover:bg-surface-container-highest transition-colors"
              >
                Pilih Paket Starter
              </button>
            </div>

            {/* Business Website (Featured) */}
            <div className="p-6 rounded-2xl bg-surface-container-high flex flex-col justify-between shadow-2xl relative border border-primary-container/40">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-0.5 rounded-full bg-primary-container text-on-primary-container text-[11px] font-bold tracking-wider uppercase shadow-md">
                Pilihan Terfavorit
              </div>
              <div className="flex flex-col gap-4 pt-2">
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] uppercase font-bold text-tertiary">
                    Prioritas
                  </span>
                  <h3 className="font-display text-xl text-on-surface font-bold">Business Website</h3>
                  <p className="text-xs text-outline">
                    Cocok untuk bisnis lokal yang ingin tampil profesional dan menerima pelanggan secara online.
                  </p>
                </div>
                <div className="flex items-baseline gap-1 py-2">
                  <span className="text-xs text-outline">Mulai</span>
                  <span className="font-display text-3xl font-extrabold text-primary">
                    Rp 1.5jt
                  </span>
                  <span className="text-xs text-outline">/sekali bayar</span>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-[11px] font-bold text-primary uppercase">
                    Fitur Termasuk:
                  </span>
                  <div className="flex items-center gap-2 text-xs text-on-surface font-medium">
                    <Icon name="check_circle" className=" text-tertiary text-base" />
                    <span>Company profile hingga 6 halaman</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-on-surface font-medium">
                    <Icon name="check_circle" className=" text-tertiary text-base" />
                    <span>Desain semi-custom</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-on-surface font-medium">
                    <Icon name="check_circle" className=" text-tertiary text-base" />
                    <span>Form kontak dan WhatsApp</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-on-surface font-medium">
                    <Icon name="check_circle" className=" text-tertiary text-base" />
                    <span>Katalog layanan atau produk</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-on-surface font-medium">
                    <Icon name="check_circle" className=" text-tertiary text-base" />
                    <span>SEO dasar & 3 kali revisi</span>
                  </div>
                </div>
              </div>
              <button
                onClick={onOpenConsultation}
                className="mt-8 w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-primary-container to-secondary-container text-white font-semibold text-sm shadow-lg hover:scale-[1.02] transition-transform"
              >
                Mulai Proyek Business Website
              </button>
            </div>

            {/* Business System */}
            <div className="p-6 rounded-2xl bg-surface-container-low flex flex-col justify-between shadow-sm border border-line">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] uppercase font-bold text-outline">
                    Full-stack
                  </span>
                  <h3 className="font-display text-xl text-on-surface font-bold">
                    Business System
                  </h3>
                  <p className="text-xs text-outline">
                    Cocok untuk bisnis yang ingin mengelola operasional melalui aplikasi web.
                  </p>
                </div>
                <div className="flex items-baseline gap-1 py-2">
                  <span className="text-xs text-outline">Mulai</span>
                  <span className="font-display text-3xl font-extrabold text-on-surface">
                    Rp 3jt
                  </span>
                  <span className="text-xs text-outline">/sesuai spek</span>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-[11px] font-bold text-primary uppercase">
                    Kapasitas Khusus:
                  </span>
                  <div className="flex items-center gap-2 text-xs text-on-surface-variant">
                    <Icon name="check" className=" text-primary text-base" />
                    <span>Login dan hak akses pengguna</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-on-surface-variant">
                    <Icon name="check" className=" text-primary text-base" />
                    <span>Database dan CRUD</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-on-surface-variant">
                    <Icon name="check" className=" text-primary text-base" />
                    <span>Dashboard admin</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-on-surface-variant">
                    <Icon name="check" className=" text-primary text-base" />
                    <span>Pengelolaan data & laporan dasar</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-on-surface-variant">
                    <Icon name="check" className=" text-primary text-base" />
                    <span>Dokumentasi, pelatihan & pengujian fungsional</span>
                  </div>
                </div>
              </div>
              <button
                onClick={onOpenConsultation}
                className="mt-8 w-full py-2.5 px-4 rounded-xl bg-surface-container-high text-on-surface font-semibold text-sm hover:bg-surface-container-highest transition-colors"
              >
                Diskusikan Kebutuhan Sistem
              </button>
            </div>
          </div>
        </section>

        {/* 6. TESTIMONI KLIEN with LazyImage */}
        <section className="max-w-[1280px] mx-auto px-5 md:px-12 py-16">
          <div className="text-center max-w-2xl mx-auto mb-12 flex flex-col gap-1.5">
            <span className="text-[11px] font-bold uppercase tracking-wider text-primary">
              Pengalaman Nyata Mitra
            </span>
            <h2 className="font-display text-3xl md:text-4xl text-on-surface font-bold">
              Apa Kata Klien yang Telah Bertumbuh Bersama KeuvaWeb
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Testi 1 */}
            <div className="p-6 rounded-2xl bg-surface-container-low flex flex-col justify-between shadow-sm border border-line">
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-1 text-tertiary">
                  {[...Array(5)].map((_, i) => (
                    <Icon
                      key={i}
                      name="star"
                      className="text-sm"
                      filled
                    />
                  ))}
                </div>
                <p className="text-sm text-on-surface-variant italic leading-relaxed">
                  “Sejak website baru kami rilis oleh KeuvaWeb, konversi leads dari iklan Google naik lebih dari 200%. Load speed-nya instan saat dibuka dari HP, klien tender kami pun sangat memuji profesionalitas desainnya.”
                </p>
              </div>
              <div className="flex items-center gap-3 pt-6 mt-6 border-t border-line">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-surface-container-high shrink-0">
                  <LazyImage
                    src="/images/testi-hendrawan.webp"
                    alt="Hendrawan Pratama"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-on-surface">Hendrawan Pratama</span>
                  <span className="text-xs text-outline">
                    Direktur Operasional, PT Finansia Solusi
                  </span>
                </div>
              </div>
            </div>

            {/* Testi 2 */}
            <div className="p-6 rounded-2xl bg-surface-container-low flex flex-col justify-between shadow-sm border border-line">
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-1 text-tertiary">
                  {[...Array(5)].map((_, i) => (
                    <Icon
                      key={i}
                      name="star"
                      className="text-sm"
                      filled
                    />
                  ))}
                </div>
                <p className="text-sm text-on-surface-variant italic leading-relaxed">
                  “Sebelumnya pakai template WordPress biasa sering error dan lemot. Tim KeuvaWeb mengubah arsitektur toko kami ke Headless Shopify. Checkout kilat bikin abandon cart kami berkurang 40%!”
                </p>
              </div>
              <div className="flex items-center gap-3 pt-6 mt-6 border-t border-line">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-surface-container-high shrink-0">
                  <LazyImage
                    src="/images/testi-clarissa.webp"
                    alt="Clarissa Novita"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-on-surface">Clarissa Novita</span>
                  <span className="text-xs text-outline">Founder, AURA Label</span>
                </div>
              </div>
            </div>

            {/* Testi 3 */}
            <div className="p-6 rounded-2xl bg-surface-container-low flex flex-col justify-between shadow-sm border border-line">
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-1 text-tertiary">
                  {[...Array(5)].map((_, i) => (
                    <Icon
                      key={i}
                      name="star"
                      className="text-sm"
                      filled
                    />
                  ))}
                </div>
                <p className="text-sm text-on-surface-variant italic leading-relaxed">
                  “Proses koordinasi luar biasa tertata. Deadline terpenuhi tepat waktu tanpa drama revisi tak berujung. Dashboard CMS yang disediakan sangat mudah diedit oleh tim admin kami sendiri.”
                </p>
              </div>
              <div className="flex items-center gap-3 pt-6 mt-6 border-t border-line">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-surface-container-high shrink-0">
                  <LazyImage
                    src="/images/testi-bambang.webp"
                    alt="Ir. Bambang Sudirman"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-on-surface">
                    Ir. Bambang Sudirman
                  </span>
                  <span className="text-xs text-outline">
                    Komisaris, Mitra Perkasa Teknik
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. INTERACTIVE FAQ ACCORDION */}
        <section className="max-w-[880px] mx-auto px-5 md:px-12 py-16">
          <div className="text-center mb-12 flex flex-col gap-1.5">
            <span className="text-[11px] font-bold uppercase tracking-wider text-primary">
              Tanya Jawab Seputar Layanan
            </span>
            <h2 className="font-display text-3xl md:text-4xl text-on-surface font-bold">
              Pertanyaan yang Sering Diajukan (FAQ)
            </h2>
          </div>

          <div className="flex flex-col gap-4">
            {faqData.map((item, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                  className="p-5 md:p-6 rounded-2xl bg-surface-container-low transition-colors cursor-pointer border border-line hover:border-primary-container/20"
                >
                  <div className="flex items-center justify-between gap-4">
                    <h4 className="font-display text-base md:text-lg text-on-surface font-semibold">
                      {item.q}
                    </h4>
                    <Icon
                      name="expand_more"
                      className={`text-primary transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : 'rotate-0'
                      }`}
                    />
                  </div>
                  {isOpen && (
                    <div className="pt-4 text-sm text-on-surface-variant leading-relaxed border-t border-line mt-3 animate-in fade-in duration-200">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* 8. FINAL HIGH-CONVERSION BANNER & MINI INITIATION FORM */}
        <section className="max-w-[1280px] mx-auto px-5 md:px-12 pt-12 pb-24" id="konsultasi">
          <div className="rounded-3xl bg-surface-container-high p-6 md:p-12 shadow-2xl relative overflow-hidden border border-line-strong">
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary-container/20 rounded-full blur-3xl pointer-events-none" />
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative">
              {/* Text left */}
              <div className="lg:col-span-6 flex flex-col gap-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-tertiary-container/25 text-tertiary text-xs font-semibold self-start border border-line">
                  <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse"></span>
                  <span>Slot Pengerjaan Proyek Baru Terbuka</span>
                </div>
                <h2 className="font-display text-3xl md:text-4xl text-on-surface font-bold leading-tight">
                  Siap Memiliki Website Kelas Dunia yang Menghasilkan Pertumbuhan Nyata?
                </h2>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  Tinggalkan pesan Anda di formulir ini atau konsultasi langsung dengan lead developer kami. Dapatkan audit gratis website lama atau estimasi roadmap proyek baru Anda dalam kurun 24 jam.
                </p>
                <div className="flex flex-col gap-3 pt-2">
                  <div className="flex items-center gap-3">
                    <Icon name="bolt" className=" text-primary text-xl" />
                    <span className="text-sm text-on-surface font-medium">
                      Estimasi Rencana & Penawaran dalam 24 Jam Kerja
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="lock" className=" text-primary text-xl" />
                    <span className="text-sm text-on-surface font-medium">
                      Data & Ide Bisnis Dijamin Kerahasiaannya (NDA Ready)
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="thumb_up" className=" text-primary text-xl" />
                    <span className="text-sm text-on-surface font-medium">
                      Tanpa Komitmen Awal, Diskusi 100% Bebas Biaya
                    </span>
                  </div>
                </div>
                {/* Direct WA Button */}
                <div className="pt-2">
                  <a
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-surface-container-low text-on-surface text-xs font-semibold hover:text-tertiary transition-colors border border-line"
                    href="https://wa.me/6281298432865"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <Icon name="chat" className=" text-base text-success" />
                    <span>Atau Chat Langsung ke WhatsApp Studio →</span>
                  </a>
                </div>
              </div>

              {/* Mini Form right */}
              <div className="lg:col-span-6 bg-surface-container-lowest/85 backdrop-blur-xl p-6 md:p-8 rounded-2xl shadow-xl border border-line-strong">
                <h3 className="font-display text-xl text-on-surface font-bold mb-1">
                  Formulir Konsultasi Kilat
                </h3>
                <p className="text-xs text-outline mb-6">
                  Isi data ringkas di bawah ini, tim kami akan merespons melalui WhatsApp/Email hari ini.
                </p>

                {formSubmitted ? (
                  <div className="p-6 rounded-xl bg-surface-container-low text-center border border-primary-container/30 animate-in fade-in duration-300">
                    <Icon name="check_circle" className=" text-4xl text-tertiary mb-2" />
                    <h4 className="font-display text-lg text-on-surface font-bold mb-1">
                      {channel === 'webhook'
                        ? 'Terima Kasih!'
                        : 'Selesaikan Kirim via WhatsApp'}
                    </h4>
                    <p className="text-xs text-on-surface-variant leading-relaxed mb-4">
                      {channel === 'webhook'
                        ? 'Data proyek Anda sudah kami terima. Tim KeuvaWeb akan segera menghubungi nomor WhatsApp Anda dalam kurun beberapa jam.'
                        : 'Agar data Anda benar-benar masuk ke tim kami, kirim pesan WhatsApp berikut — pesannya sudah kami isi lengkap dengan detail formulir Anda.'}
                    </p>
                    <div className="flex flex-col items-center gap-3">
                      <a
                        href={waLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-success hover:brightness-110 text-white text-xs font-bold shadow-lg transition-all"
                      >
                        <Icon name="chat" className=" text-base" />
                        <span>
                          {channel === 'webhook'
                            ? 'Lanjut ke WhatsApp'
                            : 'Kirim Data via WhatsApp'}
                        </span>
                      </a>
                      <button
                        onClick={resetForm}
                        className="text-xs font-semibold text-primary hover:underline"
                      >
                        Kirim Pesan Lainnya
                      </button>
                    </div>
                  </div>
                ) : (
                  <form className="flex flex-col gap-4" onSubmit={handleFormSubmit}>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold text-on-surface" htmlFor="clientName">
                        Nama Lengkap / Perusahaan
                      </label>
                      <input
                        className="px-4 py-2.5 rounded-xl bg-surface-container text-on-surface placeholder:text-outline/50 border border-line-strong focus:outline-none focus:ring-2 focus:ring-primary-container text-sm"
                        id="clientName"
                        placeholder="Contoh: Rian - PT Surya Nusantara"
                        required
                        type="text"
                        value={formName}
                        onChange={(e) => setFormName(e.target.value)}
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-semibold text-on-surface" htmlFor="clientWa">
                          Nomor WhatsApp Aktif
                        </label>
                        <input
                          className="px-4 py-2.5 rounded-xl bg-surface-container text-on-surface placeholder:text-outline/50 border border-line-strong focus:outline-none focus:ring-2 focus:ring-primary-container text-sm font-mono"
                          id="clientWa"
                          placeholder="Contoh: 081298432865"
                          required
                          type="tel"
                          value={formWa}
                          onChange={(e) => setFormWa(e.target.value)}
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label
                          className="text-xs font-semibold text-on-surface"
                          htmlFor="clientEmail"
                        >
                          Alamat Email Bisnis
                        </label>
                        <input
                          className="px-4 py-2.5 rounded-xl bg-surface-container text-on-surface placeholder:text-outline/50 border border-line-strong focus:outline-none focus:ring-2 focus:ring-primary-container text-sm"
                          id="clientEmail"
                          placeholder="nama@domain.com"
                          required
                          type="email"
                          value={formEmail}
                          onChange={(e) => setFormEmail(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label
                        className="text-xs font-semibold text-on-surface"
                        htmlFor="projectType"
                      >
                        Jenis Kebutuhan Website
                      </label>
                      <select
                        className="px-4 py-2.5 rounded-xl bg-surface-container text-on-surface border border-line-strong focus:outline-none focus:ring-2 focus:ring-primary-container text-sm"
                        id="projectType"
                        value={formType}
                        onChange={(e) => setFormType(e.target.value)}
                      >
                        <option value="landing">Landing Page Konversi Tinggi (Iklan Ads)</option>
                        <option value="compro">Company Profile Profesional (B2B / Bisnis)</option>
                        <option value="ecommerce">Toko Online Modern (Fast Checkout)</option>
                        <option value="custom">Aplikasi Web Kustom / Portal SaaS</option>
                        <option value="redesign">Redesain & Percepat Website Lama</option>
                      </select>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label
                        className="text-xs font-semibold text-on-surface"
                        htmlFor="clientNotes"
                      >
                        Ringkasan Kebutuhan / Link Website Lama
                      </label>
                      <textarea
                        className="px-4 py-2.5 rounded-xl bg-surface-container text-on-surface placeholder:text-outline/50 border border-line-strong focus:outline-none focus:ring-2 focus:ring-primary-container text-sm resize-none"
                        id="clientNotes"
                        placeholder="Ceritakan tujuan situs Anda, fitur utama, atau kendala situs lama..."
                        rows={3}
                        value={formNotes}
                        onChange={(e) => setFormNotes(e.target.value)}
                      />
                    </div>

                    <input
                      type="text"
                      value={honeypot}
                      onChange={(e) => setHoneypot(e.target.value)}
                      className="hidden"
                      tabIndex={-1}
                      autoComplete="off"
                      aria-hidden="true"
                    />

                    {error && (
                      <p className="text-xs text-danger bg-danger/10 border border-danger/30 rounded-xl px-4 py-3">
                        {error}
                      </p>
                    )}

                    <button
                      className="mt-2 w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-gradient-to-r from-primary-container to-secondary-container text-white font-semibold text-sm shadow-[0_8px_20px_-4px_rgba(77,142,255,0.4)] hover:brightness-110 active:scale-[0.99] transition-all disabled:opacity-50"
                      disabled={isSubmitting}
                      type="submit"
                    >
                      {isSubmitting ? (
                        <>
                          <Icon name="progress_activity" className=" text-base animate-spin" />
                          <span>Memproses Permintaan...</span>
                        </>
                      ) : (
                        <>
                          <span>Kirim Permintaan Konsultasi</span>
                          <Icon name="send" className=" text-sm" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
