import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description: 'Himalayan Botanicals Nepal Terms & Conditions governing all transactions — including ordering, payment, shipping, and liability for medicinal herb exports.',
  openGraph: {
    title: 'Terms & Conditions | Himalayan Botanicals Nepal',
    description: 'Himalayan Botanicals Nepal Terms & Conditions governing all transactions — including ordering, payment, shipping, and liability for medicinal herb exports.',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630, alt: 'Himalayan Botanicals Nepal' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms & Conditions | Himalayan Botanicals Nepal',
    description: 'Himalayan Botanicals Nepal Terms & Conditions governing all transactions — including ordering, payment, shipping, and liability for medicinal herb exports.',
    images: ['/images/og-image.jpg'],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
