'use client';

import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

const automationCategories = [
  {
    title: 'Document Processing',
    body: `If someone is reading documents and extracting information—invoices, applications, contracts, claims, correspondence—we can automate it.

AI that reads documents the way humans do, but faster and more consistently. Extraction accuracy above 99%. Direct integration with your systems.

No more data entry. No more missed information. No more processing backlogs.`,
  },
  {
    title: 'Data Movement',
    body: `Information that lives in one system but is needed in another. The manual exports and imports. The spreadsheet gymnastics. The "someone has to pull this report every Monday" tasks.

Automated pipelines that move data where it needs to go, validate it on the way, and alert when something's wrong.

Real-time instead of weekly. Reliable instead of error-prone.`,
  },
  {
    title: 'Decision Workflows',
    body: `Approvals that follow clear rules. Routing decisions based on defined criteria. Triage that follows predictable patterns.

AI that handles routine decisions automatically and escalates intelligently when judgment is needed.

Faster throughput. Consistent application of rules. Complete audit trails.`,
  },
  {
    title: 'Communication',
    body: `Customer inquiries that follow patterns. Status updates that someone manually sends. Follow-ups that fall through cracks.

Intelligent automation that handles routine communication and ensures nothing slips.

Faster response times. Nothing forgotten. Humans focused on conversations that matter.`,
  },
  {
    title: 'Reporting',
    body: `Reports assembled from multiple sources. Analyses that require pulling and combining data. Dashboards that someone has to update.

Automated generation and distribution. Natural language summaries. Anomaly detection that highlights what matters.

Real-time visibility instead of stale snapshots.`,
  },
  {
    title: 'Research & Lookup',
    body: `Information gathered from multiple places. Verification against external sources. Research that follows repeatable patterns.

AI that gathers, verifies, and synthesizes so your team can focus on judgment.

Hours compressed to minutes.`,
  },
];

const phases = [
  {
    title: 'Phase 1: Discovery (Weeks 1-2)',
    body: `We map how work actually flows through your organization. Not from org charts—from observation.

We find every point where humans are doing work that AI could handle. We quantify the time, the cost, the error rates.

Then we prioritize ruthlessly. Not everything should be automated. We focus where the impact is highest and the implementation is cleanest.

You get: Process inventory, opportunity sizing, prioritized roadmap`,
  },
  {
    title: 'Phase 2: Design (Weeks 3-4)',
    body: `For each priority process, we design the solution. The AI components. The integrations. The exception handling. The human handoff points.

We design for your team's capabilities. Solutions you can maintain. Technology your IT can support.

You get: Solution architecture, integration specs, change management plan`,
  },
  {
    title: 'Phase 3: Build (Weeks 5-10)',
    body: `We build it. Our team, in our environment initially, then migrating to yours.

We work in sprints with frequent demos. You see progress and can redirect before we've gone too far.

Testing is thorough. We validate against historical data. We test edge cases. We don't deploy until it's ready.

You get: Working automation, tested and validated`,
  },
  {
    title: 'Phase 4: Deploy & Optimize (Weeks 10-12)',
    body: `We deploy with careful monitoring. Start with limited volume, validate performance, scale up.

We train your team. Document everything. Make sure you can operate without us.

And we stay for 30 days post-deployment—monitoring, tuning, addressing issues.

You get: Production system, trained team, 30-day optimization support`,
  },
];

const results = [
  {
    headline: '73% reduction in invoice processing time',
    body: 'Mid-market manufacturer. What took 15 minutes per invoice now takes 4 minutes—and the 4 minutes is mostly exception handling.',
  },
  {
    headline: '$1.2M annual savings',
    body: 'Regional insurance MGA. Automated submission intake freed capacity for 40% more volume without adding staff.',
  },
  {
    headline: '6 FTEs of capacity freed',
    body: 'Healthcare services company. Automated scheduling and reminders let clinical coordinators focus on patient care.',
  },
  {
    headline: '94% accuracy on contract extraction',
    body: 'Professional services firm. Automated data extraction now exceeds the accuracy of the manual process it replaced.',
  },
];

const faq = [
  {
    q: 'What if our processes are too messy to automate?',
    a: `That's usually not true—it just feels that way from inside.

What looks like chaos usually has patterns. The exceptions that seem random usually cluster into categories. And AI is better at handling variation than rigid automation tools.

We've automated processes that clients swore were "too complex." The messiness often means there's more value in automation, not less.`,
  },
  {
    q: 'How do you handle exceptions?',
    a: `Every automation has exceptions—cases that genuinely need human judgment. We don't pretend otherwise.

We design explicit exception handling. Cases the AI isn't confident about get routed to humans with full context. The AI learns from how those exceptions are resolved.

Over time, the exception rate goes down. But it never hits zero, and we don't pretend it will.`,
  },
  {
    q: 'What about our existing systems?',
    a: `We integrate with what you have. We're not asking you to rip out and replace.

Modern APIs make integration cleaner than it used to be. Legacy systems are harder but rarely impossible. We'll be honest during assessment about what's realistic.`,
  },
  {
    q: 'How long until we see ROI?',
    a: `Depends on the process. Some automations pay back in weeks. More complex implementations might take a few months.

We prioritize early wins—automations that deliver value fast while we build toward larger transformation. You're not waiting a year to see results.`,
  },
];

