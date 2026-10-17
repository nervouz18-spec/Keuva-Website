import { Link } from 'react-router-dom';
import { Icon } from './Icon';
import React, { useState } from 'react';
import { NavTab } from '../types';
import { TAB_PATHS } from '../routes';
import { NotificationCenter } from './NotificationCenter';
import { useTheme } from '../hooks/useTheme';

interface HeaderProps {
  activeTab: NavTab;
  onOpenConsultation: () => void;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, onOpenConsultation }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const navItems: { label: string; tab: NavTab }[] = [
    { label: 'Beranda', tab: 'beranda' },
    { label: 'Layanan', tab: 'layanan' },
    { label: 'Portofolio', tab: 'portofolio' },
    { label: 'Paket Harga', tab: 'paket-harga' },
    { label: 'Proses', tab: 'proses' },
    { label: 'Kontak', tab: 'kontak' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-background/85 backdrop-blur-xl border-b border-line shadow-[0_1px_16px_rgba(0,0,0,0.3)]">
      <div className="h-20 max-w-[1280px] mx-auto px-5 md:px-12 flex items-center justify-between gap-6">
        {/* Zone 1: Brand Wordmark & Logo */}
        <Link
          to={TAB_PATHS.beranda}
          className="flex items-center gap-3 text-left focus:outline-none group"
        >
          <span className="font-display text-xl font-bold tracking-tight text-on-surface group-hover:text-ink-strong transition-colors">
            KeuvaWeb
          </span>
        </Link>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1.5 p-1 rounded-xl bg-surface-container-low/60 border border-line">
          {navItems.map((item) => {
            const isActive = activeTab === item.tab;
            return (
              <Link
                key={item.tab}
                to={TAB_PATHS[item.tab]}
                aria-current={isActive ? 'page' : undefined}
                className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all ${
                  isActive
                    ? 'bg-primary-container text-on-primary-container shadow-[0_4px_16px_rgba(77,142,255,0.35)]'
                    : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Zone 3: Notification Bell, Consultation CTA, Profile */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-xl bg-surface-container text-on-surface hover:bg-surface-container-high transition-colors"
            aria-label={theme === 'dark' ? 'Aktifkan tema terang' : 'Aktifkan tema gelap'}
            title={theme === 'dark' ? 'Tema terang' : 'Tema gelap'}
          >
            <Icon name={theme === 'dark' ? 'light_mode' : 'dark_mode'} className="text-xl" />
          </button>

          {/* Real-time Notification Engine */}
          <NotificationCenter onOpenConsultation={onOpenConsultation} />

          {/* Primary CTA */}
          <button
            onClick={onOpenConsultation}
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-primary-container to-secondary-container text-white font-semibold text-sm shadow-[0_8px_24px_-4px_rgba(77,142,255,0.4)] hover:brightness-110 active:scale-[0.98] transition-all"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tertiary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-tertiary"></span>
            </span>
            <span>Konsultasi Gratis</span>
            <Icon name="arrow_forward" className=" text-sm" />
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-surface-container text-on-surface hover:bg-surface-container-high transition-colors"
            aria-label="Toggle Menu"
          >
            <Icon name={mobileMenuOpen ? 'close' : 'menu'} className="text-2xl" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-background/98 border-b border-line-strong px-6 py-6 flex flex-col gap-3 animate-in slide-in-from-top-4 duration-200">
          {navItems.map((item) => (
            <Link
              key={item.tab}
              to={TAB_PATHS[item.tab]}
              onClick={() => setMobileMenuOpen(false)}
              className={`w-full text-left px-4 py-3 rounded-xl font-medium text-sm transition-all ${
                activeTab === item.tab
                  ? 'bg-primary-container text-on-primary-container font-bold'
                  : 'text-on-surface-variant hover:bg-surface-container'
              }`}
            >
              {item.label}
            </Link>
          ))}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenConsultation();
            }}
            className="w-full mt-2 py-3 rounded-xl bg-gradient-to-r from-primary-container to-secondary-container text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg"
          >
            <span>Konsultasi Proyek (Gratis)</span>
            <Icon name="arrow_forward" className=" text-sm" />
          </button>
        </div>
      )}
    </header>
  );
};
