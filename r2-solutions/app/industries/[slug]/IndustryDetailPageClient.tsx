'use client';

import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { getIndustryBySlug } from '@/lib/industries';
import { caseStudies } from '@/lib/case-studies';
import { industryEnhancedContent } from '@/lib/industry-content';

export function IndustryDetailPageClient({ slug }: { slug: string }) {
  const industry = getIndustryBySlug(slug);
  const enhancedContent = industryEnhancedContent[slug];
  const relatedCaseStudies = caseStudies.filter(
    (c) => c.industry.toLowerCase() === industry?.name.toLowerCase()
  );

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

  return (
    <div style={{ background: '#fff', minHeight: '100vh' }}>
      {/* Hero Section - Premium Homepage Style */}
      <section
        data-header-theme="dark"
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
              <span
                style={{
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  color: 'rgba(255,255,255,0.9)',
                }}
              >
                Industry
              </span>
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
              {enhancedContent?.hero.headline || industry.name}
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
              {enhancedContent?.hero.subheadline || industry.longDescription}
            </p>
          </AnimatedSection>
        </Container>
      </section>

      {/* Key Metrics */}
      {industry.metrics && industry.metrics.length > 0 && (
        <section data-header-theme="light" style={{ padding: '80px 48px', background: '#f9fafb' }}>
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
              {industry.metrics.map((metric, index) => (
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

      {/* Challenge Section - Enhanced Content */}
      {enhancedContent?.challenge && (
        <section data-header-theme="light" style={{ padding: '100px 48px', background: '#fff' }}>
          <Container size="xl" className="max-w-6xl mx-auto">
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
                {enhancedContent.challenge.title}
              </h2>
              <div
                style={{
                  fontSize: '1.1rem',
                  color: '#374151',
                  lineHeight: 1.8,
                  marginBottom: 48,
                  whiteSpace: 'pre-line',
                }}
              >
                {enhancedContent.challenge.description}
              </div>
              <div>
                <h3
                  style={{
                    fontSize: '1.5rem',
                    fontWeight: 600,
                    color: '#111827',
                    marginBottom: 24,
                    fontFamily: "'R2Font', var(--font-inter), serif",
                  }}
                >
                  Key Challenges:
                </h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {enhancedContent.challenge.keyChallenges.map((challenge, index) => (
                    <li
                      key={index}
                      style={{
                        padding: '16px 0',
                        borderBottom: index < enhancedContent.challenge.keyChallenges.length - 1 ? '1px solid #e5e7eb' : 'none',
                        fontSize: '1.1rem',
                        color: '#374151',
                        lineHeight: 1.6,
                      }}
                    >
                      <span style={{ color: '#025082', marginRight: 12, fontSize: '1.2rem' }}>•</span>
                      {challenge}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </Container>
        </section>
      )}

      {/* How We Help Section - Enhanced Content */}
      {enhancedContent?.howWeHelp && (
        <section data-header-theme="light" style={{ padding: '100px 48px', background: '#f9fafb' }}>
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
                How R² Helps
              </h2>
            </AnimatedSection>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))',
                gap: 40,
              }}
            >
              {enhancedContent.howWeHelp.sections.map((section, index) => (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <Card variant="hover" padding="lg" style={{ height: '100%' }}>
                    <h3
                      style={{
                        fontSize: '1.75rem',
                        fontWeight: 600,
                        color: '#111827',
                        marginBottom: 16,
                        fontFamily: "'R2Font', var(--font-inter), serif",
                      }}
                    >
                      {section.title}
                    </h3>
                    <p
                      style={{
                        fontSize: '1.1rem',
                        color: '#4b5563',
                        lineHeight: 1.7,
                        marginBottom: 20,
                      }}
                    >
                      {section.description}
                    </p>
                    <div
                      style={{
                        padding: '16px',
                        background: '#f3f4f6',
                        borderRadius: '12px',
                        borderLeft: '4px solid #025082',
                      }}
                    >
                      <p
                        style={{
                          fontSize: '1rem',
                          color: '#111827',
                          lineHeight: 1.6,
                          fontWeight: 500,
                          margin: 0,
                        }}
                      >
                        <strong>Result:</strong> {section.result}
                      </p>
                    </div>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Key Deliverables - Enhanced Content */}
      {enhancedContent?.deliverables && enhancedContent.deliverables.length > 0 && (
        <section style={{ padding: '100px 48px', background: '#fff' }}>
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
                Key Deliverables
              </h2>
            </AnimatedSection>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: 24,
              }}
            >
              {enhancedContent.deliverables.map((deliverable, index) => (
                <AnimatedSection key={index} delay={index * 0.05}>
                  <Card variant="hover" padding="lg">
                    <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                      <div
                        style={{
                          width: 8,
                          height: 8,
                          borderRadius: '50%',
                          background: '#025082',
                          marginTop: 8,
                          flexShrink: 0,
                        }}
                      />
                      <p
                        style={{
                          fontSize: '1.1rem',
                          color: '#374151',
                          lineHeight: 1.6,
                          margin: 0,
                        }}
                      >
                        {deliverable}
                      </p>
                    </div>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Featured Agent Factory Solutions - Enhanced Content */}
      {enhancedContent?.featuredAgents && enhancedContent.featuredAgents.length > 0 && (
        <section style={{ padding: '100px 48px', background: '#f9fafb' }}>
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
                Featured Agent Factory Solutions
              </h2>
            </AnimatedSection>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: 32,
              }}
            >
              {enhancedContent.featuredAgents.map((agent, index) => (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <Card variant="hover" padding="lg" style={{ height: '100%' }}>
                    <h3
                      style={{
                        fontSize: '1.5rem',
                        fontWeight: 600,
                        color: '#111827',
                        marginBottom: 12,
                        fontFamily: "'R2Font', var(--font-inter), serif",
                      }}
                    >
                      {agent.name}
                    </h3>
                    <p
                      style={{
                        fontSize: '1rem',
                        color: '#6b7280',
                        lineHeight: 1.6,
                        margin: 0,
                      }}
                    >
                      {agent.description}
                    </p>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Use Cases - Fallback if no enhanced content */}
      {!enhancedContent && (
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
                How We Apply AI in {industry.name}
              </h2>
            </AnimatedSection>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: 32,
              }}
            >
              {industry.useCases.map((useCase, index) => (
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
                      {industry.icon}
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
                      {useCase}
                    </h3>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
            <div style={{ marginTop: 48, textAlign: 'center' }}>
              <Button asChild size="lg" variant="primary">
                <Link href={`/industries/${slug}/how-we-apply-ai`}>Learn More About Our Approach</Link>
              </Button>
            </div>
          </Container>
        </section>
      )}

      {/* Challenges & Solutions */}
      <section style={{ padding: '100px 48px', background: '#f9fafb' }}>
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
                Common Challenges
              </h2>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {industry.challenges.map((challenge, index) => (
                  <li
                    key={index}
                    style={{
                      padding: '20px 0',
                      borderBottom: index < industry.challenges.length - 1 ? '1px solid #e5e7eb' : 'none',
                      fontSize: '1.1rem',
                      color: '#374151',
                      lineHeight: 1.6,
                    }}
                  >
                    <span style={{ color: '#025082', marginRight: 12, fontSize: '1.2rem' }}>•</span>
                    {challenge}
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
                Our Solutions
              </h2>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {industry.solutions.map((solution, index) => (
                  <li
                    key={index}
                    style={{
                      padding: '20px 0',
                      borderBottom: index < industry.solutions.length - 1 ? '1px solid #e5e7eb' : 'none',
                      fontSize: '1.1rem',
                      color: '#374151',
                      lineHeight: 1.6,
                    }}
                  >
                    <span style={{ color: '#025082', marginRight: 12, fontSize: '1.2rem' }}>✓</span>
                    {solution}
                  </li>
                ))}
              </ul>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      {/* Sub-Industries */}
      {industry.subIndustries && industry.subIndustries.length > 0 && (
        <section style={{ padding: '100px 48px' }}>
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
                Specialized Solutions
              </h2>
            </AnimatedSection>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: 32,
              }}
            >
              {industry.subIndustries.map((subIndustry, index) => (
                <AnimatedSection key={subIndustry.id} delay={index * 0.1}>
                  <Link
                    href={`/industries/${slug}/${subIndustry.slug}`}
                    style={{ textDecoration: 'none' }}
                  >
                    <Card variant="hover" padding="lg" style={{ height: '100%' }}>
                      <h3
                        style={{
                          fontSize: '1.5rem',
                          fontWeight: 600,
                          color: '#111827',
                          marginBottom: 12,
                          fontFamily: "'R2Font', var(--font-inter), serif",
                        }}
                      >
                        {subIndustry.name}
                      </h3>
                      <p
                        style={{
                          fontSize: '1rem',
                          color: '#6b7280',
                          lineHeight: 1.6,
                          marginBottom: 20,
                        }}
                      >
                        {subIndustry.description}
                      </p>
                      <div style={{ color: '#025082', fontWeight: 500, fontSize: '0.9rem' }}>
                        Learn More →
                      </div>
                    </Card>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Enhanced Case Study - Enhanced Content */}
      {enhancedContent?.caseStudy && (
        <section style={{ padding: '100px 48px', background: '#fff' }}>
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
                Case Study: {enhancedContent.caseStudy.title}
              </h2>
              <Card variant="default" padding="lg">
                <div style={{ marginBottom: 32 }}>
                  <h3
                    style={{
                      fontSize: '1.5rem',
                      fontWeight: 600,
                      color: '#111827',
                      marginBottom: 16,
                      fontFamily: "'R2Font', var(--font-inter), serif",
                    }}
                  >
                    Situation
                  </h3>
                  <p
                    style={{
                      fontSize: '1.1rem',
                      color: '#374151',
                      lineHeight: 1.7,
                      margin: 0,
                    }}
                  >
                    {enhancedContent.caseStudy.situation}
                  </p>
                </div>
                <div style={{ marginBottom: 32 }}>
                  <h3
                    style={{
                      fontSize: '1.5rem',
                      fontWeight: 600,
                      color: '#111827',
                      marginBottom: 16,
                      fontFamily: "'R2Font', var(--font-inter), serif",
                    }}
                  >
                    Approach
                  </h3>
                  <p
                    style={{
                      fontSize: '1.1rem',
                      color: '#374151',
                      lineHeight: 1.7,
                      margin: 0,
                    }}
                  >
                    {enhancedContent.caseStudy.approach}
                  </p>
                </div>
                <div>
                  <h3
                    style={{
                      fontSize: '1.5rem',
                      fontWeight: 600,
                      color: '#111827',
                      marginBottom: 16,
                      fontFamily: "'R2Font', var(--font-inter), serif",
                    }}
                  >
                    Results
                  </h3>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {enhancedContent.caseStudy.results.map((result, index) => (
                      <li
                        key={index}
                        style={{
                          padding: '12px 0',
                          borderBottom: index < enhancedContent.caseStudy!.results.length - 1 ? '1px solid #e5e7eb' : 'none',
                          fontSize: '1.1rem',
                          color: '#374151',
                          lineHeight: 1.6,
                        }}
                      >
                        <span style={{ color: '#025082', marginRight: 12, fontSize: '1.2rem' }}>✓</span>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            </AnimatedSection>
          </Container>
        </section>
      )}

      {/* Case Studies - Fallback */}
      {!enhancedContent?.caseStudy && relatedCaseStudies.length > 0 && (
        <section style={{ padding: '90px 48px', background: '#fff' }}>
          <Container size="xl" className="max-w-6xl mx-auto">
            <AnimatedSection>
              <h2
                style={{
                  fontSize: 'clamp(2rem, 4vw, 2.5rem)',
                  fontWeight: 500,
                  color: '#111827',
                  textAlign: 'center',
                  marginBottom: 12,
                  fontFamily: "'R2Font', var(--font-inter), serif",
                }}
              >
                Proven Results in {industry.name}
              </h2>
              <p
                style={{
                  textAlign: 'center',
                  color: '#4b5563',
                  fontSize: '1.05rem',
                  marginBottom: 32,
                }}
              >
                Real deployments delivering measurable outcomes for organizations in {industry.name}.
              </p>
            </AnimatedSection>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: 24,
              }}
            >
              {relatedCaseStudies.map((cs, idx) => (
                <AnimatedSection key={cs.id} delay={idx * 0.05}>
                  <Card variant="hover" padding="lg" style={{ height: '100%', display: 'flex', flexDirection: 'column', gap: 12 }}>
                    <div style={{ fontWeight: 700, color: '#0f172a', fontSize: '1.15rem', fontFamily: "'R2Font', var(--font-inter), serif" }}>
                      {cs.title}
                    </div>
                    <div style={{ color: '#6b7280', fontSize: '0.95rem' }}>
                      {cs.timeline} • {cs.capability}
                    </div>
                    <p style={{ color: '#4b5563', lineHeight: 1.6, flex: 1 }}>{cs.summary}</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, color: '#025082', fontWeight: 600, fontSize: '0.95rem' }}>
                      {cs.results.slice(0, 2).map((result) => (
                        <span key={result} style={{ background: '#f3f4f6', padding: '6px 10px', borderRadius: 10 }}>
                          {result}
                        </span>
                      ))}
                    </div>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Integration Section */}
      <section style={{ padding: '100px 48px', background: '#f9fafb' }}>
        <Container size="lg" className="max-w-4xl mx-auto">
          <AnimatedSection>
            <div style={{ textAlign: 'center' }}>
              <h2
                style={{
                  fontSize: 'clamp(2rem, 4vw, 2.5rem)',
                  fontWeight: 500,
                  color: '#111827',
                  marginBottom: 24,
                  fontFamily: "'R2Font', var(--font-inter), serif",
                }}
              >
                Ready to Integrate AI into Your {industry.name} Operations?
              </h2>
              <p
                style={{
                  fontSize: '1.2rem',
                  color: '#6b7280',
                  marginBottom: 40,
                  lineHeight: 1.6,
                }}
              >
                Learn how we integrate AI agents into {industry.name.toLowerCase()} workflows, systems, and processes.
              </p>
              <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
                <Button asChild size="lg" variant="primary">
                  <Link href={`/industries/${slug}/integration`}>See Integration Approach</Link>
                </Button>
                <Button asChild size="lg" variant="secondary">
                  <Link href={`/contact?industry=${slug}`}>Get Started</Link>
                </Button>
              </div>
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
                See It Working in {industry.name}
              </h2>
              <p
                style={{
                  fontSize: '1.2rem',
                  color: '#6b7280',
                  marginBottom: 40,
                  lineHeight: 1.6,
                }}
              >
                Book a workshop and see industry-specific AI agents solving your exact challenge.
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
