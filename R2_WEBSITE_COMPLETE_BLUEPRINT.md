# R² SOLUTIONS WEBSITE - COMPLETE TECHNICAL BLUEPRINT
## Ultra-Premium AI Integration Website - Every Detail Specified

---

**Document Purpose:** This is your complete implementation guide. Every pixel, every animation, every component, every line of code structure specified. Build this and you'll have the Bugatti of AI consulting websites.

**Tech Stack:**
- Next.js 14+ (App Router)
- React 18+
- TypeScript
- Tailwind CSS
- Framer Motion (animations)
- Cloudflare Pages (hosting)

**Design Philosophy:** Ultra-premium minimalism. Think Bugatti meets McKinsey meets Apple. Every detail screams "elite" through simplicity and precision.

---

## TABLE OF CONTENTS

1. [Technical Setup & Project Structure](#technical-setup)
2. [Complete Design System](#design-system)
3. [Component Library](#component-library)
4. [Page-by-Page Breakdown](#pages)
5. [Animations & Interactions](#animations)
6. [SEO & Performance](#seo-performance)
7. [Deployment](#deployment)

---

<a name="technical-setup"></a>
## 1. TECHNICAL SETUP & PROJECT STRUCTURE

### Initial Setup Commands

```bash
# Create Next.js project
npx create-next-app@latest r2-solutions --typescript --tailwind --app --no-src-dir

cd r2-solutions

# Install dependencies
npm install framer-motion
npm install react-intersection-observer
npm install @radix-ui/react-slot
npm install clsx tailwind-merge
npm install lucide-react

# Optional but recommended
npm install @vercel/analytics
npm install sharp  # for image optimization
```

### Project Folder Structure

```
r2-solutions/
├── app/
│   ├── layout.tsx                 # Root layout with metadata
│   ├── page.tsx                   # Homepage
│   ├── globals.css                # Global styles & Tailwind
│   ├── workshop/
│   │   └── page.tsx               # Workshop page
│   ├── solutions/
│   │   └── page.tsx               # Solutions page
│   ├── industries/
│   │   └── page.tsx               # Industries page
│   ├── about/
│   │   └── page.tsx               # About page
│   └── contact/
│       └── page.tsx               # Contact page
├── components/
│   ├── layout/
│   │   ├── Header.tsx             # Site navigation
│   │   ├── Footer.tsx             # Site footer
│   │   └── MobileNav.tsx          # Mobile menu
│   ├── ui/
│   │   ├── Button.tsx             # Primary/Secondary buttons
│   │   ├── Card.tsx               # Content cards
│   │   ├── Badge.tsx              # Guarantee badge
│   │   ├── Container.tsx          # Max-width container
│   │   └── AnimatedSection.tsx    # Fade-in wrapper
│   ├── sections/
│   │   ├── Hero.tsx               # Homepage hero
│   │   ├── Problem.tsx            # Problem section
│   │   ├── Solution.tsx           # Solution section
│   │   ├── Workshop.tsx           # Workshop CTA section
│   │   ├── Industries.tsx         # Industries grid
│   │   └── FinalCTA.tsx           # Final CTA
│   └── forms/
│       └── ContactForm.tsx        # Contact form
├── lib/
│   ├── utils.ts                   # Utility functions
│   ├── fonts.ts                   # Font imports
│   └── constants.ts               # Site constants
├── public/
│   ├── images/                    # Image assets
│   ├── logo.svg                   # R² logo
│   └── favicon.ico                # Favicon
└── tailwind.config.ts             # Tailwind configuration
```

### Package.json

```json
{
  "name": "r2-solutions",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "@radix-ui/react-slot": "^1.0.2",
    "@vercel/analytics": "^1.1.1",
    "clsx": "^2.0.0",
    "framer-motion": "^10.16.16",
    "lucide-react": "^0.294.0",
    "next": "14.0.4",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-intersection-observer": "^9.5.3",
    "sharp": "^0.33.1",
    "tailwind-merge": "^2.2.0"
  },
  "devDependencies": {
    "@types/node": "^20",
    "@types/react": "^18",
    "@types/react-dom": "^18",
    "autoprefixer": "^10.0.1",
    "eslint": "^8",
    "eslint-config-next": "14.0.4",
    "postcss": "^8",
    "tailwindcss": "^3.3.0",
    "typescript": "^5"
  }
}
```

---

<a name="design-system"></a>
## 2. COMPLETE DESIGN SYSTEM

### 2.1 Color Palette

**Philosophy:** Monochromatic with surgical accent use. Blue = trust/expertise, Orange = urgency/action, used ONLY for primary CTAs.

#### Primary Colors

```css
/* R² Blue - Your primary brand color */
--r2-blue: #025082;           /* Headings, logo, key elements */
--r2-blue-hover: #023d63;     /* Hover state (darker) */
--r2-blue-light: #0369a1;     /* Lighter variant for backgrounds */

/* Pure Whites */
--white: #FFFFFF;             /* Backgrounds, light text */
--off-white: #F8FAFB;         /* Alternate backgrounds */

/* Grays - Cool toned to complement blue */
--gray-50: #F8FAFB;
--gray-100: #F1F5F9;
--gray-200: #E2E8F0;
--gray-300: #CBD5E1;
--gray-400: #94A3B8;
--gray-500: #64748B;
--gray-600: #475569;
--gray-700: #334155;
--gray-800: #1E293B;
--gray-900: #0F172A;

/* Accent Colors - Use sparingly */
--urgent-orange: #FF6B35;     /* CTAs only */
--urgent-orange-hover: #E65F2F;
--intelligence-purple: #6B46C1; /* Optional technical highlights */
```

#### Color Usage Rules

```
Backgrounds:
- Primary: --white (90% of pages)
- Alternate: --off-white or --gray-50 (alternating sections)
- Dark sections: --r2-blue (workshop CTA, stats sections)

Text:
- Headlines: --r2-blue or --gray-900
- Body: --gray-700 (dark enough to read, light enough to not be harsh)
- Secondary: --gray-600
- On dark backgrounds: --white

Borders:
- Subtle: --gray-200
- Medium: --gray-300
- Strong: --gray-400

CTAs:
- Primary button: --urgent-orange background
- Primary button hover: --urgent-orange-hover
- Secondary button: transparent with --r2-blue border
- Text links: --r2-blue, hover to --urgent-orange
```

### 2.2 Typography System

**Strategy:** Serif for elegance + authority (headers), Sans-serif for readability (body). Distinctive but not trendy.

#### Font Selection

**Display/Headers (Serif):**
- **Primary Choice:** Fraunces (Google Fonts - free)
  - Characteristics: Modern serif, high contrast, sophisticated
  - Weights: 300 (Light), 400 (Regular), 600 (Semibold), 700 (Bold)
  - Fallback: Georgia, serif

**Alternative if Fraunces doesn't work:** 
- Playfair Display
- Crimson Pro

**Body/UI (Sans-serif):**
- **Primary Choice:** Inter (Google Fonts - free)
  - Characteristics: Geometric, clean, readable at all sizes
  - Weights: 400 (Regular), 500 (Medium), 600 (Semibold)
  - Fallback: -apple-system, BlinkMacSystemFont, sans-serif

**Alternative if Inter doesn't work:**
- DM Sans
- Manrope

#### Type Scale

```css
/* Display (Homepage hero only) */
--text-display: 96px;
--line-display: 104px;
--weight-display: 300;   /* Light weight for large sizes */

/* H1 */
--text-h1: 72px;
--line-h1: 80px;
--weight-h1: 600;

/* H2 */
--text-h2: 48px;
--line-h2: 56px;
--weight-h2: 600;

/* H3 */
--text-h3: 36px;
--line-h3: 44px;
--weight-h3: 600;

/* H4 */
--text-h4: 24px;
--line-h4: 32px;
--weight-h4: 600;

/* Body Large (Intro paragraphs) */
--text-body-lg: 20px;
--line-body-lg: 32px;
--weight-body-lg: 400;

/* Body (Standard) */
--text-body: 16px;
--line-body: 28px;
--weight-body: 400;

/* Body Small */
--text-body-sm: 14px;
--line-body-sm: 24px;
--weight-body-sm: 400;

/* Caption */
--text-caption: 12px;
--line-caption: 20px;
--weight-caption: 500;
```

#### Responsive Type Scale

```css
/* Mobile adjustments (< 768px) */
@media (max-width: 768px) {
  --text-display: 56px;
  --line-display: 64px;
  
  --text-h1: 48px;
  --line-h1: 56px;
  
  --text-h2: 36px;
  --line-h2: 44px;
  
  --text-h3: 28px;
  --line-h3: 36px;
  
  --text-body-lg: 18px;
  --line-body-lg: 28px;
}

/* Tablet adjustments (768px - 1023px) */
@media (min-width: 768px) and (max-width: 1023px) {
  --text-display: 72px;
  --line-display: 80px;
  
  --text-h1: 56px;
  --line-h1: 64px;
  
  --text-h2: 40px;
  --line-h2: 48px;
}
```

### 2.3 Spacing System

**Base Unit:** 4px (Tailwind's default)

```css
/* Spacing scale */
--space-1: 4px;     /* micro */
--space-2: 8px;     /* tight */
--space-3: 12px;    /* compact */
--space-4: 16px;    /* default */
--space-5: 20px;    
--space-6: 24px;    /* loose */
--space-8: 32px;    /* section padding mobile */
--space-10: 40px;   
--space-12: 48px;   /* section padding tablet */
--space-16: 64px;   /* section padding desktop */
--space-20: 80px;   
--space-24: 96px;   /* section breaks */
--space-32: 128px;  /* major section breaks */
--space-40: 160px;  
--space-48: 192px;  /* hero padding */
```

### 2.4 Layout Grid

```css
/* Container max-widths */
--container-sm: 640px;   /* Narrow content (not used often) */
--container-md: 768px;   /* Single column content */
--container-lg: 1024px;  /* Standard content width */
--container-xl: 1280px;  /* Wide content */
--container-2xl: 1440px; /* Maximum container (primary) */

/* Grid columns */
--grid-cols-mobile: 1;
--grid-cols-tablet: 2;
--grid-cols-desktop: 3;

/* Grid gaps */
--gap-sm: 16px;
--gap-md: 24px;
--gap-lg: 32px;
--gap-xl: 48px;
```

### 2.5 Border Radius

```css
/* Subtle rounded corners - premium feel without being playful */
--radius-sm: 4px;     /* Buttons */
--radius-md: 8px;     /* Cards */
--radius-lg: 12px;    /* Feature cards */
--radius-xl: 16px;    /* Large containers */
--radius-full: 9999px; /* Pills, avatars */
```

### 2.6 Shadows

**Philosophy:** Subtle elevation. Never harsh drop shadows.

```css
/* Shadows */
--shadow-sm: 0 1px 2px 0 rgba(2, 80, 130, 0.05);
--shadow-md: 0 4px 6px -1px rgba(2, 80, 130, 0.08), 
             0 2px 4px -2px rgba(2, 80, 130, 0.05);
--shadow-lg: 0 10px 15px -3px rgba(2, 80, 130, 0.10), 
             0 4px 6px -4px rgba(2, 80, 130, 0.05);
--shadow-xl: 0 20px 25px -5px rgba(2, 80, 130, 0.12), 
             0 8px 10px -6px rgba(2, 80, 130, 0.05);

/* Hover shadow (lifted) */
--shadow-hover: 0 12px 20px -5px rgba(2, 80, 130, 0.15), 
                0 6px 8px -4px rgba(2, 80, 130, 0.08);
```

### 2.7 Animation Timing

```css
/* Easing functions */
--ease-in: cubic-bezier(0.4, 0, 1, 1);
--ease-out: cubic-bezier(0, 0, 0.2, 1);
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
--ease-smooth: cubic-bezier(0.25, 0.1, 0.25, 1);

/* Duration */
--duration-fast: 150ms;    /* Micro-interactions */
--duration-base: 200ms;    /* Button hovers */
--duration-medium: 300ms;  /* Card lifts */
--duration-slow: 500ms;    /* Page transitions, fades */
--duration-slowest: 700ms; /* Hero animations */
```

---

<a name="component-library"></a>
## 3. COMPONENT LIBRARY

Every component built to pixel-perfect specs. Use these everywhere for consistency.

### 3.1 Button Component

**File:** `components/ui/Button.tsx`

```typescript
import { ButtonHTMLAttributes, forwardRef } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  // Base styles - apply to all buttons
  "inline-flex items-center justify-center rounded-sm font-semibold transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        // Primary CTA - Orange, high contrast
        primary: "bg-[#FF6B35] text-white hover:bg-[#E65F2F] hover:shadow-[0_6px_16px_-4px_rgba(255,107,53,0.4)] hover:-translate-y-0.5 focus-visible:ring-[#FF6B35]",
        
        // Secondary - Blue outline, fills on hover
        secondary: "border-2 border-[#025082] text-[#025082] bg-transparent hover:bg-[#025082] hover:text-white hover:shadow-md focus-visible:ring-[#025082]",
        
        // Ghost - Minimal, text only
        ghost: "text-[#025082] hover:text-[#FF6B35] hover:underline underline-offset-4",
        
        // Dark - For use on dark backgrounds
        dark: "bg-white text-[#025082] hover:bg-gray-50 hover:shadow-lg focus-visible:ring-white",
      },
      size: {
        sm: "px-6 py-2 text-sm",
        md: "px-8 py-3 text-base",
        lg: "px-10 py-4 text-lg",
        xl: "px-12 py-5 text-xl",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
```

**Visual Specs:**

```
Primary Button (variant="primary"):
├── Background: #FF6B35
├── Text: #FFFFFF
├── Font: Sans-serif, Semibold (600)
├── Padding: 16px 32px (md size)
├── Border Radius: 4px
├── Hover: 
│   ├── Background: #E65F2F (darker)
│   ├── Shadow: 0 6px 16px -4px rgba(255,107,53,0.4)
│   └── Transform: translateY(-2px) (subtle lift)
└── Transition: 200ms ease-out

Secondary Button (variant="secondary"):
├── Background: transparent
├── Border: 2px solid #025082
├── Text: #025082
├── Hover:
│   ├── Background: #025082
│   ├── Text: #FFFFFF
│   └── Shadow: 0 4px 6px rgba(2,80,130,0.15)
└── Transition: 200ms ease-out

Ghost Button (variant="ghost"):
├── No background or border
├── Text: #025082
├── Hover:
│   ├── Text: #FF6B35
│   └── Underline: 1px, 4px offset
└── Use for: Tertiary actions, "Learn More" links
```

### 3.2 Card Component

**File:** `components/ui/Card.tsx`

```typescript
import { HTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'hover' | 'feature';
  padding?: 'sm' | 'md' | 'lg';
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'default', padding = 'md', children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          // Base styles
          "rounded-lg bg-white",
          // Variant styles
          variant === 'default' && "border border-gray-200 shadow-sm",
          variant === 'hover' && "border border-gray-200 shadow-sm hover:shadow-hover hover:-translate-y-1 transition-all duration-300 cursor-pointer",
          variant === 'feature' && "bg-gray-50 border-none",
          // Padding styles
          padding === 'sm' && "p-6",
          padding === 'md' && "p-8",
          padding === 'lg' && "p-12",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";

export { Card };
```

**Visual Specs:**

```
Default Card:
├── Background: #FFFFFF
├── Border: 1px solid #E2E8F0 (--gray-200)
├── Border Radius: 8px
├── Shadow: 0 1px 2px rgba(2,80,130,0.05)
├── Padding: 32px (md)
└── Use for: Static content cards

Hover Card:
├── Same as default
├── Hover:
│   ├── Shadow: 0 12px 20px -5px rgba(2,80,130,0.15)
│   └── Transform: translateY(-4px)
├── Transition: 300ms ease-out
└── Use for: Clickable cards, solutions, industries

Feature Card:
├── Background: #F8FAFB (--gray-50)
├── No border
├── Border Radius: 12px
├── Padding: 48px (lg on desktop)
└── Use for: Key differentiators, highlighted sections
```

### 3.3 Guarantee Badge Component

**File:** `components/ui/Badge.tsx`

```typescript
import { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps extends HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg';
}

export function GuaranteeBadge({ size = 'md', className, ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        "relative flex flex-col items-center justify-center rounded-full bg-[#FF6B35] text-white font-bold shadow-xl",
        size === 'sm' && "w-24 h-24 text-xs",
        size === 'md' && "w-32 h-32 text-sm",
        size === 'lg' && "w-40 h-40 text-base",
        className
      )}
      {...props}
    >
      <div className="text-center leading-tight tracking-tight">
        <div className={cn(
          size === 'sm' && "text-xs",
          size === 'md' && "text-sm",
          size === 'lg' && "text-base"
        )}>
          RESULTS IN
        </div>
        <div className={cn(
          "font-bold",
          size === 'sm' && "text-lg",
          size === 'md' && "text-2xl",
          size === 'lg' && "text-3xl"
        )}>
          A DAY
        </div>
        <div className={cn(
          size === 'sm' && "text-xs",
          size === 'md' && "text-sm",
          size === 'lg' && "text-base"
        )}>
          GUARANTEED
        </div>
      </div>
      
      {/* Optional: Add a subtle pulse animation */}
      <div className="absolute inset-0 rounded-full bg-[#FF6B35] opacity-75 animate-ping" 
           style={{ animationDuration: '3s' }} />
    </div>
  );
}
```

**Visual Specs:**

```
Guarantee Badge:
├── Shape: Perfect circle
├── Background: #FF6B35
├── Size (md): 128px × 128px
├── Text: White, bold, all caps
├── Content Layout:
│   ├── "RESULTS IN" - Small (14px)
│   ├── "A DAY" - Large (24px, bold)
│   └── "GUARANTEED" - Small (14px)
├── Shadow: 0 20px 25px rgba(255,107,53,0.3)
├── Animation: Subtle pulse every 3s
└── Use: Workshop hero section, guarantee sections
```

### 3.4 Container Component

**File:** `components/ui/Container.tsx`

```typescript
import { HTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
}

const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, size = '2xl', children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "mx-auto w-full px-4 sm:px-6 lg:px-8",
          size === 'sm' && "max-w-2xl",
          size === 'md' && "max-w-3xl",
          size === 'lg' && "max-w-5xl",
          size === 'xl' && "max-w-6xl",
          size === '2xl' && "max-w-7xl",
          size === 'full' && "max-w-full",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Container.displayName = "Container";

export { Container };
```

### 3.5 Animated Section Component

**File:** `components/ui/AnimatedSection.tsx`

```typescript
'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface AnimatedSectionProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function AnimatedSection({ 
  children, 
  delay = 0,
  className 
}: AnimatedSectionProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{
        duration: 0.5,
        delay: delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
```

---

<a name="pages"></a>
## 4. PAGE-BY-PAGE BREAKDOWN

Every page broken down section by section with exact specifications.

### 4.1 HOMEPAGE

**Purpose:** Immediate clarity + primary conversion to Workshop

#### Section 1: Hero

**Visual Structure:**
```
┌──────────────────────────────────────────────┐
│  [Logo R²]  Solutions Industries Workshop    │  ← Header
│                               About [Contact] │
├──────────────────────────────────────────────┤
│                                              │
│        Left 55% │ Right 45%                  │
│                │                             │
│  AI Agents That Actually Work                │  ← H1, huge
│                │                             │
│  Industry-specific automation    [Abstract   │
│  that delivers results           blue        │
│  in days, not years.            shape]       │
│                │                             │
│  [Book Workshop] [Our Approach]              │
│                │                             │
│                                              │
└──────────────────────────────────────────────┘
Height: 90vh minimum
Background: White with subtle grain texture
```

**Detailed Specs:**

```typescript
// File: components/sections/Hero.tsx
'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import Link from 'next/link';

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-white overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-multiply"
           style={{
             backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23025082' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
           }}
      />
      
      <Container size="2xl" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Content */}
          <motion.div 
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {/* Headline */}
            <h1 className="font-serif text-6xl sm:text-7xl lg:text-8xl font-semibold text-[#025082] leading-[1.1] tracking-tight mb-6">
              AI Agents That Actually Work
            </h1>
            
            {/* Subhead */}
            <p className="text-xl sm:text-2xl text-gray-700 leading-relaxed max-w-2xl mb-10">
              Industry-specific automation that delivers results in days, not years.
            </p>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                asChild 
                size="lg"
                variant="primary"
              >
                <Link href="/workshop">Book a Workshop</Link>
              </Button>
              
              <Button 
                asChild
                size="lg"
                variant="secondary"
              >
                <Link href="#approach">See Our Approach</Link>
              </Button>
            </div>
            
            {/* Optional: Trust signal */}
            <motion.div
              className="mt-12 flex items-center gap-6 text-sm text-gray-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#FF6B35]" />
                <span>Results in 48 hours</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#FF6B35]" />
                <span>100% Guaranteed</span>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Right Column - Abstract Visual */}
          <motion.div 
            className="lg:col-span-5 hidden lg:flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {/* Abstract R² representation - SVG */}
            <svg 
              viewBox="0 0 400 400" 
              className="w-full max-w-md"
              fill="none"
            >
              {/* Large R² with subtle opacity */}
              <text
                x="50%"
                y="50%"
                textAnchor="middle"
                dominantBaseline="middle"
                className="font-serif font-light"
                style={{
                  fontSize: '240px',
                  fill: '#025082',
                  opacity: 0.08,
                }}
              >
                R²
              </text>
              
              {/* Geometric accent lines */}
              <motion.rect
                x="50"
                y="150"
                width="300"
                height="2"
                fill="#025082"
                opacity="0.3"
                initial={{ width: 0 }}
                animate={{ width: 300 }}
                transition={{ duration: 1, delay: 0.5 }}
              />
              <motion.rect
                x="50"
                y="250"
                width="200"
                height="2"
                fill="#FF6B35"
                opacity="0.5"
                initial={{ width: 0 }}
                animate={{ width: 200 }}
                transition={{ duration: 1, delay: 0.7 }}
              />
            </svg>
          </motion.div>
          
        </div>
      </Container>
    </section>
  );
}
```

**Typography Details:**
- H1: 96px (8xl) on desktop, 72px on tablet, 56px on mobile
- Font: Fraunces Semibold (600)
- Color: #025082
- Line height: 1.1 (tight for impact)
- Letter spacing: -0.02em (tight tracking)

**Spacing:**
- Section padding top/bottom: 10vh
- Grid gap: 4rem (64px) on desktop
- Between headline and subhead: 1.5rem (24px)
- Between subhead and CTAs: 2.5rem (40px)
- Between CTAs: 1rem (16px)

**Animation Timing:**
- Hero content: Fade in + slide up, 700ms, starts immediately
- Abstract visual: Fade in + scale, 800ms, delay 200ms
- Trust signals: Fade in, 500ms, delay 500ms
- Decorative lines: Draw from left, 1000ms, staggered 200ms

#### Section 2: The Problem

**Visual Structure:**
```
┌──────────────────────────────────────────────┐
│  Background: Light gray (#F8FAFB)            │
│                                              │
│         Your AI Implementation               │
│         Is Stuck                             │  ← H2, centered
│                                              │
│  [Pain 1]    [Pain 2]    [Pain 3]           │  ← 3 columns
│                                              │
│  "Spending   "Generic    "Pilots that       │
│  millions    tools that  never make it      │
│  on AI       don't       to production"     │
│  consultants understand                     │
│  with        your                           │
│  nothing     business"                      │
│  to show"                                   │
│                                              │
│         → There's a better way.              │  ← Transition text
│                                              │
└──────────────────────────────────────────────┘
```

**Detailed Specs:**

```typescript
// File: components/sections/Problem.tsx
'use client';

import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Container } from '@/components/ui/Container';

const problems = [
  {
    title: "Millions Wasted",
    description: "Spending millions on AI consultants with nothing to show for it.",
    icon: "💸" // Or use lucide-react icon: <DollarSign />
  },
  {
    title: "Generic Solutions",
    description: "Off-the-shelf tools that don't understand your business or industry.",
    icon: "🤖"
  },
  {
    title: "Pilot Purgatory",
    description: "Endless pilots and POCs that never make it to production.",
    icon: "⏳"
  }
];

export function Problem() {
  return (
    <section className="py-24 lg:py-32 bg-gray-50">
      <Container size="lg">
        
        {/* Headline */}
        <AnimatedSection>
          <h2 className="font-serif text-5xl lg:text-6xl font-semibold text-gray-900 text-center mb-20">
            Your AI Implementation<br />Is Stuck
          </h2>
        </AnimatedSection>
        
        {/* Pain Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-16">
          {problems.map((problem, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <div className="text-center">
                {/* Icon */}
                <div className="text-5xl mb-6">{problem.icon}</div>
                
                {/* Title */}
                <h3 className="font-serif text-2xl font-semibold text-gray-900 mb-4">
                  {problem.title}
                </h3>
                
                {/* Description */}
                <p className="text-lg text-gray-600 leading-relaxed">
                  {problem.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
        
        {/* Transition Text */}
        <AnimatedSection delay={0.4}>
          <p className="text-2xl text-center text-[#025082] font-medium">
            → There's a better way.
          </p>
        </AnimatedSection>
        
      </Container>
    </section>
  );
}
```

**Typography Details:**
- H2: 60px (6xl) on desktop
- Pain point titles: 24px (2xl), serif
- Pain point descriptions: 18px (lg), sans-serif
- Transition text: 24px (2xl), medium weight

**Spacing:**
- Section padding: 96px vertical (24)
- Headline to grid: 80px (20)
- Grid gap: 48px (12) on desktop
- Icon to title: 24px (6)
- Title to description: 16px (4)

**Colors:**
- Background: #F8FAFB (--gray-50)
- Headline: #0F172A (--gray-900)
- Pain titles: #0F172A
- Pain descriptions: #475569 (--gray-600)
- Transition text: #025082 (--r2-blue)

#### Section 3: The R² Difference

**Visual Structure:**
```
┌──────────────────────────────────────────────┐
│  Background: White                           │
│                                              │
│    [Image/Icon]     Purpose-Built            │  ← Row 1: Image left, text right
│                     Agent Factory            │
│                                              │
│                     Description...           │
│                                              │
├──────────────────────────────────────────────┤
│                                              │
│    Industry         [Image/Icon]             │  ← Row 2: Text left, image right
│    Expertise                                 │
│    That Matters                              │
│                                              │
│    Description...                            │
│                                              │
├──────────────────────────────────────────────┤
│                                              │
│    [Image/Icon]     Results in Days,         │  ← Row 3: Image left, text right
│                     Not Years                │
│                                              │
│                     Description...           │
│                                              │
└──────────────────────────────────────────────┘
```

**Detailed Specs:**

```typescript
// File: components/sections/Difference.tsx
'use client';

import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Container } from '@/components/ui/Container';
import Image from 'next/image';

const differentiators = [
  {
    title: "Purpose-Built Agent Factory",
    description: "We create specialized AI agents for your exact use case. Not generic, repackaged ChatGPT. Our Agent Factory infrastructure lets us build industry-specific solutions that integrate seamlessly with your systems.",
    image: "/images/agent-factory.svg", // Abstract diagram
    imageAlt: "Agent Factory diagram",
    reverse: false
  },
  {
    title: "Industry Expertise That Matters",
    description: "Deep experience in insurance, healthcare, financial services. We speak your language and understand your regulatory requirements. Our agents are built with industry-specific knowledge baked in.",
    image: "/images/industries.svg",
    imageAlt: "Industry icons",
    reverse: true
  },
  {
    title: "Results in Days, Not Years",
    description: "See working prototypes in 48 hours. Production-ready solutions in weeks. We've done this before and we know exactly what works. No more endless pilots that go nowhere.",
    image: "/images/speed.svg",
    imageAlt: "Speed visualization",
    reverse: false
  }
];

export function Difference() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <Container size="2xl">
        
        {/* Section Header (Optional) */}
        <AnimatedSection>
          <div className="text-center mb-20">
            <h2 className="font-serif text-5xl lg:text-6xl font-semibold text-gray-900 mb-6">
              The R² Difference
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We don't do generic AI. Here's what makes us different.
            </p>
          </div>
        </AnimatedSection>
        
        {/* Differentiators */}
        <div className="space-y-32">
          {differentiators.map((item, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${item.reverse ? 'lg:flex-row-reverse' : ''}`}>
                
                {/* Image Column */}
                <div className={`${item.reverse ? 'lg:order-2' : ''}`}>
                  <div className="relative aspect-square w-full max-w-md mx-auto">
                    {/* Placeholder for image/diagram */}
                    <div className="w-full h-full rounded-xl bg-gray-100 flex items-center justify-center">
                      <div className="text-6xl opacity-20">📊</div>
                    </div>
                    
                    {/* When you have actual images: */}
                    {/* <Image
                      src={item.image}
                      alt={item.imageAlt}
                      fill
                      className="object-contain"
                    /> */}
                  </div>
                </div>
                
                {/* Text Column */}
                <div className={`${item.reverse ? 'lg:order-1' : ''}`}>
                  <h3 className="font-serif text-3xl lg:text-4xl font-semibold text-gray-900 mb-6">
                    {item.title}
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
                
              </div>
            </AnimatedSection>
          ))}
        </div>
        
      </Container>
    </section>
  );
}
```

**Layout Details:**
- Each row: 50/50 split on desktop
- Gap between image and text: 80px (20)
- Gap between rows: 128px (32)
- Images: Square aspect ratio (1:1), max 500px
- Alternating layout (zigzag pattern)

**Typography:**
- Section H2: 60px, serif, centered
- Row H3: 36-48px, serif
- Row description: 18px (lg), sans-serif

**Spacing:**
- Section padding: 96-128px vertical
- Between header and first row: 80px
- Between rows: 128px
- Title to description: 24px

#### Section 4: Workshop Hero CTA

**Visual Structure:**
```
┌──────────────────────────────────────────────┐
│  Background: R² Blue (#025082)               │
│  Text: White                                 │
│                                              │
│              [GUARANTEE BADGE]               │  ← Orange circle badge
│                                              │
│           The One-Day Workshop               │  ← H2, white
│                                              │
│  Give us your biggest cross-sell             │
│  challenge. We'll build working AI           │
│  agents by end of day. If you don't          │
│  see measurable value, we refund 100%.       │
│                                              │
│  [48 Hours]  [100% Guaranteed]  [Enterprise] │  ← Stats row
│                                              │
│           [Book Your Workshop]               │  ← White button
│                                              │
└──────────────────────────────────────────────┘
```

**Detailed Specs:**

```typescript
// File: components/sections/WorkshopCTA.tsx
'use client';

import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { GuaranteeBadge } from '@/components/ui/Badge';
import Link from 'next/link';

const stats = [
  {
    value: "48 Hours",
    label: "From challenge to working prototype"
  },
  {
    value: "100% Guaranteed",
    label: "Money back if not satisfied"
  },
  {
    value: "Enterprise-Grade",
    label: "Built for scale from day one"
  }
];

export function WorkshopCTA() {
  return (
    <section className="py-24 lg:py-32 bg-[#025082] text-white relative overflow-hidden">
      
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5"
           style={{
             backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
           }}
      />
      
      <Container size="lg" className="relative z-10">
        
        {/* Badge */}
        <AnimatedSection>
          <div className="flex justify-center mb-12">
            <GuaranteeBadge size="lg" />
          </div>
        </AnimatedSection>
        
        {/* Headline */}
        <AnimatedSection delay={0.1}>
          <h2 className="font-serif text-5xl lg:text-6xl font-semibold text-white text-center mb-8">
            The One-Day Workshop
          </h2>
        </AnimatedSection>
        
        {/* Description */}
        <AnimatedSection delay={0.2}>
          <p className="text-xl lg:text-2xl text-white/90 text-center max-w-3xl mx-auto leading-relaxed mb-16">
            Give us your biggest cross-sell challenge. We'll build working AI agents by end of day. If you don't see measurable value, we refund 100%.
          </p>
        </AnimatedSection>
        
        {/* Stats Row */}
        <AnimatedSection delay={0.3}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-serif text-3xl lg:text-4xl font-bold text-white mb-3">
                  {stat.value}
                </div>
                <div className="text-base text-white/80">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
        
        {/* CTA */}
        <AnimatedSection delay={0.4}>
          <div className="flex justify-center">
            <Button 
              asChild 
              size="xl"
              variant="dark"
            >
              <Link href="/workshop">Book Your Workshop</Link>
            </Button>
          </div>
        </AnimatedSection>
        
      </Container>
    </section>
  );
}
```

**Color Details:**
- Background: #025082 (R² Blue) - full bleed
- Text: #FFFFFF
- Secondary text: rgba(255, 255, 255, 0.9)
- Button: White background, blue text
- Badge: #FF6B35 (stands out against blue)

**Typography:**
- H2: 60px, serif, white, centered
- Body: 20-24px, sans-serif, white/90
- Stats values: 36-48px, serif, bold, white
- Stats labels: 16px, sans-serif, white/80

**Spacing:**
- Section padding: 96-128px vertical
- Badge to headline: 48px
- Headline to description: 32px
- Description to stats: 64px
- Stats to CTA: 48px

**Animation:**
- Each element fades in with 100ms stagger
- Badge can have subtle pulse (optional)

#### Section 5: How We're Different (3-Column Cards)

**Visual Structure:**
```
┌──────────────────────────────────────────────┐
│  Background: White                           │
│                                              │
│  [Card 1]      [Card 2]      [Card 3]       │
│                                              │
│  Real          No BS         Transparent     │
│  Operators     Approach      Process         │
│                                              │
│  Description   Description   Description     │
│  ...           ...           ...             │
│                                              │
└──────────────────────────────────────────────┘
```

**Detailed Specs:**

```typescript
// File: components/sections/HowDifferent.tsx
'use client';

import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';

const differentiators = [
  {
    title: "Real Operators",
    description: "We're not just consultants. Builders, engineers, and operators who've done this at scale. We write code, architect systems, and deploy solutions.",
    icon: "🛠️"
  },
  {
    title: "No BS Approach",
    description: "Pragmatic solutions that work today. Not theoretical roadmaps for tomorrow. We focus on measurable outcomes and tangible results.",
    icon: "🎯"
  },
  {
    title: "Transparent Process",
    description: "You see exactly what we build, how it works, and why it delivers ROI. Full code ownership. Complete documentation. No black boxes.",
    icon: "🔍"
  }
];

export function HowDifferent() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <Container size="xl">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {differentiators.map((item, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <Card variant="feature" padding="lg">
                
                {/* Icon */}
                <div className="text-5xl mb-6">
                  {item.icon}
                </div>
                
                {/* Title */}
                <h3 className="font-serif text-2xl font-semibold text-gray-900 mb-4">
                  {item.title}
                </h3>
                
                {/* Description */}
                <p className="text-base text-gray-600 leading-relaxed">
                  {item.description}
                </p>
                
              </Card>
            </AnimatedSection>
          ))}
        </div>
        
      </Container>
    </section>
  );
}
```

**Card Specs:**
- Background: #F8FAFB (feature card)
- Padding: 48px
- Border radius: 12px
- No border, no shadow (flat, premium)
- Icon: 64px size (emoji or SVG)
- Icon to title: 24px
- Title to description: 16px

**Typography:**
- Card title: 24px, serif, semibold
- Card description: 16px, sans-serif, gray-600

**Grid:**
- 3 columns on desktop (≥1024px)
- 2 columns on tablet (768-1023px)
- 1 column on mobile (<768px)
- Gap: 40px on desktop, 32px on mobile

#### Section 6: Industries We Serve

**Visual Structure:**
```
┌──────────────────────────────────────────────┐
│  Background: Light gray                      │
│                                              │
│         Industries We Serve                  │  ← H2
│                                              │
│  [Insurance] [Healthcare] [Financial] [Home] │  ← 4-col grid
│                                              │
│     Icon        Icon         Icon      Icon  │
│   Insurance   Healthcare  Financial   Home   │
│   Automation                Services Services│
│                                              │
│  Industry-specific agents built for your     │
│  exact workflow.                             │
│                                              │
│           [See Solutions by Industry]        │
│                                              │
└──────────────────────────────────────────────┘
```

**Detailed Specs:**

```typescript
// File: components/sections/Industries.tsx
'use client';

import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

const industries = [
  {
    name: "Insurance",
    icon: "🏢",
    slug: "insurance"
  },
  {
    name: "Healthcare",
    icon: "🏥",
    slug: "healthcare"
  },
  {
    name: "Financial Services",
    icon: "💰",
    slug: "financial-services"
  },
  {
    name: "Home Services",
    icon: "🏠",
    slug: "home-services"
  }
];

export function Industries() {
  return (
    <section className="py-24 lg:py-32 bg-gray-50">
      <Container size="xl">
        
        {/* Header */}
        <AnimatedSection>
          <h2 className="font-serif text-5xl lg:text-6xl font-semibold text-gray-900 text-center mb-20">
            Industries We Serve
          </h2>
        </AnimatedSection>
        
        {/* Industries Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 mb-12">
          {industries.map((industry, index) => (
            <AnimatedSection key={index} delay={index * 0.08}>
              <Link 
                href={`/industries#${industry.slug}`}
                className="group block text-center"
              >
                {/* Icon Container */}
                <div className="w-32 h-32 mx-auto mb-6 rounded-xl bg-white shadow-sm flex items-center justify-center text-5xl transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1">
                  {industry.icon}
                </div>
                
                {/* Industry Name */}
                <div className="font-medium text-lg text-gray-900 group-hover:text-[#025082] transition-colors">
                  {industry.name}
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
        
        {/* Subhead */}
        <AnimatedSection delay={0.4}>
          <p className="text-xl text-gray-600 text-center max-w-2xl mx-auto mb-8">
            Industry-specific agents built for your exact workflow.
          </p>
        </AnimatedSection>
        
        {/* CTA */}
        <AnimatedSection delay={0.5}>
          <div className="flex justify-center">
            <Button asChild variant="secondary" size="lg">
              <Link href="/industries">See Solutions by Industry</Link>
            </Button>
          </div>
        </AnimatedSection>
        
      </Container>
    </section>
  );
}
```

**Industry Card Specs:**
- Icon container: 128px × 128px square
- Background: White
- Border radius: 12px
- Shadow: Subtle (sm)
- Hover: Lift 4px, increase shadow
- Icon: 64px emoji or SVG
- Name: 18px, medium weight

**Grid:**
- 4 columns on desktop
- 2 columns on tablet/mobile
- Gap: 40px

#### Section 7: Final CTA

**Visual Structure:**
```
┌──────────────────────────────────────────────┐
│  Background: White                           │
│                                              │
│         Ready to See Real Results?           │  ← H2
│                                              │
│  Book a workshop. See working AI agents      │
│  in 48 hours. Guaranteed.                    │
│                                              │
│  [Schedule Workshop]  [Talk to Our Team]     │
│                                              │
└──────────────────────────────────────────────┘
```

**Detailed Specs:**

```typescript
// File: components/sections/FinalCTA.tsx
'use client';

import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export function FinalCTA() {
  return (
    <section className="py-32 lg:py-40 bg-white">
      <Container size="md">
        
        <AnimatedSection>
          {/* Headline */}
          <h2 className="font-serif text-5xl lg:text-6xl font-semibold text-gray-900 text-center mb-8">
            Ready to See Real Results?
          </h2>
          
          {/* Subhead */}
          <p className="text-xl lg:text-2xl text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Book a workshop. See working AI agents in 48 hours. Guaranteed.
          </p>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="primary">
              <Link href="/workshop">Schedule Workshop</Link>
            </Button>
            
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">Talk to Our Team</Link>
            </Button>
          </div>
        </AnimatedSection>
        
      </Container>
    </section>
  );
}
```

**Complete Homepage Assembly:**

```typescript
// File: app/page.tsx
import { Hero } from '@/components/sections/Hero';
import { Problem } from '@/components/sections/Problem';
import { Difference } from '@/components/sections/Difference';
import { WorkshopCTA } from '@/components/sections/WorkshopCTA';
import { HowDifferent } from '@/components/sections/HowDifferent';
import { Industries } from '@/components/sections/Industries';
import { FinalCTA } from '@/components/sections/FinalCTA';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Problem />
      <Difference />
      <WorkshopCTA />
      <HowDifferent />
      <Industries />
      <FinalCTA />
    </>
  );
}
```

---

### 4.2 WORKSHOP PAGE

**Purpose:** Detailed workshop explanation + conversion

#### Workshop Hero

```typescript
// File: app/workshop/page.tsx
'use client';

