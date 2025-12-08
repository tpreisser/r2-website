'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Header.module.css';

interface DropdownItem {
  href: string;
  label: string;
  description: string;
}

interface NavLink {
  href: string;
  label: string;
  hasDropdown?: boolean;
  dropdownItems?: DropdownItem[];
}

const industriesMenu: DropdownItem[] = [
  { href: '/industries', label: 'All Industries', description: 'View all industries we serve' },
  { href: '/industries/insurance', label: 'Insurance', description: 'Cross-sell automation, claims processing' },
  { href: '/industries/healthcare', label: 'Healthcare', description: 'Patient care coordination, compliance' },
  { href: '/industries/financial-services', label: 'Financial Services', description: 'Wealth management, fraud detection' },
  { href: '/industries/home-services', label: 'Home Services', description: 'Scheduling, customer communication' },
  { href: '/industries/professional-services', label: 'Professional Services', description: 'Law, accounting, consulting' },
  { href: '/industries/construction-infrastructure', label: 'Construction & Infrastructure', description: 'Estimation, safety, scheduling' },
  { href: '/industries/hospitality-travel', label: 'Hospitality & Travel', description: 'Guest experiences, revenue optimization' },
  { href: '/industries/agriculture-food', label: 'Agriculture & Food', description: 'Precision agriculture, supply chain' },
  { href: '/industries/sports-entertainment', label: 'Sports & Entertainment', description: 'Fan engagement, ticketing, operations' },
];

const servicesMenu: DropdownItem[] = [
  { href: '/services', label: 'All Services', description: 'Overview of how we work' },
  { href: '/services/the-forge', label: 'The Forge', description: 'One-day build with guaranteed value' },
  { href: '/services/agent-factory', label: 'Agent Factory', description: 'Pre-built agents ready to deploy' },
  { href: '/services/process-automation', label: 'Process Automation', description: 'AI-powered operational automation' },
  { href: '/services/advisory', label: 'Advisory', description: 'Strategy from people who build' },
];

const aboutMenu: DropdownItem[] = [
  { href: '/about', label: 'About R²', description: 'Our story and approach' },
  { href: '/about/methodology', label: 'Methodology', description: 'How we work' },
  { href: '/about/technology', label: 'Technology', description: 'Our technical philosophy' },
  { href: '/about/leadership', label: 'Leadership', description: 'Meet the team' },
  { href: '/about/careers', label: 'Careers', description: 'Join our team' },
];

