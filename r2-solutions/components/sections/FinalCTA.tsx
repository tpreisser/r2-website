'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

export function FinalCTA() {
  return (
    <section className="section-premium-hero relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50" />

      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#025082]/10 to-transparent" />

      {/* Decorative elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <motion.div
          className="w-[800px] h-[800px] rounded-full border border-[#025082]/5"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <Container size="md" className="relative z-10 text-center">
        <AnimatedSection>
          <h2 className="section-headline text-gray-900 mb-10">
            Ready to See
            <br />
            Real Results?
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <p className="body-premium text-gray-600 max-w-xl mx-auto mb-14">
            Stop wasting time on AI projects that go nowhere. Book a workshop and see what working AI looks like.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.4}>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Button asChild size="lg" variant="primary">
                <Link href="/workshop">Book a Workshop</Link>
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Button asChild size="lg" variant="secondary">
                <Link href="/contact">Talk to Our Team</Link>
              </Button>
            </motion.div>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
