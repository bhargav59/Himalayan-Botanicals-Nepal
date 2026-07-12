'use client';

import { Hero } from '@/components/sections/Hero';
import { WhyNepal } from '@/components/sections/WhyNepal';
import { FeaturedProducts } from '@/components/sections/FeaturedProducts';
import { ExportCountries } from '@/components/sections/ExportCountries';
import { QualityAssurance } from '@/components/sections/QualityAssurance';
import { ExportWorkflow } from '@/components/sections/ExportWorkflow';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { BlogSection } from '@/components/sections/BlogSection';
import { CTASection } from '@/components/sections/CTASection';

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhyNepal />
      <FeaturedProducts />
      <ExportCountries />
      <QualityAssurance />
      <ExportWorkflow />
      <TestimonialsSection />
      <BlogSection />
      <CTASection />
    </>
  );
}
