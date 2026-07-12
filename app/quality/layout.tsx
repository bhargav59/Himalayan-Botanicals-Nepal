import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Quality & Certifications',
  description: 'Every shipment is backed by rigorous third-party laboratory testing, full batch traceability, and international quality standards including ICP-MS, HPLC, and microbiological analysis.',
  openGraph: {
    title: 'Quality & Certifications | Himalayan Botanicals Nepal',
    description: 'Every shipment is backed by rigorous third-party laboratory testing, full batch traceability, and international quality standards including ICP-MS, HPLC, and microbiological analysis.',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630, alt: 'Himalayan Botanicals Nepal' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Quality & Certifications | Himalayan Botanicals Nepal',
    description: 'Every shipment is backed by rigorous third-party laboratory testing, full batch traceability, and international quality standards including ICP-MS, HPLC, and microbiological analysis.',
    images: ['/images/og-image.jpg'],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
