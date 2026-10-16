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

  return (
    <div className="w-full">
      {/* Glow Ambient Canvas Effects */}
      <div className="relative w-full overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[720px] h-[360px] bg-[#4d8eff]/10 rounded-full blur-[140px] pointer-events-none -z-10" />
        <div className="absolute top-96 right-10 w-[420px] h-[420px] bg-[#4cd7f6]/5 rounded-full blur-[120px] pointer-events-none -z-10" />

        {/* Header Section */}
        <section className="max-w-[1280px] mx-auto px-5 md:px-12 pt-12 md:pt-16 pb-8">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#262a35] text-[#adc6ff] text-xs font-bold uppercase tracking-wider shadow-sm border border-white/5">
              <span className="w-2 h-2 rounded-full bg-[#4d8eff] animate-pulse"></span>
              Harga Transparan Tanpa Biaya Tersembunyi
            </div>

            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl text-[#dfe2f1] font-extrabold tracking-tight">
              Investasi Transparan <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-[#adc6ff] via-[#4cd7f6] to-[#c0c1ff] bg-clip-text text-transparent">
                Sesuai Fase Bisnis Anda
              </span>
            </h1>

            <p className="text-base md:text-lg text-[#c2c6d6] max-w-2xl leading-relaxed">
              Pilih paket yang paling presisi untuk kebutuhan Anda. Harga di bawah adalah biaya jasa pengerjaan —
              domain, hosting, dan biaya layanan pihak ketiga dihitung terpisah kecuali dinyatakan lain pada paket.
            </p>
          </div>
        </section>

        {/* Pricing Cards Grid */}
        <section className="max-w-[1280px] mx-auto px-5 md:px-12 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
            {/* Card 1: Starter Website */}
            <div className="relative flex flex-col justify-between p-6 md:p-8 rounded-2xl bg-[#171b26] transition-all duration-300 hover:bg-[#1c1f2a] shadow-xl border border-white/5">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] uppercase font-bold text-[#8c909f] tracking-wider">
                    Entry-level
                  </span>
                  <span className="px-3 py-1 rounded-md bg-[#262a35] text-[#dfe2f1] text-xs font-semibold">
                    3–7 Hari Kerja
                  </span>
                </div>
                <h3 className="font-display text-2xl text-[#dfe2f1] font-bold">
                  Starter Website
                </h3>
                <p className="text-xs text-[#8c909f] mt-1 leading-relaxed">
                  Cocok untuk usaha kecil yang baru mulai online.
                </p>

                <div className="my-6 py-2">
                  <div className="flex items-baseline gap-1">
                    <span className="text-sm text-[#8c909f]">Rp</span>
                    <span className="font-display text-3xl md:text-4xl text-[#dfe2f1] font-extrabold tabular-nums">
                      1.500.000
                    </span>
                    <span className="text-xs text-[#8c909f]">/project</span>
                  </div>
                  <span className="text-xs text-[#4cd7f6] mt-1 block">
                    Sekali bayar untuk jasa pengerjaan
                  </span>
                </div>

                <div className="space-y-2.5 pt-2">
                  <div className="flex items-start gap-2.5">
                    <Icon name="check_circle" className=" text-[#4cd7f6] text-base mt-0.5" />
                    <span className="text-xs text-[#dfe2f1]">Landing page atau website sederhana</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Icon name="check_circle" className=" text-[#4cd7f6] text-base mt-0.5" />
                    <span className="text-xs text-[#dfe2f1]">Desain responsif</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Icon name="check_circle" className=" text-[#4cd7f6] text-base mt-0.5" />
                    <span className="text-xs text-[#dfe2f1]">Informasi produk dan layanan</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Icon name="check_circle" className=" text-[#4cd7f6] text-base mt-0.5" />
                    <span className="text-xs text-[#dfe2f1]">Tombol WhatsApp dan kontak</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Icon name="check_circle" className=" text-[#4cd7f6] text-base mt-0.5" />
                    <span className="text-xs text-[#dfe2f1]">SEO dasar</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Icon name="check_circle" className=" text-[#4cd7f6] text-base mt-0.5" />
                    <span className="text-xs text-[#dfe2f1]">2 kali revisi</span>
                  </div>
                </div>

                <p className="flex items-start gap-2 text-[11px] text-[#8c909f] italic leading-relaxed pt-4 mt-4 border-t border-white/5">
                  <Icon name="info" className=" text-sm text-[#adc6ff] mt-0.5 shrink-0" />
                  <span>
                    Tidak termasuk backend kompleks, domain, hosting, dan biaya layanan pihak ketiga.
                  </span>
                </p>
              </div>

              <div className="pt-8">
                <button
                  onClick={onOpenConsultation}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#262a35] text-[#dfe2f1] font-semibold text-sm hover:bg-[#313540] transition-colors shadow-sm"
                >
                  <span>Pilih Paket Starter</span>
                  <Icon name="arrow_forward" className=" text-sm" />
                </button>
              </div>
            </div>

            {/* Card 2: Business Website (FEATURED / POPULAR) */}
            <div className="relative flex flex-col justify-between p-6 md:p-8 rounded-2xl bg-[#1c1f2a] shadow-2xl -mt-2 lg:-mt-4 mb-2 lg:mb-0 transition-transform duration-300 border-2 border-[#4d8eff]/50">
              {/* Top Accent Light Bar */}
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#4d8eff] via-[#adc6ff] to-[#4cd7f6] rounded-t-2xl" />

              <div>
                <div className="flex items-center justify-between mb-4 pt-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#4d8eff] text-[#00285d] text-[10px] font-bold uppercase tracking-wider shadow-md">
                    <Icon name="star" className=" text-xs" filled />
                    Prioritas
                  </span>
                  <span className="px-3 py-1 rounded-md bg-[#262a35] text-[#adc6ff] text-xs font-semibold">
                    7–14 Hari Kerja
                  </span>
                </div>

                <h3 className="font-display text-2xl text-[#dfe2f1] font-bold">
                  Business Website
                </h3>
                <p className="text-xs text-[#8c909f] mt-1 leading-relaxed">
                  Cocok untuk bisnis lokal yang ingin tampil profesional dan menerima pelanggan secara online.
                </p>

                <div className="my-6 py-3 px-4 rounded-xl bg-[#262a35] border border-white/5">
                  <div className="flex items-baseline gap-1">
                    <span className="text-sm text-[#8c909f]">Rp</span>
                    <span className="font-display text-3xl md:text-4xl text-[#adc6ff] font-extrabold tabular-nums">
                      3.500.000
                    </span>
                    <span className="text-xs text-[#8c909f]">/project</span>
                  </div>
                  <span className="text-xs text-[#c0c1ff] font-medium mt-0.5 block">
                    Sekali bayar untuk jasa pengerjaan
                  </span>
                </div>

                <div className="space-y-2.5 pt-2">
                  <div className="flex items-start gap-2.5">
                    <Icon name="verified" className=" text-[#adc6ff] text-base mt-0.5" />
                    <span className="text-xs text-[#dfe2f1] font-semibold">
                      Company profile hingga 6 halaman
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Icon name="check_circle" className=" text-[#adc6ff] text-base mt-0.5" />
                    <span className="text-xs text-[#dfe2f1]">Desain semi-custom</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Icon name="check_circle" className=" text-[#adc6ff] text-base mt-0.5" />
                    <span className="text-xs text-[#dfe2f1]">Form kontak dan WhatsApp</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Icon name="check_circle" className=" text-[#adc6ff] text-base mt-0.5" />
                    <span className="text-xs text-[#dfe2f1]">Katalog layanan atau produk</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Icon name="check_circle" className=" text-[#adc6ff] text-base mt-0.5" />
                    <span className="text-xs text-[#dfe2f1]">
                      Integrasi API sederhana bila diperlukan dan disepakati
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Icon name="check_circle" className=" text-[#adc6ff] text-base mt-0.5" />
                    <span className="text-xs text-[#dfe2f1]">SEO dasar</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Icon name="check_circle" className=" text-[#adc6ff] text-base mt-0.5" />
                    <span className="text-xs text-[#dfe2f1]">3 kali revisi</span>
                  </div>
                </div>

                <p className="flex items-start gap-2 text-[11px] text-[#8c909f] italic leading-relaxed pt-4 mt-4 border-t border-white/5">
                  <Icon name="info" className=" text-sm text-[#adc6ff] mt-0.5 shrink-0" />
                  <span>
                    Fitur admin dan database kompleks dihitung terpisah.
                  </span>
                </p>
              </div>

              <div className="pt-8">
                <button
                  onClick={onOpenConsultation}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-[#4d8eff] to-[#3131c0] text-white font-bold text-sm shadow-[0_8px_24px_-4px_rgba(77,142,255,0.4)] hover:brightness-110 active:scale-[0.98] transition-all"
                >
                  <span>Mulai Proyek Business Website</span>
                  <Icon name="rocket_launch" className=" text-sm" />
                </button>
              </div>
            </div>

            {/* Card 3: Business System */}
            <div className="relative flex flex-col justify-between p-6 md:p-8 rounded-2xl bg-[#171b26] transition-all duration-300 hover:bg-[#1c1f2a] shadow-xl border border-white/5">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] uppercase font-bold text-[#8c909f] tracking-wider">
                    Full-stack
                  </span>
                  <span className="px-3 py-1 rounded-md bg-[#262a35] text-[#dfe2f1] text-xs font-semibold">
                    2–5 Minggu
                  </span>
                </div>
                <h3 className="font-display text-2xl text-[#dfe2f1] font-bold">
                  Business System
                </h3>
                <p className="text-xs text-[#8c909f] mt-1 leading-relaxed">
                  Cocok untuk bisnis yang ingin mengelola operasional melalui aplikasi web.
                </p>

                <div className="my-6 py-2">
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs text-[#8c909f] mr-1">Mulai</span>
                    <span className="text-sm text-[#8c909f]">Rp</span>
                    <span className="font-display text-3xl md:text-4xl text-[#dfe2f1] font-extrabold tabular-nums">
                      6.000.000
                    </span>
                    <span className="text-xs text-[#8c909f]">/project</span>
                  </div>
                  <span className="text-xs text-[#4cd7f6] mt-1 block">
                    Estimasi akhir menyesuaikan lingkup proyek
                  </span>
                </div>

                <div className="space-y-2.5 pt-2">
                  <div className="flex items-start gap-2.5">
                    <Icon name="check_circle" className=" text-[#4cd7f6] text-base mt-0.5" />
                    <span className="text-xs text-[#dfe2f1]">Login dan hak akses pengguna</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Icon name="check_circle" className=" text-[#4cd7f6] text-base mt-0.5" />
                    <span className="text-xs text-[#dfe2f1]">Database dan CRUD</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Icon name="check_circle" className=" text-[#4cd7f6] text-base mt-0.5" />
                    <span className="text-xs text-[#dfe2f1]">Dashboard admin</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Icon name="check_circle" className=" text-[#4cd7f6] text-base mt-0.5" />
                    <span className="text-xs text-[#dfe2f1]">Pengelolaan data pelanggan atau pesanan</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Icon name="check_circle" className=" text-[#4cd7f6] text-base mt-0.5" />
                    <span className="text-xs text-[#dfe2f1]">Laporan dasar</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Icon name="check_circle" className=" text-[#4cd7f6] text-base mt-0.5" />
                    <span className="text-xs text-[#dfe2f1]">Dokumentasi dan pelatihan singkat</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Icon name="check_circle" className=" text-[#4cd7f6] text-base mt-0.5" />
                    <span className="text-xs text-[#dfe2f1]">Pengujian fungsional</span>
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <button
                  onClick={onOpenConsultation}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#262a35] text-[#dfe2f1] font-semibold text-sm hover:bg-[#313540] transition-colors shadow-sm"
                >
                  <span>Konsultasikan Kebutuhan</span>
                  <Icon name="arrow_forward" className=" text-sm" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Custom Estimation Calculator Widget */}
        <section className="max-w-[1280px] mx-auto px-5 md:px-12 py-12">
          <div className="rounded-3xl bg-[#171b26] p-6 md:p-10 shadow-2xl relative overflow-hidden border border-white/5">
            <div className="absolute -right-24 -bottom-24 w-80 h-80 bg-[#4d8eff]/10 rounded-full blur-[90px] pointer-events-none" />
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 flex flex-col space-y-4">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#4cd7f6]">
                  Kalkulator Lingkup Proyek
                </span>
                <h2 className="font-display text-2xl md:text-3xl text-[#dfe2f1] font-bold">
                  Butuh Kebutuhan Khusus? Konfigurasi Estimasi Anda
                </h2>
                <p className="text-sm text-[#c2c6d6] leading-relaxed">
                  Tentukan modul dan kapabilitas fungsional yang Anda inginkan. Sistem kami akan memperkirakan alokasi durasi dan estimasi investasi secara instan.
                </p>
                <div className="pt-2 space-y-2">
                  <div className="flex items-center gap-2 text-xs text-[#c2c6d6]">
                    <Icon name="verified_user" className=" text-[#4cd7f6] text-lg" />
                    <span>Jaminan Kode Bersih & Dokumentasi API Lengkap</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#c2c6d6]">
                    <Icon name="schedule" className=" text-[#4cd7f6] text-lg" />
                    <span>Peluncuran Tepat Waktu dengan SLA Jelas</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 bg-[#1c1f2a] p-6 md:p-8 rounded-2xl shadow-inner space-y-5 border border-white/5">
                <div>
                  <label className="block text-xs font-bold uppercase text-[#dfe2f1] tracking-wider mb-2">
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
                              ? 'bg-[#4d8eff]/20 border-[#4d8eff] text-white shadow-sm'
                              : 'bg-[#262a35] border-white/5 text-[#c2c6d6] hover:bg-[#313540]'
                          }`}
                        >
                          <div className="font-bold text-xs">{item.label}</div>
                          <div className="text-[10px] text-[#8c909f] mt-0.5">{item.sub}</div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-[#dfe2f1] tracking-wider mb-2">
                    2. Kapabilitas Tambahan:
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <label className="flex items-center gap-3 p-3 rounded-xl bg-[#262a35] border border-white/5 cursor-pointer hover:bg-[#313540] transition-colors">
                      <input
                        type="checkbox"
                        checked={addons.payment}
                        onChange={(e) => setAddons({ ...addons, payment: e.target.checked })}
                        className="w-4 h-4 rounded accent-[#4d8eff]"
                      />
                      <span className="text-xs text-[#dfe2f1]">
                        Integrasi Pembayaran Otomatis
                      </span>
                    </label>
                    <label className="flex items-center gap-3 p-3 rounded-xl bg-[#262a35] border border-white/5 cursor-pointer hover:bg-[#313540] transition-colors">
                      <input
                        type="checkbox"
                        checked={addons.seo}
                        onChange={(e) => setAddons({ ...addons, seo: e.target.checked })}
                        className="w-4 h-4 rounded accent-[#4d8eff]"
                      />
                      <span className="text-xs text-[#dfe2f1]">Paket SEO Premium & Schema</span>
                    </label>
                    <label className="flex items-center gap-3 p-3 rounded-xl bg-[#262a35] border border-white/5 cursor-pointer hover:bg-[#313540] transition-colors">
                      <input
                        type="checkbox"
                        checked={addons.multilingual}
                        onChange={(e) => setAddons({ ...addons, multilingual: e.target.checked })}
                        className="w-4 h-4 rounded accent-[#4d8eff]"
                      />
                      <span className="text-xs text-[#dfe2f1]">Multi-Bahasa (Bilingual ID/EN)</span>
                    </label>
                    <label className="flex items-center gap-3 p-3 rounded-xl bg-[#262a35] border border-white/5 cursor-pointer hover:bg-[#313540] transition-colors">
                      <input
                        type="checkbox"
                        checked={addons.dashboard}
                        onChange={(e) => setAddons({ ...addons, dashboard: e.target.checked })}
                        className="w-4 h-4 rounded accent-[#4d8eff]"
                      />
                      <span className="text-xs text-[#dfe2f1]">Custom Dashboard / Database</span>
                    </label>
                  </div>
                </div>

                <div className="pt-2 p-4 rounded-xl bg-[#171b26] flex flex-col sm:flex-row items-center justify-between gap-4 border border-white/5">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-[#8c909f] tracking-wider">
                      Estimasi Investasi & Timeline
                    </span>
                    <div className="flex items-baseline gap-2 mt-0.5">
                      <span className="font-display text-xl md:text-2xl text-[#4cd7f6] font-bold tabular-nums">
                        {formattedCalculatedPrice}
                      </span>
                      <span className="text-xs text-[#8c909f] tabular-nums">
                        · ~{calculatedDays} Hari Kerja
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={onOpenConsultation}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#4d8eff] text-[#00285d] font-bold text-xs hover:bg-[#adc6ff] transition-all shadow-md"
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
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#adc6ff]">
              Matriks Komparasi Lengkap
            </span>
            <h2 className="font-display text-2xl md:text-3xl text-[#dfe2f1] font-bold mt-1">
              Bandingkan Spesifikasi Setiap Paket
            </h2>
          </div>

          <div className="overflow-x-auto rounded-2xl bg-[#171b26] shadow-xl border border-white/5">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="bg-[#1c1f2a] border-b border-white/5">
                  <th className="p-4 font-bold text-[#dfe2f1] w-2/5 text-sm">Spesifikasi & Fitur</th>
                  <th className="p-4 font-bold text-[#dfe2f1] text-center w-1/5 text-sm">Starter</th>
                  <th className="p-4 font-bold text-[#adc6ff] text-center w-1/5 text-sm bg-[#262a35]/60">
                    Business Website
                  </th>
                  <th className="p-4 font-bold text-[#dfe2f1] text-center w-1/5 text-sm">Business System</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-[#c2c6d6]">
                {/* Row Group: Fondasi & Cakupan */}
                <tr className="bg-[#0a0e18]">
                  <td
                    className="p-2.5 px-4 text-[10px] font-bold uppercase tracking-wider text-[#8c909f]"
                    colSpan={4}
                  >
                    Fondasi & Cakupan
                  </td>
                </tr>
                <tr className="hover:bg-[#1c1f2a] transition-colors">
                  <td className="p-4 text-[#dfe2f1] font-medium">Estimasi Pengerjaan</td>
                  <td className="p-4 text-center">3–7 Hari Kerja</td>
                  <td className="p-4 text-center text-[#adc6ff] font-bold bg-[#262a35]/30">
                    7–14 Hari Kerja
                  </td>
                  <td className="p-4 text-center">2–5 Minggu</td>
                </tr>
                <tr className="hover:bg-[#1c1f2a] transition-colors">
                  <td className="p-4 text-[#dfe2f1] font-medium">Struktur Halaman</td>
                  <td className="p-4 text-center">Landing page / website sederhana</td>
                  <td className="p-4 text-center text-[#adc6ff] font-bold bg-[#262a35]/30">
                    Company profile hingga 6 halaman
                  </td>
                  <td className="p-4 text-center">Aplikasi web (login, database)</td>
                </tr>
                <tr className="hover:bg-[#1c1f2a] transition-colors">
                  <td className="p-4 text-[#dfe2f1] font-medium">Desain</td>
                  <td className="p-4 text-center">Responsif</td>
                  <td className="p-4 text-center text-[#adc6ff] font-bold bg-[#262a35]/30">
                    Semi-custom & responsif
                  </td>
                  <td className="p-4 text-center">Dashboard admin kustom</td>
                </tr>

                {/* Row Group: Fungsional & Fitur */}
                <tr className="bg-[#0a0e18]">
                  <td
                    className="p-2.5 px-4 text-[10px] font-bold uppercase tracking-wider text-[#8c909f]"
                    colSpan={4}
                  >
                    Fungsional & Fitur
                  </td>
                </tr>
                <tr className="hover:bg-[#1c1f2a] transition-colors">
                  <td className="p-4 text-[#dfe2f1] font-medium">Informasi produk & layanan</td>
                  <td className="p-4 text-center">
                    <Icon name="check" className=" text-[#4cd7f6] text-base" />
                  </td>
                  <td className="p-4 text-center bg-[#262a35]/30">
                    <Icon name="check" className=" text-[#adc6ff] text-base" />
                  </td>
                  <td className="p-4 text-center">
                    <Icon name="check" className=" text-[#4cd7f6] text-base" />
                  </td>
                </tr>
                <tr className="hover:bg-[#1c1f2a] transition-colors">
                  <td className="p-4 text-[#dfe2f1] font-medium">Tombol WhatsApp & kontak</td>
                  <td className="p-4 text-center">
                    <Icon name="check" className=" text-[#4cd7f6] text-base" />
                  </td>
                  <td className="p-4 text-center bg-[#262a35]/30">
                    <Icon name="check" className=" text-[#adc6ff] text-base" />
                  </td>
                  <td className="p-4 text-center">
                    <Icon name="check" className=" text-[#4cd7f6] text-base" />
                  </td>
                </tr>
                <tr className="hover:bg-[#1c1f2a] transition-colors">
                  <td className="p-4 text-[#dfe2f1] font-medium">Form kontak</td>
                  <td className="p-4 text-center text-[#8c909f]">-</td>
                  <td className="p-4 text-center bg-[#262a35]/30">
                    <Icon name="check" className=" text-[#adc6ff] text-base" />
                  </td>
                  <td className="p-4 text-center">
                    <Icon name="check" className=" text-[#4cd7f6] text-base" />
                  </td>
                </tr>
                <tr className="hover:bg-[#1c1f2a] transition-colors">
                  <td className="p-4 text-[#dfe2f1] font-medium">Katalog layanan / produk</td>
                  <td className="p-4 text-center text-[#8c909f]">-</td>
                  <td className="p-4 text-center bg-[#262a35]/30">
                    <Icon name="check" className=" text-[#adc6ff] text-base" />
                  </td>
                  <td className="p-4 text-center">Pengelolaan data pelanggan/pesanan</td>
                </tr>
                <tr className="hover:bg-[#1c1f2a] transition-colors">
                  <td className="p-4 text-[#dfe2f1] font-medium">Login & hak akses pengguna</td>
                  <td className="p-4 text-center text-[#8c909f]">-</td>
                  <td className="p-4 text-center text-[#8c909f] bg-[#262a35]/30">-</td>
                  <td className="p-4 text-center">
                    <Icon name="check" className=" text-[#4cd7f6] text-base" />
                  </td>
                </tr>
                <tr className="hover:bg-[#1c1f2a] transition-colors">
                  <td className="p-4 text-[#dfe2f1] font-medium">Database & CRUD</td>
                  <td className="p-4 text-center text-[#8c909f]">-</td>
                  <td className="p-4 text-center text-[#8c909f] bg-[#262a35]/30">-</td>
                  <td className="p-4 text-center">
                    <Icon name="check" className=" text-[#4cd7f6] text-base" />
                  </td>
                </tr>
                <tr className="hover:bg-[#1c1f2a] transition-colors">
                  <td className="p-4 text-[#dfe2f1] font-medium">Dashboard admin</td>
                  <td className="p-4 text-center text-[#8c909f]">-</td>
                  <td className="p-4 text-center text-[#8c909f] bg-[#262a35]/30">-</td>
                  <td className="p-4 text-center">
                    <Icon name="check" className=" text-[#4cd7f6] text-base" />
                  </td>
                </tr>
                <tr className="hover:bg-[#1c1f2a] transition-colors">
                  <td className="p-4 text-[#dfe2f1] font-medium">Laporan dasar</td>
                  <td className="p-4 text-center text-[#8c909f]">-</td>
                  <td className="p-4 text-center text-[#8c909f] bg-[#262a35]/30">-</td>
                  <td className="p-4 text-center">
                    <Icon name="check" className=" text-[#4cd7f6] text-base" />
                  </td>
                </tr>
                <tr className="hover:bg-[#1c1f2a] transition-colors">
                  <td className="p-4 text-[#dfe2f1] font-medium">Integrasi API</td>
                  <td className="p-4 text-center text-[#8c909f]">-</td>
                  <td className="p-4 text-center text-[#adc6ff] bg-[#262a35]/30">
                    Sederhana (bila disepakati)
                  </td>
                  <td className="p-4 text-center text-[#8c909f]">-</td>
                </tr>
                <tr className="hover:bg-[#1c1f2a] transition-colors">
                  <td className="p-4 text-[#dfe2f1] font-medium">SEO dasar</td>
                  <td className="p-4 text-center">
                    <Icon name="check" className=" text-[#4cd7f6] text-base" />
                  </td>
                  <td className="p-4 text-center bg-[#262a35]/30">
                    <Icon name="check" className=" text-[#adc6ff] text-base" />
                  </td>
                  <td className="p-4 text-center text-[#8c909f]">-</td>
                </tr>

                {/* Row Group: Dukungan & Serah Terima */}
                <tr className="bg-[#0a0e18]">
                  <td
                    className="p-2.5 px-4 text-[10px] font-bold uppercase tracking-wider text-[#8c909f]"
                    colSpan={4}
                  >
                    Dukungan & Serah Terima
                  </td>
                </tr>
                <tr className="hover:bg-[#1c1f2a] transition-colors">
                  <td className="p-4 text-[#dfe2f1] font-medium">Jumlah Revisi</td>
                  <td className="p-4 text-center">2 kali</td>
                  <td className="p-4 text-center text-[#adc6ff] font-bold bg-[#262a35]/30">3 kali</td>
                  <td className="p-4 text-center">Sesuai kesepakatan</td>
                </tr>
                <tr className="hover:bg-[#1c1f2a] transition-colors">
                  <td className="p-4 text-[#dfe2f1] font-medium">Dokumentasi & pelatihan singkat</td>
                  <td className="p-4 text-center text-[#8c909f]">-</td>
                  <td className="p-4 text-center text-[#8c909f] bg-[#262a35]/30">-</td>
                  <td className="p-4 text-center">
                    <Icon name="check" className=" text-[#4cd7f6] text-base" />
                  </td>
                </tr>
                <tr className="hover:bg-[#1c1f2a] transition-colors">
                  <td className="p-4 text-[#dfe2f1] font-medium">Pengujian fungsional</td>
                  <td className="p-4 text-center text-[#8c909f]">-</td>
                  <td className="p-4 text-center text-[#8c909f] bg-[#262a35]/30">-</td>
                  <td className="p-4 text-center">
                    <Icon name="check" className=" text-[#4cd7f6] text-base" />
                  </td>
                </tr>
                <tr className="hover:bg-[#1c1f2a] transition-colors">
                  <td className="p-4 text-[#dfe2f1] font-medium">
                    Kepemilikan Source Code (100% Hak Klien)
                  </td>
                  <td className="p-4 text-center">
                    <Icon name="check" className=" text-[#4cd7f6] text-base" />
                  </td>
                  <td className="p-4 text-center bg-[#262a35]/30">
                    <Icon name="check" className=" text-[#adc6ff] text-base" />
                  </td>
                  <td className="p-4 text-center">
                    <Icon name="check" className=" text-[#4cd7f6] text-base" />
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
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#adc6ff]">
                Tanya Jawab Seputar Investasi
              </span>
              <h2 className="font-display text-2xl md:text-3xl text-[#dfe2f1] font-bold mt-1">
                Pertanyaan Umum (FAQ)
              </h2>
              <p className="text-sm text-[#8c909f] mt-2">
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
                    className="rounded-2xl bg-[#1c1f2a] p-5 cursor-pointer border border-white/5 hover:border-[#4d8eff]/30 transition-all"
                  >
                    <div className="w-full flex items-center justify-between text-left">
                      <span className="font-display text-sm md:text-base font-semibold text-[#dfe2f1]">
                        {item.q}
                      </span>
                      <Icon
                        name="expand_more"
                        className={`text-sm text-[#adc6ff] transition-transform duration-200 ${
                          isOpen ? 'rotate-180' : 'rotate-0'
                        }`}
                      />
                    </div>
                    {isOpen && (
                      <div className="pt-3 text-xs md:text-sm text-[#8c909f] leading-relaxed border-t border-white/5 mt-3 animate-in fade-in duration-200">
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
          <div className="rounded-3xl bg-gradient-to-br from-[#262a35] via-[#1c1f2a] to-[#171b26] p-8 md:p-14 text-center flex flex-col items-center shadow-2xl relative overflow-hidden border border-white/10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#313540] text-[#4cd7f6] text-xs font-semibold mb-4 border border-white/5">
              <span className="w-2 h-2 rounded-full bg-[#4cd7f6]"></span>
              Konsultasi Kebutuhan Tanpa Komitmen
            </div>
            <h2 className="font-display text-2xl md:text-4xl text-[#dfe2f1] max-w-xl font-bold leading-tight">
              Masih Bingung Menentukan Paket yang Tepat?
            </h2>
            <p className="text-sm text-[#c2c6d6] max-w-lg mt-3 mb-8 leading-relaxed">
              Diskusikan target ekspansi dan anggaran Anda bersama tim lead engineer kami dalam sesi konsultasi 20 menit tanpa dipungut biaya.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <button
                onClick={onOpenConsultation}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-[#4d8eff] text-[#00285d] font-bold text-sm shadow-[0_8px_24px_-4px_rgba(77,142,255,0.4)] hover:bg-[#adc6ff] transition-all"
              >
                <span>Jadwalkan Konsultasi Gratis</span>
                <Icon name="calendar_month" className=" text-sm" />
              </button>
              <a
                href="https://wa.me/6281298432865"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-[#1c1f2a] text-[#dfe2f1] font-semibold text-sm hover:bg-[#262a35] transition-colors border border-white/5"
              >
                <Icon name="chat" className=" text-base text-[#25D366]" />
                <span>Chat via WhatsApp Langsung</span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
