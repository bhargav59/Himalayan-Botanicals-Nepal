'use client';

import { motion } from 'framer-motion';
import { Shield, CheckCircle, Trees, Handshake } from 'lucide-react';
import { Section, SectionHeader } from '@/components/ui/section';
import { AnimatedCard } from '@/components/ui/animated-card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { OrganizationJsonLd } from '@/components/ui/json-ld';
import Link from 'next/link';

const values = [
  {
    icon: Shield,
    title: 'Integrity',
    description:
      'Honest and transparent business practices in every transaction. From pricing to product specifications, we maintain the highest ethical standards in the Nepalese herb trade.',
  },
  {
    icon: CheckCircle,
    title: 'Quality',
    description:
      'Every shipment is certified by third-party laboratories. We never compromise on purity, potency, or safety — validated by ICP-MS, HPLC, and microbiological testing.',
  },
  {
    icon: Trees,
    title: 'Sustainability',
    description:
      'We partner with community-managed forests and organic farms to ensure our herbs are harvested responsibly, preserving Nepal\'s botanical wealth for future generations.',
  },
  {
    icon: Handshake,
    title: 'Partnership',
    description:
      'We view every client as a long-term partner, offering flexible MOQs, competitive pricing, and dedicated support from inquiry to delivery — and beyond.',
  },
];

const teamMembers = [
  {
    name: 'Rajesh Sharma',
    role: 'Founder & CEO',
    bio: '20+ years in Nepalese medicinal herb export. Former advisor to Nepal\'s Ministry of Forest and Soil Conservation.',
  },
  {
    name: 'Dr. Anupama Koirala',
    role: 'Head of Quality Control',
    bio: 'PhD in Pharmacognosy. Oversees all laboratory testing and certification protocols.',
  },
  {
    name: 'Binod Thapa',
    role: 'Supply Chain Director',
    bio: '15 years managing end-to-end logistics from Himalayan villages to international ports.',
  },
  {
    name: 'Priya Gurung',
    role: 'Export & Sales Manager',
    bio: 'Specializes in EU and North American markets. Fluent in 5 languages.',
  },
  {
    name: 'Dr. Ramesh Acharya',
    role: 'Sustainability Officer',
    bio: 'Leads community partnership programs and sustainable harvesting certifications.',
  },
  {
    name: 'Suman Rai',
    role: 'Operations Manager',
    bio: 'Manages processing facility, inventory, and order fulfillment.',
  },
];

const benefits = [
  'Direct sourcing from Himalayan farms and wildcrafting communities — no middlemen',
  'Full traceability with batch-level documentation and GPS-tracked origin',
  'Flexible MOQs from 10 kg to container loads',
  'Competitive pricing with volume discounts for long-term contracts',
  'Free samples for standard products with expedited shipping options',
  'End-to-end export documentation including phytosanitary and Fumigation certificates',
  'Dedicated account manager for every client',
  'On-time delivery guarantee with real-time tracking',
];

