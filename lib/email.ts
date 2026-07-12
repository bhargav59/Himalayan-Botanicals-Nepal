import { Resend } from 'resend';

const resendApiKey = process.env.RESEND_API_KEY;

function getResend(): Resend | null {
  if (!resendApiKey || resendApiKey.startsWith('re_placeholder')) return null;
  return new Resend(resendApiKey);
}

const FROM = 'Himalayan Botanicals <noreply@himalayanbotanicals.com.np>';
const NOTIFY = 'info@himalayanbotanicals.com.np';

export async function sendContactConfirmation(data: {
  name: string;
  email: string;
  message: string;
}) {
  const resend = getResend();
  if (!resend) {
    console.log('[Email] Skipping (no API key). Would send contact confirmation to', data.email);
    return;
  }

  await resend.emails.send({
    from: FROM,
    to: data.email,
    subject: 'Thank you for contacting Himalayan Botanicals Nepal',
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
        <h1 style="color: #2d5e2d;">Thank you, ${data.name}!</h1>
        <p>We have received your message and our team will respond within 24 hours.</p>
        <hr style="border: none; border-top: 1px solid #e2e6ea;" />
        <p style="color: #64707d; font-size: 14px;">
          <strong>Your message:</strong><br />
          ${data.message}
        </p>
        <hr style="border: none; border-top: 1px solid #e2e6ea;" />
        <p style="color: #64707d; font-size: 12px;">
          Himalayan Botanicals Nepal &middot; Kathmandu, Nepal<br />
          <a href="https://himalayanbotanicals.com.np">himalayanbotanicals.com.np</a>
        </p>
      </div>
    `,
  });
}

export async function sendQuoteConfirmation(data: {
  name: string;
  email: string;
  product: string;
  quantity: string;
}) {
  const resend = getResend();
  if (!resend) {
    console.log('[Email] Skipping (no API key). Would send quote confirmation to', data.email);
    return;
  }

  await resend.emails.send({
    from: FROM,
    to: data.email,
    subject: 'Quote Request Received — Himalayan Botanicals Nepal',
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
        <h1 style="color: #2d5e2d;">Quote Request Received</h1>
        <p>Dear ${data.name},</p>
        <p>Thank you for your interest in <strong>${data.product}</strong> (Quantity: ${data.quantity}).</p>
        <p>Our export team will review your request and respond with a detailed quotation within 24 hours.</p>
        <hr style="border: none; border-top: 1px solid #e2e6ea;" />
        <p style="color: #64707d; font-size: 12px;">
          Himalayan Botanicals Nepal &middot; Kathmandu, Nepal<br />
          <a href="https://himalayanbotanicals.com.np">himalayanbotanicals.com.np</a>
        </p>
      </div>
    `,
  });
}

export async function notifyNewContact(data: {
  name: string;
  email: string;
  company: string;
  country: string;
  message: string;
}) {
  const resend = getResend();
  if (!resend) {
    console.log('[Email] Skipping (no API key). Would notify team about contact from', data.name);
    return;
  }

  await resend.emails.send({
    from: FROM,
    to: NOTIFY,
    subject: `New Contact: ${data.name} (${data.company || 'No company'})`,
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #2d5e2d;">New Contact Form Submission</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding: 8px; font-weight: bold;">Name</td><td style="padding: 8px;">${data.name}</td></tr>
          <tr style="background: #f8f9fa;"><td style="padding: 8px; font-weight: bold;">Email</td><td style="padding: 8px;">${data.email}</td></tr>
          <tr><td style="padding: 8px; font-weight: bold;">Company</td><td style="padding: 8px;">${data.company || '—'}</td></tr>
          <tr style="background: #f8f9fa;"><td style="padding: 8px; font-weight: bold;">Country</td><td style="padding: 8px;">${data.country || '—'}</td></tr>
          <tr><td style="padding: 8px; font-weight: bold;">Message</td><td style="padding: 8px;">${data.message}</td></tr>
        </table>
        <p style="color: #64707d; font-size: 12px; margin-top: 16px;">
          <a href="${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3001'}/admin">View in Admin Dashboard</a>
        </p>
      </div>
    `,
  });
}

export async function notifyNewQuote(data: {
  name: string;
  email: string;
  company: string;
  product: string;
  quantity: string;
}) {
  const resend = getResend();
  if (!resend) {
    console.log('[Email] Skipping (no API key). Would notify team about quote from', data.name);
    return;
  }

  await resend.emails.send({
    from: FROM,
    to: NOTIFY,
    subject: `New Quote: ${data.product} — ${data.name} (${data.company || 'No company'})`,
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #2d5e2d;">New Quote Request</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding: 8px; font-weight: bold;">Name</td><td style="padding: 8px;">${data.name}</td></tr>
          <tr style="background: #f8f9fa;"><td style="padding: 8px; font-weight: bold;">Email</td><td style="padding: 8px;">${data.email}</td></tr>
          <tr><td style="padding: 8px; font-weight: bold;">Company</td><td style="padding: 8px;">${data.company || '—'}</td></tr>
          <tr style="background: #f8f9fa;"><td style="padding: 8px; font-weight: bold;">Product</td><td style="padding: 8px;">${data.product}</td></tr>
          <tr><td style="padding: 8px; font-weight: bold;">Quantity</td><td style="padding: 8px;">${data.quantity}</td></tr>
        </table>
        <p style="color: #64707d; font-size: 12px; margin-top: 16px;">
          <a href="${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3001'}/admin">View in Admin Dashboard</a>
        </p>
      </div>
    `,
  });
}
