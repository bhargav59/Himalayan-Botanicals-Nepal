'use client';

import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { exportSteps } from '@/lib/data';
import { Section, SectionHeader } from '@/components/ui/section';
import { Badge } from '@/components/ui/badge';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { OrganizationJsonLd } from '@/components/ui/json-ld';

export default function ExportProcessPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-[hsl(var(--primary))]/5 to-transparent pb-16 pt-24 md:pb-24 md:pt-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl text-center"
          >
            <Badge className="mb-4">Process</Badge>
            <h1 className="font-heading text-4xl font-bold tracking-tight text-[hsl(var(--foreground))] sm:text-5xl lg:text-6xl">
              Our Export Process
            </h1>
            <p className="mt-6 text-lg text-[hsl(var(--muted-foreground))] leading-relaxed">
              From inquiry to delivery — a transparent, efficient process designed to make
              international procurement of Himalayan herbs seamless.
            </p>
          </motion.div>
        </div>
      </section>

      <Section>
        <Breadcrumbs items={[
          { label: 'Export Process' },
        ]} />
        <div className="relative">
          <div className="absolute left-8 top-0 hidden h-full w-px bg-gradient-to-b from-[hsl(var(--primary))]/40 via-[hsl(var(--primary))]/20 to-transparent md:block" />

          <div className="space-y-8">
            {exportSteps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative pl-0 md:pl-20"
              >
                <div className="absolute left-0 top-0 hidden h-10 w-10 items-center justify-center rounded-full border-2 border-[hsl(var(--primary))] bg-[hsl(var(--background))] md:flex">
                  <span className="text-sm font-bold text-[hsl(var(--primary))]">
                    {step.step}
                  </span>
                </div>
                <div className="rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-6 shadow-sm transition-all duration-300 hover:shadow-md">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <h3 className="font-heading text-xl font-semibold text-[hsl(var(--foreground))]">
                      {step.step}. {step.title}
                    </h3>
                    <Badge variant="secondary">{step.duration}</Badge>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-[hsl(var(--muted-foreground))]">
                    {step.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {i < exportSteps.length - 1 ? (
                      <span className="flex items-center gap-1 text-xs text-green-600">
                        <CheckCircle className="h-3 w-3" />
                        Completed before next step
                      </span>
                    ) : (
                      <span className="text-xs text-[hsl(var(--muted-foreground))]">
                        Final milestone
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="border-t border-[hsl(var(--border))] py-16"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-heading text-3xl font-bold text-[hsl(var(--foreground))]">
              Start Your Export Journey
            </h2>
            <p className="mt-4 text-lg text-[hsl(var(--muted-foreground))]">
              Submit an inquiry today and receive a detailed quotation within 24 hours.
            </p>
          </div>
        </div>
      </motion.section>
      <OrganizationJsonLd />
    </>
  );
}
