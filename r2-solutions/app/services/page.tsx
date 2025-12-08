'use client';

import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Card } from '@/components/ui/Card';

const services = [
  {
    id: 'the-forge',
    title: 'The Forge',
    eyebrow: 'Premium Experience',
    description: "One-day build with our entire senior team. Working prototypes, not presentations. Guaranteed value or you don't pay.",
    href: '/services/the-forge',
    cta: 'Request a Session',
  },
  {
    id: 'agent-factory',
    title: 'Agent Factory',
    eyebrow: 'Pre-Built Solutions',
    description: 'Battle-tested AI agents for common challenges. Deploy in days, customize to your workflows, and scale fast.',
    href: '/services/agent-factory',
    cta: 'Explore Agents',
  },
  {
    id: 'process-automation',
    title: 'Process Automation',
    eyebrow: 'Implementation Services',
    description: 'AI-powered automation that kills manual work. Document processing, data movement, decision flows, reporting, and more.',
    href: '/services/process-automation',
    cta: 'Start an Assessment',
  },
  {
    id: 'advisory',
    title: 'Advisory',
    eyebrow: 'Strategic Services',
    description: 'Strategy from builders. Outcome-based roadmaps, diligence support, org design, vendor selection, and executive education.',
    href: '/services/advisory',
    cta: 'Start a Conversation',
  },
];

export default function ServicesOverviewPage() {
  return (
    <div className="bg-gradient-to-b from-[#eef4f9] via-white to-white text-slate-900">
      {/* Hero */}
      <section className="relative overflow-hidden pb-20 pt-32 lg:pb-28 lg:pt-40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(2,80,130,0.08),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(255,107,53,0.07),transparent_32%),radial-gradient(circle_at_50%_80%,rgba(2,80,130,0.05),transparent_30%)]" />
        <Container size="2xl" className="relative">
          <AnimatedSection className="text-center space-y-6">
            <h1 className="font-serif text-5xl font-semibold text-slate-900 lg:text-6xl">Services</h1>
            <p className="mx-auto max-w-4xl text-xl leading-relaxed text-slate-600 lg:text-2xl">
              We build, deploy, and advise with the team that actually ships AI. Four service lines, one standard: working software, honest guidance, and outcomes that stick.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button asChild size="lg" variant="primary">
                <Link href="/contact?service=get-started">Get Started</Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <Link href="#services-grid">Browse Services</Link>
              </Button>
            </div>
          </AnimatedSection>
        </Container>
      </section>

      {/* Services grid */}
      <section id="services-grid" className="bg-white py-20 lg:py-28">
        <Container size="2xl">
          <div className="grid gap-8 md:grid-cols-2">
            {services.map((service, idx) => (
              <AnimatedSection key={service.id} delay={idx * 0.05}>
                <Card
                  variant="hover"
                  padding="lg"
                  className="h-full border border-slate-200/80 shadow-[0_22px_50px_-32px_rgba(2,80,130,0.45)]"
                >
                  <div className="flex items-center justify-between gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#025082]">
                    <span>{service.eyebrow}</span>
                    <span className="h-px flex-1 bg-gradient-to-r from-[#025082]/30 via-slate-200 to-transparent" />
                  </div>
                  <h2 className="mt-4 font-serif text-3xl font-semibold text-slate-900">{service.title}</h2>
                  <p className="mt-3 text-lg leading-relaxed text-slate-600">{service.description}</p>
                  <div className="mt-6 flex items-center justify-between">
                    <Button asChild variant="primary">
                      <Link href={service.href}>{service.cta}</Link>
                    </Button>
                    <Link href={service.href} className="text-sm font-semibold text-[#025082] underline-offset-4 hover:underline">
                      View page →
                    </Link>
                  </div>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-[#f6f8fb] py-24 lg:py-28">
        <Container size="md">
          <AnimatedSection className="rounded-3xl border border-slate-200/80 bg-white px-8 py-12 text-center shadow-[0_24px_60px_-32px_rgba(2,80,130,0.45)]">
            <h2 className="font-serif text-4xl font-semibold text-slate-900 lg:text-5xl">Want to talk through fit?</h2>
            <p className="mt-4 text-lg text-slate-700">
              Tell us what you&apos;re trying to accomplish. We&apos;ll point you to the right path—or tell you if now isn&apos;t the time.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button asChild size="lg" variant="primary">
                <Link href="/contact?service=get-started">Start the Conversation</Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <Link href="/about">Meet the Team</Link>
              </Button>
            </div>
          </AnimatedSection>
        </Container>
      </section>
    </div>
  );
}

