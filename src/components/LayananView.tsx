import { Icon } from './Icon';
import React, { useState } from 'react';
import { NavTab } from '../types';
import { LazyImage } from './LazyImage';

interface LayananViewProps {
  onTabChange: (tab: NavTab) => void;
  onOpenConsultation: () => void;
}

interface EstimatorOption {
  id: string;
  label: string;
  cost: number;
  days: number;
  defaultChecked?: boolean;
}

const ESTIMATOR_OPTIONS: EstimatorOption[] = [
  { id: 'figma', label: 'Desain UI/UX Kustom Figma', cost: 3500000, days: 5, defaultChecked: true },
  { id: 'nextjs', label: 'Frontend Next.js / Tailwind', cost: 4500000, days: 7, defaultChecked: true },
  { id: 'payment', label: 'Payment Gateway & Ongkir', cost: 3000000, days: 6 },
  { id: 'cms', label: 'CMS Manajemen Konten Mandiri', cost: 1500000, days: 4 },
  { id: 'copy', label: 'Copywriting Naskah Persuasi', cost: 1250000, days: 3 },
  { id: 'analytics', label: 'Google Analytics & CAPI Setup', cost: 950000, days: 2, defaultChecked: true },
];

export const LayananView: React.FC<LayananViewProps> = ({
  onTabChange,
  onOpenConsultation,
}) => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'landing-page' | 'company-profile' | 'ecommerce' | 'redesign'>('all');
  
  // Interactive scope estimator states
  const [checkedEstimator, setCheckedEstimator] = useState<Record<string, boolean>>({
    figma: true,
    nextjs: true,
    analytics: true,
  });

  const handleToggleEstimator = (id: string) => {
    setCheckedEstimator((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const calculatedCost = ESTIMATOR_OPTIONS.reduce((acc, opt) => {
    return checkedEstimator[opt.id] ? acc + opt.cost : acc;
  }, 0);

  const calculatedDays = ESTIMATOR_OPTIONS.reduce((acc, opt) => {
    return checkedEstimator[opt.id] ? acc + opt.days : acc;
  }, 0);

  const formattedCost = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0,
  }).format(calculatedCost).replace('Rp', 'IDR');

  return (
    <div className="w-full">
      {/* Subtle Ambient Glow Canvas */}
      <div className="relative w-full overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#4d8eff]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/3 -right-48 w-[32rem] h-[32rem] bg-[#009eb9]/10 rounded-full blur-[140px] pointer-events-none" />

        {/* Editorial Intro / Title Section */}
        <section className="max-w-[1280px] mx-auto px-5 md:px-12 pt-12 md:pt-16 pb-8 w-full">
          <div className="flex flex-col gap-4 max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#262a35] w-fit shadow-sm border border-white/5">
              <span className="w-2 h-2 rounded-full bg-[#4cd7f6] animate-pulse"></span>
              <span className="text-[11px] font-bold text-[#4cd7f6] tracking-widest uppercase">
                Spesialisasi & Kapabilitas Rekayasa
              </span>
            </div>

            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl text-[#dfe2f1] font-extrabold tracking-tight leading-tight">
              Layanan Pembuatan Website{' '}
              <span className="bg-gradient-to-r from-[#adc6ff] to-[#4cd7f6] bg-clip-text text-transparent">
                End-to-End
              </span>{' '}
              untuk Skala Bisnis Anda.
            </h1>

            <p className="text-base md:text-lg text-[#c2c6d6] max-w-2xl leading-relaxed">
              Dari landing page berkonversi tinggi hingga platform web app kustom berkinerja mutakhir. Kami mengkombinasikan arsitektur kode bersih, estetika visual presisi tinggi, dan strategi konversi teruji.
            </p>

            {/* Fast Metric Sparklines Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6 pt-4">
              <div className="p-4 rounded-xl bg-[#171b26] shadow-sm flex flex-col gap-1 border border-white/5">
                <span className="text-[10px] uppercase font-bold text-[#8c909f] tracking-wider">
                  Kecepatan Render
                </span>
                <div className="flex items-baseline gap-1">
                  <span className="font-display text-xl md:text-2xl text-[#4cd7f6] font-bold tabular-nums">
                    &lt; 0.8s
                  </span>
                  <span className="text-xs text-[#8c909f]">LCP Average</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#171b26] shadow-sm flex flex-col gap-1 border border-white/5">
                <span className="text-[10px] uppercase font-bold text-[#8c909f] tracking-wider">
                  Target PageSpeed
                </span>
                <div className="flex items-baseline gap-1">
                  <span className="font-display text-xl md:text-2xl text-[#adc6ff] font-bold tabular-nums">
                    98+
                  </span>
                  <span className="text-xs text-[#8c909f]">Core Vitals</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#171b26] shadow-sm flex flex-col gap-1 border border-white/5">
                <span className="text-[10px] uppercase font-bold text-[#8c909f] tracking-wider">
                  Garansi Retensi
                </span>
                <div className="flex items-baseline gap-1">
                  <span className="font-display text-xl md:text-2xl text-[#c0c1ff] font-bold tabular-nums">
                    100%
                  </span>
                  <span className="text-xs text-[#8c909f]">Clean Code</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#171b26] shadow-sm flex flex-col gap-1 border border-white/5">
                <span className="text-[10px] uppercase font-bold text-[#8c909f] tracking-wider">
                  Waktu Deployment
                </span>
                <div className="flex items-baseline gap-1">
                  <span className="font-display text-xl md:text-2xl text-[#4cd7f6] font-bold tabular-nums">
                    7-21
                  </span>
                  <span className="text-xs text-[#8c909f]">Hari Kerja</span>
                </div>
              </div>
            </div>
          </div>

          {/* Category Filter Tabs */}
          <div className="pt-10 flex flex-wrap items-center gap-2">
            {[
              { id: 'all', label: 'Semua Layanan' },
              { id: 'landing-page', label: 'Landing Page Ads' },
              { id: 'company-profile', label: 'Company Profile' },
              { id: 'ecommerce', label: 'E-Commerce Indonesia' },
              { id: 'redesign', label: 'Redesign & Speed Boost' },
            ].map((tab) => {
              const active = selectedFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setSelectedFilter(tab.id as typeof selectedFilter)}
                  className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                    active
                      ? 'bg-[#4d8eff] text-[#00285d] shadow-md font-bold'
                      : 'bg-[#1c1f2a] text-[#c2c6d6] hover:text-[#dfe2f1] hover:bg-[#262a35] border border-white/5'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </section>

        {/* Detailed Services Modules (Asymmetric Bento Grids) */}
        <section className="max-w-[1280px] mx-auto px-5 md:px-12 py-8 flex flex-col gap-10">
          {/* SERVICE 01: High-Converting Landing Page */}
          {(selectedFilter === 'all' || selectedFilter === 'landing-page') && (
            <article className="rounded-2xl bg-[#171b26] p-6 md:p-10 shadow-xl border border-white/5 transition-all duration-300 hover:shadow-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <span className="text-[11px] font-bold text-[#adc6ff] uppercase bg-[#313540] px-3 py-1 rounded">
                      Layanan 01
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs text-[#4cd7f6] font-medium">
                      <Icon name="bolt" className=" text-sm" />
                      Ideal untuk Meta Ads & Google PPC
                    </span>
                  </div>
                  <h2 className="font-display text-2xl md:text-3xl text-[#dfe2f1] font-bold tracking-tight">
                    High-Converting Landing Page
                  </h2>
                  <p className="text-sm text-[#c2c6d6] leading-relaxed">
                    Didesain khusus untuk kampanye iklan berbayar dengan fokus tunggal: memaksimalkan ROAS dan mengubah traffic dingin menjadi prospek siap beli. Struktur copywriting hipnotik berbasis riset psikologi pembeli Indonesia dengan waktu pemuatan instan tanpa jeda.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <div className="flex items-start gap-3 p-3 rounded-xl bg-[#1c1f2a] border border-white/5">
                      <Icon name="timer_10" className=" text-[#adc6ff] text-2xl" />
                      <div>
                        <h4 className="text-xs font-semibold text-[#dfe2f1]">Load Sub-1 Detik</h4>
                        <p className="text-[11px] text-[#8c909f] mt-0.5">
                          Optimasi aset WebP generasi baru & minified code untuk mencegah bounce rate iklan.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 rounded-xl bg-[#1c1f2a] border border-white/5">
                      <Icon name="forum" className=" text-[#4cd7f6] text-2xl" />
                      <div>
                        <h4 className="text-xs font-semibold text-[#dfe2f1]">
                          Integrasi WhatsApp Lead
                        </h4>
                        <p className="text-[11px] text-[#8c909f] mt-0.5">
                          Rotator customer service otomatis dengan pesan pre-filled terpersonalisasi.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 rounded-xl bg-[#1c1f2a] border border-white/5">
                      <Icon name="insights" className=" text-[#c0c1ff] text-2xl" />
                      <div>
                        <h4 className="text-xs font-semibold text-[#dfe2f1]">
                          Pixel & Server CAPI Ready
                        </h4>
                        <p className="text-[11px] text-[#8c909f] mt-0.5">
                          Setup Meta Conversions API & GA4 Event Tracking akurat bebas gangguan AdBlocker.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 rounded-xl bg-[#1c1f2a] border border-white/5">
                      <Icon name="security_update_good" className=" text-[#adc6ff] text-2xl" />
                      <div>
                        <h4 className="text-xs font-semibold text-[#dfe2f1]">
                          A/B Testing Framework
                        </h4>
                        <p className="text-[11px] text-[#8c909f] mt-0.5">
                          Kompatibel untuk pengujian variasi headline dan hook penawaran berkala.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center gap-4 pt-3">
                    <button
                      onClick={onOpenConsultation}
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#4d8eff] text-[#00285d] font-semibold text-sm hover:bg-[#adc6ff] transition-all shadow-md"
                    >
                      <span>Pesan Landing Page</span>
                      <Icon name="arrow_forward" className=" text-sm" />
                    </button>
                    <span className="text-xs text-[#8c909f] flex items-center gap-1.5">
                      <Icon name="check_circle" className=" text-sm text-[#4cd7f6]" />
                      Estimasi pengerjaan 5-7 hari
                    </span>
                  </div>
                </div>
                <div className="lg:col-span-5 flex flex-col gap-4">
                  <div className="relative overflow-hidden rounded-xl bg-[#1c1f2a] shadow-2xl group border border-white/5">
                    <LazyImage
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAH3JuSJwlyQzJDpmKVUJdyTUpYSINYcMym6n8dT7fKgWkVbW21hx8QXCF81jbgr9W6m2FEb62CQSwN7dmEkJSQl7gKWMFi62zyja1sbRKfBDq57nO299qmrPMpJLVzUst0NYxi_DUkSRBLfy9h9n8IrN6d367Hwl7juyW0ecXVN4ky0Y2JU-RC3qSaE6tbf8ZOCpHfeN4XbkuXfDti-kYZ8eCj1CXEpBNrEqbqKkOjzW28yFkQio3M"
                      alt="High converting SaaS landing page analytics mockup"
                      className="w-full h-80 object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e18] via-transparent to-transparent opacity-85" />
                    <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-[#171b26]/90 backdrop-blur-md flex items-center justify-between border border-white/10">
                      <div>
                        <p className="text-[10px] font-bold text-[#4cd7f6] uppercase">
                          Hasil Teruji Klien
                        </p>
                        <p className="text-xs font-bold text-[#dfe2f1]">
                          +184% Conversion Rate Growth
                        </p>
                      </div>
                      <div className="w-9 h-9 rounded-full bg-[#4d8eff]/20 flex items-center justify-center text-[#adc6ff]">
                        <Icon name="trending_up" className=" text-base" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          )}

          {/* SERVICE 02: Corporate & Company Profile */}
          {(selectedFilter === 'all' || selectedFilter === 'company-profile') && (
            <article className="rounded-2xl bg-[#171b26] p-6 md:p-10 shadow-xl border border-white/5 transition-all duration-300 hover:shadow-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-5 order-2 lg:order-1 flex flex-col gap-4">
                  <div className="relative overflow-hidden rounded-xl bg-[#1c1f2a] shadow-2xl group border border-white/5">
                    <LazyImage
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBO35wX1LAuQZK3Q_rETQiDZV_wM6ldnNALB4nEMSIvzXjxRwhyD2E5Qnk3LNhvhtPt4yHd0SyTW3H0oGlwdSnSzeMEP5KdugYn9Nact3lB4pgmShI8C-AFjk2WZDAK_KlsNW-zZyrs-FUHdoDCEeUpM_wClQamMas66lRh_oYarYZj3deVbLu-AHWNQ98veagTNVG9j870bjEOxnPTcjYYjyve1_sbgfUyOhF4SFWg5svZ7CoFB9rx"
                      alt="Corporate enterprise web mockup"
                      className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e18] via-transparent to-transparent opacity-85" />
                    <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-[#171b26]/90 backdrop-blur-md flex items-center justify-between border border-white/10">
                      <div>
                        <p className="text-[10px] font-bold text-[#adc6ff] uppercase">
                          Skala Korporat
                        </p>
                        <p className="text-xs font-bold text-[#dfe2f1]">
                          Multi-Bahasa & Investor Relations
                        </p>
                      </div>
                      <Icon name="domain" className=" text-[#adc6ff] text-xl" />
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <span className="text-[11px] font-bold text-[#c0c1ff] uppercase bg-[#313540] px-3 py-1 rounded">
                      Layanan 02
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs text-[#c0c1ff] font-medium">
                      <Icon name="verified_user" className=" text-sm" />
                      Otoritas & Kredibilitas Enterprise
                    </span>
                  </div>
                  <h2 className="font-display text-2xl md:text-3xl text-[#dfe2f1] font-bold tracking-tight">
                    Corporate & Company Profile
                  </h2>
                  <p className="text-sm text-[#c2c6d6] leading-relaxed">
                    Representasikan prestise organisasi Anda melalui kehadiran digital kelas eksekutif. Dirancang khusus untuk holding enterprise, institusi finansial, manufaktur B2B, dan startup pendanaan Series A+ yang membutuhkan citra berwibawa di hadapan mitra strategis serta klien institusional.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <div className="flex items-start gap-3 p-3 rounded-xl bg-[#1c1f2a] border border-white/5">
                      <Icon name="account_tree" className=" text-[#c0c1ff] text-2xl" />
                      <div>
                        <h4 className="text-xs font-semibold text-[#dfe2f1]">
                          Arsitektur Multi-Halaman
                        </h4>
                        <p className="text-[11px] text-[#8c909f] mt-0.5">
                          Struktur konten komprehensif: Tentang Kami, Board of Directors, Lini Bisnis, dan Hubungan Investor.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 rounded-xl bg-[#1c1f2a] border border-white/5">
                      <Icon name="translate" className=" text-[#adc6ff] text-2xl" />
                      <div>
                        <h4 className="text-xs font-semibold text-[#dfe2f1]">
                          Dukungan Multilingual
                        </h4>
                        <p className="text-[11px] text-[#8c909f] mt-0.5">
                          Pilihan dwibahasa (ID/EN) otomatis dengan routing URL SEO-friendly tanpa penurunan performa.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 rounded-xl bg-[#1c1f2a] border border-white/5">
                      <Icon name="badge" className=" text-[#4cd7f6] text-2xl" />
                      <div>
                        <h4 className="text-xs font-semibold text-[#dfe2f1]">
                          Portal Karir & Rekrutmen
                        </h4>
                        <p className="text-[11px] text-[#8c909f] mt-0.5">
                          Formulir pendaftaran talenta terhubung langsung ke dashboard HR internal atau email korporat.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 rounded-xl bg-[#1c1f2a] border border-white/5">
                      <Icon name="shield" className=" text-[#c0c1ff] text-2xl" />
                      <div>
                        <h4 className="text-xs font-semibold text-[#dfe2f1]">
                          Sertifikasi & Kepatuhan
                        </h4>
                        <p className="text-[11px] text-[#8c909f] mt-0.5">
                          Modul pameran ISO, regulasi kepatuhan OJK/Bappebti, serta rekam jejak legal terverifikasi.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center gap-4 pt-3">
                    <button
                      onClick={onOpenConsultation}
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#262a35] text-[#dfe2f1] font-semibold text-sm hover:bg-[#313540] transition-all border border-white/5"
                    >
                      <span>Bangun Web Korporat</span>
                      <Icon name="arrow_forward" className=" text-sm text-[#c0c1ff]" />
                    </button>
                    <span className="text-xs text-[#8c909f] flex items-center gap-1.5">
                      <Icon name="check_circle" className=" text-sm text-[#adc6ff]" />
                      Estimasi pengerjaan 14-21 hari
                    </span>
                  </div>
                </div>
              </div>
            </article>
          )}

          {/* SERVICE 03: E-Commerce & Toko Online D2C */}
          {(selectedFilter === 'all' || selectedFilter === 'ecommerce') && (
            <article className="rounded-2xl bg-[#171b26] p-6 md:p-10 shadow-xl border border-white/5 transition-all duration-300 hover:shadow-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <span className="text-[11px] font-bold text-[#4cd7f6] uppercase bg-[#313540] px-3 py-1 rounded">
                      Layanan 03
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs text-[#4cd7f6] font-medium">
                      <Icon name="payments" className=" text-sm" />
                      Pembayaran Otomatis & Logistik Terpadu
                    </span>
                  </div>
                  <h2 className="font-display text-2xl md:text-3xl text-[#dfe2f1] font-bold tracking-tight">
                    E-Commerce & Toko Online D2C
                  </h2>
                  <p className="text-sm text-[#c2c6d6] leading-relaxed">
                    Miliki saluran penjualan mandiri tanpa potongan komisi marketplace. Platform e-commerce modular yang dibangun dengan integrasi payment gateway lokal Indonesia paling andal, perhitungan ongkos kirim real-time hingga tingkat kecamatan, dan manajemen inventori yang intuitif.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <div className="flex items-start gap-3 p-3 rounded-xl bg-[#1c1f2a] border border-white/5">
                      <Icon name="account_balance_wallet" className=" text-[#4cd7f6] text-2xl" />
                      <div>
                        <h4 className="text-xs font-semibold text-[#dfe2f1]">
                          Midtrans / Xendit Gateway
                        </h4>
                        <p className="text-[11px] text-[#8c909f] mt-0.5">
                          Terima QRIS, Virtual Account (BCA, Mandiri, BRI, BNI), ShopeePay, GoPay, dan Kartu Kredit instan.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 rounded-xl bg-[#1c1f2a] border border-white/5">
                      <Icon name="local_shipping" className=" text-[#adc6ff] text-2xl" />
                      <div>
                        <h4 className="text-xs font-semibold text-[#dfe2f1]">
                          Ongkir Otomatis RajaOngkir
                        </h4>
                        <p className="text-[11px] text-[#8c909f] mt-0.5">
                          Sinkronisasi tarif JNE, J&T, SiCepat, AnterAja, dan Paxel dengan pelacakan resi otomatis.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 rounded-xl bg-[#1c1f2a] border border-white/5">
                      <Icon name="inventory_2" className=" text-[#c0c1ff] text-2xl" />
                      <div>
                        <h4 className="text-xs font-semibold text-[#dfe2f1]">
                          Katalog & Varian Fleksibel
                        </h4>
                        <p className="text-[11px] text-[#8c909f] mt-0.5">
                          Filter atribut produk dinamis (ukuran, warna, SKU), peringatan stok menipis, dan bundle diskon.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 rounded-xl bg-[#1c1f2a] border border-white/5">
                      <Icon name="shopping_bag" className=" text-[#4cd7f6] text-2xl" />
                      <div>
                        <h4 className="text-xs font-semibold text-[#dfe2f1]">
                          Abandoned Cart Recovery
                        </h4>
                        <p className="text-[11px] text-[#8c909f] mt-0.5">
                          Pengingat keranjang belanja via WhatsApp otomatis untuk menyelamatkan potensi transaksi hilang.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center gap-4 pt-3">
                    <button
                      onClick={onOpenConsultation}
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#009eb9] hover:bg-[#4cd7f6] text-[#002f38] font-semibold text-sm transition-all shadow-md font-bold"
                    >
                      <span>Rilis Toko Online Anda</span>
                      <Icon name="arrow_forward" className=" text-sm" />
                    </button>
                    <span className="text-xs text-[#8c909f] flex items-center gap-1.5">
                      <Icon name="check_circle" className=" text-sm text-[#4cd7f6]" />
                      Estimasi pengerjaan 14-25 hari
                    </span>
                  </div>
                </div>
                <div className="lg:col-span-5 flex flex-col gap-4">
                  <div className="relative overflow-hidden rounded-xl bg-[#1c1f2a] shadow-2xl group border border-white/5">
                    <LazyImage
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuACXwWs04mohB8CvHG_KB2PRWF9c5V_nl1NedDzve88VN0DDKcWlz3QQ_LQyTrpgWhXaQP35OOC6Hn3DtaYSfVb6C3fsbc0tDomxVtDeOPQko7KW7K3auuUTLDUBRv74_I-t8U_moufZIHd5C0c0gcBFJ9s3F9_8Cjayi15mcRaQUjKZXnkVHjcLfjNJUmI22NDvXuIP10mNqdmoFcHB1jGgmCje5_qlXF71icDYfl6C-piB5w-pX0C"
                      alt="Modern Indonesian e-commerce checkout showcase"
                      className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e18] via-transparent to-transparent opacity-85" />
                    <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-[#171b26]/90 backdrop-blur-md flex items-center justify-between border border-white/10">
                      <div>
                        <p className="text-[10px] font-bold text-[#4cd7f6] uppercase">
                          Infrastruktur Transaksi
                        </p>
                        <p className="text-xs font-bold text-[#dfe2f1]">
                          0% Biaya Potongan Platform Studio
                        </p>
                      </div>
                      <Icon name="point_of_sale" className=" text-[#4cd7f6] text-xl" />
                    </div>
                  </div>
                </div>
              </div>
            </article>
          )}

          {/* SERVICE 04: Redesign & Performa Upgrade with Interactive Lighthouse Comparison */}
          {(selectedFilter === 'all' || selectedFilter === 'redesign') && (
            <article className="rounded-2xl bg-[#171b26] p-6 md:p-10 shadow-xl border border-white/5 transition-all duration-300 hover:shadow-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-5 order-2 lg:order-1 flex flex-col gap-4">
                  {/* Inline Interactive Speed Comparison Visual */}
                  <div className="p-6 rounded-2xl bg-[#1c1f2a] flex flex-col gap-4 border border-white/5 shadow-inner">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#adc6ff]">
                      Tolok Ukur Google Lighthouse
                    </span>
                    {/* Before Bar */}
                    <div className="flex flex-col gap-1.5">
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-[#ffb4ab] font-medium">Website Lama Klien</span>
                        <span className="text-[#ffb4ab] font-bold tabular-nums">34 / 100</span>
                      </div>
                      <div className="w-full h-3 bg-[#313540] rounded-full overflow-hidden">
                        <div className="w-[34%] h-full bg-[#ffb4ab] rounded-full" />
                      </div>
                      <span className="text-[#8c909f] text-[10px]">
                        LCP: 4.8s • Bloated Plugins • Bad SEO
                      </span>
                    </div>
                    {/* After Bar */}
                    <div className="flex flex-col gap-1.5">
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-[#4cd7f6] font-medium">Hasil Rekayasa KeuvaWeb</span>
                        <span className="text-[#4cd7f6] font-bold tabular-nums">99 / 100</span>
                      </div>
                      <div className="w-full h-3 bg-[#313540] rounded-full overflow-hidden">
                        <div className="w-[99%] h-full bg-gradient-to-r from-[#adc6ff] to-[#4cd7f6] rounded-full" />
                      </div>
                      <span className="text-[#4cd7f6] text-[10px]">
                        LCP: 0.6s • Clean Next.js SSR • 100% SEO
                      </span>
                    </div>
                    <div className="pt-2 flex items-center justify-between bg-[#262a35] p-3 rounded-xl border border-white/5">
                      <span className="text-xs text-[#dfe2f1]">Penurunan Bounce Rate</span>
                      <span className="text-sm text-[#4cd7f6] font-bold tabular-nums">
                        -62% Rata-rata
                      </span>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <span className="text-[11px] font-bold text-[#adc6ff] uppercase bg-[#313540] px-3 py-1 rounded">
                      Layanan 04
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs text-[#adc6ff] font-medium">
                      <Icon name="speed" className=" text-sm" />
                      Revitalisasi Aset Digital Lama
                    </span>
                  </div>
                  <h2 className="font-display text-2xl md:text-3xl text-[#dfe2f1] font-bold tracking-tight">
                    Website Redesign & Speed Optimization
                  </h2>
                  <p className="text-sm text-[#c2c6d6] leading-relaxed">
                    Website Anda lambat, tampilan usang, atau sulit diakses di smartphone? Jangan biarkan kompetitor merebut pangsa pasar Anda. Kami merombak total tampilan visual, memigrasikan database tanpa kehilangan ranking SEO Google yang ada, dan mendongkrak performa teknis ke level elit.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <div className="flex items-start gap-3 p-3 rounded-xl bg-[#1c1f2a] border border-white/5">
                      <Icon name="architecture" className=" text-[#adc6ff] text-2xl" />
                      <div>
                        <h4 className="text-xs font-semibold text-[#dfe2f1]">
                          Modernisasi UI/UX Total
                        </h4>
                        <p className="text-[11px] text-[#8c909f] mt-0.5">
                          Desain ulang tata letak berstandar global terkini yang intuitif, ergonomis, dan mobile-first.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 rounded-xl bg-[#1c1f2a] border border-white/5">
                      <Icon name="swap_horiz" className=" text-[#4cd7f6] text-2xl" />
                      <div>
                        <h4 className="text-xs font-semibold text-[#dfe2f1]">
                          Migrasi Database Aman
                        </h4>
                        <p className="text-[11px] text-[#8c909f] mt-0.5">
                          Pemindahan konten, riwayat blog, URL redirect 301 rapi tanpa merusak traffic organik Google.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 rounded-xl bg-[#1c1f2a] border border-white/5">
                      <Icon name="clean_hands" className=" text-[#c0c1ff] text-2xl" />
                      <div>
                        <h4 className="text-xs font-semibold text-[#dfe2f1]">
                          Pembersihan Plugin Bloat
                        </h4>
                        <p className="text-[11px] text-[#8c909f] mt-0.5">
                          Menghapus script berat tak terpakai dan menggantinya dengan arsitektur native ringan.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 rounded-xl bg-[#1c1f2a] border border-white/5">
                      <Icon name="rocket_launch" className=" text-[#adc6ff] text-2xl" />
                      <div>
                        <h4 className="text-xs font-semibold text-[#dfe2f1]">
                          Garansi Skor Google 95+
                        </h4>
                        <p className="text-[11px] text-[#8c909f] mt-0.5">
                          Jaminan skor PageSpeed hijau baik di perangkat mobile maupun desktop.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center gap-4 pt-3">
                    <button
                      onClick={onOpenConsultation}
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#4d8eff] text-[#00285d] font-semibold text-sm hover:bg-[#adc6ff] transition-all shadow-md font-bold"
                    >
                      <span>Audit & Bedah Website Gratis</span>
                      <Icon name="troubleshoot" className=" text-sm" />
                    </button>
                    <span className="text-xs text-[#8c909f] flex items-center gap-1.5">
                      <Icon name="check_circle" className=" text-sm text-[#4cd7f6]" />
                      Selesai dalam 7-14 hari
                    </span>
                  </div>
                </div>
              </div>
            </article>
          )}
        </section>

        {/* SECTION: Tech Stack Showcase & Standar Kualitas KeuvaWeb */}
        <section className="max-w-[1280px] mx-auto px-5 md:px-12 py-16">
          <div className="p-6 md:p-10 rounded-2xl bg-[#171b26] shadow-xl flex flex-col gap-10 border border-white/5">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div className="flex flex-col gap-1.5 max-w-2xl">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#4cd7f6]">
                  Infrastruktur & Arsitektur
                </span>
                <h3 className="font-display text-2xl md:text-3xl text-[#dfe2f1] font-bold tracking-tight">
                  Teknologi Modern Tanpa Kompromi Kualitas
                </h3>
                <p className="text-sm text-[#c2c6d6]">
                  Kami tidak menggunakan template siap pakai yang berat. Setiap baris kode disusun presisi dengan teknologi industri terdepan demi skalabilitas jangka panjang bisnis Anda.
                </p>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1c1f2a] text-xs font-semibold text-[#8c909f] border border-white/5 w-fit">
                <Icon name="memory" className=" text-[#4cd7f6] text-sm" />
                <span>Standar Rekayasa Terkini</span>
              </div>
            </div>

            {/* Tech Stack Pills */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              <div className="p-4 rounded-xl bg-[#1c1f2a] flex flex-col items-center justify-center text-center gap-2 group hover:bg-[#262a35] transition-colors border border-white/5">
                <Icon name="code_blocks" className=" text-[#adc6ff] text-3xl group-hover:scale-110 transition-transform" />
                <span className="text-xs font-bold text-[#dfe2f1]">Next.js 14+</span>
                <span className="text-[10px] text-[#8c909f]">SSR & Edge Routing</span>
              </div>
              <div className="p-4 rounded-xl bg-[#1c1f2a] flex flex-col items-center justify-center text-center gap-2 group hover:bg-[#262a35] transition-colors border border-white/5">
                <Icon name="data_object" className=" text-[#4cd7f6] text-3xl group-hover:scale-110 transition-transform" />
                <span className="text-xs font-bold text-[#dfe2f1]">React.js</span>
                <span className="text-[10px] text-[#8c909f]">Interaktivitas Dinamis</span>
              </div>
              <div className="p-4 rounded-xl bg-[#1c1f2a] flex flex-col items-center justify-center text-center gap-2 group hover:bg-[#262a35] transition-colors border border-white/5">
                <Icon name="style" className=" text-[#c0c1ff] text-3xl group-hover:scale-110 transition-transform" />
                <span className="text-xs font-bold text-[#dfe2f1]">Tailwind CSS</span>
                <span className="text-[10px] text-[#8c909f]">Sistem Desain Ringan</span>
              </div>
              <div className="p-4 rounded-xl bg-[#1c1f2a] flex flex-col items-center justify-center text-center gap-2 group hover:bg-[#262a35] transition-colors border border-white/5">
                <Icon name="dashboard_customize" className=" text-[#adc6ff] text-3xl group-hover:scale-110 transition-transform" />
                <span className="text-xs font-bold text-[#dfe2f1]">WordPress Headless</span>
                <span className="text-[10px] text-[#8c909f]">CMS Ramah Pemula</span>
              </div>
              <div className="p-4 rounded-xl bg-[#1c1f2a] flex flex-col items-center justify-center text-center gap-2 group hover:bg-[#262a35] transition-colors border border-white/5">
                <Icon name="dns" className=" text-[#4cd7f6] text-3xl group-hover:scale-110 transition-transform" />
                <span className="text-xs font-bold text-[#dfe2f1]">Laravel API</span>
                <span className="text-[10px] text-[#8c909f]">Backend Kustom Kokoh</span>
              </div>
              <div className="p-4 rounded-xl bg-[#1c1f2a] flex flex-col items-center justify-center text-center gap-2 group hover:bg-[#262a35] transition-colors border border-white/5">
                <Icon name="cloud_sync" className=" text-[#c0c1ff] text-3xl group-hover:scale-110 transition-transform" />
                <span className="text-xs font-bold text-[#dfe2f1]">Cloudflare CDN</span>
                <span className="text-[10px] text-[#8c909f]">Anti-DDoS & Caching</span>
              </div>
            </div>

            {/* 4 Core Quality Assurance Pillars */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl bg-[#1c1f2a]/70 flex flex-col gap-2 border border-white/5">
                <div className="flex items-center gap-2 text-[#adc6ff]">
                  <Icon name="devices" className=" text-lg" />
                  <span className="text-xs font-bold">100% Mobile Responsive</span>
                </div>
                <p className="text-xs text-[#8c909f] leading-relaxed">
                  Tampilan presisi diuji di lebih dari 15 resolusi perangkat dari iPhone, Android layar lipat, tablet, hingga monitor ultrawide 4K.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-[#1c1f2a]/70 flex flex-col gap-2 border border-white/5">
                <div className="flex items-center gap-2 text-[#4cd7f6]">
                  <Icon name="travel_explore" className=" text-lg" />
                  <span className="text-xs font-bold">SEO On-Page Checklist</span>
                </div>
                <p className="text-xs text-[#8c909f] leading-relaxed">
                  Struktur heading H1-H3 tertata rapi, Schema markup JSON-LD organisasi lokal, OpenGraph preview medsos, dan sitemap XML instan.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-[#1c1f2a]/70 flex flex-col gap-2 border border-white/5">
                <div className="flex items-center gap-2 text-[#c0c1ff]">
                  <Icon name="save_as" className=" text-lg" />
                  <span className="text-xs font-bold">Keamanan SSL & Proteksi</span>
                </div>
                <p className="text-xs text-[#8c909f] leading-relaxed">
                  Enkripsi SSL Grade A+, proteksi brute-force login form, firewall Web Application (WAF), dan header keamanan HTTP modern.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-[#1c1f2a]/70 flex flex-col gap-2 border border-white/5">
                <div className="flex items-center gap-2 text-[#adc6ff]">
                  <Icon name="code_off" className=" text-lg" />
                  <span className="text-xs font-bold">Bebas Bloatware Berat</span>
                </div>
                <p className="text-xs text-[#8c909f] leading-relaxed">
                  Tanpa page builder lambat seperti Elementor berlebih. Kode tangan murni yang efisien, mudah dikembangkan, dan hemat beban server.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION: Layanan Tambahan (Add-ons Eksklusif) */}
        <section className="max-w-[1280px] mx-auto px-5 md:px-12 py-12">
          <div className="flex flex-col gap-1.5 mb-8">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#adc6ff]">
              Ekosistem Pendukung
            </span>
            <h3 className="font-display text-2xl md:text-3xl text-[#dfe2f1] font-bold tracking-tight">
              Layanan Tambahan (Add-ons) Komprehensif
            </h3>
            <p className="text-sm text-[#c2c6d6] max-w-2xl">
              Lengkapi website Anda dengan amunisi digital terbaik agar siap bersaing dan menghasilkan konversi sejak hari pertama online.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Addon 1 */}
            <div className="p-6 rounded-2xl bg-[#171b26] border border-white/5 flex flex-col justify-between gap-4 hover:bg-[#1c1f2a] transition-all">
              <div className="flex flex-col gap-2">
                <div className="w-12 h-12 rounded-xl bg-[#262a35] flex items-center justify-center text-[#adc6ff] mb-1">
                  <Icon name="edit_note" className=" text-2xl" />
                </div>
                <h4 className="font-display text-lg text-[#dfe2f1] font-bold">
                  Copywriting Persuasi
                </h4>
                <p className="text-xs text-[#8c909f] leading-relaxed">
                  Penulisan naskah website bernada persuasif oleh copywriter profesional. Menjawab keraguan calon pembeli dan menonjolkan Unique Selling Point (USP).
                </p>
              </div>
              <div className="pt-3 border-t border-white/5 flex items-center justify-between">
                <span className="text-[11px] font-bold text-[#4cd7f6]">Mulai IDR 1.250.000</span>
                <span className="text-xs text-[#8c909f]">Per 5 Halaman</span>
              </div>
            </div>

            {/* Addon 2 */}
            <div className="p-6 rounded-2xl bg-[#171b26] border border-white/5 flex flex-col justify-between gap-4 hover:bg-[#1c1f2a] transition-all">
              <div className="flex flex-col gap-2">
                <div className="w-12 h-12 rounded-xl bg-[#262a35] flex items-center justify-center text-[#4cd7f6] mb-1">
                  <Icon name="published_with_changes" className=" text-2xl" />
                </div>
                <h4 className="font-display text-lg text-[#dfe2f1] font-bold">
                  Maintenance Bulanan
                </h4>
                <p className="text-xs text-[#8c909f] leading-relaxed">
                  Update core CMS, pencadangan database mingguan di Cloud terpisah, pemantauan uptime 24/7, dan kuota revisi konten minor tanpa repot.
                </p>
              </div>
              <div className="pt-3 border-t border-white/5 flex items-center justify-between">
                <span className="text-[11px] font-bold text-[#adc6ff]">Mulai IDR 750.000</span>
                <span className="text-xs text-[#8c909f]">Per Bulan</span>
              </div>
            </div>

            {/* Addon 3 */}
            <div className="p-6 rounded-2xl bg-[#171b26] border border-white/5 flex flex-col justify-between gap-4 hover:bg-[#1c1f2a] transition-all">
              <div className="flex flex-col gap-2">
                <div className="w-12 h-12 rounded-xl bg-[#262a35] flex items-center justify-center text-[#c0c1ff] mb-1">
                  <Icon name="monitoring" className=" text-2xl" />
                </div>
                <h4 className="font-display text-lg text-[#dfe2f1] font-bold">
                  GA4 & Tag Manager
                </h4>
                <p className="text-xs text-[#8c909f] leading-relaxed">
                  Konfigurasi mendalam Google Tag Manager, pelacakan klik tombol WhatsApp, scroll depth, form submission, serta pembuatan dashboard Looker Studio.
                </p>
              </div>
              <div className="pt-3 border-t border-white/5 flex items-center justify-between">
                <span className="text-[11px] font-bold text-[#c0c1ff]">Mulai IDR 950.000</span>
                <span className="text-xs text-[#8c909f]">Sekali Bayar</span>
              </div>
            </div>

            {/* Addon 4 */}
            <div className="p-6 rounded-2xl bg-[#171b26] border border-white/5 flex flex-col justify-between gap-4 hover:bg-[#1c1f2a] transition-all">
              <div className="flex flex-col gap-2">
                <div className="w-12 h-12 rounded-xl bg-[#262a35] flex items-center justify-center text-[#adc6ff] mb-1">
                  <Icon name="palette" className=" text-2xl" />
                </div>
                <h4 className="font-display text-lg text-[#dfe2f1] font-bold">
                  Desain Logo & Brand Kit
                </h4>
                <p className="text-xs text-[#8c909f] leading-relaxed">
                  Desain identitas visual baru: logo vektor, panduan palet warna resmi, pedoman tipografi, serta aset favicon dan kartu nama digital profesional.
                </p>
              </div>
              <div className="pt-3 border-t border-white/5 flex items-center justify-between">
                <span className="text-[11px] font-bold text-[#4cd7f6]">Mulai IDR 2.000.000</span>
                <span className="text-xs text-[#8c909f]">Paket Lengkap</span>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION: Interactive Scope / Cost Estimator Widget */}
        <section className="max-w-[1280px] mx-auto px-5 md:px-12 py-16">
          <div className="p-6 md:p-12 rounded-3xl bg-gradient-to-br from-[#262a35] to-[#1c1f2a] shadow-2xl relative overflow-hidden border border-white/10">
            <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-[#4d8eff]/20 rounded-full blur-3xl pointer-events-none" />
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              <div className="lg:col-span-7 flex flex-col gap-4">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#4cd7f6]">
                  Kalkulator Estimasi KeuvaWeb
                </span>
                <h3 className="font-display text-2xl md:text-3xl text-[#dfe2f1] font-bold tracking-tight">
                  Kustomisasi Kebutuhan Proyek Anda
                </h3>
                <p className="text-sm text-[#c2c6d6] leading-relaxed">
                  Tentukan fitur inti yang Anda perlukan. Dapatkan gambaran durasi pengerjaan dan estimasi investasi transparan sebelum sesi diskusi teknis.
                </p>

                {/* Selection Checklist */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {ESTIMATOR_OPTIONS.map((opt) => (
                    <label
                      key={opt.id}
                      onClick={() => handleToggleEstimator(opt.id)}
                      className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all border ${
                        checkedEstimator[opt.id]
                          ? 'bg-[#171b26] border-[#4d8eff]/40 text-white'
                          : 'bg-[#171b26]/60 border-white/5 text-[#c2c6d6] hover:bg-[#171b26]'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={!!checkedEstimator[opt.id]}
                        onChange={() => {}}
                        className="w-5 h-5 accent-[#4d8eff] rounded cursor-pointer"
                      />
                      <span className="text-xs font-semibold">{opt.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Dynamic Output Card */}
              <div className="lg:col-span-5 p-6 md:p-8 rounded-2xl bg-[#0a0e18] shadow-2xl flex flex-col gap-5 border border-white/10">
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#8c909f]">
                  Ringkasan Estimasi
                </span>
                <div className="flex flex-col gap-1">
                  <span className="text-xs text-[#8c909f]">Perkiraan Nilai Investasi:</span>
                  <div className="flex items-baseline gap-1">
                    <span className="font-display text-3xl font-black text-[#4cd7f6] tabular-nums">
                      {formattedCost}
                    </span>
                  </div>
                  <span className="text-xs text-[#8c909f]">
                    Harga transparan tanpa biaya tersembunyi.
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-[#171b26] flex items-center justify-between border border-white/5">
                  <div className="flex items-center gap-2 text-[#dfe2f1]">
                    <Icon name="calendar_month" className=" text-[#4d8eff] text-xl" />
                    <span className="text-xs font-medium">Estimasi Waktu Pengerjaan:</span>
                  </div>
                  <span className="text-sm font-bold text-[#adc6ff] tabular-nums">
                    ~{calculatedDays} Hari Kerja
                  </span>
                </div>

                <p className="text-xs text-[#8c909f] leading-relaxed">
                  Setiap paket mencakup garansi bug teknis 30 hari, pelatihan admin via Google Meet, dan source code penuh.
                </p>

                <button
                  onClick={onOpenConsultation}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#4d8eff] to-[#3131c0] text-white font-bold text-sm hover:brightness-110 active:scale-[0.99] transition-all shadow-lg"
                >
                  <span>Ajukan Spesifikasi Ini ke Konsultan</span>
                  <Icon name="send" className=" text-sm" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Final Strategic CTA Section */}
        <section className="max-w-[1280px] mx-auto px-5 md:px-12 py-12 mb-12">
          <div className="p-6 md:p-10 rounded-2xl bg-[#262a35] shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 border border-white/10">
            <div className="flex flex-col gap-1.5 max-w-xl">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#4cd7f6]">
                Diskusi Eksklusif
              </span>
              <h3 className="font-display text-2xl md:text-3xl text-[#dfe2f1] font-bold tracking-tight">
                Punya Kebutuhan Spesifik di Luar Paket Ini?
              </h3>
              <p className="text-sm text-[#c2c6d6] leading-relaxed">
                Kami siap mengembangkan arsitektur custom web app, platform SaaS multi-tenant, atau sistem portal internal perusahaan yang sepenuhnya dipersonalisasi.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
              <button
                onClick={onOpenConsultation}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#4d8eff] text-[#00285d] font-bold text-sm hover:bg-[#adc6ff] transition-all shadow-md"
              >
                <Icon name="calendar_today" className=" text-base" />
                <span>Jadwalkan Konsultasi Gratis</span>
              </button>
              <a
                href="https://wa.me/6281298432865"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#1c1f2a] text-[#dfe2f1] font-semibold text-sm hover:bg-[#313540] transition-all border border-white/5"
              >
                <Icon name="chat" className=" text-[#25D366] text-base" />
                <span>Tanya via WhatsApp</span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
