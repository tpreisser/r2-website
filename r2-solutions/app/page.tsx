'use client';

import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import {
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
  useCallback,
  type CSSProperties,
  type ReactNode,
} from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  calculateRefractionSpecular,
  CONVEX,
  getDisplacementData,
  imageDataToUrl,
} from '@/lib/liquid-glass';

const articles = [
  {
    id: 1,
    slug: 'generic-chatbot-integration-projects-fail',
    source: 'Gartner',
    title: 'Majority of Generic Chatbot Integration Projects Fail',
    desc: 'Without proper integration expertise, most chatbot projects never deliver ROI.',
    gradient: 'linear-gradient(135deg, #025082, #013a5f)',
    image: '/images/yellow-glow-road.png',
    accentColor: '#111111',
    glow: {
      ring: 'rgba(17,17,17,0.22)',
      blur: 'rgba(17,17,17,0.36)',
    },
  },
  {
    id: 2,
    slug: 'ai-projects-stall-without-c-suite-engineers',
    source: 'Harvard Business Review',
    title: 'AI projects stall without C-suite-caliber engineers',
    desc: '',
    gradient: 'linear-gradient(135deg, #0369a1, #025082)',
    image: '/images/r2-billboard.png',
    accentColor: '#d18a0f',
    glow: {
      ring: 'rgba(209,138,15,0.26)',
      blur: 'rgba(209,138,15,0.42)',
    },
  },
  {
    id: 3,
    slug: 'business-specific-ai-4x-success-rate',
    source: 'MIT Sloan',
    title: 'Business Specific AI integration shows 4x success rate',
    desc: 'Tailored AI solutions dramatically outperform generic implementations.',
    gradient: 'linear-gradient(135deg, #1e3a5f, #0c1929)',
    image: '/images/business-specific-ai.png',
    accentColor: '#0f2d5c',
    glow: {
      ring: 'rgba(15,45,92,0.25)',
      blur: 'rgba(15,45,92,0.4)',
    },
  },
  {
    id: 4,
    slug: 'industry-specific-ai-accelerating',
    source: 'Forrester',
    title: 'Industry specific AI is accelerating without compromise',
    desc: 'Speed and quality are no longer mutually exclusive with proper AI integration.',
    gradient: 'linear-gradient(135deg, #0f4c75, #1b262c)',
    image: '/images/industry-specific-ai.png',
    accentColor: '#5f4b3a',
    glow: {
      ring: 'rgba(95,75,58,0.28)',
      blur: 'rgba(95,75,58,0.44)',
    },
  },
];

const pillars = [
  {
    label: 'SPEED',
    title: 'Prototypes in Days',
    desc: 'With our unique combination of strategic expertise and technical execution, we quickly understand your business problem, engineer the right AI solution, and deliver purpose-built prototypes at a pace larger competitors simply can\'t match.',
    gradient: 'linear-gradient(135deg, #025082 0%, #0369a1 100%)',
    image: '/images/prototypes-within-days.png',
  },
  {
    label: 'RESULTS',
    title: 'Built for Business Impact',
    desc: 'We don\'t build AI for AI\'s sake. We\'re experts in both technology and business strategy. Every solution we engineer is designed to drive revenue, reduce costs, and create competitive advantage. Every project ties directly to measurable business outcomes.',
    gradient: 'linear-gradient(135deg, #0f4c75 0%, #1b262c 100%)',
    image: '/images/built-for-business-impact.png',
  },
  {
    label: 'TRUST',
    title: 'Your Success Is Our Growth',
    desc: 'We\'re building something here. Your results become our reputation. Your referrals fuel our growth. That means we bring the same urgency to your project that we bring to building our own company—because they\'re directly connected. We succeed when you succeed.',
    gradient: 'linear-gradient(135deg, #013a5f 0%, #025082 100%)',
    image: '/images/your-success-is-our-growth.png',
  },
];

const MOBILE_ARTICLE_BREAKPOINT = 640;
const MOBILE_FEATURE_HEIGHT = 360;
const MOBILE_CAROUSEL_BREAKPOINT = 768;
const SWIPE_THRESHOLD = 40;
const WHEEL_THRESHOLD = 40;
const WHEEL_COOLDOWN_MS = 450;

