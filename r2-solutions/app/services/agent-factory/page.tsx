'use client';

import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

const steps = [
  {
    title: 'Select',
    body: `Browse our agents. Identify what matches your challenges. We help you assess fit and understand what customization looks like.`,
  },
  {
    title: 'Customize',
    body: `We configure the agent for your workflows, data sources, and systems. This is configuration and adaptation, not ground-up development. That's why it's fast.`,
  },
  {
    title: 'Deploy',
    body: `We deploy in your environment with comprehensive testing. Your team gets trained. Integrations go live. You're operational.`,
  },
  {
    title: 'Optimize',
    body: `AI improves over time. We monitor performance, refine based on your data, and help you expand scope as you see results.`,
  },
];

type Agent = {
  name: string;
  description: string;
  metric: string;
  deployment: string;
};

const agentsByCategory: { title: string; items: Agent[] }[] = [
  {
    title: 'Revenue & Growth',
    items: [
      {
        name: 'Revenue Intelligence Agent',
        description:
          "Finds money you're leaving on the table. Pricing inconsistencies, cross-sell opportunities, revenue leakage—automatically identified and prioritized.",
        metric: 'Typical result: 15-25% improvement in addressed revenue',
        deployment: 'Deployment: 2-3 weeks',
      },
      {
        name: 'Cross-Selling Agent',
        description: 'Identifies which customers should buy what else, and when. Based on behavior patterns and peer analysis, not generic rules.',
        metric: 'Typical result: 20-40% increase in cross-sell conversion',
        deployment: 'Deployment: 2-3 weeks',
      },
      {
        name: 'Marketing Spend Optimizer',
        description: 'Allocates budget where it actually works. Multi-channel attribution, real-time performance analysis, automated optimization.',
        metric: 'Typical result: 15-30% improvement in marketing ROI',
        deployment: 'Deployment: 3-4 weeks',
      },
      {
        name: 'Lead Scoring Agent',
        description: 'Tells sales which leads to call first. Predictive scoring based on your actual conversion patterns, updated in real-time.',
        metric: 'Typical result: 30-40% improvement in sales productivity',
        deployment: 'Deployment: 2 weeks',
      },
      {
        name: 'Churn Predictor',
        description: 'Identifies at-risk customers while there\'s still time to act. Behavioral signals that catch problems before they become cancellations.',
        metric: 'Typical result: 15-25% reduction in churn',
        deployment: 'Deployment: 2-3 weeks',
      },
    ],
  },
  {
    title: 'Operations & Efficiency',
    items: [
      {
        name: 'Workflow Automation Agent',
        description: 'Turns your repetitive processes into automated workflows. Handles routine cases automatically, routes exceptions intelligently.',
        metric: 'Typical result: 60-80% reduction in manual tasks',
        deployment: 'Deployment: 2-4 weeks',
      },
      {
        name: 'Document Analyzer Agent',
        description:
          'Reads and understands documents the way humans do, but faster. Contracts, applications, policies—extract what matters, answer questions, compare across documents.',
        metric: 'Typical result: 70-90% reduction in document review time',
        deployment: 'Deployment: 2-3 weeks',
      },
      {
        name: 'Scheduling Optimization Agent',
        description:
          'Creates better schedules than humans can. Balances geography, skills, customer preferences, and capacity—optimized across all constraints.',
        metric: 'Typical result: 15-25% more capacity from existing resources',
        deployment: 'Deployment: 3-4 weeks',
      },
      {
        name: 'Quality Monitoring Agent',
        description: 'Catches problems before they reach customers. Real-time analysis of quality signals with predictive alerting.',
        metric: 'Typical result: 50% reduction in defect escape rate',
        deployment: 'Deployment: 3-4 weeks',
      },
    ],
  },
  {
    title: 'Industry-Specific',
    items: [
      {
        name: 'Underwriting Assistant (Insurance)',
        description: 'Gets underwriters out of data entry and into risk assessment. Automated submission processing, risk analysis, pricing recommendations.',
        metric: 'Typical result: 40-60% reduction in underwriting time',
        deployment: 'Deployment: 4-6 weeks',
      },
      {
        name: 'Claims Triage Agent (Insurance)',
        description:
          'Routes claims intelligently from day one. Complexity scoring, fraud indicators, fast-track identification—all at intake.',
        metric: 'Typical result: 60% faster processing for simple claims',
        deployment: 'Deployment: 3-4 weeks',
      },
      {
        name: 'Patient Scheduling Agent (Healthcare)',
        description: 'Reduces no-shows and maximizes provider utilization. Predictive scheduling, intelligent reminders, automated backfill.',
        metric: 'Typical result: 30-50% reduction in no-show rate',
        deployment: 'Deployment: 3-4 weeks',
      },
      {
        name: 'Compliance Monitoring Agent (Financial Services)',
        description: 'Watches everything, flags what matters. Continuous monitoring beats sampling. Intelligent alerting reduces false positives.',
        metric: 'Typical result: 100% coverage, 60% fewer false positives',
        deployment: 'Deployment: 4-6 weeks',
      },
    ],
  },
];

