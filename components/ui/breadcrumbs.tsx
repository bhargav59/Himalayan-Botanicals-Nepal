'use client';

import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import { cn } from '@/lib/utils';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumbs({ items, className }: BreadcrumbsProps) {
  const origin = typeof window !== 'undefined' ? window.location.origin : 'https://himalayanbotanicals.com.np';

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: origin },
      ...items.map((item, i) => ({
        '@type': 'ListItem' as const,
        position: i + 2,
        name: item.label,
        item: item.href ? `${origin}${item.href}` : undefined,
      })),
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <nav aria-label="Breadcrumb" className={cn('mb-6', className)}>
        <ol className="flex flex-wrap items-center gap-1.5 text-sm text-[hsl(var(--muted-foreground))]">
          <li>
            <Link href="/" className="flex items-center gap-1 hover:text-[hsl(var(--primary))] transition-colors">
              <Home className="h-3.5 w-3.5" />
              <span className="sr-only">Home</span>
            </Link>
          </li>
          {items.map((item, i) => (
            <li key={i} className="flex items-center gap-1.5">
              <ChevronRight className="h-3.5 w-3.5" />
              {item.href ? (
                <Link href={item.href} className="hover:text-[hsl(var(--primary))] transition-colors">
                  {item.label}
                </Link>
              ) : (
                <span className="text-[hsl(var(--foreground))] font-medium">{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
