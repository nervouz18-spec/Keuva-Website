import { Icon } from './Icon';
import React, { useState } from 'react';
import { NavTab } from '../types';
import {
  ADDON_CONFIG,
  ADDON_KEYS,
  COMPARISON_ROWS,
  FEATURE_MATRIX,
  MODULE_CONFIG,
  MODULE_KEYS,
  PRICING_FAQ,
  PRICING_PLANS,
  type AddonKey,
  type ModuleKey,
} from '../data/pricing';

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
  const [selectedModule, setSelectedModule] = useState<ModuleKey>('starter');
  const [addons, setAddons] = useState<Record<AddonKey, boolean>>({
    payment: false,
    seo: false,
    multilingual: false,
    dashboard: false,
  });

  const currentBase = MODULE_CONFIG[selectedModule];
  let calculatedTotal = currentBase.price;
  let calculatedDays = currentBase.days;

  for (const key of ADDON_KEYS) {
    if (addons[key]) {
      calculatedTotal += ADDON_CONFIG[key].price;
      calculatedDays += ADDON_CONFIG[key].days;
    }
  }

  const formattedCalculatedPrice = 'Rp ' + calculatedTotal.toLocaleString('id-ID');

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
            {PRICING_PLANS.map((plan) => {
              const price = MODULE_CONFIG[plan.id].price.toLocaleString('id-ID');
              const iconColor = plan.featured ? 'text-primary' : 'text-tertiary';
              return (
                <div
                  key={plan.id}
                  className={`relative flex flex-col justify-between p-6 md:p-8 rounded-2xl ${
                    plan.featured
                      ? 'bg-surface-container shadow-2xl -mt-2 lg:-mt-4 mb-2 lg:mb-0 transition-transform duration-300 border-2 border-primary-container/50'
                      : 'bg-surface-container-low transition-all duration-300 hover:bg-surface-container shadow-xl border border-line'
                  }`}
                >
                  {plan.featured && (
                    <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-primary-container via-primary to-tertiary rounded-t-2xl" />
                  )}

                  <div>
                    <div
                      className={`flex items-center justify-between mb-4${
                        plan.featured ? ' pt-2' : ''
                      }`}
                    >
                      {plan.featured ? (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-container text-on-primary-container text-[10px] font-bold uppercase tracking-wider shadow-md">
                          <Icon name="star" className=" text-xs" filled />
                          {plan.badge}
                        </span>
                      ) : (
                        <span className="text-[10px] uppercase font-bold text-outline tracking-wider">
                          {plan.eyebrow}
                        </span>
                      )}
                      <span
                        className={`px-3 py-1 rounded-md bg-surface-container-high text-xs font-semibold ${
                          plan.featured ? 'text-primary' : 'text-on-surface'
                        }`}
                      >
                        {plan.delivery}
                      </span>
                    </div>

                    <h3 className="font-display text-2xl text-on-surface font-bold">
                      {plan.name}
                    </h3>
                    <p className="text-xs text-outline mt-1 leading-relaxed">{plan.tagline}</p>

                    {plan.featured ? (
                      <div className="my-6 py-3 px-4 rounded-xl bg-surface-container-high border border-line">
                        <div className="flex items-baseline gap-1">
                          <span className="text-sm text-outline">Rp</span>
                          <span className="font-display text-3xl md:text-4xl text-primary font-extrabold tabular-nums">
                            {price}
                          </span>
                          <span className="text-xs text-outline">/project</span>
                        </div>
                        <span className="text-xs text-secondary font-medium mt-0.5 block">
                          {plan.priceNote}
                        </span>
                      </div>
                    ) : (
                      <div className="my-6 py-2">
                        <div className="flex items-baseline gap-1">
                          {plan.pricePrefix && (
                            <span className="text-xs text-outline mr-1">{plan.pricePrefix}</span>
                          )}
                          <span className="text-sm text-outline">Rp</span>
                          <span className="font-display text-3xl md:text-4xl text-on-surface font-extrabold tabular-nums">
                            {price}
                          </span>
                          <span className="text-xs text-outline">/project</span>
                        </div>
                        <span className="text-xs text-tertiary mt-1 block">{plan.priceNote}</span>
                      </div>
                    )}

                    <div className="space-y-2.5 pt-2">
                      {plan.features.map((feature) => (
                        <div key={feature.text} className="flex items-start gap-2.5">
                          <Icon name={feature.icon} className={` ${iconColor} text-base mt-0.5`} />
                          <span
                            className={`text-xs text-on-surface${
                              feature.strong ? ' font-semibold' : ''
                            }`}
                          >
                            {feature.text}
                          </span>
                        </div>
                      ))}
                    </div>

                    {plan.footnote && (
                      <p className="flex items-start gap-2 text-[11px] text-outline italic leading-relaxed pt-4 mt-4 border-t border-line">
                        <Icon name="info" className=" text-sm text-primary mt-0.5 shrink-0" />
                        <span>{plan.footnote}</span>
                      </p>
                    )}
                  </div>

                  <div className="pt-8">
                    <button
                      onClick={onOpenConsultation}
                      className={`w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm ${
                        plan.featured
                          ? 'font-bold bg-gradient-to-r from-primary-container to-secondary-container text-white shadow-[0_8px_24px_-4px_rgba(77,142,255,0.4)] hover:brightness-110 active:scale-[0.98] transition-all'
                          : 'font-semibold bg-surface-container-high text-on-surface hover:bg-surface-container-highest transition-colors shadow-sm'
                      }`}
                    >
                      <span>{plan.cta.label}</span>
                      <Icon name={plan.cta.icon} className=" text-sm" />
                    </button>
                  </div>
                </div>
              );
            })}
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
                  {COMPARISON_ROWS.map((row) => (
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
                    {MODULE_KEYS.map((key) => {
                      const item = MODULE_CONFIG[key];
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
                    {ADDON_KEYS.map((key) => (
                      <label
                        key={key}
                        className="flex items-center gap-3 p-3 rounded-xl bg-surface-container-high border border-line cursor-pointer hover:bg-surface-container-highest transition-colors"
                      >
                        <input
                          type="checkbox"
                          checked={addons[key]}
                          onChange={(e) => setAddons({ ...addons, [key]: e.target.checked })}
                          className="w-4 h-4 rounded accent-primary-container"
                        />
                        <span className="text-xs text-on-surface">{ADDON_CONFIG[key].label}</span>
                      </label>
                    ))}
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
                {FEATURE_MATRIX.map((entry, i) =>
                  entry.type === 'group' ? (
                    <tr key={i} className="bg-surface-container-lowest">
                      <td
                        className="p-2.5 px-4 text-[10px] font-bold uppercase tracking-wider text-outline"
                        colSpan={4}
                      >
                        {entry.label}
                      </td>
                    </tr>
                  ) : (
                    <tr key={i} className="hover:bg-surface-container transition-colors">
                      <td className="p-4 text-on-surface font-medium">{entry.label}</td>
                      {entry.cells.map((cell, j) => {
                        const featured = j === 1;
                        if (cell.kind === 'check') {
                          return (
                            <td
                              key={j}
                              className={
                                featured
                                  ? 'p-4 text-center bg-surface-container-high/30'
                                  : 'p-4 text-center'
                              }
                            >
                              <Icon
                                name="check"
                                className={
                                  featured
                                    ? ' text-primary text-base'
                                    : ' text-tertiary text-base'
                                }
                              />
                            </td>
                          );
                        }
                        if (cell.kind === 'dash') {
                          return (
                            <td
                              key={j}
                              className={
                                featured
                                  ? 'p-4 text-center text-outline bg-surface-container-high/30'
                                  : 'p-4 text-center text-outline'
                              }
                            >
                              -
                            </td>
                          );
                        }
                        return (
                          <td
                            key={j}
                            className={
                              featured
                                ? 'p-4 text-center text-primary font-bold bg-surface-container-high/30'
                                : 'p-4 text-center'
                            }
                          >
                            {cell.text}
                          </td>
                        );
                      })}
                    </tr>
                  )
                )}
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
              {PRICING_FAQ.map((item, i) => {
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
