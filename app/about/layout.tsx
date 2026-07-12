import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Himalayan Botanicals Nepal — your trusted partner for premium Himalayan medicinal herbs, ethically sourced and laboratory-certified since 2010.',
  openGraph: {
    title: 'About Us | Himalayan Botanicals Nepal',
    description: 'Learn about Himalayan Botanicals Nepal — your trusted partner for premium Himalayan medicinal herbs, ethically sourced and laboratory-certified since 2010.',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630, alt: 'Himalayan Botanicals Nepal' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us | Himalayan Botanicals Nepal',
    description: 'Learn about Himalayan Botanicals Nepal — your trusted partner for premium Himalayan medicinal herbs, ethically sourced and laboratory-certified since 2010.',
    images: ['/images/og-image.jpg'],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
