'use server';

import { z } from 'zod';
import { prisma } from '@/lib/db';
import { sendContactConfirmation, notifyNewContact } from '@/lib/email';

const contactSchema = z.object({
  name: z.string().min(1, 'Name is required').max(100),
  email: z.string().email('Invalid email format'),
  phone: z.string().max(30).nullish().transform(v => v ?? ''),
  company: z.string().max(200).nullish().transform(v => v ?? ''),
  country: z.string().max(100).nullish().transform(v => v ?? ''),
  message: z.string().min(1, 'Message is required').max(5000),
});

export type ContactFormData = z.infer<typeof contactSchema>;

export interface ContactResult {
  success: boolean;
  error?: string;
  fields?: Record<string, string>;
}

export async function submitContact(formData: FormData): Promise<ContactResult> {
  const raw = {
    name: formData.get('name'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    company: formData.get('company'),
    country: formData.get('country'),
    message: formData.get('message'),
  };

  const parsed = contactSchema.safeParse(raw);

  if (!parsed.success) {
    const fields: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      fields[issue.path[0] as string] = issue.message;
    }
    return { success: false, error: 'Validation failed', fields };
  }

  try {
    const submission = await prisma.contactSubmission.create({
      data: parsed.data,
    });

    await Promise.allSettled([
      sendContactConfirmation({
        name: parsed.data.name,
        email: parsed.data.email,
        message: parsed.data.message,
      }),
      notifyNewContact({
        name: parsed.data.name,
        email: parsed.data.email,
        company: parsed.data.company ?? '',
        country: parsed.data.country ?? '',
        message: parsed.data.message,
      }),
    ]);

    console.log('[Contact] Saved:', submission.id);
    return { success: true };
  } catch (err) {
    console.error('[Contact] Error:', err);
    return { success: false, error: 'An unexpected error occurred. Please try again.' };
  }
}
