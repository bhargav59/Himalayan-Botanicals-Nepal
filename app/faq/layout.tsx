import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions',
  description: 'Find answers to common questions about sourcing Himalayan herbs from Nepal — including quality, pricing, shipping, MOQs, and export documentation.',
  openGraph: {
    title: 'Frequently Asked Questions | Himalayan Botanicals Nepal',
    description: 'Find answers to common questions about sourcing Himalayan herbs from Nepal — including quality, pricing, shipping, MOQs, and export documentation.',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630, alt: 'Himalayan Botanicals Nepal' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Frequently Asked Questions | Himalayan Botanicals Nepal',
    description: 'Find answers to common questions about sourcing Himalayan herbs from Nepal — including quality, pricing, shipping, MOQs, and export documentation.',
    images: ['/images/og-image.jpg'],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
