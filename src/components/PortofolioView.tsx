import { Icon } from './Icon';
import React, { useState } from 'react';
import { CaseStudy } from '../types';
import { LazyImage } from './LazyImage';

interface PortofolioViewProps {
  onOpenConsultation: () => void;
}

const CASE_STUDIES: CaseStudy[] = [
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
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCGlqkOCosPVRXvYZM96ctk1kfiU2dzybng0itMHy8JNC3MNvIFee-eIxgD_B3gPylXejYsQEjFrafzIedcD-JejQDaDoRge-ZkrTiTGX3H0U8AkX1ZvgTHgqb6WZjjUlcqqNWey0mhRT0AfIJcmarvAJRHT2KrjFxfuEv8vfW61_C49YrFBEjSyWlvJFgguC7JX0BpbIjh-GvNYJEUm138Z29_G_XpOHq5AlJLtcd_tWhu4SHYWIqk',
    imageAlt: 'PT Finansia Solusi B2B Portal',
    tags: ['Next.js 14', 'HubSpot CRM Sync', 'Tailwind CSS', 'PostgreSQL'],
    results: [
      { label: 'Conversion Rate', value: '+240%' },
      { label: 'PageSpeed Score', value: '100/100' },
      { label: 'Monthly Inbound Leads', value: '380+' },
    ],
    challenge: 'Website lama berbasis template monolitik lambat (LCP > 4.2s), gagal meyakinkan komite tender perbankan nasional.',
    solution: 'Rekayasa ulang dengan Next.js Server Components, integrasi autentikasi perbankan, dan formulir booking bertahap tanpa reload.',
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
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB6ilC_ZCNAgpaDOIGyk7_-sr88MzHzVpnB3NlTEhCLP5gudCvlBw-ZhO9SPp9Ej9YkqmQLk9fg25NlrmNqpUcbVUCq2Cv4Da4Qk10Y3FT0Kq26VUPTvcfx_Acswmap1gTUZdfUVYRtdT4ull3W29Sl21KAPax6lEf68m2cdomfZEHoDD7dw-3VQnsh8f85uEMynfojICTixtNqXMucAo7W9CPRlROKMsDHynScdyrcyzE2KcUdFaMy',
    imageAlt: 'AURA Label Luxury E-Commerce',
    tags: ['Headless Shopify', 'Midtrans Gateway', 'RajaOngkir API', 'Redis'],
    results: [
      { label: 'Gross Merchandise Value', value: '+185%' },
      { label: 'Cart Abandonment', value: '-40%' },
      { label: 'Mobile Render Time', value: '0.74s' },
    ],
    challenge: 'Tingginya cart abandonment akibat proses checkout konvensional yang memuat 4 halaman bertingkat.',
    solution: 'Penerapan arsitektur headless dengan modul checkout 1-halaman, integrasi QRIS instan, dan kalkulator ongkir otomatis.',
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
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBSBUWBrQ24tb9S2UGzYvXjmT24pT5bpQKGsA0skKY9YvOSlXzeybiWmfzitu0re_nSR3TOBlMRWQq9GWsV1wyqqBr35rKJvvIID_gcAR_DpLim89fv5u0Bl5h6RoOLaPBQC0p7Pgom39TB2Lssm79H7uDLOkjSizRuZDTrs5edoq4Gm2sEcsui7jNNuWPjHJTjsQIZSY0p6i-bx6fAPUSpph_eZjjjpC0PCC5-x7dY2eiVlL-msGmh',
    imageAlt: 'PT Mitra Perkasa Teknik Heavy Machinery',
    tags: ['Bilingual ID/EN', 'Cloudflare Enterprise', 'Schema B2B', 'React SSR'],
    results: [
      { label: 'Export Lead Inquiries', value: '+300%' },
      { label: 'Top-3 Google Keywords', value: '14 Keywords' },
      { label: 'Global PageSpeed', value: '99/100' },
    ],
    challenge: 'Ketiadaan representasi digital kredibel berbahasa Inggris membuat buyer internasional ragu bertransaksi volume besar.',
    solution: 'Desain korporat berwibawa dengan sertifikasi ISO interaktif, katalog spesifikasi teknis dinamis, dan routing multibahasa instan.',
  },
];

