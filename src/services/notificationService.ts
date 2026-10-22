import { PushNotification } from '../types';

// Web Audio API soft synthesized chime (no external mp3 dependency required)
export function playNotificationSound() {
  try {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AudioContextClass) return;
    const ctx = new AudioContextClass();

    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    // Arpeggio chime tone (880Hz -> 1320Hz)
    osc.frequency.setValueAtTime(880, now);
    osc.frequency.exponentialRampToValueAtTime(1320, now + 0.12);

    gain.gain.setValueAtTime(0.001, now);
    gain.gain.linearRampToValueAtTime(0.15, now + 0.04);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.35);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.35);
  } catch (err) {
    console.debug('Audio play not allowed without user interaction:', err);
  }
}

// Request real browser Notification API permissions
export async function requestBrowserNotificationPermission(): Promise<NotificationPermission> {
  if (!('Notification' in window)) {
    return 'denied';
  }
  try {
    const permission = await Notification.requestPermission();
    return permission;
  } catch {
    return 'default';
  }
}

// Trigger real OS-level browser push notification if permitted
export function showBrowserPushNotification(title: string, options?: NotificationOptions) {
  if (!('Notification' in window)) return;
  if (Notification.permission === 'granted') {
    try {
      new Notification(title, {
        icon: '/images/logo.webp',
        badge: '/images/logo.webp',
        ...options,
      });
    } catch (e) {
      console.debug('Browser notification failed:', e);
    }
  }
}

export const INITIAL_NOTIFICATIONS: PushNotification[] = [
  {
    id: 'notif-1',
    title: '⚡ Audit Performa Selesai',
    message: 'Hasil audit Lighthouse Project Laba Pengadaan mencapai skor 99/100 dengan LCP 0.8s.',
    timestamp: '2 menit lalu',
    type: 'audit',
    unread: true,
  },
  {
    id: 'notif-2',
    title: '🚀 Peluncuran Berhasil: Keuva Keuangan',
    message: 'Aplikasi manajemen keuangan pribadi resmi Go-Live dengan dasbor arus kas dan multi-tabungan.',
    timestamp: '18 menit lalu',
    type: 'launch',
    unread: true,
  },
  {
    id: 'notif-3',
    title: '💬 Lead Konsultasi Masuk',
    message: 'Permintaan review arsitektur baru dari Rian (PT Surya Nusantara).',
    timestamp: '1 jam lalu',
    type: 'lead',
    unread: false,
  },
  {
    id: 'notif-4',
    title: '🔒 Pembaruan SLA & Cloudflare',
    message: 'Infrastruktur CDN Global KeuvaWeb aktif 100% tanpa downtime dalam 30 hari.',
    timestamp: '3 jam lalu',
    type: 'update',
    unread: false,
  },
];