export default function AboutPage() {
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
            <Badge className="mb-4">About Us</Badge>
            <h1 className="font-heading text-4xl font-bold tracking-tight text-[hsl(var(--foreground))] sm:text-5xl lg:text-6xl">
              About Himalayan Botanicals Nepal
            </h1>
            <p className="mt-6 text-lg text-[hsl(var(--muted-foreground))] leading-relaxed">
              Your trusted partner for premium Himalayan medicinal herbs, connecting
              Nepal&apos;s botanical heritage with global markets since 2010.
            </p>
          </motion.div>
        </div>
      </section>

      <Section>
        <Breadcrumbs items={[
          { label: 'About Us' },
        ]} />
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-3xl font-bold text-[hsl(var(--foreground))]">
              Our Story
            </h2>
            <div className="mt-6 space-y-4 text-[hsl(var(--muted-foreground))] leading-relaxed">
              <p>
                Founded in 2010 and headquartered in Kathmandu, Nepal, Himalayan Botanicals Nepal
                was born from a simple vision: to bridge Nepal&apos;s extraordinary botanical heritage
                with global markets seeking premium, ethically sourced medicinal herbs. What began as
                a small operation working with a handful of wildcrafting communities in the remote
                districts of Dolpa and Jumla has grown into one of Nepal&apos;s most trusted herb
                export companies.
              </p>
              <p>
                Our mission is to be the most reliable bridge between Nepalese herb producers and
                international buyers. We achieve this through rigorous quality control, sustainable
                sourcing practices, and transparent business relationships. Our team of 40+
                professionals brings together expertise in sourcing, quality control, logistics,
                and international trade — ensuring that every shipment meets the exacting standards
                of our clients in pharmaceutical, nutraceutical, and cosmetic industries worldwide.
              </p>
              <p>
                Today we export to 15+ countries across North America, Europe, Asia, and the Middle
                East. Our product portfolio spans 8 flagship categories from rare high-altitude
                resins like Shilajit to volume commodities like Turmeric and Ashwagandha. Every
                product carries full traceability from harvest location to export shipment —
                a standard we pioneered in the Nepalese herb sector.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="sticky top-24 rounded-2xl bg-gradient-to-br from-[hsl(var(--primary))]/10 to-[hsl(var(--primary))]/5 p-8 lg:p-12">
              <h3 className="font-heading text-2xl font-bold text-[hsl(var(--foreground))]">
                Our Mission
              </h3>
              <p className="mt-4 text-lg leading-relaxed text-[hsl(var(--muted-foreground))]">
                To sustainably source, certify, and export Nepal&apos;s finest botanical ingredients
                — empowering local communities while delivering uncompromising quality to the world.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="rounded-xl bg-[hsl(var(--background))]/60 p-4">
                  <span className="text-3xl font-bold text-[hsl(var(--primary))]">15+</span>
                  <p className="mt-1 text-sm text-[hsl(var(--muted-foreground))]">Export Countries</p>
                </div>
                <div className="rounded-xl bg-[hsl(var(--background))]/60 p-4">
                  <span className="text-3xl font-bold text-[hsl(var(--primary))]">40+</span>
                  <p className="mt-1 text-sm text-[hsl(var(--muted-foreground))]">Team Members</p>
                </div>
                <div className="rounded-xl bg-[hsl(var(--background))]/60 p-4">
                  <span className="text-3xl font-bold text-[hsl(var(--primary))]">8</span>
                  <p className="mt-1 text-sm text-[hsl(var(--muted-foreground))]">Product Categories</p>
                </div>
                <div className="rounded-xl bg-[hsl(var(--background))]/60 p-4">
                  <span className="text-3xl font-bold text-[hsl(var(--primary))]">1010</span>
                  <p className="mt-1 text-sm text-[hsl(var(--muted-foreground))]">Founded</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      <Section dark className="bg-[hsl(var(--muted))]">
        <SectionHeader
          title="Our Mission & Values"
          subtitle="The principles that guide every decision, from sourcing to shipping."
          centered
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, i) => (
            <AnimatedCard key={value.title} index={i}>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))]">
                <value.icon className="h-6 w-6" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-[hsl(var(--foreground))]">
                {value.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[hsl(var(--muted-foreground))]">
                {value.description}
              </p>
            </AnimatedCard>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader
          title="Our Team"
          subtitle="Meet the experts behind every shipment of Himalayan botanicals."
          centered
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member, i) => (
            <AnimatedCard key={member.name} index={i}>
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[hsl(var(--primary))]/20 to-[hsl(var(--primary))]/5">
                <span className="text-xl font-bold text-[hsl(var(--primary))]">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <h3 className="font-heading text-lg font-semibold text-[hsl(var(--foreground))]">
                {member.name}
              </h3>
              <p className="text-sm font-medium text-[hsl(var(--primary))]">{member.role}</p>
              <p className="mt-2 text-sm leading-relaxed text-[hsl(var(--muted-foreground))]">
                {member.bio}
              </p>
            </AnimatedCard>
          ))}
        </div>
      </Section>

      <Section dark className="bg-[hsl(var(--muted))]">
        <SectionHeader
          title="Why Work With Us"
          subtitle="What sets Himalayan Botanicals Nepal apart."
          centered
        />
        <div className="mx-auto mt-12 max-w-3xl">
          <div className="grid gap-4 sm:grid-cols-2">
            {benefits.map((benefit, i) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="flex items-start gap-3 rounded-xl bg-[hsl(var(--background))] p-4"
              >
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />
                <span className="text-sm text-[hsl(var(--foreground))]">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="font-heading text-3xl font-bold text-[hsl(var(--foreground))]">
            Ready to Start a Partnership?
          </h2>
          <p className="mt-4 text-lg text-[hsl(var(--muted-foreground))]">
            Contact our export team to discuss your requirements, request samples, or schedule a
            visit to our facility in Kathmandu.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/request-quote">Request a Quote</Link>
            </Button>
          </div>
        </motion.div>
      </Section>
      <OrganizationJsonLd />
    </>
  );
}
