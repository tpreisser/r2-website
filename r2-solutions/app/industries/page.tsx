'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Card } from '@/components/ui/Card';
import { usePathname } from 'next/navigation';
import { industries } from '@/lib/industries';

export default function IndustriesPage() {
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
      <section className="bg-white pb-24 pt-32 lg:pb-32 lg:pt-40">
        <Container size="lg">
          <AnimatedSection>
            <h1 className="mb-6 text-center font-serif text-5xl font-semibold text-gray-900 lg:text-6xl">
              Industries We Serve
            </h1>
            <p className="mx-auto max-w-3xl text-center text-xl leading-relaxed text-gray-600 lg:text-2xl">
              Industry-specific agents built for your exact workflow, regulations, and challenges.
            </p>
          </AnimatedSection>
        </Container>
      </section>

      {/* Industries Grid */}
      <section className="bg-white py-24 lg:py-32">
        <Container size="xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-10">
            {industries.map((industry, index) => (
              <AnimatedSection key={industry.id} delay={index * 0.1}>
                <Card variant="hover" padding="lg" id={industry.id}>
                  <div className="mb-6 flex items-center gap-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-white border border-gray-100 text-4xl">
                      {industry.icon}
                    </div>
                    <h2 className="font-serif text-2xl font-semibold text-gray-900 lg:text-3xl">
                      {industry.name}
                    </h2>
                  </div>
                  <p className="mb-6 text-lg leading-relaxed text-gray-600">{industry.description}</p>
                  <div className="mb-8">
                    <h3 className="mb-4 font-semibold text-gray-900">Key Use Cases:</h3>
                    <ul className="space-y-2">
                      {industry.useCases.slice(0, 4).map((useCase, useCaseIndex) => (
                        <li key={useCaseIndex} className="flex items-start gap-2 text-gray-700">
                          <span className="mt-1 text-[#025082]">•</span>
                          <span>{useCase}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex gap-3">
                    <Button asChild variant="secondary">
                      <Link href={`/industries/${industry.slug}`}>Learn More</Link>
                    </Button>
                    <Button asChild variant="primary">
                      <Link href={`/contact?industry=${industry.id}`}>Get Started</Link>
                    </Button>
                  </div>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-white py-32 lg:py-40">
        <Container size="md">
          <AnimatedSection>
            <h2 className="mb-8 text-center font-serif text-4xl font-semibold text-gray-900 lg:text-5xl">
              See It Working in Your Industry
            </h2>
            <p className="mx-auto mb-12 max-w-2xl text-center text-xl text-gray-600">
              Book a workshop and see industry-specific AI agents solving your exact challenge.
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

