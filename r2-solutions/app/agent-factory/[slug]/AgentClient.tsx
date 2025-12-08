'use client';

import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { getAgentBySlug, agentCategories } from '@/lib/agents';

export default function AgentClient({ slug }: { slug: string }) {
  const agent = getAgentBySlug(slug);

  if (!agent) {
    return (
      <div style={{ padding: '100px 48px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2rem', color: '#111827', marginBottom: 16 }}>Agent Not Found</h1>
        <Button asChild variant="primary">
          <Link href="/agent-factory">View All Agents</Link>
        </Button>
      </div>
    );
  }

  const category = agentCategories.find((c) => c.id === agent.category);

  return (
    <div style={{ background: '#fff', minHeight: '100vh' }}>
      {/* Hero Section - Premium Homepage Style */}
      <section
        style={{
          minHeight: '70vh',
          display: 'flex',
          alignItems: 'flex-end',
          padding: '140px 48px 80px',
          position: 'relative',
          overflow: 'hidden',
          background: agent.gradient,
          backgroundImage: agent.image
            ? `linear-gradient(140deg, rgba(0,0,0,0.6), rgba(0,0,0,0.4)), url(${agent.image})`
            : undefined,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Container size="xl" className="max-w-6xl mx-auto" style={{ width: '100%', position: 'relative', zIndex: 1 }}>
          <AnimatedSection>
            <div style={{ marginBottom: 20 }}>
              <span
                style={{
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  color: 'rgba(255,255,255,0.9)',
                }}
              >
                {category?.label || agent.category}
              </span>
            </div>
            <div style={{ fontSize: '4rem', marginBottom: 24, filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.3))' }}>
              {agent.icon}
            </div>
            <h1
              style={{
                fontSize: 'clamp(3rem, 7vw, 5.5rem)',
                fontWeight: 500,
                color: '#fff',
                lineHeight: 1.05,
                marginBottom: 24,
                fontFamily: "'R2Font', var(--font-inter), serif",
                textShadow: '0 2px 20px rgba(0,0,0,0.3)',
              }}
            >
              {agent.name}
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
              {agent.tagline}
            </p>
          </AnimatedSection>
        </Container>
      </section>

      {/* Description */}
      <section style={{ padding: '80px 48px' }}>
        <Container size="lg" className="max-w-4xl mx-auto">
          <AnimatedSection>
            <p
              style={{
                fontSize: '1.25rem',
                lineHeight: 1.8,
                color: '#374151',
                fontFamily: 'var(--font-inter), sans-serif',
              }}
            >
              {agent.longDescription}
            </p>
          </AnimatedSection>
        </Container>
      </section>

      {/* Problem & How It Works */}
      {(agent.problems || agent.howItWorks) && (
        <section style={{ padding: '80px 48px', background: '#f9fafb' }}>
          <Container size="xl" className="max-w-6xl mx-auto">
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: 48,
              }}
            >
              {agent.problems && agent.problems.length > 0 && (
                <AnimatedSection>
                  <h2
                    style={{
                      fontSize: 'clamp(1.75rem, 3.5vw, 2.2rem)',
                      fontWeight: 600,
                      color: '#111827',
                      marginBottom: 20,
                      fontFamily: "'R2Font', var(--font-inter), serif",
                    }}
                  >
                    Problem It Solves
                  </h2>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {agent.problems.map((item, index) => (
                      <li
                        key={index}
                        style={{
                          padding: '14px 0',
                          borderBottom: index < agent.problems!.length - 1 ? '1px solid #e5e7eb' : 'none',
                          color: '#374151',
                          lineHeight: 1.6,
                        }}
                      >
                        <span style={{ color: '#025082', marginRight: 10 }}>•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </AnimatedSection>
              )}

              {agent.howItWorks && agent.howItWorks.length > 0 && (
                <AnimatedSection delay={0.1}>
                  <h2
                    style={{
                      fontSize: 'clamp(1.75rem, 3.5vw, 2.2rem)',
                      fontWeight: 600,
                      color: '#111827',
                      marginBottom: 20,
                      fontFamily: "'R2Font', var(--font-inter), serif",
                    }}
                  >
                    How It Works
                  </h2>
                  <ol style={{ paddingLeft: 20, margin: 0, color: '#374151', lineHeight: 1.7 }}>
                    {agent.howItWorks.map((item, index) => (
                      <li key={index} style={{ marginBottom: 12 }}>{item}</li>
                    ))}
                  </ol>
                </AnimatedSection>
              )}
            </div>
          </Container>
        </section>
      )}

      {/* Metrics */}
      {agent.metrics && agent.metrics.length > 0 && (
        <section style={{ padding: '80px 48px', background: '#f9fafb' }}>
          <Container size="xl" className="max-w-6xl mx-auto">
            <AnimatedSection>
              <h2
                style={{
                  fontSize: 'clamp(2rem, 4vw, 2.5rem)',
                  fontWeight: 500,
                  color: '#111827',
                  textAlign: 'center',
                  marginBottom: 48,
                  fontFamily: "'R2Font', var(--font-inter), serif",
                }}
              >
                Results We've Delivered
              </h2>
            </AnimatedSection>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: 32,
              }}
            >
              {agent.metrics.map((metric, index) => (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <div
                    style={{
                      padding: 40,
                      background: '#fff',
                      borderRadius: '20px',
                      textAlign: 'center',
                      border: '1px solid #e5e7eb',
                    }}
                  >
                    <p
                      style={{
                        fontSize: '1.5rem',
                        fontWeight: 600,
                        color: '#025082',
                        lineHeight: 1.3,
                      }}
                    >
                      {metric}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Features & Use Cases Grid */}
      <section style={{ padding: '100px 48px' }}>
        <Container size="xl" className="max-w-6xl mx-auto">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
              gap: 64,
            }}
          >
            <AnimatedSection>
              <h2
                style={{
                  fontSize: 'clamp(2rem, 4vw, 2.5rem)',
                  fontWeight: 500,
                  color: '#111827',
                  marginBottom: 32,
                  fontFamily: "'R2Font', var(--font-inter), serif",
                }}
              >
                Key Features
              </h2>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {agent.features.map((feature, index) => (
                  <li
                    key={index}
                    style={{
                      padding: '20px 0',
                      borderBottom: index < agent.features.length - 1 ? '1px solid #e5e7eb' : 'none',
                      fontSize: '1.1rem',
                      color: '#374151',
                      lineHeight: 1.6,
                    }}
                  >
                    <span style={{ color: '#025082', marginRight: 12, fontSize: '1.2rem' }}>✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <h2
                style={{
                  fontSize: 'clamp(2rem, 4vw, 2.5rem)',
                  fontWeight: 500,
                  color: '#111827',
                  marginBottom: 32,
                  fontFamily: "'R2Font', var(--font-inter), serif",
                }}
              >
                Use Cases
              </h2>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {agent.useCases.map((useCase, index) => (
                  <li
                    key={index}
                    style={{
                      padding: '20px 0',
                      borderBottom: index < agent.useCases.length - 1 ? '1px solid #e5e7eb' : 'none',
                      fontSize: '1.1rem',
                      color: '#374151',
                      lineHeight: 1.6,
                    }}
                  >
                    <span style={{ color: '#025082', marginRight: 12, fontSize: '1.2rem' }}>•</span>
                    {useCase}
                  </li>
                ))}
              </ul>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      {/* Benefits */}
      <section style={{ padding: '100px 48px', background: '#f9fafb' }}>
        <Container size="xl" className="max-w-6xl mx-auto">
          <AnimatedSection>
            <h2
              style={{
                fontSize: 'clamp(2rem, 4vw, 2.5rem)',
                fontWeight: 500,
                color: '#111827',
                textAlign: 'center',
                marginBottom: 48,
                fontFamily: "'R2Font', var(--font-inter), serif",
              }}
            >
              Benefits
            </h2>
          </AnimatedSection>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: 32,
            }}
          >
            {agent.benefits.map((benefit, index) => (
              <AnimatedSection key={index} delay={index * 0.05}>
                <Card variant="hover" padding="lg" style={{ height: '100%' }}>
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: '12px',
                      background: 'linear-gradient(135deg, #025082, #0369a1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.5rem',
                      marginBottom: 20,
                    }}
                  >
                    {agent.icon}
                  </div>
                  <p
                    style={{
                      fontSize: '1.1rem',
                      color: '#374151',
                      lineHeight: 1.6,
                    }}
                  >
                    {benefit}
                  </p>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      {/* Best For */}
      {agent.bestFor && (
        <section style={{ padding: '80px 48px' }}>
          <Container size="md" className="max-w-4xl mx-auto">
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
                  Best For
                </h2>
                <p style={{ fontSize: '1.1rem', color: '#4b5563', lineHeight: 1.7 }}>{agent.bestFor}</p>
              </div>
            </AnimatedSection>
          </Container>
        </section>
      )}

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
                Ready to Deploy {agent.name}?
              </h2>
              <p
                style={{
                  fontSize: '1.2rem',
                  color: '#6b7280',
                  marginBottom: 40,
                  lineHeight: 1.6,
                }}
              >
                Book a workshop and see this agent working on your specific challenge in 48 hours.
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
