'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { products } from '@/lib/data';
import { Section, SectionHeader } from '@/components/ui/section';
import { AnimatedCard } from '@/components/ui/animated-card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { OrganizationJsonLd } from '@/components/ui/json-ld';
import { ArrowRight } from 'lucide-react';

const categories = [
  'All',
  'Resins & Exudates',
  'Roots & Barks',
  'Herbs & Leaves',
  'Spices & Seeds',
];

const categoryGradients: Record<string, string> = {
  'Resins & Exudates': 'from-amber-900/40 to-amber-700/20',
  'Roots & Barks': 'from-stone-700/40 to-stone-500/20',
  'Herbs & Leaves': 'from-green-800/40 to-green-600/20',
  'Spices & Seeds': 'from-red-800/40 to-red-600/20',
};

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProducts =
    activeCategory === 'All'
      ? products
      : products.filter((p) => p.category === activeCategory);

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
            <Badge className="mb-4">Products</Badge>
            <h1 className="font-heading text-4xl font-bold tracking-tight text-[hsl(var(--foreground))] sm:text-5xl lg:text-6xl">
              Our Products
            </h1>
            <p className="mt-6 text-lg text-[hsl(var(--muted-foreground))] leading-relaxed">
              Premium Himalayan medicinal herbs and natural products, ethically sourced and
              laboratory-certified for global B2B supply.
            </p>
          </motion.div>
        </div>
      </section>

      <Section>
        <Breadcrumbs items={[
          { label: 'Products' },
        ]} />
        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-200 ${
                activeCategory === category
                  ? 'bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] shadow-md'
                  : 'bg-[hsl(var(--muted))] text-[hsl(var(--muted-foreground))] hover:bg-[hsl(var(--primary))]/10 hover:text-[hsl(var(--foreground))]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product, i) => (
            <AnimatedCard key={product.id} index={i} className="flex flex-col">
              <Link href={`/products/${product.slug}`}>
                <div
                  className={`mb-4 flex h-48 items-center justify-center rounded-lg bg-gradient-to-br ${categoryGradients[product.category] || 'from-[hsl(var(--primary))]/20 to-[hsl(var(--primary))]/5'}`}
                >
                  <span className="px-4 text-center font-heading text-xl font-bold text-[hsl(var(--foreground))]">
                    {product.name}
                  </span>
                </div>
              </Link>
              <div className="flex flex-1 flex-col">
                <div className="mb-2">
                  <Badge variant="secondary">{product.category}</Badge>
                </div>
                <h3 className="font-heading text-xl font-semibold text-[hsl(var(--foreground))]">
                  <Link href={`/products/${product.slug}`} className="hover:text-[hsl(var(--primary))] transition-colors">
                    {product.name}
                  </Link>
                </h3>
                <p className="mt-1 text-sm italic text-[hsl(var(--muted-foreground))]">
                  {product.botanicalName}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-[hsl(var(--muted-foreground))] line-clamp-2">
                  {product.description}
                </p>
                <div className="mt-auto pt-4">
                  <Button asChild variant="link" className="px-0">
                    <Link href={`/products/${product.slug}`}>
                      View Details <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </Section>
      <OrganizationJsonLd />
    </>
  );
}
