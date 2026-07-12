'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  CheckCircle,
  Download,
  FileText,
  ShoppingCart,
  Leaf,
  Beaker,
  ShieldCheck,
  Package,
} from 'lucide-react';
import type { Product } from '@/lib/data';
import { Section } from '@/components/ui/section';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { OrganizationJsonLd, ProductJsonLd } from '@/components/ui/json-ld';

const categoryGradients: Record<string, string> = {
  'Resins & Exudates': 'from-amber-900/50 to-amber-700/30',
  'Roots & Barks': 'from-stone-700/50 to-stone-500/30',
  'Herbs & Leaves': 'from-green-800/50 to-green-600/30',
  'Spices & Seeds': 'from-red-800/50 to-red-600/30',
};

const specs: { label: string; key: keyof Product }[] = [
  { label: 'Botanical Name', key: 'botanicalName' },
  { label: 'Origin', key: 'origin' },
  { label: 'Harvest Season', key: 'harvestSeason' },
  { label: 'Appearance', key: 'appearance' },
  { label: 'Color', key: 'color' },
  { label: 'Moisture', key: 'moisture' },
  { label: 'Purity', key: 'purity' },
  { label: 'Packaging', key: 'packaging' },
  { label: 'MOQ', key: 'moq' },
  { label: 'Shelf Life', key: 'shelfLife' },
  { label: 'Lead Time', key: 'leadTime' },
];

interface Props {
  product: Product;
}

export function ProductDetailClient({ product }: Props) {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-[hsl(var(--primary))]/5 to-transparent pb-16 pt-24 md:pb-24 md:pt-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Button asChild variant="ghost" className="mb-6 -ml-3">
              <Link href="/products">
                <ArrowLeft className="mr-2 h-4 w-4" />
                All Products
              </Link>
            </Button>
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
              <div
                className={`flex h-64 items-center justify-center rounded-2xl bg-gradient-to-br ${categoryGradients[product.category] || 'from-[hsl(var(--primary))]/20 to-[hsl(var(--primary))]/5'} md:h-80 lg:h-96`}
              >
                <div className="text-center">
                  <Leaf className="mx-auto h-12 w-12 text-[hsl(var(--primary))]/40" />
                  <p className="mt-4 px-4 font-heading text-2xl font-bold text-[hsl(var(--foreground))]">
                    {product.name}
                  </p>
                </div>
              </div>
              <div>
                <Badge className="mb-3">{product.category}</Badge>
                <h1 className="font-heading text-4xl font-bold tracking-tight text-[hsl(var(--foreground))] lg:text-5xl">
                  {product.name}
                </h1>
                <p className="mt-2 text-lg italic text-[hsl(var(--muted-foreground))]">
                  {product.botanicalName}
                </p>
                <p className="mt-6 leading-relaxed text-[hsl(var(--muted-foreground))]">
                  {product.description}
                </p>
                <div className="mt-6 space-y-2">
                  <h3 className="font-heading text-lg font-semibold text-[hsl(var(--foreground))]">
                    Key Benefits
                  </h3>
                  {product.benefits.map((benefit) => (
                    <div key={benefit} className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
                      <span className="text-sm text-[hsl(var(--muted-foreground))]">{benefit}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Button asChild size="lg">
                    <Link href="/request-quote">
                      <ShoppingCart className="mr-2 h-4 w-4" />
                      Request Quote
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <a href={`/api/documents/coa?product=${encodeURIComponent(product.name)}&botanical=${encodeURIComponent(product.botanicalName)}`} target="_blank" rel="noopener noreferrer">
                      <Download className="mr-2 h-4 w-4" />
                      Download COA
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Section>
        <Breadcrumbs items={[
          { label: 'Products', href: '/products' },
          { label: product.name },
        ]} />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-heading text-2xl font-bold text-[hsl(var(--foreground))] mb-6">
            Product Specifications
          </h2>
          <Card>
            <CardContent className="p-0">
              <div className="divide-y divide-[hsl(var(--border))]">
                {specs.map((spec, i) => (
                  <motion.div
                    key={spec.label}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.03 }}
                    className="flex flex-col gap-1 px-6 py-3 sm:flex-row sm:gap-4"
                  >
                    <span className="w-40 shrink-0 text-sm font-medium text-[hsl(var(--foreground))]">
                      {spec.label}
                    </span>
                    <span className="text-sm text-[hsl(var(--muted-foreground))]">
                      {String(product[spec.key])}
                    </span>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </Section>

      <Section dark className="bg-[hsl(var(--muted))]">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Beaker className="mb-3 h-8 w-8 text-[hsl(var(--primary))]" />
            <h2 className="font-heading text-2xl font-bold text-[hsl(var(--foreground))]">
              Applications
            </h2>
            <ul className="mt-4 space-y-2">
              {product.applications.map((app) => (
                <li key={app} className="flex items-start gap-2 text-sm text-[hsl(var(--muted-foreground))]">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[hsl(var(--primary))]" />
                  {app}
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <Package className="mb-3 h-8 w-8 text-[hsl(var(--primary))]" />
            <h2 className="font-heading text-2xl font-bold text-[hsl(var(--foreground))]">
              Storage Information
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[hsl(var(--muted-foreground))]">
              {product.storage}
            </p>
            <div className="mt-4 flex items-start gap-2 text-sm text-[hsl(var(--muted-foreground))]">
              <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
              Store in compliance with GMP guidelines to maintain product integrity.
            </div>
          </motion.div>
        </div>
      </Section>

      <Section>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="font-heading text-2xl font-bold text-[hsl(var(--foreground))]">
            Interested in Bulk Orders?
          </h2>
          <p className="mt-4 text-[hsl(var(--muted-foreground))]">
            Contact our export team for pricing, samples, and customized supply solutions.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/request-quote">
                <FileText className="mr-2 h-4 w-4" />
                Request a Quote
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">Contact Sales</Link>
            </Button>
          </div>
        </motion.div>
      </Section>
      <OrganizationJsonLd />
      <ProductJsonLd product={product} />
    </>
  );
}
