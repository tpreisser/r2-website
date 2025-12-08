'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

const industries = [
  {
    title: 'Insurance',
    description: 'Automate underwriting, claims processing, and cross-sell identification with AI agents.',
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 40 40" stroke="currentColor" strokeWidth="1.5">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M20 4l14 6v10c0 8-6 14-14 18-8-4-14-10-14-18V10l14-6z"
        />
        <path strokeLinecap="round" strokeLinejoin="round" d="M14 20l4 4 8-8" />
      </svg>
    ),
    color: '#025082',
    href: '/industries/insurance',
  },
  {
    title: 'Healthcare',
    description: 'Streamline patient intake, billing, and clinical workflows with compliant automation.',
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 40 40" stroke="currentColor" strokeWidth="1.5">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M20 8v24M8 20h24M12 12h16v16H12V12z"
        />
      </svg>
    ),
    color: '#FF6B35',
    href: '/industries/healthcare',
  },
  {
    title: 'Financial Services',
    description: 'Accelerate loan processing, fraud detection, and customer onboarding.',
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 40 40" stroke="currentColor" strokeWidth="1.5">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M20 4v6M20 30v6M34 20h-6M12 20H6M28 12l-4 4M16 24l-4 4M12 12l4 4M24 24l4 4"
        />
        <circle cx="20" cy="20" r="8" />
      </svg>
    ),
    color: '#025082',
    href: '/industries/financial-services',
  },
];

export function Industries() {
  return (
    <section className="section-premium relative overflow-hidden bg-white" id="industries">
      {/* Subtle pattern */}
      <div
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #025082 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}
      />

      <Container size="lg" className="relative z-10">
        <AnimatedSection>
          <h2 className="section-headline text-gray-900 text-center mb-8">
            Built for Your Industry
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <p className="body-premium text-gray-600 text-center max-w-2xl mx-auto mb-20">
            Deep expertise in regulated industries where generic AI fails.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-16">
          {industries.map((industry, index) => (
            <AnimatedSection key={index} delay={0.2 + index * 0.15}>
              <Link href={industry.href}>
                <motion.div
                  className="group relative p-10 rounded-2xl bg-white border border-gray-200 transition-all duration-500 hover:border-transparent hover:shadow-premium cursor-pointer h-full"
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  {/* Hover gradient background */}
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
                    style={{
                      background: `linear-gradient(135deg, ${industry.color}05 0%, ${industry.color}10 100%)`,
                    }}
                  />

                  {/* Icon with animated background */}
                  <div className="relative mb-8">
                    <div
                      className="w-16 h-16 rounded-xl flex items-center justify-center transition-all duration-500 group-hover:scale-110"
                      style={{
                        backgroundColor: `${industry.color}08`,
                        color: industry.color,
                      }}
                    >
                      {industry.icon}
                    </div>

                    {/* Animated ring */}
                    <motion.div
                      className="absolute inset-0 rounded-xl border-2 opacity-0 group-hover:opacity-100"
                      style={{ borderColor: industry.color }}
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0, 0.3],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    />
                  </div>

                  <h3 className="font-serif text-2xl lg:text-3xl font-semibold text-gray-900 mb-4 group-hover:text-[#025082] transition-colors">
                    {industry.title}
                  </h3>

                  <p className="body-premium text-gray-600 mb-6">{industry.description}</p>

                  {/* Learn more link */}
                  <div
                    className="inline-flex items-center gap-2 text-sm font-semibold transition-all duration-300 group-hover:gap-3"
                    style={{ color: industry.color }}
                  >
                    Learn more
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </motion.div>
              </Link>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.6}>
          <div className="flex justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="/industries">View All Industries</Link>
            </Button>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
