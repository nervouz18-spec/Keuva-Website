import { lazy, Suspense, useEffect, useState } from 'react';
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import { NavTab } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { KonsultasiModal } from './components/KonsultasiModal';
import { trackPageView } from './services/analytics';
import { LEGAL_META, PATH_TABS, ROUTE_META, TAB_PATHS } from './routes';

// Code-splitting per rute: tiap halaman dimuat on-demand, sehingga bundle
// awal hanya berisi shell (Header, Footer, modal) + framework React.
const BerandaView = lazy(() =>
  import('./components/BerandaView').then((m) => ({ default: m.BerandaView }))
);
const LayananView = lazy(() =>
  import('./components/LayananView').then((m) => ({ default: m.LayananView }))
);
const PaketHargaView = lazy(() =>
  import('./components/PaketHargaView').then((m) => ({ default: m.PaketHargaView }))
);
const PortofolioView = lazy(() =>
  import('./components/PortofolioView').then((m) => ({ default: m.PortofolioView }))
);
const ProsesView = lazy(() =>
  import('./components/ProsesView').then((m) => ({ default: m.ProsesView }))
);
const KontakView = lazy(() =>
  import('./components/KontakView').then((m) => ({ default: m.KontakView }))
);
const LegalView = lazy(() =>
  import('./components/LegalView').then((m) => ({ default: m.LegalView }))
);

function RouteFallback() {
  return (
    <div
      className="flex min-h-[50vh] items-center justify-center"
      role="status"
      aria-label="Memuat halaman"
    >
      <div className="h-9 w-9 animate-spin rounded-full border-2 border-line-strong border-t-primary-container" />
    </div>
  );
}

function AppShell() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);
  const [modalDefaultPlan, setModalDefaultPlan] = useState('compro');

  const activeTab = PATH_TABS[location.pathname] ?? 'beranda';

  // Legacy hash URLs (e.g. /#layanan) -> real paths.
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash && hash in TAB_PATHS) {
      navigate(TAB_PATHS[hash as NavTab], { replace: true });
    }
  }, [navigate]);

  // Per-route title/description, analytics pageview, and scroll restore.
  useEffect(() => {
    const meta = LEGAL_META[location.pathname] ?? ROUTE_META[activeTab];
    document.title = meta.title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', meta.description);
    trackPageView(location.pathname);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab, location.pathname]);

  const handleTabChange = (tab: NavTab) => {
    navigate(TAB_PATHS[tab]);
  };

  const handleOpenConsultation = (plan: string = 'compro') => {
    setModalDefaultPlan(plan);
    setIsConsultationModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-background text-on-surface flex flex-col font-sans selection:bg-primary-container selection:text-on-primary-container">
      {/* Navigation Top Bar */}
      <Header
        activeTab={activeTab}
        onOpenConsultation={() => handleOpenConsultation('compro')}
      />

      {/* Main Content Area */}
      <main className="flex-1 w-full pt-20">
        <Suspense fallback={<RouteFallback />}>
          <Routes>
            <Route
              path="/"
              element={
                <BerandaView
                  onTabChange={handleTabChange}
                  onOpenConsultation={() => handleOpenConsultation('landing')}
                />
              }
            />
            <Route
              path="/layanan"
              element={
                <LayananView
                  onTabChange={handleTabChange}
                  onOpenConsultation={() => handleOpenConsultation('compro')}
                />
              }
            />
            <Route
              path="/paket-harga"
              element={
                <PaketHargaView
                  onTabChange={handleTabChange}
                  onOpenConsultation={() => handleOpenConsultation('business')}
                />
              }
            />
            <Route
              path="/portofolio"
              element={
                <PortofolioView onOpenConsultation={() => handleOpenConsultation('custom')} />
              }
            />
            <Route
              path="/proses"
              element={
                <ProsesView
                  onTabChange={handleTabChange}
                  onOpenConsultation={() => handleOpenConsultation('compro')}
                />
              }
            />
            <Route path="/kontak" element={<KontakView />} />
            <Route path="/kebijakan-privasi" element={<LegalView kind="privacy" />} />
            <Route path="/ketentuan-layanan" element={<LegalView kind="terms" />} />
            <Route path="/keamanan" element={<LegalView kind="security" />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </main>

      {/* Footer */}
      <Footer onOpenConsultation={() => handleOpenConsultation('compro')} />

      {/* Interactive Consultation Modal */}
      <KonsultasiModal
        isOpen={isConsultationModalOpen}
        onClose={() => setIsConsultationModalOpen(false)}
        defaultPlan={modalDefaultPlan}
      />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  );
}
