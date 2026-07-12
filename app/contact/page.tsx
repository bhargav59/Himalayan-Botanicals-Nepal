'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { Section } from '@/components/ui/section';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { OrganizationJsonLd } from '@/components/ui/json-ld';
import { submitContact } from '@/lib/actions/contact';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [pending, setPending] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setPending(true);
    setError('');
    const form = e.currentTarget;
    const result = await submitContact(new FormData(form));
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
                Message Sent Successfully
              </h1>
              <div aria-live="polite" className="sr-only">Your message has been submitted successfully.</div>
              <p className="mt-4 text-[hsl(var(--muted-foreground))]">
                Thank you for reaching out. Our team will respond within 24 hours.
              </p>
              <Button className="mt-8" onClick={() => { setSubmitted(false); formRef.current?.reset(); }}>
                Send Another Message
              </Button>
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
            <Badge className="mb-4">Contact</Badge>
            <h1 className="font-heading text-4xl font-bold tracking-tight text-[hsl(var(--foreground))] sm:text-5xl lg:text-6xl">
              Contact Us
            </h1>
            <p className="mt-6 text-lg text-[hsl(var(--muted-foreground))] leading-relaxed">
              Ready to source premium Himalayan botanicals? Get in touch with our export team.
            </p>
          </motion.div>
        </div>
      </section>

      <Section>
        <Breadcrumbs items={[
          { label: 'Contact' },
        ]} />
        <div className="grid gap-12 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <h2 className="font-heading text-2xl font-bold text-[hsl(var(--foreground))]">
              Send Us a Message
            </h2>
            <form ref={formRef} onSubmit={handleSubmit} className="mt-6 space-y-5">
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
              <div className="space-y-2">
                <Label htmlFor="country">Country</Label>
                <Input id="country" name="country" placeholder="Your country" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message *</Label>
                <Textarea id="message" name="message" required placeholder="Tell us about your requirements..." rows={5} />
              </div>
              {error && (
                <div role="alert" className="flex items-center gap-2 rounded-lg bg-red-50 p-3 text-sm text-red-700 dark:bg-red-900/20 dark:text-red-400">
                  <AlertCircle aria-hidden="true" className="h-4 w-4 shrink-0" />
                  {error}
                </div>
              )}
              <Button type="submit" size="lg" disabled={pending}>
                <Send aria-hidden="true" className="mr-2 h-4 w-4" />
                {pending ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-2"
          >
            <h2 className="font-heading text-2xl font-bold text-[hsl(var(--foreground))]">
              Contact Information
            </h2>
            <div className="mt-6 space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-[hsl(var(--primary))]" />
                <div>
                  <p className="font-medium text-[hsl(var(--foreground))]">Head Office</p>
                  <p className="mt-1 text-sm text-[hsl(var(--muted-foreground))]">
                    Kathmandu, Nepal
                    <br />
                    Tokha Road, Ward No. 9
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="mt-1 h-5 w-5 shrink-0 text-[hsl(var(--primary))]" />
                <div>
                  <p className="font-medium text-[hsl(var(--foreground))]">Email</p>
                  <p className="mt-1 text-sm text-[hsl(var(--muted-foreground))]">
                    info@himalayanbotanicals.com.np
                    <br />
                    sales@himalayanbotanicals.com.np
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="mt-1 h-5 w-5 shrink-0 text-[hsl(var(--primary))]" />
                <div>
                  <p className="font-medium text-[hsl(var(--foreground))]">Phone</p>
                  <p className="mt-1 text-sm text-[hsl(var(--muted-foreground))]">
                    +977-1-4XXXXXX
                    <br />
                    +977-985XXXXXXXX
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="mt-1 h-5 w-5 shrink-0 text-[hsl(var(--primary))]" />
                <div>
                  <p className="font-medium text-[hsl(var(--foreground))]">Working Hours</p>
                  <p className="mt-1 text-sm text-[hsl(var(--muted-foreground))]">
                    Sunday – Friday: 9:00 AM – 5:00 PM (NPT)
                    <br />
                    Saturday: Closed
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 overflow-hidden rounded-xl border border-[hsl(var(--border))]">
              <div className="flex h-48 items-center justify-center bg-[hsl(var(--muted))]">
                <div className="text-center">
                  <MapPin className="mx-auto h-8 w-8 text-[hsl(var(--muted-foreground))]" />
                  <p className="mt-2 text-sm text-[hsl(var(--muted-foreground))]">
                    Map: Kathmandu, Nepal
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>
      <OrganizationJsonLd />
    </>
  );
}