const glassDefaults = {
  glassThickness: 120,
  bezelWidth: 24,
  blur: 6.0,
  refractiveIndex: 1.5,
  specularOpacity: 0.8,
  specularSaturation: 1.4,
  brightness: 1.2,
};

type LiquidGlassFilterData = {
  displacementMapUrl: string;
  specularMapUrl: string;
  maxDisplacement: number;
};

function LiquidGlassFilter({
  filterId,
  width,
  height,
  displacementMapUrl,
  specularMapUrl,
  maxDisplacement,
}: LiquidGlassFilterData & { filterId: string; width: number; height: number }) {
  return (
    <svg
      style={{ position: 'absolute', width: 0, height: 0, overflow: 'hidden' }}
      aria-hidden="true"
      colorInterpolationFilters="sRGB"
    >
      <defs>
        <filter id={filterId}>
          <feGaussianBlur in="SourceGraphic" stdDeviation={glassDefaults.blur} result="blurred_source" />
          <feImage
            href={displacementMapUrl}
            x="0"
            y="0"
            width={width}
            height={height}
            result="displacement_map"
            preserveAspectRatio="none"
          />
          <feDisplacementMap
            in="blurred_source"
            in2="displacement_map"
            scale={maxDisplacement}
            xChannelSelector="R"
            yChannelSelector="G"
            result="displaced"
          />
          <feColorMatrix
            in="displaced"
            type="matrix"
            values={`${glassDefaults.brightness} 0 0 0 0 0 ${glassDefaults.brightness} 0 0 0 0 0 ${glassDefaults.brightness} 0 0 0 0 0 1 0`}
            result="displaced_bright"
          />
          <feColorMatrix
            in="displaced_bright"
            type="saturate"
            values={String(glassDefaults.specularSaturation)}
            result="displaced_saturated"
          />
          <feImage
            href={specularMapUrl}
            x="0"
            y="0"
            width={width}
            height={height}
            result="specular_layer"
            preserveAspectRatio="none"
          />
          <feComposite in="displaced_saturated" in2="specular_layer" operator="in" result="specular_saturated" />
          <feComponentTransfer in="specular_layer" result="specular_faded">
            <feFuncA type="linear" slope={glassDefaults.specularOpacity} />
          </feComponentTransfer>
          <feBlend in="specular_saturated" in2="displaced_bright" mode="normal" result="withSaturation" />
          <feBlend in="specular_faded" in2="withSaturation" mode="normal" />
        </filter>
      </defs>
    </svg>
  );
}

function generateLiquidGlassFilter(
  width: number,
  height: number,
  cornerRadius: number,
  dpr: number,
): LiquidGlassFilterData {
  if (width < 10 || height < 10) {
    return { displacementMapUrl: '', specularMapUrl: '', maxDisplacement: 1 };
  }

  try {
    const clampedBezelWidth = Math.max(Math.min(glassDefaults.bezelWidth, 2 * cornerRadius - 1), 0);

    const { displacementMap, maximumDisplacement } = getDisplacementData({
      glassThickness: glassDefaults.glassThickness,
      bezelWidth: clampedBezelWidth,
      bezelHeightFn: CONVEX.fn,
      refractiveIndex: glassDefaults.refractiveIndex,
      canvasWidth: width,
      canvasHeight: height,
      objectWidth: width,
      objectHeight: height,
      radius: cornerRadius,
      dpr,
    });

    const specularData = calculateRefractionSpecular(
      width,
      height,
      cornerRadius,
      clampedBezelWidth,
      Math.PI / 3,
      dpr,
    );

    return {
      displacementMapUrl: imageDataToUrl(displacementMap),
      specularMapUrl: imageDataToUrl(specularData),
      maxDisplacement: maximumDisplacement,
    };
  } catch (e) {
    console.error('Error generating liquid glass maps:', e);
    return { displacementMapUrl: '', specularMapUrl: '', maxDisplacement: 1 };
  }
}

function useElementSize<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (!ref.current) return;
    const observer = new ResizeObserver((entries) => {
      const entry = entries[0];
      if (!entry) return;
      const { width, height } = entry.contentRect;
      setSize({ width, height });
    });
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return { ref, size };
}

function useSupportsLiquid() {
  const [supportsLiquid, setSupportsLiquid] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    // Force-enable liquid glass; header proven to work in target environment.
    setSupportsLiquid(true);
  }, []);

  return supportsLiquid;
}

