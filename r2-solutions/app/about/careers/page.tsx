'use client';

import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Button } from '@/components/ui/Button';

const qualities = [
  { title: 'Builders', text: 'People who create and ship, not just analyze.' },
  { title: 'Business Thinkers', text: 'Technology choices grounded in business outcomes.' },
  { title: 'Problem Solvers', text: 'Comfortable with ambiguity and able to find paths forward.' },
  { title: 'Learners', text: 'Curious and adaptable—skills evolve as AI evolves.' },
  { title: 'Communicators', text: 'Clear with executives, operators, and engineers alike.' },
];

const roles = [
  'Senior AI Engineers: build production AI systems for enterprise clients',
  'Data Scientists: design and implement ML solutions tied to outcomes',
  'Solution Architects: connect strategy to end-to-end technical design',
  'Engagement Managers: lead delivery and stakeholder relationships',
  'Business Development: build relationships and drive growth',
];

const reasons = [
  { title: 'Impact', text: 'See your work running in production, driving real outcomes.' },
  { title: 'Ownership', text: 'Small, senior teams where every contribution is visible.' },
  { title: 'Growth', text: 'Work across industries, technologies, and problem types.' },
  { title: 'Flexibility', text: 'Remote-first with autonomy in how you deliver.' },
  { title: 'Equity', text: 'We’re building something valuable—and you share in it.' },
];

export default function CareersPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="pb-20 pt-32 lg:pb-28 lg:pt-40">
        <Container size="lg">
          <AnimatedSection>
            <p className="text-center text-sm font-semibold uppercase tracking-[0.2em] text-[#025082]">Careers</p>
            <h1 className="mb-6 text-center font-serif text-5xl font-semibold leading-tight text-gray-900 lg:text-6xl">
              Join the team changing consulting.
            </h1>
            <p className="mx-auto max-w-3xl text-center text-xl leading-relaxed text-gray-600 lg:text-2xl">
              Tired of decks that never ship? Come build AI that reaches production and makes businesses measurably
              better.
            </p>
          </AnimatedSection>
        </Container>
      </section>

      {/* Qualities */}
      <section className="bg-white pb-24 lg:pb-32">
        <Container size="lg">
          <AnimatedSection>
            <h2 className="mb-10 text-center font-serif text-4xl font-semibold text-gray-900 lg:text-5xl">
              Who We Look For
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
            {qualities.map((item, idx) => (
              <AnimatedSection key={item.title} delay={idx * 0.05}>
                <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
                  <h3 className="mb-3 font-serif text-2xl font-semibold text-gray-900">{item.title}</h3>
                  <p className="text-lg leading-relaxed text-gray-600">{item.text}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      {/* Roles */}
      <section className="bg-[#f9fafb] py-24 lg:py-32">
        <Container size="lg">
          <AnimatedSection>
            <h2 className="mb-6 text-center font-serif text-4xl font-semibold text-gray-900 lg:text-5xl">Open Roles</h2>
            <p className="mx-auto mb-10 max-w-2xl text-center text-lg leading-relaxed text-gray-600">
              Don’t see your exact title? Reach out—we hire for capability and impact.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 gap-4">
            {roles.map((role, idx) => (
              <AnimatedSection key={role} delay={idx * 0.04}>
                <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                  <p className="text-lg leading-relaxed text-gray-700">{role}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      {/* Reasons */}
      <section className="bg-white py-24 lg:py-32">
        <Container size="lg">
          <AnimatedSection>
            <h2 className="mb-6 text-center font-serif text-4xl font-semibold text-gray-900 lg:text-5xl">Why R²</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
            {reasons.map((item, idx) => (
              <AnimatedSection key={item.title} delay={idx * 0.05}>
                <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
                  <h3 className="mb-3 font-serif text-2xl font-semibold text-gray-900">{item.title}</h3>
                  <p className="text-lg leading-relaxed text-gray-600">{item.text}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-[#f9fafb] py-24 lg:py-32">
        <Container size="md">
          <AnimatedSection>
            <div className="text-center">
              <h2 className="mb-4 font-serif text-4xl font-semibold text-gray-900 lg:text-5xl">
                Ready to build with us?
              </h2>
              <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-gray-600">
                Tell us what you want to build and why R². We’ll reach out to explore fit.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Button asChild size="lg" variant="primary">
                  <Link href="/contact">Introduce Yourself</Link>
                </Button>
                <Button asChild size="lg" variant="secondary">
                  <Link href="/about/leadership">Meet the Leadership</Link>
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </Container>
      </section>
    </div>
  );
}
