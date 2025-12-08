'use client';

import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

const differentiators = [
  {
    title: "We've Done This",
    body: `Our advisory team has built AI systems. Deployed them. Maintained them. When we say something will work, it's because we've made it work. When we say something is risky, it's because we've seen it fail.

This isn't theory for us.`,
  },
  {
    title: "We're Not Selling Hours",
    body: `Traditional consultants have an incentive to extend engagements. We don't.

We scope to outcomes, not time. We want to get you to answers quickly so you can act on them. We're not trying to embed ourselves permanently.`,
  },
  {
    title: "We'll Tell You No",
    body: `If AI isn't the right solution for your problem, we'll say so. If your organization isn't ready, we'll tell you what needs to change first. If your timeline is unrealistic, we'll push back.

We'd rather lose an engagement than set you up for failure.`,
  },
  {
    title: 'We Can Build It',
    body: `Unlike pure strategy firms, we have implementation capability. That keeps us honest—we might have to build what we're recommending.

And when you're ready to execute, there's no handoff to a different firm, no ramp-up, no lost context.`,
  },
];

const services = [
  {
    title: 'AI Strategy & Roadmap',
    body: `Comprehensive assessment of AI opportunity across your organization.

We identify use cases, assess readiness, build a realistic roadmap. Not aspirational—achievable. Not every AI opportunity, just the ones worth pursuing.

Includes: Opportunity identification, data readiness assessment, build vs. buy analysis, roadmap with investment requirements

Timeline: 4-6 weeks`,
  },
  {
    title: 'Due Diligence Support',
    body: `For PE firms and strategic acquirers evaluating AI claims and opportunities.

We assess what's real vs. what's marketing. We size the AI opportunity for your value creation plan. We identify risks and prerequisites.

Includes: Technology assessment, capability evaluation, opportunity sizing, integration risk analysis, 100-day plan input

Timeline: 2-4 weeks (deal timeline dependent)`,
  },
  {
    title: 'Operating Partner Support',
    body: `Ongoing advisory for PE operating partners managing AI across portfolios.

Expert perspective when you need it, without building a permanent team. We help you evaluate opportunities, assess vendor claims, monitor progress, and cross-pollinate wins.

Includes: Portfolio assessments, initiative reviews, vendor evaluation, best practice sharing

Format: Retainer arrangement`,
  },
  {
    title: 'AI Organization Design',
    body: `How should your company organize for AI? We help design operating models, define roles, and structure for sustainable success.

Not generic "center of excellence" templates. Organization design that fits your specific context, culture, and capabilities.

Includes: Operating model design, role definition, governance frameworks, talent strategy

Timeline: 4-8 weeks`,
  },
  {
    title: 'Executive Education',
    body: `AI fluency for leadership teams. Not technical training—strategic understanding.

What AI can do. What it can't. Where it creates value. How to evaluate proposals. How to ask the right questions. How to avoid getting sold.

Format: Half-day to multi-day workshops, customized to your context`,
  },
  {
    title: 'Vendor Selection',
    body: `The AI vendor landscape is overwhelming. We help you navigate it.

Define real requirements (not vendor-influenced RFP templates). Evaluate options honestly. Make decisions based on fit, not sales skill.

Includes: Requirements definition, market analysis, RFP support, technical diligence, negotiation support

Timeline: 4-6 weeks`,
  },
];

const audiences = [
  {
    title: 'Private Equity Firms',
    body: `Operating partners and deal teams who need AI expertise without building an internal function.

We support due diligence, portfolio company assessment, and value creation planning. We speak PE—hold periods, value creation plans, exit multiples, operating leverage.`,
  },
  {
    title: 'Portfolio Company Leadership',
    body: `CEOs and executive teams of PE-backed companies navigating AI under value creation pressure.

We understand your constraints. Compressed timelines. Board expectations. Limited runway for experimentation. We help you move fast without making expensive mistakes.`,
  },
  {
    title: 'Mid-Market Companies',
    body: `Leaders who know AI matters but don't have a clear path forward. Can't afford (or don't want) Big 4 overhead and complexity.

We bring enterprise-grade thinking at mid-market scale and speed. Practical guidance, not bloated engagements.`,
  },
];

const principles = [
  {
    title: 'Outcome-Based Scoping',
    body: `We define what you'll get before we start. Clear deliverables. Fixed timeline. Known investment.

If we can't define the outcome clearly, we're not ready to engage.`,
  },
  {
    title: 'Senior Delivery',
    body: `No bait-and-switch. The partners you meet are the people who do the work.

We're a small firm by design. You get experienced people, not pyramids of junior analysts supervised from a distance.`,
  },
  {
    title: 'Practical Output',
    body: `Every recommendation comes with "how." We don't hand over strategic frameworks and wish you luck.

You get specifics. Roadmaps with real timelines. Investment estimates based on actual project experience. Decisions you can act on.`,
  },
  {
    title: 'Honest Assessment',
    body: `We tell you what we actually think. If your idea won't work, we'll say so. If you're not ready, we'll tell you. If we're not the right fit, we'll point you elsewhere.

Our reputation is built on honesty, not salesmanship.`,
  },
];

