'use client';

import { motion } from 'framer-motion';
import { Section, SectionHeader } from '@/components/ui/section';
import { testimonials } from '@/lib/data';

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function TestimonialsSection() {
  return (
    <Section id="testimonials">
      <SectionHeader
        title="What Our Buyers Say"
        subtitle="Trusted by pharmaceutical, nutraceutical, and cosmetic manufacturers across the globe."
        centered
      />
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        className="grid gap-8 md:grid-cols-3"
      >
        {testimonials.map((testimonial) => (
          <motion.div
            key={testimonial.name}
            variants={itemVariants}
            className="relative rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-8 shadow-md border-l-4 border-l-[hsl(var(--primary))]/20"
          >
            <div className="mb-4 text-5xl leading-none text-[hsl(var(--primary))]/20 font-serif">
              &ldquo;
            </div>
            <p className="text-[hsl(var(--muted-foreground))] leading-relaxed">
              {testimonial.text}
            </p>
            <div className="mt-6 border-t border-[hsl(var(--border))] pt-4">
              <div className="font-heading font-semibold text-[hsl(var(--foreground))]">
                {testimonial.name}
              </div>
              <div className="text-sm text-[hsl(var(--muted-foreground))]">
                {testimonial.title}, {testimonial.company}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
