import { Icon } from './Icon';
import React from 'react';
import { useLeadForm } from '../hooks/useLeadForm';
import { useAvailability } from '../hooks/useAvailability';

export const KontakView: React.FC = () => {
  const lead = useLeadForm({ source: 'kontak' });
  const availability = useAvailability();
  const {
    name,
    setName,
    wa,
    setWa,
    email,
    setEmail,
    projectType,
    setProjectType,
    budget,
    setBudget,
    notes,
    setNotes,
    honeypot,
    setHoneypot,
    isSubmitting,
    isSuccess,
    channel,
    waLink,
    error,
    handleSubmit,
    reset,
  } = lead;

  return (
    <div className="w-full">
      <section className="max-w-[1280px] mx-auto px-5 md:px-12 pt-12 md:pt-16 pb-8">
        <div className="flex flex-col gap-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-container-high w-fit shadow-sm border border-line">
            <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse"></span>
            <span className="text-[11px] font-bold text-tertiary tracking-widest uppercase">
              Inisiasi Proyek & Kontak Studio
            </span>
          </div>

          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl text-on-surface font-extrabold tracking-tight leading-tight">
            Mari Rancang Website Masa Depan{' '}
            <span className="bg-gradient-to-r from-primary to-tertiary bg-clip-text text-transparent">
              Bisnis Anda.
            </span>
          </h1>

          <p className="text-base text-on-surface-variant leading-relaxed">
            Punya ide website baru atau ingin membedah kelemahan performa situs lama Anda? Tim lead architect kami siap berdiskusi tanpa komitmen awal.
          </p>
        </div>
      </section>

      <section className="max-w-[1280px] mx-auto px-5 md:px-12 py-8 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Info & Channels */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="p-6 md:p-8 rounded-3xl bg-surface-container-low border border-line shadow-xl flex flex-col gap-6">
              <h3 className="font-display text-xl font-bold text-ink-strong">
                Informasi Kontak Cepat
              </h3>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary-container/20 text-primary flex items-center justify-center shrink-0 mt-0.5">
                  <Icon name="chat" className=" text-xl" />
                </div>
                <div>
                  <span className="text-[11px] uppercase font-bold text-outline">
                    WhatsApp Bisnis Studio
                  </span>
                  <a
                    href="https://wa.me/6281298432865"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-sm font-semibold text-on-surface hover:text-tertiary transition-colors"
                  >
                    +62 812-9843-2865
                  </a>
                  <span className="text-xs text-outline">Respon rata-rata &lt; 15 menit</span>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-tertiary/20 text-tertiary flex items-center justify-center shrink-0 mt-0.5">
                  <Icon name="mail" className=" text-xl" />
                </div>
                <div>
                  <span className="text-[11px] uppercase font-bold text-outline">
                    Email Permintaan Proposal
                  </span>
                  <a
                    href="mailto:taufiqrahmanprasetyo@gmail.com"
                    className="block text-sm font-semibold text-on-surface hover:text-tertiary transition-colors"
                  >
                    taufiqrahmanprasetyo@gmail.com
                  </a>
                  <span className="text-xs text-outline">Proposal dikirim dalam 24 jam</span>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-secondary/20 text-secondary flex items-center justify-center shrink-0 mt-0.5">
                  <Icon name="location_on" className=" text-xl" />
                </div>
                <div>
                  <span className="text-[11px] uppercase font-bold text-outline">
                    Kantor Studio
                  </span>
                  <p className="text-sm font-semibold text-on-surface">
                    Ayodhya Residence
                  </p>
                  <span className="text-xs text-outline">Tangerang, Indonesia</span>
                </div>
              </div>
            </div>

            {/* Jam Operasional */}
            <div className="p-6 rounded-2xl bg-surface-container-low border border-line flex items-center justify-between gap-4">
              <div>
                <span className="text-[10px] uppercase font-bold text-outline">
                  Jam Konsultasi Aktif
                </span>
                <p className="text-xs font-semibold text-on-surface mt-0.5">
                  {availability.hoursLabel}
                </p>
                <p
                  className={`text-[11px] mt-1 ${
                    availability.isOpen ? 'text-success' : 'text-outline'
                  }`}
                >
                  {availability.isOpen
                    ? `${availability.detailLabel} · pukul ${availability.nowLabel}`
                    : availability.detailLabel}
                </p>
              </div>
              <span
                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container text-xs font-semibold border shrink-0 ${
                  availability.isOpen
                    ? 'text-success border-success/40'
                    : 'text-outline border-line-strong'
                }`}
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full ${
                    availability.isOpen ? 'bg-success animate-pulse' : 'bg-outline'
                  }`}
                ></span>
                {availability.isOpen ? 'Online Sekarang' : 'Offline'}
              </span>
            </div>
          </div>

          {/* Right Column: Complete Interactive Inquiry Form */}
          <div className="lg:col-span-7 bg-surface-container-low p-6 md:p-10 rounded-3xl border border-line-strong shadow-2xl">
            <h3 className="font-display text-2xl font-bold text-on-surface mb-1">
              Formulir Permintaan Penawaran & Spesifikasi
            </h3>
            <p className="text-xs text-outline mb-6">
              Sampaikan kebutuhan Anda secara detail. Kami akan menyiapkan simulasi roadmap arsitektur sebelum sesi zoom/meet.
            </p>

            {isSuccess ? (
              <div className="p-8 rounded-2xl bg-surface-container text-center border border-primary-container/40 animate-in fade-in duration-300">
                <Icon name="task_alt" className=" text-5xl text-tertiary mb-3" />
                <h4 className="font-display text-xl font-bold text-ink-strong mb-2">
                  {channel === 'webhook'
                    ? 'Terima Kasih, Permintaan Diterima!'
                    : 'Selesaikan Kirim via WhatsApp'}
                </h4>
                <p className="text-sm text-on-surface-variant leading-relaxed mb-6 max-w-md mx-auto">
                  {channel === 'webhook' ? (
                    <>
                      Data proyek Anda atas nama <strong className="text-ink-strong">{name}</strong>{' '}
                      sudah kami terima. Tim engineer kami akan menghubungi WhatsApp Anda di{' '}
                      <span className="text-tertiary font-mono">{wa}</span> dalam 24 jam.
                    </>
                  ) : (
                    <>
                      Agar data Anda benar-benar masuk ke tim kami, kirim pesan WhatsApp berikut
                      — pesannya sudah kami isi lengkap dengan detail formulir Anda.
                    </>
                  )}
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-3 justify-center">
                  <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-xl bg-success text-white font-bold text-xs flex items-center gap-2 shadow-lg hover:brightness-110"
                  >
                    <Icon name="chat" className=" text-sm" />
                    <span>
                      {channel === 'webhook'
                        ? 'Chat WhatsApp Studio Sekarang'
                        : 'Kirim Data via WhatsApp'}
                    </span>
                  </a>
                  <button
                    onClick={reset}
                    className="px-6 py-3 rounded-xl bg-surface-container-high text-on-surface font-semibold text-xs hover:bg-surface-container-highest"
                  >
                    Kirim Formulir Lain
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-on-surface" htmlFor="kontak-name">
                    Nama Lengkap / Nama Bisnis *
                  </label>
                  <input
                    id="kontak-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Contoh: Budi Santoso - Surya Medika Group"
                    className="px-4 py-2.5 rounded-xl bg-surface-container text-on-surface placeholder:text-outline/50 border border-line-strong focus:outline-none focus:ring-2 focus:ring-primary-container text-sm"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-on-surface" htmlFor="kontak-wa">
                      Nomor WhatsApp Aktif *
                    </label>
                    <input
                      id="kontak-wa"
                      type="tel"
                      required
                      value={wa}
                      onChange={(e) => setWa(e.target.value)}
                      placeholder="081298432865"
                      className="px-4 py-2.5 rounded-xl bg-surface-container text-on-surface placeholder:text-outline/50 border border-line-strong focus:outline-none focus:ring-2 focus:ring-primary-container text-sm font-mono"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-on-surface" htmlFor="kontak-email">
                      Alamat Email Bisnis *
                    </label>
                    <input
                      id="kontak-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="budi@suryamedika.co.id"
                      className="px-4 py-2.5 rounded-xl bg-surface-container text-on-surface placeholder:text-outline/50 border border-line-strong focus:outline-none focus:ring-2 focus:ring-primary-container text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-on-surface" htmlFor="kontak-type">
                    Kategori Website
                  </label>
                  <select
                    id="kontak-type"
                    value={projectType}
                    onChange={(e) => setProjectType(e.target.value)}
                      className="px-4 py-2.5 rounded-xl bg-surface-container text-on-surface border border-line-strong focus:outline-none focus:ring-2 focus:ring-primary-container text-sm"
                    >
                      <option value="landing">Landing Page Konversi Tinggi (Iklan Ads)</option>
                      <option value="compro">Company Profile Korporat / B2B</option>
                      <option value="ecommerce">Toko Online Modern (Fast Checkout)</option>
                      <option value="custom">Aplikasi Web / Platform SaaS Kustom</option>
                      <option value="redesign">Redesain & Audit Kecepatan</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-on-surface" htmlFor="kontak-budget">
                      Alokasi Anggaran Investasi
                    </label>
                    <select
                      id="kontak-budget"
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                      className="px-4 py-2.5 rounded-xl bg-surface-container text-on-surface border border-line-strong focus:outline-none focus:ring-2 focus:ring-primary-container text-sm"
                    >
                      <option value="starter">Rp 1,5jt (Starter Website)</option>
                      <option value="business">Rp 3,5jt (Business Website)</option>
                      <option value="system">Mulai Rp 6jt (Business System)</option>
                      <option value="custom">Di atas Rp 10jt (Custom / Enterprise)</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-on-surface" htmlFor="kontak-notes">
                    Tujuan Bisnis & Tautan Website Lama (Opsional)
                  </label>
                  <textarea
                    id="kontak-notes"
                    rows={4}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Ceritakan target perusahaan Anda, target waktu peluncuran, atau referensi desain yang disukai..."
                    className="px-4 py-2.5 rounded-xl bg-surface-container text-on-surface placeholder:text-outline/50 border border-line-strong focus:outline-none focus:ring-2 focus:ring-primary-container text-sm resize-none"
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
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-2 w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-gradient-to-r from-primary-container to-secondary-container text-white font-bold text-sm shadow-[0_8px_20px_-4px_rgba(77,142,255,0.4)] hover:brightness-110 active:scale-[0.99] transition-all disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <Icon name="progress_activity" className=" text-base animate-spin" />
                      <span>Mengirimkan Spesifikasi...</span>
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
      </section>
    </div>
  );
};
