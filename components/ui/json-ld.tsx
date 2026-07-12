import { products } from '@/lib/data';

export function OrganizationJsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Himalayan Botanicals Nepal',
    url: 'https://himalayanbotanicals.com.np',
    logo: 'https://himalayanbotanicals.com.np/favicon.svg',
    description: 'Premium exporter of Himalayan medicinal herbs and natural products from Nepal.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Kathmandu',
      addressCountry: 'NP',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+977-1-4XXXXXX',
      contactType: 'sales',
      email: 'info@himalayanbotanicals.com.np',
    },
    sameAs: [],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

export function ProductJsonLd({ product }: { product: typeof products[0] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    sku: product.slug,
    category: product.category,
    brand: {
      '@type': 'Brand',
      name: 'Himalayan Botanicals Nepal',
    },
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'USD',
      price: '0',
      description: `MOQ: ${product.moq}`,
    },
    additionalProperty: [
      { '@type': 'PropertyValue', name: 'Botanical Name', value: product.botanicalName },
      { '@type': 'PropertyValue', name: 'Origin', value: product.origin },
      { '@type': 'PropertyValue', name: 'Purity', value: product.purity },
      { '@type': 'PropertyValue', name: 'Shelf Life', value: product.shelfLife },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

export function BlogPostJsonLd({ post }: { post: { title: string; excerpt: string; slug: string; date: string; author: string; image: string } }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    url: `https://himalayanbotanicals.com.np/blog/${post.slug}`,
    datePublished: post.date,
    author: {
      '@type': 'Person',
      name: post.author,
    },
    image: `https://himalayanbotanicals.com.np${post.image}`,
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}