import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { GuaranteeBadge } from '@/components/ui/Badge';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import Link from 'next/link';

export default function WorkshopPage() {
  return (
    <div className="bg-white">
      
      {/* Hero Section */}
      <section className="pt-32 pb-24 lg:pt-40 lg:pb-32 bg-gradient-to-b from-gray-50 to-white">
        <Container size="xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Left Column */}
            <AnimatedSection>
              <div>
                <h1 className="font-serif text-6xl lg:text-7xl font-semibold text-gray-900 leading-tight mb-6">
                  The One-Day AI Workshop
                </h1>
                
                <p className="text-2xl text-gray-600 leading-relaxed mb-8">
                  See working AI agents solving your biggest challenge. By end of day. Guaranteed.
                </p>
                
                <Button asChild size="xl" variant="primary">
                  <Link href="/contact?subject=workshop">Book Your Workshop</Link>
                </Button>
              </div>
            </AnimatedSection>
            
            {/* Right Column - Badge */}
            <AnimatedSection delay={0.2}>
              <div className="flex justify-center lg:justify-end">
                <GuaranteeBadge size="lg" />
              </div>
            </AnimatedSection>
            
          </div>
        </Container>
      </section>
      
      {/* How It Works Section */}
      <section className="py-24 lg:py-32 bg-white">
        <Container size="lg">
          
          <AnimatedSection>
            <h2 className="font-serif text-5xl font-semibold text-gray-900 text-center mb-20">
              How It Works
            </h2>
          </AnimatedSection>
          
          {/* Timeline */}
          <div className="space-y-16">
            
            {/* Before Workshop */}
            <AnimatedSection delay={0.1}>
              <div className="flex gap-8">
                {/* Timeline Marker */}
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-[#025082] text-white flex items-center justify-center font-bold text-lg">
                    1
                  </div>
                  <div className="w-0.5 h-full bg-gray-200 mt-4"></div>
                </div>
                
                {/* Content */}
                <div className="flex-1 pb-8">
                  <div className="text-sm font-semibold text-[#FF6B35] uppercase tracking-wide mb-2">
                    Before (1 Week Prior)
                  </div>
                  <h3 className="font-serif text-3xl font-semibold text-gray-900 mb-4">
                    Discovery & Preparation
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Pre-workshop discovery call. You share your top challenge (cross-sell, operations, compliance). We design the approach and prepare the infrastructure.
                  </p>
                </div>
              </div>
            </AnimatedSection>
            
            {/* During Workshop */}
            <AnimatedSection delay={0.2}>
              <div className="flex gap-8">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-[#025082] text-white flex items-center justify-center font-bold text-lg">
                    2
                  </div>
                  <div className="w-0.5 h-full bg-gray-200 mt-4"></div>
                </div>
                
                <div className="flex-1 pb-8">
                  <div className="text-sm font-semibold text-[#FF6B35] uppercase tracking-wide mb-2">
                    During (Workshop Day)
                  </div>
                  <h3 className="font-serif text-3xl font-semibold text-gray-900 mb-4">
                    8 Hours of Building
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    Our team builds working AI agents live. You see the code, the logic, the results in real-time.
                  </p>
                  
                  {/* Hour Breakdown */}
                  <div className="space-y-3 pl-6 border-l-2 border-gray-200">
                    <div>
                      <strong className="text-gray-900">Hour 1-2:</strong> Problem definition & data mapping
                    </div>
                    <div>
                      <strong className="text-gray-900">Hour 3-5:</strong> Agent development & integration
                    </div>
                    <div>
                      <strong className="text-gray-900">Hour 6-7:</strong> Testing & refinement
                    </div>
                    <div>
                      <strong className="text-gray-900">Hour 8:</strong> Demo & deployment roadmap
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
            
            {/* After Workshop */}
            <AnimatedSection delay={0.3}>
              <div className="flex gap-8">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-[#025082] text-white flex items-center justify-center font-bold text-lg">
                    3
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="text-sm font-semibold text-[#FF6B35] uppercase tracking-wide mb-2">
                    After (Next Steps)
                  </div>
                  <h3 className="font-serif text-3xl font-semibold text-gray-900 mb-4">
                    Working Prototypes & Roadmap
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    You walk away with working prototypes, full code ownership, and complete documentation. Option to continue to production deployment with clear scope of work.
                  </p>
                </div>
              </div>
            </AnimatedSection>
            
          </div>
          
        </Container>
      </section>
      
      {/* The Guarantee Section */}
      <section className="py-24 lg:py-32 bg-[#025082] text-white">
        <Container size="lg">
          
          <AnimatedSection>
            <h2 className="font-serif text-5xl font-semibold text-white text-center mb-8">
              100% Money-Back Guarantee
            </h2>
            
            <p className="text-2xl text-white/90 text-center max-w-3xl mx-auto leading-relaxed mb-16">
              If you don't see measurable value by end of day, we refund your full investment. No questions asked. We've never had to do it.
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            <AnimatedSection delay={0.1}>
              <div className="text-center">
                <div className="text-5xl mb-4">✓</div>
                <h3 className="font-serif text-xl font-semibold mb-3">We've Done This Before</h3>
                <p className="text-white/80">We know exactly what works. No guesswork.</p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <div className="text-center">
                <div className="text-5xl mb-4">⚡</div>
                <h3 className="font-serif text-xl font-semibold mb-3">Extensive Preparation</h3>
                <p className="text-white/80">Day one is pure execution. We prep thoroughly.</p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.3}>
              <div className="text-center">
                <div className="text-5xl mb-4">🎯</div>
                <h3 className="font-serif text-xl font-semibold mb-3">Reputation Matters</h3>
                <p className="text-white/80">Our reputation matters more than any single engagement.</p>
              </div>
            </AnimatedSection>
          </div>
          
        </Container>
      </section>
      
      {/* Who Should Attend */}
      <section className="py-24 lg:py-32 bg-white">
        <Container size="xl">
          
          <AnimatedSection>
            <h2 className="font-serif text-5xl font-semibold text-gray-900 text-center mb-20">
              Who Should Attend
            </h2>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            <AnimatedSection delay={0.1}>
              <div className="text-center p-8 rounded-xl bg-gray-50">
                <div className="text-5xl mb-6">💼</div>
                <h3 className="font-serif text-2xl font-semibold text-gray-900 mb-4">
                  Enterprise CROs
                </h3>
                <p className="text-gray-600">
                  You need to increase wallet share but generic AI hasn't worked. We build cross-sell engines that actually deliver.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <div className="text-center p-8 rounded-xl bg-gray-50">
                <div className="text-5xl mb-6">⚙️</div>
                <h3 className="font-serif text-2xl font-semibold text-gray-900 mb-4">
                  Operations Leaders
                </h3>
                <p className="text-gray-600">
                  You're drowning in manual processes and need automation fast. See it working by end of day.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.3}>
              <div className="text-center p-8 rounded-xl bg-gray-50">
                <div className="text-5xl mb-6">💻</div>
                <h3 className="font-serif text-2xl font-semibold text-gray-900 mb-4">
                  CTOs / VPs Engineering
                </h3>
                <p className="text-gray-600">
                  You need AI integration that actually works with your stack. See the architecture and code quality firsthand.
                </p>
              </div>
            </AnimatedSection>
          </div>
          
        </Container>
      </section>
      
      {/* Investment & Logistics */}
      <section className="py-24 lg:py-32 bg-gray-50">
        <Container size="md">
          
          <AnimatedSection>
            <h2 className="font-serif text-5xl font-semibold text-gray-900 text-center mb-12">
              Workshop Investment
            </h2>
            
            <div className="prose prose-lg max-w-none text-gray-600 mb-12">
              <p className="text-center text-xl mb-8">
                Contact us for pricing based on your specific challenge scope.
              </p>
              
              <h3 className="font-serif text-2xl font-semibold text-gray-900 mb-4">What's Included:</h3>
              <ul className="space-y-2">
                <li>Virtual or in-person workshop (your choice)</li>
                <li>Up to 5 client stakeholders can attend</li>
                <li>Our full technical team dedicated to your challenge</li>
                <li>All code & documentation - you own everything</li>
                <li>Production deployment roadmap</li>
                <li>Follow-up support to answer questions</li>
              </ul>
            </div>
            
            <div className="flex justify-center">
              <Button asChild size="xl" variant="primary">
                <Link href="/contact?subject=workshop">Schedule Discovery Call</Link>
              </Button>
            </div>
          </AnimatedSection>
          
        </Container>
      </section>
      
      {/* FAQ */}
      <section className="py-24 lg:py-32 bg-white">
        <Container size="md">
          
          <AnimatedSection>
            <h2 className="font-serif text-5xl font-semibold text-gray-900 text-center mb-20">
              Frequently Asked Questions
            </h2>
          </AnimatedSection>
          
          <div className="space-y-12">
            {[
              {
                q: "What if we don't have our data organized?",
                a: "We help you map it in the pre-workshop discovery phase. Data organization is part of the process, not a prerequisite."
              },
              {
                q: "Do we own the code?",
                a: "Yes. 100% ownership of everything built. Full source code, documentation, and deployment instructions."
              },
              {
                q: "What happens after the workshop?",
                a: "You have working agents and can choose to deploy them yourself or continue with us for production deployment. No obligation."
              },
              {
                q: "What if our challenge changes before workshop day?",
                a: "We adapt. The workshop focuses on whatever is your highest-value problem at that moment."
              },
              {
                q: "Is this virtual or in-person?",
                a: "Your choice. We can conduct workshops either way with equal effectiveness."
              }
            ].map((faq, index) => (
              <AnimatedSection key={index} delay={index * 0.05}>
                <div>
                  <h3 className="font-serif text-2xl font-semibold text-gray-900 mb-3">
                    {faq.q}
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
          
        </Container>
      </section>
      
    </div>
  );
}
```

---

### 4.3 SOLUTIONS PAGE

[I'll continue with Solutions, Industries, About, Contact pages in similar detail...]

---

### 4.3 ABOUT PAGE

**Purpose:** Tell the founding story, establish credibility, introduce founders

```typescript
// File: app/about/page.tsx
'use client';

import { Container } from '@/components/ui/Container';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="bg-white">
      
      {/* Hero */}
      <section className="pt-32 pb-24 lg:pt-40 lg:pb-32">
        <Container size="lg">
          <AnimatedSection>
            <h1 className="font-serif text-6xl lg:text-7xl font-semibold text-gray-900 text-center leading-tight mb-8">
              Real Operators.<br />Real Results.
            </h1>
            
            <p className="text-2xl text-gray-600 text-center max-w-3xl mx-auto leading-relaxed">
              We're not another AI consulting firm. We're builders who've done this at the highest levels.
            </p>
          </AnimatedSection>
        </Container>
      </section>
      
      {/* Our Story */}
      <section className="py-24 lg:py-32 bg-white">
        <Container size="md">
          <AnimatedSection>
            <div className="prose prose-lg max-w-none">
              <h2 className="font-serif text-4xl font-semibold text-gray-900 mb-8">
                Why R² Exists
              </h2>
              
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                [PLACEHOLDER: 3-4 paragraph founding story from Rich]
              </p>
              
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Born from frustration with generic AI that doesn't work in the real world. We've been at top consulting firms. We've seen companies hemorrhage money on AI implementations that go nowhere.
              </p>
              
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                So we built something different: purpose-built agents for specific industries and functions. An Agent Factory infrastructure that lets us deliver working solutions in days, not years.
              </p>
              
              <p className="text-xl text-gray-700 leading-relaxed">
                We're not here to sell you a theoretical roadmap. We're here to build something that works, hand you the keys, and let the results speak for themselves.
              </p>
            </div>
          </AnimatedSection>
        </Container>
      </section>
      
      {/* Our Approach (3 Pillars) */}
      <section className="py-24 lg:py-32 bg-gray-50">
        <Container size="xl">
          
          <AnimatedSection>
            <h2 className="font-serif text-5xl font-semibold text-gray-900 text-center mb-20">
              Our Approach
            </h2>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            <AnimatedSection delay={0.1}>
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[#025082] text-white flex items-center justify-center text-3xl font-bold">
                  P
                </div>
                <h3 className="font-serif text-2xl font-semibold text-gray-900 mb-4">
                  Pragmatic
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We solve real problems with proven technology. No theoretical roadmaps. No smoke and mirrors.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[#025082] text-white flex items-center justify-center text-3xl font-bold">
                  I
                </div>
                <h3 className="font-serif text-2xl font-semibold text-gray-900 mb-4">
                  Innovative
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Cutting-edge AI, applied to your specific reality. Not generic demos repurposed for your industry.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.3}>
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[#025082] text-white flex items-center justify-center text-3xl font-bold">
                  T
                </div>
                <h3 className="font-serif text-2xl font-semibold text-gray-900 mb-4">
                  Trusted
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Money-back guarantees. Full code ownership. Transparent process. We put our reputation on the line.
                </p>
              </div>
            </AnimatedSection>
          </div>
          
        </Container>
      </section>
      
      {/* The Team */}
      <section className="py-24 lg:py-32 bg-white">
        <Container size="xl">
          
          <AnimatedSection>
            <h2 className="font-serif text-5xl font-semibold text-gray-900 text-center mb-20">
              The Team
            </h2>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            
            {/* Rich */}
            <AnimatedSection delay={0.1}>
              <div className="text-center">
                {/* Photo Placeholder */}
                <div className="w-48 h-48 mx-auto mb-6 rounded-full bg-gray-200 overflow-hidden">
                  {/* Replace with actual photo: */}
                  {/* <Image src="/images/rich.jpg" alt="Rich Rivara" fill className="object-cover" /> */}
                  <div className="w-full h-full flex items-center justify-center text-6xl text-gray-400">
                    RR
                  </div>
                </div>
                
                <h3 className="font-serif text-3xl font-semibold text-gray-900 mb-2">
                  Rich Rivara
                </h3>
                
                <div className="text-lg text-[#025082] font-medium mb-4">
                  Founder & CEO
                </div>
                
                <p className="text-gray-600 leading-relaxed mb-4">
                  [PLACEHOLDER: 2-3 sentence bio from Rich about background, expertise, why R²]
                </p>
                
                <a href="https://linkedin.com/in/[rich-profile]" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="inline-flex items-center gap-2 text-[#025082] hover:text-[#FF6B35] transition-colors">
                  <span>LinkedIn</span>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              </div>
            </AnimatedSection>
            
            {/* Will */}
            <AnimatedSection delay={0.2}>
              <div className="text-center">
                <div className="w-48 h-48 mx-auto mb-6 rounded-full bg-gray-200 overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center text-6xl text-gray-400">
                    W
                  </div>
                </div>
                
                <h3 className="font-serif text-3xl font-semibold text-gray-900 mb-2">
                  Will [Last Name]
                </h3>
                
                <div className="text-lg text-[#025082] font-medium mb-4">
                  [Title - CTO? Partner?]
                </div>
                
                <p className="text-gray-600 leading-relaxed mb-4">
                  [PLACEHOLDER: 2-3 sentence bio from Will about technical background, what he brings to R²]
                </p>
                
                <a href="https://linkedin.com/in/[will-profile]" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="inline-flex items-center gap-2 text-[#025082] hover:text-[#FF6B35] transition-colors">
                  <span>LinkedIn</span>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              </div>
            </AnimatedSection>
            
            {/* Tyler */}
            <AnimatedSection delay={0.3}>
              <div className="text-center">
                <div className="w-48 h-48 mx-auto mb-6 rounded-full bg-gray-200 overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center text-6xl text-gray-400">
                    TP
                  </div>
                </div>
                
                <h3 className="font-serif text-3xl font-semibold text-gray-900 mb-2">
                  Tyler Preisser
                </h3>
                
                <div className="text-lg text-[#025082] font-medium mb-4">
                  [Title - Head of Product? Design?]
                </div>
                
                <p className="text-gray-600 leading-relaxed mb-4">
                  [PLACEHOLDER: 2-3 sentence bio about design/marketing/technical background, role at R²]
                </p>
                
                <a href="https://linkedin.com/in/[tyler-profile]" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="inline-flex items-center gap-2 text-[#025082] hover:text-[#FF6B35] transition-colors">
                  <span>LinkedIn</span>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              </div>
            </AnimatedSection>
            
          </div>
          
        </Container>
      </section>
      
      {/* Technology Partners */}
      <section className="py-24 lg:py-32 bg-gray-50">
        <Container size="lg">
          
          <AnimatedSection>
            <h2 className="font-serif text-4xl font-semibold text-gray-900 text-center mb-6">
              Built on Best-in-Class Technology
            </h2>
            <p className="text-xl text-gray-600 text-center max-w-2xl mx-auto mb-16">
              We're model-agnostic. We use the right AI for your specific use case.
            </p>
          </AnimatedSection>
          
          {/* Logo Grid */}
          <AnimatedSection delay={0.2}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 items-center">
              {[
                'Anthropic',
                'OpenAI', 
                'Google',
                'Salesforce',
                'Microsoft',
                'AWS'
              ].map((partner, index) => (
                <div key={index} className="flex items-center justify-center p-6 bg-white rounded-lg">
                  {/* Replace with actual logos */}
                  <div className="text-gray-400 font-medium text-lg">
                    {partner}
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
          
        </Container>
      </section>
      
      {/* CTA */}
      <section className="py-32 lg:py-40 bg-white">
        <Container size="md">
          <AnimatedSection>
            <h2 className="font-serif text-5xl font-semibold text-gray-900 text-center mb-8">
              Ready to Work Together?
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="primary">
                <Link href="/workshop">Book Workshop</Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </AnimatedSection>
        </Container>
      </section>
      
    </div>
  );
}
```

---

### 4.4 CONTACT PAGE

**Purpose:** Simple, effective contact form

```typescript
// File: app/contact/page.tsx
'use client';

import { Container } from '@/components/ui/Container';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { ContactForm } from '@/components/forms/ContactForm';

export default function ContactPage() {
  return (
    <div className="bg-white">
      
      <section className="pt-32 pb-24 lg:pt-40 lg:pb-32">
        <Container size="md">
          
          <AnimatedSection>
            <h1 className="font-serif text-6xl lg:text-7xl font-semibold text-gray-900 text-center mb-6">
              Let's Talk
            </h1>
            
            <p className="text-2xl text-gray-600 text-center mb-16">
              Book a workshop. Ask a question. Start the conversation.
            </p>
          </AnimatedSection>
          
          <AnimatedSection delay={0.2}>
            <ContactForm />
          </AnimatedSection>
          
          {/* Alternative Contact */}
          <AnimatedSection delay={0.3}>
            <div className="mt-16 text-center">
              <p className="text-gray-600 mb-2">
                Prefer email?
              </p>
              <a href="mailto:hello@r2solutions.ai" 
                 className="text-[#025082] hover:text-[#FF6B35] font-medium text-lg transition-colors">
                hello@r2solutions.ai
              </a>
            </div>
          </AnimatedSection>
          
        </Container>
      </section>
      
    </div>
  );
}
```

**Contact Form Component:**

```typescript
// File: components/forms/ContactForm.tsx
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    industry: '',
    interest: [] as string[],
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // TODO: Implement actual form submission
    // For now, simulate submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };
  
  if (isSubmitted) {
    return (
      <div className="text-center py-12">
        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center">
          <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-serif text-3xl font-semibold text-gray-900 mb-4">
          Thank You!
        </h3>
        <p className="text-lg text-gray-600 mb-8">
          We'll be in touch within 24 hours.
        </p>
        <Button onClick={() => setIsSubmitted(false)} variant="secondary">
          Send Another Message
        </Button>
      </div>
    );
  }
  
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      
      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
          Name *
        </label>
        <input
          type="text"
          id="name"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#025082] focus:border-transparent transition-colors"
        />
      </div>
      
      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
          Email *
        </label>
        <input
          type="email"
          id="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#025082] focus:border-transparent transition-colors"
        />
      </div>
      
      {/* Company */}
      <div>
        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
          Company
        </label>
        <input
          type="text"
          id="company"
          value={formData.company}
          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#025082] focus:border-transparent transition-colors"
        />
      </div>
      
      {/* Industry */}
      <div>
        <label htmlFor="industry" className="block text-sm font-medium text-gray-700 mb-2">
          Industry
        </label>
        <select
          id="industry"
          value={formData.industry}
          onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#025082] focus:border-transparent transition-colors"
        >
          <option value="">Select an industry</option>
          <option value="insurance">Insurance</option>
          <option value="healthcare">Healthcare</option>
          <option value="financial">Financial Services</option>
          <option value="home">Home Services</option>
          <option value="other">Other</option>
        </select>
      </div>
      
      {/* Interest Checkboxes */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">
          What brings you here?
        </label>
        <div className="space-y-2">
          {[
            { value: 'workshop', label: 'Workshop' },
            { value: 'integration', label: 'Integration Help' },
            { value: 'general', label: 'General Question' }
          ].map((option) => (
            <label key={option.value} className="flex items-center">
              <input
                type="checkbox"
                checked={formData.interest.includes(option.value)}
                onChange={(e) => {
                  if (e.target.checked) {
                    setFormData({
                      ...formData,
                      interest: [...formData.interest, option.value]
                    });
                  } else {
                    setFormData({
                      ...formData,
                      interest: formData.interest.filter(i => i !== option.value)
                    });
                  }
                }}
                className="w-4 h-4 text-[#025082] border-gray-300 rounded focus:ring-[#025082]"
              />
              <span className="ml-2 text-gray-700">{option.label}</span>
            </label>
          ))}
        </div>
      </div>
      
      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
          Message
        </label>
        <textarea
          id="message"
          rows={6}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#025082] focus:border-transparent transition-colors resize-none"
        />
      </div>
      
      {/* Submit Button */}
      <Button 
        type="submit" 
        size="lg" 
        variant="primary"
        disabled={isSubmitting}
        className="w-full"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </Button>
      
    </form>
  );
}
```

---

### 4.5 HEADER COMPONENT

**Visual Structure:**
```
┌────────────────────────────────────────────────┐
│ [R² Logo]    Solutions  Industries  Workshop  │
│                                About  [Contact]│
└────────────────────────────────────────────────┘
Sticky on scroll, white background, subtle shadow
```

```typescript
// File: components/layout/Header.tsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { cn } from '@/lib/utils';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const navLinks = [
    { href: '/solutions', label: 'Solutions' },
    { href: '/industries', label: 'Industries' },
    { href: '/workshop', label: 'Workshop' },
    { href: '/about', label: 'About' }
  ];
  
  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "bg-white/95 backdrop-blur-sm shadow-sm" 
          : "bg-white"
      )}
    >
      <Container size="2xl">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <span className="font-serif text-3xl font-semibold text-[#025082] group-hover:text-[#023d63] transition-colors">
              R²
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-base font-medium transition-colors relative group",
                  pathname === link.href
                    ? "text-[#025082]"
                    : "text-gray-600 hover:text-[#025082]"
                )}
              >
                {link.label}
                <span 
                  className={cn(
                    "absolute -bottom-1 left-0 h-0.5 bg-[#025082] transition-all",
                    pathname === link.href 
                      ? "w-full" 
                      : "w-0 group-hover:w-full"
                  )}
                />
              </Link>
            ))}
            
            <Button asChild size="sm" variant="primary">
              <Link href="/contact">Contact</Link>
            </Button>
          </nav>
          
          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-gray-600 hover:text-[#025082]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
          
        </div>
      </Container>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <Container size="2xl">
            <nav className="py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "block text-lg font-medium transition-colors",
                    pathname === link.href
                      ? "text-[#025082]"
                      : "text-gray-600 hover:text-[#025082]"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              
              <Button asChild size="md" variant="primary" className="w-full">
                <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                  Contact
                </Link>
              </Button>
            </nav>
          </Container>
        </div>
      )}
    </header>
  );
}
```

**Header Specs:**
- Height: 80px fixed
- Background: White with 95% opacity + backdrop blur when scrolled
- Shadow: Subtle (sm) when scrolled
- Logo: 32px font size, serif
- Nav links: 16px, medium weight
- Active state: Blue color + underline
- Hover: Blue color + underline animation (300ms)
- Sticky positioning: `position: fixed; top: 0;`

---

### 4.6 FOOTER COMPONENT

```typescript
// File: components/layout/Footer.tsx
import Link from 'next/link';
import { Container } from '@/components/ui/Container';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white">
      
      {/* Main Footer */}
      <div className="py-16 lg:py-20">
        <Container size="2xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            
            {/* Column 1: Brand */}
            <div>
              <div className="font-serif text-3xl font-semibold mb-4">
                R²
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Industry-specific AI agents that deliver results in days, not years.
              </p>
            </div>
            
            {/* Column 2: Solutions */}
            <div>
              <h3 className="font-semibold text-white mb-4">Solutions</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link href="/solutions#agent-factory" className="text-gray-400 hover:text-white transition-colors">
                    Agent Factory Platform
                  </Link>
                </li>
                <li>
                  <Link href="/solutions#cross-sell" className="text-gray-400 hover:text-white transition-colors">
                    Cross-Sell Automation
                  </Link>
                </li>
                <li>
                  <Link href="/solutions#back-office" className="text-gray-400 hover:text-white transition-colors">
                    Back-Office Automation
                  </Link>
                </li>
                <li>
                  <Link href="/solutions#integration" className="text-gray-400 hover:text-white transition-colors">
                    Integration Services
                  </Link>
                </li>
              </ul>
            </div>
            
            {/* Column 3: Industries */}
            <div>
              <h3 className="font-semibold text-white mb-4">Industries</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link href="/industries#insurance" className="text-gray-400 hover:text-white transition-colors">
                    Insurance
                  </Link>
                </li>
                <li>
                  <Link href="/industries#healthcare" className="text-gray-400 hover:text-white transition-colors">
                    Healthcare
                  </Link>
                </li>
                <li>
                  <Link href="/industries#financial" className="text-gray-400 hover:text-white transition-colors">
                    Financial Services
                  </Link>
                </li>
                <li>
                  <Link href="/industries#home" className="text-gray-400 hover:text-white transition-colors">
                    Home Services
                  </Link>
                </li>
              </ul>
            </div>
            
            {/* Column 4: Company */}
            <div>
              <h3 className="font-semibold text-white mb-4">Company</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/workshop" className="text-gray-400 hover:text-white transition-colors">
                    Workshop
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            
          </div>
        </Container>
      </div>
      
      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <Container size="2xl">
          <div className="py-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            
            <div>
              © {currentYear} R² Solutions. All rights reserved.
            </div>
            
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <a 
                href="https://linkedin.com/company/r2-solutions" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                LinkedIn
              </a>
            </div>
            
          </div>
        </Container>
      </div>
      
    </footer>
  );
}
```

---

<a name="animations"></a>
## 5. ANIMATIONS & INTERACTIONS

### 5.1 Animation Philosophy

**Approach:** Subtle, sophisticated, never gimmicky. High-impact moments > scattered micro-interactions.

**Key Principles:**
1. Page load: Staggered reveal (hero content first, then sections)
2. Scroll trigger: Fade in + slight upward movement once
3. Hover states: Scale (1.02x max), lift (2-4px), color transitions
4. Page transitions: Smooth fade, 400ms
5. No: Bouncing, spinning, parallax, auto-playing anything

### 5.2 Scroll-Triggered Animations

Already implemented via `AnimatedSection` component:
- Fade in: 0 → 1 opacity
- Slide up: 20px → 0px
- Duration: 500ms
- Easing: cubic-bezier(0.25, 0.1, 0.25, 1)
- Trigger: IntersectionObserver at 10% visibility
- Happens once per element

### 5.3 Button Hover States

```css
/* Primary Button */
.btn-primary:hover {
  background-color: #E65F2F; /* Darker orange */
  transform: translateY(-2px); /* Subtle lift */
  box-shadow: 0 6px 16px -4px rgba(255, 107, 53, 0.4);
  transition: all 200ms ease-out;
}

