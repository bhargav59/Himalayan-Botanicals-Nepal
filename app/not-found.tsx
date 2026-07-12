import type { Metadata } from 'next';
import Link from 'next/link';
import { Leaf } from 'lucide-react';

export const metadata: Metadata = {
  title: '404 - Page Not Found',
  description: 'The page you are looking for could not be found.',
};

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <Leaf className="mb-6 h-16 w-16 text-[hsl(var(--primary))] opacity-50" />
      <h1 className="font-heading text-6xl font-bold text-[hsl(var(--foreground))]">404</h1>
      <h2 className="mt-4 font-heading text-2xl font-semibold text-[hsl(var(--foreground))]">Page Not Found</h2>
      <p className="mt-2 max-w-md text-[hsl(var(--muted-foreground))]">
        The page you are looking for does not exist or has been moved.
      </p>
      <div className="mt-8 flex gap-4">
        <Link
          href="/"
          className="inline-flex items-center justify-center h-12 rounded-lg px-8 text-base font-medium bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] hover:opacity-90 transition-all"
        >
          Back to Home
        </Link>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center h-12 rounded-lg px-8 text-base font-medium border border-[hsl(var(--border))] bg-transparent hover:bg-[hsl(var(--muted))] transition-all"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
}
