import type { Metadata } from "next";
import "./globals.css";
import { ConditionalHeader } from "@/components/layout/ConditionalHeader";
import { Footer } from "@/components/layout/Footer";
import { r2Font, inter } from "./fonts";

export const metadata: Metadata = {
  title: {
    default: "R² Solutions | Industry-Specific AI Agents",
    template: "%s | R² Solutions",
  },
  description:
    "Purpose-built AI agents that deliver measurable results in days, not years. Industry-specific automation for insurance, healthcare, and financial services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
