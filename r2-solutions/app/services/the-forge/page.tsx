'use client';

import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

const whyPoints = [
  {
    title: 'The Pilot Problem',
    body: `The average enterprise AI pilot takes 9 months to reach a decision point. Nine months of meetings, stakeholder alignment, vendor evaluation, and "building consensus."

By the time you have results, the business context has shifted, the executive sponsor has moved to a new role, or everyone's just lost interest.

Speed isn't a nice-to-have. It's the difference between AI that ships and AI that doesn't.`,
  },
  {
    title: 'The Imagination Problem',
    body: `It's nearly impossible to commit real resources to something you can't see. Vendor demos show their use cases, not yours. Consultant presentations show frameworks and possibilities, not working systems.

You need to see AI working on your problems. With your data. In your context.

Not someday. Now.`,
  },
  {
    title: 'The Capability Problem',
    body: `Your team is smart. But building AI prototypes requires specialized capabilities most organizations don't have—and shouldn't build permanently.

Hiring takes months. Contractors need months of context. And by the time you've assembled the right team, the window has closed.

You need expert AI engineering on demand.`,
  },
];

const timeline = [
  {
    time: '7:00 AM — Arrival',
    copy: `Your team meets our team. We've done extensive prep in the weeks prior, but this is where we lock in final requirements. We confirm use cases, align on success criteria, and finalize what we're building.

Coffee is strong. Energy is high. We're here to make things.`,
  },
  {
    time: '8:00 AM — Build Starts',
    copy: `Our engineering team goes heads-down. But you're not watching from the sidelines—you're in the room. Answering questions. Providing context. Validating direction before we go too far down any path.

Multiple workstreams run in parallel. While one team finishes your first prototype, another is spinning up your second.`,
  },
  {
    time: '12:00 PM — Midday Check-In',
    copy: `Working lunch. First prototypes are taking shape. We demo progress, gather your feedback, adjust if needed.

This is usually when it clicks. You start seeing what's actually possible.`,
  },
  {
    time: '1:00 PM — Deep Build',
    copy: `Afternoon is pure execution. Our team is locked in. You see how fast AI development moves when you have the right people and strip away the bureaucracy.`,
  },
  {
    time: '4:30 PM — Integration & Polish',
    copy: `We connect prototypes to your data where possible. Polish interfaces. Prepare demonstrations you can take back to stakeholders who weren't in the room.`,
  },
  {
    time: '6:00 PM — Final Showcase',
    copy: `Full demonstration of everything we built. Working prototypes. Real functionality. Clear documentation of what each solution does, how it works, and what it would take to move to production.

You leave with proof. Not promises.`,
  },
];

const deliverables = [
  {
    title: 'Working Prototypes',
    body: `Functional AI systems built for your use cases. Real code that processes real inputs and produces real outputs.

Typically 3-5 prototypes depending on complexity. Each one demonstrates a specific capability you can evaluate, demo, and build on.`,
  },
  {
    title: 'Technical Documentation',
    body: `Complete documentation for each prototype. Architecture. Data requirements. Integration points. Scaling considerations.

Everything your technical team needs to understand what we built, how it works, and how to extend it.`,
  },
  {
    title: 'Business Case Analysis',
    body: `For each prototype: estimated implementation cost, realistic timeline, expected business impact.

Real numbers. Not consultant math. Figures you can take to your board or investment committee.`,
  },
  {
    title: 'Implementation Roadmap',
    body: `What to build first. What depends on what. What resources you'll need.

A clear path from prototype to production—not a vague "next steps" slide.`,
  },
  {
    title: '30-Day Support',
    body: `Questions come up after the day ends. We provide 30 days of follow-up access.

Ask questions. Clarify documentation. Get help socializing results internally. We don't disappear.`,
  },
];

