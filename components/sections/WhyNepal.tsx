'use client';

import { Mountain, Leaf, Shield, Globe } from 'lucide-react';
import { Section, SectionHeader } from '@/components/ui/section';
import { AnimatedCard } from '@/components/ui/animated-card';

const reasons = [
  {
    title: 'Unique Biodiversity',
    description: 'Nepal spans tropical to alpine within 200km — one of the world\'s most biodiverse regions for medicinal plants.',
    icon: Mountain,
  },
  {
    title: 'Traditional Knowledge',
    description: 'Centuries-old Ayurvedic wisdom passed down through generations ensures authentic harvesting and processing methods.',
    icon: Leaf,
  },
  {
    title: 'Quality Standards',
    description: 'Modern testing laboratories and full batch traceability meet international pharmacopoeia standards.',
    icon: Shield,
  },
  {
    title: 'Sustainable Practices',
    description: 'Community-managed harvesting protocols protect wild populations while supporting local livelihoods.',
    icon: Globe,
  },
];

export function WhyNepal() {
  return (
    <Section id="why-nepal">
      <SectionHeader
        title="Why Nepal?"
        subtitle="Nepal's extraordinary geography — from the tropical Terai plains to the alpine Himalayas within a mere 200 kilometers — creates unparalleled conditions for growing the world's most potent medicinal herbs."
        centered
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {reasons.map((reason, index) => {
          const Icon = reason.icon;
          return (
            <AnimatedCard key={reason.title} index={index}>
              <div className="mb-4 inline-flex rounded-xl bg-[hsl(var(--primary))]/10 p-3">
                <Icon className="h-6 w-6 text-[hsl(var(--primary))]" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-[hsl(var(--foreground))]">
                {reason.title}
              </h3>
              <p className="mt-2 text-[hsl(var(--muted-foreground))] leading-relaxed">
                {reason.description}
              </p>
            </AnimatedCard>
          );
        })}
      </div>
    </Section>
  );
}
