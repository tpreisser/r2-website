'use client';

import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Card } from '@/components/ui/Card';

const workshopSteps = [
  {
    step: '1',
    title: 'Discovery Call',
    description: 'We understand your business challenge, current processes, and success metrics in a 30-minute call.',
    duration: '30 min',
  },
  {
    step: '2',
    title: 'Workshop Session',
    description: 'We build a working AI prototype tailored to your specific use case. You see it in action, not just slides.',
    duration: '2-4 hours',
  },
  {
    step: '3',
    title: 'Working Prototype',
    description: 'You receive a functional AI agent that solves your actual problem. No demos, no theory—just working code.',
    duration: '48 hours',
  },
  {
    step: '4',
    title: 'Results & Next Steps',
    description: 'If you see value, we discuss scaling. If not, you walk away with no obligation. Your call.',
    duration: 'Ongoing',
  },
];

const guarantees = [
  {
    icon: '✓',
    title: 'Working Prototype',
    description: 'Not a demo. Not a mockup. A real, functional AI agent that solves your problem.',
  },
  {
    icon: '✓',
    title: '48-Hour Delivery',
    description: 'From workshop to working prototype in two days. No months-long projects.',
  },
  {
    icon: '✓',
    title: 'No Obligation',
    description: 'If you don\'t see value, you don\'t pay. Simple as that.',
  },
  {
    icon: '✓',
    title: 'Full Transparency',
    description: 'You see exactly how it works, what it costs, and what happens next.',
  },
];

export default function WorkshopPage() {
  return (
    <div style={{ background: '#fff', minHeight: '100vh' }}>
      {/* Hero */}
      <section
        style={{
          padding: '140px 48px 80px',
          background: 'linear-gradient(180deg, #e8f4fc 0%, #f0f9ff 40%, #ffffff 100%)',
        }}
      >
        <Container size="lg" className="max-w-5xl mx-auto">
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
              See Working AI in One Day
            </h1>
            <p
              style={{
                fontSize: 'clamp(1.1rem, 2vw, 1.5rem)',
                color: '#6b7280',
                textAlign: 'center',
                maxWidth: '800px',
                margin: '0 auto 48px',
                lineHeight: 1.6,
              }}
            >
              Book a workshop. Get a working prototype. If you don't see value, you don't pay.
            </p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Button asChild size="lg" variant="primary">
                <Link href="/contact?subject=workshop">Book Your Workshop</Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <Link href="/contact">Talk to Our Team</Link>
              </Button>
            </div>
          </AnimatedSection>
        </Container>
      </section>

      {/* How It Works */}
      <section style={{ padding: '100px 48px' }}>
        <Container size="xl" className="max-w-6xl mx-auto">
          <AnimatedSection>
            <h2
              style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 500,
                color: '#111827',
                textAlign: 'center',
                marginBottom: 64,
                fontFamily: "'R2Font', var(--font-inter), serif",
              }}
            >
              How It Works
            </h2>
          </AnimatedSection>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: 32,
            }}
          >
            {workshopSteps.map((step, index) => (
              <AnimatedSection key={step.step} delay={index * 0.1}>
                <Card variant="hover" padding="lg" style={{ height: '100%' }}>
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: '50%',
                      background: '#025082',
                      color: '#fff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.5rem',
                      fontWeight: 600,
                      marginBottom: 20,
                    }}
                  >
                    {step.step}
                  </div>
                  <h3
                    style={{
                      fontSize: '1.5rem',
                      fontWeight: 600,
                      color: '#111827',
                      marginBottom: 12,
                      fontFamily: "'R2Font', var(--font-inter), serif",
                    }}
                  >
                    {step.title}
                  </h3>
                  <p style={{ fontSize: '1rem', color: '#6b7280', lineHeight: 1.6, marginBottom: 16 }}>
                    {step.description}
                  </p>
                  <div
                    style={{
                      fontSize: '0.85rem',
                      color: '#025082',
                      fontWeight: 500,
                      padding: '6px 12px',
                      background: '#e8f4fc',
                      borderRadius: '12px',
                      display: 'inline-block',
                    }}
                  >
                    {step.duration}
                  </div>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      {/* Guarantees */}
      <section style={{ padding: '100px 48px', background: '#f9fafb' }}>
        <Container size="lg" className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2
              style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 500,
                color: '#111827',
                textAlign: 'center',
                marginBottom: 64,
                fontFamily: "'R2Font', var(--font-inter), serif",
              }}
            >
              Our Guarantee
            </h2>
          </AnimatedSection>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: 24,
            }}
          >
            {guarantees.map((guarantee, index) => (
              <AnimatedSection key={index} delay={index * 0.05}>
                <div
                  style={{
                    padding: 32,
                    background: '#fff',
                    borderRadius: '16px',
                    border: '1px solid #e5e7eb',
                  }}
                >
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: '50%',
                      background: '#e8f4fc',
                      color: '#025082',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.5rem',
                      fontWeight: 600,
                      marginBottom: 16,
                    }}
                  >
                    {guarantee.icon}
                  </div>
                  <h3
                    style={{
                      fontSize: '1.25rem',
                      fontWeight: 600,
                      color: '#111827',
                      marginBottom: 8,
                    }}
                  >
                    {guarantee.title}
                  </h3>
                  <p style={{ fontSize: '0.95rem', color: '#6b7280', lineHeight: 1.6 }}>
                    {guarantee.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section style={{ padding: '100px 48px' }}>
        <Container size="md" className="max-w-3xl mx-auto">
          <AnimatedSection>
            <div style={{ textAlign: 'center' }}>
              <h2
                style={{
                  fontSize: 'clamp(2rem, 4vw, 3rem)',
                  fontWeight: 500,
                  color: '#111827',
                  marginBottom: 24,
                  fontFamily: "'R2Font', var(--font-inter), serif",
                }}
              >
                Ready to See It Work?
              </h2>
              <p
                style={{
                  fontSize: '1.2rem',
                  color: '#6b7280',
                  marginBottom: 40,
                  lineHeight: 1.6,
                }}
              >
                Book your workshop today. See a working AI prototype in 48 hours. No obligation.
              </p>
              <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
                <Button asChild size="lg" variant="primary">
                  <Link href="/contact?subject=workshop">Book Workshop</Link>
                </Button>
                <Button asChild size="lg" variant="secondary">
                  <Link href="/contact">Have Questions?</Link>
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </Container>
      </section>
    </div>
  );
}

