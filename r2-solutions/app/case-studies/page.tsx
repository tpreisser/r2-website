'use client';

import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Card } from '@/components/ui/Card';
import { caseStudies } from '@/lib/case-studies';

export default function CaseStudiesPage() {
  return (
    <div style={{ background: '#fff', minHeight: '100vh' }}>
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
                marginBottom: 16,
                textAlign: 'center',
                fontFamily: "'R2Font', var(--font-inter), serif",
              }}
            >
              Case Studies
            </h1>
            <p
              style={{
                fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
                color: '#6b7280',
                textAlign: 'center',
                maxWidth: '820px',
                margin: '0 auto',
                lineHeight: 1.6,
              }}
            >
              Real results from AI systems in production—across industries, under real constraints.
            </p>
          </AnimatedSection>
        </Container>
      </section>

      <section style={{ padding: '80px 48px' }}>
        <Container size="xl" className="max-w-6xl mx-auto">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
              gap: 32,
            }}
          >
            {caseStudies.map((cs, index) => (
              <AnimatedSection key={cs.id} delay={index * 0.05}>
                <Link href={`/case-studies/${cs.slug}`} style={{ textDecoration: 'none' }}>
                  <Card variant="hover" padding="lg" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                    {cs.image && (
                      <div
                        style={{
                          width: '100%',
                          height: 200,
                          borderRadius: 12,
                          marginBottom: 16,
                          background: cs.gradient || 'linear-gradient(135deg, #025082, #0369a1)',
                          backgroundImage: cs.image
                            ? `linear-gradient(140deg, rgba(0,0,0,0.35), rgba(0,0,0,0.15)), url(${cs.image})`
                            : undefined,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                        }}
                      />
                    )}
                    <div style={{ fontSize: '0.9rem', fontWeight: 600, color: '#025082', marginBottom: 8 }}>
                      {cs.industry} • {cs.timeline}
                    </div>
                    <h2
                      style={{
                        fontSize: '1.5rem',
                        fontWeight: 600,
                        color: '#111827',
                        marginBottom: 10,
                        fontFamily: "'R2Font', var(--font-inter), serif",
                      }}
                    >
                      {cs.title}
                    </h2>
                    <p style={{ color: '#6b7280', lineHeight: 1.6, flex: 1 }}>{cs.summary}</p>
                    <div
                      style={{
                        marginTop: 16,
                        paddingTop: 14,
                        borderTop: '1px solid #e5e7eb',
                        fontSize: '0.95rem',
                        color: '#374151',
                        fontWeight: 500,
                      }}
                    >
                      {cs.capability}
                    </div>
                  </Card>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
