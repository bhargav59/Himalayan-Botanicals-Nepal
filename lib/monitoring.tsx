'use client';

import { useEffect } from 'react';

export function ErrorReporter() {
  useEffect(() => {
    if (process.env.NODE_ENV !== 'production') return;

    const handler = (event: ErrorEvent) => {
      try {
        fetch('/api/log-error', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            message: event.message,
            filename: event.filename,
            lineno: event.lineno,
            colno: event.colno,
            url: window.location.href,
            timestamp: new Date().toISOString(),
          }),
        });
      } catch {}
    };

    window.addEventListener('error', handler);
    return () => window.removeEventListener('error', handler);
  }, []);

  return null;
}
