'use client';

import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Button } from '@/components/ui/Button';

const phases = [
  {
    title: 'Phase 1: Discovery & Prioritization (Weeks 1–3)',
    items: [
      'Stakeholder interviews across leadership and operations',
      'Data infrastructure and quality assessment',
      'Process mapping for priority areas',
      'Competitive and market context analysis',
      'Opportunity identification and sizing',
    ],
    deliverable: 'Prioritized opportunity roadmap with business cases.',
  },
  {
    title: 'Phase 2: Solution Design (Weeks 2–5)',
    items: [
      'Solution architecture and integration planning',
      'Experience design and change plan',
      'Success metrics definition',
    ],
    deliverable: 'Detailed solution design with implementation plan.',
  },
  {
    title: 'Phase 3: Build & Deploy (Weeks 4–12)',
    items: [
      'Development of AI models, integrations, and interfaces',
      'Testing, validation, training, and phased deployment',
      'Performance monitoring and optimization',
    ],
    deliverable: 'Working solution in production with trained users.',
  },
  {
    title: 'Phase 4: Optimize & Scale (Ongoing)',
    items: [
      'Performance monitoring and model refinement',
      'Scope expansion to adjacent use cases',
      'Knowledge transfer and roadmap evolution',
    ],
    deliverable: 'Continuously improving solution with clear ownership.',
  },
];

const why = [
  { title: 'No Handoff Gaps', text: 'The team that designs it builds it. Context stays intact.' },
  { title: 'Accountability for Outcomes', text: 'We measure success by production value, not project milestones.' },
  { title: 'Speed to Value', text: 'Weeks to first value—fast enough to matter for competitive windows.' },
  { title: 'Sustainable Change', text: 'We build capability alongside systems so you can own and extend them.' },
];

export default function MethodologyPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="pb-20 pt-32 lg:pb-28 lg:pt-40">
        <Container size="lg">
          <AnimatedSection>
            <p className="text-center text-sm font-semibold uppercase tracking-[0.2em] text-[#025082]">
              The R² Method
            </p>
            <h1 className="mb-6 text-center font-serif text-5xl font-semibold leading-tight text-gray-900 lg:text-6xl">
              From Strategy to Value.
            </h1>
            <p className="mx-auto max-w-3xl text-center text-xl leading-relaxed text-gray-600 lg:text-2xl">
              One continuous process that closes the gap between recommendation and reality—designed to ship working AI
              in production.
            </p>
          </AnimatedSection>
        </Container>
      </section>

      {/* Phases */}
      <section className="bg-white pb-24 lg:pb-32">
        <Container size="xl">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:gap-14">
            {phases.map((phase, idx) => (
              <AnimatedSection key={phase.title} delay={idx * 0.05}>
                <div className="h-full rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
                  <h2 className="mb-4 font-serif text-2xl font-semibold text-gray-900">{phase.title}</h2>
                  <ul className="mb-4 space-y-2 text-lg leading-relaxed text-gray-600">
                    {phase.items.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="text-[#025082]">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm font-semibold uppercase tracking-[0.08em] text-[#025082]">
                    Deliverable: <span className="text-gray-800 normal-case">{phase.deliverable}</span>
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      {/* Why it works */}
      <section className="bg-[#f9fafb] py-24 lg:py-32">
        <Container size="lg">
          <AnimatedSection>
            <h2 className="mb-10 text-center font-serif text-4xl font-semibold text-gray-900 lg:text-5xl">
              Why This Works
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
            {why.map((item, idx) => (
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

      {/* Team composition */}
      <section className="bg-white py-24 lg:py-32">
        <Container size="lg">
          <AnimatedSection>
            <div className="text-center">
              <h2 className="mb-4 font-serif text-4xl font-semibold text-gray-900 lg:text-5xl">Team Composition</h2>
              <p className="mx-auto max-w-3xl text-xl leading-relaxed text-gray-600">
                Every engagement blends strategy, engineering, data science, operations, and change leadership so we can
                ship and sustain production systems.
              </p>
            </div>
          </AnimatedSection>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              'Strategy & Business: opportunity identification, business cases, and prioritization',
              'Data Science & AI: models built for production reality',
              'Engineering: integrations, reliability, and performance',
              'Operations: workflow design, process change, and adoption',
              'Project Leadership: stakeholder alignment and delivery',
            ].map((item, idx) => (
              <AnimatedSection key={item} delay={idx * 0.05}>
                <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                  <p className="text-lg leading-relaxed text-gray-700">{item}</p>
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
                Ready to See the Method in Action?
              </h2>
              <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-gray-600">
                Book a workshop and watch us move from problem to working AI in days—not months.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Button asChild size="lg" variant="primary">
                  <Link href="/workshop">Book Workshop</Link>
                </Button>
                <Button asChild size="lg" variant="secondary">
                  <Link href="/contact">Talk to the Team</Link>
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </Container>
      </section>
    </div>
  );
}
