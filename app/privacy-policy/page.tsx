'use client';

import { Section } from '@/components/ui/section';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-[hsl(var(--primary))]/5 to-transparent pb-16 pt-24 md:pb-24 md:pt-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-heading text-4xl font-bold tracking-tight text-[hsl(var(--foreground))] sm:text-5xl">
              Privacy Policy
            </h1>
            <p className="mt-4 text-lg text-[hsl(var(--muted-foreground))]">
              Last updated: July 2026
            </p>
          </div>
        </div>
      </section>
      <Section>
        <Breadcrumbs items={[{ label: 'Privacy Policy' }]} />
        <div className="prose prose-gray mx-auto max-w-3xl space-y-6 text-[hsl(var(--muted-foreground))] leading-relaxed">
          <h2 className="font-heading text-2xl font-semibold text-[hsl(var(--foreground))]">1. Introduction</h2>
          <p>Himalayan Botanicals Nepal (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.</p>

          <h2 className="font-heading text-2xl font-semibold text-[hsl(var(--foreground))]">2. Information We Collect</h2>
          <p>We collect information you voluntarily provide when you fill out forms on our website, including: name, email address, phone number, company name, country, product preferences, and any other information you choose to share with us through our contact and quote request forms.</p>
          <p>We also automatically collect certain information when you visit our website, including your IP address, browser type, operating system, referring URLs, and pages visited.</p>

          <h2 className="font-heading text-2xl font-semibold text-[hsl(var(--foreground))]">3. How We Use Your Information</h2>
          <p>We use the information we collect to: respond to your inquiries and quote requests, provide information about our products and services, improve our website and services, comply with legal obligations, and communicate with you about your account or transactions.</p>

          <h2 className="font-heading text-2xl font-semibold text-[hsl(var(--foreground))]">4. Data Protection</h2>
          <p>We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. We use secure servers, encryption, and access controls to safeguard your information.</p>

          <h2 className="font-heading text-2xl font-semibold text-[hsl(var(--foreground))]">5. Third-Party Disclosure</h2>
          <p>We do not sell, trade, or transfer your personal information to third parties without your consent, except as required by law or as necessary to provide our services (e.g., shipping carriers, payment processors).</p>

          <h2 className="font-heading text-2xl font-semibold text-[hsl(var(--foreground))]">6. Contact</h2>
          <p>If you have questions about this Privacy Policy, please contact us at info@himalayanbotanicals.com.np.</p>
        </div>
      </Section>
    </>
  );
}
