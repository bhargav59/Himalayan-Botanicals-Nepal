'use server';

import { z } from 'zod';
import { prisma } from '@/lib/db';
import { sendQuoteConfirmation, notifyNewQuote } from '@/lib/email';

const quoteSchema = z.object({
  name: z.string().min(1, 'Name is required').max(100),
  email: z.string().email('Invalid email format'),
  phone: z.string().max(30).optional().default(''),
  company: z.string().max(200).optional().default(''),
  country: z.string().max(100).optional().default(''),
  product: z.string().min(1, 'Please select a product'),
  quantity: z.string().min(1, 'Quantity is required').max(200),
  packaging: z.string().max(200).optional().default(''),
  requirements: z.string().max(5000).optional().default(''),
});

export type QuoteFormData = z.infer<typeof quoteSchema>;

export interface QuoteResult {
  success: boolean;
  error?: string;
  fields?: Record<string, string>;
}

export async function submitQuote(formData: FormData): Promise<QuoteResult> {
  const raw = {
    name: formData.get('name'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    company: formData.get('company'),
    country: formData.get('country'),
    product: formData.get('product'),
    quantity: formData.get('quantity'),
    packaging: formData.get('packaging'),
    requirements: formData.get('requirements'),
  };

  const parsed = quoteSchema.safeParse(raw);

  if (!parsed.success) {
    const fields: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      fields[issue.path[0] as string] = issue.message;
    }
    return { success: false, error: 'Validation failed', fields };
  }

  try {
    const submission = await prisma.quoteRequest.create({
      data: parsed.data,
    });

    await Promise.allSettled([
      sendQuoteConfirmation({
        name: parsed.data.name,
        email: parsed.data.email,
        product: parsed.data.product,
        quantity: parsed.data.quantity,
      }),
      notifyNewQuote({
        name: parsed.data.name,
        email: parsed.data.email,
        company: parsed.data.company,
        product: parsed.data.product,
        quantity: parsed.data.quantity,
      }),
    ]);

    console.log('[Quote] Saved:', submission.id);
    return { success: true };
  } catch (err) {
    console.error('[Quote] Error:', err);
    return { success: false, error: 'An unexpected error occurred. Please try again.' };
  }
}

export async function getQuoteRequests(): Promise<QuoteResult & { data?: Array<Record<string, unknown>> }> {
  try {
    const quotes = await prisma.quoteRequest.findMany({
      orderBy: { createdAt: 'desc' },
    });
    return { success: true, data: quotes as unknown as Array<Record<string, unknown>> };
  } catch (err) {
    console.error('[Quote] List Error:', err);
    return { success: false, error: 'Failed to fetch quote requests.' };
  }
}

export async function updateQuoteStatus(id: string, status: string): Promise<QuoteResult> {
  try {
    await prisma.quoteRequest.update({
      where: { id },
      data: { status: status as never },
    });
    return { success: true };
  } catch (err) {
    console.error('[Quote] Update Error:', err);
    return { success: false, error: 'Failed to update quote status.' };
  }
}
