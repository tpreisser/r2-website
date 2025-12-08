'use client';

import { Container } from '@/components/ui/Container';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

const leaders = [
  {
    name: 'Rich Rivara',
    title: 'CEO & Co-Founder',
    bio: 'Two decades at the intersection of strategy, operations, and technology—leading transformations at PE-backed companies, top-tier consulting, and building/selling a tech company.',
    quote:
      "Most AI initiatives fail not because the technology doesn't work, but because organizations don't change around it. We solve the whole problem—technology and transformation together.",
  },
  {
    name: 'Will Godfrey',
    title: 'CTO & Co-Founder',
    bio: 'Technologist fluent in business. Built AI systems for Fortune 500s, led data science at high-growth startups, and contributed to widely used open-source AI projects.',
    quote: 'The best AI is invisible. It just makes things work better. That’s what we build.',
  },
  {
    name: 'Tyler Preisser',
    title: 'Associate Partner & Co-Founder',
    bio: 'Bridges technical depth with operational instinct—experience across technology, sales leadership, and operations management from architecture to go-to-market.',
    quote:
      "I've been on the receiving end of consulting engagements that delivered nothing but PowerPoints. We built R² to be the firm I wished existed—one that actually makes things work.",
  },
];

export default function LeadershipPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="pb-16 pt-32 lg:pb-24 lg:pt-40">
        <Container size="lg">
          <AnimatedSection>
            <p className="text-center text-sm font-semibold uppercase tracking-[0.2em] text-[#025082]">Leadership</p>
            <h1 className="mb-6 text-center font-serif text-5xl font-semibold leading-tight text-gray-900 lg:text-6xl">
              Builders. Operators. Strategists.
            </h1>
            <p className="mx-auto max-w-3xl text-center text-xl leading-relaxed text-gray-600 lg:text-2xl">
              The team that connects strategy to shipped software—and stands accountable for outcomes.
            </p>
          </AnimatedSection>
        </Container>
      </section>

      {/* Cards */}
      <section className="bg-white pb-28 lg:pb-36">
        <Container size="xl">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
            {leaders.map((leader, idx) => (
              <AnimatedSection key={leader.name} delay={idx * 0.05}>
                <div className="h-full rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
                  <h3 className="mb-1 font-serif text-2xl font-semibold text-gray-900">{leader.name}</h3>
                  <p className="mb-4 text-base font-medium text-[#025082]">{leader.title}</p>
                  <p className="mb-4 text-lg leading-relaxed text-gray-600">{leader.bio}</p>
                  <blockquote className="border-l-4 border-[#025082] bg-gray-50 px-4 py-3 text-gray-800">
                    {leader.quote}
                  </blockquote>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