const audiences = [
  {
    title: 'Private Equity',
    body: `Operating partners and portfolio company leaders who need to validate AI opportunities fast.

See what's actually achievable at a portco before committing to a six-month transformation. Build proof that accelerates the value creation plan. Test solutions that might scale across the portfolio.

Works for: Due diligence validation. 100-day planning. Cross-portfolio solution development.`,
  },
  {
    title: 'Executive Teams',
    body: `C-suite leaders who've been pitched AI for years but haven't seen it work for their specific business.

Get proof that justifies investment. Build internal confidence. Create demonstrations that move skeptical boards and cautious leadership teams.

Works for: Strategic planning. Budget justification. Board presentations.`,
  },
  {
    title: 'Operations Leaders',
    body: `VPs and directors who know exactly where the problems are but can't get traction on AI initiatives.

Build prototypes that prove the case. Create momentum that breaks through organizational inertia. Show, don't tell.

Works for: Process automation validation. Pilot acceleration. Building internal champions.`,
  },
];

const preparation = [
  {
    title: 'Step 1: Prioritization Call (Week -2)',
    body: `60-minute call to review your AI opportunities. We help prioritize based on business impact, technical feasibility, and what we can realistically prototype in a day. We select 3-5 use cases to focus on.`,
  },
  {
    title: 'Step 2: Data & Access Prep (Week -2 to -1)',
    body: `We send a detailed checklist. Your team prepares sample data and test credentials. This is what lets us build with your actual context instead of generic demos.`,
  },
  {
    title: 'Step 3: Team Alignment (Week -1)',
    body: `We recommend who should attend. Typically business owners for each use case plus technical people who'll own solutions going forward. Everyone arrives knowing what we're building and why.`,
  },
  {
    title: 'Step 4: Pre-Build Brief (Day -3)',
    body: `We send detailed specifications for each use case. What we're building. What questions we'll answer. What success looks like. No surprises on the day.`,
  },
];

const faq = [
  {
    q: 'What does The Forge cost?',
    a: `The Forge is a significant investment—it reflects the intensity of the experience and the caliber of talent involved. We're happy to discuss pricing directly once we understand your situation and confirm fit.

Contact us to start that conversation.`,
  },
  {
    q: "What if we're not ready?",
    a: `We'll tell you. During our initial conversation, if we don't think you're positioned to get maximum value, we'll say so.

We might recommend prep work first. Or suggest a different starting point. We'd rather turn away business than deliver a disappointing experience.`,
  },
  {
    q: 'Can we do it remotely?',
    a: `The Forge works best in person. The energy, the real-time collaboration, the ability to iterate on the fly—it's better when everyone's in the same room.

For teams with genuine constraints, we can discuss alternatives. But know that the experience is different.`,
  },
  {
    q: 'What happens after?',
    a: `You own everything we build. Code, documentation, all of it.

Some clients take the prototypes and run internally. Some engage us for full implementation. Some do a mix. We'll give you honest guidance on the best path forward based on what we built and your team's capabilities.`,
  },
  {
    q: 'What industries do you work with?',
    a: `Deep experience in PE portfolio companies, financial services, insurance, healthcare, and home services. But The Forge works for any organization with clear operational challenges where AI might help.

If you're not sure, let's talk. We'll tell you honestly whether we can help.`,
  },
];