function LiquidGlassSurface({
  children,
  cornerRadius = 20,
  className,
  style,
  visible = true,
  background = 'rgba(255, 255, 255, 0.12)',
  supportsLiquid,
  noFallbackBlur = false,
}: {
  children: ReactNode;
  cornerRadius?: number;
  className?: string;
  style?: CSSProperties;
  visible?: boolean;
  background?: string;
  supportsLiquid: boolean;
  noFallbackBlur?: boolean;
}) {
  const rawId = useId();
  const filterId = useMemo(() => rawId.replace(/:/g, '-'), [rawId]);
  const [mounted, setMounted] = useState(false);
  const { ref, size } = useElementSize<HTMLDivElement>();
  const dpr = typeof window !== 'undefined' ? Math.min(window.devicePixelRatio, 2) : 1;
  const measuredWidth = Math.max(size.width || ref.current?.getBoundingClientRect().width || 0, 240);
  const measuredHeight = Math.max(size.height || ref.current?.getBoundingClientRect().height || 0, 320);

  useEffect(() => {
    setMounted(true);
  }, []);

  const filterData = useMemo(() => {
    if (!mounted || !supportsLiquid) {
      return { displacementMapUrl: '', specularMapUrl: '', maxDisplacement: 1 };
    }
    return generateLiquidGlassFilter(measuredWidth, measuredHeight, cornerRadius, dpr);
  }, [mounted, supportsLiquid, measuredWidth, measuredHeight, cornerRadius, dpr]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        position: 'relative',
        borderRadius: cornerRadius,
        overflow: 'hidden',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0px)' : 'translateY(12px)',
        transition: 'opacity 0.35s ease, transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
        ...style,
      }}
    >
      {filterData.displacementMapUrl && (
        <LiquidGlassFilter
          filterId={filterId}
          width={Math.max(measuredWidth, 1)}
          height={Math.max(measuredHeight, 1)}
          displacementMapUrl={filterData.displacementMapUrl}
          specularMapUrl={filterData.specularMapUrl}
          maxDisplacement={filterData.maxDisplacement}
        />
      )}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          borderRadius: cornerRadius,
          background,
          backdropFilter:
            mounted && supportsLiquid && filterData.displacementMapUrl
              ? `url(#${filterId})`
              : noFallbackBlur
                ? 'none'
                : 'blur(20px) saturate(180%)',
          WebkitBackdropFilter:
            mounted && supportsLiquid && filterData.displacementMapUrl
              ? `url(#${filterId})`
              : noFallbackBlur
                ? 'none'
                : 'blur(20px) saturate(180%)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(255, 255, 255, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.5)',
          pointerEvents: 'none',
        }}
      />
      <div style={{ position: 'relative', zIndex: 1, height: '100%' }}>{children}</div>
    </div>
  );
}


