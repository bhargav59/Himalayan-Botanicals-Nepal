'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Section, SectionHeader } from '@/components/ui/section';
import { AnimatedCard } from '@/components/ui/animated-card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { products } from '@/lib/data';

export function FeaturedProducts() {
  const featured = products.slice(0, 4);

  return (
    <Section id="featured-products" dark>
      <SectionHeader
        title="Featured Products"
        subtitle="Explore our premium selection of Himalayan medicinal herbs and natural products — each batch rigorously tested and fully traceable from harvest to export."
        centered
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {featured.map((product, index) => (
          <AnimatedCard key={product.id} index={index} className="flex flex-col">
            <div className="relative mb-4 aspect-[4/3] overflow-hidden rounded-lg bg-gradient-to-br from-[hsl(var(--primary))]/20 to-[hsl(var(--primary))]/5">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-heading text-5xl font-bold text-[hsl(var(--primary))]/20">
                  {product.name.charAt(0)}
                </span>
              </div>
            </div>
            <div className="mb-2">
              <Badge variant="secondary">{product.category}</Badge>
            </div>
            <h3 className="font-heading text-lg font-semibold text-[hsl(var(--foreground))]">
              {product.name}
            </h3>
            <p className="mt-1 text-sm italic text-[hsl(var(--muted-foreground))]">
              {product.botanicalName}
            </p>
            <div className="mt-auto pt-4">
              <Link
                href={`/products/${product.slug}`}
                className="inline-flex items-center text-sm font-medium text-[hsl(var(--primary))] hover:underline"
              >
                View Details
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </AnimatedCard>
        ))}
      </div>
      <div className="mt-12 text-center">
        <Link href="/products">
          <Button size="lg">
            View All Products
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>
      </div>
    </Section>
  );
}
