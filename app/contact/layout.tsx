import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Himalayan Botanicals Nepal — our export team responds within 24 hours with pricing, product information, and sourcing support.',
  openGraph: {
    title: 'Contact Us | Himalayan Botanicals Nepal',
    description: 'Get in touch with Himalayan Botanicals Nepal — our export team responds within 24 hours with pricing, product information, and sourcing support.',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630, alt: 'Himalayan Botanicals Nepal' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us | Himalayan Botanicals Nepal',
    description: 'Get in touch with Himalayan Botanicals Nepal — our export team responds within 24 hours with pricing, product information, and sourcing support.',
    images: ['/images/og-image.jpg'],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