/* Secondary Button */
.btn-secondary:hover {
  background-color: #025082;
  color: white;
  box-shadow: 0 4px 6px rgba(2, 80, 130, 0.15);
  transition: all 200ms ease-out;
}
```

### 5.4 Card Hover States

```css
.card-hover:hover {
  transform: translateY(-4px); /* Lift */
  box-shadow: 0 12px 20px -5px rgba(2, 80, 130, 0.15); /* Stronger shadow */
  transition: all 300ms ease-out;
}
```

### 5.5 Page Transition Animation

```typescript
// File: app/layout.tsx
import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  
  return (
    <html lang="en">
      <body>
        <AnimatePresence mode="wait">
          <motion.div
            key={pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </body>
    </html>
  );
}
```

---

<a name="seo-performance"></a>
## 6. SEO & PERFORMANCE

### 6.1 Metadata Configuration

```typescript
// File: app/layout.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://r2solutions.ai'),
  title: {
    default: 'R² Solutions | Industry-Specific AI Agents',
    template: '%s | R² Solutions'
  },
  description: 'Purpose-built AI agents that deliver measurable results in days, not years. Industry-specific automation for insurance, healthcare, and financial services.',
  keywords: [
    'AI integration',
    'AI agents',
    'industry-specific AI',
    'AI automation',
    'insurance AI',
    'healthcare AI',
    'cross-sell automation',
    'AI consulting'
  ],
  authors: [{ name: 'R² Solutions' }],
  creator: 'R² Solutions',
  publisher: 'R² Solutions',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://r2solutions.ai',
    siteName: 'R² Solutions',
    title: 'R² Solutions | Industry-Specific AI Agents',
    description: 'Purpose-built AI agents that deliver measurable results in days, not years.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'R² Solutions'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'R² Solutions | Industry-Specific AI Agents',
    description: 'Purpose-built AI agents that deliver measurable results in days, not years.',
    images: ['/og-image.jpg']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  }
};
```

### 6.2 Sitemap

```typescript
// File: app/sitemap.ts
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://r2solutions.ai';
  
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1
    },
    {
      url: `${baseUrl}/workshop`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9
    },
    {
      url: `${baseUrl}/solutions`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8
    },
    {
      url: `${baseUrl}/industries`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.6
    }
  ];
}
```

### 6.3 Performance Optimizations

```typescript
// File: next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable SWC minification
  swcMinify: true,
  
  // Image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384]
  },
  
  // Compression
  compress: true,
  
  // Output
  output: 'standalone'
};

