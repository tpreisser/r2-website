import type { Metadata } from "next";
import "./globals.css";
import { ConditionalHeader } from "@/components/layout/ConditionalHeader";
import { Footer } from "@/components/layout/Footer";
import { r2Font, inter } from "./fonts";

const siteUrl = "https://rsquaredai.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "R² Solutions | Industry-Specific AI Agents That Ship to Production",
    template: "%s | R² Solutions",
  },
  description:
    "Purpose-built AI agents that deliver measurable results in days, not years. Industry-specific automation for insurance, healthcare, financial services, and more. From prototype to production in 90 days.",
  keywords: [
    "AI agents",
    "artificial intelligence",
    "machine learning",
    "automation",
    "insurance AI",
    "healthcare AI",
    "financial services AI",
    "enterprise AI",
    "AI consulting",
    "process automation",
    "intelligent automation",
    "AI solutions",
    "R2 Solutions",
    "R² Solutions",
    "rsquared AI",
  ],
  authors: [{ name: "R² Solutions", url: siteUrl }],
  creator: "R² Solutions",
  publisher: "R² Solutions",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "mask-icon", url: "/r2-logo.png", color: "#025082" },
    ],
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "R² Solutions",
    title: "R² Solutions | Industry-Specific AI Agents That Ship to Production",
    description:
      "Purpose-built AI agents that deliver measurable results in days, not years. Industry-specific automation for insurance, healthcare, and financial services.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "R² Solutions - Industry-Specific AI Agents",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "R² Solutions | Industry-Specific AI Agents",
    description:
      "Purpose-built AI agents that deliver measurable results in days, not years. From prototype to production in 90 days.",
    images: ["/og-image.png"],
    creator: "@rsquaredai",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add these when you have them:
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },
  alternates: {
    canonical: siteUrl,
  },
  category: "technology",
};

// JSON-LD Structured Data for SEO
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://rsquaredai.com/#organization",
      name: "R² Solutions",
      alternateName: ["R2 Solutions", "R Squared Solutions", "rsquared AI"],
      url: "https://rsquaredai.com",
      logo: {
        "@type": "ImageObject",
        url: "https://rsquaredai.com/r2-logo.png",
        width: 220,
        height: 80,
      },
      description:
        "Purpose-built AI agents that deliver measurable results in days, not years. Industry-specific automation for insurance, healthcare, and financial services.",
      foundingDate: "2024",
      sameAs: [
        "https://twitter.com/rsquaredai",
        "https://linkedin.com/company/rsquaredai",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales",
        url: "https://rsquaredai.com/contact",
      },
      areaServed: "Worldwide",
      serviceType: [
        "AI Consulting",
        "Machine Learning",
        "Process Automation",
        "Enterprise AI Solutions",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://rsquaredai.com/#website",
      url: "https://rsquaredai.com",
      name: "R² Solutions",
      description: "Industry-Specific AI Agents That Ship to Production",
      publisher: {
        "@id": "https://rsquaredai.com/#organization",
      },
      inLanguage: "en-US",
    },
    {
      "@type": "WebPage",
      "@id": "https://rsquaredai.com/#webpage",
      url: "https://rsquaredai.com",
      name: "R² Solutions | Industry-Specific AI Agents That Ship to Production",
      isPartOf: {
        "@id": "https://rsquaredai.com/#website",
      },
      about: {
        "@id": "https://rsquaredai.com/#organization",
      },
      description:
        "Purpose-built AI agents that deliver measurable results in days, not years. Industry-specific automation for insurance, healthcare, financial services, and more.",
      inLanguage: "en-US",
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://rsquaredai.com/#service",
      name: "R² Solutions AI Services",
      provider: {
        "@id": "https://rsquaredai.com/#organization",
      },
      serviceType: "AI Consulting and Implementation",
      areaServed: "Worldwide",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "AI Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "The Forge",
              description: "One-day AI build with guaranteed value",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Agent Factory",
              description: "Pre-built AI agents ready to deploy",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Process Automation",
              description: "AI-powered operational automation",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Advisory",
              description: "AI strategy from people who build",
            },
          },
        ],
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${r2Font.variable} ${inter.variable}`}
      >
        <ConditionalHeader />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
