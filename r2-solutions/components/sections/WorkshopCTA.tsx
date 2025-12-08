'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { GuaranteeBadge } from '@/components/ui/Badge';

const stats = [
  {
    value: '48',
    unit: 'Hours',
    label: 'From challenge to working prototype',
  },
  {
    value: '100%',
    unit: 'Guaranteed',
    label: 'Money back if not satisfied',
  },
  {
    value: 'Enterprise',
    unit: 'Grade',
    label: 'Built for scale from day one',
  },
];

export function WorkshopCTA() {
  return (
    <section className="relative py-32 lg:py-40 overflow-hidden">
      {/* LAYER 1: Dramatic gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#025082] via-[#013a5f] to-[#025082]" />

      {/* LAYER 2: Animated mesh gradient overlay */}
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 50%, rgba(255, 107, 53, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(107, 70, 193, 0.1) 0%, transparent 50%)
          `,
        }}
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'linear',
        }}
      />

      {/* LAYER 3: Subtle texture */}
      <div
        className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='3' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* LAYER 4: Top border accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      {/* LAYER 5: Bottom border accent */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      {/* LAYER 6: Floating geometric shapes */}
      <motion.div
        className="absolute top-20 right-20 w-64 h-64 border border-white/10 rounded-full hidden lg:block"
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 90, 0],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      <motion.div
        className="absolute bottom-20 left-20 w-96 h-96 border border-white/5 rounded-full hidden lg:block"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, -90, 0],
          opacity: [0.05, 0.15, 0.05],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* CONTENT */}
      <Container size="lg" className="relative z-10">
        {/* Badge - More Dramatic Entrance */}
        <AnimatedSection>
          <motion.div
            className="flex justify-center mb-16"
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.25, 0.1, 0.25, 1],
              type: 'spring',
              stiffness: 100,
            }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <GuaranteeBadge size="lg" />

              {/* Pulsing ring around badge */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-[#FF6B35]"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.5, 0, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            </div>
          </motion.div>
        </AnimatedSection>

        {/* Headline - More Dramatic */}
        <AnimatedSection delay={0.2}>
          <h2 className="font-serif text-5xl lg:text-6xl xl:text-7xl font-semibold text-white text-center mb-10 leading-[1.1]">
            <span className="block">The One-Day</span>
            <span className="block relative inline-block">
              AI Workshop
              {/* Underline accent */}
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#FF6B35] to-transparent"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
              />
            </span>
          </h2>
        </AnimatedSection>

        {/* Description - More Refined */}
        <AnimatedSection delay={0.3}>
          <p className="text-xl lg:text-2xl xl:text-3xl text-white/95 text-center max-w-4xl mx-auto leading-relaxed mb-20 font-light">
            Give us your biggest cross-sell challenge. We&apos;ll build working AI agents by end of day.{' '}
            <span className="font-semibold text-[#FF6B35]">
              If you don&apos;t see measurable value, we refund 100%.
            </span>
          </p>
        </AnimatedSection>

        {/* Stats Row - More Sophisticated */}
        <AnimatedSection delay={0.4}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-16">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="relative text-center group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                {/* Background glow on hover */}
                <div className="absolute inset-0 bg-white/5 rounded-2xl scale-95 group-hover:scale-100 transition-transform duration-300" />

                <div className="relative p-8">
                  {/* Value with unit */}
                  <div className="font-serif text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-2 leading-none">
                    {stat.value}
                  </div>
                  <div className="text-lg lg:text-xl text-[#FF6B35] font-medium mb-4">{stat.unit}</div>

                  {/* Divider */}
                  <div className="w-16 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent mx-auto mb-4" />

                  {/* Label */}
                  <div className="text-sm text-white/80 leading-relaxed">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        {/* CTA - More Prominent */}
        <AnimatedSection delay={0.7}>
          <div className="flex justify-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Button
                asChild
                size="xl"
                variant="primary"
                className="text-lg lg:text-xl px-12 lg:px-16 py-5 lg:py-6 shadow-[0_0_60px_rgba(255,107,53,0.3)]"
              >
                <Link href="/workshop">Book Your Workshop</Link>
              </Button>
            </motion.div>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
