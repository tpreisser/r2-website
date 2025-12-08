'use client';

import { ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface AnimatedSectionProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  variant?: 'fade' | 'slide' | 'scale' | 'fadeSlide';
}

export function AnimatedSection({
  children,
  delay = 0,
  className,
  variant = 'fadeSlide',
}: AnimatedSectionProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px',
  });

  const prefersReducedMotion = useReducedMotion();

  const variants = {
    fade: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
    },
    slide: {
      initial: { opacity: 0, y: 40 },
      animate: { opacity: 1, y: 0 },
    },
    scale: {
      initial: { opacity: 0, scale: 0.95 },
      animate: { opacity: 1, scale: 1 },
    },
    fadeSlide: {
      initial: { opacity: 0, y: 30 },
      animate: { opacity: 1, y: 0 },
    },
  };

  const selectedVariant = variants[variant];

  return (
    <motion.div
      ref={ref}
      initial={prefersReducedMotion ? false : selectedVariant.initial}
      animate={inView ? selectedVariant.animate : (prefersReducedMotion ? {} : selectedVariant.initial)}
      transition={{
        duration: prefersReducedMotion ? 0 : 0.7,
        delay: prefersReducedMotion ? 0 : delay,
        ease: [0.16, 1, 0.3, 1], // Premium easing curve (Apple-style)
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}


