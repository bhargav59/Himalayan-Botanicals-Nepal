'use client';

import Link from 'next/link';
import { ArrowRight, Calendar } from 'lucide-react';
import { Section, SectionHeader } from '@/components/ui/section';
import { AnimatedCard } from '@/components/ui/animated-card';
import { Badge } from '@/components/ui/badge';
import { blogPosts } from '@/lib/data';

export function BlogSection() {
  const posts = blogPosts.slice(0, 3);

  return (
    <Section id="latest-articles" dark>
      <SectionHeader
        title="Latest Articles"
        subtitle="Insights on Himalayan botanicals, quality standards, sustainable sourcing, and industry trends from our team."
        centered
      />
      <div className="grid gap-8 md:grid-cols-3">
        {posts.map((post, index) => (
          <AnimatedCard key={post.id} index={index} className="flex flex-col">
            <div className="relative mb-4 aspect-[16/9] overflow-hidden rounded-lg bg-gradient-to-br from-[hsl(var(--primary))]/20 to-[hsl(var(--primary))]/5">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-heading text-6xl font-bold text-[hsl(var(--primary))]/20">
                  {post.title.charAt(0)}
                </span>
              </div>
            </div>
            <div className="mb-3 flex items-center gap-3">
              <Badge variant="secondary">{post.category}</Badge>
              <span className="flex items-center text-xs text-[hsl(var(--muted-foreground))]">
                <Calendar className="mr-1 h-3 w-3" />
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric',
                })}
              </span>
            </div>
            <h3 className="font-heading text-xl font-semibold text-[hsl(var(--foreground))]">
              {post.title}
            </h3>
            <p className="mt-2 flex-1 text-sm text-[hsl(var(--muted-foreground))] leading-relaxed">
              {post.excerpt}
            </p>
            <div className="mt-4 pt-4">
              <Link
                href={`/blog/${post.slug}`}
                className="inline-flex items-center text-sm font-medium text-[hsl(var(--primary))] hover:underline"
              >
                Read Article
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </AnimatedCard>
        ))}
      </div>
      <div className="mt-12 text-center">
        <Link
          href="/blog"
          className="inline-flex items-center font-medium text-[hsl(var(--primary))] hover:underline"
        >
          View All Articles
          <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </div>
    </Section>
  );
}