module.exports = nextConfig;
```

---

<a name="deployment"></a>
## 7. DEPLOYMENT TO CLOUDFLARE PAGES

### 7.1 Build Configuration

```bash
# Install Cloudflare Pages adapter
npm install --save-dev @cloudflare/next-on-pages
```

```json
// package.json - Add build script
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "pages:build": "npx @cloudflare/next-on-pages",
    "preview": "npm run pages:build && wrangler pages dev .vercel/output/static",
    "deploy": "npm run pages:build && wrangler pages deploy .vercel/output/static"
  }
}
```

### 7.2 Wrangler Configuration

```toml
# File: wrangler.toml
name = "r2-solutions"
compatibility_date = "2024-01-01"
pages_build_output_dir = ".vercel/output/static"

[env.production]
name = "r2-solutions"
route = "r2solutions.ai/*"

[env.production.vars]
ENVIRONMENT = "production"
```

### 7.3 Deployment Steps

```bash
# 1. Build the project
npm run build

# 2. Build for Cloudflare Pages
npm run pages:build

# 3. Deploy to Cloudflare (first time)
npx wrangler pages deploy .vercel/output/static --project-name=r2-solutions

# 4. For subsequent deploys
npm run deploy
```

### 7.4 Custom Domain Setup

1. In Cloudflare Dashboard → Pages → r2-solutions → Custom domains
2. Add `r2solutions.ai` and `www.r2solutions.ai`
3. DNS records automatically configured by Cloudflare

### 7.5 Environment Variables

```bash
# Set in Cloudflare Dashboard → Pages → Settings → Environment Variables

