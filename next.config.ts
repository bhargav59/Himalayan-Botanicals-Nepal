import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    deviceSizes: [640, 768, 1024, 1280, 1536],
    formats: ['image/webp'],
  },
  serverExternalPackages: ['@prisma/client', '.prisma/client', '@libsql/isomorphic-ws'],
  experimental: {
    optimizePackageImports: [
      'lucide-react',
      'framer-motion',
      '@radix-ui/react-dialog',
      '@radix-ui/react-dropdown-menu',
      '@radix-ui/react-accordion',
      '@radix-ui/react-tabs',
      '@radix-ui/react-select',
      '@radix-ui/react-navigation-menu',
    ],
  },
};

export default nextConfig;

if (process.env.NODE_ENV === 'development' && process.env.CLOUDFLARE_ENV === '1') {
  try {
    require('@opennextjs/cloudflare').initOpenNextCloudflareForDev();
  } catch {}
}