export default function ProcessAutomationPage() {
  return (
    <div className="bg-gradient-to-b from-[#eef4f9] via-white to-white text-slate-900">
      {/* Hero */}
      <section className="relative overflow-hidden pb-20 pt-28 sm:pt-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_25%,rgba(2,80,130,0.08),transparent_38%),radial-gradient(circle_at_80%_15%,rgba(255,107,53,0.08),transparent_32%),radial-gradient(circle_at_60%_80%,rgba(2,80,130,0.05),transparent_35%)]" />
        <Container size="2xl" className="relative">
          <AnimatedSection className="grid gap-10 lg:grid-cols-[1.2fr,0.9fr] lg:items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 rounded-full bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#025082] shadow-sm ring-1 ring-white/60 backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-[#FF6B35] shadow-[0_0_0_6px_rgba(255,107,53,0.15)]" />
                Implementation Services
              </div>
              <div className="space-y-4">
                <h1 className="font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">Process Automation</h1>
                <p className="text-2xl text-slate-700 sm:text-3xl">Your team has better things to do.</p>
              </div>
              <p className="max-w-3xl text-lg leading-relaxed text-slate-600">
                Somewhere in your organization, smart people are doing repetitive work that machines should handle. Data entry. Document review. Report assembly. Approval routing.
                <br />
                <br />
                We find those processes. Then we eliminate them.
                <br />
                <br />
                Not with generic RPA tools that break when anything changes. With AI-powered automation that actually understands what it's doing.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <Button asChild size="lg" variant="primary">
                  <Link href="/contact?service=automation">Start an Assessment</Link>
                </Button>
                <Link href="#what-we-automate" className="text-sm font-semibold text-[#025082] underline-offset-4 hover:underline">
                  See what we automate ↓
                </Link>
              </div>
            </div>
            <Card
              variant="feature"
              padding="lg"
              className="relative overflow-hidden border border-white/70 bg-white/85 shadow-[0_24px_60px_-35px_rgba(2,80,130,0.55)] backdrop-blur"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(2,80,130,0.07),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(255,107,53,0.07),transparent_35%)]" />
              <div className="relative space-y-4">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#025082]">The problem</p>
                <h3 className="text-2xl font-semibold text-slate-900">Manual work is expensive in ways you're not counting.</h3>
                <p className="text-slate-700">
                  The obvious cost is labor. But the real cost is what those people aren't doing instead—the strategic work, the customer relationships, the improvements that never happen. Manual processes
                  slow the business, create errors, and burn out good people.
                </p>
              </div>
            </Card>
          </AnimatedSection>
        </Container>
      </section>

      {/* What we automate */}
      <section id="what-we-automate" className="bg-white py-16 sm:py-20">
        <Container size="2xl">
          <AnimatedSection className="mb-12 space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#025082]">What We Automate</p>
            <h2 className="font-serif text-4xl font-semibold text-slate-900">The breadth of automation</h2>
            <p className="max-w-3xl text-lg text-slate-600">If humans repeat it, we can probably automate it. Here are the patterns we tackle most.</p>
          </AnimatedSection>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {automationCategories.map((item, idx) => (
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

      {/* Process */}
      <section className="bg-[#f6f8fb] py-16 sm:py-20">
        <Container size="2xl">
          <AnimatedSection className="mb-12 space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#025082]">How We Work</p>
            <h2 className="font-serif text-4xl font-semibold text-slate-900">Our process</h2>
            <p className="max-w-3xl text-lg text-slate-600">Clear phases. Transparent timelines. No black box.</p>
          </AnimatedSection>
          <div className="grid gap-6 md:grid-cols-2">
            {phases.map((phase, idx) => (
              <AnimatedSection key={phase.title} delay={idx * 0.05}>
                <Card padding="lg" className="h-full border border-slate-200/80 bg-white shadow-[0_22px_50px_-32px_rgba(2,80,130,0.45)]">
                  <div className="text-sm font-semibold uppercase tracking-[0.18em] text-[#025082]">{phase.title}</div>
                  <p className="mt-3 whitespace-pre-line text-slate-700">{phase.body}</p>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      {/* Results */}
      <section className="bg-white py-16 sm:py-20">
        <Container size="2xl">
          <AnimatedSection className="mb-12 space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#025082]">Results</p>
            <h2 className="font-serif text-4xl font-semibold text-slate-900">What this looks like</h2>
            <p className="max-w-3xl text-lg text-slate-600">Outcomes we&apos;ve delivered. Metrics that matter.</p>
          </AnimatedSection>
          <div className="grid gap-6 md:grid-cols-2">
            {results.map((item, idx) => (
              <AnimatedSection key={item.headline} delay={idx * 0.05}>
                <Card padding="lg" className="h-full border border-slate-200/80 bg-[#f6f8fb] shadow-[0_22px_50px_-32px_rgba(2,80,130,0.45)]">
                  <h3 className="text-xl font-semibold text-slate-900">{item.headline}</h3>
                  <p className="mt-3 text-slate-700">{item.body}</p>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="bg-[#f6f8fb] py-16 sm:py-20">
        <Container size="2xl">
          <AnimatedSection className="mb-10 space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#025082]">FAQ</p>
            <h2 className="font-serif text-4xl font-semibold text-slate-900">Common questions</h2>
          </AnimatedSection>
          <div className="space-y-4">
            {faq.map((item, idx) => (
              <AnimatedSection key={item.q} delay={idx * 0.05}>
                <Card padding="md" className="border border-slate-200/80 bg-white">
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
            <h2 className="font-serif text-3xl font-semibold text-slate-900 sm:text-4xl">Find out what's possible</h2>
            <p className="mt-4 text-lg text-slate-700">
              Start with an assessment. We'll map your processes, identify opportunities, and show you what automation could deliver.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button asChild size="lg" variant="primary">
                <Link href="/contact?service=automation">Start an Assessment</Link>
              </Button>
              <p className="w-full text-sm text-slate-600">No commitment. No hard sell. We respond within 24 hours.</p>
            </div>
          </AnimatedSection>
        </Container>
      </section>
    </div>
  );
}