# Production
NEXT_PUBLIC_SITE_URL=https://r2solutions.ai
CONTACT_FORM_EMAIL=hello@r2solutions.ai

# Optional: Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

---

## 8. TAILWIND CONFIG

```typescript
// File: tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        r2: {
          blue: '#025082',
          'blue-hover': '#023d63',
          'blue-light': '#0369a1',
          orange: '#FF6B35',
          'orange-hover': '#E65F2F',
          purple: '#6B46C1',
        },
      },
      fontFamily: {
        serif: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display': ['96px', '104px'],
      },
      boxShadow: {
        'hover': '0 12px 20px -5px rgba(2, 80, 130, 0.15), 0 6px 8px -4px rgba(2, 80, 130, 0.08)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
```

---

## 9. GLOBAL STYLES

```css
/* File: app/globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Import Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,600;0,9..144,700&family=Inter:wght@400;500;600&display=swap');

@layer base {
  /* Root Variables */
  :root {
    /* Colors */
    --r2-blue: #025082;
    --r2-blue-hover: #023d63;
    --urgent-orange: #FF6B35;
    --urgent-orange-hover: #E65F2F;
    
    /* Typography */
    --font-serif: 'Fraunces', Georgia, serif;
    --font-sans: 'Inter', system-ui, sans-serif;
  }
  
  /* Base Styles */
  html {
    @apply antialiased;
    scroll-behavior: smooth;
  }
  
  body {
    @apply font-sans text-gray-900 bg-white;
  }
  
  /* Focus States */
  *:focus-visible {
    @apply outline-none ring-2 ring-r2-blue ring-offset-2;
  }
}

@layer utilities {
  /* Custom Utilities */
  .text-balance {
    text-wrap: balance;
  }
  
  .animate-on-scroll {
    @apply opacity-0 translate-y-8;
  }
  
  .animate-on-scroll.in-view {
    @apply opacity-100 translate-y-0;
    transition: all 0.5s cubic-bezier(0.25, 0.1, 0.25, 1);
  }
}

/* Prose Styles (for rich text) */
.prose {
  @apply text-gray-700 leading-relaxed;
}

.prose h2 {
  @apply font-serif text-4xl font-semibold text-gray-900 mb-6 mt-12;
}

.prose h3 {
  @apply font-serif text-2xl font-semibold text-gray-900 mb-4 mt-8;
}

.prose p {
  @apply mb-6;
}

.prose ul {
  @apply list-disc pl-6 mb-6 space-y-2;
}

.prose a {
  @apply text-r2-blue hover:text-urgent-orange underline underline-offset-2 transition-colors;
}
```

