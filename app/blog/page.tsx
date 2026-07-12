'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';
import { blogPosts } from '@/lib/data';
import { Section, SectionHeader } from '@/components/ui/section';
import { AnimatedCard } from '@/components/ui/animated-card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { OrganizationJsonLd } from '@/components/ui/json-ld';

export default function BlogPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-[hsl(var(--primary))]/5 to-transparent pb-16 pt-24 md:pb-24 md:pt-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl text-center"
          >
            <Badge className="mb-4">Blog</Badge>
            <h1 className="font-heading text-4xl font-bold tracking-tight text-[hsl(var(--foreground))] sm:text-5xl lg:text-6xl">
              Blog
            </h1>
            <p className="mt-6 text-lg text-[hsl(var(--muted-foreground))] leading-relaxed">
              Insights, guides, and stories from the world of Himalayan medicinal herbs,
              sustainable sourcing, and global botanical trade.
            </p>
          </motion.div>
        </div>
      </section>

      <Section>
        <Breadcrumbs items={[
          { label: 'Blog' },
        ]} />
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, i) => (
            <AnimatedCard key={post.id} index={i} className="flex flex-col">
              <div className="mb-4 flex h-48 items-center justify-center rounded-lg bg-gradient-to-br from-[hsl(var(--primary))]/20 to-[hsl(var(--primary))]/5">
                <span className="px-4 text-center font-heading text-lg font-bold text-[hsl(var(--foreground))]">
                  {post.title}
                </span>
              </div>
              <div className="mb-3 flex items-center gap-2">
                <Badge variant="secondary">{post.category}</Badge>
                <span className="flex items-center gap-1 text-xs text-[hsl(var(--muted-foreground))]">
                  <Calendar className="h-3 w-3" />
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </span>
              </div>
              <h3 className="font-heading text-lg font-semibold text-[hsl(var(--foreground))]">
                <Link href={`/blog/${post.slug}`} className="hover:text-[hsl(var(--primary))] transition-colors">
                  {post.title}
                </Link>
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[hsl(var(--muted-foreground))] line-clamp-3">
                {post.excerpt}
              </p>
              <div className="mt-auto pt-4">
                <Button asChild variant="link" className="px-0">
                  <Link href={`/blog/${post.slug}`}>
                    Read More <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </Section>
      <OrganizationJsonLd />
    </>
  );
}
