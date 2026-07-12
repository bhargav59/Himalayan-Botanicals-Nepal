import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import { Providers } from './providers';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { OrganizationJsonLd } from '@/components/ui/json-ld';
import { AnalyticsScript } from '@/lib/analytics';
import '@/styles/globals.css';

const fontHeading = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
});

const fontBody = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Himalayan Botanicals Nepal | Premium Medicinal Herb Exporter',
    template: '%s | Himalayan Botanicals Nepal',
  },
  description:
    'Premium exporter of Himalayan medicinal herbs, Shilajit, Ashwagandha, Tulsi, Brahmi, and natural products from Nepal. B2B bulk supply to USA, EU, Japan, and global markets.',
  keywords: [
    'Himalayan Shilajit supplier',
    'Nepal herb exporter',
    'bulk Ayurvedic herbs',
    'organic medicinal herbs',
    'wholesale herbal ingredients',
    'Nepalese botanical exporter',
    'natural products Nepal',
  ],
  metadataBase: new URL('https://himalayanbotanicals.com.np'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Himalayan Botanicals Nepal',
    title: 'Himalayan Botanicals Nepal | Premium Medicinal Herb Exporter',
    description:
      'Premium exporter of Himalayan medicinal herbs and natural products from Nepal. B2B bulk supply worldwide.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Himalayan Botanicals Nepal',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Himalayan Botanicals Nepal',
    description:
      'Premium exporter of Himalayan medicinal herbs and natural products from Nepal.',
    images: ['/images/og-image.jpg'],
  },
  icons: {
    icon: '/favicon.svg',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${fontHeading.variable} ${fontBody.variable}`} suppressHydrationWarning>
        <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-[hsl(var(--background))] focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-[hsl(var(--foreground))] focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-[hsl(var(--ring))]">
          Skip to content
        </a>
        <link rel="preload" href="/hero-bg.jpg" as="image" />
        <script dangerouslySetInnerHTML={{
          __html: `(function(){function c(){var k=['bis_skin_checked','bis_register','__processed','myClientId'];k.forEach(function(p){document.querySelectorAll('['+p+'],[id^="'+p+'"]').forEach(function(e){e.removeAttribute(p);if(p==='myClientId')e.removeAttribute('id');})});}c();var o=new MutationObserver(c);o.observe(document.documentElement,{attributes:true,subtree:true,attributeFilter:['bis_skin_checked','bis_register','__processed','myClientId']});})();`,
        }} />
        <OrganizationJsonLd />
        <Providers>
          <Navbar />
          <main id="main-content" className="min-h-screen">{children}</main>
          <Footer />
        </Providers>
        <AnalyticsScript />
      </body>
    </html>
  );
}
