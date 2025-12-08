'use client';

import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { ContactForm } from '@/components/forms/ContactForm';
import { ContactSharing } from '@/components/forms/ContactSharing';

export default function ContactPage() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-white via-gray-50/50 to-white">
      {/* Animated Liquid Glass Background Layers */}
      <section ref={sectionRef} className="relative pb-24 pt-32 lg:pb-32 lg:pt-40">
        {/* Layer 1: Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50/30 to-white" />

        {/* Layer 2: Animated mesh gradient */}
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 30%, rgba(2, 80, 130, 0.08) 0%, transparent 50%),
              radial-gradient(circle at 80% 70%, rgba(255, 107, 53, 0.08) 0%, transparent 50%),
              radial-gradient(circle at 50% 50%, rgba(2, 80, 130, 0.05) 0%, transparent 70%)
            `,
            y,
            opacity,
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

        {/* Layer 3: Subtle grain texture */}
        <motion.div
          className="absolute inset-0 opacity-[0.02] mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='3' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            y: useTransform(scrollYProgress, [0, 1], [0, 50]),
          }}
        />

        {/* Layer 4: Floating orbs */}
        <motion.div
          className="absolute left-10 top-20 h-64 w-64 rounded-full bg-gradient-to-br from-[#025082]/10 to-transparent blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, 20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 h-96 w-96 rounded-full bg-gradient-to-br from-[#FF6B35]/10 to-transparent blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, -20, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Layer 5: Top border accent */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#025082]/20 to-transparent" />

        <Container size="lg" className="relative z-10">
          <AnimatedSection>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="mb-12 text-center"
            >
              <h1 className="mb-6 font-serif text-5xl font-semibold text-gray-900 lg:text-7xl">
                Let&apos;s Talk
              </h1>
              <p className="mx-auto max-w-2xl text-xl text-gray-600 lg:text-2xl">
                Book a workshop. Ask a question. Start the conversation.
              </p>
            </motion.div>
          </AnimatedSection>

          {/* Contact Sharing Options */}
          <AnimatedSection delay={0.1}>
            <div className="mb-16 rounded-3xl border border-white/30 bg-white/40 p-8 backdrop-blur-2xl shadow-2xl lg:p-12">
              <ContactSharing />
            </div>
          </AnimatedSection>

          {/* Divider */}
          <AnimatedSection delay={0.2}>
            <div className="relative mb-16">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200/50"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="rounded-full bg-white/80 px-4 py-2 text-sm font-medium text-gray-600 backdrop-blur-sm">
                  Or fill out the form
                </span>
              </div>
            </div>
          </AnimatedSection>

          {/* Contact Form */}
          <AnimatedSection delay={0.3}>
            <div className="rounded-3xl border border-white/30 bg-white/40 p-8 backdrop-blur-2xl shadow-2xl lg:p-12">
              <ContactForm />
            </div>
          </AnimatedSection>

        </Container>
      </section>
    </div>
  );
}
