'use client';

import Link from 'next/link';
import { useEffect } from 'react';

export default function ErrorPage({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error('Page error:', error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <h1 className="font-heading text-4xl font-bold text-[hsl(var(--foreground))]">Something went wrong</h1>
      <p className="mt-4 text-[hsl(var(--muted-foreground))]">
        An unexpected error occurred. Please try again or return home.
      </p>
      <div className="mt-8 flex gap-4">
        <button
          onClick={reset}
          className="inline-flex items-center justify-center h-12 rounded-lg px-8 text-base font-medium bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] hover:opacity-90 transition-all"
        >
          Try Again
        </button>
        <Link
          href="/"
          className="inline-flex items-center justify-center h-12 rounded-lg px-8 text-base font-medium border border-[hsl(var(--border))] bg-transparent hover:bg-[hsl(var(--muted))] transition-all"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
