'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, User } from 'lucide-react';
import type { BlogPost } from '@/lib/data';
import { Section } from '@/components/ui/section';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { OrganizationJsonLd, BlogPostJsonLd } from '@/components/ui/json-ld';
import { Separator } from '@/components/ui/separator';

interface Props {
  post: BlogPost;
}

export function BlogPostClient({ post }: Props) {
  const paragraphs = post.content.split('\n');

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-[hsl(var(--primary))]/5 to-transparent pb-16 pt-24 md:pb-24 md:pt-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl"
          >
            <Button asChild variant="ghost" className="mb-6 -ml-3">
              <Link href="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Link>
            </Button>
            <Badge className="mb-4">{post.category}</Badge>
            <h1 className="font-heading text-4xl font-bold tracking-tight text-[hsl(var(--foreground))] sm:text-5xl">
              {post.title}
            </h1>
            <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-[hsl(var(--muted-foreground))]">
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </span>
              <span className="flex items-center gap-1">
                <User className="h-4 w-4" />
                {post.author}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      <Section>
        <Breadcrumbs items={[
          { label: 'Blog', href: '/blog' },
          { label: post.title },
        ]} />
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl"
        >
          <div className="mb-8 flex h-64 items-center justify-center rounded-2xl bg-gradient-to-br from-[hsl(var(--primary))]/20 to-[hsl(var(--primary))]/5 sm:h-80">
            <span className="px-8 text-center font-heading text-2xl font-bold text-[hsl(var(--foreground))]">
              {post.title}
            </span>
          </div>

          <div className="space-y-5 leading-relaxed text-[hsl(var(--muted-foreground))]">
            {paragraphs.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>

          <Separator className="my-8" />

          <div className="flex flex-wrap items-center gap-2">
            <span className="text-sm font-medium text-[hsl(var(--foreground))]">Tags:</span>
            {post.tags.map((tag) => (
              <Badge key={tag} variant="outline">
                {tag}
              </Badge>
            ))}
          </div>

          <div className="mt-12">
            <Button asChild variant="outline">
              <Link href="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Link>
            </Button>
          </div>
        </motion.article>
      </Section>
      <OrganizationJsonLd />
      <BlogPostJsonLd post={post} />
    </>
  );
}
