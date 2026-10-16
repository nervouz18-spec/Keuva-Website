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
      a: 'Untuk paket Starter Website selesai dalam 3 hingga 7 hari kerja. Paket Business Website rata-rata memerlukan 7 hingga 14 hari kerja. Proyek Business System atau aplikasi web kustom memerlukan 2 hingga 5 minggu, disesuaikan dengan kelengkapan materi dan integrasi sistem.',
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
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[720px] h-[480px] bg-[#4d8eff]/15 rounded-full blur-[140px] pointer-events-none -z-10" />
        <div className="absolute top-[680px] right-0 w-[540px] h-[540px] bg-[#009eb9]/10 rounded-full blur-[160px] pointer-events-none -z-10" />
        <div className="absolute top-[2100px] left-0 w-[600px] h-[600px] bg-[#3131c0]/15 rounded-full blur-[180px] pointer-events-none -z-10" />

        {/* 1. HERO SECTION */}
        <section className="max-w-[1280px] mx-auto px-5 md:px-12 pt-12 md:pt-16 pb-12">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            {/* Live status badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#262a35] text-[#adc6ff] text-xs font-medium shadow-sm mb-6 border border-white/5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4cd7f6] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#4cd7f6]"></span>
              </span>
              <span className="text-[#dfe2f1]">
                Solusi Web Rekayasa Presisi #1 untuk Bisnis & Startup Modern
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl text-[#dfe2f1] font-extrabold tracking-tight mb-6 leading-tight md:leading-[1.15]">
              Website Cepat, Elegan, dan Dirancang untuk{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#adc6ff] via-[#4d8eff] to-[#4cd7f6]">
                Meningkatkan Omset
              </span>{' '}
              Bisnis Anda
            </h1>

            {/* Subheadline */}
            <p className="text-base md:text-lg text-[#c2c6d6] max-w-2xl mb-10 leading-relaxed">
              Kami merekayasa arsitektur web performa tinggi dengan skor PageSpeed 95+, UX persuasif berorientasi konversi, serta infrastruktur cloud modern yang memacu pertumbuhan pendapatan perusahaan Anda.
            </p>

            {/* CTA Cluster */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-12">
              <button
                onClick={onOpenConsultation}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#4d8eff] to-[#3131c0] text-white font-semibold text-sm shadow-[0_12px_28px_-6px_rgba(77,142,255,0.45)] hover:scale-[1.02] active:scale-[0.98] transition-transform"
              >
                <span>Mulai Konsultasi Proyek (Gratis)</span>
                <Icon name="arrow_forward" className=" text-base" />
              </button>
              <button
                onClick={() => onTabChange('portofolio')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-[#262a35] text-[#dfe2f1] font-semibold text-sm hover:bg-[#313540] transition-colors shadow-sm border border-white/5"
              >
                <Icon name="dashboard_customize" className=" text-base text-[#4cd7f6]" />
                <span>Lihat Portofolio Karya</span>
              </button>
            </div>

            {/* Key Metrics Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 w-full pt-6 bg-[#171b26]/70 backdrop-blur-xl p-6 rounded-2xl shadow-xl border border-white/5">
              <div className="flex flex-col items-center">
                <span className="font-display text-2xl md:text-3xl font-bold text-[#adc6ff] tabular-nums">
                  150+
                </span>
                <span className="text-xs text-[#8c909f] mt-1">Website Diluncurkan</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-display text-2xl md:text-3xl font-bold text-[#4cd7f6] tabular-nums">
                  &lt; 0.8s
                </span>
                <span className="text-xs text-[#8c909f] mt-1">LCP Load Speed</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-display text-2xl md:text-3xl font-bold text-[#adc6ff] tabular-nums">
                  99.8%
                </span>
                <span className="text-xs text-[#8c909f] mt-1">Uptime Garansi SLA</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="flex items-center gap-1">
                  <span className="font-display text-2xl md:text-3xl font-bold text-[#dfe2f1] tabular-nums">
                    4.9
                  </span>
                  <Icon name="star" className=" text-[#4cd7f6] text-xl" filled />
                </div>
                <span className="text-xs text-[#8c909f] mt-1">80+ Klien Puas</span>
              </div>
            </div>
          </div>

          {/* Hero Visual Mockup Preview with LazyImage */}
          <div className="mt-12 relative">
            <div className="w-full rounded-2xl bg-[#262a35] shadow-[0_24px_50px_rgba(0,0,0,0.6)] overflow-hidden border border-white/10">
              {/* Browser top bar */}
              <div className="h-10 bg-[#313540] px-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#ffb4ab]/80"></span>
                  <span className="w-3 h-3 rounded-full bg-[#4d8eff]/80"></span>
                  <span className="w-3 h-3 rounded-full bg-[#4cd7f6]/80"></span>
                </div>
                <div className="px-4 py-1 rounded bg-[#1c1f2a] text-xs font-mono text-[#c2c6d6] flex items-center gap-1.5 border border-white/5">
                  <Icon name="lock" className=" text-sm text-[#4cd7f6]" />
                  <span>https://keuva.shop/enterprise-showcase</span>
                </div>
                <div className="flex items-center gap-2 text-[#8c909f]">
                  <Icon name="more_vert" className=" text-sm" />
                </div>
              </div>

              {/* Mockup screen with priority lazy loading */}
              <div className="relative h-[300px] sm:h-[420px] md:h-[500px] w-full bg-[#0a0e18]">
                <LazyImage
                  priority={true}
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1-_42YL_WCboVhMOszZn7E6x8VYPekIvkxO2zvLgBs8rcrkULFoLipaH3f0kXe9KZ4ye7s4ob7sIhB-hwNnToVfDJC-5LyxaaiVrk0baDjpPCqDQE3scg2-TjfJ2xlQpnLrcyIbyc-doz5TITFR9VtijQGDHMq7y5J9-YNLM515vjzbFKco63RgCN0ssaWoe4mDPMFszt6zEaTLkKHTMas2rrIGMSkDMS0fEg9coEUtC81mGxZvaZ"
                  alt="Enterprise Dashboard Showcase Mockup"
                  className="w-full h-full object-cover"
                />

                {/* Floating Live Stat Pill */}
                <div className="absolute bottom-6 left-6 hidden sm:flex items-center gap-3 bg-[#171b26]/90 backdrop-blur-md px-4 py-3 rounded-xl shadow-xl border border-white/10">
                  <div className="w-9 h-9 rounded-lg bg-[#adc6ff]/20 flex items-center justify-center text-[#adc6ff]">
                    <Icon name="speed" className=" text-xl" />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-[10px] font-bold tracking-wider uppercase text-[#8c909f]">
                      Google PageSpeed
                    </span>
                    <span className="text-xs font-bold text-[#dfe2f1]">
                      Skor 99/100 (Core Web Vitals Pass)
                    </span>
                  </div>
                </div>

                {/* Floating Tech Badges */}
                <div className="absolute top-6 right-6 flex items-center gap-2">
                  <span className="px-3 py-1 rounded-md bg-[#171b26]/90 backdrop-blur-md text-xs font-semibold text-[#adc6ff] shadow-sm border border-white/10">
                    Next.js 15
                  </span>
                  <span className="px-3 py-1 rounded-md bg-[#171b26]/90 backdrop-blur-md text-xs font-semibold text-[#4cd7f6] shadow-sm border border-white/10">
                    Tailwind v4
                  </span>
                  <span className="px-3 py-1 rounded-md bg-[#171b26]/90 backdrop-blur-md text-xs font-semibold text-[#c0c1ff] shadow-sm border border-white/10">
                    Headless CMS
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TRUSTED CLIENTS / TECH MARQUEE */}
        <div className="w-full bg-[#0a0e18] py-8 border-y border-white/5">
          <div className="max-w-[1280px] mx-auto px-5 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#8c909f] whitespace-nowrap">
              Dipercaya oleh Perusahaan & Brand Inovatif
            </span>
            <div className="flex flex-wrap items-center justify-center gap-8 opacity-65 hover:opacity-100 transition-opacity">
              <span className="font-display text-lg font-extrabold text-[#dfe2f1] tracking-tighter">
                NEXAFIN
              </span>
              <span className="font-display text-lg font-extrabold text-[#dfe2f1] tracking-tighter">
                AEROTRACK
              </span>
              <span className="font-display text-lg font-extrabold text-[#dfe2f1] tracking-tighter">
                LOGIKATECH
              </span>
              <span className="font-display text-lg font-extrabold text-[#dfe2f1] tracking-tighter">
                KINETIC.ID
              </span>
              <span className="font-display text-lg font-extrabold text-[#dfe2f1] tracking-tighter">
                VENTURAPAY
              </span>
            </div>
          </div>
        </div>

        {/* 2. LAYANAN UNGGULAN */}
        <section className="max-w-[1280px] mx-auto px-5 md:px-12 py-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div className="max-w-xl flex flex-col gap-1.5">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#adc6ff]">
                Kategori Spesialisasi
              </span>
              <h2 className="font-display text-3xl md:text-4xl text-[#dfe2f1] font-bold">
                Layanan Rekayasa Website Konversi Tertinggi
              </h2>
            </div>
            <p className="text-sm text-[#c2c6d6] max-w-md leading-relaxed">
              Kami memadukan psikologi konversi visual dengan kode bersih modular tanpa bloatware pihak ketiga yang memperlambat penjualan Anda.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="p-6 rounded-2xl bg-[#171b26] flex flex-col justify-between hover:bg-[#1c1f2a] transition-all group shadow-sm border border-white/5">
              <div className="flex flex-col gap-4">
                <div className="w-14 h-14 rounded-xl bg-[#4d8eff]/20 text-[#adc6ff] flex items-center justify-center">
                  <Icon name="rocket_launch" className=" text-2xl" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#4cd7f6]">
                    Pertumbuhan Iklan
                  </span>
                  <h3 className="font-display text-xl text-[#dfe2f1] font-bold group-hover:text-[#adc6ff] transition-colors">
                    Landing Page Konversi Tinggi
                  </h3>
                  <p className="text-xs text-[#8c909f] leading-relaxed">
                    Dirancang khusus untuk kampanye Meta Ads & Google Ads. Mengeliminasi distraksi dan memaksimalkan klik pembelian atau form leads.
                  </p>
                </div>
                <div className="flex flex-col gap-2 pt-2">
                  <div className="flex items-center gap-2 text-xs text-[#c2c6d6]">
                    <Icon name="check_circle" className=" text-[#4cd7f6] text-base" />
                    <span>Struktur Copywriting Persuasif AIDA</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#c2c6d6]">
                    <Icon name="check_circle" className=" text-[#4cd7f6] text-base" />
                    <span>Optimasi Kecepatan Mobile First (&lt;1s)</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#c2c6d6]">
                    <Icon name="check_circle" className=" text-[#4cd7f6] text-base" />
                    <span>Integrasi Pelacak Pixel & CAPI Akurat</span>
                  </div>
                </div>
              </div>
              <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase font-bold text-[#8c909f]">
                    Durasi Pengerjaan
                  </span>
                  <span className="text-sm font-semibold text-[#dfe2f1]">3 - 7 Hari Kerja</span>
                </div>
                <button
                  onClick={onOpenConsultation}
                  className="w-10 h-10 rounded-full bg-[#262a35] flex items-center justify-center text-[#dfe2f1] hover:bg-[#4d8eff] hover:text-[#00285d] transition-colors"
                >
                  <Icon name="arrow_forward" className=" text-sm" />
                </button>
              </div>
            </div>

            {/* Card 2 (Featured highlight) */}
            <div className="p-6 rounded-2xl bg-[#262a35] flex flex-col justify-between shadow-xl relative overflow-hidden group border border-[#4d8eff]/30">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#4d8eff]/10 rounded-full blur-2xl pointer-events-none" />
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-xl bg-[#4d8eff] text-[#00285d] flex items-center justify-center shadow-md">
                    <Icon name="domain" className=" text-2xl" />
                  </div>
                  <span className="px-3 py-1 rounded bg-[#4d8eff]/20 text-[#adc6ff] text-xs font-semibold">
                    Paling Diminati
                  </span>
                </div>
                <div className="flex flex-col gap-1.5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#4cd7f6]">
                    Otoritas Merek
                  </span>
                  <h3 className="font-display text-xl text-[#dfe2f1] font-bold group-hover:text-[#adc6ff] transition-colors">
                    Company Profile Profesional
                  </h3>
                  <p className="text-xs text-[#8c909f] leading-relaxed">
                    Representasi digital kelas atas bagi B2B, korporasi, manufaktur, dan konsultan yang ingin memenangkan tender bernilai tinggi.
                  </p>
                </div>
                <div className="flex flex-col gap-2 pt-2">
                  <div className="flex items-center gap-2 text-xs text-[#dfe2f1]">
                    <Icon name="check_circle" className=" text-[#4cd7f6] text-base" />
                    <span>Desain Kustom Eksklusif (Tanpa Template Basi)</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#dfe2f1]">
                    <Icon name="check_circle" className=" text-[#4cd7f6] text-base" />
                    <span>Sistem CMS Mandiri yang Ramah Pengguna</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#dfe2f1]">
                    <Icon name="check_circle" className=" text-[#4cd7f6] text-base" />
                    <span>Optimasi SEO On-Page Struktur Schema B2B</span>
                  </div>
                </div>
              </div>
              <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase font-bold text-[#8c909f]">
                    Durasi Pengerjaan
                  </span>
                  <span className="text-sm font-semibold text-[#dfe2f1]">10 - 18 Hari Kerja</span>
                </div>
                <button
                  onClick={onOpenConsultation}
                  className="w-10 h-10 rounded-full bg-[#4d8eff] text-[#00285d] flex items-center justify-center hover:bg-[#adc6ff] transition-colors"
                >
                  <Icon name="arrow_forward" className=" text-sm font-bold" />
                </button>
              </div>
            </div>

            {/* Card 3 */}
            <div className="p-6 rounded-2xl bg-[#171b26] flex flex-col justify-between hover:bg-[#1c1f2a] transition-all group shadow-sm border border-white/5">
              <div className="flex flex-col gap-4">
                <div className="w-14 h-14 rounded-xl bg-[#009eb9]/25 text-[#4cd7f6] flex items-center justify-center">
                  <Icon name="shopping_cart_checkout" className=" text-2xl" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#4cd7f6]">
                    Skala & Transaksi
                  </span>
                  <h3 className="font-display text-xl text-[#dfe2f1] font-bold group-hover:text-[#adc6ff] transition-colors">
                    Toko Online & Custom Web App
                  </h3>
                  <p className="text-xs text-[#8c909f] leading-relaxed">
                    Sistem belanja mulus terintegrasi payment gateway lokal (Midtrans/Xendit), otomatisasi ongkir, serta platform portal data kustom.
                  </p>
                </div>
                <div className="flex flex-col gap-2 pt-2">
                  <div className="flex items-center gap-2 text-xs text-[#c2c6d6]">
                    <Icon name="check_circle" className=" text-[#4cd7f6] text-base" />
                    <span>Checkout Kilat 1-Halaman Tanpa Ribet</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#c2c6d6]">
                    <Icon name="check_circle" className=" text-[#4cd7f6] text-base" />
                    <span>Integrasi WhatsApp Notifikasi Otomatis</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#c2c6d6]">
                    <Icon name="check_circle" className=" text-[#4cd7f6] text-base" />
                    <span>Dashboard Analitik Penjualan Real-Time</span>
                  </div>
                </div>
              </div>
              <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase font-bold text-[#8c909f]">
                    Durasi Pengerjaan
                  </span>
                  <span className="text-sm font-semibold text-[#dfe2f1]">14 - 30 Hari Kerja</span>
                </div>
                <button
                  onClick={onOpenConsultation}
                  className="w-10 h-10 rounded-full bg-[#262a35] flex items-center justify-center text-[#dfe2f1] hover:bg-[#4d8eff] hover:text-[#00285d] transition-colors"
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
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#adc6ff]">
                Bukti Nyata Dampak Bisnis
              </span>
              <h2 className="font-display text-3xl md:text-4xl text-[#dfe2f1] font-bold">
                Karya Unggulan yang Menghasilkan Rekor Omset
              </h2>
            </div>
            <button
              onClick={() => onTabChange('portofolio')}
              className="inline-flex items-center gap-1.5 text-[#adc6ff] text-sm font-semibold hover:text-white transition-colors"
            >
              <span>Lihat Semua Studi Kasus</span>
              <Icon name="arrow_forward" className=" text-base" />
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Case 1 (Span 7) with LazyImage */}
            <div className="lg:col-span-7 p-6 rounded-2xl bg-[#171b26] flex flex-col justify-between shadow-lg border border-white/5 group">
              <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden mb-5 bg-[#1c1f2a]">
                <LazyImage
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGlqkOCosPVRXvYZM96ctk1kfiU2dzybng0itMHy8JNC3MNvIFee-eIxgD_B3gPylXejYsQEjFrafzIedcD-JejQDaDoRge-ZkrTiTGX3H0U8AkX1ZvgTHgqb6WZjjUlcqqNWey0mhRT0AfIJcmarvAJRHT2KrjFxfuEv8vfW61_C49YrFBEjSyWlvJFgguC7JX0BpbIjh-GvNYJEUm138Z29_G_XpOHq5AlJLtcd_tWhu4SHYWIqk"
                  alt="PT Finansia Solusi Nusantara web architecture"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-[#0a0e18]/90 backdrop-blur-md px-3 py-1 rounded-full text-xs text-[#adc6ff] font-bold border border-white/10">
                  Fintech & B2B SaaS
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <span className="px-2.5 py-1 rounded bg-[#009eb9]/25 text-[#4cd7f6] text-xs font-bold">
                    +240% Pertumbuhan Leads
                  </span>
                  <span className="text-[#8c909f] text-xs">Waktu Muat: 0.62 detik</span>
                </div>
                <h3 className="font-display text-xl text-[#dfe2f1] font-bold">
                  PT Finansia Solusi Nusantara - Arsitektur Web Portal B2B
                </h3>
                <p className="text-sm text-[#c2c6d6] leading-relaxed">
                  Pembaruan menyeluruh struktur visual dan performa tech-stack menghasilkan peningkatan drastis pada formulir reservasi demo institusional dari eksekutif perbankan nasional.
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  <span className="px-2.5 py-1 rounded bg-[#1c1f2a] text-xs text-[#8c909f] border border-white/5">
                    Next.js 14
                  </span>
                  <span className="px-2.5 py-1 rounded bg-[#1c1f2a] text-xs text-[#8c909f] border border-white/5">
                    HubSpot CRM Sync
                  </span>
                  <span className="px-2.5 py-1 rounded bg-[#1c1f2a] text-xs text-[#8c909f] border border-white/5">
                    Tailwind CSS
                  </span>
                </div>
              </div>
            </div>

            {/* Case 2 (Span 5) with LazyImage */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-[#171b26] flex flex-col justify-between shadow-lg border border-white/5 group">
              <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden mb-5 bg-[#1c1f2a]">
                <LazyImage
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6ilC_ZCNAgpaDOIGyk7_-sr88MzHzVpnB3NlTEhCLP5gudCvlBw-ZhO9SPp9Ej9YkqmQLk9fg25NlrmNqpUcbVUCq2Cv4Da4Qk10Y3FT0Kq26VUPTvcfx_Acswmap1gTUZdfUVYRtdT4ull3W29Sl21KAPax6lEf68m2cdomfZEHoDD7dw-3VQnsh8f85uEMynfojICTixtNqXMucAo7W9CPRlROKMsDHynScdyrcyzE2KcUdFaMy"
                  alt="AURA Label fast online store redesign"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-[#0a0e18]/90 backdrop-blur-md px-3 py-1 rounded-full text-xs text-[#c0c1ff] font-bold border border-white/10">
                  Luxury DTC E-Commerce
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <span className="px-2.5 py-1 rounded bg-[#4d8eff]/20 text-[#adc6ff] text-xs font-bold">
                    +185% Nilai Checkout
                  </span>
                  <span className="text-[#8c909f] text-xs">Bounce Rate: Turun 42%</span>
                </div>
                <h3 className="font-display text-xl text-[#dfe2f1] font-bold">
                  AURA Label - Replatforming Toko Online & Fast Checkout
                </h3>
                <p className="text-sm text-[#c2c6d6] leading-relaxed">
                  Redesain toko daring berfokus pada checkout kilat 1-klik dan pengalaman katalog visual mobile interaktif dengan zero lag.
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  <span className="px-2.5 py-1 rounded bg-[#1c1f2a] text-xs text-[#8c909f] border border-white/5">
                    Headless Shopify
                  </span>
                  <span className="px-2.5 py-1 rounded bg-[#1c1f2a] text-xs text-[#8c909f] border border-white/5">
                    Midtrans Gateway
                  </span>
                </div>
              </div>
            </div>

            {/* Case 3 (Span 12 - Full Wide banner) with LazyImage */}
            <div className="lg:col-span-12 p-6 md:p-8 rounded-2xl bg-[#262a35] flex flex-col lg:flex-row items-center gap-8 shadow-xl border border-white/10">
              <div className="w-full lg:w-1/2 relative h-64 md:h-80 rounded-xl overflow-hidden bg-[#1c1f2a]">
                <LazyImage
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSBUWBrQ24tb9S2UGzYvXjmT24pT5bpQKGsA0skKY9YvOSlXzeybiWmfzitu0re_nSR3TOBlMRWQq9GWsV1wyqqBr35rKJvvIID_gcAR_DpLim89fv5u0Bl5h6RoOLaPBQC0p7Pgom39TB2Lssm79H7uDLOkjSizRuZDTrs5edoq4Gm2sEcsui7jNNuWPjHJTjsQIZSY0p6i-bx6fAPUSpph_eZjjjpC0PCC5-x7dY2eiVlL-msGmh"
                  alt="PT Mitra Perkasa Teknik Heavy Industry"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full lg:w-1/2 flex flex-col gap-4">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#009eb9]/25 text-[#4cd7f6] text-xs font-semibold self-start">
                  Manufaktur & Heavy Industry
                </div>
                <h3 className="font-display text-2xl md:text-3xl text-[#dfe2f1] font-bold">
                  PT Mitra Perkasa Teknik - Company Profile Ekspor Internasional
                </h3>
                <p className="text-sm text-[#c2c6d6] leading-relaxed">
                  Mentransformasi profil perusahaan konvensional menjadi etalase kapabilitas industri multibahasa yang dipercaya buyer dari 7 negara mitra di Asia Pasifik.
                </p>
                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-[#1c1f2a] border border-white/5">
                    <span className="font-display text-xl font-bold text-[#adc6ff]">#1 Rank</span>
                    <p className="text-xs text-[#8c909f] mt-1">Google Keyword Industri Utama</p>
                  </div>
                  <div className="p-4 rounded-xl bg-[#1c1f2a] border border-white/5">
                    <span className="font-display text-xl font-bold text-[#4cd7f6]">300%</span>
                    <p className="text-xs text-[#8c909f] mt-1">Kenaikan Lead Enquiry Ekspor</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. ALUR KERJA (4 LANGKAH MUDAH) */}
        <section className="max-w-[1280px] mx-auto px-5 md:px-12 py-16">
          <div className="text-center max-w-2xl mx-auto mb-12 flex flex-col gap-1.5">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#adc6ff]">
              Transparan & Terstruktur
            </span>
            <h2 className="font-display text-3xl md:text-4xl text-[#dfe2f1] font-bold">
              4 Langkah Mudah Meluncurkan Website Impian Anda
            </h2>
            <p className="text-sm text-[#c2c6d6]">
              Tidak ada jargon rumit. Anda selalu tahu status progres proyek setiap harinya melalui papan koordinasi live.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {/* Step 1 */}
            <div className="p-6 rounded-2xl bg-[#171b26] flex flex-col gap-4 shadow-sm border border-white/5 hover:border-[#4d8eff]/30 transition-all">
              <span className="font-display text-3xl text-[#adc6ff]/35 font-extrabold">01</span>
              <div className="flex flex-col gap-1.5">
                <h3 className="font-display text-lg text-[#dfe2f1] font-bold">Discovery & Brief</h3>
                <p className="text-xs text-[#8c909f] leading-relaxed">
                  Diskusi mendalam untuk memetakan tujuan bisnis, profil audiens target, analisis kompetitor, dan struktur penawaran produk Anda.
                </p>
              </div>
              <div className="pt-2 flex items-center gap-1.5 text-xs text-[#4cd7f6] font-medium">
                <Icon name="schedule" className=" text-sm" />
                <span>Hari 1 - 2</span>
              </div>
            </div>

            {/* Step 2 */}
            <div className="p-6 rounded-2xl bg-[#171b26] flex flex-col gap-4 shadow-sm border border-white/5 hover:border-[#4d8eff]/30 transition-all">
              <span className="font-display text-3xl text-[#adc6ff]/35 font-extrabold">02</span>
              <div className="flex flex-col gap-1.5">
                <h3 className="font-display text-lg text-[#dfe2f1] font-bold">
                  Desain UI/UX & Prototype
                </h3>
                <p className="text-xs text-[#8c909f] leading-relaxed">
                  Pembuatan wireframe dan mockup visual interaktif di Figma. Anda dapat mencoba alur klik langsung sebelum sebaris kode ditulis.
                </p>
              </div>
              <div className="pt-2 flex items-center gap-1.5 text-xs text-[#4cd7f6] font-medium">
                <Icon name="schedule" className=" text-sm" />
                <span>Hari 3 - 6</span>
              </div>
            </div>

            {/* Step 3 */}
            <div className="p-6 rounded-2xl bg-[#171b26] flex flex-col gap-4 shadow-sm border border-white/5 hover:border-[#4d8eff]/30 transition-all">
              <span className="font-display text-3xl text-[#adc6ff]/35 font-extrabold">03</span>
              <div className="flex flex-col gap-1.5">
                <h3 className="font-display text-lg text-[#dfe2f1] font-bold">Koding & Integrasi</h3>
                <p className="text-xs text-[#8c909f] leading-relaxed">
                  Implementasi kode bersih berkecepatan tinggi, integrasi WhatsApp, analitik pelacak piksel, formulir data, dan setup CMS mandiri.
                </p>
              </div>
              <div className="pt-2 flex items-center gap-1.5 text-xs text-[#4cd7f6] font-medium">
                <Icon name="schedule" className=" text-sm" />
                <span>Hari 7 - 12</span>
              </div>
            </div>

            {/* Step 4 */}
            <div className="p-6 rounded-2xl bg-[#171b26] flex flex-col gap-4 shadow-sm border border-white/5 hover:border-[#4d8eff]/30 transition-all">
              <span className="font-display text-3xl text-[#adc6ff]/35 font-extrabold">04</span>
              <div className="flex flex-col gap-1.5">
                <h3 className="font-display text-lg text-[#dfe2f1] font-bold">Testing & Go-Live</h3>
                <p className="text-xs text-[#8c909f] leading-relaxed">
                  Uji coba komprehensif seluruh perangkat, audit keamanan SSL, transfer kepemilikan domain, dan panduan video pengelolaan situs.
                </p>
              </div>
              <div className="pt-2 flex items-center gap-1.5 text-xs text-[#4cd7f6] font-medium">
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
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#adc6ff]">
                Skema Investasi Terbuka
              </span>
              <h2 className="font-display text-3xl md:text-4xl text-[#dfe2f1] font-bold">
                Investasi Transparan Tanpa Biaya Tersembunyi
              </h2>
            </div>
            <button
              onClick={() => onTabChange('paket-harga')}
              className="inline-flex items-center gap-1 text-[#adc6ff] text-sm font-semibold hover:underline"
            >
              <span>Buka Kalkulator & Detail Komparasi →</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {/* Starter */}
            <div className="p-6 rounded-2xl bg-[#171b26] flex flex-col justify-between shadow-sm border border-white/5">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] uppercase font-bold text-[#8c909f]">
                    Entry-level
                  </span>
                  <h3 className="font-display text-xl text-[#dfe2f1] font-bold">Starter Website</h3>
                  <p className="text-xs text-[#8c909f]">
                    Cocok untuk usaha kecil yang baru mulai online.
                  </p>
                </div>
                <div className="flex items-baseline gap-1 py-2">
                  <span className="text-xs text-[#8c909f]">Mulai</span>
                  <span className="font-display text-3xl font-extrabold text-[#dfe2f1]">
                    Rp 1,5jt
                  </span>
                  <span className="text-xs text-[#8c909f]">/sekali bayar</span>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-[11px] font-bold text-[#adc6ff] uppercase">
                    Fitur Termasuk:
                  </span>
                  <div className="flex items-center gap-2 text-xs text-[#c2c6d6]">
                    <Icon name="check" className=" text-[#adc6ff] text-base" />
                    <span>Landing page atau website sederhana</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#c2c6d6]">
                    <Icon name="check" className=" text-[#adc6ff] text-base" />
                    <span>Desain responsif</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#c2c6d6]">
                    <Icon name="check" className=" text-[#adc6ff] text-base" />
                    <span>Informasi produk dan layanan</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#c2c6d6]">
                    <Icon name="check" className=" text-[#adc6ff] text-base" />
                    <span>Tombol WhatsApp dan kontak</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#c2c6d6]">
                    <Icon name="check" className=" text-[#adc6ff] text-base" />
                    <span>SEO dasar & 2 kali revisi</span>
                  </div>
                </div>
              </div>
              <button
                onClick={onOpenConsultation}
                className="mt-8 w-full py-2.5 px-4 rounded-xl bg-[#262a35] text-[#dfe2f1] font-semibold text-sm hover:bg-[#313540] transition-colors"
              >
                Pilih Paket Starter
              </button>
            </div>

            {/* Business Website (Featured) */}
            <div className="p-6 rounded-2xl bg-[#262a35] flex flex-col justify-between shadow-2xl relative border border-[#4d8eff]/40">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-0.5 rounded-full bg-[#4d8eff] text-[#00285d] text-[11px] font-bold tracking-wider uppercase shadow-md">
                Pilihan Terfavorit
              </div>
              <div className="flex flex-col gap-4 pt-2">
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] uppercase font-bold text-[#4cd7f6]">
                    Prioritas
                  </span>
                  <h3 className="font-display text-xl text-[#dfe2f1] font-bold">Business Website</h3>
                  <p className="text-xs text-[#8c909f]">
                    Cocok untuk bisnis lokal yang ingin tampil profesional dan menerima pelanggan secara online.
                  </p>
                </div>
                <div className="flex items-baseline gap-1 py-2">
                  <span className="text-xs text-[#8c909f]">Mulai</span>
                  <span className="font-display text-3xl font-extrabold text-[#adc6ff]">
                    Rp 3,5jt
                  </span>
                  <span className="text-xs text-[#8c909f]">/sekali bayar</span>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-[11px] font-bold text-[#adc6ff] uppercase">
                    Fitur Termasuk:
                  </span>
                  <div className="flex items-center gap-2 text-xs text-[#dfe2f1] font-medium">
                    <Icon name="check_circle" className=" text-[#4cd7f6] text-base" />
                    <span>Company profile hingga 6 halaman</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#dfe2f1] font-medium">
                    <Icon name="check_circle" className=" text-[#4cd7f6] text-base" />
                    <span>Desain semi-custom</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#dfe2f1] font-medium">
                    <Icon name="check_circle" className=" text-[#4cd7f6] text-base" />
                    <span>Form kontak dan WhatsApp</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#dfe2f1] font-medium">
                    <Icon name="check_circle" className=" text-[#4cd7f6] text-base" />
                    <span>Katalog layanan atau produk</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#dfe2f1] font-medium">
                    <Icon name="check_circle" className=" text-[#4cd7f6] text-base" />
                    <span>SEO dasar & 3 kali revisi</span>
                  </div>
                </div>
              </div>
              <button
                onClick={onOpenConsultation}
                className="mt-8 w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#4d8eff] to-[#3131c0] text-white font-semibold text-sm shadow-lg hover:scale-[1.02] transition-transform"
              >
                Mulai Proyek Business Website
              </button>
            </div>

            {/* Business System */}
            <div className="p-6 rounded-2xl bg-[#171b26] flex flex-col justify-between shadow-sm border border-white/5">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] uppercase font-bold text-[#8c909f]">
                    Full-stack
                  </span>
                  <h3 className="font-display text-xl text-[#dfe2f1] font-bold">
                    Business System
                  </h3>
                  <p className="text-xs text-[#8c909f]">
                    Cocok untuk bisnis yang ingin mengelola operasional melalui aplikasi web.
                  </p>
                </div>
                <div className="flex items-baseline gap-1 py-2">
                  <span className="text-xs text-[#8c909f]">Mulai</span>
                  <span className="font-display text-3xl font-extrabold text-[#dfe2f1]">
                    Rp 6jt
                  </span>
                  <span className="text-xs text-[#8c909f]">/sesuai spek</span>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-[11px] font-bold text-[#adc6ff] uppercase">
                    Kapasitas Khusus:
                  </span>
                  <div className="flex items-center gap-2 text-xs text-[#c2c6d6]">
                    <Icon name="check" className=" text-[#adc6ff] text-base" />
                    <span>Login dan hak akses pengguna</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#c2c6d6]">
                    <Icon name="check" className=" text-[#adc6ff] text-base" />
                    <span>Database dan CRUD</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#c2c6d6]">
                    <Icon name="check" className=" text-[#adc6ff] text-base" />
                    <span>Dashboard admin</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#c2c6d6]">
                    <Icon name="check" className=" text-[#adc6ff] text-base" />
                    <span>Pengelolaan data & laporan dasar</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#c2c6d6]">
                    <Icon name="check" className=" text-[#adc6ff] text-base" />
                    <span>Dokumentasi, pelatihan & pengujian fungsional</span>
                  </div>
                </div>
              </div>
              <button
                onClick={onOpenConsultation}
                className="mt-8 w-full py-2.5 px-4 rounded-xl bg-[#262a35] text-[#dfe2f1] font-semibold text-sm hover:bg-[#313540] transition-colors"
              >
                Diskusikan Kebutuhan Sistem
              </button>
            </div>
          </div>
        </section>

        {/* 6. TESTIMONI KLIEN with LazyImage */}
        <section className="max-w-[1280px] mx-auto px-5 md:px-12 py-16">
          <div className="text-center max-w-2xl mx-auto mb-12 flex flex-col gap-1.5">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#adc6ff]">
              Pengalaman Nyata Mitra
            </span>
            <h2 className="font-display text-3xl md:text-4xl text-[#dfe2f1] font-bold">
              Apa Kata Klien yang Telah Bertumbuh Bersama KeuvaWeb
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Testi 1 */}
            <div className="p-6 rounded-2xl bg-[#171b26] flex flex-col justify-between shadow-sm border border-white/5">
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-1 text-[#4cd7f6]">
                  {[...Array(5)].map((_, i) => (
                    <Icon
                      key={i}
                      name="star"
                      className="text-sm"
                      filled
                    />
                  ))}
                </div>
                <p className="text-sm text-[#c2c6d6] italic leading-relaxed">
                  “Sejak website baru kami rilis oleh KeuvaWeb, konversi leads dari iklan Google naik lebih dari 200%. Load speed-nya instan saat dibuka dari HP, klien tender kami pun sangat memuji profesionalitas desainnya.”
                </p>
              </div>
              <div className="flex items-center gap-3 pt-6 mt-6 border-t border-white/5">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-[#262a35] shrink-0">
                  <LazyImage
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRmTXJ6TYyfrCpWe-EUARrNQEmjVutVHqdOK-fm6BP6J7xr3ksJ3ynSIATcIRTmc6j9joY7kARlpvQiH6W3sdw4KD3HuXqiOQewzgZsthlpQABzZyMqkjr3kodq8xO1S1nUNKnVbsitu4SYzZHn79y209RwIS0VcNShXgbUXUfRWHWttJ38F7zXfBdAVSuMMtToWFwKMypCWeKjUpH9H2IDNhwTuHRK0LFuM-0xxMg58uYoOMWpAUL"
                    alt="Hendrawan Pratama"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-[#dfe2f1]">Hendrawan Pratama</span>
                  <span className="text-xs text-[#8c909f]">
                    Direktur Operasional, PT Finansia Solusi
                  </span>
                </div>
              </div>
            </div>

            {/* Testi 2 */}
            <div className="p-6 rounded-2xl bg-[#171b26] flex flex-col justify-between shadow-sm border border-white/5">
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-1 text-[#4cd7f6]">
                  {[...Array(5)].map((_, i) => (
                    <Icon
                      key={i}
                      name="star"
                      className="text-sm"
                      filled
                    />
                  ))}
                </div>
                <p className="text-sm text-[#c2c6d6] italic leading-relaxed">
                  “Sebelumnya pakai template WordPress biasa sering error dan lemot. Tim KeuvaWeb mengubah arsitektur toko kami ke Headless Shopify. Checkout kilat bikin abandon cart kami berkurang 40%!”
                </p>
              </div>
              <div className="flex items-center gap-3 pt-6 mt-6 border-t border-white/5">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-[#262a35] shrink-0">
                  <LazyImage
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFM9-2NYaT8dVkHMgs4zb_U-rJuwFNj5TB6X19P2Cgju3MeJyqdpAR7vW33TK1WVfF9oAByEQpC33dtuJNTV3a8Iafj_5uGLweTBVbfguUifoGjIKsATaGruCSB_5tS_-eaTWgOi0dmXoTtocTkYm0-1U41sJLXb4wj68QFHMEUm84YJm7dr_llNJAaRQE3fPGujqsX69Qb4476CUGiJOmW-gCq_Jv66JX3cRkceDBq2AHdUr_NfW6"
                    alt="Clarissa Novita"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-[#dfe2f1]">Clarissa Novita</span>
                  <span className="text-xs text-[#8c909f]">Founder, AURA Label</span>
                </div>
              </div>
            </div>

            {/* Testi 3 */}
            <div className="p-6 rounded-2xl bg-[#171b26] flex flex-col justify-between shadow-sm border border-white/5">
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-1 text-[#4cd7f6]">
                  {[...Array(5)].map((_, i) => (
                    <Icon
                      key={i}
                      name="star"
                      className="text-sm"
                      filled
                    />
                  ))}
                </div>
                <p className="text-sm text-[#c2c6d6] italic leading-relaxed">
                  “Proses koordinasi luar biasa tertata. Deadline terpenuhi tepat waktu tanpa drama revisi tak berujung. Dashboard CMS yang disediakan sangat mudah diedit oleh tim admin kami sendiri.”
                </p>
              </div>
              <div className="flex items-center gap-3 pt-6 mt-6 border-t border-white/5">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-[#262a35] shrink-0">
                  <LazyImage
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJ0rBpPEAa8WMiLaDy6hIfTx4H651nU0VWR4DST8XSCa-EWbgBDTw70dSDYoCWMYQGFILBfRKv8_rtrircIMl5AgQR4TXZiMfjbcqHwXN_APcCFfnZDrrJUE0goqRS3MTxNdZTTxydeaLN8UdmPI079NcSa5eDXNgAnGsRNg_UH7Ceja-Ls484um-tiMw2ZcaxHzjnhzTqNYfynTJizrvJScDMpeWq5Pk_CH0FGPI7lfHW1PyrTOMB"
                    alt="Ir. Bambang Sudirman"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-[#dfe2f1]">
                    Ir. Bambang Sudirman
                  </span>
                  <span className="text-xs text-[#8c909f]">
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
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#adc6ff]">
              Tanya Jawab Seputar Layanan
            </span>
            <h2 className="font-display text-3xl md:text-4xl text-[#dfe2f1] font-bold">
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
                  className="p-5 md:p-6 rounded-2xl bg-[#171b26] transition-colors cursor-pointer border border-white/5 hover:border-[#4d8eff]/20"
                >
                  <div className="flex items-center justify-between gap-4">
                    <h4 className="font-display text-base md:text-lg text-[#dfe2f1] font-semibold">
                      {item.q}
                    </h4>
                    <Icon
                      name="expand_more"
                      className={`text-[#adc6ff] transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : 'rotate-0'
                      }`}
                    />
                  </div>
                  {isOpen && (
                    <div className="pt-4 text-sm text-[#c2c6d6] leading-relaxed border-t border-white/5 mt-3 animate-in fade-in duration-200">
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
          <div className="rounded-3xl bg-[#262a35] p-6 md:p-12 shadow-2xl relative overflow-hidden border border-white/10">
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#4d8eff]/20 rounded-full blur-3xl pointer-events-none" />
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative">
              {/* Text left */}
              <div className="lg:col-span-6 flex flex-col gap-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#009eb9]/25 text-[#4cd7f6] text-xs font-semibold self-start border border-white/5">
                  <span className="w-2 h-2 rounded-full bg-[#4cd7f6] animate-pulse"></span>
                  <span>Slot Pengerjaan Proyek Baru Terbuka</span>
                </div>
                <h2 className="font-display text-3xl md:text-4xl text-[#dfe2f1] font-bold leading-tight">
                  Siap Memiliki Website Kelas Dunia yang Menghasilkan Pertumbuhan Nyata?
                </h2>
                <p className="text-sm text-[#c2c6d6] leading-relaxed">
                  Tinggalkan pesan Anda di formulir ini atau konsultasi langsung dengan lead developer kami. Dapatkan audit gratis website lama atau estimasi roadmap proyek baru Anda dalam kurun 24 jam.
                </p>
                <div className="flex flex-col gap-3 pt-2">
                  <div className="flex items-center gap-3">
                    <Icon name="bolt" className=" text-[#adc6ff] text-xl" />
                    <span className="text-sm text-[#dfe2f1] font-medium">
                      Estimasi Rencana & Penawaran dalam 24 Jam Kerja
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="lock" className=" text-[#adc6ff] text-xl" />
                    <span className="text-sm text-[#dfe2f1] font-medium">
                      Data & Ide Bisnis Dijamin Kerahasiaannya (NDA Ready)
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="thumb_up" className=" text-[#adc6ff] text-xl" />
                    <span className="text-sm text-[#dfe2f1] font-medium">
                      Tanpa Komitmen Awal, Diskusi 100% Bebas Biaya
                    </span>
                  </div>
                </div>
                {/* Direct WA Button */}
                <div className="pt-2">
                  <a
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#171b26] text-[#dfe2f1] text-xs font-semibold hover:text-[#4cd7f6] transition-colors border border-white/5"
                    href="https://wa.me/6281298432865"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <Icon name="chat" className=" text-base text-[#25D366]" />
                    <span>Atau Chat Langsung ke WhatsApp Studio →</span>
                  </a>
                </div>
              </div>

              {/* Mini Form right */}
              <div className="lg:col-span-6 bg-[#0a0e18]/85 backdrop-blur-xl p-6 md:p-8 rounded-2xl shadow-xl border border-white/10">
                <h3 className="font-display text-xl text-[#dfe2f1] font-bold mb-1">
                  Formulir Konsultasi Kilat
                </h3>
                <p className="text-xs text-[#8c909f] mb-6">
                  Isi data ringkas di bawah ini, tim kami akan merespons melalui WhatsApp/Email hari ini.
                </p>

                {formSubmitted ? (
                  <div className="p-6 rounded-xl bg-[#171b26] text-center border border-[#4d8eff]/30 animate-in fade-in duration-300">
                    <Icon name="check_circle" className=" text-4xl text-[#4cd7f6] mb-2" />
                    <h4 className="font-display text-lg text-[#dfe2f1] font-bold mb-1">
                      {channel === 'webhook'
                        ? 'Terima Kasih!'
                        : 'Selesaikan Kirim via WhatsApp'}
                    </h4>
                    <p className="text-xs text-[#c2c6d6] leading-relaxed mb-4">
                      {channel === 'webhook'
                        ? 'Data proyek Anda sudah kami terima. Tim KeuvaWeb akan segera menghubungi nomor WhatsApp Anda dalam kurun beberapa jam.'
                        : 'Agar data Anda benar-benar masuk ke tim kami, kirim pesan WhatsApp berikut — pesannya sudah kami isi lengkap dengan detail formulir Anda.'}
                    </p>
                    <div className="flex flex-col items-center gap-3">
                      <a
                        href={waLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#25D366] hover:brightness-110 text-white text-xs font-bold shadow-lg transition-all"
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
                        className="text-xs font-semibold text-[#adc6ff] hover:underline"
                      >
                        Kirim Pesan Lainnya
                      </button>
                    </div>
                  </div>
                ) : (
                  <form className="flex flex-col gap-4" onSubmit={handleFormSubmit}>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold text-[#dfe2f1]" htmlFor="clientName">
                        Nama Lengkap / Perusahaan
                      </label>
                      <input
                        className="px-4 py-2.5 rounded-xl bg-[#1c1f2a] text-[#dfe2f1] placeholder:text-[#8c909f]/50 border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#4d8eff] text-sm"
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
                        <label className="text-xs font-semibold text-[#dfe2f1]" htmlFor="clientWa">
                          Nomor WhatsApp Aktif
                        </label>
                        <input
                          className="px-4 py-2.5 rounded-xl bg-[#1c1f2a] text-[#dfe2f1] placeholder:text-[#8c909f]/50 border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#4d8eff] text-sm font-mono"
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
                          className="text-xs font-semibold text-[#dfe2f1]"
                          htmlFor="clientEmail"
                        >
                          Alamat Email Bisnis
                        </label>
                        <input
                          className="px-4 py-2.5 rounded-xl bg-[#1c1f2a] text-[#dfe2f1] placeholder:text-[#8c909f]/50 border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#4d8eff] text-sm"
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
                        className="text-xs font-semibold text-[#dfe2f1]"
                        htmlFor="projectType"
                      >
                        Jenis Kebutuhan Website
                      </label>
                      <select
                        className="px-4 py-2.5 rounded-xl bg-[#1c1f2a] text-[#dfe2f1] border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#4d8eff] text-sm"
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
                        className="text-xs font-semibold text-[#dfe2f1]"
                        htmlFor="clientNotes"
                      >
                        Ringkasan Kebutuhan / Link Website Lama
                      </label>
                      <textarea
                        className="px-4 py-2.5 rounded-xl bg-[#1c1f2a] text-[#dfe2f1] placeholder:text-[#8c909f]/50 border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#4d8eff] text-sm resize-none"
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
                      <p className="text-xs text-[#ff8695] bg-[#ff8695]/10 border border-[#ff8695]/30 rounded-xl px-4 py-3">
                        {error}
                      </p>
                    )}

                    <button
                      className="mt-2 w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#4d8eff] to-[#3131c0] text-white font-semibold text-sm shadow-[0_8px_20px_-4px_rgba(77,142,255,0.4)] hover:brightness-110 active:scale-[0.99] transition-all disabled:opacity-50"
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
