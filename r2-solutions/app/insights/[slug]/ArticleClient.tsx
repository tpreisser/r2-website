'use client';

import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { getArticleBySlug, categories } from '@/lib/articles';
import type { ContentBlock } from '@/lib/articles';
import { Button } from '@/components/ui/Button';

export default function ArticleClient({ slug }: { slug: string }) {
  const article = getArticleBySlug(slug);

  if (!article) {
    return (
      <div style={{ padding: '100px 48px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2rem', color: '#111827', marginBottom: 16 }}>Article Not Found</h1>
        <p style={{ color: '#6b7280', marginBottom: 32 }}>The article you're looking for doesn't exist.</p>
        <Button asChild variant="primary">
          <Link href="/insights">View All Insights</Link>
        </Button>
      </div>
    );
  }

  const category = categories.find((c) => c.id === article.category);

  return (
    <div style={{ background: '#fff', minHeight: '100vh' }}>
      {/* Hero Header with Article Image */}
      <section
        style={{
          position: 'relative',
          minHeight: '60vh',
          display: 'flex',
          alignItems: 'flex-end',
          padding: '140px 48px 80px',
          background: article.gradient || 'linear-gradient(135deg, #025082, #0369a1)',
          backgroundImage: article.image
            ? `linear-gradient(140deg, rgba(0,0,0,0.6), rgba(0,0,0,0.4)), url(${article.image})`
            : undefined,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Container size="lg" className="max-w-4xl mx-auto" style={{ width: '100%' }}>
          <AnimatedSection>
            {/* Category Badge */}
            <div style={{ marginBottom: 20 }}>
              <Link
                href={`/insights?category=${article.category}`}
                style={{
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  color: '#fff',
                  textDecoration: 'none',
                  opacity: 0.9,
                }}
              >
                {category?.label || article.category}
              </Link>
            </div>

            {/* Title */}
            <h1
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                fontWeight: 500,
                color: '#fff',
                lineHeight: 1.15,
                marginBottom: 24,
                fontFamily: "'R2Font', var(--font-inter), serif",
                textShadow: '0 2px 20px rgba(0,0,0,0.3)',
              }}
            >
              {article.title}
            </h1>

            {/* Excerpt */}
            <p
              style={{
                fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
                color: 'rgba(255,255,255,0.95)',
                lineHeight: 1.6,
                marginBottom: 32,
                textShadow: '0 1px 10px rgba(0,0,0,0.2)',
              }}
            >
              {article.excerpt}
            </p>

            {/* Meta Info */}
            <div
              style={{
                display: 'flex',
                gap: 24,
                flexWrap: 'wrap',
                alignItems: 'center',
                fontSize: '0.95rem',
                color: 'rgba(255,255,255,0.9)',
              }}
            >
              <div>
                <div style={{ fontWeight: 600, marginBottom: 4 }}>{article.author}</div>
                <div style={{ opacity: 0.8, fontSize: '0.9rem' }}>{article.authorRole}</div>
              </div>
              <div style={{ opacity: 0.8 }}>{article.publishedDate}</div>
              {article.readTime && <div style={{ opacity: 0.8 }}>{article.readTime} min read</div>}
            </div>
          </AnimatedSection>
        </Container>
      </section>

      {/* Article Content */}
      <section style={{ padding: '80px 48px' }}>
        <Container size="md" className="max-w-3xl mx-auto">
          <AnimatedSection>
            <ArticleContent contentBlocks={article.contentBlocks} tags={article.tags} />
          </AnimatedSection>
        </Container>
      </section>

      {/* Related Articles / CTA */}
      <section style={{ padding: '80px 48px', background: '#f9fafb' }}>
        <Container size="lg" className="max-w-4xl mx-auto">
          <AnimatedSection>
            <div style={{ textAlign: 'center' }}>
              <h2
                style={{
                  fontSize: 'clamp(2rem, 4vw, 2.5rem)',
                  fontWeight: 500,
                  color: '#111827',
                  marginBottom: 16,
                  fontFamily: "'R2Font', var(--font-inter), serif",
                }}
              >
                Ready to See AI in Action?
              </h2>
              <p
                style={{
                  fontSize: '1.2rem',
                  color: '#6b7280',
                  marginBottom: 32,
                  lineHeight: 1.6,
                }}
              >
                Book a workshop and see working AI agents solving your challenge in 48 hours.
              </p>
              <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
                <Button asChild size="lg" variant="primary">
                  <Link href="/workshop">Book Workshop</Link>
                </Button>
                <Button asChild size="lg" variant="secondary">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </Container>
      </section>
    </div>
  );
}

function ArticleContent({ contentBlocks, tags }: { contentBlocks?: ContentBlock[]; tags: string[] }) {
  const blocks = contentBlocks ?? [];

  return (
    <div
      style={{
        fontSize: '1.15rem',
        lineHeight: 1.8,
        color: '#374151',
        fontFamily: 'var(--font-inter), sans-serif',
        display: 'flex',
        flexDirection: 'column',
        gap: 20,
      }}
    >
      {blocks.map((block, idx) => {
        if (block.type === 'heading') {
          return (
            <h2
              key={idx}
              style={{
                fontSize: '1.6rem',
                fontWeight: 600,
                color: '#111827',
                marginTop: 12,
                fontFamily: "'R2Font', var(--font-inter), serif",
              }}
            >
              {block.text}
            </h2>
          );
        }

        if (block.type === 'subheading') {
          return (
            <h3
              key={idx}
              style={{
                fontSize: '1.3rem',
                fontWeight: 600,
                color: '#111827',
                fontFamily: "'R2Font', var(--font-inter), serif",
              }}
            >
              {block.text}
            </h3>
          );
        }

        if (block.type === 'paragraph') {
          return (
            <p key={idx} style={{ margin: 0 }}>
              {block.text}
            </p>
          );
        }

        if (block.type === 'list') {
          return (
            <div key={idx} style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {block.title && (
                <div
                  style={{
                    fontWeight: 600,
                    color: '#111827',
                    fontFamily: "'R2Font', var(--font-inter), serif",
                  }}
                >
                  {block.title}
                </div>
              )}
              <ul style={{ paddingLeft: 20, margin: 0, display: 'grid', gap: 8 }}>
                {block.items.map((item, i) => (
                  <li key={i} style={{ color: '#374151', lineHeight: 1.7 }}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          );
        }

        if (block.type === 'quote') {
          return (
            <blockquote
              key={idx}
              style={{
                margin: 0,
                padding: '16px 20px',
                borderLeft: '4px solid #025082',
                background: '#f3f4f6',
                color: '#1f2937',
                fontStyle: 'italic',
              }}
            >
              {block.text}
            </blockquote>
          );
        }

        return null;
      })}

      {/* Tags */}
      {tags.length > 0 && (
        <div style={{ marginTop: 32, paddingTop: 24, borderTop: '1px solid #e5e7eb' }}>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            {tags.map((tag) => (
              <span
                key={tag}
                style={{
                  padding: '6px 16px',
                  borderRadius: '20px',
                  background: '#f3f4f6',
                  color: '#025082',
                  fontSize: '0.85rem',
                  fontWeight: 500,
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
