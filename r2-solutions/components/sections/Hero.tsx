'use client';

import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { useRef } from 'react';

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center overflow-hidden">
      {/* LAYER 1: Base background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50/50 to-white" />

      {/* LAYER 2: Animated grain texture */}
      <motion.div
        className="absolute inset-0 opacity-[0.015] mix-blend-multiply pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='4' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px',
          y,
        }}
      />

      {/* LAYER 3: Top gradient border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#025082]/20 to-transparent" />

      {/* LAYER 4: Large R² watermark - REFINED */}
      <motion.div
        className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none select-none hidden lg:block"
        style={{ opacity }}
      >
        <svg
          viewBox="0 0 600 600"
          className="w-[800px] h-[800px] xl:w-[1000px] xl:h-[1000px]"
          style={{ filter: 'blur(0.5px)' }}
        >
          {/* R² in ultra-light weight */}
          <text
            x="50%"
            y="50%"
            textAnchor="middle"
            dominantBaseline="middle"
            className="font-serif"
            style={{
              fontSize: '420px',
              fontWeight: 300,
              fill: '#025082',
              opacity: 0.04,
              letterSpacing: '-0.05em',
            }}
          >
            R²
          </text>

          {/* Accent lines - geometric sophistication */}
          <motion.line
            x1="100"
            y1="300"
            x2="500"
            y2="300"
            stroke="#025082"
            strokeWidth="2"
            opacity="0.15"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 0.5, ease: 'easeInOut' }}
          />

          <motion.line
            x1="150"
            y1="320"
            x2="400"
            y2="320"
            stroke="#FF6B35"
            strokeWidth="1.5"
            opacity="0.2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 0.8, ease: 'easeInOut' }}
          />
        </svg>
      </motion.div>

      {/* LAYER 5: Content */}
      <Container size="2xl" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <motion.div
            className="lg:col-span-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {/* Headline with staggered animation */}
            <h1 className="hero-display text-[#025082] mb-10">
              <motion.span
                className="block overflow-hidden"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              >
                Industry-specific AI
              </motion.span>
              <motion.span
                className="block overflow-hidden"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
              >
                that ships to production
              </motion.span>
            </h1>

            {/* Subhead */}
            <motion.p
              className="subheadline text-gray-600 max-w-xl mb-14"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Industry-specific automation that delivers results in days, not years.
            </motion.p>

            {/* CTAs with refined spacing */}
            <motion.div
              className="flex flex-col sm:flex-row gap-5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <Button asChild size="lg" variant="primary" className="w-full sm:w-auto">
                <Link href="/workshop">Book a Workshop</Link>
              </Button>

              <Button asChild size="lg" variant="secondary" className="w-full sm:w-auto">
                <Link href="#approach">See Our Approach</Link>
              </Button>
            </motion.div>

            {/* Trust signals - more refined */}
            <motion.div
              className="mt-16 flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-10 text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#FF6B35]" />
                <span className="text-gray-600 font-medium">Results in 48 hours</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#FF6B35]" />
                <span className="text-gray-600 font-medium">100% Guaranteed</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </Container>

      {/* LAYER 6: Scroll indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 hidden lg:block"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-gray-300 flex items-start justify-center p-2">
          <motion.div
            className="w-1.5 h-1.5 rounded-full bg-[#025082]"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>
    </section>
  );
}