const navLinks: NavLink[] = [
  {
    href: '/industries',
    label: 'Industries',
    hasDropdown: true,
    dropdownItems: industriesMenu,
  },
  {
    href: '/services',
    label: 'Services',
    hasDropdown: true,
    dropdownItems: servicesMenu,
  },
  { href: '/insights', label: 'Insights' },
  { 
    href: '/about', 
    label: 'About',
    hasDropdown: true,
    dropdownItems: aboutMenu,
  },
  { href: '/contact', label: 'Contact' },
];

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState<string | null>(null);
  const [headerTheme, setHeaderTheme] = useState<'light' | 'dark'>(
    pathname && pathname.startsWith('/industries') ? 'dark' : 'light',
  );
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Ensure a deterministic base theme when the route changes (e.g., industry pages start dark)
  useEffect(() => {
    setHeaderTheme(pathname.startsWith('/industries') ? 'dark' : 'light');
  }, [pathname]);

  // Handle hash scrolling after navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      if (hash) {
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            const headerOffset = 100;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth',
            });
          }
        }, 100);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [pathname]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current);
      }
    };
  }, []);

  // Dynamically switch header colors based on page background regions
  useEffect(() => {
    const calculateTheme = () => {
      const sections = Array.from(document.querySelectorAll<HTMLElement>('[data-header-theme]'));
      const headerBottom = document.querySelector('header')?.getBoundingClientRect().bottom ?? 96;
      // Sample a bit below the header bottom to avoid early flips
      const viewY = headerBottom + 24;
      let nextTheme: 'light' | 'dark' = pathname.startsWith('/industries') ? 'dark' : 'light';

      if (!sections.length) {
        setHeaderTheme(nextTheme);
        return;
      }

      for (const section of sections) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= viewY && rect.bottom >= viewY) {
          const theme = (section.getAttribute('data-header-theme') as 'light' | 'dark' | null) ?? 'light';
          nextTheme = theme;
          break;
        }
      }

      setHeaderTheme(nextTheme);
    };

    calculateTheme();
    window.addEventListener('scroll', calculateTheme, { passive: true });
    window.addEventListener('resize', calculateTheme);
    return () => {
      window.removeEventListener('scroll', calculateTheme);
      window.removeEventListener('resize', calculateTheme);
    };
  }, [pathname]);

  const isDark = headerTheme === 'dark';
  const baseText = isDark ? '#f8fafc' : '#1f2937';
  const accentText = isDark ? '#b7dcff' : '#025082';
  const subText = isDark ? 'rgba(248,250,252,0.75)' : '#6b7280';
  // Force logo to pure black on light and pure white on dark
  // Force logo to pure black (light) or pure white (dark)
  const logoFilter = isDark ? 'brightness(0) invert(1)' : 'brightness(0)';

  return (
    <>
      {/* Liquid Glass Floating Header - FIXED CENTERING */}
      <header
        style={{
          position: 'fixed',
          top: '16px',
          left: '0',
          right: '0',
          zIndex: 50,
          display: 'flex',
          justifyContent: 'center',
          padding: '0 16px',
        }}
      >
        {/* Liquid Glass Container */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            maxWidth: '900px',
            borderRadius: '24px',
            overflow: 'hidden',
          }}
        >
          {/* STRONG Glass Background - Much more visible effect */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'rgba(255, 255, 255, 0.85)',
              backdropFilter: 'blur(60px) saturate(180%)',
              WebkitBackdropFilter: 'blur(60px) saturate(180%)',
              pointerEvents: 'none',
            }}
          />

          {/* Rainbow shimmer gradient overlay */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(135deg, rgba(255,200,200,0.15) 0%, rgba(200,200,255,0.15) 25%, rgba(200,255,200,0.1) 50%, rgba(255,255,200,0.15) 75%, rgba(255,200,200,0.15) 100%)',
              pointerEvents: 'none',
            }}
          />

          {/* Outer glow border */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              borderRadius: '24px',
              boxShadow: `
                0 0 0 1px rgba(255,255,255,0.6),
                0 0 20px rgba(255,255,255,0.3),
                0 8px 32px rgba(0,0,0,0.12),
                0 2px 8px rgba(0,0,0,0.08),
                inset 0 1px 1px rgba(255,255,255,0.8)
              `,
              pointerEvents: 'none',
            }}
          />

          {/* Animated shimmer effect */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              borderRadius: '24px',
              background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%)',
              backgroundSize: '200% 100%',
              animation: 'shimmer 3s ease-in-out infinite',
              pointerEvents: 'none',
            }}
          />

          {/* Inner highlight border */}
          <div
            style={{
              position: 'absolute',
              inset: '1px',
              borderRadius: '23px',
              border: '1px solid rgba(255,255,255,0.5)',
              pointerEvents: 'none',
            }}
          />

          {/* Content */}
          <div style={{ position: 'relative', padding: '14px 28px', zIndex: 10, pointerEvents: 'auto', overflow: 'visible' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              {/* Logo */}
              <Link 
                href="/" 
                className={styles.logoLink} 
                aria-label="R² home"
                style={{
                  cursor: 'pointer',
                  userSelect: 'none',
                  WebkitUserSelect: 'none',
                  MozUserSelect: 'none',
                  msUserSelect: 'none',
                }}
              >
                <img
                  src="/r2-logo.png"
                  alt="R²"
                  className={styles.logoImage}
                  style={{ filter: logoFilter, transition: 'filter 0.25s ease' }}
                />
              </Link>

              {/* Desktop Navigation */}
              <nav className={styles.desktopNav} style={{ display: 'flex', gap: 8, alignItems: 'center', position: 'relative', zIndex: 20, overflow: 'visible' }}>
                {navLinks.map((link) => {
                  const isActive = pathname === link.href || pathname.startsWith(link.href + '/');
                  const isDropdownOpen = openDropdown === link.href;

                  if (link.hasDropdown && link.dropdownItems) {
                    return (
                      <div
                        key={link.href}
                        style={{ position: 'relative', zIndex: 30 }}
                        onMouseEnter={() => {
                          if (dropdownTimeoutRef.current) {
                            clearTimeout(dropdownTimeoutRef.current);
                            dropdownTimeoutRef.current = null;
                          }
                          setOpenDropdown(link.href);
                        }}
                        onMouseLeave={() => {
                          dropdownTimeoutRef.current = setTimeout(() => {
                            setOpenDropdown(null);
                          }, 300);
                        }}
                      >
                        <div
                          style={{
                            fontSize: '0.9rem',
                            fontWeight: 500,
                            color: isActive ? accentText : baseText,
                            textDecoration: 'none',
                            transition: 'color 0.2s',
                            display: 'flex',
                            alignItems: 'center',
                            gap: 4,
                            padding: '8px 12px',
                            borderRadius: '8px',
                            cursor: 'default',
                            pointerEvents: 'auto',
                            userSelect: 'none',
                            WebkitUserSelect: 'none',
                            MozUserSelect: 'none',
                            msUserSelect: 'none',
                          }}
                        >
                          {link.label}
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                            style={{
                              transform: isDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                              transition: 'transform 0.2s',
                            }}
                          >
                            <path
                              d="M3 4.5L6 7.5L9 4.5"
                            stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>

                        {/* Dropdown Menu */}
                        <AnimatePresence>
                          {isDropdownOpen && (
                            <motion.div
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -10 }}
                              transition={{ duration: 0.2 }}
                              onMouseEnter={() => {
                                if (dropdownTimeoutRef.current) {
                                  clearTimeout(dropdownTimeoutRef.current);
                                  dropdownTimeoutRef.current = null;
                                }
                                setOpenDropdown(link.href);
                              }}
                              onMouseLeave={() => {
                                dropdownTimeoutRef.current = setTimeout(() => {
                                  setOpenDropdown(null);
                                }, 300);
                              }}
                              style={{
                                position: 'absolute',
                                top: 'calc(100% - 8px)',
                                left: 0,
                                paddingTop: '16px',
                                minWidth: '280px',
                                zIndex: 1000,
                                pointerEvents: 'auto',
                              }}
                            >
                              {/* Invisible bridge to prevent gap - covers the space between trigger and dropdown */}
                              <div
                                onMouseEnter={() => {
                                  if (dropdownTimeoutRef.current) {
                                    clearTimeout(dropdownTimeoutRef.current);
                                    dropdownTimeoutRef.current = null;
                                  }
                                  setOpenDropdown(link.href);
                                }}
                                style={{
                                  position: 'absolute',
                                  top: 0,
                                  left: '-40px',
                                  right: '-40px',
                                  height: '20px',
                                  pointerEvents: 'auto',
                                  zIndex: 1001,
                                }}
                              />
                              <div
                                onMouseEnter={() => {
                                  if (dropdownTimeoutRef.current) {
                                    clearTimeout(dropdownTimeoutRef.current);
                                    dropdownTimeoutRef.current = null;
                                  }
                                  setOpenDropdown(link.href);
                                }}
                                style={{
                                  background: 'rgba(255, 255, 255, 0.95)',
                                  backdropFilter: 'blur(60px) saturate(180%)',
                                  WebkitBackdropFilter: 'blur(60px) saturate(180%)',
                                  borderRadius: '16px',
                                  boxShadow: '0 8px 32px rgba(0,0,0,0.12), 0 0 0 1px rgba(255,255,255,0.5)',
                                  padding: '8px',
                                  pointerEvents: 'auto',
                                }}
                              >
                            {link.dropdownItems.map((item) => {
                              const [basePath, hash] = item.href.split('#');
                              const hasHash = hash !== undefined;
                              const isOnTargetPage = pathname === basePath || pathname.startsWith(basePath + '/');
                              
                              return (
                              <Link
                                key={item.href}
                                href={item.href}
                                onClick={(e) => {
                                  // Close dropdown immediately
                                  setOpenDropdown(null);
                                  // For hash links when not on target page, ensure proper navigation
                                  if (hasHash && !isOnTargetPage) {
                                    // Next.js Link will handle navigation automatically
                                    // The solutions page has hash scrolling logic that will trigger
                                  }
                                }}
                                style={{
                                  display: 'block',
                                  padding: '12px 16px',
                                  borderRadius: '8px',
                                  textDecoration: 'none',
                                  transition: 'background 0.2s',
                                  cursor: 'pointer',
                                  pointerEvents: 'auto',
                                  userSelect: 'none',
                                  WebkitUserSelect: 'none',
                                  MozUserSelect: 'none',
                                  msUserSelect: 'none',
                                }}
                                onMouseEnter={(e) => {
                                  e.currentTarget.style.background = 'rgba(2,80,130,0.08)';
                                }}
                                onMouseLeave={(e) => {
                                  e.currentTarget.style.background = 'transparent';
                                }}
                              >
                                <div
                                  style={{
                                    fontSize: '0.9rem',
                                    fontWeight: 500,
                                  color: baseText,
                                    marginBottom: 4,
                                  }}
                                >
                                  {item.label}
                                </div>
                                <div
                                  style={{
                                    fontSize: '0.8rem',
                                  color: subText,
                                  }}
                                >
                                  {item.description}
                                </div>
                              </Link>
                              );
                            })}
                            </div>
                          </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  }

                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      style={{
                        fontSize: '0.9rem',
                        fontWeight: 500,
                        color: isActive ? accentText : baseText,
                        textDecoration: 'none',
                        transition: 'color 0.2s',
                        padding: '8px 12px',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        userSelect: 'none',
                        WebkitUserSelect: 'none',
                        MozUserSelect: 'none',
                        msUserSelect: 'none',
                        position: 'relative',
                        zIndex: 20,
                        pointerEvents: 'auto',
                      }}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </nav>

              {/* Mobile Menu Button */}
              <button
                className={styles.mobileMenuBtn}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
                style={{ padding: '8px', background: 'none', border: 'none', cursor: 'pointer' }}
              >
                <div style={{ width: '24px', height: '20px', position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <span style={{ 
                    width: '100%', height: '2px', backgroundColor: isDark ? '#f8fafc' : '#1f2937',
                    transition: 'all 0.3s', transformOrigin: 'center',
                    transform: isMobileMenuOpen ? 'rotate(45deg) translateY(9px)' : 'none'
                  }} />
                  <span style={{ 
                    width: '100%', height: '2px', backgroundColor: isDark ? '#f8fafc' : '#1f2937',
                    transition: 'opacity 0.3s', opacity: isMobileMenuOpen ? 0 : 1
                  }} />
                  <span style={{ 
                    width: '100%', height: '2px', backgroundColor: isDark ? '#f8fafc' : '#1f2937',
                    transition: 'all 0.3s', transformOrigin: 'center',
                    transform: isMobileMenuOpen ? 'rotate(-45deg) translateY(-9px)' : 'none'
                  }} />
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* CSS for shimmer animation */}
      <style jsx global>{`
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
      `}</style>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.3)', zIndex: 40, backdropFilter: 'blur(8px)' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => {
                setIsMobileMenuOpen(false);
                setMobileDropdownOpen(null);
              }}
            />

            {/* Main Menu Panel */}
            <motion.div
              style={{ 
                position: 'fixed', 
                top: '90px', 
                left: '16px', 
                right: '16px', 
                backgroundColor: 'rgba(255,255,255,0.9)', 
                backdropFilter: 'blur(60px) saturate(200%)',
                WebkitBackdropFilter: 'blur(60px) saturate(200%)',
                zIndex: 45, 
                borderRadius: '20px',
                boxShadow: '0 8px 32px rgba(0,0,0,0.15), 0 0 0 1px rgba(255,255,255,0.5)',
                maxHeight: 'calc(100vh - 120px)',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
              }}
              initial={{ opacity: 0, x: 0 }}
              animate={{ 
                opacity: 1, 
                x: mobileDropdownOpen ? '-100%' : 0,
              }}
              exit={{ opacity: 0, x: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <nav style={{ padding: '12px', overflowY: 'auto', flex: 1 }}>
                <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                  {navLinks.map((link, index) => {
                    if (link.hasDropdown && link.dropdownItems) {
                      return (
                        <motion.li
                          key={link.href}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                        >
                          <button
                            onClick={() => setMobileDropdownOpen(link.href)}
                            style={{
                              display: 'flex',
                              width: '100%',
                              padding: '16px 20px',
                              fontSize: '1.1rem',
                              fontWeight: 500,
                              borderRadius: '12px',
                              color: pathname === link.href ? '#025082' : '#1f2937',
                              textAlign: 'left',
                              background: 'transparent',
                              border: 'none',
                              cursor: 'pointer',
                              justifyContent: 'space-between',
                              alignItems: 'center',
                              userSelect: 'none',
                              WebkitUserSelect: 'none',
                              MozUserSelect: 'none',
                              msUserSelect: 'none',
                            }}
                          >
                            {link.label}
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                              style={{
                                transform: 'rotate(-90deg)',
                                transition: 'transform 0.2s',
                              }}
                            >
                              <path
                                d="M4 6L8 10L12 6"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </button>
                        </motion.li>
                      );
                    }

                    return (
                      <motion.li
                        key={link.href}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <Link
                          href={link.href}
                          onClick={() => {
                            setIsMobileMenuOpen(false);
                            setMobileDropdownOpen(null);
                          }}
                          style={{ 
                            display: 'block', 
                            padding: '16px 20px', 
                            fontSize: '1.1rem',
                            fontWeight: 500,
                            borderRadius: '12px',
                            color: pathname === link.href ? '#025082' : '#1f2937',
                            textDecoration: 'none',
                            backgroundColor: pathname === link.href ? 'rgba(2,80,130,0.08)' : 'transparent',
                            cursor: 'pointer',
                            userSelect: 'none',
                            WebkitUserSelect: 'none',
                            MozUserSelect: 'none',
                            msUserSelect: 'none',
                          }}
                        >
                          {link.label}
                        </Link>
                      </motion.li>
                    );
                  })}
                </ul>
              </nav>
            </motion.div>

            {/* Submenu Panel - Slides in from right */}
            <AnimatePresence mode="wait">
              {mobileDropdownOpen && (() => {
                const activeLink = navLinks.find(link => link.href === mobileDropdownOpen);
                if (!activeLink || !activeLink.dropdownItems) return null;

                return (
                  <motion.div
                    key={mobileDropdownOpen}
                    style={{ 
                      position: 'fixed', 
                      top: '90px', 
                      left: '16px', 
                      right: '16px', 
                      backgroundColor: 'rgba(255,255,255,0.9)', 
                      backdropFilter: 'blur(60px) saturate(200%)',
                      WebkitBackdropFilter: 'blur(60px) saturate(200%)',
                      zIndex: 46, 
                      borderRadius: '20px',
                      boxShadow: '0 8px 32px rgba(0,0,0,0.15), 0 0 0 1px rgba(255,255,255,0.5)',
                      maxHeight: 'calc(100vh - 120px)',
                      overflow: 'hidden',
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                    initial={{ opacity: 0, x: '100%' }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: '100%' }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                  {/* Back Button */}
                  <div style={{ padding: '12px 16px', borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
                    <button
                      onClick={() => setMobileDropdownOpen(null)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        padding: '8px 12px',
                        fontSize: '0.95rem',
                        fontWeight: 500,
                        color: '#1f2937',
                        background: 'transparent',
                        border: 'none',
                        cursor: 'pointer',
                        borderRadius: '8px',
                        userSelect: 'none',
                        WebkitUserSelect: 'none',
                        MozUserSelect: 'none',
                        msUserSelect: 'none',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.05)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'transparent';
                      }}
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        style={{ transform: 'rotate(90deg)' }}
                      >
                        <path
                          d="M4 6L8 10L12 6"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      Back
                    </button>
                  </div>

                  {/* Submenu Title */}
                  <div style={{ padding: '16px 20px 8px 20px' }}>
                    <h3 style={{ 
                      margin: 0, 
                      fontSize: '1.25rem', 
                      fontWeight: 600, 
                      color: '#1f2937' 
                    }}>
                      {activeLink.label}
                    </h3>
                  </div>

                  {/* Submenu Items */}
                  <nav style={{ padding: '8px 12px 12px 12px', overflowY: 'auto', flex: 1 }}>
                    <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                      {activeLink.dropdownItems.map((item, index) => (
                        <motion.li
                          key={item.href}
                          initial={{ opacity: 0, x: 10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.03 }}
                        >
                          <Link
                            href={item.href}
                            onClick={() => {
                              setIsMobileMenuOpen(false);
                              setMobileDropdownOpen(null);
                            }}
                            style={{ 
                              display: 'block', 
                              padding: '16px 20px', 
                              fontSize: '1rem',
                              fontWeight: 500,
                              borderRadius: '12px',
                              color: pathname === item.href ? '#025082' : '#1f2937',
                              textDecoration: 'none',
                              backgroundColor: pathname === item.href ? 'rgba(2,80,130,0.08)' : 'transparent',
                              cursor: 'pointer',
                              marginBottom: '4px',
                              userSelect: 'none',
                              WebkitUserSelect: 'none',
                              MozUserSelect: 'none',
                              msUserSelect: 'none',
                            }}
                            onMouseEnter={(e) => {
                              if (pathname !== item.href) {
                                e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.05)';
                              }
                            }}
                            onMouseLeave={(e) => {
                              if (pathname !== item.href) {
                                e.currentTarget.style.backgroundColor = 'transparent';
                              }
                            }}
                          >
                            <div style={{ 
                              fontSize: '1rem',
                              fontWeight: 500,
                              marginBottom: '4px',
                            }}>
                              {item.label}
                            </div>
                            <div style={{ 
                              fontSize: '0.85rem',
                              color: '#6b7280',
                              fontWeight: 400,
                            }}>
                              {item.description}
                            </div>
                          </Link>
                        </motion.li>
                      ))}
                    </ul>
                  </nav>
                </motion.div>
                );
              })()}
            </AnimatePresence>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
