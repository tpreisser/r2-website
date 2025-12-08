'use client';

import { motion } from 'framer-motion';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Container } from '@/components/ui/Container';
import { AgentFactoryIcon, IndustryExpertiseIcon, SpeedIcon } from '@/components/icons/PremiumIcons';

const differences = [
  {
    title: 'Agent Factory',
    description:
      "We don't build generic AI. We build AI agents purpose-built for your industry's workflows, compliance requirements, and data structures.",
    icon: <AgentFactoryIcon />,
    highlight: 'Industry-Specific',
  },
  {
    title: 'Deep Expertise',
    description:
      'Our team has decades of combined experience in insurance, healthcare, and financial services. We speak your language.',
    icon: <IndustryExpertiseIcon />,
    highlight: 'Domain Knowledge',
  },
  {
    title: 'Speed to Value',
    description:
      'While others spend months on discovery, we deliver working prototypes in 48 hours. Production-ready in weeks.',
    icon: <SpeedIcon />,
    highlight: '48 Hour Delivery',
  },
];

export function Difference() {
  return (
    <section className="section-premium relative overflow-hidden bg-white" id="difference">
      {/* Subtle texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54.627 0l.83.828-1.415 1.415L51.8 0h2.827zM5.373 0l-.83.828L5.958 2.243 8.2 0H5.374zM48.97 0l3.657 3.657-1.414 1.414L46.143 0h2.828zM11.03 0L7.372 3.657 8.787 5.07 13.857 0H11.03zm32.284 0L49.8 6.485 48.384 7.9l-7.9-7.9h2.83zM16.686 0L10.2 6.485 11.616 7.9l7.9-7.9h-2.83zm20.97 0l9.315 9.314-1.414 1.414L34.828 0h2.83zM22.344 0L13.03 9.314l1.414 1.414L25.172 0h-2.83zM32 0l12.142 12.142-1.414 1.414L30 .828 17.272 13.556l-1.414-1.414L28 0h4zM.284 0l28 28-1.414 1.414L0 2.544V0h.284zM0 5.373l25.456 25.455-1.414 1.415L0 8.2V5.374zm0 5.656l22.627 22.627-1.414 1.414L0 13.86v-2.83zm0 5.656l19.8 19.8-1.415 1.413L0 19.514v-2.83zm0 5.657l16.97 16.97-1.414 1.415L0 25.172v-2.83zM0 28l14.142 14.142-1.414 1.414L0 30.828V28z' fill='%23025082' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          backgroundSize: '30px 30px',
        }}
      />

      <Container size="lg" className="relative z-10">
        <AnimatedSection>
          <h2 className="section-headline text-gray-900 text-center mb-8">
            We Built a<br />Different Model
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <p className="body-premium text-gray-600 text-center max-w-2xl mx-auto mb-24">
            Not just another AI consultancy. A specialized team focused entirely on delivering real results.
          </p>
        </AnimatedSection>

        <div className="space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-16">
          {differences.map((diff, index) => (
            <AnimatedSection key={index} delay={0.2 + index * 0.15}>
              <motion.div
                className="relative text-center group"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              >
                {/* Background glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#025082]/5 to-transparent rounded-3xl scale-0 group-hover:scale-100 transition-transform duration-500 -z-10" />

                {/* Highlight badge */}
                <div className="inline-flex items-center gap-2 bg-[#025082]/5 text-[#025082] text-sm font-semibold px-4 py-1.5 rounded-full mb-8">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B35]" />
                  {diff.highlight}
                </div>

                {/* Premium icon */}
                <div className="mb-10 transform transition-transform duration-500 group-hover:scale-110">
                  {diff.icon}
                </div>

                <h3 className="font-serif text-3xl lg:text-4xl font-semibold text-gray-900 mb-6">{diff.title}</h3>

                <p className="body-premium text-gray-600 max-w-sm mx-auto">{diff.description}</p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
