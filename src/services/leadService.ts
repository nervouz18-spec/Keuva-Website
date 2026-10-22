import { BUDGET_LABELS, PROJECT_TYPE_LABELS } from '../data/leadOptions';

export type LeadSource = 'beranda' | 'kontak' | 'modal-konsultasi';
export type LeadChannel = 'webhook' | 'whatsapp';

export interface LeadPayload {
  source: LeadSource;
  name: string;
  wa: string;
  email: string;
  projectType: string;
  notes?: string;
  budget?: string;
}

export const STUDIO_WA_NUMBER = '6281298432865';

const WEBHOOK_URL: string | undefined = import.meta.env.VITE_LEADS_WEBHOOK_URL;

const SOURCE_LABELS: Record<LeadSource, string> = {
  beranda: 'Formulir Konsultasi Kilat (Beranda)',
  kontak: 'Formulir Permintaan Penawaran (Kontak)',
  'modal-konsultasi': 'Form Konsultasi',
};

export function buildWhatsAppLink(payload: LeadPayload): string {
  const lines = [
    `Halo KeuvaWeb, saya ${payload.name}.`,
    `Saya baru saja mengirim ${SOURCE_LABELS[payload.source]} dari website dengan detail berikut:`,
    '',
    `Nama: ${payload.name}`,
    `WhatsApp: ${payload.wa}`,
    `Email: ${payload.email}`,
    `Kategori website: ${PROJECT_TYPE_LABELS[payload.projectType] ?? payload.projectType}`,
  ];
  if (payload.budget) {
    lines.push(`Alokasi anggaran: ${BUDGET_LABELS[payload.budget] ?? payload.budget}`);
  }
  lines.push(`Kebutuhan: ${payload.notes?.trim() || '-'}`);
  return `https://wa.me/${STUDIO_WA_NUMBER}?text=${encodeURIComponent(lines.join('\n'))}`;
}

export async function submitLead(
  payload: LeadPayload,
): Promise<{ channel: LeadChannel; waLink: string }> {
  const waLink = buildWhatsAppLink(payload);

  if (WEBHOOK_URL) {
    try {
      const res = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...payload,
          projectTypeLabel: PROJECT_TYPE_LABELS[payload.projectType] ?? payload.projectType,
          budgetLabel: payload.budget
            ? BUDGET_LABELS[payload.budget] ?? payload.budget
            : undefined,
          page: window.location.href,
          submittedAt: new Date().toISOString(),
        }),
      });
      if (res.ok) {
        return { channel: 'webhook', waLink };
      }
    } catch {
      // Network/CORS failure: fall back to WhatsApp delivery below.
    }
  }

  return { channel: 'whatsapp', waLink };
}
