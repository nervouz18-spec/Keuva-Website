import { Icon } from './Icon';
import React, { useState, useEffect, useRef } from 'react';
import { PushNotification } from '../types';
import {
  playNotificationSound,
  requestBrowserNotificationPermission,
  showBrowserPushNotification,
  INITIAL_NOTIFICATIONS,
} from '../services/notificationService';

interface NotificationCenterProps {
  onOpenConsultation?: () => void;
}

const SIMULATED_EVENTS: Omit<PushNotification, 'id' | 'timestamp' | 'unread'>[] = [
  {
    title: '🔥 Lead Baru Terverifikasi',
    message: 'Founder tech startup dari Jakarta Selatan baru saja memesan paket Business Website.',
    type: 'lead',
  },
  {
    title: '⚡ Laporan Core Web Vitals',
    message: 'Pengujian performa mobile menghasilkan skor 100/100 pada rilis Next.js 15 terbaru.',
    type: 'audit',
  },
  {
    title: '🎉 Milestone Proyek Rilis',
    message: 'Sistem registrasi Hackathon X Undana dengan pembayaran QRIS berhasil diverifikasi dalam staging.',
    type: 'launch',
  },
  {
    title: '🛡️ Pemantauan Keamanan Sistem',
    message: 'SSL Grade-A+ dan proteksi DDoS Cloudflare berhasil mengamankan 45.000 request hari ini.',
    type: 'update',
  },
  {
    title: '💼 Slot Proyek Terbuka',
    message: 'Tersisa 2 slot pengerjaan web kustom bulan ini. Jadwalkan sesi konsultasi sekarang.',
    type: 'promo',
  },
];