export default function AgentFactoryServicePage() {
  return (
    <div className="bg-gradient-to-b from-[#e6f1f9] via-white to-white text-slate-900">
      {/* Hero */}
      <section className="relative overflow-hidden pb-20 pt-28 sm:pt-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(2,80,130,0.1),transparent_40%),radial-gradient(circle_at_80%_10%,rgba(255,107,53,0.08),transparent_35%),radial-gradient(circle_at_60%_80%,rgba(2,80,130,0.05),transparent_35%)]" />
        <Container size="2xl" className="relative">
          <AnimatedSection className="grid gap-10 lg:grid-cols-[1.2fr,0.8fr] lg:items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 rounded-full bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#025082] shadow-sm ring-1 ring-white/60 backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-[#025082] shadow-[0_0_0_6px_rgba(2,80,130,0.15)]" />
                Pre-Built Solutions
              </div>
              <div className="space-y-4">
                <h1 className="font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">Agent Factory</h1>
                <p className="text-2xl text-slate-700 sm:text-3xl">Deploy in days. Not months.</p>
              </div>
              <p className="max-w-3xl text-lg leading-relaxed text-slate-600">
                Not everything needs to be built from scratch. Our Agent Factory contains battle-tested AI solutions for common business challenges—ready to deploy and customize for your specific workflows.
                <br />
                <br />
                Each agent is built on architectures we've proven across multiple deployments. We're not experimenting on your timeline.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <Button asChild size="lg" variant="primary">
                  <Link href="#agents">Explore Agents</Link>
                </Button>
                <Button asChild size="lg" variant="secondary">
                  <Link href="/contact?service=agent-factory">Request a Demo</Link>
                </Button>
              </div>
            </div>
            <Card
              variant="feature"
              padding="lg"
              className="relative overflow-hidden border border-white/70 bg-white/85 shadow-[0_24px_60px_-35px_rgba(2,80,130,0.55)] backdrop-blur"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(2,80,130,0.08),transparent_40%),radial-gradient(circle_at_80%_10%,rgba(255,107,53,0.08),transparent_35%)]" />
              <div className="relative space-y-4">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#025082]">Why this matters</p>
                <h3 className="text-2xl font-semibold text-slate-900">Accelerators, not experiments.</h3>
                <p className="text-slate-700">
                  Each agent encodes what we've learned across dozens of deployments—architecture choices, edge cases, integration patterns. You get the benefit of that experience without paying for us to learn
                  it again.
                </p>
                <p className="text-sm text-slate-600">
                  Custom work when you need it. Proven solutions when you don't. Weeks, not months.
                </p>
              </div>
            </Card>
          </AnimatedSection>
        </Container>
      </section>

      {/* How it works */}
      <section className="bg-white py-16 sm:py-20">
        <Container size="2xl">
          <AnimatedSection className="mb-12 space-y-3 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#025082]">How It Works</p>
            <h2 className="font-serif text-4xl font-semibold text-slate-900">From selection to production in weeks</h2>
            <p className="mx-auto max-w-3xl text-lg text-slate-600">
              Select, customize, deploy, optimize. Because speed matters more than theory.
            </p>
          </AnimatedSection>
          <div className="grid gap-6 md:grid-cols-4">
            {steps.map((step, idx) => (
              <AnimatedSection key={step.title} delay={idx * 0.05}>
                <Card padding="lg" className="h-full border border-slate-200/80 text-left shadow-[0_20px_44px_-28px_rgba(2,80,130,0.45)]">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#025082]/10 text-sm font-semibold text-[#025082]">
                    {String(idx + 1).padStart(2, '0')}
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">{step.title}</h3>
                  <p className="mt-3 text-slate-600">{step.body}</p>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      {/* Agents */}
      <section id="agents" className="bg-[#f6f8fb] py-16 sm:py-20">
        <Container size="2xl">
          <AnimatedSection className="mb-10 space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#025082]">The Agents</p>
            <h2 className="font-serif text-4xl font-semibold text-slate-900">Pre-built, proven, ready to deploy</h2>
            <p className="max-w-3xl text-lg text-slate-600">
              Present them in categories. Each card shows the promise, the metric, and the time to value.
            </p>
          </AnimatedSection>
          <div className="space-y-12">
            {agentsByCategory.map((category, catIdx) => (
              <AnimatedSection key={category.title} delay={catIdx * 0.08} className="space-y-6">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-2xl font-semibold text-slate-900">{category.title}</h3>
                  <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#025082]">Deployment windows</span>
                </div>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {category.items.map((agent, idx) => (
                    <Link
                      key={agent.name}
                      href={`/contact?service=agent-factory&agent=${encodeURIComponent(agent.name)}`}
                      className="block h-full"
                    >
                      <Card
                        padding="lg"
                        className="flex h-full flex-col justify-between border border-slate-200/80 bg-white shadow-[0_20px_44px_-28px_rgba(2,80,130,0.45)] transition-transform duration-200 hover:-translate-y-1"
                      >
                        <div className="space-y-3">
                          <div className="flex items-center justify-between gap-3">
                            <h4 className="text-lg font-semibold text-slate-900">{agent.name}</h4>
                            <span className="rounded-full bg-[#025082]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#025082]">
                              {agent.deployment.replace('Deployment: ', '')}
                            </span>
                          </div>
                          <p className="text-sm text-slate-600">{agent.description}</p>
                        </div>
                        <div className="mt-4 border-t border-slate-200 pt-4 text-sm font-semibold text-[#025082]">{agent.metric}</div>
                      </Card>
                    </Link>
                  ))}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      {/* Why pre-built */}
      <section className="bg-white py-16 sm:py-20">
        <Container size="2xl">
          <AnimatedSection className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#025082]">Why Start Here</p>
              <h2 className="font-serif text-4xl font-semibold text-slate-900">Why pre-built beats ground-up</h2>
              <p className="text-lg text-slate-700">
                Building AI from scratch is expensive and slow. It makes sense for truly unique problems. For common challenges—revenue optimization, document processing, workflow automation—it's wasted
                effort.
              </p>
              <p className="text-slate-600">
                Our agents encode what we've learned across dozens of deployments. Architecture decisions that work. Edge cases that trip people up. Integration patterns that scale.
              </p>
              <p className="text-slate-600">
                You get the benefit of that experience without paying for us to learn it again. Custom work when you need it. Proven solutions when you don't.
              </p>
            </div>
            <Card padding="lg" className="relative overflow-hidden border border-[#025082]/15 bg-[#f6f8fb] shadow-[0_22px_50px_-32px_rgba(2,80,130,0.45)]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(2,80,130,0.08),transparent_45%),radial-gradient(circle_at_80%_0%,rgba(255,107,53,0.08),transparent_38%)]" />
              <div className="relative space-y-3">
                <h3 className="text-xl font-semibold text-slate-900">Where pre-built works best</h3>
                <ul className="space-y-2 text-slate-700">
                  {[
                    'Revenue optimization and leakage hunting',
                    'Document-heavy processes that slow teams down',
                    'Routing, triage, and scheduling decisions',
                    'Monitoring, alerting, and compliance coverage',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-[#025082]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 rounded-xl bg-white/80 px-4 py-3 text-sm font-semibold text-slate-800 shadow-inner">
                  Need something unique? We pair Agent Factory accelerators with custom build work so you get speed and specificity.
                </div>
              </div>
            </Card>
          </AnimatedSection>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="bg-[#f6f8fb] py-16 sm:py-24">
        <Container size="md">
          <AnimatedSection className="rounded-3xl border border-slate-200/80 bg-white px-8 py-12 text-center shadow-[0_24px_60px_-32px_rgba(2,80,130,0.45)]">
            <h2 className="font-serif text-3xl font-semibold text-slate-900 sm:text-4xl">See one in action</h2>
            <p className="mt-4 text-lg text-slate-700">
              Pick an agent. We'll show you how it works with a scenario relevant to your business.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button asChild size="lg" variant="primary">
                <Link href="/contact?service=agent-factory">Request a Demo</Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <Link href="#agents">Explore Agents</Link>
              </Button>
            </div>
          </AnimatedSection>
        </Container>
      </section>
    </div>
  );
}