---

## 10. UTILITY FUNCTIONS

```typescript
// File: lib/utils.ts
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Merge Tailwind classes with clsx
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Format date for display
 */
export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(date);
}

/**
 * Validate email
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Truncate text
 */
export function truncate(text: string, length: number): string {
  if (text.length <= length) return text;
  return text.slice(0, length) + '...';
}
```

---

## 11. COMPLETE CHECKLIST

### Pre-Development
- [ ] Review entire blueprint
- [ ] Set up Next.js project
- [ ] Install all dependencies
- [ ] Configure Tailwind
- [ ] Set up font imports
- [ ] Create project structure

### Components (Phase 1)
- [ ] Button component
- [ ] Card component
- [ ] Badge component
- [ ] Container component
- [ ] AnimatedSection component
- [ ] Header component
- [ ] Footer component
- [ ] ContactForm component

### Pages (Phase 2)
- [ ] Homepage with all sections
- [ ] Workshop page
- [ ] About page
- [ ] Contact page
- [ ] Solutions page (brief)
- [ ] Industries page (brief)

### Styling (Phase 3)
- [ ] Global styles
- [ ] Color system
- [ ] Typography system
- [ ] Animations working
- [ ] Responsive breakpoints
- [ ] Hover states

### Content (Phase 4)
- [ ] Replace all [PLACEHOLDER] text
- [ ] Add founder bios
- [ ] Add founding story
- [ ] Finalize copy
- [ ] Add photos (or placeholders)

