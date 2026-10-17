import { Link } from 'react-router-dom';
import { Icon } from './Icon';
import React from 'react';
import { TAB_PATHS, LEGAL_PATHS } from '../routes';

interface FooterProps {
  onOpenConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenConsultation }) => {
  return (
    <footer className="w-full bg-surface-container-lowest text-on-surface-variant border-t border-line">
      <div className="max-w-[1280px] mx-auto px-5 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-12">
          {/* Col 1: Brand & Studio Bio */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <img
                alt="KeuvaWeb Logo"
                className="h-7 w-auto object-contain"
                src="/favicon.svg"
              />
              <span className="font-display text-xl font-bold text-on-surface">
                KeuvaWeb
              </span>
            </div>
            <p className="text-sm text-outline max-w-md leading-relaxed">
              Studio rekayasa perangkat lunak dan arsitektur desain web terdepan. Kami mentransformasi ambisi merek enterprise dan startup berkinerja tinggi melalui produk digital kelas dunia.
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-low text-tertiary text-xs font-medium border border-line">
                <span className="w-1.5 h-1.5 rounded-full bg-tertiary" />
                Menerima Proyek Baru
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-low text-on-surface text-xs font-medium border border-line">
                <Icon name="verified" className=" text-sm text-primary-container" />
                Terverifikasi Enterprise
              </span>
            </div>
          </div>

          {/* Col 2: Eksplorasi */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <span className="text-[11px] font-bold uppercase tracking-wider text-primary">
              Eksplorasi
            </span>
            <div className="flex flex-col gap-2 text-sm">
              <Link
                to={TAB_PATHS.layanan}
                className="text-left text-outline hover:text-on-surface transition-colors"
              >
                Layanan Rekayasa
              </Link>
              <Link
                to={TAB_PATHS.portofolio}
                className="text-left text-outline hover:text-on-surface transition-colors"
              >
                Studi Kasus
              </Link>
              <Link
                to={TAB_PATHS['paket-harga']}
                className="text-left text-outline hover:text-on-surface transition-colors"
              >
                Skema Investasi
              </Link>
              <Link
                to={TAB_PATHS.proses}
                className="text-left text-outline hover:text-on-surface transition-colors"
              >
                Metodologi Kerja
              </Link>
            </div>
          </div>

          {/* Col 3: Spesialisasi */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <span className="text-[11px] font-bold uppercase tracking-wider text-primary">
              Spesialisasi
            </span>
            <div className="flex flex-col gap-2 text-sm text-outline">
              <span>SaaS Web Platforms</span>
              <span>Desain Sistem UI/UX</span>
              <span>Arsitektur Frontend Modern</span>
              <span>Aplikasi Cloud Interaktif</span>
            </div>
          </div>

          {/* Col 4: Inisiasi Proyek */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <span className="text-[11px] font-bold uppercase tracking-wider text-primary">
              Inisiasi Proyek
            </span>
            <p className="text-sm text-outline">
              Jadwalkan konsultasi arsitektur produk digital Anda bersama lead engineer kami.
            </p>
            <div className="flex flex-col gap-2 pt-2">
              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-surface-container-high text-on-surface hover:bg-surface-container-highest text-sm font-semibold transition-all border border-line"
              >
                <Icon name="schedule" className=" text-base text-tertiary" />
                <span>Reservasi Sesi Diskusi</span>
              </button>
              <a
                href="https://wa.me/6281298432865"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-surface-container-low text-on-surface-variant hover:text-ink-strong text-xs transition-colors"
              >
                <Icon name="chat" className=" text-sm text-success" />
                <span>Respon Cepat WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-line flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-outline">
          <span>© {new Date().getFullYear()} KeuvaWeb. Seluruh hak cipta dilindungi undang-undang.</span>
          <div className="flex items-center gap-6">
            <Link to={LEGAL_PATHS.privacy} className="hover:text-on-surface transition-colors">
              Kebijakan Privasi
            </Link>
            <Link to={LEGAL_PATHS.terms} className="hover:text-on-surface transition-colors">
              Ketentuan Layanan
            </Link>
            <Link to={LEGAL_PATHS.security} className="hover:text-on-surface transition-colors">
              Keamanan Sistem
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
