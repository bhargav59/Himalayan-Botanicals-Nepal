import Link from 'next/link';
import { Leaf, Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';

const footerLinks = {
  products: [
    { href: '/products/himalayan-shilajit-resin', label: 'Himalayan Shilajit' },
    { href: '/products/ashwagandha-root', label: 'Ashwagandha Root' },
    { href: '/products/tulsi-holy-basil', label: 'Tulsi (Holy Basil)' },
    { href: '/products/brahmi-gotu-kola', label: 'Brahmi (Gotu Kola)' },
    { href: '/products/turmeric-curcuma-longa', label: 'Turmeric' },
    { href: '/products/timur-pepper-sichuan', label: 'Timur Pepper' },
    { href: '/products/jatamansi-spikenard', label: 'Jatamansi' },
    { href: '/products/chiraito-swertia', label: 'Chiraito' },
  ],
  company: [
    { href: '/about', label: 'About Us' },
    { href: '/quality', label: 'Quality & Certifications' },
    { href: '/packaging', label: 'Packaging' },
    { href: '/export-process', label: 'Export Process' },
    { href: '/faq', label: 'FAQ' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ],
  resources: [
    { href: '/products', label: 'Product Catalogue' },
    { href: '/quality', label: 'Quality Documents' },
    { href: '/request-quote', label: 'Request a Quote' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[hsl(var(--foreground))] text-white/65 dark:text-[hsl(var(--background))]/80">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <Leaf aria-hidden="true" className="h-6 w-6 text-[hsl(var(--primary))]" />
              <span className="font-heading text-lg font-bold text-white dark:text-[hsl(var(--background))]">
                Himalayan<span className="text-[hsl(var(--primary))]"> Botanicals</span>
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed">
              Premium exporter of Himalayan medicinal herbs and natural products from Nepal.
              Supplying high-quality botanical ingredients to international buyers since 2010.
            </p>
            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <MapPin aria-hidden="true" className="h-4 w-4 shrink-0 text-[hsl(var(--primary))]" />
                <span>Kathmandu, Nepal</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Mail aria-hidden="true" className="h-4 w-4 shrink-0 text-[hsl(var(--primary))]" />
                <a href="mailto:info@himalayanbotanicals.com.np" className="hover:text-white dark:hover:text-[hsl(var(--background))] transition-colors">
                  info@himalayanbotanicals.com.np
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone aria-hidden="true" className="h-4 w-4 shrink-0 text-[hsl(var(--primary))]" />
                <a href="tel:+977-1-4XXXXXX" className="hover:text-white dark:hover:text-[hsl(var(--background))] transition-colors">
                  +977-1-4XXXXXX
                </a>
              </div>
            </div>
          </div>

          <nav aria-label="Products">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white dark:text-[hsl(var(--background))]">
              Products
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.products.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors hover:text-white dark:hover:text-[hsl(var(--background))] inline-flex items-center gap-1"
                  >
                    {link.label}
                    <ArrowUpRight aria-hidden="true" className="h-3 w-3 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Company">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white dark:text-[hsl(var(--background))]">
              Company
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors hover:text-white dark:hover:text-[hsl(var(--background))]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Resources">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white dark:text-[hsl(var(--background))]">
              Resources
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors hover:text-white dark:hover:text-[hsl(var(--background))]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-xs">
              &copy; {new Date().getFullYear()} Himalayan Botanicals Nepal. All rights reserved.
            </p>
            <div className="flex gap-6 text-xs">
              <Link href="/privacy-policy" className="hover:text-white dark:hover:text-[hsl(var(--background))] transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white dark:hover:text-[hsl(var(--background))] transition-colors">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
