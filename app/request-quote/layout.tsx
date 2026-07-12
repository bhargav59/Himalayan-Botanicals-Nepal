import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Request a Quote',
  description: 'Request a detailed quotation for Himalayan medicinal herbs — receive pricing, MOQ, lead time, and shipping options within 24 hours.',
  openGraph: {
    title: 'Request a Quote | Himalayan Botanicals Nepal',
    description: 'Request a detailed quotation for Himalayan medicinal herbs — receive pricing, MOQ, lead time, and shipping options within 24 hours.',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630, alt: 'Himalayan Botanicals Nepal' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Request a Quote | Himalayan Botanicals Nepal',
    description: 'Request a detailed quotation for Himalayan medicinal herbs — receive pricing, MOQ, lead time, and shipping options within 24 hours.',
    images: ['/images/og-image.jpg'],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
