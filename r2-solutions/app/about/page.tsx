import Link from 'next/link';
import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

export const metadata: Metadata = {
  title: 'About R² Solutions | AI Consulting That Actually Builds',
  description:
    'R² was founded by operators and builders who were tired of watching AI strategies fail. We combine strategic thinking with hands-on implementation.',
};

const beliefs = [
  {
    title: 'AI projects fail for people reasons, not technology reasons.',
    body:
      "The tech works. It's been working. What doesn't work is the handoff between strategy and implementation, the eighteen-month timelines, the consultants who leave before anything ships. We stay until it's in production.",
  },
  {
    title: 'Speed is a feature.',
    body:
      "In private equity, you have a hold period. In business, you have competitive windows. In organizations, you have attention spans. \"We'll have results in 18 months\" is the same as \"this will never happen.\" We deliver in weeks.",
  },
  {
    title: 'Working software beats beautiful slides.',
    body:
      "Every time. No exceptions. A prototype you can touch teaches more than a deck you can read. We build things so you can see what's possible, not imagine it.",
  },
  {
    title: 'Honesty is more valuable than agreement.',
    body:
      "If AI isn't the right answer, we'll tell you. If your organization isn't ready, we'll tell you. If your timeline is unrealistic, we'll push back. We'd rather lose the work than set you up to fail.",
  },
  {
    title: 'The best consultants make themselves unnecessary.',
    body:
      "We're not trying to embed permanently. We're trying to build something that works, transfer the knowledge, and get out of the way. Our success is measured by your independence, not your dependence.",
  },
];

const teamMembers = [
  {
    name: 'Rich Rivara',
    title: 'CEO & Co-Founder',
    email: 'rich@r2solutions.ai',
    linkedin: 'https://www.linkedin.com',
    bio: '<<<PLACEHOLDER FOR RICH>>> 100-150 words on operator + PE portfolio experience, strategy consulting background, building/selling a tech company, why R², what drives you, and one human detail.',
  },
  {
    name: 'Will Godfrey',
    title: 'CTO & Co-Founder',
    email: 'will@r2solutions.ai',
    linkedin: 'https://www.linkedin.com',
    bio: '<<<PLACEHOLDER FOR WILL>>> 100-150 words on technical background (data science/ML/AI), where you\'ve built, the systems you\'re proud of, your philosophy that technology serves the business, why R², and an optional personal detail.',
  },
  {
    name: 'Tyler Preisser',
    title: 'Associate Partner & Co-Founder',
    email: 'tyler@r2solutions.ai',
    linkedin: 'https://www.linkedin.com',
    bio: '<<<PLACEHOLDER FOR TYLER>>> 100-150 words on hybrid technical + commercial path, AI systems built, Verizon sales performance, operations experience, unconventional trajectory (YouTube + farm equipment + construction -> AI), current degree at Fort Hays State, what you bring (range, hustle, bridge), and what drives you.',
  },
];

const howWeWork = [
  {
    title: 'Senior people, start to finish',
    body:
      "The people you meet in the first conversation are the people who do the work. We don't sell with partners and staff with juniors. Our whole team is senior.",
  },
  {
    title: 'Speed by default',
    body:
      "We're biased toward action. First deliverables in days, not weeks. Working solutions in weeks, not months. If something can be done faster, we'll find a way.",
  },
  {
    title: 'Radical honesty',
    body:
      "We tell you what we actually think. We push back when we disagree. We'll tell you if we're not the right fit. This isn't about being difficult-it's about getting to the right answer.",
  },
  {
    title: 'Outcomes over hours',
    body:
      "We don't bill by the hour and stretch engagements. We scope to outcomes and get there as fast as possible. Our incentive is to deliver and move on-not to maximize billable time.",
  },
];