export default function TheForgePage() {
  return (
    <div className="bg-gradient-to-b from-[#f2f7fb] via-white to-white text-slate-900">
      {/* Hero */}
      <section className="relative overflow-hidden pb-20 pt-28 sm:pt-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(2,80,130,0.09),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(255,107,53,0.06),transparent_28%),radial-gradient(circle_at_50%_80%,rgba(2,80,130,0.04),transparent_32%)]" />
        <Container size="2xl" className="relative">
          <AnimatedSection className="grid gap-10 lg:grid-cols-[1.2fr,0.9fr] lg:items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 rounded-full bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#025082] shadow-sm ring-1 ring-white/60 backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-[#FF6B35] shadow-[0_0_0_6px_rgba(255,107,53,0.15)]" />
                Premium Experience
              </div>
              <div className="space-y-4">
                <h1 className="font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">The Forge</h1>
                <p className="text-2xl text-slate-700 sm:text-3xl">One day. Working prototypes. Guaranteed.</p>
              </div>
              <p className="max-w-3xl text-lg leading-relaxed text-slate-600">
                You've sat through enough AI demos. You've seen enough vendor pitches. Maybe you've even funded a "proof of concept" that's been running for six months with nothing to show.
                <br />
                <br />
                The Forge is different. In one intensive day, our entire build team—senior data scientists, AI engineers, full-stack developers—creates working prototypes for your specific use cases.
                Not mockups. Not slide decks. Functional AI systems built on your actual requirements.
                <br />
                <br />
                If you walk away without seeing clear value, you don't pay. That's the deal.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <Button asChild size="lg" variant="primary">
                  <Link href="/contact?service=forge">Request a Session</Link>
                </Button>
                <Link
                  href="#the-day"
                  className="text-sm font-semibold text-[#025082] underline-offset-4 hover:underline"
                >
                  See how it works ↓
                </Link>
              </div>
            </div>
            <Card
              variant="feature"
              padding="lg"
              className="relative overflow-hidden border border-white/70 bg-white/80 shadow-[0_25px_60px_-35px_rgba(2,80,130,0.5)] backdrop-blur"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(2,80,130,0.06),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(255,107,53,0.05),transparent_36%)]" />
              <div className="relative space-y-6">
                <div className="inline-flex items-center rounded-full bg-slate-900 text-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em]">
                  Guaranteed Value
                </div>
                <h3 className="text-2xl font-semibold text-slate-900">We remove the risk.</h3>
                <p className="text-slate-700">
                  If you go through The Forge and don't see clear value—if the prototypes don't demonstrate real potential for your business—you don't pay.
                </p>
                <p className="text-sm text-slate-600">
                  We've never had to honor this guarantee. Not because we're lucky, but because we're selective about who we work with and relentless about preparation.
                </p>
              </div>
            </Card>
          </AnimatedSection>
        </Container>
      </section>

      {/* Why This Exists */}
      <section className="bg-white py-16 sm:py-20">
        <Container size="2xl">
          <AnimatedSection className="mb-12 space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#025082]">Why This Exists</p>
            <h2 className="font-serif text-4xl font-semibold text-slate-900">The Traditional Path Is Broken</h2>
            <p className="max-w-3xl text-lg text-slate-600">
              We built The Forge because the usual approach to AI takes too long, costs too much, and rarely ships. This is the antidote.
            </p>
          </AnimatedSection>
          <div className="grid gap-8 md:grid-cols-3">
            {whyPoints.map((item, idx) => (
              <AnimatedSection key={item.title} delay={idx * 0.05}>
                <Card padding="lg" className="h-full border border-slate-200/80 shadow-[0_20px_40px_-28px_rgba(2,80,130,0.45)]">
                  <h3 className="mb-3 text-xl font-semibold text-slate-900">{item.title}</h3>
                  <p className="whitespace-pre-line text-slate-600">{item.body}</p>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      {/* What The Forge Is */}
      <section className="bg-[#f6f8fb] py-16 sm:py-20">
        <Container size="2xl">
          <AnimatedSection className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#025082]">What The Forge Is</p>
            <h2 className="font-serif text-4xl font-semibold text-slate-900">10 Hours That Change Everything</h2>
            <p className="max-w-4xl text-lg leading-relaxed text-slate-600">
              The Forge is our intensive AI prototyping experience. You bring your most important challenges. We bring our entire build team. In one day, we create working prototypes that demonstrate exactly
              what's possible.
              <br />
              <br />
              This is not a workshop. You don't leave with sticky notes and a "roadmap." You leave with functioning AI systems built to your specifications.
            </p>
          </AnimatedSection>
        </Container>
      </section>

      {/* The Day */}
      <section id="the-day" className="bg-white py-16 sm:py-20">
        <Container size="2xl">
          <AnimatedSection className="mb-12 space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#025082]">The Day</p>
            <h2 className="font-serif text-4xl font-semibold text-slate-900">How the day runs</h2>
            <p className="max-w-3xl text-lg text-slate-600">A tight schedule, zero wasted motion. You see progress in hours, not months.</p>
          </AnimatedSection>
          <div className="relative">
            <div className="absolute left-4 top-2 bottom-2 hidden w-px bg-gradient-to-b from-[#025082] via-[#025082]/40 to-transparent md:block" />
            <div className="space-y-10">
              {timeline.map((step, idx) => (
                <AnimatedSection key={step.time} delay={idx * 0.05} className="relative pl-0 md:pl-12">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 hidden h-4 w-4 rounded-full bg-white ring-4 ring-[#025082] ring-offset-2 ring-offset-white md:block" />
                    <Card
                      padding="lg"
                      className="flex-1 border border-slate-200/70 bg-white shadow-[0_18px_44px_-28px_rgba(2,80,130,0.45)]"
                    >
                      <div className="text-sm font-semibold uppercase tracking-[0.18em] text-[#025082]">{step.time}</div>
                      <p className="mt-3 whitespace-pre-line text-slate-700">{step.copy}</p>
                    </Card>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Deliverables */}
      <section className="bg-[#f6f8fb] py-16 sm:py-20">
        <Container size="2xl">
          <AnimatedSection className="mb-12 space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#025082]">What You Get</p>
            <h2 className="font-serif text-4xl font-semibold text-slate-900">Deliverables</h2>
            <p className="max-w-3xl text-lg text-slate-600">Everything you need to decide, to demo, and to move to production.</p>
          </AnimatedSection>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {deliverables.map((item, idx) => (
              <AnimatedSection key={item.title} delay={idx * 0.04}>
                <Card padding="lg" className="h-full border border-slate-200/80 shadow-[0_20px_44px_-32px_rgba(2,80,130,0.5)]">
                  <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-3 whitespace-pre-line text-slate-600">{item.body}</p>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      {/* Guarantee */}
      <section className="bg-white py-16 sm:py-20">
        <Container size="2xl">
          <AnimatedSection>
            <Card
              padding="lg"
              className="relative overflow-hidden border border-[#025082]/15 bg-white shadow-[0_26px_60px_-35px_rgba(2,80,130,0.5)]"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(2,80,130,0.07),transparent_45%),radial-gradient(circle_at_80%_0%,rgba(255,107,53,0.08),transparent_40%)]" />
              <div className="relative space-y-4">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#025082]">The Guarantee</p>
                <h2 className="font-serif text-3xl font-semibold text-slate-900">We stake our fee on the outcome.</h2>
                <p className="max-w-4xl whitespace-pre-line text-lg leading-relaxed text-slate-700">
                  Here's the deal: if you go through The Forge and don't see clear value—if the prototypes don't demonstrate real potential for your business—you don't pay.

We've never had to honor this guarantee. Not because we're lucky, but because we're selective about who we work with and relentless about preparation.

But the guarantee is real. We believe in what we do enough to stake our fee on it.
                </p>
              </div>
            </Card>
          </AnimatedSection>
        </Container>
      </section>

      {/* Who It's For */}
      <section className="bg-[#f6f8fb] py-16 sm:py-20">
        <Container size="2xl">
          <AnimatedSection className="mb-12 space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#025082]">Who It's For</p>
            <h2 className="font-serif text-4xl font-semibold text-slate-900">The Forge is for</h2>
          </AnimatedSection>
          <div className="grid gap-8 md:grid-cols-3">
            {audiences.map((item, idx) => (
              <AnimatedSection key={item.title} delay={idx * 0.06}>
                <Card padding="lg" className="h-full border border-slate-200/80 shadow-[0_22px_50px_-32px_rgba(2,80,130,0.45)]">
                  <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-3 whitespace-pre-line text-slate-600">{item.body}</p>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      {/* Difference */}
      <section className="bg-white py-16 sm:py-20">
        <Container size="2xl">
          <AnimatedSection className="mb-10 space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#025082]">The Difference</p>
            <h2 className="font-serif text-4xl font-semibold text-slate-900">Traditional vs. The Forge</h2>
          </AnimatedSection>
          <div className="grid gap-8 md:grid-cols-2">
            <Card padding="lg" className="border border-slate-200/80">
              <h3 className="text-lg font-semibold text-slate-900">Traditional Approach</h3>
              <ul className="mt-4 space-y-3 text-slate-600">
                {[
                  '4-8 week "discovery" phase',
                  'Endless stakeholder interviews',
                  'Strategy deck with recommendations',
                  'Separate RFP process for implementation',
                  '6-12 months before seeing results',
                  '$300K-$500K+ before anything works',
                  'No accountability for outcomes',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-slate-300" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
            <Card padding="lg" className="border border-[#025082]/20 shadow-[0_20px_50px_-28px_rgba(2,80,130,0.45)]">
              <h3 className="text-lg font-semibold text-slate-900">The Forge</h3>
              <ul className="mt-4 space-y-3 text-slate-600">
                {[
                  'Two weeks of focused preparation',
                  'Your priorities, our execution',
                  'Working prototypes, not presentations',
                  'Clear path to production included',
                  'Results you can demo the next day',
                  'Single investment, complete experience',
                  "Money back if you don't see value",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-[#025082]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </Container>
      </section>

      {/* Preparation */}
      <section className="bg-[#f6f8fb] py-16 sm:py-20">
        <Container size="2xl">
          <AnimatedSection className="mb-12 space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#025082]">How We Prepare</p>
            <h2 className="font-serif text-4xl font-semibold text-slate-900">Before The Day</h2>
            <p className="max-w-3xl text-lg text-slate-600">
              The Forge works because we don&apos;t wing it. In the two weeks before your session, we do the work that makes the day productive.
            </p>
          </AnimatedSection>
          <div className="grid gap-6 md:grid-cols-2">
            {preparation.map((item, idx) => (
              <AnimatedSection key={item.title} delay={idx * 0.05}>
                <Card padding="lg" className="h-full border border-slate-200/70 shadow-[0_18px_44px_-28px_rgba(2,80,130,0.4)]">
                  <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-3 whitespace-pre-line text-slate-600">{item.body}</p>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      {/* Availability */}
      <section className="bg-white py-16 sm:py-20">
        <Container size="2xl">
          <AnimatedSection>
            <Card padding="lg" className="border border-slate-200/80 shadow-[0_18px_44px_-28px_rgba(2,80,130,0.45)]">
              <div className="space-y-4">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#025082]">Availability</p>
                <h2 className="font-serif text-3xl font-semibold text-slate-900">Limited Sessions</h2>
                <p className="text-lg text-slate-700">
                  We run a maximum of four Forge sessions per month. This ensures our entire senior team is available and fully prepared for each engagement.
                </p>
                <p className="text-slate-600">
                  Sessions typically book 4-6 weeks out. If you have specific timing requirements, reach out early.
                </p>
              </div>
            </Card>
          </AnimatedSection>
        </Container>
      </section>

      {/* FAQ */}
      <section className="bg-[#f6f8fb] py-16 sm:py-20">
        <Container size="2xl">
          <AnimatedSection className="mb-10 space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#025082]">FAQ</p>
            <h2 className="font-serif text-4xl font-semibold text-slate-900">Questions we get a lot</h2>
          </AnimatedSection>
          <div className="space-y-4">
            {faq.map((item, idx) => (
              <AnimatedSection key={item.q} delay={idx * 0.05}>
                <Card padding="md" className="border border-slate-200/70">
                  <details open className="space-y-3">
                    <summary className="cursor-pointer text-lg font-semibold text-slate-900">{item.q}</summary>
                    <p className="whitespace-pre-line text-slate-600">{item.a}</p>
                  </details>
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
            <h2 className="font-serif text-3xl font-semibold text-slate-900 sm:text-4xl">Ready?</h2>
            <p className="mt-4 text-lg text-slate-700">
              Limited availability. Guaranteed results. Request a session to discuss whether The Forge is right for your situation.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button asChild size="lg" variant="primary">
                <Link href="/contact?service=forge">Request a Session</Link>
              </Button>
              <p className="w-full text-sm text-slate-600">We respond within 24 hours.</p>
            </div>
          </AnimatedSection>
        </Container>
      </section>
    </div>
  );
}
