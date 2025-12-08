'use client';

import { useState, useEffect, useRef, useMemo, useId, useCallback } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
  getDisplacementData,
  calculateRefractionSpecular,
  imageDataToUrl,
  CONVEX,
} from '@/lib/liquid-glass';

type DropdownItem = { href: string; label: string; description?: string };
type NavLink = { href: string; label: string; dropdownItems?: DropdownItem[] };

const industriesMenu: DropdownItem[] = [
  { href: '/industries', label: 'All Industries' },
  { href: '/industries/insurance', label: 'Insurance' },
  { href: '/industries/healthcare', label: 'Healthcare' },
  { href: '/industries/financial-services', label: 'Financial Services' },
  { href: '/industries/home-services', label: 'Home Services' },
  { href: '/industries/professional-services', label: 'Professional Services' },
  { href: '/industries/construction-infrastructure', label: 'Construction & Infrastructure' },
  { href: '/industries/hospitality-travel', label: 'Hospitality & Travel' },
  { href: '/industries/agriculture-food', label: 'Agriculture & Food' },
  { href: '/industries/sports-entertainment', label: 'Sports & Entertainment' },
];

const servicesMenu: DropdownItem[] = [
  { href: '/services', label: 'All Services' },
  { href: '/services/the-forge', label: 'The Forge' },
  { href: '/services/agent-factory', label: 'Agent Factory' },
  { href: '/services/process-automation', label: 'Process Automation' },
  { href: '/services/advisory', label: 'Advisory' },
];

const aboutMenu: DropdownItem[] = [
  { href: '/about', label: 'About R²' },
  { href: '/about/methodology', label: 'Methodology' },
  { href: '/about/technology', label: 'Technology' },
  { href: '/about/leadership', label: 'Leadership' },
  { href: '/about/careers', label: 'Careers' },
];

