'use client';

import { motion } from 'framer-motion';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Container } from '@/components/ui/Container';
import { MoneyWastedIcon, GenericAIIcon, PilotPurgatoryIcon } from '@/components/icons/PremiumIcons';

const problems = [
  {
    title: 'Millions Wasted',
    description: 'Spending millions on AI consultants with nothing to show for it.',
    icon: <MoneyWastedIcon />,
  },
  {
    title: 'Generic Solutions',
    description: "Off-the-shelf tools that don't understand your business or industry.",
    icon: <GenericAIIcon />,
  },
  {
    title: 'Pilot Purgatory',
    description: 'Endless pilots and POCs that never make it to production.',
    icon: <PilotPurgatoryIcon />,
  },
];

export function Problem() {
  return (
    <section className="section-premium relative overflow-hidden" id="approach">
      {/* Layered background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50" />

      {/* Texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23025082' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '30px 30px',
        }}
      />

      {/* Top gradient border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#025082]/10 to-transparent" />

      <Container size="lg" className="relative z-10">
        <AnimatedSection>
          <h2 className="section-headline text-gray-900 text-center mb-8">
            Your AI Implementation
            <br />
            Is Stuck
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <p className="body-premium text-gray-600 text-center max-w-2xl mx-auto mb-24">
            You&apos;ve tried the big consulting firms. You&apos;ve tested the generic tools. Nothing works.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20 mb-24">
          {problems.map((problem, index) => (
            <AnimatedSection key={index} delay={0.2 + index * 0.15}>
              <div className="text-center group">
                {/* Premium icon */}
                <div className="mb-10 transform transition-transform duration-500 group-hover:scale-110">
                  {problem.icon}
                </div>

                <h3 className="font-serif text-2xl lg:text-3xl font-semibold text-gray-900 mb-6">
                  {problem.title}
                </h3>

                <p className="body-premium text-gray-600">{problem.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.7}>
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-4 text-xl lg:text-2xl text-[#025082] font-medium"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M5 12H19M19 12L12 5M19 12L12 19"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              There&apos;s a better way.
            </motion.div>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
