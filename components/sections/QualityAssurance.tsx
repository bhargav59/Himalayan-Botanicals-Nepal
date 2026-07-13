'use client';

import Link from 'next/link';
import { FlaskConical, FileCheck, SearchCheck, ArrowRight } from 'lucide-react';
import { Section, SectionHeader } from '@/components/ui/section';
import { AnimatedCard } from '@/components/ui/animated-card';
import { Button } from '@/components/ui/button';

const features = [
  {
    title: 'Laboratory Testing',
    description: 'Every batch undergoes comprehensive third-party testing for heavy metals (ICP-MS), microbial contaminants, pesticide residues, and active compound potency.',
    icon: FlaskConical,
  },
  {
    title: 'Certification & Compliance',
    description: 'Full documentation including Certificate of Analysis, phytosanitary certificates, and origin certifications to meet international regulatory requirements.',
    icon: FileCheck,
  },
  {
    title: 'Traceability Systems',
    description: 'From harvest GPS coordinates to export shipment — every batch carries a unique lot number with complete chain-of-custody documentation.',
    icon: SearchCheck,
  },
];

export function QualityAssurance() {
  return (
    <Section id="quality-assurance">
      <SectionHeader
        title="Quality Assurance"
        subtitle="Every herb we export meets stringent international quality standards through rigorous testing, certification, and full supply chain traceability."
        centered
      />
      <div className="grid gap-8 md:grid-cols-3">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <AnimatedCard key={feature.title} index={index}>
              <div className="mb-4 inline-flex rounded-xl bg-[hsl(var(--primary))]/10 p-3">
                <Icon className="h-6 w-6 text-[hsl(var(--primary))]" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-[hsl(var(--foreground))]">
                {feature.title}
              </h3>
              <p className="mt-3 text-[hsl(var(--muted-foreground))] leading-relaxed">
                {feature.description}
              </p>
            </AnimatedCard>
          );
        })}
      </div>
      <div className="mt-12 text-center">
        <Link href="/quality">
          <Button variant="outline" size="lg">
            Learn About Our Quality Process
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>
      </div>
    </Section>
  );
}