### Technical (Phase 5)
- [ ] SEO metadata all pages
- [ ] Sitemap configured
- [ ] Forms working
- [ ] Analytics setup
- [ ] Performance optimization
- [ ] Test all links

### Testing (Phase 6)
- [ ] Desktop Chrome
- [ ] Desktop Safari
- [ ] Desktop Firefox
- [ ] Mobile iOS Safari
- [ ] Mobile Android Chrome
- [ ] Tablet iPad
- [ ] Lighthouse audit 95+

### Deployment (Phase 7)
- [ ] Build for Cloudflare
- [ ] Test preview build
- [ ] Deploy to production
- [ ] Configure custom domain
- [ ] SSL working
- [ ] Analytics tracking

---

## 12. FINAL NOTES

### What Makes This Premium

**Visual:**
- Generous white space
- Restrained color palette (blue + white + orange accent)
- Premium typography (serif + sans combo)
- Subtle animations
- Perfect alignment
- Consistent spacing

**Technical:**
- Lightning fast (Next.js 14 + Cloudflare)
- Accessible (WCAG AA)
- SEO optimized
- Mobile-first responsive
- Clean code architecture

**Content:**
- Direct, confident messaging
- Results-focused
- No fluff or buzzwords
- Clear CTAs
- Guarantee front and center

### Key Differentiators Emphasized

1. **Money-Back Guarantee** - Badge, sections, repeated messaging
2. **Speed** - "Results in 48 hours" everywhere
3. **Industry-Specific** - Not generic AI
4. **Real Operators** - Builders, not consultants
5. **Transparency** - Full code ownership, clear process

### Design Philosophy Summary

**Think Bugatti:**
- Ultra-premium
- Minimal
- Every detail perfect
- No unnecessary elements
- Confident simplicity

**Not:**
- Flashy gradients
- Busy layouts
- Generic stock photos
- Over-animated
- Trying too hard

---

## YOU NOW HAVE EVERYTHING

This blueprint contains:
- ✅ Complete design system (colors, typography, spacing)
- ✅ Every component with exact code
- ✅ Every page fully designed
- ✅ All animations specified
- ✅ Complete technical setup
- ✅ Deployment instructions
- ✅ Performance optimizations
- ✅ SEO configuration

**Build this exactly as specified and you'll have a world-class website.**

No guesswork. No decisions left unmade. Just execute.

Now go build it. 🚀