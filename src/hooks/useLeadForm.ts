import { useState } from 'react';
import type { FormEvent } from 'react';
import { LeadChannel, LeadSource, submitLead } from '../services/leadService';
import { playNotificationSound, showBrowserPushNotification } from '../services/notificationService';
import { trackEvent } from '../services/analytics';

export interface UseLeadFormOptions {
  source: LeadSource;
  defaultProjectType?: string;
  defaultBudget?: string;
}

export function useLeadForm({
  source,
  defaultProjectType = 'compro',
  defaultBudget = 'business',
}: UseLeadFormOptions) {
  const [name, setName] = useState('');
  const [wa, setWa] = useState('');
  const [email, setEmail] = useState('');
  const [projectType, setProjectType] = useState(defaultProjectType);
  const [budget, setBudget] = useState(defaultBudget);
  const [notes, setNotes] = useState('');
  const [honeypot, setHoneypot] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [channel, setChannel] = useState<LeadChannel>('whatsapp');
  const [waLink, setWaLink] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    setError(null);

    // Honeypot filled: bot. Pretend success, send nothing.
    if (honeypot) {
      setIsSuccess(true);
      return;
    }

    setIsSubmitting(true);
    try {
      const result = await submitLead({
        source,
        name: name.trim(),
        wa: wa.trim(),
        email: email.trim(),
        projectType,
        notes: notes.trim() || undefined,
        budget,
      });
      setChannel(result.channel);
      setWaLink(result.waLink);
      setIsSuccess(true);
      trackEvent('lead_submitted', { source, channel: result.channel });
      playNotificationSound();
      showBrowserPushNotification('Permintaan KeuvaWeb Diterima', {
        body: `Terima kasih ${name.trim()}, tim kami akan segera menghubungi Anda.`,
      });
    } catch {
      setError('Gagal mengirim data. Silakan coba lagi atau lanjutkan via WhatsApp.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const reset = () => {
    setName('');
    setWa('');
    setEmail('');
    setProjectType(defaultProjectType);
    setBudget(defaultBudget);
    setNotes('');
    setHoneypot('');
    setIsSubmitting(false);
    setIsSuccess(false);
    setChannel('whatsapp');
    setWaLink('');
    setError(null);
  };

  return {
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
  };
}

export type LeadForm = ReturnType<typeof useLeadForm>;