const companyDetails = [
  { label: 'Founded', value: '2024' },
  { label: 'Structure', value: 'Delaware C-Corporation' },
  { label: 'Headquarters', value: 'Remote-first' },
];

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#012b49] via-[#01406b] to-[#025082] pb-24 pt-32 lg:pb-32 lg:pt-40">
        <div className="absolute inset-0 opacity-[0.12] bg-[radial-gradient(circle_at_20%_20%,rgba(255,107,53,0.18),transparent_36%),radial-gradient(circle_at_78%_28%,rgba(255,255,255,0.12),transparent_38%),radial-gradient(circle_at_50%_80%,rgba(2,80,130,0.25),transparent_40%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-[#012b49]/30" />
        <Container size="lg" className="relative z-10">
          <AnimatedSection>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">Our Story</p>
            <h1 className="mt-4 mb-8 font-serif text-5xl font-semibold leading-tight text-white lg:text-6xl">
              We started R² because we were tired of watching AI projects fail.
            </h1>
            <div className="space-y-4 text-lg leading-relaxed text-white/80 lg:text-xl">
              <p>
                Not fail because the technology didn&apos;t work. Fail because the consultants left before anything got
                built. Fail because the strategy was brilliant but nobody could execute it. Fail because by the time the
                "pilot" was done, everyone had moved on.
              </p>
              <p>
                We&apos;ve been on both sides. We&apos;ve been the consultants delivering recommendations. We&apos;ve
                been the operators trying to implement them. We know exactly where the gap is.
              </p>
              <p className="text-white">
                R² exists to close it.
              </p>
            </div>
          </AnimatedSection>
        </Container>
      </section>

      {/* What we believe */}
      <section className="bg-white py-24 lg:py-32">
        <Container size="xl">
          <AnimatedSection>
            <h2 className="mb-6 text-center font-serif text-4xl font-semibold text-gray-900 lg:text-5xl">
              What we believe
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:gap-14">
            {beliefs.map((belief, idx) => (
              <AnimatedSection key={belief.title} delay={idx * 0.06}>
                <div className="h-full rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
                  <h3 className="mb-3 font-serif text-2xl font-semibold text-gray-900">{belief.title}</h3>
                  <p className="text-lg leading-relaxed text-gray-600">{belief.body}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      {/* Our story narrative */}
      <section className="bg-[#f9fafb] py-24 lg:py-32">
        <Container size="md">
          <AnimatedSection>
            <h2 className="mb-6 font-serif text-4xl font-semibold text-gray-900 lg:text-5xl">How we got here</h2>
            <div className="space-y-5 text-lg leading-relaxed text-gray-700">
              <p>R² started with a frustration.</p>
              <p>
                We&apos;d seen too many AI initiatives die the same death. A consulting firm would come in, do impressive
                discovery work, build a beautiful strategy, and leave. Then nothing would happen. The strategy would sit
                in a shared drive. The proof of concept would never reach production. The organization would move on to
                the next priority.
              </p>
              <p>Billions of dollars spent on AI strategies. A fraction of that turned into working systems.</p>
              <p>
                The problem wasn&apos;t the strategies. The problem was the gap between strategy and execution, and the
                fact that traditional consulting isn&apos;t designed to close it. Strategy firms don&apos;t build.
                Implementation firms don&apos;t think strategically. And the handoff between them is where projects go
                to die.
              </p>
              <p>So we built a firm that does both.</p>
              <p>
                R² combines senior strategic thinking with hands-on implementation capability. The same team that
                identifies the opportunity builds the solution. No handoffs. No lost context. No eighteen-month timelines
                while everyone "gets up to speed."
              </p>
              <p>
                We started with private equity because that&apos;s where the pressure is highest. Portfolio companies
                can&apos;t wait around for consultants to figure things out. Value creation plans have deadlines. Hold
                periods end. If you can build for PE, you can build for anyone.
              </p>
              <p>
                Today we work with PE firms, portfolio companies, and mid-market businesses who need AI to work, not AI
                to talk about.
              </p>
            </div>
          </AnimatedSection>
        </Container>
      </section>

      {/* Why R² */}
      <section className="bg-white py-24 lg:py-32">
        <Container size="lg">
          <AnimatedSection>
            <div className="rounded-2xl border border-gray-100 bg-gradient-to-br from-white to-[#f6f8fb] p-10 shadow-sm lg:p-12">
              <h2 className="mb-4 font-serif text-4xl font-semibold text-gray-900 lg:text-5xl">Why R²</h2>
              <div className="space-y-4 text-lg leading-relaxed text-gray-700">
                <p>
                  In statistics, R² measures how well a model explains outcomes. It&apos;s the difference between
                  correlation and noise - between understanding what drives results and just guessing.
                </p>
                <p>
                  That&apos;s what we do. We help organizations increase their R²: the degree to which outcomes are
                  driven by intentional action rather than luck.
                </p>
                <p>It&apos;s also a nod to our roots. R for Rich. R for... well, we needed a name and it stuck.</p>
              </div>
            </div>
          </AnimatedSection>
        </Container>
      </section>

      {/* Team */}
      <section className="bg-[#f9fafb] py-24 lg:py-32">
        <Container size="xl">
          <AnimatedSection>
            <div className="text-center">
              <h2 className="mb-4 font-serif text-4xl font-semibold text-gray-900 lg:text-5xl">Who we are</h2>
              <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-600">
                Small team. Senior people. No bait-and-switch. When you work with R², you work with us, not a pyramid of
                junior analysts. We keep the team small so you get our full attention.
              </p>
            </div>
          </AnimatedSection>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
            {teamMembers.map((member, idx) => (
              <AnimatedSection key={member.name} delay={idx * 0.06}>
                <div className="flex h-full flex-col rounded-2xl border border-gray-100 bg-white p-6 shadow-sm lg:p-8">
                  <div className="mb-6 aspect-[4/3] w-full overflow-hidden rounded-2xl bg-gradient-to-br from-gray-100 via-white to-gray-100">
                    <div className="flex h-full items-center justify-center text-sm font-semibold uppercase tracking-[0.08em] text-gray-500">
                      Headshot coming soon
                    </div>
                  </div>
                  <h3 className="font-serif text-2xl font-semibold text-gray-900">{member.name}</h3>
                  <p className="mt-1 text-sm font-semibold uppercase tracking-[0.08em] text-[#025082]">{member.title}</p>
                  <p className="mt-4 flex-1 whitespace-pre-line text-base leading-relaxed text-gray-600">
                    {member.bio}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-4 text-sm font-semibold text-[#025082]">
                    <Link href={`mailto:${member.email}`} className="underline underline-offset-4 hover:text-[#013a5f]">
                      {member.email}
                    </Link>
                    <Link
                      href={member.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="underline underline-offset-4 hover:text-[#013a5f]"
                    >
                      LinkedIn
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      {/* How we work */}
      <section className="bg-white py-24 lg:py-32">
        <Container size="xl">
          <AnimatedSection>
            <h2 className="mb-6 text-center font-serif text-4xl font-semibold text-gray-900 lg:text-5xl">
              What to expect
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:gap-14">
            {howWeWork.map((item, idx) => (
              <AnimatedSection key={item.title} delay={idx * 0.06}>
                <div className="h-full rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
                  <h3 className="mb-3 font-serif text-2xl font-semibold text-gray-900">{item.title}</h3>
                  <p className="text-lg leading-relaxed text-gray-600">{item.body}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      {/* Company details */}
      <section className="bg-[#f9fafb] py-12">
        <Container size="sm">
          <AnimatedSection>
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-medium text-gray-600">
              {companyDetails.map((detail) => (
                <div key={detail.label} className="flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm">
                  <span className="text-[#025082]">{detail.label}:</span>
                  <span>{detail.value}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="bg-white py-28 lg:py-32">
        <Container size="md">
          <AnimatedSection>
            <div className="text-center">
              <h2 className="mb-4 font-serif text-4xl font-semibold text-gray-900 lg:text-5xl">Want to talk?</h2>
              <p className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-600">
                We&apos;re selective about what we take on, but we&apos;re always happy to have a conversation. Tell us
                what you&apos;re working on. We&apos;ll be honest about whether we can help.
              </p>
              <div className="mt-8 flex justify-center">
                <Button asChild size="lg" variant="primary">
                  <Link href="/contact">Get in Touch</Link>
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </Container>
      </section>
    </div>
  );
}

