'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, FileText, AlertCircle } from 'lucide-react';
import { products } from '@/lib/data';
import { Section } from '@/components/ui/section';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { OrganizationJsonLd } from '@/components/ui/json-ld';
import { cn } from '@/lib/utils';
import { submitQuote } from '@/lib/actions/quote';

export default function RequestQuotePage() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [pending, setPending] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setPending(true);
    setError('');
    const result = await submitQuote(new FormData(e.currentTarget));
    setPending(false);
    if (result.success) {
      setSubmitted(true);
    } else if (result.fields) {
      const first = Object.values(result.fields)[0];
      if (first) setError(first);
    } else {
      setError(result.error || 'Something went wrong');
    }
  }

  if (submitted) {
    return (
      <>
        <section className="relative overflow-hidden bg-gradient-to-b from-[hsl(var(--primary))]/5 to-transparent pb-16 pt-24 md:pb-24 md:pt-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mx-auto max-w-lg text-center"
            >
              <CheckCircle aria-hidden="true" className="mx-auto h-16 w-16 text-green-600" />
              <h1 className="mt-6 font-heading text-3xl font-bold text-[hsl(var(--foreground))]">
                Quote Request Submitted
              </h1>
              <div aria-live="polite" className="sr-only">Your quote request has been submitted successfully.</div>
              <p className="mt-4 text-[hsl(var(--muted-foreground))]">
                Thank you for your interest. Our export team will review your request and
                respond with a detailed quotation within 24 hours.
              </p>
              <div className="mt-8 flex justify-center gap-4">
                <Button onClick={() => {
                  setSubmitted(false);
                  formRef.current?.reset();
                }}>
                  Submit Another Request
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
        <OrganizationJsonLd />
      </>
    );
  }

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
            <Badge className="mb-4">Quote</Badge>
            <h1 className="font-heading text-4xl font-bold tracking-tight text-[hsl(var(--foreground))] sm:text-5xl lg:text-6xl">
              Request a Quote
            </h1>
            <p className="mt-6 text-lg text-[hsl(var(--muted-foreground))] leading-relaxed">
              Tell us what you need and we&apos;ll provide a detailed quotation within 24 hours,
              including pricing, MOQ, lead time, and shipping options.
            </p>
          </motion.div>
        </div>
      </section>

      <Section>
        <Breadcrumbs items={[
          { label: 'Request a Quote' },
        ]} />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl"
        >
          <div className="mb-8 flex items-center gap-3 rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--muted))]/50 p-4">
            <FileText className="h-5 w-5 shrink-0 text-[hsl(var(--primary))]" />
            <p className="text-sm text-[hsl(var(--muted-foreground))]">
              All fields marked with * are required. Your information will be handled
              confidentially.
            </p>
          </div>

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Name *</Label>
                <Input id="name" name="name" required placeholder="Your full name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input id="email" name="email" type="email" required placeholder="you@company.com" />
              </div>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" name="phone" type="tel" placeholder="+1-555-0123" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company">Company</Label>
                <Input id="company" name="company" placeholder="Your company name" />
              </div>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="country">Country</Label>
                <Input id="country" name="country" placeholder="Your country" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="product">Product *</Label>
                <select
                  id="product"
                  name="product"
                  required
                  className={cn(
                    'flex h-10 w-full rounded-lg border border-[hsl(var(--input))] bg-transparent px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))] focus-visible:ring-offset-2'
                  )}
                >
                  <option value="">Select a product</option>
                  {products.map((p) => (
                    <option key={p.id} value={p.name}>
                      {p.name} ({p.botanicalName})
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="quantity">Quantity *</Label>
                <Input id="quantity" name="quantity" required placeholder="e.g., 500 kg, 1 container" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="packaging">Packaging Preference</Label>
                <Input id="packaging" name="packaging" placeholder="e.g., 25kg sacks, 10kg cartons" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="requirements">Additional Requirements</Label>
              <Textarea id="requirements" name="requirements" placeholder="Tell us about your specific requirements, quality standards, certifications needed, or any other details..." rows={4} />
            </div>
            {error && (
              <div role="alert" className="flex items-center gap-2 rounded-lg bg-red-50 p-3 text-sm text-red-700 dark:bg-red-900/20 dark:text-red-400">
                <AlertCircle aria-hidden="true" className="h-4 w-4 shrink-0" />
                {error}
              </div>
            )}
            <Button type="submit" size="lg" disabled={pending}>
              <Send aria-hidden="true" className="mr-2 h-4 w-4" />
              {pending ? 'Submitting...' : 'Submit Quote Request'}
            </Button>
          </form>
        </motion.div>
      </Section>
      <OrganizationJsonLd />
    </>
  );
}
