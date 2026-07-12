'use client';

import { motion } from 'framer-motion';
import {
  Package,
  ShoppingBag,
  Box,
  PackageOpen,
  Tag,
  Factory,
  CheckCircle,
} from 'lucide-react';
import { packagingOptions } from '@/lib/data';
import { Section, SectionHeader } from '@/components/ui/section';
import { AnimatedCard } from '@/components/ui/animated-card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { OrganizationJsonLd } from '@/components/ui/json-ld';
import Link from 'next/link';

const iconMap: Record<string, React.ElementType> = {
  Package,
  ShoppingBag,
  Box,
  PackageOpen,
  Tag,
  Factory,
};

export default function PackagingPage() {
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
            <Badge className="mb-4">Packaging</Badge>
            <h1 className="font-heading text-4xl font-bold tracking-tight text-[hsl(var(--foreground))] sm:text-5xl lg:text-6xl">
              Packaging Solutions
            </h1>
            <p className="mt-6 text-lg text-[hsl(var(--muted-foreground))] leading-relaxed">
              From bulk export sacks to retail-ready packaging, we offer flexible solutions
              tailored to your supply chain requirements.
            </p>
          </motion.div>
        </div>
      </section>

      <Section>
        <Breadcrumbs items={[
          { label: 'Packaging' },
        ]} />
        <SectionHeader
          title="Standard Packaging Options"
          subtitle="Choose from our range of standard packaging formats, all meeting international shipping standards."
          centered
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {packagingOptions.map((option, i) => {
            const Icon = iconMap[option.icon] || Package;
            return (
              <AnimatedCard key={option.title} index={i} className="flex flex-col">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))]">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-[hsl(var(--foreground))]">
                  {option.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[hsl(var(--muted-foreground))]">
                  {option.description}
                </p>
                <div className="mt-auto pt-4">
                  <p className="mb-2 text-xs font-medium uppercase tracking-wider text-[hsl(var(--muted-foreground))]">
                    Suitable for
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {option.suitable.map((s) => (
                      <Badge key={s} variant="secondary">
                        {s}
                      </Badge>
                    ))}
                  </div>
                </div>
              </AnimatedCard>
            );
          })}
        </div>
      </Section>

      <Section dark className="bg-[hsl(var(--muted))]">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Tag className="mb-3 h-8 w-8 text-[hsl(var(--primary))]" />
            <h2 className="font-heading text-2xl font-bold text-[hsl(var(--foreground))]">
              Private Label Services
            </h2>
            <p className="mt-4 leading-relaxed text-[hsl(var(--muted-foreground))]">
              Launch your own branded product line without the overhead of manufacturing. Our
              private label service covers everything from custom packaging design to
              regulatory-compliant labeling:
            </p>
            <ul className="mt-4 space-y-2">
              {[
                'Custom branded stand-up pouches and resealable bags',
                'Regulatory-compliant labels with nutritional and supplement facts',
                'Barcode and lot number integration',
                'Custom artwork and design support',
                'MOQ as low as 500 units per SKU',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-[hsl(var(--muted-foreground))]">
                  <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <Factory className="mb-3 h-8 w-8 text-[hsl(var(--primary))]" />
            <h2 className="font-heading text-2xl font-bold text-[hsl(var(--foreground))]">
              OEM Manufacturing
            </h2>
            <p className="mt-4 leading-relaxed text-[hsl(var(--muted-foreground))]">
              Beyond packaging, we offer comprehensive OEM capabilities for custom formulations
              and finished goods. Our GMP-compliant facility can handle:
            </p>
            <ul className="mt-4 space-y-2">
              {[
                'Custom grinding and sieving to specified mesh sizes',
                'Herb blending and formulation development',
                'Capsule filling (vegetable and gelatin)',
                'Custom kitting and bundle assembly',
                'Quality testing and CoA for every finished batch',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-[hsl(var(--muted-foreground))]">
                  <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </Section>

      <Section>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="font-heading text-3xl font-bold text-[hsl(var(--foreground))]">
            Need Custom Packaging?
          </h2>
          <p className="mt-4 text-lg text-[hsl(var(--muted-foreground))]">
            Tell us your requirements and we&apos;ll design a packaging solution that fits your
            brand and budget.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/contact">Discuss Your Needs</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/request-quote">Request a Quote</Link>
            </Button>
          </div>
        </motion.div>
      </Section>
      <OrganizationJsonLd />
    </>
  );
}
