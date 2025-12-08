export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  industry: string;
  timeline: string;
  capability: string;
  summary: string;
  situation: string;
  approach: string[];
  results: string[];
  quote?: string;
  image?: string;
  gradient?: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'cassidy-hvac',
    slug: 'cassidy-hvac',
    title: 'Cassidy HVAC Platform',
    industry: 'Home Services',
    timeline: '90 days',
    capability: 'Data & Analytics, AI & Automation',
    summary: 'PE-backed, multi-brand HVAC platform unified data, deployed revenue intelligence, and unlocked growth.',
    situation:
      '15+ brands across 8 states, all with different systems and data. No unified view of customers or performance. Lead conversion varied widely and cross-sell was untapped.',
    approach: [
      'Weeks 1–4: map data across brands, design unified architecture, build initial pipelines',
      'Weeks 5–8: deploy AI lead scoring, unified customer profiles, revenue intelligence models, standardized KPIs',
      'Weeks 9–12: launch portfolio performance dashboard, optimize lead routing, train local managers, prioritize 20+ revenue plays',
    ],
    results: [
      'Single source of truth across all brands in 90 days',
      '$4M+ annual revenue opportunity identified (20+ plays)',
      '15% lead conversion lift at pilot brands',
      '60% of identified revenue captured within 12 months ($2.4M)',
      'Two new acquisitions integrated in <30 days each',
      'Clear AI-enabled value narrative for exit',
    ],
    quote:
      '“R² did in 90 days what we could not do in 24 months. More importantly, they delivered actionable intelligence that is directly driving revenue.” — CFO, Cassidy HVAC Platform',
    gradient: 'linear-gradient(135deg, #025082, #013a5f)',
    image: '/images/r2-billboard.png',
  },
  {
    id: 'regional-mga',
    slug: 'regional-mga',
    title: 'Regional MGA Transformation',
    industry: 'Insurance',
    timeline: '60 days',
    capability: 'AI & Automation, Operations Excellence',
    summary: 'Automated submission processing for a fast-growing MGA drowning in manual data entry.',
    situation:
      '10,000+ monthly submissions with manual ACORD/loss-run entry. Underwriters spent 60% of their time on data entry, and quote turnaround slipped to 48 hours.',
    approach: [
      'Weeks 1–2: analyze document corpus, configure extraction for ACORD/loss runs/supplementals, design PAS integration and exception flows',
      'Weeks 3–4: train/refine models on historical submissions, achieve 95%+ extraction accuracy, build underwriter dashboards',
      'Weeks 5–8: full-volume deployment, refine edge cases, train underwriters, monitor and optimize',
    ],
    results: [
      '60%+ reduction in submission processing time',
      '95%+ extraction accuracy across document types',
      'Quote turnaround cut from 48 hours to 8 hours',
      'Underwriters refocused on risk; capacity to grow volume 50% without headcount',
      'Agent satisfaction +25 points; foundation for renewals/endorsements automation',
    ],
    quote:
      '“We went from drowning in paper to having capacity we didn’t know we needed. The underwriters most skeptical are now our biggest advocates.” — COO, Regional MGA',
    gradient: 'linear-gradient(135deg, #0f4c75, #1b262c)',
    image: '/images/industry-specific-ai.png',
  },
  {
    id: 'manufacturing-intelligence',
    slug: 'manufacturing-intelligence',
    title: 'Manufacturing Intelligence',
    industry: 'Manufacturing',
    timeline: '120 days',
    capability: 'AI & Automation, Operations Excellence',
    summary: 'Predictive quality and maintenance slashed defects and downtime for an industrial manufacturer.',
    situation:
      'Defect rate stuck at 3.2% (vs. 1.5% benchmark). Frequent unplanned downtime and firefighting maintenance. Traditional quality programs plateaued.',
    approach: [
      'Phase 1: integrate quality, sensor, environmental, and scheduling data; fill critical gaps',
      'Phase 2: predictive quality models, real-time monitoring, root-cause analysis',
      'Phase 3: predictive maintenance models, optimized maintenance scheduling, monitoring dashboards',
      'Phase 4: connect quality/maintenance insights to production scheduling; train teams and institutionalize continuous improvement',
    ],
    results: [
      'Defect rate reduced from 3.2% to 1.1% (66% improvement)',
      '$2.1M annual savings from reduced scrap/rework',
      'Customer complaints down 75%',
      'Unplanned downtime reduced 40%; maintenance costs down 22%; MTBF up 35%',
      'Real-time visibility and predictive management embedded in ops',
    ],
    quote:
      '“The AI found patterns we’d been looking for for years. This fundamentally changed how we operate.” — VP Operations, Industrial Manufacturer',
    gradient: 'linear-gradient(135deg, #025082, #0369a1)',
    image: '/images/prototypes-within-days.png',
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}
