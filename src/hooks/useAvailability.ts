import { useEffect, useState } from 'react';
import { getAvailability, type Availability } from '../services/availability';

export function useAvailability(intervalMs = 60_000): Availability {
  const [availability, setAvailability] = useState<Availability>(() => getAvailability());

  useEffect(() => {
    const id = window.setInterval(() => setAvailability(getAvailability()), intervalMs);
    return () => window.clearInterval(id);
  }, [intervalMs]);

  return availability;
}
