import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Insights, guides, and stories from the world of Himalayan medicinal herbs — covering sustainable sourcing, botanical trade, and industry trends.',
  openGraph: {
    title: 'Blog | Himalayan Botanicals Nepal',
    description: 'Insights, guides, and stories from the world of Himalayan medicinal herbs — covering sustainable sourcing, botanical trade, and industry trends.',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630, alt: 'Himalayan Botanicals Nepal' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog | Himalayan Botanicals Nepal',
    description: 'Insights, guides, and stories from the world of Himalayan medicinal herbs — covering sustainable sourcing, botanical trade, and industry trends.',
    images: ['/images/og-image.jpg'],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