export const NotificationCenter: React.FC<NotificationCenterProps> = ({ onOpenConsultation }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [notifications, setNotifications] = useState<PushNotification[]>(INITIAL_NOTIFICATIONS);
  const [activeToast, setActiveToast] = useState<PushNotification | null>(null);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [browserPerm, setBrowserPerm] = useState<NotificationPermission>('default');
  const [isSimulating, setIsSimulating] = useState(true);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if ('Notification' in window) {
      setBrowserPerm(Notification.permission);
    }
  }, []);

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const unreadCount = notifications.filter((n) => n.unread).length;

  const handleRequestPermission = async () => {
    const res = await requestBrowserNotificationPermission();
    setBrowserPerm(res);
    if (res === 'granted') {
      showBrowserPushNotification('Push Notifikasi KeuvaWeb Aktif', {
        body: 'Anda akan menerima pembaruan proyek, status PageSpeed, dan jadwal konsultasi secara langsung.',
      });
    }
  };

  const triggerNewNotification = (
    title?: string,
    message?: string,
    type?: PushNotification['type']
  ) => {
    const randomEvent = SIMULATED_EVENTS[Math.floor(Math.random() * SIMULATED_EVENTS.length)];
    const newNotif: PushNotification = {
      id: `notif-${Date.now()}`,
      title: title || randomEvent.title,
      message: message || randomEvent.message,
      type: type || randomEvent.type,
      timestamp: 'Baru saja',
      unread: true,
    };

    setNotifications((prev) => [newNotif, ...prev]);
    setActiveToast(newNotif);

    if (soundEnabled) {
      playNotificationSound();
    }

    showBrowserPushNotification(newNotif.title, {
      body: newNotif.message,
    });

    // Auto dismiss toast after 5s
    setTimeout(() => {
      setActiveToast((current) => (current?.id === newNotif.id ? null : current));
    }, 5000);
  };

  // Periodic real-time simulator
  useEffect(() => {
    if (!isSimulating) return;

    // Trigger one automatic update every 50 seconds
    const interval = setInterval(() => {
      triggerNewNotification();
    }, 50000);

    return () => clearInterval(interval);
  }, [isSimulating, soundEnabled]);

  const markAllAsRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, unread: false })));
  };

  const clearAll = () => {
    setNotifications([]);
  };

  return (
    <div className="relative" ref={menuRef}>
      {/* Bell Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Pusat Notifikasi Real-Time"
        className="relative w-10 h-10 rounded-xl bg-surface-container hover:bg-surface-container-high text-on-surface flex items-center justify-center transition-all border border-line focus:outline-none focus:ring-2 focus:ring-primary-container"
      >
        <Icon name="notifications" className=" text-[20px] text-primary" />
        {unreadCount > 0 && (
          <span className="absolute -top-1 -right-1 flex h-5 w-5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tertiary opacity-75"></span>
            <span className="relative inline-flex items-center justify-center rounded-full h-5 w-5 bg-gradient-to-r from-primary-container to-secondary-container text-[10px] font-bold text-white shadow-md">
              {unreadCount > 9 ? '9+' : unreadCount}
            </span>
          </span>
        )}
      </button>

      {/* Dropdown Panel */}
      {isOpen && (
        <div className="absolute right-0 mt-3 w-80 sm:w-96 rounded-2xl bg-surface-container-low border border-line-strong shadow-[0_20px_50px_rgba(0,0,0,0.6)] backdrop-blur-2xl z-50 overflow-hidden text-left animate-in fade-in slide-in-from-top-2 duration-200">
          {/* Header */}
          <div className="p-4 bg-surface-container border-b border-line flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-tertiary animate-pulse"></span>
              <h3 className="font-semibold text-sm text-on-surface">
                Real-Time Push Feeds
              </h3>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setSoundEnabled(!soundEnabled)}
                title={soundEnabled ? 'Matikan Suara Chime' : 'Aktifkan Suara Chime'}
                aria-label={soundEnabled ? 'Matikan suara notifikasi' : 'Aktifkan suara notifikasi'}
                className="p-1 rounded text-outline hover:text-on-surface transition-colors"
              >
                <Icon
                  name={soundEnabled ? 'volume_up' : 'volume_off'}
                  className="text-sm"
                />
              </button>
              {unreadCount > 0 && (
                <button
                  onClick={markAllAsRead}
                  className="text-xs text-primary hover:text-ink-strong font-medium transition-colors"
                >
                  Tandai Dibaca
                </button>
              )}
            </div>
          </div>

          {/* Browser Push Permission Banner */}
          {browserPerm !== 'granted' && (
            <div className="p-3 bg-gradient-to-r from-primary-container/15 to-secondary-container/15 border-b border-primary-container/20 flex items-center justify-between gap-3">
              <div className="flex items-start gap-2 text-xs text-on-surface">
                <Icon name="devices" className=" text-base text-tertiary shrink-0" />
                <span>Aktifkan push notifikasi browser untuk update instan SLA & proyek.</span>
              </div>
              <button
                onClick={handleRequestPermission}
                className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-primary-container hover:bg-primary-hover text-on-primary-container shrink-0 transition-colors shadow-sm"
              >
                Aktifkan
              </button>
            </div>
          )}

          {/* Controls Bar */}
          <div className="px-4 py-2 bg-background/60 border-b border-line flex items-center justify-between text-xs text-outline">
            <button
              onClick={() => triggerNewNotification('⚡ Tes Push Notifikasi', 'Ini adalah simulasi push notifikasi real-time dari engine KeuvaWeb.', 'audit')}
              className="inline-flex items-center gap-1 text-tertiary hover:text-ink-strong transition-colors"
            >
              <Icon name="send" className=" text-[14px]" />
              <span>Kirim Tes Notifikasi</span>
            </button>
            <div className="flex items-center gap-2">
              <span className="text-[11px]">Auto Live:</span>
              <button
                onClick={() => setIsSimulating(!isSimulating)}
                className={`w-7 h-4 rounded-full transition-colors relative flex items-center ${
                  isSimulating ? 'bg-primary-container' : 'bg-surface-container-highest'
                }`}
              >
                <span
                  className={`w-3 h-3 rounded-full bg-ink-strong transition-transform ${
                    isSimulating ? 'translate-x-3.5' : 'translate-x-0.5'
                  }`}
                />
              </button>
            </div>
          </div>

          {/* Notification List */}
          <div className="max-h-80 overflow-y-auto divide-y divide-line">
            {notifications.length === 0 ? (
              <div className="p-6 text-center text-outline text-xs">
                <Icon name="notifications_paused" className=" text-2xl text-outline-variant mb-1" />
                <p>Belum ada notifikasi baru.</p>
              </div>
            ) : (
              notifications.map((notif) => (
                <div
                  key={notif.id}
                  className={`p-3.5 hover:bg-surface-container transition-colors flex items-start gap-3 ${
                    notif.unread ? 'bg-surface-container/50' : ''
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5 ${
                      notif.type === 'audit'
                        ? 'bg-tertiary/15 text-tertiary'
                        : notif.type === 'launch'
                        ? 'bg-primary-container/15 text-primary-container'
                        : notif.type === 'lead'
                        ? 'bg-secondary/15 text-secondary'
                        : 'bg-surface-container-high text-on-surface'
                    }`}
                  >
                    <Icon
                      className="text-base"
                      name={
                        notif.type === 'audit'
                          ? 'speed'
                          : notif.type === 'launch'
                          ? 'rocket_launch'
                          : notif.type === 'lead'
                          ? 'contact_phone'
                          : 'notifications'
                      }
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-1 mb-0.5">
                      <p className="text-xs font-semibold text-on-surface truncate">
                        {notif.title}
                      </p>
                      <span className="text-[10px] text-outline whitespace-nowrap">
                        {notif.timestamp}
                      </span>
                    </div>
                    <p className="text-xs text-on-surface-variant leading-relaxed">
                      {notif.message}
                    </p>
                  </div>
                  {notif.unread && (
                    <span className="w-1.5 h-1.5 rounded-full bg-tertiary shrink-0 mt-1.5" />
                  )}
                </div>
              ))
            )}
          </div>

          {/* Footer of panel */}
          <div className="p-3 bg-surface-container border-t border-line flex items-center justify-between">
            <button
              onClick={clearAll}
              className="text-xs text-outline hover:text-on-surface transition-colors"
            >
              Hapus Semua
            </button>
            {onOpenConsultation && (
              <button
                onClick={() => {
                  setIsOpen(false);
                  onOpenConsultation();
                }}
                className="text-xs font-medium text-tertiary hover:underline"
              >
                Mulai Konsultasi →
              </button>
            )}
          </div>
        </div>
      )}

      {/* Floating In-App Toast Popup */}
      {activeToast && (
        <div className="fixed bottom-6 right-6 z-50 max-w-sm w-full bg-surface-container-low/95 border border-primary-container/40 backdrop-blur-xl p-4 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.6)] text-left animate-in slide-in-from-bottom-4 duration-300">
          <div className="flex items-start justify-between gap-3">
            <div className="w-8 h-8 rounded-lg bg-primary-container/20 text-tertiary flex items-center justify-center shrink-0">
              <Icon name="bolt" className=" text-lg" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-tertiary">
                  Push Notifikasi
                </span>
                <span className="text-[10px] text-outline">Baru saja</span>
              </div>
              <h4 className="text-xs font-bold text-on-surface mb-1">
                {activeToast.title}
              </h4>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                {activeToast.message}
              </p>
            </div>
            <button
              onClick={() => setActiveToast(null)}
              className="text-outline hover:text-ink-strong p-1"
            >
              <Icon name="close" className=" text-sm" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