const navLinks: NavLink[] = [
  { href: '/industries', label: 'Industries', dropdownItems: industriesMenu },
  { href: '/services', label: 'Services', dropdownItems: servicesMenu },
  { href: '/insights', label: 'Insights' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

// ============================================
// LIQUID GLASS HEADER - Collapsible Pills
// Using SVG Displacement Maps with Snell's Law
// ============================================

interface LiquidGlassConfig {
  glassThickness: number;
  bezelWidth: number;
  blur: number;
  refractiveIndex: number;
  specularOpacity: number;
  specularSaturation: number;
  brightness: number;
}

const defaultConfig: LiquidGlassConfig = {
  glassThickness: 120,
  bezelWidth: 24,
  blur: 3.0,
  refractiveIndex: 1.5,
  specularOpacity: 0.8,
  specularSaturation: 1.4,
  brightness: 1.1,
};

// Helper to generate liquid glass filter data
function generateLiquidGlassFilter(
  width: number,
  height: number,
  cornerRadius: number,
  dpr: number,
  config: LiquidGlassConfig = defaultConfig
) {
  if (width < 10 || height < 10) {
    return { displacementMapUrl: '', specularMapUrl: '', maxDisplacement: 1 };
  }

  try {
    const clampedBezelWidth = Math.max(
      Math.min(config.bezelWidth, 2 * cornerRadius - 1),
      0
    );

    const { displacementMap, maximumDisplacement } = getDisplacementData({
      glassThickness: config.glassThickness,
      bezelWidth: clampedBezelWidth,
      bezelHeightFn: CONVEX.fn,
      refractiveIndex: config.refractiveIndex,
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
      dpr
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

// SVG Filter Component
function LiquidGlassFilter({
  filterId,
  width,
  height,
  displacementMapUrl,
  specularMapUrl,
  maxDisplacement,
  config = defaultConfig,
}: {
  filterId: string;
  width: number;
  height: number;
  displacementMapUrl: string;
  specularMapUrl: string;
  maxDisplacement: number;
  config?: LiquidGlassConfig;
}) {
  return (
    <svg
      style={{ position: 'absolute', width: 0, height: 0, overflow: 'hidden' }}
      aria-hidden="true"
      colorInterpolationFilters="sRGB"
    >
      <defs>
        <filter id={filterId}>
          <feGaussianBlur
            in="SourceGraphic"
            stdDeviation={config.blur}
            result="blurred_source"
          />
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
            values={`${config.brightness} 0 0 0 0 0 ${config.brightness} 0 0 0 0 0 ${config.brightness} 0 0 0 0 0 1 0`}
            result="displaced_bright"
          />
          <feColorMatrix
            in="displaced_bright"
            type="saturate"
            values={String(config.specularSaturation)}
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
          <feComposite
            in="displaced_saturated"
            in2="specular_layer"
            operator="in"
            result="specular_saturated"
          />
          <feComponentTransfer in="specular_layer" result="specular_faded">
            <feFuncA type="linear" slope={config.specularOpacity} />
          </feComponentTransfer>
          <feBlend
            in="specular_saturated"
            in2="displaced_bright"
            mode="normal"
            result="withSaturation"
          />
          <feBlend in="specular_faded" in2="withSaturation" mode="normal" />
        </filter>
      </defs>
    </svg>
  );
}

// Liquid Glass Pill Component
function LiquidGlassPill({
  filterId,
  width,
  height,
  children,
  supportsLiquid,
  displacementMapUrl,
  specularMapUrl,
  maxDisplacement,
  mounted,
}: {
  filterId: string;
  width: number;
  height: number;
  children: React.ReactNode;
  supportsLiquid: boolean;
  displacementMapUrl: string;
  specularMapUrl: string;
  maxDisplacement: number;
  mounted: boolean;
}) {
  const cornerRadius = Math.min(36, height / 2);

  return (
    <>
      {displacementMapUrl && specularMapUrl && (
        <LiquidGlassFilter
          filterId={filterId}
          width={width}
          height={height}
          displacementMapUrl={displacementMapUrl}
          specularMapUrl={specularMapUrl}
          maxDisplacement={maxDisplacement}
        />
      )}
      <motion.div
        style={{
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: width,
          height: height,
          borderRadius: cornerRadius,
          background: 'rgba(255, 255, 255, 0.08)',
          backdropFilter:
            mounted && supportsLiquid && displacementMapUrl && displacementMapUrl.length > 0
              ? `url(#${filterId})`
              : 'blur(20px) saturate(180%)',
          WebkitBackdropFilter:
            mounted && supportsLiquid && displacementMapUrl && displacementMapUrl.length > 0
              ? `url(#${filterId})`
              : 'blur(20px) saturate(180%)',
          boxShadow: `
            0 8px 32px rgba(0, 0, 0, 0.08),
            0 0 0 1px rgba(255, 255, 255, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.5)
          `,
          overflow: 'hidden',
        }}
      >
        {!supportsLiquid && (
          <>
            <div
              style={{
                position: 'absolute',
                inset: 0,
                borderRadius: cornerRadius,
                background:
                  'linear-gradient(135deg, rgba(255,255,255,0.25) 0%, transparent 50%)',
                pointerEvents: 'none',
              }}
            />
            <div
              style={{
                position: 'absolute',
                inset: 1,
                borderRadius: cornerRadius - 1,
                border: '1px solid rgba(255, 255, 255, 0.3)',
                pointerEvents: 'none',
              }}
            />
          </>
        )}
        {children}
      </motion.div>
    </>
  );
}

export { LiquidGlassPill };

export function LiquidGlassHeader() {
  // Pill dimensions (scaled 25%)
  const logoPillWidth = 100;
  const logoPillHeight = 70;
  const hamburgerPillWidth = 70;
  const hamburgerPillHeight = 70;
  const barHeight = hamburgerPillHeight;

  const [isExpanded, setIsExpanded] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);
  const [expandedDimensions, setExpandedDimensions] = useState({
    width: 1100,
    height: barHeight,
  });
  const [mobileMenuDimensions, setMobileMenuDimensions] = useState({
    width: 320,
    height: 280,
  });
  const [isMobile, setIsMobile] = useState(false);
  const [navVisible, setNavVisible] = useState(false);
  const [pendingClose, setPendingClose] = useState(false);
  const [showIdlePill, setShowIdlePill] = useState(true);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);
  const [headerTheme, setHeaderTheme] = useState<'light' | 'dark'>(
    pathname?.startsWith('/industries') ? 'dark' : 'light',
  );
  const navOpenTimeoutRef = useRef<number | null>(null);
  const collapseTimeoutRef = useRef<number | null>(null);
  const idlePillTimeoutRef = useRef<number | null>(null);
  const dropdownTimeoutRef = useRef<number | null>(null);

  const logoPillId = useId();
  const hamburgerPillId = useId();
  const expandedFilterId = useId();
  const mobileMenuFilterId = useId();

  const cornerRadius = Math.min(barHeight / 2, 36);
  const dpr =
    typeof window !== 'undefined' ? Math.min(window.devicePixelRatio, 2) : 1;
  const isDark = headerTheme === 'dark';
  const primaryColor = isDark ? '#f8fafc' : '#0f172a';
  const secondaryColor = isDark ? 'rgba(248,250,252,0.75)' : '#4b5563';
  const accentColor = isDark ? '#b7dcff' : '#025082';
  // Force logo to pure black on light and pure white on dark
  // Force logo to pure black (light) or pure white (dark)
  const logoFilter = isDark ? 'brightness(0) invert(1)' : 'brightness(0)';
  const hamburgerColor = isDark ? '#f8fafc' : '#000000';
  const mobileLiquidConfig: LiquidGlassConfig = {
    glassThickness: 170,
    bezelWidth: 35,
    blur: 5.5,
    refractiveIndex: 1.5,
    specularOpacity: 0.65,
    specularSaturation: 1.2,
    brightness: 1.1,
  };

  const closeNav = useCallback(() => {
    if (navOpenTimeoutRef.current) {
      clearTimeout(navOpenTimeoutRef.current);
      navOpenTimeoutRef.current = null;
    }
    if (collapseTimeoutRef.current) {
      clearTimeout(collapseTimeoutRef.current);
      collapseTimeoutRef.current = null;
    }
    if (idlePillTimeoutRef.current) {
      clearTimeout(idlePillTimeoutRef.current);
      idlePillTimeoutRef.current = null;
    }
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }
    setOpenDropdown(null);
    setOpenMobileDropdown(null);
    setNavVisible(false);
    setPendingClose(false);
    setIsExpanded(false);
    setShowIdlePill(false);
    idlePillTimeoutRef.current = window.setTimeout(() => {
      setShowIdlePill(true);
      idlePillTimeoutRef.current = null;
    }, 280);
  }, []);

  useEffect(() => {
    setMounted(true);

    return () => {
      if (navOpenTimeoutRef.current) {
        clearTimeout(navOpenTimeoutRef.current);
      }
      if (collapseTimeoutRef.current) {
        clearTimeout(collapseTimeoutRef.current);
      }
      if (idlePillTimeoutRef.current) {
        clearTimeout(idlePillTimeoutRef.current);
      }
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current);
      }
    };
  }, []);

  // Switch header colors based on annotated sections
  useEffect(() => {
    const updateTheme = () => {
      const sections = Array.from(document.querySelectorAll<HTMLElement>('[data-header-theme]'));
      const sampleY = (containerRef.current?.getBoundingClientRect().bottom ?? barHeight + 32) + 24;
      let nextTheme: 'light' | 'dark' = pathname.startsWith('/industries') ? 'dark' : 'light';

      for (const section of sections) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= sampleY && rect.bottom >= sampleY) {
          const theme = (section.getAttribute('data-header-theme') as 'light' | 'dark' | null) ?? nextTheme;
          nextTheme = theme;
          break;
        }
      }

      setHeaderTheme(nextTheme);
    };

    updateTheme();
    window.addEventListener('scroll', updateTheme, { passive: true });
    window.addEventListener('resize', updateTheme);
    return () => {
      window.removeEventListener('scroll', updateTheme);
      window.removeEventListener('resize', updateTheme);
    };
  }, [pathname]);

  useEffect(() => {
    if (!isExpanded) return;

    // Calculate fixed width: from hamburger position (right) to before logo pill (left)
    // Logo pill is at left, hamburger is at right
    // Width = container width - logo pill width - minimal gap to leave space between logo and liquid glass
    const calculateFixedWidth = () => {
      const containerWidth = Math.min(1044, window.innerWidth - 80);
      const logoPillWithGap = logoPillWidth + 8; // shrink gap to ~20% of previous
      const calculatedWidth = Math.max(containerWidth - logoPillWithGap, hamburgerPillWidth);
      
      setExpandedDimensions({
        width: calculatedWidth,
        height: barHeight,
      });
    };

    // Calculate once when expanded
    const timeoutId = setTimeout(calculateFixedWidth, 50);

    // Only update on actual window resize, not container resize
    const handleResize = () => {
      calculateFixedWidth();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('resize', handleResize);
    };
  }, [isExpanded]);

  useEffect(() => {
    const updateIsMobile = () => {
      const nextIsMobile = window.innerWidth <= 768;
      setIsMobile(nextIsMobile);
      if (nextIsMobile) {
        const horizontalPadding = 20;
        const available = Math.max(0, window.innerWidth - horizontalPadding * 2);
        const safeWidth = Math.max(
          160,
          Math.min(240, available * 0.45)
        );
        const itemHeight = 48;
        const gap = 12;
        const verticalPadding = 24;
        const childCount = navLinks.reduce(
          (sum, link) => sum + (link.dropdownItems ? link.dropdownItems.length : 0),
          0
        );
        const totalItems = navLinks.length + childCount;
        setMobileMenuDimensions({
          width: safeWidth,
          height: totalItems * itemHeight + Math.max(0, totalItems - 1) * gap + verticalPadding,
        });
      }
    };

    updateIsMobile();
    window.addEventListener('resize', updateIsMobile);
    return () => window.removeEventListener('resize', updateIsMobile);
  }, []);

  // Generate filters for pills
  const logoPillFilter = useMemo(() => {
    if (!mounted) {
      return { displacementMapUrl: '', specularMapUrl: '', maxDisplacement: 1 };
    }
    return generateLiquidGlassFilter(
      logoPillWidth,
      logoPillHeight,
      cornerRadius,
      dpr
    );
  }, [mounted, dpr]);

  const hamburgerPillFilter = useMemo(() => {
    if (!mounted) {
      return { displacementMapUrl: '', specularMapUrl: '', maxDisplacement: 1 };
    }
    return generateLiquidGlassFilter(
      hamburgerPillWidth,
      hamburgerPillHeight,
      cornerRadius,
      dpr
    );
  }, [mounted, dpr]);

  // Generate filter for expanded header
  const expandedFilter = useMemo(() => {
    if (!isExpanded) {
      return { displacementMapUrl: '', specularMapUrl: '', maxDisplacement: 1 };
    }
    return generateLiquidGlassFilter(
      expandedDimensions.width,
      expandedDimensions.height,
      cornerRadius,
      dpr
    );
  }, [isExpanded, expandedDimensions.width, expandedDimensions.height, dpr]);

  const mobileMenuFilter = useMemo(() => {
    if (!isExpanded || !isMobile) {
      return { displacementMapUrl: '', specularMapUrl: '', maxDisplacement: 1 };
    }
    return generateLiquidGlassFilter(
      mobileMenuDimensions.width,
      mobileMenuDimensions.height,
      cornerRadius,
      dpr,
      mobileLiquidConfig
    );
  }, [
    isExpanded,
    isMobile,
    mobileMenuDimensions.width,
    mobileMenuDimensions.height,
    dpr,
  ]);

  // Check browser support
  const [supportsLiquid, setSupportsLiquid] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const isWebkit =
        /Safari/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent);
      const isFirefox = /Firefox/.test(navigator.userAgent);

      if (!isWebkit && !isFirefox) {
        const div = document.createElement('div');
        div.style.backdropFilter = `url(#test-filter)`;
        setSupportsLiquid(div.style.backdropFilter !== '');
      }
    }
  }, []);

  const handleHamburgerClick = () => {
    // Opening: expand first, then show nav shortly after
    if (!isExpanded) {
      setIsExpanded(true);
      setPendingClose(false);
      setShowIdlePill(false);

      if (navOpenTimeoutRef.current) {
        clearTimeout(navOpenTimeoutRef.current);
      }
      if (idlePillTimeoutRef.current) {
        clearTimeout(idlePillTimeoutRef.current);
      }

      navOpenTimeoutRef.current = window.setTimeout(() => {
        setNavVisible(true);
      }, 80);
      return;
    }

    // Closing: hide nav first, then collapse container after nav exit
    if (navOpenTimeoutRef.current) {
      clearTimeout(navOpenTimeoutRef.current);
    }
    if (collapseTimeoutRef.current) {
      clearTimeout(collapseTimeoutRef.current);
    }
    if (idlePillTimeoutRef.current) {
      clearTimeout(idlePillTimeoutRef.current);
    }
    setPendingClose(true);
    setNavVisible(false);
    setShowIdlePill(false);

    // If links are already hidden, collapse immediately
    if (!navVisible) {
      setIsExpanded(false);
      setPendingClose(false);
      idlePillTimeoutRef.current = window.setTimeout(() => {
        setShowIdlePill(true);
        idlePillTimeoutRef.current = null;
      }, 280);
      return;
    }

    // Begin collapsing shortly after link exit starts (do not wait for completion)
    collapseTimeoutRef.current = window.setTimeout(() => {
      setIsExpanded(false);
      setPendingClose(false);
      collapseTimeoutRef.current = null;
      idlePillTimeoutRef.current = window.setTimeout(() => {
        setShowIdlePill(true);
        idlePillTimeoutRef.current = null;
      }, 280);
    }, 90);
  };

  return (
    <>
      {/* Click-away overlay to close when tapping outside */}
      {isExpanded && (
        <div
          onClick={handleHamburgerClick}
          aria-hidden="true"
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 900,
            background: 'transparent',
          }}
        />
      )}

      <header
        style={{
          position: 'fixed',
          top: 16,
          left: 0,
          right: 0,
          zIndex: 1000,
          display: 'flex',
          justifyContent: 'center',
          padding: '0 16px',
        }}
      >
        {/* Consistent Container - Logo and Hamburger always in same positions */}
        <div
          style={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: 'min(1300px, calc(100vw - 10px))',
            height: barHeight,
          }}
        >
          {/* Logo - Always fixed position, centered in pill */}
          <Link
            href="/"
            aria-label="R² home"
            style={{
              position: 'absolute',
              left: logoPillWidth / 2,
              top: '50%',
              transform: 'translate(-50%, -50%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: logoPillWidth,
              height: logoPillHeight,
              padding: '8px 12px',
              boxSizing: 'border-box',
              textDecoration: 'none',
              zIndex: 3,
              cursor: 'pointer',
              userSelect: 'none',
              WebkitUserSelect: 'none',
              MozUserSelect: 'none',
              msUserSelect: 'none',
              pointerEvents: 'auto',
            }}
          >
            <img
              src="/r2-logo.png"
              alt="R²"
              style={{
                display: 'block',
                width: '100%',
                height: '100%',
                maxWidth: logoPillWidth,
                maxHeight: logoPillHeight,
                objectFit: 'contain',
                  filter: logoFilter,
              }}
            />
          </Link>

          {/* Hamburger - pill and icon share the same anchor box */}
          <div
            style={{
              position: 'absolute',
              right: 0,
              top: '50%',
              transform: 'translateY(-50%)',
              width: hamburgerPillWidth,
              height: hamburgerPillHeight,
              pointerEvents: 'none',
              zIndex: 3,
            }}
          >
            <AnimatePresence mode="wait">
              {!isExpanded && showIdlePill && (
                <motion.div
                  key="hamburger-pill"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.2 }}
                  style={{
                    position: 'absolute',
                    inset: 0,
                    zIndex: 1,
                  }}
                >
                  <LiquidGlassPill
                    filterId={`${hamburgerPillId}-filter`}
                    width={hamburgerPillWidth}
                    height={hamburgerPillHeight}
                    supportsLiquid={supportsLiquid}
                    displacementMapUrl={hamburgerPillFilter.displacementMapUrl}
                    specularMapUrl={hamburgerPillFilter.specularMapUrl}
                    maxDisplacement={hamburgerPillFilter.maxDisplacement}
                    mounted={mounted}
                  >
                    <div style={{ width: hamburgerPillWidth, height: hamburgerPillHeight }} />
                  </LiquidGlassPill>
                </motion.div>
              )}
            </AnimatePresence>

            <button
              onClick={handleHamburgerClick}
              aria-label="Toggle menu"
              style={{
                position: 'absolute',
                inset: 0,
                padding: 0,
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                zIndex: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                pointerEvents: 'auto',
              }}
            >
              <div
                style={{
                  width: 20,
                  height: 14,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <motion.span
                  animate={{
                    rotate: isExpanded ? 45 : 0,
                    y: isExpanded ? 6 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  style={{
                    height: 2,
                    background: hamburgerColor,
                  }}
                />
                <motion.span
                  animate={{ opacity: isExpanded ? 0 : 1 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    height: 2,
                    background: hamburgerColor,
                  }}
                />
                <motion.span
                  animate={{
                    rotate: isExpanded ? -45 : 0,
                    y: isExpanded ? -6 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  style={{
                    height: 2,
                    background: hamburgerColor,
                  }}
                />
              </div>
            </button>
          </div>

          {/* Logo Pill - Always visible */}
          <div
            style={{
              position: 'absolute',
              left: 0,
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 2,
            }}
          >
            <LiquidGlassPill
              filterId={`${logoPillId}-filter`}
              width={logoPillWidth}
              height={logoPillHeight}
              supportsLiquid={supportsLiquid}
              displacementMapUrl={logoPillFilter.displacementMapUrl}
              specularMapUrl={logoPillFilter.specularMapUrl}
              maxDisplacement={logoPillFilter.maxDisplacement}
              mounted={mounted}
            >
              <div style={{ width: logoPillWidth, height: logoPillHeight }} />
            </LiquidGlassPill>
          </div>

          {/* Liquid Glass Container - Expands from hamburger position */}
          <AnimatePresence mode="wait">
            {isExpanded && !isMobile && (
              // Expanded Liquid Glass - Flows from right to left, crashes into logo pill
              <motion.div
                key="expanded-container"
                ref={containerRef}
                initial={{
                  width: hamburgerPillWidth,
                }}
                animate={{
                  width: expandedDimensions.width,
                }}
                exit={{
                  width: hamburgerPillWidth,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 180,
                  damping: 22,
                  mass: 0.9,
                  velocity: 2,
                }}
              style={{
                position: 'absolute',
                right: 0,
                top: '50%',
                transform: 'translateY(-50%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: 32,
                padding: '14px 30px',
                borderRadius: cornerRadius,
                height: barHeight,
                background: 'rgba(255, 255, 255, 0.08)',
                backdropFilter:
                  mounted && supportsLiquid && expandedFilter.displacementMapUrl
                    ? `url(#${expandedFilterId}-filter)`
                    : 'blur(20px) saturate(180%)',
                WebkitBackdropFilter:
                  mounted && supportsLiquid && expandedFilter.displacementMapUrl
                    ? `url(#${expandedFilterId}-filter)`
                    : 'blur(20px) saturate(180%)',
                boxShadow: `
                  0 8px 32px rgba(0, 0, 0, 0.08),
                  0 0 0 1px rgba(255, 255, 255, 0.3),
                  inset 0 1px 0 rgba(255, 255, 255, 0.5)
                `,
                overflow: 'visible',
                transformOrigin: 'right center',
                zIndex: 1,
                pointerEvents: 'auto',
              }}
            >
              <LiquidGlassFilter
                filterId={`${expandedFilterId}-filter`}
                width={expandedDimensions.width}
                height={expandedDimensions.height}
                displacementMapUrl={expandedFilter.displacementMapUrl}
                specularMapUrl={expandedFilter.specularMapUrl}
                maxDisplacement={expandedFilter.maxDisplacement}
              />

              {!supportsLiquid && (
                <>
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      borderRadius: cornerRadius,
                      background:
                        'linear-gradient(135deg, rgba(255,255,255,0.25) 0%, transparent 50%)',
                      pointerEvents: 'none',
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      inset: 1,
                      borderRadius: cornerRadius - 1,
                      border: '1px solid rgba(255, 255, 255, 0.3)',
                      pointerEvents: 'none',
                    }}
                  />
                </>
              )}

              {/* Navigation Links - Flow from right */}
              <AnimatePresence>
                {isExpanded && navVisible && (
                  <motion.nav
                    initial={{ opacity: 0, x: 20 }} // enter from right
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ 
                      opacity: 0,
                      x: -20, // exit to left
                      transition: {
                        // Let child link exits finish first, but collapse sooner
                        delay: 0.03,
                        duration: 0.18,
                        ease: [0.16, 1, 0.3, 1]
                      }
                    }}
                    transition={{ 
                      delay: 0.1, 
                      duration: 0.36,
                      ease: [0.16, 1, 0.3, 1] // Liquid-like easing
                    }}
                    style={{
                      position: 'relative',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 18,
                      flexWrap: 'wrap',
                      zIndex: 100,
                      marginRight: 'auto',
                      pointerEvents: 'auto',
                      overflow: 'visible',
                    }}
                  >
                    {navLinks.map((link, index) => {
                      const isActive = pathname === link.href || pathname.startsWith(link.href + '/');
                      const enterStagger = navLinks.length - 1 - index; // rightmost first
                      const hasDropdown = !!link.dropdownItems?.length;
                      const isOpen = openDropdown === link.href;
                      return (
                        <motion.div
                          key={link.href}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ 
                            opacity: 1, 
                            scale: 1,
                            transition: {
                              delay: 0.18 + enterStagger * 0.035,
                              duration: 0.3,
                              ease: [0.16, 1, 0.3, 1]
                            }
                          }}
                          exit={{ 
                            opacity: 0, 
                            x: -16,
                            scale: 1,
                            transition: {
                              delay: index * 0.035, // exit begins left, ends right
                              duration: 0.36,
                              ease: [0.16, 1, 0.3, 1]
                            }
                          }}
                          style={{ 
                            transformOrigin: 'left center', 
                            position: 'relative', 
                            zIndex: hasDropdown ? 20 : 10, 
                            pointerEvents: 'auto',
                          }}
                          onMouseEnter={() => {
                            if (!isMobile && hasDropdown) {
                              if (dropdownTimeoutRef.current) {
                                clearTimeout(dropdownTimeoutRef.current);
                                dropdownTimeoutRef.current = null;
                              }
                              setOpenDropdown(link.href);
                            }
                          }}
                          onMouseLeave={(e) => {
                            if (!isMobile && hasDropdown) {
                              const relatedTarget = e.relatedTarget as HTMLElement | null;
                              const currentTarget = e.currentTarget as HTMLElement;
                              
                              // Check if mouse is moving to dropdown menu or bridge areas
                              if (relatedTarget) {
                                const dropdown = currentTarget.querySelector('[data-dropdown-menu]');
                                // Check if relatedTarget is the dropdown or any of its children (including bridges)
                                if (dropdown && (
                                  dropdown === relatedTarget ||
                                  dropdown.contains(relatedTarget) ||
                                  relatedTarget.closest('[data-dropdown-menu]') === dropdown
                                )) {
                                  return; // Don't close, mouse is moving to dropdown
                                }
                              }
                              
                              // Only close if truly leaving the entire area
                              if (dropdownTimeoutRef.current) {
                                clearTimeout(dropdownTimeoutRef.current);
                                dropdownTimeoutRef.current = null;
                              }
                              setOpenDropdown(null);
                            }
                          }}
                        >
                          {hasDropdown ? (
                            <div
                              style={{
                                fontSize: '1rem',
                                fontWeight: 600,
                                color: primaryColor,
                                transition: 'opacity 0.2s',
                                opacity: isActive ? 1 : 0.82,
                                fontFamily: "var(--font-inter), sans-serif",
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: 6,
                                letterSpacing: '0.01em',
                                cursor: 'default',
                                userSelect: 'none',
                                WebkitUserSelect: 'none',
                                MozUserSelect: 'none',
                                msUserSelect: 'none',
                                position: 'relative',
                                zIndex: 10,
                                pointerEvents: 'auto',
                                padding: '4px 0',
                              }}
                              onClick={(e) => {
                                e.preventDefault();
                                // Do nothing - dropdown only, no navigation
                              }}
                            >
                              {link.label}
                              <span style={{ fontSize: '0.8rem', opacity: 0.75, color: secondaryColor }}>▾</span>
                            </div>
                          ) : (
                            <Link
                              href={link.href}
                              style={{
                                fontSize: '1rem',
                                fontWeight: 600,
                                color: primaryColor,
                                textDecoration: 'none',
                                transition: 'opacity 0.2s',
                                opacity: isActive ? 1 : 0.82,
                                fontFamily: "var(--font-inter), sans-serif",
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: 0,
                                letterSpacing: '0.01em',
                                cursor: 'pointer',
                                userSelect: 'none',
                                WebkitUserSelect: 'none',
                                MozUserSelect: 'none',
                                msUserSelect: 'none',
                                position: 'relative',
                                zIndex: 10,
                                pointerEvents: 'auto',
                              }}
                              onClick={(e) => {
                                e.preventDefault();
                                closeNav();
                                router.push(link.href);
                              }}
                            >
                              {link.label}
                            </Link>
                          )}
                          {hasDropdown && isOpen && (
                            <motion.div
                              data-dropdown-menu
                              initial={{ opacity: 0, y: -6 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -6 }}
                              transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                              onMouseEnter={() => {
                                if (!isMobile) {
                                  if (dropdownTimeoutRef.current) {
                                    clearTimeout(dropdownTimeoutRef.current);
                                    dropdownTimeoutRef.current = null;
                                  }
                                  setOpenDropdown(link.href);
                                }
                              }}
                              onMouseLeave={(e) => {
                                if (!isMobile) {
                                  // Check if mouse is moving back to trigger
                                  const relatedTarget = e.relatedTarget as HTMLElement;
                                  const currentTarget = e.currentTarget as HTMLElement;
                                  const parent = currentTarget.parentElement;
                                  if (relatedTarget && parent && parent.contains(relatedTarget)) {
                                    return; // Don't close, mouse is moving back to trigger
                                  }
                                  // Close immediately if truly leaving
                                  if (dropdownTimeoutRef.current) {
                                    clearTimeout(dropdownTimeoutRef.current);
                                    dropdownTimeoutRef.current = null;
                                  }
                                  setOpenDropdown(null);
                                }
                              }}
                              style={{
                                position: 'absolute',
                                top: '100%',
                                left: '-20px',
                                right: '-20px',
                                marginTop: '8px',
                                minWidth: 200,
                                padding: '10px 12px',
                                borderRadius: 14,
                                background: isDark ? 'rgba(15,23,42,0.9)' : 'rgba(255,255,255,0.95)',
                                boxShadow: '0 12px 32px rgba(0,0,0,0.22), 0 0 0 1px rgba(255,255,255,0.35)',
                                backdropFilter: 'blur(16px) saturate(160%)',
                                zIndex: 1000,
                                pointerEvents: 'auto',
                              }}
                            >
                              {/* Invisible bridge area covering the gap - extends upward and sideways to create unified hitbox */}
                              <div
                                onMouseEnter={() => {
                                  if (!isMobile) {
                                    if (dropdownTimeoutRef.current) {
                                      clearTimeout(dropdownTimeoutRef.current);
                                      dropdownTimeoutRef.current = null;
                                    }
                                    setOpenDropdown(link.href);
                                  }
                                }}
                                style={{
                                  position: 'absolute',
                                  bottom: '100%',
                                  left: '-40px',
                                  right: '-40px',
                                  height: '20px',
                                  pointerEvents: 'auto',
                                  zIndex: 1001,
                                }}
                              />
                              {/* Extended hitbox on sides of dropdown */}
                              <div
                                onMouseEnter={() => {
                                  if (!isMobile) {
                                    if (dropdownTimeoutRef.current) {
                                      clearTimeout(dropdownTimeoutRef.current);
                                      dropdownTimeoutRef.current = null;
                                    }
                                    setOpenDropdown(link.href);
                                  }
                                }}
                                style={{
                                  position: 'absolute',
                                  top: 0,
                                  bottom: 0,
                                  left: '-40px',
                                  width: '40px',
                                  pointerEvents: 'auto',
                                  zIndex: 1001,
                                }}
                              />
                              <div
                                onMouseEnter={() => {
                                  if (!isMobile) {
                                    if (dropdownTimeoutRef.current) {
                                      clearTimeout(dropdownTimeoutRef.current);
                                      dropdownTimeoutRef.current = null;
                                    }
                                    setOpenDropdown(link.href);
                                  }
                                }}
                                style={{
                                  position: 'absolute',
                                  top: 0,
                                  bottom: 0,
                                  right: '-40px',
                                  width: '40px',
                                  pointerEvents: 'auto',
                                  zIndex: 1001,
                                }}
                              />
                              <div
                                style={{
                                  position: 'relative',
                                  zIndex: 1,
                                }}
                              >
                                <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                                  {link.dropdownItems?.map((item) => {
                                    const itemActive = pathname === item.href || pathname.startsWith(item.href + '/');
                                    return (
                                      <Link
                                        key={item.href}
                                        href={item.href}
                                        style={{
                                          padding: '8px 10px',
                                          borderRadius: 10,
                                          textDecoration: 'none',
                                          color: itemActive ? accentColor : primaryColor,
                                          fontWeight: 600,
                                          transition: 'background 0.2s, color 0.2s',
                                          cursor: 'pointer',
                                          userSelect: 'none',
                                          WebkitUserSelect: 'none',
                                          MozUserSelect: 'none',
                                          msUserSelect: 'none',
                                          pointerEvents: 'auto',
                                        }}
                                        onClick={() => {
                                          // Clear timeout and close immediately
                                          if (dropdownTimeoutRef.current) {
                                            clearTimeout(dropdownTimeoutRef.current);
                                            dropdownTimeoutRef.current = null;
                                          }
                                          setOpenDropdown(null);
                                          closeNav();
                                        }}
                                        onMouseEnter={() => {
                                          // Keep dropdown open when hovering items
                                          if (!isMobile) {
                                            if (dropdownTimeoutRef.current) {
                                              clearTimeout(dropdownTimeoutRef.current);
                                              dropdownTimeoutRef.current = null;
                                            }
                                            setOpenDropdown(link.href);
                                          }
                                        }}
                                      >
                                        {item.label}
                                      </Link>
                                    );
                                  })}
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </motion.div>
                      );
                    })}
                  </motion.nav>
                )}
              </AnimatePresence>
            </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Mobile Liquid Glass Dropdown */}
        {isMobile && (
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                key="mobile-menu"
                initial={{ opacity: 0, y: -8, scale: 0.98 }}
                animate={{ opacity: 1, y: 8, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: 0.98 }}
                transition={{
                  duration: 0.24,
                  ease: [0.16, 1, 0.3, 1],
                }}
                style={{
                  position: 'absolute',
                  top: 72,
                  right: 16,
                  width: mobileMenuDimensions.width,
                  height: mobileMenuDimensions.height,
                  borderRadius: cornerRadius,
                  background: 'rgba(255, 255, 255, 0.08)',
                  backdropFilter:
                    mounted && supportsLiquid && mobileMenuFilter.displacementMapUrl
                      ? `url(#${mobileMenuFilterId}-filter)`
                      : 'blur(20px) saturate(180%)',
                  WebkitBackdropFilter:
                    mounted && supportsLiquid && mobileMenuFilter.displacementMapUrl
                      ? `url(#${mobileMenuFilterId}-filter)`
                      : 'blur(20px) saturate(180%)',
                  boxShadow: `
                    0 12px 36px rgba(0, 0, 0, 0.12),
                    0 0 0 1px rgba(255, 255, 255, 0.3),
                    inset 0 1px 0 rgba(255, 255, 255, 0.5)
                  `,
                  overflow: 'hidden',
                padding: '18px 14px',
                  display: 'flex',
                  flexDirection: 'column',
                gap: 12,
                  zIndex: 0,
                }}
              >
                <LiquidGlassFilter
                  filterId={`${mobileMenuFilterId}-filter`}
                  width={mobileMenuDimensions.width}
                  height={mobileMenuDimensions.height}
                  displacementMapUrl={mobileMenuFilter.displacementMapUrl}
                  specularMapUrl={mobileMenuFilter.specularMapUrl}
                  maxDisplacement={mobileMenuFilter.maxDisplacement}
                  config={mobileLiquidConfig}
                />

                {!supportsLiquid && (
                  <>
                    <div
                      style={{
                        position: 'absolute',
                        inset: 0,
                        borderRadius: cornerRadius,
                        background:
                          'linear-gradient(135deg, rgba(255,255,255,0.25) 0%, transparent 50%)',
                        pointerEvents: 'none',
                      }}
                    />
                    <div
                      style={{
                        position: 'absolute',
                        inset: 1,
                        borderRadius: cornerRadius - 1,
                        border: '1px solid rgba(255, 255, 255, 0.3)',
                        pointerEvents: 'none',
                      }}
                    />
                  </>
                )}

                <AnimatePresence>
                  {navVisible && (
                    <motion.nav
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{
                        opacity: 0,
                        y: -8,
                        transition: { duration: 0.18, ease: [0.16, 1, 0.3, 1] },
                      }}
                      transition={{
                        duration: 0.26,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 12,
                        zIndex: 2,
                      }}
                    >
                      {navLinks.map((link, index) => {
                        const isActive = pathname === link.href || pathname.startsWith(link.href + '/');
                        const hasDropdown = !!link.dropdownItems?.length;
                        const isOpen = openMobileDropdown === link.href;
                        return (
                          <motion.div
                            key={link.href}
                            initial={{ opacity: 0, y: -6 }}
                            animate={{
                              opacity: 1,
                              y: 0,
                              transition: {
                                delay: 0.08 + index * 0.04,
                                duration: 0.24,
                                ease: [0.16, 1, 0.3, 1],
                              },
                            }}
                            exit={{
                              opacity: 0,
                              y: -6,
                              transition: {
                                delay: index * 0.02,
                                duration: 0.2,
                                ease: [0.16, 1, 0.3, 1],
                              },
                            }}
                            style={{ display: 'flex', flexDirection: 'column', gap: 6 }}
                          >
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8 }}>
                              <Link
                                href={link.href}
                                style={{
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'flex-start',
                                  padding: '0 6px',
                                  minHeight: 48,
                                  lineHeight: 1.3,
                                  borderRadius: 8,
                                  textDecoration: 'none',
                                  fontSize: '0.98rem',
                                  fontWeight: 600,
                                  color: primaryColor,
                                  background: 'transparent',
                                  transition: 'opacity 0.2s',
                                  opacity: isActive ? 1 : 0.92,
                                  fontFamily: "var(--font-inter), sans-serif",
                                  flex: 1,
                                  cursor: 'pointer',
                                  userSelect: 'none',
                                  WebkitUserSelect: 'none',
                                  MozUserSelect: 'none',
                                  msUserSelect: 'none',
                                  pointerEvents: 'auto',
                                }}
                                onClick={(e) => {
                                  if (hasDropdown) {
                                    e.preventDefault();
                                    setOpenMobileDropdown(isOpen ? null : link.href);
                                  } else {
                                    e.preventDefault();
                                    setOpenMobileDropdown(null);
                                    closeNav();
                                    router.push(link.href);
                                  }
                                }}
                              >
                                {link.label}
                              </Link>
                              {hasDropdown && (
                                <button
                                  onClick={() => setOpenMobileDropdown(isOpen ? null : link.href)}
                                  aria-label="Toggle submenu"
                                  style={{
                                    background: 'none',
                                    border: 'none',
                                    padding: '4px 6px',
                                    cursor: 'pointer',
                                    fontSize: '1rem',
                                  }}
                                >
                                  {isOpen ? '▾' : '▸'}
                                </button>
                              )}
                            </div>
                            {hasDropdown && isOpen && (
                              <div style={{ display: 'flex', flexDirection: 'column', gap: 4, paddingLeft: 6 }}>
                                {link.dropdownItems?.map((item) => {
                                  const itemActive = pathname === item.href || pathname.startsWith(item.href + '/');
                                  return (
                                    <Link
                                      key={item.href}
                                      href={item.href}
                                      style={{
                                        padding: '10px 10px',
                                        borderRadius: 8,
                                        textDecoration: 'none',
                                        color: itemActive ? accentColor : primaryColor,
                                        fontWeight: 600,
                                        background: 'rgba(255,255,255,0.6)',
                                        cursor: 'pointer',
                                        userSelect: 'none',
                                        WebkitUserSelect: 'none',
                                        MozUserSelect: 'none',
                                        msUserSelect: 'none',
                                        pointerEvents: 'auto',
                                      }}
                                      onClick={() => {
                                        setOpenMobileDropdown(null);
                                        closeNav();
                                      }}
                                    >
                                      {item.label}
                                    </Link>
                                  );
                                })}
                              </div>
                            )}
                          </motion.div>
                        );
                      })}
                    </motion.nav>
                  )}
                </AnimatePresence>
              </motion.div>
            )}
          </AnimatePresence>
        )}
      </header>
    </>
  );
}
