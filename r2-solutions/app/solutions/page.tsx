'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Card } from '@/components/ui/Card';
import { usePathname, useSearchParams } from 'next/navigation';

const solutions = [
  {
    id: 'agent-factory',
    title: 'Agent Factory Platform',
    description:
      'Our proprietary infrastructure for building, deploying, and managing industry-specific AI agents at scale.',
    features: [
      'Purpose-built for your industry',
      'Rapid deployment (days, not months)',
      'Full code ownership',
      'Enterprise-grade security',
    ],
  },
  {
    id: 'cross-sell',
    title: 'Cross-Sell Automation',
    description:
      'AI agents that understand your customer base and identify the right products at the right time.',
    features: [
      'Real-time customer analysis',
      'Personalized recommendations',
      'Seamless CRM integration',
      'Measurable ROI tracking',
    ],
  },
  {
    id: 'back-office',
    title: 'Back-Office Automation',
    description:
      'Streamline operations with AI agents that handle repetitive tasks, freeing your team for strategic work.',
    features: [
      'Process automation',
      'Document processing',
      'Data extraction & validation',
      'Workflow optimization',
    ],
  },
  {
    id: 'integration',
    title: 'Integration Services',
    description:
      'Seamlessly connect AI agents with your existing systems, ensuring smooth data flow and operations.',
    features: [
      'API integration',
      'Legacy system connectivity',
      'Data pipeline setup',
      'Ongoing support',
    ],
  },
];

export default function SolutionsPage() {
  const pathname = usePathname();

  // Handle hash scrolling when page loads or hash changes
  useEffect(() => {
    const scrollToHash = () => {
      const hash = window.location.hash.slice(1);
      if (hash) {
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            const headerOffset = 120;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth',
            });
          }
        }, 300);
      }
    };

    scrollToHash();
    window.addEventListener('hashchange', scrollToHash);
    return () => window.removeEventListener('hashchange', scrollToHash);
  }, [pathname]);

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-gray-50 to-white pb-24 pt-32 lg:pb-32 lg:pt-40">
        <Container size="lg">
          <AnimatedSection>
            <h1 className="mb-6 text-center font-serif text-5xl font-semibold text-gray-900 lg:text-6xl">
              Solutions That Deliver
            </h1>
            <p className="mx-auto max-w-3xl text-center text-xl leading-relaxed text-gray-600 lg:text-2xl">
              Purpose-built AI agents designed for your industry, your challenges, your success.
            </p>
          </AnimatedSection>
        </Container>
      </section>

      {/* Solutions Grid */}
      <section className="bg-white py-24 lg:py-32">
        <Container size="xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-10">
            {solutions.map((solution, index) => (
              <AnimatedSection key={solution.id} delay={index * 0.1}>
                <Card variant="hover" padding="lg" id={solution.id}>
                  <h2 className="mb-4 font-serif text-2xl font-semibold text-gray-900 lg:text-3xl">
                    {solution.title}
                  </h2>
                  <p className="mb-6 text-lg leading-relaxed text-gray-600">{solution.description}</p>
                  <ul className="mb-8 space-y-2">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2 text-gray-700">
                        <span className="mt-1 text-[#025082]">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild variant="secondary">
                    <Link href={solution.id === 'agent-factory' ? '/agent-factory' : `/contact?subject=${solution.id}`}>
                      {solution.id === 'agent-factory' ? 'View Agent Factory' : 'Learn More'}
                    </Link>
                  </Button>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 py-32 lg:py-40">
        <Container size="md">
          <AnimatedSection>
            <h2 className="mb-8 text-center font-serif text-4xl font-semibold text-gray-900 lg:text-5xl">
              Ready to See It in Action?
            </h2>
            <p className="mx-auto mb-12 max-w-2xl text-center text-xl text-gray-600">
              Book a workshop and see working AI agents solving your challenge in 48 hours.
            </p>
            <div className="flex flex-col gap-4 justify-center sm:flex-row">
              <Button asChild size="lg" variant="primary">
                <Link href="/workshop">Book Workshop</Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </AnimatedSection>
        </Container>
      </section>
    </div>
  );
}

