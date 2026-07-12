import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Packaging',
  description: 'Explore our flexible packaging solutions for Himalayan herbs — from bulk export sacks and vacuum-sealed bags to private label and OEM packaging with custom branding.',
  openGraph: {
    title: 'Packaging | Himalayan Botanicals Nepal',
    description: 'Explore our flexible packaging solutions for Himalayan herbs — from bulk export sacks and vacuum-sealed bags to private label and OEM packaging with custom branding.',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630, alt: 'Himalayan Botanicals Nepal' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Packaging | Himalayan Botanicals Nepal',
    description: 'Explore our flexible packaging solutions for Himalayan herbs — from bulk export sacks and vacuum-sealed bags to private label and OEM packaging with custom branding.',
    images: ['/images/og-image.jpg'],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
