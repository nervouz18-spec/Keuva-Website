import { Link } from 'react-router-dom';
import { Icon } from './Icon';
import React from 'react';
import { TAB_PATHS, LEGAL_PATHS } from '../routes';

interface FooterProps {
  onOpenConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenConsultation }) => {
  return (
    <footer className="w-full bg-[#0a0e18] text-[#c2c6d6] border-t border-white/5">
      <div className="max-w-[1280px] mx-auto px-5 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-12">
          {/* Col 1: Brand & Studio Bio */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <img
                alt="KeuvaWeb Logo"
                className="h-7 w-auto object-contain"
                src="/images/logo.webp"
              />
              <span className="font-display text-xl font-bold text-[#dfe2f1]">
                KeuvaWeb
              </span>
            </div>
            <p className="text-sm text-[#8c909f] max-w-md leading-relaxed">
              Studio rekayasa perangkat lunak dan arsitektur desain web terdepan. Kami mentransformasi ambisi merek enterprise dan startup berkinerja tinggi melalui produk digital kelas dunia.
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#171b26] text-[#4cd7f6] text-xs font-medium border border-white/5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#4cd7f6]" />
                Menerima Proyek Baru
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#171b26] text-[#dfe2f1] text-xs font-medium border border-white/5">
                <Icon name="verified" className=" text-sm text-[#4d8eff]" />
                Terverifikasi Enterprise
              </span>
            </div>
          </div>

          {/* Col 2: Eksplorasi */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#adc6ff]">
              Eksplorasi
            </span>
            <div className="flex flex-col gap-2 text-sm">
              <Link
                to={TAB_PATHS.layanan}
                className="text-left text-[#8c909f] hover:text-[#dfe2f1] transition-colors"
              >
                Layanan Rekayasa
              </Link>
              <Link
                to={TAB_PATHS.portofolio}
                className="text-left text-[#8c909f] hover:text-[#dfe2f1] transition-colors"
              >
                Studi Kasus
              </Link>
              <Link
                to={TAB_PATHS['paket-harga']}
                className="text-left text-[#8c909f] hover:text-[#dfe2f1] transition-colors"
              >
                Skema Investasi
              </Link>
              <Link
                to={TAB_PATHS.proses}
                className="text-left text-[#8c909f] hover:text-[#dfe2f1] transition-colors"
              >
                Metodologi Kerja
              </Link>
            </div>
          </div>

          {/* Col 3: Spesialisasi */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#adc6ff]">
              Spesialisasi
            </span>
            <div className="flex flex-col gap-2 text-sm text-[#8c909f]">
              <span>SaaS Web Platforms</span>
              <span>Desain Sistem UI/UX</span>
              <span>Arsitektur Frontend Modern</span>
              <span>Aplikasi Cloud Interaktif</span>
            </div>
          </div>

          {/* Col 4: Inisiasi Proyek */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#adc6ff]">
              Inisiasi Proyek
            </span>
            <p className="text-sm text-[#8c909f]">
              Jadwalkan konsultasi arsitektur produk digital Anda bersama lead engineer kami.
            </p>
            <div className="flex flex-col gap-2 pt-2">
              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#262a35] text-[#dfe2f1] hover:bg-[#313540] text-sm font-semibold transition-all border border-white/5"
              >
                <Icon name="schedule" className=" text-base text-[#4cd7f6]" />
                <span>Reservasi Sesi Diskusi</span>
              </button>
              <a
                href="https://wa.me/6281298432865"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-[#171b26] text-[#c2c6d6] hover:text-white text-xs transition-colors"
              >
                <Icon name="chat" className=" text-sm text-[#25D366]" />
                <span>Respon Cepat WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8c909f]">
          <span>© {new Date().getFullYear()} KeuvaWeb. Seluruh hak cipta dilindungi undang-undang.</span>
          <div className="flex items-center gap-6">
            <Link to={LEGAL_PATHS.privacy} className="hover:text-[#dfe2f1] transition-colors">
              Kebijakan Privasi
            </Link>
            <Link to={LEGAL_PATHS.terms} className="hover:text-[#dfe2f1] transition-colors">
              Ketentuan Layanan
            </Link>
            <Link to={LEGAL_PATHS.security} className="hover:text-[#dfe2f1] transition-colors">
              Keamanan Sistem
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
