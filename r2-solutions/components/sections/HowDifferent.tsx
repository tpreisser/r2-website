'use client';

import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { motion } from 'framer-motion';

const approaches = [
  {
    step: '01',
    title: 'Discovery Sprint',
    description:
      'One-day deep dive into your processes, data, and goals. We identify the highest-impact opportunities for AI automation.',
    color: '#025082',
  },
  {
    step: '02',
    title: 'Prototype Delivery',
    description:
      'Working AI agents within 48 hours. Not mockups or slide decks—real, functional automation you can test immediately.',
    color: '#FF6B35',
  },
  {
    step: '03',
    title: 'Production Scale',
    description:
      'Enterprise-grade deployment with full integration, security, and compliance built in from day one.',
    color: '#025082',
  },
];

export function HowDifferent() {
  return (
    <section className="section-premium relative overflow-hidden bg-gray-50">
      {/* Layered background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-gray-100" />

      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#025082]/10 to-transparent" />

      <Container size="lg" className="relative z-10">
        <AnimatedSection>
          <h2 className="section-headline text-gray-900 text-center mb-8">
            Our Process
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <p className="body-premium text-gray-600 text-center max-w-2xl mx-auto mb-20">
            A proven methodology that delivers results, not reports.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {approaches.map((approach, index) => (
            <AnimatedSection key={index} delay={0.2 + index * 0.15}>
              <motion.div whileHover={{ y: -8 }} transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}>
                <Card variant="hover" padding="lg" className="h-full bg-white relative overflow-hidden">
                  {/* Step number - large background */}
                  <div
                    className="absolute -top-4 -right-4 font-serif text-[120px] font-bold leading-none opacity-[0.04]"
                    style={{ color: approach.color }}
                  >
                    {approach.step}
                  </div>

                  {/* Step indicator */}
                  <div
                    className="inline-flex items-center gap-2 text-sm font-semibold mb-8"
                    style={{ color: approach.color }}
                  >
                    <div className="w-8 h-0.5" style={{ backgroundColor: approach.color }} />
                    Step {approach.step}
                  </div>

                  <h3 className="font-serif text-2xl lg:text-3xl font-semibold text-gray-900 mb-6">{approach.title}</h3>

                  <p className="body-premium text-gray-600">{approach.description}</p>
                </Card>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
