export interface LeadOption {
  value: string;
  label: string;
}

export const PROJECT_TYPE_OPTIONS: LeadOption[] = [
  { value: 'landing', label: 'Landing Page Konversi Tinggi (Iklan Ads)' },
  { value: 'compro', label: 'Company Profile & Korporat (B2B)' },
  { value: 'ecommerce', label: 'E-Commerce & Toko Online' },
  { value: 'custom', label: 'Aplikasi Web / Sistem Kustom' },
  { value: 'redesign', label: 'Redesign & Optimasi Kecepatan' },
];

export const BUDGET_OPTIONS: LeadOption[] = [
  { value: 'starter', label: 'Rp 500.000 (Starter Website)' },
  { value: 'business', label: 'Rp 1.500.000 (Business Website)' },
  { value: 'system', label: 'Mulai Rp 3.000.000 (Business System)' },
  { value: 'custom', label: 'Di atas Rp 3.000.000 (Kebutuhan Kustom)' },
];

export const PROJECT_TYPE_LABELS: Record<string, string> = Object.fromEntries(
  PROJECT_TYPE_OPTIONS.map((option) => [option.value, option.label]),
);

export const BUDGET_LABELS: Record<string, string> = Object.fromEntries(
  BUDGET_OPTIONS.map((option) => [option.value, option.label]),
);
