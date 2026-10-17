export const CONSULTATION_HOURS_TEXT = 'Senin - Sabtu: 08.30 - 20.00 WIB';

const OPEN_MIN = 8 * 60 + 30; // 08.30
const CLOSE_MIN = 20 * 60; // 20.00
const OPEN_WEEKDAYS = new Set([1, 2, 3, 4, 5, 6]); // Senin..Sabtu
const DAY_NAMES = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];

export interface Availability {
  isOpen: boolean;
  hoursLabel: string;
  statusLabel: string;
  detailLabel: string;
  nowLabel: string;
}

const WIB_PARTS = new Intl.DateTimeFormat('en-US', {
  timeZone: 'Asia/Jakarta',
  hour12: false,
  weekday: 'short',
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
  hour: '2-digit',
  minute: '2-digit',
});

const WEEKDAY_INDEX: Record<string, number> = {
  Sun: 0,
  Mon: 1,
  Tue: 2,
  Wed: 3,
  Thu: 4,
  Fri: 5,
  Sat: 6,
};

function formatClock(minutes: number): string {
  const h = String(Math.floor(minutes / 60)).padStart(2, '0');
  const m = String(minutes % 60).padStart(2, '0');
  return `${h}.${m}`;
}

function readWib(at: Date) {
  const parts = WIB_PARTS.formatToParts(at);
  const get = (type: string) => parts.find((p) => p.type === type)?.value ?? '0';
  const hour = Number(get('hour')) % 24;
  const minute = Number(get('minute'));
  return {
    weekday: WEEKDAY_INDEX[get('weekday')] ?? 0,
    minutes: hour * 60 + minute,
    label: formatClock(hour * 60 + minute),
  };
}

function nextOpening(now: { weekday: number; minutes: number }): string {
  if (OPEN_WEEKDAYS.has(now.weekday) && now.minutes < OPEN_MIN) {
    return `Buka hari ini ${formatClock(OPEN_MIN)} WIB`;
  }
  for (let i = 1; i <= 7; i++) {
    const day = (now.weekday + i) % 7;
    if (OPEN_WEEKDAYS.has(day)) {
      return `Buka lagi ${DAY_NAMES[day]} ${formatClock(OPEN_MIN)} WIB`;
    }
  }
  return `Buka lagi ${formatClock(OPEN_MIN)} WIB`;
}

export function getAvailability(at: Date = new Date()): Availability {
  const now = readWib(at);
  const withinHours = now.minutes >= OPEN_MIN && now.minutes < CLOSE_MIN;
  const isOpen = OPEN_WEEKDAYS.has(now.weekday) && withinHours;

  return {
    isOpen,
    hoursLabel: CONSULTATION_HOURS_TEXT,
    statusLabel: isOpen ? 'Online Sekarang' : 'Sedang Offline',
    detailLabel: isOpen ? 'Balasan rata-rata di bawah 1 jam' : nextOpening(now),
    nowLabel: `${now.label} WIB`,
  };
}
