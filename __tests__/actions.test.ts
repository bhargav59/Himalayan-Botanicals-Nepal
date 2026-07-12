import { describe, it, expect, vi, beforeEach } from 'vitest';

vi.mock('@/lib/db', () => ({
  prisma: {
    contactSubmission: {
      create: vi.fn().mockResolvedValue({ id: 'test-id' }),
    },
    quoteRequest: {
      create: vi.fn().mockResolvedValue({ id: 'test-id' }),
      findMany: vi.fn().mockResolvedValue([]),
    },
  },
}));

vi.mock('@/lib/email', () => ({
  sendContactConfirmation: vi.fn().mockResolvedValue(undefined),
  notifyNewContact: vi.fn().mockResolvedValue(undefined),
  sendQuoteConfirmation: vi.fn().mockResolvedValue(undefined),
  notifyNewQuote: vi.fn().mockResolvedValue(undefined),
}));

import { submitContact, submitQuote } from '@/lib/actions/contact';
import { submitQuote as submitQuoteAction } from '@/lib/actions/quote';

function formDataFrom(obj: Record<string, string>): FormData {
  const fd = new FormData();
  for (const [key, value] of Object.entries(obj)) {
    fd.set(key, value);
  }
  return fd;
}

describe('submitContact', () => {
  it('returns success for valid data', async () => {
    const result = await submitContact(
      formDataFrom({
        name: 'John Doe',
        email: 'john@example.com',
        message: 'I am interested in your products.',
      })
    );
    expect(result.success).toBe(true);
  });

  it('returns validation error for missing name', async () => {
    const result = await submitContact(
      formDataFrom({
        name: '',
        email: 'john@example.com',
        message: 'Hello',
      })
    );
    expect(result.success).toBe(false);
    expect(result.fields?.name).toBeDefined();
  });

  it('returns validation error for invalid email', async () => {
    const result = await submitContact(
      formDataFrom({
        name: 'John',
        email: 'not-an-email',
        message: 'Hello',
      })
    );
    expect(result.success).toBe(false);
    expect(result.fields?.email).toBeDefined();
  });
});

describe('submitQuote', () => {
  it('returns success for valid data', async () => {
    const result = await submitQuoteAction(
      formDataFrom({
        name: 'Jane Doe',
        email: 'jane@example.com',
        product: 'Ashwagandha Root',
        quantity: '500 kg',
      })
    );
    expect(result.success).toBe(true);
  });

  it('returns validation error for missing product', async () => {
    const result = await submitQuoteAction(
      formDataFrom({
        name: 'Jane',
        email: 'jane@example.com',
        product: '',
        quantity: '500 kg',
      })
    );
    expect(result.success).toBe(false);
    expect(result.fields?.product).toBeDefined();
  });
});
