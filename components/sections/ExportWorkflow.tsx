'use client';

import { motion } from 'framer-motion';
import { Section, SectionHeader } from '@/components/ui/section';

const steps = [
  {
    number: '01',
    title: 'Inquiry',
    description: 'Submit your product requirements. We respond within 24 hours with pricing and specifications.',
  },
  {
    number: '02',
    title: 'Sample & Approve',
    description: 'Free product samples sent for your quality evaluation. Third-party testing welcomed.',
  },
  {
    number: '03',
    title: 'Produce & Test',
    description: 'Order enters GMP-compliant production with in-process QC at every stage.',
  },
  {
    number: '04',
    title: 'Ship & Deliver',
    description: 'Packed, documented, and shipped via sea or air with real-time tracking.',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function ExportWorkflow() {
  return (
    <Section id="how-we-export" dark>
      <SectionHeader
        title="How We Export"
        subtitle="A streamlined export process designed for reliability, transparency, and speed — from your first inquiry to delivery at your doorstep."
        centered
      />
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        className="relative grid gap-8 md:grid-cols-4"
      >
        {steps.map((step, index) => (
          <motion.div
            key={step.number}
            variants={itemVariants}
            className="relative text-center"
          >
            {index < steps.length - 1 && (
              <div className="absolute left-[60%] top-8 hidden h-px w-[80%] border-t border-dashed border-[hsl(var(--border))] md:block" />
            )}
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[hsl(var(--primary))]/10">
              <span className="font-heading text-xl font-bold text-[hsl(var(--primary))]">
                {step.number}
              </span>
            </div>
            <h3 className="font-heading text-lg font-semibold text-[hsl(var(--foreground))]">
              {step.title}
            </h3>
            <p className="mt-2 text-sm text-[hsl(var(--muted-foreground))] leading-relaxed">
              {step.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
