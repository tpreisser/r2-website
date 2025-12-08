'use client';

import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { getIndustryBySlug, getSubIndustryBySlug } from '@/lib/industries';

export default function SubIndustryClient({ slug, subSlug }: { slug: string; subSlug: string }) {
  const industry = getIndustryBySlug(slug);
  const subIndustry = industry ? getSubIndustryBySlug(slug, subSlug) : undefined;

  if (!industry || !subIndustry) {
    return (
      <div style={{ padding: '100px 48px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2rem', color: '#111827', marginBottom: 16 }}>Page Not Found</h1>
        <Button asChild variant="primary">
          <Link href="/industries">View All Industries</Link>
        </Button>
      </div>
    );
  }

  return (
    <div style={{ background: '#fff', minHeight: '100vh' }}>
      {/* Hero Section */}
      <section
        style={{
          minHeight: '70vh',
          display: 'flex',
          alignItems: 'flex-end',
          padding: '140px 48px 80px',
          position: 'relative',
          overflow: 'hidden',
          background: industry.gradient,
          backgroundImage: industry.image
            ? `linear-gradient(140deg, rgba(0,0,0,0.6), rgba(0,0,0,0.4)), url(${industry.image})`
            : undefined,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Container size="xl" className="max-w-6xl mx-auto" style={{ width: '100%', position: 'relative', zIndex: 1 }}>
          <AnimatedSection>
            <div style={{ marginBottom: 20 }}>
              <Link
                href={`/industries/${slug}`}
                style={{
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  color: 'rgba(255,255,255,0.9)',
                  textDecoration: 'none',
                }}
              >
                ← {industry.name}
              </Link>
            </div>
            <h1
              style={{
                fontSize: 'clamp(3rem, 7vw, 5.5rem)',
                fontWeight: 500,
                color: '#fff',
                lineHeight: 1.05,
                marginBottom: 32,
                fontFamily: "'R2Font', var(--font-inter), serif",
                textShadow: '0 2px 20px rgba(0,0,0,0.3)',
              }}
            >
              {subIndustry.name}
            </h1>
            <p
              style={{
                fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)',
                color: 'rgba(255,255,255,0.95)',
                lineHeight: 1.6,
                maxWidth: '800px',
                textShadow: '0 1px 10px rgba(0,0,0,0.2)',
              }}
            >
              {subIndustry.description}
            </p>
          </AnimatedSection>
        </Container>
      </section>

      {/* Use Cases */}
      <section style={{ padding: '100px 48px' }}>
        <Container size="xl" className="max-w-6xl mx-auto">
          <AnimatedSection>
            <h2
              style={{
                fontSize: 'clamp(2rem, 4vw, 2.5rem)',
                fontWeight: 500,
                color: '#111827',
                marginBottom: 48,
                fontFamily: "'R2Font', var(--font-inter), serif",
              }}
            >
              How We Apply AI in {subIndustry.name}
            </h2>
          </AnimatedSection>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: 32,
            }}
          >
            {subIndustry.useCases.map((useCase, index) => (
              <AnimatedSection key={index} delay={index * 0.05}>
                <Card variant="hover" padding="lg" style={{ height: '100%' }}>
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: '12px',
                      background: industry.gradient,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.5rem',
                      marginBottom: 20,
                    }}
                  >
                    {industry.icon}
                  </div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#111827', marginBottom: 12 }}>
                    {useCase}
                  </h3>
                  <p style={{ fontSize: '0.95rem', color: '#6b7280', lineHeight: 1.6 }}>
                    Our AI agents are specifically designed for {subIndustry.name.toLowerCase()} workflows, integrating seamlessly with your existing systems.
                  </p>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      {/* Related Links */}
      <section style={{ padding: '100px 48px', background: '#f9fafb' }}>
        <Container size="lg" className="max-w-4xl mx-auto">
          <AnimatedSection>
            <div style={{ textAlign: 'center' }}>
              <h2
                style={{
                  fontSize: 'clamp(2rem, 4vw, 2.5rem)',
                  fontWeight: 500,
                  color: '#111827',
                  marginBottom: 32,
                  fontFamily: "'R2Font', var(--font-inter), serif",
                }}
              >
                Learn More
              </h2>
              <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 40 }}>
                <Button asChild variant="secondary">
                  <Link href={`/industries/${slug}/how-we-apply-ai`}>How We Apply AI</Link>
                </Button>
                <Button asChild variant="secondary">
                  <Link href={`/industries/${slug}/integration`}>Integration Approach</Link>
                </Button>
              </div>
              <p style={{ fontSize: '1.2rem', color: '#6b7280', marginBottom: 40, lineHeight: 1.6 }}>
                Ready to see AI working in {subIndustry.name.toLowerCase()}?
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
