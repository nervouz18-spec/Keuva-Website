import { Icon } from './Icon';
import React, { useEffect } from 'react';
import { useLeadForm } from '../hooks/useLeadForm';

interface KonsultasiModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultPlan?: string;
}

export const KonsultasiModal: React.FC<KonsultasiModalProps> = ({
  isOpen,
  onClose,
  defaultPlan = 'compro',
}) => {
  const lead = useLeadForm({
    source: 'modal-konsultasi',
    defaultProjectType: defaultPlan,
  });
  const {
    name,
    setName,
    wa,
    setWa,
    email,
    setEmail,
    projectType,
    setProjectType,
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

  // Keep the select in sync with the plan the modal was opened for.
  useEffect(() => {
    if (isOpen) {
      setProjectType(defaultPlan);
    }
  }, [isOpen, defaultPlan, setProjectType]);

  // Close on Escape.
  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  // Lock body scroll while the modal is open.
  useEffect(() => {
    if (!isOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previous;
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleReset = () => {
    reset();
    onClose();
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-backdrop backdrop-blur-md animate-in fade-in duration-200"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="konsultasi-modal-title"
        className="relative w-full max-w-xl rounded-2xl bg-surface-container-low border border-line-strong shadow-[0_25px_60px_rgba(0,0,0,0.8)] overflow-hidden"
      >
        {/* Header bar */}
        <div className="p-5 bg-surface-container border-b border-line flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-tertiary animate-pulse" />
            <h3
              id="konsultasi-modal-title"
              className="font-display font-bold text-base text-on-surface"
            >
              Inisiasi Proyek & Konsultasi Arsitektur
            </h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Tutup jendela"
            className="w-8 h-8 rounded-lg bg-surface-container-high hover:bg-surface-container-highest text-on-surface-variant hover:text-ink-strong flex items-center justify-center transition-colors"
          >
            <Icon name="close" className=" text-lg" />
          </button>
        </div>

        <div className="p-6 max-h-[85vh] overflow-y-auto">
          {isSuccess ? (
            <div className="text-center py-8 flex flex-col items-center gap-3">
              <div className="w-16 h-16 rounded-2xl bg-primary-container/20 text-tertiary flex items-center justify-center mb-2 shadow-inner">
                <Icon name="check_circle" className=" text-4xl" />
              </div>
              <h4 className="font-display text-2xl font-bold text-ink-strong">
                {channel === 'webhook'
                  ? 'Permintaan Berhasil Dikirim!'
                  : 'Selesaikan Kirim via WhatsApp'}
              </h4>
              <p className="text-sm text-on-surface-variant max-w-md leading-relaxed">
                {channel === 'webhook' ? (
                  <>
                    Terima kasih, <strong className="text-ink-strong">{name}</strong>. Data spesifikasi
                    proyek Anda sudah kami terima. Lead engineer kami akan menghubungi Anda via
                    WhatsApp di <span className="text-tertiary font-mono">{wa}</span>.
                  </>
                ) : (
                  <>
                    Agar data Anda benar-benar masuk ke tim kami, kirim pesan WhatsApp berikut —
                    pesannya sudah kami isi lengkap dengan detail formulir Anda.
                  </>
                )}
              </p>

              <div className="w-full mt-6 pt-6 border-t border-line flex flex-col sm:flex-row items-center gap-3 justify-center">
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-success hover:bg-success-deep text-white text-sm font-bold shadow-lg transition-all"
                >
                  <Icon name="chat" className=" text-base" />
                  <span>
                    {channel === 'webhook'
                      ? 'Lanjut Diskusi ke WhatsApp →'
                      : 'Kirim Data via WhatsApp →'}
                  </span>
                </a>
                <button
                  onClick={handleReset}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-surface-container-high hover:bg-surface-container-highest text-on-surface text-sm font-semibold transition-colors"
                >
                  Tutup Jendela
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="p-3 rounded-xl bg-surface-container/80 border border-line flex items-center gap-3 text-xs text-on-surface-variant">
                <Icon name="security" className=" text-tertiary text-xl shrink-0" />
                <span>
                  Diskusi 100% bebas biaya. Ide bisnis & data Anda dilindungi perjanjian kerahasiaan (NDA ready).
                </span>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-on-surface" htmlFor="modal-name">
                  Nama Lengkap / Perusahaan *
                </label>
                <input
                  id="modal-name"
                  type="text"
                  required
                  autoFocus
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Contoh: Rian - PT Surya Nusantara"
                  className="px-4 py-2.5 rounded-xl bg-surface-container text-on-surface placeholder:text-outline/60 border border-line-strong focus:outline-none focus:ring-2 focus:ring-primary-container text-sm"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-on-surface" htmlFor="modal-wa">
                    Nomor WhatsApp Aktif *
                  </label>
                  <input
                    id="modal-wa"
                    type="tel"
                    required
                    value={wa}
                    onChange={(e) => setWa(e.target.value)}
                    placeholder="Contoh: 081298432865"
                    className="px-4 py-2.5 rounded-xl bg-surface-container text-on-surface placeholder:text-outline/60 border border-line-strong focus:outline-none focus:ring-2 focus:ring-primary-container text-sm font-mono"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-on-surface" htmlFor="modal-email">
                    Alamat Email Bisnis *
                  </label>
                  <input
                    id="modal-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="nama@perusahaan.com"
                    className="px-4 py-2.5 rounded-xl bg-surface-container text-on-surface placeholder:text-outline/60 border border-line-strong focus:outline-none focus:ring-2 focus:ring-primary-container text-sm"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-on-surface" htmlFor="modal-project">
                  Kategori Spesifikasi Website
                </label>
                <select
                  id="modal-project"
                  value={projectType}
                  onChange={(e) => setProjectType(e.target.value)}
                  className="px-4 py-2.5 rounded-xl bg-surface-container text-on-surface border border-line-strong focus:outline-none focus:ring-2 focus:ring-primary-container text-sm"
                >
                  <option value="landing">Landing Page Konversi Tinggi (Meta/Google Ads)</option>
                  <option value="compro">Company Profile Profesional (B2B & Korporat)</option>
                  <option value="ecommerce">Toko Online Modern (Fast Checkout & Midtrans)</option>
                  <option value="custom">Aplikasi Web Kustom / SaaS Portal</option>
                  <option value="redesign">Redesign & Optimasi Kecepatan (PageSpeed 95+)</option>
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-on-surface" htmlFor="modal-notes">
                  Ringkasan Kebutuhan / Tautan Website Lama
                </label>
                <textarea
                  id="modal-notes"
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Ceritakan target omset, fitur khusus yang dibutuhkan, atau kendala di website lama..."
                  className="px-4 py-2.5 rounded-xl bg-surface-container text-on-surface placeholder:text-outline/60 border border-line-strong focus:outline-none focus:ring-2 focus:ring-primary-container text-sm resize-none"
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
                className="mt-2 w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-primary-container to-secondary-container hover:brightness-110 active:scale-[0.99] text-white font-bold text-sm shadow-[0_8px_20px_-4px_rgba(77,142,255,0.4)] transition-all flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <Icon name="progress_activity" className=" text-base animate-spin" />
                    <span>Mengirim Data & Estimasi...</span>
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
  );
};
