'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const stats = [
  { value: '200+', label: 'Tonnes Exported' },
  { value: '8', label: 'Countries' },
  { value: '100%', label: 'Quality Tested' },
  { value: '500+', label: 'Happy Buyers' },
];

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--primary))]/80">
      <div className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[hsl(var(--background))]/80" />
      <div className="relative mx-auto max-w-7xl px-4 pt-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="font-heading text-4xl font-bold tracking-tight text-[hsl(var(--primary-foreground))] sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Premium Himalayan Medicinal Herbs & Natural Products
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            className="mt-6 text-lg text-[hsl(var(--primary-foreground))]/80 sm:text-xl md:text-2xl"
          >
            Trusted exporter of high-quality botanical ingredients from Nepal to global markets since 2010
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Link href="/products">
              <Button size="xl" className="bg-[hsl(var(--background))] text-[hsl(var(--foreground))] hover:bg-[hsl(var(--background))]/90">
                Explore Products
              </Button>
            </Link>
            <Link href="/request-quote">
              <Button size="xl" variant="outline" className="border-[hsl(var(--primary-foreground))] text-[hsl(var(--primary-foreground))] hover:bg-[hsl(var(--primary-foreground))]/10">
                Request Quote
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.8 }}
        className="absolute bottom-0 left-0 right-0 border-t border-[hsl(var(--primary-foreground))]/10 bg-[hsl(var(--background))]/10 backdrop-blur-sm"
      >
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-heading text-2xl font-bold text-[hsl(var(--primary-foreground))] sm:text-3xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm text-[hsl(var(--primary-foreground))]/70">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
