import { Icon } from './Icon';
import React, { useState } from 'react';
import { NavTab } from '../types';

interface ProsesViewProps {
  onTabChange: (tab: NavTab) => void;
  onOpenConsultation: () => void;
}

export const ProsesView: React.FC<ProsesViewProps> = ({ onTabChange, onOpenConsultation }) => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: '01',
      title: 'Discovery & Brief Strategis',
      tagline: 'Membedah Anatomi Bisnis & Posisi Kompetitor',
      desc: 'Kami menyelenggarakan sesi wawancara mendalam dengan tim Anda untuk memetakan tujuan komersial, profil persona pembeli ideal, proposisi nilai unik (USP), serta struktur penawaran yang terbukti konversinya.',
      deliverables: [
        'Dokumen Project Blueprint & Wireframe Flow',
        'Analisis SWOT 3 Kompetitor Teratas',
        'Checklist Arsitektur Informasi & Navigasi',
        'Timeline Milestones & Jadwal Sprint Terkunci',
      ],
      icon: 'explore',
    },
    {
      num: '02',
      title: 'Desain UI/UX & Interactive Prototype',
      tagline: 'Eksplorasi Estetika Visual Presisi di Figma',
      desc: 'Merancang tata letak visual modern tingkat tinggi yang mencerminkan otoritas brand Anda. Setiap interaksi diuji dalam prototipe klik interaktif sehingga Anda dapat merasakan alur pengguna nyata sebelum sebaris kode pun ditulis.',
      deliverables: [
        'Desain Lengkap Layar Desktop & Mobile di Figma',
        'Design System Guide (Tipografi, Warna, Komponen)',
        'Link Prototipe Interaktif Siap Uji Coba',
        'Sesi Review & Revisi Desain Terpadu',
      ],
      icon: 'design_services',
    },
    {
      num: '03',
      title: 'Koding & Integrasi Sistem',
      tagline: 'Rekayasa Kode Bersih Bebas Bloatware',
      desc: 'Implementasi frontend modern menggunakan Next.js / React dan Tailwind CSS. Kami mengintegrasikan formulir leads cerdas, routing WhatsApp otomatis, pelacakan Meta CAPI & GA4 tanpa terblokir adblocker, serta CMS mandiri.',
      deliverables: [
        'Source Code Bersih Termutakhir (100% Hak Milik)',
        'Integrasi Payment Gateway & Logistik Otomatis',
        'Setup CMS Mandiri yang Ramah Pengguna',
        'Akses Staging Server Privat untuk Preview Progres',
      ],
      icon: 'terminal',
    },
    {
      num: '04',
      title: 'Testing, Audit Keamanan & Go-Live',
      tagline: 'Peluncuran Sempurna Siap Memacu Omset',
      desc: 'Uji coba komprehensif di lebih dari 15 resolusi perangkat, audit Google Lighthouse Core Web Vitals (target 95+), enkripsi SSL Grade A+, migrasi domain resmi, dan penyerahan video panduan admin.',
      deliverables: [
        'Laporan Audit PageSpeed Skor 95-100',
        'Sertifikat Keamanan SSL & Setup Cloudflare CDN',
        'Handover Domain & Akses Server Penuh',
        'Garansi Bug Teknis & Pemeliharaan Operasional',
      ],
      icon: 'verified',
    },
  ];

  return (
    <div className="w-full">
      <section className="max-w-[1280px] mx-auto px-5 md:px-12 pt-12 md:pt-16 pb-8">
        <div className="flex flex-col gap-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-container-high w-fit shadow-sm border border-line">
            <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse"></span>
            <span className="text-[11px] font-bold text-tertiary tracking-widest uppercase">
              Metodologi Kerja Terstruktur
            </span>
          </div>

          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl text-on-surface font-extrabold tracking-tight leading-tight">
            Transparansi Proses dari{' '}
            <span className="bg-gradient-to-r from-primary to-tertiary bg-clip-text text-transparent">
              Briefing hingga Go-Live.
            </span>
          </h1>

          <p className="text-base text-on-surface-variant leading-relaxed">
            Tidak ada kejutan atau keterlambatan misterius. Setiap langkah divalidasi bersama Anda melalui timeline harian transparan dengan jaminan SLA profesional.
          </p>
        </div>
      </section>

      {/* Interactive Step Navigator */}
      <section className="max-w-[1280px] mx-auto px-5 md:px-12 py-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {steps.map((st, i) => {
            const active = activeStep === i;
            return (
              <button
                key={st.num}
                onClick={() => setActiveStep(i)}
                className={`p-5 rounded-2xl text-left transition-all border ${
                  active
                    ? 'bg-surface-container border-primary-container shadow-lg shadow-primary-container/10'
                    : 'bg-surface-container-low border-line text-on-surface-variant hover:bg-surface-container'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`font-display text-2xl font-black ${
                      active ? 'text-tertiary' : 'text-outline'
                    }`}
                  >
                    {st.num}
                  </span>
                </div>
                <h4 className="font-display text-sm font-bold text-on-surface">{st.title}</h4>
              </button>
            );
          })}
        </div>

        {/* Active Step Showcase Card */}
        <div className="rounded-3xl bg-surface-container-low p-6 md:p-10 border border-line-strong shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-tertiary uppercase tracking-wider">
                  Fase {steps[activeStep].num}
                </span>
              </div>
              <h3 className="font-display text-2xl md:text-3xl text-ink-strong font-bold">
                {steps[activeStep].title}
              </h3>
              <p className="text-sm font-medium text-primary">
                {steps[activeStep].tagline}
              </p>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                {steps[activeStep].desc}
              </p>

              <div className="pt-2">
                <h5 className="text-xs font-bold uppercase tracking-wider text-on-surface mb-3">
                  Output & Deliverables Fase Ini:
                </h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {steps[activeStep].deliverables.map((d, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 p-3 rounded-xl bg-surface-container border border-line text-xs text-on-surface"
                    >
                      <Icon name="task_alt" className=" text-sm text-tertiary mt-0.5" />
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-surface-container p-6 rounded-2xl border border-line flex flex-col gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary-container/20 text-tertiary flex items-center justify-center">
                <Icon name={steps[activeStep].icon} className="text-2xl" />
              </div>
              <h4 className="font-display text-lg font-bold text-on-surface">
                Sistem Koordinasi Terbuka
              </h4>
              <p className="text-xs text-outline leading-relaxed">
                Anda memiliki akses langsung ke Trello / Slack papan koordinasi studio kami, rekaman sesi diskusi harian, dan ringkasan progres terverifikasi tanpa perantara.
              </p>
              <div className="pt-2 border-t border-line flex items-center justify-between">
                <span className="text-xs text-tertiary font-semibold">
                  Garansi Selesai Tepat Waktu
                </span>
                <button
                  onClick={onOpenConsultation}
                  className="px-4 py-2 rounded-xl bg-primary-container text-on-primary-container font-bold text-xs hover:bg-primary-hover transition-colors"
                >
                  Mulai Proyek Anda →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SLA Guarantees Strip */}
      <section className="max-w-[1280px] mx-auto px-5 md:px-12 py-12 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-surface-container-low border border-line flex flex-col gap-2">
            <Icon name="verified" className=" text-tertiary text-3xl" />
            <h4 className="font-display text-base font-bold text-on-surface">
              Garansi Kepemilikan 100%
            </h4>
            <p className="text-xs text-outline leading-relaxed">
              Seluruh source code di repository GitHub, domain, dan server diserahkan sepenuhnya ke hak milik perusahaan Anda.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-surface-container-low border border-line flex flex-col gap-2">
            <Icon name="bolt" className=" text-primary text-3xl" />
            <h4 className="font-display text-base font-bold text-on-surface">
              Garansi Kecepatan Sub-1 Detik
            </h4>
            <p className="text-xs text-outline leading-relaxed">
              Target skor PageSpeed 95+ di audit mobile dan desktop. Jika tidak tercapai, kami optimasi gratis sampai tuntas.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-surface-container-low border border-line flex flex-col gap-2">
            <Icon name="support_agent" className=" text-secondary text-3xl" />
            <h4 className="font-display text-base font-bold text-on-surface">
              Dukungan Pasca Rilis
            </h4>
            <p className="text-xs text-outline leading-relaxed">
              Pendampingan bug fix 30-90 hari gratis serta video panduan mandiri untuk kemudahan operasional staf admin Anda.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
