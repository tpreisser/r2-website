'use client';

import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Button } from '@/components/ui/Button';

const principles = [
  { title: 'Start with the Problem', text: 'AI is only valuable when tied to a business outcome. We begin with the pain point, not the model.' },
  { title: 'Right Tool for the Job', text: 'We are tech-agnostic. We choose platforms and models that fit your stack, data, and team.' },
  { title: 'Prefer Proven Over Novel', text: 'Production reliability beats novelty. We use cutting-edge where it matters and proven where it counts.' },
  { title: 'Build for Maintainability', text: 'Solutions must be supportable by your team—clean architectures, clear docs, standard tooling.' },
  { title: 'Plan for Change', text: 'Requirements evolve. We design for adaptability without rewrites.' },
];

const capabilities = [
  { title: 'AI & Machine Learning', items: ['LLMs (GPT-4, Claude, Llama, fine-tuning)', 'Traditional ML: classification, regression, forecasting', 'Computer vision and document processing', 'Recommendations and NLP'] },
  { title: 'Data Engineering', items: ['Pipelines and orchestration', 'Warehouse/lake architecture', 'Streaming and real-time data', 'Data quality and governance', 'Cloud data platforms (Snowflake, Databricks, BigQuery)'] },
  { title: 'Software Engineering', items: ['Production app development', 'API design and integration', 'Cloud infrastructure (AWS, Azure, GCP)', 'MLOps and deployment', 'Security and compliance'] },
  { title: 'Analytics & Visualization', items: ['BI and dashboards', 'Advanced analytics and statistics', 'Data storytelling', 'Self-service enablement'] },
];

export default function TechnologyPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="pb-20 pt-32 lg:pb-28 lg:pt-40">
        <Container size="lg">
          <AnimatedSection>
            <p className="text-center text-sm font-semibold uppercase tracking-[0.2em] text-[#025082]">
              Our Technology Philosophy
            </p>
            <h1 className="mb-6 text-center font-serif text-5xl font-semibold leading-tight text-gray-900 lg:text-6xl">
              Pragmatic Innovation.
            </h1>
            <p className="mx-auto max-w-3xl text-center text-xl leading-relaxed text-gray-600 lg:text-2xl">
              Technology is the means, not the end. We pair proven approaches with the right innovation to deliver durable outcomes.
            </p>
          </AnimatedSection>
        </Container>
      </section>

      {/* Principles */}
      <section className="bg-white pb-24 lg:pb-32">
        <Container size="xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
            {principles.map((item, idx) => (
              <AnimatedSection key={item.title} delay={idx * 0.05}>
                <div className="h-full rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
                  <h2 className="mb-3 font-serif text-2xl font-semibold text-gray-900">{item.title}</h2>
                  <p className="text-lg leading-relaxed text-gray-600">{item.text}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      {/* Capabilities */}
      <section className="bg-[#f9fafb] py-24 lg:py-32">
        <Container size="lg">
          <AnimatedSection>
            <h2 className="mb-6 text-center font-serif text-4xl font-semibold text-gray-900 lg:text-5xl">
              Technical Capabilities
            </h2>
            <p className="mx-auto mb-10 max-w-3xl text-center text-lg leading-relaxed text-gray-600">
              Full-stack delivery from data to experience. We assemble the right mix for each engagement—no preferred vendors, only best fit.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {capabilities.map((cap, idx) => (
              <AnimatedSection key={cap.title} delay={idx * 0.05}>
                <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
                  <h3 className="mb-4 font-serif text-2xl font-semibold text-gray-900">{cap.title}</h3>
                  <ul className="space-y-2 text-lg leading-relaxed text-gray-600">
                    {cap.items.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="text-[#025082]">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-white py-24 lg:py-32">
        <Container size="md">
          <AnimatedSection>
            <div className="text-center">
              <h2 className="mb-4 font-serif text-4xl font-semibold text-gray-900 lg:text-5xl">
                Want the right stack for your reality?
              </h2>
              <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-gray-600">
                Tell us your constraints and goals. We’ll design and build the architecture that gets you to value fastest—without locking you in.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Button asChild size="lg" variant="primary">
                  <Link href="/contact">Talk to Engineering</Link>
                </Button>
                <Button asChild size="lg" variant="secondary">
                  <Link href="/workshop">Book a Workshop</Link>
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </Container>
      </section>
    </div>
  );
}
