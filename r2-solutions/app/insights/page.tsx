'use client';

import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Card } from '@/components/ui/Card';
import { articles, categories, getArticlesByCategory, type Article } from '@/lib/articles';
import { useState } from 'react';

export default function InsightsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const filteredArticles = getArticlesByCategory(selectedCategory);

  return (
    <div style={{ background: '#fff', minHeight: '100vh' }}>
      {/* Hero Section */}
      <section
        style={{
          padding: '140px 48px 80px',
          background: 'linear-gradient(180deg, #e8f4fc 0%, #f0f9ff 40%, #ffffff 100%)',
        }}
      >
        <Container size="xl" className="max-w-6xl mx-auto">
          <AnimatedSection>
            <h1
              style={{
                fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                fontWeight: 500,
                color: '#025082',
                lineHeight: 1.1,
                marginBottom: 24,
                textAlign: 'center',
                fontFamily: "'R2Font', var(--font-inter), serif",
              }}
            >
              Insights & Research
            </h1>
            <p
              style={{
                fontSize: 'clamp(1.1rem, 2vw, 1.5rem)',
                color: '#6b7280',
                textAlign: 'center',
                maxWidth: '800px',
                margin: '0 auto',
                lineHeight: 1.6,
              }}
            >
              Our perspectives on AI strategy, industry-specific applications, and the future of business automation.
            </p>
          </AnimatedSection>
        </Container>
      </section>

      {/* Category Filter */}
      <section style={{ padding: '40px 48px', background: '#fff', borderBottom: '1px solid #e5e7eb' }}>
        <Container size="xl" className="max-w-6xl mx-auto">
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center' }}>
            <button
              onClick={() => setSelectedCategory('all')}
              style={{
                padding: '10px 24px',
                borderRadius: '24px',
                border: selectedCategory === 'all' ? '2px solid #025082' : '2px solid #e5e7eb',
                background: selectedCategory === 'all' ? '#025082' : '#fff',
                color: selectedCategory === 'all' ? '#fff' : '#6b7280',
                fontWeight: 500,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                fontSize: '0.9rem',
              }}
            >
              All
            </button>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                style={{
                  padding: '10px 24px',
                  borderRadius: '24px',
                  border: selectedCategory === category.id ? '2px solid #025082' : '2px solid #e5e7eb',
                  background: selectedCategory === category.id ? '#025082' : '#fff',
                  color: selectedCategory === category.id ? '#fff' : '#6b7280',
                  fontWeight: 500,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  fontSize: '0.9rem',
                }}
              >
                {category.label}
              </button>
            ))}
          </div>
        </Container>
      </section>

      {/* Featured Articles Grid */}
      <section style={{ padding: '80px 48px' }}>
        <Container size="xl" className="max-w-6xl mx-auto">
          {filteredArticles.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '60px 0' }}>
              <p style={{ fontSize: '1.2rem', color: '#6b7280' }}>No articles found in this category.</p>
            </div>
          ) : (
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
                gap: 32,
              }}
            >
              {filteredArticles.map((article, index) => (
                <AnimatedSection key={article.id} delay={index * 0.05}>
                  <Link href={`/insights/${article.slug}`} style={{ textDecoration: 'none' }}>
                    <Card variant="hover" padding="lg" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                      {/* Article Image/Thumbnail */}
                      {article.image && (
                        <div
                          style={{
                            width: '100%',
                            height: '200px',
                            borderRadius: '12px',
                            marginBottom: 20,
                            overflow: 'hidden',
                            background: article.gradient || 'linear-gradient(135deg, #025082, #0369a1)',
                            backgroundImage: article.image
                              ? `linear-gradient(140deg, rgba(0,0,0,0.4), rgba(0,0,0,0.2)), url(${article.image})`
                              : undefined,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                          }}
                        />
                      )}

                      {/* Category Badge */}
                      <div style={{ marginBottom: 12 }}>
                        <span
                          style={{
                            fontSize: '0.75rem',
                            fontWeight: 600,
                            textTransform: 'uppercase',
                            letterSpacing: '0.1em',
                            color: '#025082',
                          }}
                        >
                          {categories.find((c) => c.id === article.category)?.label || article.category}
                        </span>
                      </div>

                      {/* Title */}
                      <h2
                        style={{
                          fontSize: '1.5rem',
                          fontWeight: 600,
                          color: '#111827',
                          marginBottom: 12,
                          lineHeight: 1.3,
                          fontFamily: "'R2Font', var(--font-inter), serif",
                        }}
                      >
                        {article.title}
                      </h2>

                      {/* Excerpt */}
                      <p
                        style={{
                          fontSize: '1rem',
                          color: '#6b7280',
                          lineHeight: 1.6,
                          marginBottom: 'auto',
                          flex: 1,
                        }}
                      >
                        {article.excerpt}
                      </p>

                      {/* Meta */}
                      <div
                        style={{
                          marginTop: 20,
                          paddingTop: 20,
                          borderTop: '1px solid #e5e7eb',
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          fontSize: '0.85rem',
                          color: '#9ca3af',
                        }}
                      >
                        <span>{article.publishedDate}</span>
                        {article.readTime && <span>{article.readTime} min read</span>}
                      </div>
                    </Card>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          )}
        </Container>
      </section>
    </div>
  );
}

