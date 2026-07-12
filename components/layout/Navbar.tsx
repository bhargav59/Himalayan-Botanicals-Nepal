'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Leaf, ChevronDown, Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const navLinks = [
  { href: '/', label: 'Home' },
  {
    href: '/products',
    label: 'Products',
    children: [
      { href: '/products/himalayan-shilajit-resin', label: 'Himalayan Shilajit' },
      { href: '/products/ashwagandha-root', label: 'Ashwagandha Root' },
      { href: '/products/tulsi-holy-basil', label: 'Tulsi (Holy Basil)' },
      { href: '/products/brahmi-gotu-kola', label: 'Brahmi (Gotu Kola)' },
      { href: '/products/turmeric-curcuma-longa', label: 'Turmeric' },
      { href: '/products/timur-pepper-sichuan', label: 'Timur Pepper' },
      { href: '/products/jatamansi-spikenard', label: 'Jatamansi' },
      { href: '/products/chiraito-swertia', label: 'Chiraito' },
    ],
  },
  { href: '/about', label: 'About' },
  { href: '/quality', label: 'Quality' },
  { href: '/packaging', label: 'Packaging' },
  { href: '/export-process', label: 'Export Process' },
  { href: '/faq', label: 'FAQ' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        'fixed left-0 right-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-[hsl(var(--background))]/95 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      )}
    >
      <nav aria-label="Main navigation" className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <Leaf aria-hidden="true" className="h-7 w-7 text-[hsl(var(--primary))]" />
          <span className="font-heading text-lg font-bold text-[hsl(var(--foreground))]">
            Himalayan<span className="text-[hsl(var(--primary))]"> Botanicals</span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <NavLink key={link.href} link={link} pathname={pathname} />
          ))}
        </div>

        <div className="flex items-center gap-3">
          {mounted && (
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="rounded-lg p-2 text-[hsl(var(--muted-foreground))] hover:bg-[hsl(var(--muted))] transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun aria-hidden="true" className="h-5 w-5" /> : <Moon aria-hidden="true" className="h-5 w-5" />}
            </button>
          )}

          <Link href="/request-quote" className="hidden lg:block">
            <Button size="sm">Request Quote</Button>
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-lg p-2 text-[hsl(var(--foreground))] hover:bg-[hsl(var(--muted))] lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? <X aria-hidden="true" className="h-6 w-6" /> : <Menu aria-hidden="true" className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-[hsl(var(--border))] bg-[hsl(var(--background))] lg:hidden"
          >
            <div className="space-y-1 px-4 py-4">
              {navLinks.map((link) => (
                <div key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      'block rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                      pathname === link.href
                        ? 'text-[hsl(var(--primary))] bg-[hsl(var(--primary))]/5'
                        : 'text-[hsl(var(--foreground))] hover:bg-[hsl(var(--muted))]'
                    )}
                    aria-current={pathname === link.href ? 'page' : undefined}
                  >
                    {link.label}
                  </Link>
                  {link.children && (
                    <div className="ml-4 space-y-1 border-l border-[hsl(var(--border))] pl-4">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={cn(
                            'block rounded-lg px-3 py-1.5 text-sm transition-colors',
                            pathname === child.href
                              ? 'text-[hsl(var(--primary))]'
                              : 'text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))]'
                          )}
                          aria-current={pathname === child.href ? 'page' : undefined}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-2">
                <Link href="/request-quote">
                  <Button className="w-full">Request Quote</Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function NavLink({
  link,
  pathname,
}: {
  link: (typeof navLinks)[0];
  pathname: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  if (!link.children) {
    return (
      <Link
        href={link.href}
        className={cn(
          'rounded-lg px-3 py-2 text-sm font-medium transition-colors',
          pathname === link.href
            ? 'text-[hsl(var(--primary))]'
            : 'text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))] hover:bg-[hsl(var(--muted))]'
        )}
        aria-current={pathname === link.href ? 'page' : undefined}
      >
        {link.label}
      </Link>
    );
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      onFocus={() => setIsOpen(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) {
          setIsOpen(false);
        }
      }}
    >
      <button
        className={cn(
          'flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition-colors',
          pathname.startsWith('/products')
            ? 'text-[hsl(var(--primary))]'
            : 'text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))] hover:bg-[hsl(var(--muted))]'
        )}
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        {link.label}
        <ChevronDown
          aria-hidden="true"
          className={cn(
            'h-3.5 w-3.5 transition-transform duration-200',
            isOpen && 'rotate-180'
          )}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.15 }}
            role="menu"
            className="absolute left-0 top-full z-50 mt-1 w-56 rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-2 shadow-lg"
          >
            {link.children.map((child) => (
              <Link
                key={child.href}
                href={child.href}
                role="menuitem"
                className={cn(
                  'block rounded-lg px-3 py-2 text-sm transition-colors',
                  pathname === child.href
                    ? 'text-[hsl(var(--primary))] bg-[hsl(var(--primary))]/5'
                    : 'text-[hsl(var(--foreground))] hover:bg-[hsl(var(--muted))]'
                )}
                aria-current={pathname === child.href ? 'page' : undefined}
              >
                {child.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
