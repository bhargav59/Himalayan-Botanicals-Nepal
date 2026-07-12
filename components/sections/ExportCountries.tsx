'use client';

import { Section, SectionHeader } from '@/components/ui/section';
import { AnimatedCard } from '@/components/ui/animated-card';
import { exportCountries } from '@/lib/data';

export function ExportCountries() {
  return (
    <Section id="export-destinations" dark>
      <SectionHeader
        title="Export Destinations"
        subtitle="Our premium Himalayan botanicals reach discerning buyers across the globe — from North America and Europe to East Asia and the Middle East."
        centered
      />
      <div className="relative">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-5">
          <svg viewBox="0 0 800 400" className="h-full w-full">
            <circle cx="400" cy="200" r="180" fill="none" stroke="currentColor" strokeWidth="0.5" />
            <circle cx="400" cy="200" r="120" fill="none" stroke="currentColor" strokeWidth="0.5" />
            <ellipse cx="400" cy="200" rx="250" ry="150" fill="none" stroke="currentColor" strokeWidth="0.5" />
          </svg>
        </div>
        <div className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {exportCountries.map((country, index) => (
            <AnimatedCard key={country.name} index={index}>
              <div className="mb-3 text-4xl">{country.flag}</div>
              <h3 className="font-heading text-lg font-semibold text-[hsl(var(--foreground))]">
                {country.name}
              </h3>
              <p className="mt-2 text-sm text-[hsl(var(--muted-foreground))] leading-relaxed">
                {country.description}
              </p>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </Section>
  );
}
