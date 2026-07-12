import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Himalayan Botanicals Nepal Privacy Policy — how we collect, use, and safeguard your personal information when you visit our website or use our services.',
  openGraph: {
    title: 'Privacy Policy | Himalayan Botanicals Nepal',
    description: 'Himalayan Botanicals Nepal Privacy Policy — how we collect, use, and safeguard your personal information when you visit our website or use our services.',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630, alt: 'Himalayan Botanicals Nepal' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy | Himalayan Botanicals Nepal',
    description: 'Himalayan Botanicals Nepal Privacy Policy — how we collect, use, and safeguard your personal information when you visit our website or use our services.',
    images: ['/images/og-image.jpg'],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