export default function AdvisoryPage() {
  return (
    <div className="bg-gradient-to-b from-[#eaf2f8] via-white to-white text-slate-900">
      {/* Hero */}
      <section className="relative overflow-hidden pb-20 pt-28 sm:pt-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_25%,rgba(2,80,130,0.1),transparent_38%),radial-gradient(circle_at_80%_10%,rgba(255,107,53,0.08),transparent_32%),radial-gradient(circle_at_60%_80%,rgba(2,80,130,0.05),transparent_35%)]" />
        <Container size="2xl" className="relative">
          <AnimatedSection className="grid gap-10 lg:grid-cols-[1.2fr,0.9fr] lg:items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 rounded-full bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#025082] shadow-sm ring-1 ring-white/60 backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-[#025082] shadow-[0_0_0_6px_rgba(2,80,130,0.15)]" />
                Strategic Services
              </div>
              <div className="space-y-4">
                <h1 className="font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">Advisory</h1>
                <p className="text-2xl text-slate-700 sm:text-3xl">Strategy from people who build.</p>
              </div>
              <p className="max-w-3xl text-lg leading-relaxed text-slate-600">
                We're not traditional consultants. We're builders and operators who also do strategy work.
                <br />
                <br />
                When we advise on AI, it's grounded in the reality of what we've actually implemented. No theoretical frameworks. No recommendations we couldn't execute ourselves.
                <br />
                <br />
                If you want a partner who'll tell you the truth—even when it's inconvenient—and who can actually build what they recommend, let's talk.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <Button asChild size="lg" variant="primary">
                  <Link href="/contact?service=advisory">Start a Conversation</Link>
                </Button>
              </div>
            </div>
            <Card
              variant="feature"
              padding="lg"
              className="relative overflow-hidden border border-white/70 bg-white/85 shadow-[0_24px_60px_-35px_rgba(2,80,130,0.55)] backdrop-blur"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(2,80,130,0.08),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(255,107,53,0.08),transparent_35%)]" />
              <div className="relative space-y-4">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#025082]">Why we're different</p>
                <h3 className="text-2xl font-semibold text-slate-900">Builders first, advisors second.</h3>
                <p className="text-slate-700">
                  We scope to outcomes, not hours. We pair strategy with the ability to execute. And we push back when the best answer is "not yet" or "not that way."
                </p>
              </div>
            </Card>
          </AnimatedSection>
        </Container>
      </section>

      {/* How we're different */}
      <section className="bg-white py-16 sm:py-20">
        <Container size="2xl">
          <AnimatedSection className="mb-12 space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#025082]">How We're Different</p>
            <h2 className="font-serif text-4xl font-semibold text-slate-900">Not your typical consultants</h2>
          </AnimatedSection>
          <div className="grid gap-8 md:grid-cols-2">
            {differentiators.map((item, idx) => (
              <AnimatedSection key={item.title} delay={idx * 0.05}>
                <Card padding="lg" className="h-full border border-slate-200/80 shadow-[0_20px_44px_-28px_rgba(2,80,130,0.45)]">
                  <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-3 whitespace-pre-line text-slate-600">{item.body}</p>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      {/* Services */}
      <section className="bg-[#f6f8fb] py-16 sm:py-20">
        <Container size="2xl">
          <AnimatedSection className="mb-12 space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#025082]">What We Offer</p>
            <h2 className="font-serif text-4xl font-semibold text-slate-900">How we help</h2>
          </AnimatedSection>
          <div className="grid gap-8 md:grid-cols-2">
            {services.map((service, idx) => (
              <AnimatedSection key={service.title} delay={idx * 0.05}>
                <Card padding="lg" className="h-full border border-slate-200/80 bg-white shadow-[0_22px_50px_-32px_rgba(2,80,130,0.45)]">
                  <h3 className="text-lg font-semibold text-slate-900">{service.title}</h3>
                  <p className="mt-3 whitespace-pre-line text-slate-600">{service.body}</p>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      {/* Who we work with */}
      <section className="bg-white py-16 sm:py-20">
        <Container size="2xl">
          <AnimatedSection className="mb-12 space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#025082]">Who We Work With</p>
            <h2 className="font-serif text-4xl font-semibold text-slate-900">Designed for PE and mid-market</h2>
          </AnimatedSection>
          <div className="grid gap-8 md:grid-cols-3">
            {audiences.map((item, idx) => (
              <AnimatedSection key={item.title} delay={idx * 0.06}>
                <Card padding="lg" className="h-full border border-slate-200/80 shadow-[0_20px_44px_-28px_rgba(2,80,130,0.45)]">
                  <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-3 whitespace-pre-line text-slate-600">{item.body}</p>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      {/* How we work */}
      <section className="bg-[#f6f8fb] py-16 sm:py-20">
        <Container size="2xl">
          <AnimatedSection className="mb-12 space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#025082]">How We Work</p>
            <h2 className="font-serif text-4xl font-semibold text-slate-900">What to expect</h2>
          </AnimatedSection>
          <div className="grid gap-8 md:grid-cols-2">
            {principles.map((principle, idx) => (
              <AnimatedSection key={principle.title} delay={idx * 0.05}>
                <Card padding="lg" className="h-full border border-slate-200/80 bg-white shadow-[0_22px_50px_-32px_rgba(2,80,130,0.45)]">
                  <h3 className="text-lg font-semibold text-slate-900">{principle.title}</h3>
                  <p className="mt-3 whitespace-pre-line text-slate-600">{principle.body}</p>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="bg-white py-16 sm:py-24">
        <Container size="md">
          <AnimatedSection className="rounded-3xl border border-slate-200/80 bg-[#f6f8fb] px-8 py-12 text-center shadow-[0_24px_60px_-32px_rgba(2,80,130,0.45)]">
            <h2 className="font-serif text-3xl font-semibold text-slate-900 sm:text-4xl">Let's talk</h2>
            <p className="mt-4 text-lg text-slate-700">
              Start with a conversation. No pitch, no pressure. Tell us what you're trying to figure out. We'll tell you honestly whether and how we can help.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button asChild size="lg" variant="primary">
                <Link href="/contact?service=advisory">Start a Conversation</Link>
              </Button>
              <p className="w-full text-sm text-slate-600">We respond within 24 hours.</p>
            </div>
          </AnimatedSection>
        </Container>
      </section>
    </div>
  );
}
