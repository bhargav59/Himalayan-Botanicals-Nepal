import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Export Process',
  description: 'A transparent end-to-end export process for Himalayan medicinal herbs — from inquiry and sampling to quality testing, documentation, and global shipping.',
  openGraph: {
    title: 'Export Process | Himalayan Botanicals Nepal',
    description: 'A transparent end-to-end export process for Himalayan medicinal herbs — from inquiry and sampling to quality testing, documentation, and global shipping.',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630, alt: 'Himalayan Botanicals Nepal' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Export Process | Himalayan Botanicals Nepal',
    description: 'A transparent end-to-end export process for Himalayan medicinal herbs — from inquiry and sampling to quality testing, documentation, and global shipping.',
    images: ['/images/og-image.jpg'],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
