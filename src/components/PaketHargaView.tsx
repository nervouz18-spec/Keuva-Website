import { Icon } from './Icon';
import React, { useState } from 'react';
import { NavTab } from '../types';

interface PaketHargaViewProps {
  onTabChange: (tab: NavTab) => void;
  onOpenConsultation: () => void;
}

export const PaketHargaView: React.FC<PaketHargaViewProps> = ({
  onTabChange,
  onOpenConsultation,
}) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  // Scope Estimator State
  const [selectedModule, setSelectedModule] = useState<'starter' | 'business' | 'system'>('starter');
  const [addons, setAddons] = useState({
    payment: false,
    seo: false,
    multilingual: false,
    dashboard: false,
  });

  const moduleConfig = {
    starter: { label: 'Starter Website', sub: 'Website sederhana', price: 1500000, days: 5 },
    business: { label: 'Business Website', sub: 'Company profile 6 halaman', price: 3500000, days: 10 },
    system: { label: 'Business System', sub: 'Aplikasi web full-stack', price: 6000000, days: 25 },
  };

  const addonConfig = {
    payment: { label: 'Integrasi Pembayaran Otomatis', price: 1200000, days: 2 },
    seo: { label: 'Paket SEO Premium & Schema', price: 800000, days: 2 },
    multilingual: { label: 'Multi-Bahasa (Bilingual ID/EN)', price: 1500000, days: 3 },
    dashboard: { label: 'Custom Dashboard / Database', price: 2000000, days: 4 },
  };

  const currentBase = moduleConfig[selectedModule];
  let calculatedTotal = currentBase.price;
  let calculatedDays = currentBase.days;

  if (addons.payment) {
    calculatedTotal += addonConfig.payment.price;
    calculatedDays += addonConfig.payment.days;
  }
  if (addons.seo) {
    calculatedTotal += addonConfig.seo.price;
    calculatedDays += addonConfig.seo.days;
  }
  if (addons.multilingual) {
    calculatedTotal += addonConfig.multilingual.price;
    calculatedDays += addonConfig.multilingual.days;
  }
  if (addons.dashboard) {
    calculatedTotal += addonConfig.dashboard.price;
    calculatedDays += addonConfig.dashboard.days;
  }

  const formattedCalculatedPrice = 'Rp ' + calculatedTotal.toLocaleString('id-ID');

  const faqList = [
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

  const comparisonRows: { label: string; starter: string; business: string; system: string }[] = [
    { label: 'Harga', starter: 'Rp 1.500.000', business: 'Rp 3.500.000', system: 'Mulai Rp 6.000.000' },
    { label: 'Estimasi pengerjaan', starter: '3-7 hari kerja', business: '7-14 hari kerja', system: '2-5 minggu' },
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

  const renderComparisonCell = (value: string) => {
    if (value === '✓') return <span className="text-success font-bold">✓</span>;
    if (value === '—') return <span className="text-outline">—</span>;
    return <span className="text-on-surface">{value}</span>;
  };

  return (
    <div className="w-full">
      {/* Glow Ambient Canvas Effects */}
      <div className="relative w-full overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[720px] h-[360px] bg-primary-container/10 rounded-full blur-[140px] pointer-events-none -z-10" />
        <div className="absolute top-96 right-10 w-[420px] h-[420px] bg-tertiary/5 rounded-full blur-[120px] pointer-events-none -z-10" />

        {/* Header Section */}
        <section className="max-w-[1280px] mx-auto px-5 md:px-12 pt-12 md:pt-16 pb-8">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-container-high text-primary text-xs font-bold uppercase tracking-wider shadow-sm border border-line">
              <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse"></span>
              Harga Transparan Tanpa Biaya Tersembunyi
            </div>

            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl text-on-surface font-extrabold tracking-tight">
              Investasi Transparan <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-primary via-tertiary to-secondary bg-clip-text text-transparent">
                Sesuai Fase Bisnis Anda
              </span>
            </h1>

            <p className="text-base md:text-lg text-on-surface-variant max-w-2xl leading-relaxed">
              Pilih paket yang paling presisi untuk kebutuhan Anda. Harga di bawah adalah biaya jasa pengerjaan —
              domain, hosting, dan biaya layanan pihak ketiga dihitung terpisah kecuali dinyatakan lain pada paket.
            </p>
          </div>
        </section>

        {/* Pricing Cards Grid */}
        <section className="max-w-[1280px] mx-auto px-5 md:px-12 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
            {/* Card 1: Starter Website */}
            <div className="relative flex flex-col justify-between p-6 md:p-8 rounded-2xl bg-surface-container-low transition-all duration-300 hover:bg-surface-container shadow-xl border border-line">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] uppercase font-bold text-outline tracking-wider">
                    Entry-level
                  </span>
                  <span className="px-3 py-1 rounded-md bg-surface-container-high text-on-surface text-xs font-semibold">
                    3–7 Hari Kerja
                  </span>
                </div>
                <h3 className="font-display text-2xl text-on-surface font-bold">
                  Starter Website
                </h3>
                <p className="text-xs text-outline mt-1 leading-relaxed">
                  Cocok untuk usaha kecil yang baru mulai online.
                </p>

                <div className="my-6 py-2">
                  <div className="flex items-baseline gap-1">
                    <span className="text-sm text-outline">Rp</span>
                    <span className="font-display text-3xl md:text-4xl text-on-surface font-extrabold tabular-nums">
                      1.500.000
                    </span>
                    <span className="text-xs text-outline">/project</span>
                  </div>
                  <span className="text-xs text-tertiary mt-1 block">
                    Sekali bayar untuk jasa pengerjaan
                  </span>
                </div>

                <div className="space-y-2.5 pt-2">
                  <div className="flex items-start gap-2.5">
                    <Icon name="check_circle" className=" text-tertiary text-base mt-0.5" />
                    <span className="text-xs text-on-surface">Landing page atau website sederhana</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Icon name="check_circle" className=" text-tertiary text-base mt-0.5" />
                    <span className="text-xs text-on-surface">Desain responsif</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Icon name="check_circle" className=" text-tertiary text-base mt-0.5" />
                    <span className="text-xs text-on-surface">Informasi produk dan layanan</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Icon name="check_circle" className=" text-tertiary text-base mt-0.5" />
                    <span className="text-xs text-on-surface">Tombol WhatsApp dan kontak</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Icon name="check_circle" className=" text-tertiary text-base mt-0.5" />
                    <span className="text-xs text-on-surface">SEO dasar</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Icon name="check_circle" className=" text-tertiary text-base mt-0.5" />
                    <span className="text-xs text-on-surface">2 kali revisi</span>
                  </div>
                </div>

                <p className="flex items-start gap-2 text-[11px] text-outline italic leading-relaxed pt-4 mt-4 border-t border-line">
                  <Icon name="info" className=" text-sm text-primary mt-0.5 shrink-0" />
                  <span>
                    Tidak termasuk backend kompleks, domain, hosting, dan biaya layanan pihak ketiga.
                  </span>
                </p>
              </div>

              <div className="pt-8">
                <button
                  onClick={onOpenConsultation}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-surface-container-high text-on-surface font-semibold text-sm hover:bg-surface-container-highest transition-colors shadow-sm"
                >
                  <span>Pilih Paket Starter</span>
                  <Icon name="arrow_forward" className=" text-sm" />
                </button>
              </div>
            </div>

            {/* Card 2: Business Website (FEATURED / POPULAR) */}
            <div className="relative flex flex-col justify-between p-6 md:p-8 rounded-2xl bg-surface-container shadow-2xl -mt-2 lg:-mt-4 mb-2 lg:mb-0 transition-transform duration-300 border-2 border-primary-container/50">
              {/* Top Accent Light Bar */}
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-primary-container via-primary to-tertiary rounded-t-2xl" />

              <div>
                <div className="flex items-center justify-between mb-4 pt-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-container text-on-primary-container text-[10px] font-bold uppercase tracking-wider shadow-md">
                    <Icon name="star" className=" text-xs" filled />
                    Prioritas
                  </span>
                  <span className="px-3 py-1 rounded-md bg-surface-container-high text-primary text-xs font-semibold">
                    7–14 Hari Kerja
                  </span>
                </div>

                <h3 className="font-display text-2xl text-on-surface font-bold">
                  Business Website
                </h3>
                <p className="text-xs text-outline mt-1 leading-relaxed">
                  Cocok untuk bisnis lokal yang ingin tampil profesional dan menerima pelanggan secara online.
                </p>

                <div className="my-6 py-3 px-4 rounded-xl bg-surface-container-high border border-line">
                  <div className="flex items-baseline gap-1">
                    <span className="text-sm text-outline">Rp</span>
                    <span className="font-display text-3xl md:text-4xl text-primary font-extrabold tabular-nums">
                      3.500.000
                    </span>
                    <span className="text-xs text-outline">/project</span>
                  </div>
                  <span className="text-xs text-secondary font-medium mt-0.5 block">
                    Sekali bayar untuk jasa pengerjaan
                  </span>
                </div>

                <div className="space-y-2.5 pt-2">
                  <div className="flex items-start gap-2.5">
                    <Icon name="verified" className=" text-primary text-base mt-0.5" />
                    <span className="text-xs text-on-surface font-semibold">
                      Company profile hingga 6 halaman
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Icon name="check_circle" className=" text-primary text-base mt-0.5" />
                    <span className="text-xs text-on-surface">Desain semi-custom</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Icon name="check_circle" className=" text-primary text-base mt-0.5" />
                    <span className="text-xs text-on-surface">Form kontak dan WhatsApp</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Icon name="check_circle" className=" text-primary text-base mt-0.5" />
                    <span className="text-xs text-on-surface">Katalog layanan atau produk</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Icon name="check_circle" className=" text-primary text-base mt-0.5" />
                    <span className="text-xs text-on-surface">
                      Integrasi API sederhana bila diperlukan dan disepakati
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Icon name="check_circle" className=" text-primary text-base mt-0.5" />
                    <span className="text-xs text-on-surface">SEO dasar</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Icon name="check_circle" className=" text-primary text-base mt-0.5" />
                    <span className="text-xs text-on-surface">3 kali revisi</span>
                  </div>
                </div>

                <p className="flex items-start gap-2 text-[11px] text-outline italic leading-relaxed pt-4 mt-4 border-t border-line">
                  <Icon name="info" className=" text-sm text-primary mt-0.5 shrink-0" />
                  <span>
                    Fitur admin dan database kompleks dihitung terpisah.
                  </span>
                </p>
              </div>

              <div className="pt-8">
                <button
                  onClick={onOpenConsultation}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-primary-container to-secondary-container text-white font-bold text-sm shadow-[0_8px_24px_-4px_rgba(77,142,255,0.4)] hover:brightness-110 active:scale-[0.98] transition-all"
                >
                  <span>Mulai Proyek Business Website</span>
                  <Icon name="rocket_launch" className=" text-sm" />
                </button>
              </div>
            </div>

            {/* Card 3: Business System */}
            <div className="relative flex flex-col justify-between p-6 md:p-8 rounded-2xl bg-surface-container-low transition-all duration-300 hover:bg-surface-container shadow-xl border border-line">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] uppercase font-bold text-outline tracking-wider">
                    Full-stack
                  </span>
                  <span className="px-3 py-1 rounded-md bg-surface-container-high text-on-surface text-xs font-semibold">
                    2–5 Minggu
                  </span>
                </div>
                <h3 className="font-display text-2xl text-on-surface font-bold">
                  Business System
                </h3>
                <p className="text-xs text-outline mt-1 leading-relaxed">
                  Cocok untuk bisnis yang ingin mengelola operasional melalui aplikasi web.
                </p>

                <div className="my-6 py-2">
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs text-outline mr-1">Mulai</span>
                    <span className="text-sm text-outline">Rp</span>
                    <span className="font-display text-3xl md:text-4xl text-on-surface font-extrabold tabular-nums">
                      6.000.000
                    </span>
                    <span className="text-xs text-outline">/project</span>
                  </div>
                  <span className="text-xs text-tertiary mt-1 block">
                    Estimasi akhir menyesuaikan lingkup proyek
                  </span>
                </div>

                <div className="space-y-2.5 pt-2">
                  <div className="flex items-start gap-2.5">
                    <Icon name="check_circle" className=" text-tertiary text-base mt-0.5" />
                    <span className="text-xs text-on-surface">Login dan hak akses pengguna</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Icon name="check_circle" className=" text-tertiary text-base mt-0.5" />
                    <span className="text-xs text-on-surface">Database dan CRUD</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Icon name="check_circle" className=" text-tertiary text-base mt-0.5" />
                    <span className="text-xs text-on-surface">Dashboard admin</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Icon name="check_circle" className=" text-tertiary text-base mt-0.5" />
                    <span className="text-xs text-on-surface">Pengelolaan data pelanggan atau pesanan</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Icon name="check_circle" className=" text-tertiary text-base mt-0.5" />
                    <span className="text-xs text-on-surface">Laporan dasar</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Icon name="check_circle" className=" text-tertiary text-base mt-0.5" />
                    <span className="text-xs text-on-surface">Dokumentasi dan pelatihan singkat</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Icon name="check_circle" className=" text-tertiary text-base mt-0.5" />
                    <span className="text-xs text-on-surface">Pengujian fungsional</span>
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <button
                  onClick={onOpenConsultation}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-surface-container-high text-on-surface font-semibold text-sm hover:bg-surface-container-highest transition-colors shadow-sm"
                >
                  <span>Konsultasikan Kebutuhan</span>
                  <Icon name="arrow_forward" className=" text-sm" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Perbandingan Antar Paket */}
        <section className="max-w-[1280px] mx-auto px-5 md:px-12 pb-4">
          <div className="rounded-3xl bg-surface-container-low border border-line overflow-hidden">
            <div className="px-6 md:px-10 py-6 border-b border-line">
              <h2 className="font-display text-xl md:text-2xl text-on-surface font-bold">
                Perbandingan Antar Paket
              </h2>
              <p className="text-xs text-outline mt-1">
                Rincian apa saja yang termasuk di setiap tingkatan sebelum Anda memutuskan.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[720px] text-left border-collapse">
                <thead>
                  <tr className="bg-surface-container-high">
                    <th className="px-5 py-3 text-[11px] uppercase font-bold text-outline tracking-wider">
                      Fitur
                    </th>
                    <th className="px-5 py-3 text-[11px] uppercase font-bold text-on-surface tracking-wider">
                      Starter
                    </th>
                    <th className="px-5 py-3 text-[11px] uppercase font-bold text-primary tracking-wider">
                      Business
                    </th>
                    <th className="px-5 py-3 text-[11px] uppercase font-bold text-on-surface tracking-wider">
                      System
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line">
                  {comparisonRows.map((row) => (
                    <tr key={row.label} className="hover:bg-surface-container transition-colors">
                      <td className="px-5 py-3 text-xs text-on-surface-variant">{row.label}</td>
                      <td className="px-5 py-3 text-xs">{renderComparisonCell(row.starter)}</td>
                      <td className="px-5 py-3 text-xs bg-primary-container/5">
                        {renderComparisonCell(row.business)}
                      </td>
                      <td className="px-5 py-3 text-xs">{renderComparisonCell(row.system)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <p className="flex items-start gap-2 text-[11px] text-outline italic leading-relaxed pt-4">
            <Icon name="info" className=" text-sm text-primary mt-0.5 shrink-0" />
            <span>
              Biaya tahunan terpisah dari harga di atas: hosting + domain sekitar Rp 500.000 -
              Rp 1.000.000 per tahun. Kami memberi garansi perbaikan bug 30 hari setelah situs
              go-live, serta penyerahan 100% kepemilikan kode sumber dan aset desain.
            </span>
          </p>
        </section>

        {/* Interactive Custom Estimation Calculator Widget */}
        <section className="max-w-[1280px] mx-auto px-5 md:px-12 py-12">
          <div className="rounded-3xl bg-surface-container-low p-6 md:p-10 shadow-2xl relative overflow-hidden border border-line">
            <div className="absolute -right-24 -bottom-24 w-80 h-80 bg-primary-container/10 rounded-full blur-[90px] pointer-events-none" />
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 flex flex-col space-y-4">
                <span className="text-[11px] font-bold uppercase tracking-wider text-tertiary">
                  Kalkulator Lingkup Proyek
                </span>
                <h2 className="font-display text-2xl md:text-3xl text-on-surface font-bold">
                  Butuh Kebutuhan Khusus? Konfigurasi Estimasi Anda
                </h2>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  Tentukan modul dan kapabilitas fungsional yang Anda inginkan. Sistem kami akan memperkirakan alokasi durasi dan estimasi investasi secara instan.
                </p>
                <div className="pt-2 space-y-2">
                  <div className="flex items-center gap-2 text-xs text-on-surface-variant">
                    <Icon name="verified_user" className=" text-tertiary text-lg" />
                    <span>Jaminan Kode Bersih & Dokumentasi API Lengkap</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-on-surface-variant">
                    <Icon name="schedule" className=" text-tertiary text-lg" />
                    <span>Peluncuran Tepat Waktu dengan SLA Jelas</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 bg-surface-container p-6 md:p-8 rounded-2xl shadow-inner space-y-5 border border-line">
                <div>
                  <label className="block text-xs font-bold uppercase text-on-surface tracking-wider mb-2">
                    1. Pilih Jenis Modul Fungsional:
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                    {(['starter', 'business', 'system'] as const).map((key) => {
                      const item = moduleConfig[key];
                      const active = selectedModule === key;
                      return (
                        <button
                          key={key}
                          type="button"
                          onClick={() => setSelectedModule(key)}
                          className={`p-3 rounded-xl text-left transition-all border ${
                            active
                              ? 'bg-primary-container/20 border-primary-container text-ink-strong shadow-sm'
                              : 'bg-surface-container-high border-line text-on-surface-variant hover:bg-surface-container-highest'
                          }`}
                        >
                          <div className="font-bold text-xs">{item.label}</div>
                          <div className="text-[10px] text-outline mt-0.5">{item.sub}</div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-on-surface tracking-wider mb-2">
                    2. Kapabilitas Tambahan:
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <label className="flex items-center gap-3 p-3 rounded-xl bg-surface-container-high border border-line cursor-pointer hover:bg-surface-container-highest transition-colors">
                      <input
                        type="checkbox"
                        checked={addons.payment}
                        onChange={(e) => setAddons({ ...addons, payment: e.target.checked })}
                        className="w-4 h-4 rounded accent-primary-container"
                      />
                      <span className="text-xs text-on-surface">
                        Integrasi Pembayaran Otomatis
                      </span>
                    </label>
                    <label className="flex items-center gap-3 p-3 rounded-xl bg-surface-container-high border border-line cursor-pointer hover:bg-surface-container-highest transition-colors">
                      <input
                        type="checkbox"
                        checked={addons.seo}
                        onChange={(e) => setAddons({ ...addons, seo: e.target.checked })}
                        className="w-4 h-4 rounded accent-primary-container"
                      />
                      <span className="text-xs text-on-surface">Paket SEO Premium & Schema</span>
                    </label>
                    <label className="flex items-center gap-3 p-3 rounded-xl bg-surface-container-high border border-line cursor-pointer hover:bg-surface-container-highest transition-colors">
                      <input
                        type="checkbox"
                        checked={addons.multilingual}
                        onChange={(e) => setAddons({ ...addons, multilingual: e.target.checked })}
                        className="w-4 h-4 rounded accent-primary-container"
                      />
                      <span className="text-xs text-on-surface">Multi-Bahasa (Bilingual ID/EN)</span>
                    </label>
                    <label className="flex items-center gap-3 p-3 rounded-xl bg-surface-container-high border border-line cursor-pointer hover:bg-surface-container-highest transition-colors">
                      <input
                        type="checkbox"
                        checked={addons.dashboard}
                        onChange={(e) => setAddons({ ...addons, dashboard: e.target.checked })}
                        className="w-4 h-4 rounded accent-primary-container"
                      />
                      <span className="text-xs text-on-surface">Custom Dashboard / Database</span>
                    </label>
                  </div>
                </div>

                <div className="pt-2 p-4 rounded-xl bg-surface-container-low flex flex-col sm:flex-row items-center justify-between gap-4 border border-line">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-outline tracking-wider">
                      Estimasi Investasi & Timeline
                    </span>
                    <div className="flex items-baseline gap-2 mt-0.5">
                      <span className="font-display text-xl md:text-2xl text-tertiary font-bold tabular-nums">
                        {formattedCalculatedPrice}
                      </span>
                      <span className="text-xs text-outline tabular-nums">
                        · ~{calculatedDays} Hari Kerja
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={onOpenConsultation}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-primary-container text-on-primary-container font-bold text-xs hover:bg-primary-hover transition-all shadow-md"
                  >
                    <span>Request Custom Quote</span>
                    <Icon name="arrow_forward" className=" text-sm" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Visual Feature Breakdown Matrix Table */}
        <section className="max-w-[1280px] mx-auto px-5 md:px-12 py-12">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-[11px] font-bold uppercase tracking-wider text-primary">
              Matriks Komparasi Lengkap
            </span>
            <h2 className="font-display text-2xl md:text-3xl text-on-surface font-bold mt-1">
              Bandingkan Spesifikasi Setiap Paket
            </h2>
          </div>

          <div className="overflow-x-auto rounded-2xl bg-surface-container-low shadow-xl border border-line">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="bg-surface-container border-b border-line">
                  <th className="p-4 font-bold text-on-surface w-2/5 text-sm">Spesifikasi & Fitur</th>
                  <th className="p-4 font-bold text-on-surface text-center w-1/5 text-sm">Starter</th>
                  <th className="p-4 font-bold text-primary text-center w-1/5 text-sm bg-surface-container-high/60">
                    Business Website
                  </th>
                  <th className="p-4 font-bold text-on-surface text-center w-1/5 text-sm">Business System</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line text-on-surface-variant">
                {/* Row Group: Fondasi & Cakupan */}
                <tr className="bg-surface-container-lowest">
                  <td
                    className="p-2.5 px-4 text-[10px] font-bold uppercase tracking-wider text-outline"
                    colSpan={4}
                  >
                    Fondasi & Cakupan
                  </td>
                </tr>
                <tr className="hover:bg-surface-container transition-colors">
                  <td className="p-4 text-on-surface font-medium">Estimasi Pengerjaan</td>
                  <td className="p-4 text-center">3–7 Hari Kerja</td>
                  <td className="p-4 text-center text-primary font-bold bg-surface-container-high/30">
                    7–14 Hari Kerja
                  </td>
                  <td className="p-4 text-center">2–5 Minggu</td>
                </tr>
                <tr className="hover:bg-surface-container transition-colors">
                  <td className="p-4 text-on-surface font-medium">Struktur Halaman</td>
                  <td className="p-4 text-center">Landing page / website sederhana</td>
                  <td className="p-4 text-center text-primary font-bold bg-surface-container-high/30">
                    Company profile hingga 6 halaman
                  </td>
                  <td className="p-4 text-center">Aplikasi web (login, database)</td>
                </tr>
                <tr className="hover:bg-surface-container transition-colors">
                  <td className="p-4 text-on-surface font-medium">Desain</td>
                  <td className="p-4 text-center">Responsif</td>
                  <td className="p-4 text-center text-primary font-bold bg-surface-container-high/30">
                    Semi-custom & responsif
                  </td>
                  <td className="p-4 text-center">Dashboard admin kustom</td>
                </tr>

                {/* Row Group: Fungsional & Fitur */}
                <tr className="bg-surface-container-lowest">
                  <td
                    className="p-2.5 px-4 text-[10px] font-bold uppercase tracking-wider text-outline"
                    colSpan={4}
                  >
                    Fungsional & Fitur
                  </td>
                </tr>
                <tr className="hover:bg-surface-container transition-colors">
                  <td className="p-4 text-on-surface font-medium">Informasi produk & layanan</td>
                  <td className="p-4 text-center">
                    <Icon name="check" className=" text-tertiary text-base" />
                  </td>
                  <td className="p-4 text-center bg-surface-container-high/30">
                    <Icon name="check" className=" text-primary text-base" />
                  </td>
                  <td className="p-4 text-center">
                    <Icon name="check" className=" text-tertiary text-base" />
                  </td>
                </tr>
                <tr className="hover:bg-surface-container transition-colors">
                  <td className="p-4 text-on-surface font-medium">Tombol WhatsApp & kontak</td>
                  <td className="p-4 text-center">
                    <Icon name="check" className=" text-tertiary text-base" />
                  </td>
                  <td className="p-4 text-center bg-surface-container-high/30">
                    <Icon name="check" className=" text-primary text-base" />
                  </td>
                  <td className="p-4 text-center">
                    <Icon name="check" className=" text-tertiary text-base" />
                  </td>
                </tr>
                <tr className="hover:bg-surface-container transition-colors">
                  <td className="p-4 text-on-surface font-medium">Form kontak</td>
                  <td className="p-4 text-center text-outline">-</td>
                  <td className="p-4 text-center bg-surface-container-high/30">
                    <Icon name="check" className=" text-primary text-base" />
                  </td>
                  <td className="p-4 text-center">
                    <Icon name="check" className=" text-tertiary text-base" />
                  </td>
                </tr>
                <tr className="hover:bg-surface-container transition-colors">
                  <td className="p-4 text-on-surface font-medium">Katalog layanan / produk</td>
                  <td className="p-4 text-center text-outline">-</td>
                  <td className="p-4 text-center bg-surface-container-high/30">
                    <Icon name="check" className=" text-primary text-base" />
                  </td>
                  <td className="p-4 text-center">Pengelolaan data pelanggan/pesanan</td>
                </tr>
                <tr className="hover:bg-surface-container transition-colors">
                  <td className="p-4 text-on-surface font-medium">Login & hak akses pengguna</td>
                  <td className="p-4 text-center text-outline">-</td>
                  <td className="p-4 text-center text-outline bg-surface-container-high/30">-</td>
                  <td className="p-4 text-center">
                    <Icon name="check" className=" text-tertiary text-base" />
                  </td>
                </tr>
                <tr className="hover:bg-surface-container transition-colors">
                  <td className="p-4 text-on-surface font-medium">Database & CRUD</td>
                  <td className="p-4 text-center text-outline">-</td>
                  <td className="p-4 text-center text-outline bg-surface-container-high/30">-</td>
                  <td className="p-4 text-center">
                    <Icon name="check" className=" text-tertiary text-base" />
                  </td>
                </tr>
                <tr className="hover:bg-surface-container transition-colors">
                  <td className="p-4 text-on-surface font-medium">Dashboard admin</td>
                  <td className="p-4 text-center text-outline">-</td>
                  <td className="p-4 text-center text-outline bg-surface-container-high/30">-</td>
                  <td className="p-4 text-center">
                    <Icon name="check" className=" text-tertiary text-base" />
                  </td>
                </tr>
                <tr className="hover:bg-surface-container transition-colors">
                  <td className="p-4 text-on-surface font-medium">Laporan dasar</td>
                  <td className="p-4 text-center text-outline">-</td>
                  <td className="p-4 text-center text-outline bg-surface-container-high/30">-</td>
                  <td className="p-4 text-center">
                    <Icon name="check" className=" text-tertiary text-base" />
                  </td>
                </tr>
                <tr className="hover:bg-surface-container transition-colors">
                  <td className="p-4 text-on-surface font-medium">Integrasi API</td>
                  <td className="p-4 text-center text-outline">-</td>
                  <td className="p-4 text-center text-primary bg-surface-container-high/30">
                    Sederhana (bila disepakati)
                  </td>
                  <td className="p-4 text-center text-outline">-</td>
                </tr>
                <tr className="hover:bg-surface-container transition-colors">
                  <td className="p-4 text-on-surface font-medium">SEO dasar</td>
                  <td className="p-4 text-center">
                    <Icon name="check" className=" text-tertiary text-base" />
                  </td>
                  <td className="p-4 text-center bg-surface-container-high/30">
                    <Icon name="check" className=" text-primary text-base" />
                  </td>
                  <td className="p-4 text-center text-outline">-</td>
                </tr>

                {/* Row Group: Dukungan & Serah Terima */}
                <tr className="bg-surface-container-lowest">
                  <td
                    className="p-2.5 px-4 text-[10px] font-bold uppercase tracking-wider text-outline"
                    colSpan={4}
                  >
                    Dukungan & Serah Terima
                  </td>
                </tr>
                <tr className="hover:bg-surface-container transition-colors">
                  <td className="p-4 text-on-surface font-medium">Jumlah Revisi</td>
                  <td className="p-4 text-center">2 kali</td>
                  <td className="p-4 text-center text-primary font-bold bg-surface-container-high/30">3 kali</td>
                  <td className="p-4 text-center">Sesuai kesepakatan</td>
                </tr>
                <tr className="hover:bg-surface-container transition-colors">
                  <td className="p-4 text-on-surface font-medium">Dokumentasi & pelatihan singkat</td>
                  <td className="p-4 text-center text-outline">-</td>
                  <td className="p-4 text-center text-outline bg-surface-container-high/30">-</td>
                  <td className="p-4 text-center">
                    <Icon name="check" className=" text-tertiary text-base" />
                  </td>
                </tr>
                <tr className="hover:bg-surface-container transition-colors">
                  <td className="p-4 text-on-surface font-medium">Pengujian fungsional</td>
                  <td className="p-4 text-center text-outline">-</td>
                  <td className="p-4 text-center text-outline bg-surface-container-high/30">-</td>
                  <td className="p-4 text-center">
                    <Icon name="check" className=" text-tertiary text-base" />
                  </td>
                </tr>
                <tr className="hover:bg-surface-container transition-colors">
                  <td className="p-4 text-on-surface font-medium">
                    Kepemilikan Source Code (100% Hak Klien)
                  </td>
                  <td className="p-4 text-center">
                    <Icon name="check" className=" text-tertiary text-base" />
                  </td>
                  <td className="p-4 text-center bg-surface-container-high/30">
                    <Icon name="check" className=" text-primary text-base" />
                  </td>
                  <td className="p-4 text-center">
                    <Icon name="check" className=" text-tertiary text-base" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* FAQ Accordion Section */}
        <section className="max-w-[1280px] mx-auto px-5 md:px-12 py-12">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <span className="text-[11px] font-bold uppercase tracking-wider text-primary">
                Tanya Jawab Seputar Investasi
              </span>
              <h2 className="font-display text-2xl md:text-3xl text-on-surface font-bold mt-1">
                Pertanyaan Umum (FAQ)
              </h2>
              <p className="text-sm text-outline mt-2">
                Segala hal yang perlu Anda ketahui mengenai skema pembayaran, jaminan keamanan, dan proses handover.
              </p>
            </div>

            <div className="space-y-3">
              {faqList.map((item, i) => {
                const isOpen = openFaqIndex === i;
                return (
                  <div
                    key={i}
                    onClick={() => setOpenFaqIndex(isOpen ? null : i)}
                    className="rounded-2xl bg-surface-container p-5 cursor-pointer border border-line hover:border-primary-container/30 transition-all"
                  >
                    <div className="w-full flex items-center justify-between text-left">
                      <span className="font-display text-sm md:text-base font-semibold text-on-surface">
                        {item.q}
                      </span>
                      <Icon
                        name="expand_more"
                        className={`text-sm text-primary transition-transform duration-200 ${
                          isOpen ? 'rotate-180' : 'rotate-0'
                        }`}
                      />
                    </div>
                    {isOpen && (
                      <div className="pt-3 text-xs md:text-sm text-outline leading-relaxed border-t border-line mt-3 animate-in fade-in duration-200">
                        {item.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Final Direct CTA Banner */}
        <section className="max-w-[1280px] mx-auto px-5 md:px-12 pb-24">
          <div className="rounded-3xl bg-gradient-to-br from-surface-container-high via-surface-container to-surface-container-low p-8 md:p-14 text-center flex flex-col items-center shadow-2xl relative overflow-hidden border border-line-strong">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-container-highest text-tertiary text-xs font-semibold mb-4 border border-line">
              <span className="w-2 h-2 rounded-full bg-tertiary"></span>
              Konsultasi Kebutuhan Tanpa Komitmen
            </div>
            <h2 className="font-display text-2xl md:text-4xl text-on-surface max-w-xl font-bold leading-tight">
              Masih Bingung Menentukan Paket yang Tepat?
            </h2>
            <p className="text-sm text-on-surface-variant max-w-lg mt-3 mb-8 leading-relaxed">
              Diskusikan target ekspansi dan anggaran Anda bersama tim lead engineer kami dalam sesi konsultasi 20 menit tanpa dipungut biaya.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <button
                onClick={onOpenConsultation}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-primary-container text-on-primary-container font-bold text-sm shadow-[0_8px_24px_-4px_rgba(77,142,255,0.4)] hover:bg-primary-hover transition-all"
              >
                <span>Jadwalkan Konsultasi Gratis</span>
                <Icon name="calendar_month" className=" text-sm" />
              </button>
              <a
                href="https://wa.me/6281298432865"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-surface-container text-on-surface font-semibold text-sm hover:bg-surface-container-high transition-colors border border-line"
              >
                <Icon name="chat" className=" text-base text-success" />
                <span>Chat via WhatsApp Langsung</span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