export const PortofolioView: React.FC<PortofolioViewProps> = ({ onOpenConsultation }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);

  const categories = [
    { id: 'all', label: 'Semua Studi Kasus' },
    { id: 'Fintech & B2B SaaS', label: 'Fintech & B2B SaaS' },
    { id: 'Luxury DTC E-Commerce', label: 'DTC E-Commerce' },
    { id: 'Manufaktur & Heavy Industry', label: 'Manufaktur & Industri' },
  ];

  const filteredCases =
    selectedCategory === 'all'
      ? CASE_STUDIES
      : CASE_STUDIES.filter((c) => c.category === selectedCategory);

  return (
    <div className="w-full">
      {/* Hero Header */}
      <section className="max-w-[1280px] mx-auto px-5 md:px-12 pt-12 md:pt-16 pb-8">
        <div className="flex flex-col gap-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#262a35] w-fit shadow-sm border border-white/5">
            <span className="w-2 h-2 rounded-full bg-[#4cd7f6] animate-pulse"></span>
            <span className="text-[11px] font-bold text-[#4cd7f6] tracking-widest uppercase">
              Rekam Jejak Kinerja Nyata
            </span>
          </div>

          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl text-[#dfe2f1] font-extrabold tracking-tight leading-tight">
            Karya Unggulan yang{' '}
            <span className="bg-gradient-to-r from-[#adc6ff] to-[#4cd7f6] bg-clip-text text-transparent">
              Membuktikan Dampak
            </span>{' '}
            Omset Klien.
          </h1>

          <p className="text-base text-[#c2c6d6] leading-relaxed">
            Eksplorasi bagaimana arsitektur kode bersih, performa loading sub-detik, dan desain persuasif kami mentransformasi indikator bisnis klien di berbagai sektor industri.
          </p>

          {/* Filter Pills */}
          <div className="pt-4 flex flex-wrap gap-2">
            {categories.map((cat) => {
              const active = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs md:text-sm font-semibold transition-all ${
                    active
                      ? 'bg-[#4d8eff] text-[#00285d] font-bold shadow-md'
                      : 'bg-[#171b26] text-[#c2c6d6] hover:bg-[#262a35] border border-white/5'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Grid of Case Studies with Lazy Loading */}
      <section className="max-w-[1280px] mx-auto px-5 md:px-12 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCases.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedCase(item)}
              className="rounded-2xl bg-[#171b26] border border-white/5 overflow-hidden flex flex-col justify-between shadow-xl cursor-pointer hover:border-[#4d8eff]/40 hover:-translate-y-1 transition-all duration-300 group"
            >
              <div>
                <div className="relative w-full h-56 bg-[#1c1f2a] overflow-hidden">
                  <LazyImage
                    src={item.imageUrl}
                    alt={item.imageAlt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#0a0e18]/90 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold text-[#adc6ff] border border-white/10">
                    {item.category}
                  </div>
                  <div className="absolute bottom-3 right-3 bg-[#171b26]/90 backdrop-blur-md px-2.5 py-1 rounded-lg text-xs font-bold text-[#4cd7f6] border border-white/10">
                    {item.metricBadge}
                  </div>
                </div>

                <div className="p-6 flex flex-col gap-3">
                  <span className="text-[11px] uppercase font-bold text-[#8c909f]">
                    {item.client}
                  </span>
                  <h3 className="font-display text-lg text-[#dfe2f1] font-bold leading-snug group-hover:text-[#adc6ff] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#8c909f] leading-relaxed line-clamp-3">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {item.tags.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded bg-[#1c1f2a] text-[10px] text-[#c2c6d6] border border-white/5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-white/5 flex items-center justify-between text-xs">
                <span className="text-[#4cd7f6] font-medium flex items-center gap-1">
                  <Icon name="speed" className=" text-sm" />
                  Load: {item.loadSpeed}
                </span>
                <span className="text-[#adc6ff] font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Detail Studi Kasus →
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Case Study Detail Modal */}
      {selectedCase && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-3xl rounded-3xl bg-[#171b26] border border-white/10 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
            {/* Header */}
            <div className="p-5 bg-[#1c1f2a] border-b border-white/5 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#4cd7f6]">
                  {selectedCase.category}
                </span>
                <h3 className="font-display text-lg font-bold text-white">
                  {selectedCase.client}
                </h3>
              </div>
              <button
                onClick={() => setSelectedCase(null)}
                className="w-8 h-8 rounded-lg bg-[#262a35] hover:bg-[#313540] text-white flex items-center justify-center transition-colors"
              >
                <Icon name="close" className=" text-base" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 overflow-y-auto space-y-6">
              <div className="w-full h-64 rounded-2xl overflow-hidden bg-[#1c1f2a]">
                <LazyImage
                  src={selectedCase.imageUrl}
                  alt={selectedCase.imageAlt}
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <h4 className="font-display text-xl font-bold text-[#dfe2f1] mb-2">
                  {selectedCase.title}
                </h4>
                <p className="text-sm text-[#c2c6d6] leading-relaxed">
                  {selectedCase.description}
                </p>
              </div>

              {/* Key Results Grid */}
              <div className="grid grid-cols-3 gap-4 p-4 rounded-2xl bg-[#1c1f2a] border border-white/5">
                {selectedCase.results.map((r, i) => (
                  <div key={i} className="flex flex-col text-center">
                    <span className="font-display text-xl md:text-2xl font-bold text-[#4cd7f6] tabular-nums">
                      {r.value}
                    </span>
                    <span className="text-[11px] text-[#8c909f] mt-0.5">{r.label}</span>
                  </div>
                ))}
              </div>

              {/* Challenge & Solution */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-[#262a35]/60 border border-white/5">
                  <h5 className="text-xs font-bold text-[#ffb4ab] uppercase tracking-wider mb-1 flex items-center gap-1.5">
                    <Icon name="warning" className=" text-sm" />
                    Tantangan Awal
                  </h5>
                  <p className="text-xs text-[#c2c6d6] leading-relaxed">
                    {selectedCase.challenge}
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-[#262a35]/60 border border-white/5">
                  <h5 className="text-xs font-bold text-[#4cd7f6] uppercase tracking-wider mb-1 flex items-center gap-1.5">
                    <Icon name="check_circle" className=" text-sm" />
                    Solusi Rekayasa KeuvaWeb
                  </h5>
                  <p className="text-xs text-[#c2c6d6] leading-relaxed">
                    {selectedCase.solution}
                  </p>
                </div>
              </div>

              {/* Action buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/5">
                <div className="flex flex-wrap gap-2">
                  {selectedCase.tags.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded bg-[#1c1f2a] text-xs text-[#adc6ff] border border-white/5"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <button
                  onClick={() => {
                    setSelectedCase(null);
                    onOpenConsultation();
                  }}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#4d8eff] to-[#3131c0] text-white font-bold text-xs hover:brightness-110 shadow-lg"
                >
                  Konsultasikan Proyek Serupa →
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
