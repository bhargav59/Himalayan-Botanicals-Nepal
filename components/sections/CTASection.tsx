'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export function CTASection() {
  return (
    <section className="bg-[hsl(var(--primary))] py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-3xl font-bold tracking-tight text-[hsl(var(--primary-foreground))] sm:text-4xl lg:text-5xl">
            Ready to Source Premium Himalayan Herbs?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-[hsl(var(--primary-foreground))]/80">
            Contact our team today to discuss your requirements. We respond to all inquiries within 24 hours with detailed product information and pricing.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/contact">
              <Button
                size="xl"
                className="bg-[hsl(var(--background))] text-[hsl(var(--foreground))] hover:bg-[hsl(var(--background))]/90"
              >
                Contact Us
              </Button>
            </Link>
            <Link href="/request-quote">
              <Button
                size="xl"
                variant="outline"
                className="border-[hsl(var(--primary-foreground))] text-[hsl(var(--primary-foreground))] hover:bg-[hsl(var(--primary-foreground))]/10"
              >
                Request a Quote
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
