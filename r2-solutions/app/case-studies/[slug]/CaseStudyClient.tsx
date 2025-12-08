'use client';

import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Button } from '@/components/ui/Button';
import { getCaseStudy } from '@/lib/case-studies';

export default function CaseStudyClient({ slug }: { slug: string }) {
  const cs = getCaseStudy(slug);

  if (!cs) {
    return (
      <div style={{ padding: '100px 48px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2rem', color: '#111827', marginBottom: 16 }}>Case Study Not Found</h1>
        <Button asChild variant="primary">
          <Link href="/case-studies">View All Case Studies</Link>
        </Button>
      </div>
    );
  }

  return (
    <div style={{ background: '#fff', minHeight: '100vh' }}>
      {/* Hero */}
      <section
        style={{
          minHeight: '60vh',
          display: 'flex',
          alignItems: 'flex-end',
          padding: '140px 48px 80px',
          background: cs.gradient || 'linear-gradient(135deg, #025082, #0369a1)',
          backgroundImage: cs.image
            ? `linear-gradient(140deg, rgba(0,0,0,0.55), rgba(0,0,0,0.35)), url(${cs.image})`
            : undefined,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Container size="lg" className="max-w-4xl mx-auto" style={{ width: '100%' }}>
          <AnimatedSection>
            <div style={{ marginBottom: 16, color: 'rgba(255,255,255,0.9)', fontWeight: 600, letterSpacing: '0.08em' }}>
              {cs.industry} • {cs.timeline} • {cs.capability}
            </div>
            <h1
              style={{
                fontSize: 'clamp(2.75rem, 6vw, 4.5rem)',
                fontWeight: 500,
                color: '#fff',
                lineHeight: 1.1,
                marginBottom: 20,
                fontFamily: "'R2Font', var(--font-inter), serif",
              }}
            >
              {cs.title}
            </h1>
            <p
              style={{
                fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
                color: 'rgba(255,255,255,0.95)',
                lineHeight: 1.6,
                maxWidth: '800px',
                textShadow: '0 1px 10px rgba(0,0,0,0.25)',
              }}
            >
              {cs.summary}
            </p>
          </AnimatedSection>
        </Container>
      </section>

      {/* Situation */}
      <section style={{ padding: '80px 48px' }}>
        <Container size="md" className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2
              style={{
                fontSize: 'clamp(2rem, 4vw, 2.6rem)',
                fontWeight: 500,
                color: '#111827',
                marginBottom: 12,
                fontFamily: "'R2Font', var(--font-inter), serif",
              }}
            >
              Situation
            </h2>
            <p style={{ fontSize: '1.1rem', color: '#374151', lineHeight: 1.7 }}>{cs.situation}</p>
          </AnimatedSection>
        </Container>
      </section>

      {/* Approach */}
      <section style={{ padding: '80px 48px', background: '#f9fafb' }}>
        <Container size="lg" className="max-w-5xl mx-auto">
          <AnimatedSection>
            <h2
              style={{
                fontSize: 'clamp(2rem, 4vw, 2.6rem)',
                fontWeight: 500,
                color: '#111827',
                marginBottom: 24,
                fontFamily: "'R2Font', var(--font-inter), serif",
              }}
            >
              Our Approach
            </h2>
          </AnimatedSection>
          <div style={{ display: 'grid', gap: 16 }}>
            {cs.approach.map((step, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.05}>
                <div
                  style={{
                    padding: '18px 20px',
                    borderRadius: 16,
                    background: '#fff',
                    border: '1px solid #e5e7eb',
                    lineHeight: 1.6,
                    color: '#374151',
                  }}
                >
                  {step}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      {/* Results */}
      <section style={{ padding: '80px 48px' }}>
        <Container size="lg" className="max-w-5xl mx-auto">
          <AnimatedSection>
            <h2
              style={{
                fontSize: 'clamp(2rem, 4vw, 2.6rem)',
                fontWeight: 500,
                color: '#111827',
                marginBottom: 24,
                fontFamily: "'R2Font', var(--font-inter), serif",
              }}
            >
              Results
            </h2>
          </AnimatedSection>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: 16,
            }}
          >
            {cs.results.map((result, idx) => (
              <AnimatedSection key={result} delay={idx * 0.05}>
                <div
                  style={{
                    padding: '16px 18px',
                    borderRadius: 16,
                    background: '#f9fafb',
                    border: '1px solid #e5e7eb',
                    color: '#1f2937',
                    lineHeight: 1.5,
                    fontWeight: 600,
                  }}
                >
                  {result}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      {/* Quote */}
      {cs.quote && (
        <section style={{ padding: '60px 48px', background: '#f9fafb' }}>
          <Container size="md" className="max-w-4xl mx-auto">
            <AnimatedSection>
              <blockquote
                style={{
                  margin: 0,
                  padding: '24px 28px',
                  borderLeft: '4px solid #025082',
                  background: '#fff',
                  borderRadius: 16,
                  boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                  color: '#0f172a',
                  fontSize: '1.1rem',
                  lineHeight: 1.7,
                }}
              >
                {cs.quote}
              </blockquote>
            </AnimatedSection>
          </Container>
        </section>
      )}

      {/* CTA */}
      <section style={{ padding: '90px 48px' }}>
        <Container size="md" className="max-w-3xl mx-auto">
          <AnimatedSection>
            <div style={{ textAlign: 'center' }}>
              <h3
                style={{
                  fontSize: 'clamp(2rem, 4vw, 2.6rem)',
                  fontWeight: 500,
                  color: '#111827',
                  marginBottom: 16,
                  fontFamily: "'R2Font', var(--font-inter), serif",
                }}
              >
                Want results like these?
              </h3>
              <p style={{ color: '#6b7280', lineHeight: 1.6, marginBottom: 28, fontSize: '1.05rem' }}>
                Book a workshop and see a working prototype for your business, or talk with the team about your exact
                challenge.
              </p>
              <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
                <Button asChild size="lg" variant="primary">
                  <Link href="/workshop">Book Workshop</Link>
                </Button>
                <Button asChild size="lg" variant="secondary">
                  <Link href="/contact">Talk to Our Team</Link>
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </Container>
      </section>
    </div>
  );
}
