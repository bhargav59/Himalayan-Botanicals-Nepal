'use client';

import { motion } from 'framer-motion';
import {
  FlaskConical,
  Microscope,
  TestTubes,
  FileCheck,
  SearchCheck,
  Leaf,
  Download,
  Beaker,
  ShieldCheck,
} from 'lucide-react';
import { certifications } from '@/lib/data';
import { Section, SectionHeader } from '@/components/ui/section';
import { AnimatedCard } from '@/components/ui/animated-card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { OrganizationJsonLd } from '@/components/ui/json-ld';

const iconMap: Record<string, React.ElementType> = {
  FlaskConical,
  Microscope,
  TestTubes,
  FileCheck,
  SearchCheck,
  Leaf,
};

const testingSteps = [
  {
    icon: SearchCheck,
    title: 'Raw Material Inspection',
    description:
      'Every incoming batch is visually inspected, sampled, and logged into our traceability system. GPS coordinates and harvester records are verified against our supplier database.',
  },
  {
    icon: Beaker,
    title: 'Laboratory Analysis',
    description:
      'Samples undergo ICP-MS heavy metal screening, HPLC active compound quantification, and full microbiological profiling at our in-house lab and third-partner laboratories.',
  },
  {
    icon: ShieldCheck,
    title: 'Final Quality Release',
    description:
      'Only batches that pass all specification limits receive a Certificate of Analysis and are approved for packing and shipment. Non-conforming batches are quarantined and rejected.',
  },
];

export default function QualityPage() {
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
            <Badge className="mb-4">Quality</Badge>
            <h1 className="font-heading text-4xl font-bold tracking-tight text-[hsl(var(--foreground))] sm:text-5xl lg:text-6xl">
              Quality & Certifications
            </h1>
            <p className="mt-6 text-lg text-[hsl(var(--muted-foreground))] leading-relaxed">
              Every shipment is backed by rigorous testing, full traceability, and international
              quality standards. We don&apos;t just export herbs — we export confidence.
            </p>
          </motion.div>
        </div>
      </section>

      <Section>
        <Breadcrumbs items={[
          { label: 'Quality & Certifications' },
        ]} />
        <SectionHeader
          title="Our Certifications"
          subtitle="Third-party verified quality assurance across every parameter."
          centered
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, i) => {
            const Icon = iconMap[cert.icon] || FlaskConical;
            return (
              <AnimatedCard key={cert.title} index={i}>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))]">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-[hsl(var(--foreground))]">
                  {cert.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[hsl(var(--muted-foreground))]">
                  {cert.description}
                </p>
              </AnimatedCard>
            );
          })}
        </div>
      </Section>

      <Section dark className="bg-[hsl(var(--muted))]">
        <SectionHeader
          title="Our Testing Process"
          subtitle="A rigorous three-stage quality control system."
          centered
        />
        <div className="relative mt-12">
          <div className="absolute left-8 top-0 hidden h-full w-px bg-[hsl(var(--border))] md:block" />
          <div className="space-y-8">
            {testingSteps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative pl-0 md:pl-20"
              >
                <div className="absolute left-0 top-0 hidden h-10 w-10 items-center justify-center rounded-full border-2 border-[hsl(var(--border))] bg-[hsl(var(--background))] md:flex">
                  <step.icon className="h-5 w-5 text-[hsl(var(--primary))]" />
                </div>
                <div className="rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-6">
                  <h3 className="font-heading text-xl font-semibold text-[hsl(var(--foreground))]">
                    {i + 1}. {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[hsl(var(--muted-foreground))]">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <SearchCheck className="mb-3 h-8 w-8 text-[hsl(var(--primary))]" />
            <h2 className="font-heading text-2xl font-bold text-[hsl(var(--foreground))]">
              Full Traceability
            </h2>
            <p className="mt-4 leading-relaxed text-[hsl(var(--muted-foreground))]">
              Every batch in our supply chain is assigned a unique lot number that tracks the
              product from harvest location through processing, testing, and shipping. Our
              documentation includes:
            </p>
            <ul className="mt-4 space-y-2">
              {[
                'Batch records with GPS coordinates of harvest sites',
                'Harvester and collector identification',
                'Processing logs with date and operator records',
                'Laboratory test results with analyst signatures',
                'Storage temperature and humidity logs',
                'Shipping documentation with lot cross-reference',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-[hsl(var(--muted-foreground))]">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[hsl(var(--primary))]" />
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
            <Download className="mb-3 h-8 w-8 text-[hsl(var(--primary))]" />
            <h2 className="font-heading text-2xl font-bold text-[hsl(var(--foreground))]">
              Download Certificates
            </h2>
            <p className="mt-4 leading-relaxed text-[hsl(var(--muted-foreground))]">
              Access our quality documentation and standard certificates. For batch-specific
              Certificates of Analysis, please contact our quality team with your batch number.
            </p>
            <div className="mt-6 space-y-3">
              <Button asChild variant="outline" className="w-full justify-start sm:w-auto">
                <a href="#">
                  <FileCheck className="mr-2 h-4 w-4" />
                  Quality Policy Statement (PDF)
                </a>
              </Button>
              <Button asChild variant="outline" className="w-full justify-start sm:w-auto">
                <a href="#">
                  <Microscope className="mr-2 h-4 w-4" />
                  Standard CoA Template (PDF)
                </a>
              </Button>
              <Button asChild variant="outline" className="w-full justify-start sm:w-auto">
                <a href="#">
                  <Leaf className="mr-2 h-4 w-4" />
                  Sustainability Report (PDF)
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </Section>

      <Section dark className="bg-[hsl(var(--muted))]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="font-heading text-3xl font-bold text-[hsl(var(--foreground))]">
            Need a Batch-Specific Certificate?
          </h2>
          <p className="mt-4 text-lg text-[hsl(var(--muted-foreground))]">
            Contact our quality assurance team with your batch number or PO reference.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button asChild size="lg">
              <a href="mailto:quality@himalayanbotanicals.com.np">
                <FileCheck className="mr-2 h-4 w-4" />
                Request CoA
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="tel:+977-1-4XXXXXX">Call Quality Team</a>
            </Button>
          </div>
        </motion.div>
      </Section>
      <OrganizationJsonLd />
    </>
  );
}
