import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Products',
  description: 'Browse our complete catalog of premium Himalayan medicinal herbs and natural products — from rare high-altitude resins to volume commodities, all laboratory-certified for global B2B supply.',
  openGraph: {
    title: 'Products | Himalayan Botanicals Nepal',
    description: 'Browse our complete catalog of premium Himalayan medicinal herbs and natural products — from rare high-altitude resins to volume commodities, all laboratory-certified for global B2B supply.',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630, alt: 'Himalayan Botanicals Nepal' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Products | Himalayan Botanicals Nepal',
    description: 'Browse our complete catalog of premium Himalayan medicinal herbs and natural products — from rare high-altitude resins to volume commodities, all laboratory-certified for global B2B supply.',
    images: ['/images/og-image.jpg'],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
