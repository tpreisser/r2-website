'use client';

import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { getIndustryBySlug } from '@/lib/industries';

export default function IntegrationClient({ slug }: { slug: string }) {
  const industry = getIndustryBySlug(slug);

  if (!industry) {
    return (
      <div style={{ padding: '100px 48px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2rem', color: '#111827', marginBottom: 16 }}>Industry Not Found</h1>
        <Button asChild variant="primary">
          <Link href="/industries">View All Industries</Link>
        </Button>
      </div>
    );
  }

  const integrationSteps = [
    {
      step: '1',
      title: 'Discovery & Assessment',
      description: 'We analyze your current systems, workflows, and requirements to design the optimal integration approach.',
    },
    {
      step: '2',
      title: 'Custom Agent Development',
      description: 'We build industry-specific AI agents tailored to your exact needs and integrated with your existing systems.',
    },
    {
      step: '3',
      title: 'Seamless Integration',
      description: 'We integrate AI agents with your CRM, databases, APIs, and legacy systems without disrupting operations.',
    },
    {
      step: '4',
      title: 'Testing & Deployment',
      description: 'We test thoroughly in your environment, then deploy with zero downtime and full support.',
    },
  ];

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
              AI Integration for {industry.name}
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
              Seamlessly integrate AI agents into your {industry.name.toLowerCase()} workflows, systems, and processes. Built to work with your existing infrastructure.
            </p>
          </AnimatedSection>
        </Container>
      </section>

      {/* Integration Process */}
      <section style={{ padding: '100px 48px' }}>
        <Container size="xl" className="max-w-6xl mx-auto">
          <AnimatedSection>
            <h2
              style={{
                fontSize: 'clamp(2rem, 4vw, 2.5rem)',
                fontWeight: 500,
                color: '#111827',
                textAlign: 'center',
                marginBottom: 64,
                fontFamily: "'R2Font', var(--font-inter), serif",
              }}
            >
              Our Integration Process
            </h2>
          </AnimatedSection>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: 32,
            }}
          >
            {integrationSteps.map((step, index) => (
              <AnimatedSection key={step.step} delay={index * 0.1}>
                <Card variant="hover" padding="lg" style={{ height: '100%' }}>
                  <div
                    style={{
                      width: 56,
                      height: 56,
                      borderRadius: '50%',
                      background: industry.gradient,
                      color: '#fff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.5rem',
                      fontWeight: 600,
                      marginBottom: 24,
                    }}
                  >
                    {step.step}
                  </div>
                  <h3
                    style={{
                      fontSize: '1.5rem',
                      fontWeight: 600,
                      color: '#111827',
                      marginBottom: 16,
                      fontFamily: "'R2Font', var(--font-inter), serif",
                    }}
                  >
                    {step.title}
                  </h3>
                  <p style={{ fontSize: '1rem', color: '#6b7280', lineHeight: 1.6 }}>
                    {step.description}
                  </p>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      {/* Integration Capabilities */}
      <section style={{ padding: '100px 48px', background: '#f9fafb' }}>
        <Container size="lg" className="max-w-4xl mx-auto">
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
              What We Integrate With
            </h2>
            <div
              style={{
                fontSize: '1.15rem',
                lineHeight: 1.8,
                color: '#374151',
                fontFamily: 'var(--font-inter), sans-serif',
              }}
            >
              <p style={{ marginBottom: 24 }}>
                Our AI agents integrate seamlessly with your existing {industry.name.toLowerCase()} infrastructure:
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ padding: '12px 0', fontSize: '1.1rem', color: '#374151' }}>
                  <span style={{ color: '#025082', marginRight: 12 }}>✓</span>
                  CRM systems (Salesforce, HubSpot, custom)
                </li>
                <li style={{ padding: '12px 0', fontSize: '1.1rem', color: '#374151' }}>
                  <span style={{ color: '#025082', marginRight: 12 }}>✓</span>
                  Databases and data warehouses
                </li>
                <li style={{ padding: '12px 0', fontSize: '1.1rem', color: '#374151' }}>
                  <span style={{ color: '#025082', marginRight: 12 }}>✓</span>
                  APIs and web services
                </li>
                <li style={{ padding: '12px 0', fontSize: '1.1rem', color: '#374151' }}>
                  <span style={{ color: '#025082', marginRight: 12 }}>✓</span>
                  Legacy systems and mainframes
                </li>
                <li style={{ padding: '12px 0', fontSize: '1.1rem', color: '#374151' }}>
                  <span style={{ color: '#025082', marginRight: 12 }}>✓</span>
                  Industry-specific systems (EHR, policy management, etc.)
                </li>
                <li style={{ padding: '12px 0', fontSize: '1.1rem', color: '#374151' }}>
                  <span style={{ color: '#025082', marginRight: 12 }}>✓</span>
                  Communication platforms (email, SMS, chat)
                </li>
              </ul>
              <p style={{ marginTop: 32, marginBottom: 24 }}>
                We understand that {industry.name.toLowerCase()} organizations often have complex, legacy systems that can't be easily replaced. Our integration approach is designed to work with what you have, not against it.
              </p>
              <p>
                Our team has deep experience integrating with industry-specific platforms and understands the unique requirements of {industry.name.toLowerCase()} operations.
              </p>
            </div>
          </AnimatedSection>
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
                Ready to Integrate AI into Your {industry.name} Operations?
              </h2>
              <p style={{ fontSize: '1.2rem', color: '#6b7280', marginBottom: 40, lineHeight: 1.6 }}>
                Book a workshop and see how we integrate AI agents into your existing systems.
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
