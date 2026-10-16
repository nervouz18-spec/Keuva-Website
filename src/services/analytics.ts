declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    plausible?: (event: string, options?: { props?: Record<string, unknown> }) => void;
  }
}

const GA4_ID = import.meta.env.VITE_GA4_ID as string | undefined;
const PLAUSIBLE_DOMAIN = import.meta.env.VITE_PLAUSIBLE_DOMAIN as string | undefined;
const PLAUSIBLE_HOST =
  (import.meta.env.VITE_PLAUSIBLE_HOST as string | undefined) ?? 'https://plausible.io';

let initialized = false;

export function initAnalytics() {
  if (initialized || typeof window === 'undefined') return;
  initialized = true;

  if (GA4_ID) {
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer ?? [];
    window.gtag = function gtag(...args: unknown[]) {
      window.dataLayer?.push(args);
    };
    window.gtag('js', new Date());
    window.gtag('config', GA4_ID);
  }

  if (PLAUSIBLE_DOMAIN) {
    const script = document.createElement('script');
    script.defer = true;
    script.src = `${PLAUSIBLE_HOST.replace(/\/$/, '')}/js/script.js`;
    script.dataset.domain = PLAUSIBLE_DOMAIN;
    document.head.appendChild(script);
  }
}

export function trackPageView(path: string) {
  if (GA4_ID && window.gtag) {
    window.gtag('event', 'page_view', { page_path: path });
  }
  // Plausible's script tracks SPA navigations automatically via the History API.
}

export function trackEvent(name: string, props?: Record<string, unknown>) {
  window.gtag?.('event', name, props);
  window.plausible?.(name, props ? { props } : undefined);
}