export default function Home() {
  const [activeArticle, setActiveArticle] = useState(0);
  const [centerCardIndex, setCenterCardIndex] = useState(1);
  const [hoveredPillar, setHoveredPillar] = useState<number | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const totalPillars = pillars.length;
  const current = articles[activeArticle];
  const featureBackgroundStyles = useMemo(() => {
    if (current.image) {
      return {
        backgroundImage: `linear-gradient(140deg, rgba(0,0,0,0.55), rgba(0,0,0,0.35)), url(${current.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      } as const;
    }
    return { background: current.gradient } as const;
  }, [current]);
  const rightColumnRef = useRef<HTMLDivElement>(null);
  const [isMobileArticles, setIsMobileArticles] = useState(false);
  const [isMobileCarousel, setIsMobileCarousel] = useState(false);
  const [featureHeight, setFeatureHeight] = useState<number | null>(null);
  const featureHeightRef = useRef<number | null>(null);
  const rotationIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const pauseUntilRef = useRef<number>(Date.now());
  const ROTATION_INTERVAL_MS = 3000;
  const CLICK_HOLD_MS = 8000;
  const touchStartXRef = useRef<number | null>(null);
  const touchStartYRef = useRef<number | null>(null);
  const touchLastXRef = useRef<number | null>(null);
  const filtersWarmedRef = useRef(false);

  const updateFeatureHeight = useCallback(() => {
    if (typeof window === 'undefined') return;

    const isMobile = window.innerWidth <= MOBILE_ARTICLE_BREAKPOINT;
    setIsMobileArticles(isMobile);
    setIsMobileCarousel(window.innerWidth <= MOBILE_CAROUSEL_BREAKPOINT);

    if (isMobile) {
      if (featureHeightRef.current !== MOBILE_FEATURE_HEIGHT) {
        featureHeightRef.current = MOBILE_FEATURE_HEIGHT;
        setFeatureHeight(MOBILE_FEATURE_HEIGHT);
      }
      return;
    }

    if (!rightColumnRef.current) return;
    const measuredHeight = Math.round(rightColumnRef.current.getBoundingClientRect().height);
    const prevHeight = featureHeightRef.current ?? MOBILE_FEATURE_HEIGHT;
    const nextHeight = Math.max(measuredHeight, prevHeight, MOBILE_FEATURE_HEIGHT);
    // Lock to the largest measured height so the feature tile never shrinks.
    if (featureHeightRef.current !== nextHeight) {
      featureHeightRef.current = nextHeight;
      setFeatureHeight(nextHeight);
    }
  }, [MOBILE_ARTICLE_BREAKPOINT, MOBILE_FEATURE_HEIGHT, MOBILE_CAROUSEL_BREAKPOINT]);

  useEffect(() => {
    updateFeatureHeight();

    const resizeObserver = new ResizeObserver(() => updateFeatureHeight());
    if (rightColumnRef.current) {
      resizeObserver.observe(rightColumnRef.current);
    }

    window.addEventListener('resize', updateFeatureHeight);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', updateFeatureHeight);
    };
  }, [updateFeatureHeight]);

  useEffect(() => {
    if (rotationIntervalRef.current) {
      clearInterval(rotationIntervalRef.current);
      rotationIntervalRef.current = null;
    }

    rotationIntervalRef.current = setInterval(() => {
      if (Date.now() < pauseUntilRef.current) return;
      setActiveArticle((prev) => (prev + 1) % articles.length);
    }, ROTATION_INTERVAL_MS);

    return () => {
      if (rotationIntervalRef.current) clearInterval(rotationIntervalRef.current);
    };
  }, [ROTATION_INTERVAL_MS]);

  // Pre-warm CSS filters on mount to prevent choppy first hover
  useEffect(() => {
    if (filtersWarmedRef.current || typeof window === 'undefined') return;
    
    // Simple CSS-only preload - just trigger a filter transition once
    const style = document.createElement('style');
    style.textContent = `
      .carousel-card .card-background {
        filter: blur(0.1px) brightness(1);
        -webkit-filter: blur(0.1px) brightness(1);
      }
    `;
    document.head.appendChild(style);
    
    // Remove after a brief moment
    setTimeout(() => {
      document.head.removeChild(style);
      filtersWarmedRef.current = true;
    }, 100);
  }, []);


  const handleArticleClick = (index: number) => {
    setActiveArticle(index);
    pauseUntilRef.current = Date.now() + CLICK_HOLD_MS;
  };

  const handlePrev = useCallback(() => {
    setCenterCardIndex((prev) => (prev - 1 + totalPillars) % totalPillars);
  }, [totalPillars]);

  const handleNext = useCallback(() => {
    setCenterCardIndex((prev) => (prev + 1) % totalPillars);
  }, [totalPillars]);

  const getOffset = (index: number) => {
    const diff = (index - centerCardIndex + totalPillars) % totalPillars;
    return diff > totalPillars / 2 ? diff - totalPillars : diff;
  };

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    if (!isMobileCarousel) return;
    const touch = e.touches[0];
    touchStartXRef.current = touch.clientX;
    touchStartYRef.current = touch.clientY;
    touchLastXRef.current = touch.clientX;
  }, [isMobileCarousel]);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (!isMobileCarousel) return;
    if (touchStartXRef.current === null) return;
    touchLastXRef.current = e.touches[0]?.clientX ?? touchLastXRef.current;
  }, [isMobileCarousel]);

  const handleTouchEnd = useCallback(() => {
    if (!isMobileCarousel) return;
    if (touchStartXRef.current === null || touchLastXRef.current === null || touchStartYRef.current === null) {
      touchStartXRef.current = null;
      touchLastXRef.current = null;
      touchStartYRef.current = null;
      return;
    }

    const deltaX = touchLastXRef.current - touchStartXRef.current;
    if (Math.abs(deltaX) > SWIPE_THRESHOLD) {
      if (deltaX > 0) {
        handlePrev();
      } else {
        handleNext();
      }
    }

    touchStartXRef.current = null;
    touchLastXRef.current = null;
    touchStartYRef.current = null;
  }, [isMobileCarousel, handlePrev, handleNext]);

  const handleTouchCancel = useCallback(() => {
    touchStartXRef.current = null;
    touchLastXRef.current = null;
    touchStartYRef.current = null;
  }, []);


  return (
    <div style={{ background: '#fff', minHeight: '100vh' }}>
      {/* ===== HERO ===== */}
      <section
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '140px 48px 60px',
          position: 'relative',
          overflow: 'hidden',
          background: 'linear-gradient(180deg, #e8f4fc 0%, #f0f9ff 40%, #ffffff 100%)',
        }}
      >
        <div
          style={{
            width: '100%',
            maxWidth: 960,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            gap: 28,
          }}
          className="hero-content"
        >
          {/* Headline */}
          <div>
            <h1
              style={{
                fontSize: 'clamp(2.5rem, 6vw, 5.5rem)',
                fontWeight: 500,
                color: '#025082',
                lineHeight: 1.05,
                letterSpacing: '-0.02em',
              }}
            >
              Industry-specific AI that ships to production.
            </h1>
          </div>
        </div>

        {/* Animated arrow */}
        <div
          style={{
            position: 'absolute',
            bottom: 40,
            left: '50%',
            transform: 'translateX(-50%)',
          }}
        >
          <svg
            className="scroll-arrow"
            width="20"
            height="24"
            viewBox="0 0 20 24"
            fill="none"
            style={{ opacity: 0.5 }}
          >
            <path
              d="M10 0V20M10 20L2 12M10 20L18 12"
              stroke="#025082"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </section>

      {/* ===== ARTICLES ===== */}
      <section style={{ padding: '120px 0', background: '#ffffff', overflowAnchor: 'none' }}>
        <Container size="xl" className="max-w-[1100px] mx-auto px-6">
          {/* BCG-style section header */}
          <div style={{ marginBottom: 32 }}>
              <h2
                className="section-title"
                style={{
                  fontSize: 'clamp(2rem, 4vw, 3rem)',
                  fontWeight: 500,
                  color: '#025082',
                  marginBottom: 12,
                  lineHeight: 1.2,
                  fontFamily: "'R2Font', var(--font-inter), serif",
                }}
              >
                What research says about AI project success
              </h2>
          </div>

          {/* SIDE BY SIDE: Feature LEFT, Tiles RIGHT - Both same height */}
          <div
            style={{
              display: 'flex',
              gap: 24,
              alignItems: 'stretch',
              minHeight: featureHeight ? `${featureHeight}px` : `${MOBILE_FEATURE_HEIGHT}px`,
            }}
            className="articles-layout"
          >
            {/* LEFT: Featured Article - FIXED WIDTH, matches right tiles height */}
            <div
              style={{
                flex: '0 0 60%',
                display: 'flex',
              height: !isMobileArticles && featureHeight ? `${featureHeight}px` : undefined,
              maxHeight: !isMobileArticles && featureHeight ? `${featureHeight}px` : undefined,
              minHeight: !isMobileArticles && featureHeight ? `${featureHeight}px` : `${MOBILE_FEATURE_HEIGHT}px`,
                overflow: 'hidden',
              }}
            >
              <Link
                href={`/insights/${articles[activeArticle].slug}`}
                style={{
                ...featureBackgroundStyles,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  width: '100%',
                  height: '100%',
                  padding: 40,
                  borderRadius: 24,
                  color: '#fff',
                  textDecoration: 'none',
                  transition: 'box-shadow 0.3s ease',
                }}
              >
              <span style={{ fontSize: '0.8rem', opacity: 0.7, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 16 }}>
                {current.source}
              </span>
              <h3 className="feature-headline" style={{ fontSize: '2rem', fontWeight: 500, marginBottom: 20, lineHeight: 1.25, fontFamily: "'R2Font', var(--font-inter), serif" }}>
                {current.title}
              </h3>
              <span style={{ color: '#FF6B35', fontWeight: 600, fontSize: '0.9rem' }}>Read Article →</span>
              </Link>
            </div>

            {/* RIGHT: Article Tiles - FIXED WIDTH */}
            <div
              ref={rightColumnRef}
              style={{
                flex: '0 0 38%',
                display: 'flex',
                flexDirection: 'column',
                gap: 12,
                minHeight: !isMobileArticles && featureHeight ? `${featureHeight}px` : undefined,
              }}
            >
              {articles.map((a, i) => (
                <div
                  key={a.id}
                  onClick={() => handleArticleClick(i)}
                  style={{
                    flex: 1,
                    padding: 20,
                    borderRadius: 16,
                    cursor: 'pointer',
                    transition: 'border 0.2s ease, box-shadow 0.2s ease',
                    background: '#f9fafb',
                    color: '#111827',
                    fontFamily: "var(--font-inter), sans-serif",
                  border: activeArticle === i ? `2px solid ${a.accentColor ?? '#025082'}` : '2px solid #e5e7eb',
                  boxShadow: activeArticle === i 
                    ? `0 0 0 3px ${a.glow?.ring ?? 'rgba(2,80,130,0.18)'}, 0 0 22px ${a.glow?.blur ?? 'rgba(2,80,130,0.28)'}` 
                    : 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                  }}
                >
                  <div style={{
                    fontSize: '0.65rem',
                    fontWeight: 600,
                    marginBottom: 6,
                    opacity: 0.5,
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                  color: activeArticle === i ? (a.accentColor ?? '#025082') : '#6b7280',
                    fontFamily: "var(--font-inter), sans-serif",
                  }}>
                    {a.source}
                  </div>
                <div style={{ fontSize: '1rem', fontWeight: 500, lineHeight: 1.4, color: activeArticle === i ? (a.accentColor ?? '#025082') : '#111827', fontFamily: "var(--font-inter), sans-serif" }}>
                    {a.title}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ===== WHY R² ===== */}
      <section style={{ padding: '100px 0', background: '#fff', overflow: 'visible' }}>
        <div style={{ maxWidth: 1600, margin: '0 auto', padding: '0 48px', overflow: 'visible' }}>
          {/* Section header */}
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <h2
              className="section-title"
              style={{
                fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                fontWeight: 500,
                color: '#025082',
                lineHeight: 1.2,
              }}
            >
              Why Teams Choose Us
            </h2>
          </div>

          {/* Carousel - center card featured, side cards visible but scaled */}
          <div 
            ref={carouselRef}
            style={{ 
              position: 'relative',
              width: '100%',
              maxWidth: 'min(1400px, calc(100vw - 96px))',
              margin: '0 auto',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: 'clamp(380px, 40vh, 500px)',
              overflow: 'visible',
            }} 
            className="carousel-container"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onTouchCancel={handleTouchCancel}
          >
            {pillars.map((pillar, i) => {
              const offset = getOffset(i);
              const isCentered = offset === 0;
              const isHidden = Math.abs(offset) > 1;
              const overlayVisible = hoveredPillar === i && isCentered;
              const backgroundStyle = pillar.image
                ? {
                    backgroundImage: `linear-gradient(160deg, rgba(0,0,0,0.55), rgba(0,0,0,0.35)), url(${pillar.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                  }
                : { background: pillar.gradient };
              
              return (
                <div
                  key={pillar.label}
                  className={`carousel-card ${hoveredPillar === i && isCentered ? 'card-hovered' : ''}`}
                  onMouseEnter={() => setHoveredPillar(i)}
                  onMouseLeave={() => setHoveredPillar(null)}
                  style={{
                    position: 'absolute',
                    width: 'clamp(300px, 35vw, 420px)',
                    height: 'clamp(360px, 42vh, 520px)',
                    borderRadius: 28,
                    overflow: 'hidden',
                    cursor: 'pointer',
                    transform: `translateX(${offset * 110}%) scale(${isCentered ? 1 : 0.85})`,
                    opacity: isHidden ? 0 : isCentered ? 1 : 0.6,
                    zIndex: isCentered ? 10 : 5 - Math.abs(offset),
                    transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                    pointerEvents: isHidden ? 'none' : 'auto',
                  }}
                >
                  {/* Background layer */}
                  <div
                    className="card-background"
                    style={{
                      position: 'absolute',
                      inset: 0,
                      ...backgroundStyle,
                      zIndex: 1,
                    }}
                  />
                  
                {/* Default title - only show when centered */}
                <div 
                  className="default-content"
                  style={{
                    position: 'absolute',
                    inset: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    padding: 'clamp(24px, 4vw, 48px)',
                    zIndex: 5,
                    transition: 'opacity 0.3s ease',
                    opacity: isCentered && !overlayVisible ? 1 : 0,
                  }}
                >
                  {isCentered && (
                    <h3
                      style={{
                        fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
                        fontWeight: 600,
                        color: '#fff',
                        lineHeight: 1.3,
                      }}
                    >
                      {pillar.title}
                    </h3>
                  )}
                </div>

                {/* Overlay content - shows on hover */}
                {overlayVisible && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    style={{
                      position: 'absolute',
                      inset: 0,
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      padding: 'clamp(24px, 4vw, 48px)',
                      zIndex: 10,
                      pointerEvents: 'none',
                    }}
                  >
                    <h3
                      style={{
                        fontSize: 'clamp(1rem, 1.6vw, 1.25rem)',
                        fontWeight: 700,
                        color: '#0b1f37',
                        lineHeight: 1.35,
                        textAlign: 'center',
                      }}
                    >
                      {pillar.title}
                    </h3>
                    <p
                      style={{
                        fontSize: 'clamp(0.9rem, 1.05vw, 1rem)',
                        color: 'rgba(255, 255, 255, 0.95)',
                        lineHeight: 1.6,
                        maxWidth: '100%',
                        margin: '0 auto',
                        textAlign: 'center',
                        textShadow: '0 1px 4px rgba(0, 0, 0, 0.35)',
                      }}
                    >
                      {pillar.desc}
                    </p>
                  </motion.div>
                )}
              </div>
            );
            })}
            
            {/* Navigation arrows - hidden on mobile */}
            <button
              className="carousel-nav-btn"
              onClick={handlePrev}
              style={{
                position: 'absolute',
                left: 'calc(50% - 32vw)',
                top: '50%',
                transform: 'translateY(-50%)',
                width: 56,
                height: 56,
                padding: 0,
                border: 'none',
                borderRadius: 28,
                background: 'rgba(255, 255, 255, 0.08)',
                backdropFilter: 'blur(10px) saturate(180%)',
                WebkitBackdropFilter: 'blur(10px) saturate(180%)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(255, 255, 255, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.5)',
                cursor: 'pointer',
                zIndex: 20,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'opacity 0.2s ease',
              }}
              aria-label="Previous pillar"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M12 4L6 10L12 16" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            
            <button
              className="carousel-nav-btn"
              onClick={handleNext}
              style={{
                position: 'absolute',
                right: 'calc(50% - 32vw)',
                top: '50%',
                transform: 'translateY(-50%)',
                width: 56,
                height: 56,
                padding: 0,
                border: 'none',
                borderRadius: 28,
                background: 'rgba(255, 255, 255, 0.08)',
                backdropFilter: 'blur(10px) saturate(180%)',
                WebkitBackdropFilter: 'blur(10px) saturate(180%)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(255, 255, 255, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.5)',
                cursor: 'pointer',
                zIndex: 20,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'opacity 0.2s ease',
              }}
              aria-label="Next pillar"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M8 4L14 10L8 16" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section style={{ padding: '140px 0', background: '#fff' }}>
        <Container size="lg" className="max-w-3xl px-6">
          <div style={{ textAlign: 'center' }}>
            <h2
              className="section-title"
              style={{
                fontSize: 'clamp(2.25rem, 5vw, 3.75rem)',
                fontWeight: 500,
                color: '#111827',
                marginBottom: 24,
                lineHeight: 1.15,
              }}
            >
              See Working AI in One Day
            </h2>
            <p style={{ fontSize: '1.25rem', color: '#6b7280', marginBottom: 56, lineHeight: 1.7 }}>
              We have built a renowned results-guaranteed discovery-and-build workshop we call The Forge. The Forge takes you from identifying your problem and bottlenecks to a working prototype in a single day.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20, alignItems: 'center' }} className="sm:flex-row sm:justify-center">
              <Button asChild size="lg" variant="primary">
                <Link href="/services/the-forge">Explore The Forge</Link>
              </Button>
              <Link
                href="/contact"
                style={{
                  padding: '16px 32px',
                  color: '#025082',
                  fontWeight: 500,
                  textDecoration: 'none',
                  fontSize: '1rem',
                  transition: 'opacity 0.3s',
                }}
              >
                Talk to Our Team →
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
