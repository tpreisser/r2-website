export interface Industry {
  id: string;
  name: string;
  slug: string;
  description: string;
  longDescription: string;
  icon: string;
  gradient: string;
  image?: string;
  subIndustries?: SubIndustry[];
  useCases: string[];
  challenges: string[];
  solutions: string[];
  metrics?: string[];
}

export interface SubIndustry {
  id: string;
  name: string;
  slug: string;
  description: string;
  useCases: string[];
}

export const industries: Industry[] = [
  {
    id: 'insurance',
    name: 'Insurance',
    slug: 'insurance',
    description: 'Cross-sell automation, claims processing, underwriting support. AI agents built for the unique challenges of insurance.',
    longDescription: 'The insurance industry faces unique challenges: complex regulations, high-volume document processing, and the need for personalized customer engagement at scale. Our industry-specific AI agents understand insurance workflows, compliance requirements, and customer needs, delivering measurable results in days, not years.',
    icon: '🏢',
    gradient: 'linear-gradient(135deg, #025082 0%, #0369a1 100%)',
    image: '/images/industries/insurance.png',
    subIndustries: [
      {
        id: 'property-casualty',
        name: 'Property & Casualty',
        slug: 'property-casualty',
        description: 'Claims processing, risk assessment, and policy management for P&C insurers.',
        useCases: ['Automated claims triage', 'Damage assessment', 'Fraud detection', 'Policy recommendations'],
      },
      {
        id: 'life-health',
        name: 'Life & Health',
        slug: 'life-health',
        description: 'Underwriting automation, policy administration, and customer engagement for life and health insurers.',
        useCases: ['Medical underwriting support', 'Policy cross-sell', 'Benefit explanations', 'Claims processing'],
      },
      {
        id: 'commercial',
        name: 'Commercial Insurance',
        slug: 'commercial',
        description: 'Enterprise risk management, policy administration, and B2B customer engagement.',
        useCases: ['Risk assessment automation', 'Policy administration', 'Client onboarding', 'Renewal management'],
      },
    ],
    useCases: [
      'Cross-sell policy recommendations',
      'Claims document processing',
      'Risk assessment automation',
      'Customer service enhancement',
      'Underwriting support',
      'Fraud detection',
    ],
    challenges: [
      'High-volume document processing',
      'Complex regulatory compliance',
      'Personalized customer engagement at scale',
      'Legacy system integration',
      'Fraud detection and prevention',
    ],
    solutions: [
      'AI-powered claims processing agents',
      'Intelligent cross-sell automation',
      'Regulatory compliance monitoring',
      'Customer engagement chatbots',
      'Document extraction and analysis',
    ],
    metrics: [
      '340% increase in cross-sell revenue',
      '80% reduction in manual claims processing',
      '60% faster policy recommendations',
      '95% compliance accuracy',
    ],
  },
  {
    id: 'healthcare',
    name: 'Healthcare',
    slug: 'healthcare',
    description: 'Patient care coordination, administrative automation, compliance support. Healthcare-specific AI that understands regulations.',
    longDescription: 'Healthcare organizations need AI that understands HIPAA, patient privacy, and clinical workflows. Our healthcare-specific AI agents handle administrative tasks, improve patient care coordination, and ensure compliance—all while maintaining the highest standards of data security and privacy.',
    icon: '🏥',
    gradient: 'linear-gradient(135deg, #0f4c75 0%, #1b262c 100%)',
    image: '/images/industries/healthcare.png',
    subIndustries: [
      {
        id: 'hospitals',
        name: 'Hospitals & Health Systems',
        slug: 'hospitals',
        description: 'Patient scheduling, care coordination, and administrative automation for large health systems.',
        useCases: ['Patient scheduling optimization', 'Care coordination', 'Billing automation', 'Resource allocation'],
      },
      {
        id: 'clinics',
        name: 'Clinics & Practices',
        slug: 'clinics',
        description: 'Appointment management, patient communication, and administrative support for smaller practices.',
        useCases: ['Appointment scheduling', 'Patient reminders', 'Insurance verification', 'Documentation support'],
      },
      {
        id: 'pharma',
        name: 'Pharmaceutical',
        slug: 'pharmaceutical',
        description: 'Regulatory compliance, clinical trial support, and patient engagement for pharmaceutical companies.',
        useCases: ['Regulatory documentation', 'Clinical trial management', 'Patient engagement', 'Adverse event reporting'],
      },
    ],
    useCases: [
      'Patient scheduling optimization',
      'Medical record processing',
      'Billing & claims automation',
      'Compliance monitoring',
      'Care coordination',
      'Prior authorization automation',
    ],
    challenges: [
      'HIPAA compliance and data privacy',
      'Complex billing and coding requirements',
      'High administrative burden',
      'Patient engagement at scale',
      'Integration with EHR systems',
    ],
    solutions: [
      'HIPAA-compliant AI agents',
      'Automated prior authorization',
      'Intelligent patient scheduling',
      'Billing and coding automation',
      'Care coordination assistants',
    ],
    metrics: [
      '70% reduction in administrative time',
      '50% faster prior authorizations',
      '90% patient satisfaction scores',
      '100% HIPAA compliance',
    ],
  },
  {
    id: 'financial',
    name: 'Financial Services',
    slug: 'financial-services',
    description: 'Wealth management, compliance, fraud detection. Financial services AI built with regulatory requirements in mind.',
    longDescription: 'Financial services firms operate in one of the most regulated industries. Our AI agents are built with regulatory compliance at their core, handling everything from wealth management recommendations to fraud detection, all while maintaining the highest standards of security and compliance.',
    icon: '💰',
    gradient: 'linear-gradient(135deg, #013a5f 0%, #025082 100%)',
    image: '/images/industries/financial-services.png',
    subIndustries: [
      {
        id: 'wealth-management',
        name: 'Wealth Management',
        slug: 'wealth-management',
        description: 'Investment recommendations, portfolio management, and client engagement for wealth managers.',
        useCases: ['Investment recommendations', 'Portfolio rebalancing', 'Client reporting', 'Risk assessment'],
      },
      {
        id: 'banking',
        name: 'Banking',
        slug: 'banking',
        description: 'Loan processing, fraud detection, and customer service for banks and credit unions.',
        useCases: ['Loan processing automation', 'Fraud detection', 'Customer onboarding', 'Compliance monitoring'],
      },
      {
        id: 'fintech',
        name: 'FinTech',
        slug: 'fintech',
        description: 'Product recommendations, customer engagement, and operational automation for fintech companies.',
        useCases: ['Product recommendations', 'Customer onboarding', 'Transaction processing', 'Risk assessment'],
      },
    ],
    useCases: [
      'Investment recommendations',
      'Regulatory compliance checks',
      'Fraud detection & prevention',
      'Client onboarding automation',
      'Portfolio management',
      'Loan processing',
    ],
    challenges: [
      'Complex regulatory requirements',
      'Real-time fraud detection',
      'Personalized client engagement',
      'Legacy system integration',
      'Data security and privacy',
    ],
    solutions: [
      'Regulatory-compliant AI agents',
      'Real-time fraud detection systems',
      'Intelligent investment recommendations',
      'Automated compliance monitoring',
      'Client engagement automation',
    ],
    metrics: [
      '45% increase in AUM',
      '99.9% fraud detection accuracy',
      '60% faster client onboarding',
      '100% regulatory compliance',
    ],
  },
  {
    id: 'home',
    name: 'Home Services',
    slug: 'home-services',
    description: 'Service scheduling, customer communication, upsell opportunities. AI agents that help home services companies grow.',
    longDescription: 'Home services companies need to manage scheduling, customer communication, and upsell opportunities efficiently. Our AI agents handle everything from appointment scheduling to follow-up communications, helping home services companies scale their operations while maintaining high customer satisfaction.',
    icon: '🏠',
    gradient: 'linear-gradient(135deg, #0369a1 0%, #025082 100%)',
    image: '/images/industries/home-services.png',
    subIndustries: [
      {
        id: 'hvac',
        name: 'HVAC',
        slug: 'hvac',
        description: 'Scheduling, maintenance reminders, and upsell opportunities for HVAC companies.',
        useCases: ['Maintenance scheduling', 'Service reminders', 'Equipment recommendations', 'Emergency dispatch'],
      },
      {
        id: 'plumbing',
        name: 'Plumbing',
        slug: 'plumbing',
        description: 'Emergency dispatch, scheduling, and customer communication for plumbing services.',
        useCases: ['Emergency dispatch', 'Appointment scheduling', 'Customer follow-up', 'Service recommendations'],
      },
      {
        id: 'electrical',
        name: 'Electrical',
        slug: 'electrical',
        description: 'Scheduling, safety compliance, and customer engagement for electrical contractors.',
        useCases: ['Safety compliance checks', 'Appointment scheduling', 'Customer communication', 'Service recommendations'],
      },
    ],
    useCases: [
      'Appointment scheduling',
      'Customer follow-up automation',
      'Service upsell recommendations',
      'Route optimization',
      'Customer communication',
      'Maintenance reminders',
    ],
    challenges: [
      'Managing high call volumes',
      'Scheduling optimization',
      'Customer communication at scale',
      'Upsell opportunity identification',
      'Route and resource optimization',
    ],
    solutions: [
      'Intelligent scheduling agents',
      'Automated customer communication',
      'Upsell recommendation engines',
      'Route optimization systems',
      'Customer engagement automation',
    ],
    metrics: [
      '50% increase in upsell revenue',
      '40% reduction in no-shows',
      '80% customer satisfaction',
      '30% improvement in route efficiency',
    ],
  },
  {
    id: 'professional-services',
    name: 'Professional Services',
    slug: 'professional-services',
    description: 'AI that amplifies expertise for law, accounting, and consulting while protecting human judgment.',
    longDescription:
      'Professional services balance expertise with efficiency. Clients expect senior-level insight, rapid turnaround, and fair pricing. AI amplifies practitioners by removing non-value-added work and institutionalizing knowledge.',
    icon: '📚',
    gradient: 'linear-gradient(135deg, #013a5f 0%, #025082 100%)',
    image: '/images/industries/professional-services.png',
    useCases: [
      'Knowledge intelligence and retrieval',
      'Document analysis and generation',
      'Research acceleration across domains',
      'Practice profitability analytics',
      'Client communication and portal experiences',
    ],
    challenges: [
      'Associate time consumed by research and review',
      'Knowledge trapped in individuals',
      'Billing pressure and inefficiency',
      'Administrative overhead stealing client time',
      'Competition from AI-native entrants',
    ],
    solutions: [
      'AI-powered knowledge platforms for precedents and past work',
      'Document intelligence for contracts, filings, and reports',
      'AI-assisted research to synthesize findings quickly',
      'Practice analytics for utilization and profitability',
      'Client portals with AI-enhanced communication',
    ],
    metrics: [
      '65% reduction in document review time',
      '40% faster client matter timelines',
      '30% improvement in associate satisfaction',
      'Improved realization on fixed-fee matters',
    ],
  },
  {
    id: 'construction-infrastructure',
    name: 'Construction & Infrastructure',
    slug: 'construction-infrastructure',
    description: 'AI that improves estimation accuracy, schedule adherence, safety, and documentation across projects.',
    longDescription:
      'Construction margins are eroded by delays, rework, and safety incidents. AI can optimize bids, predict schedule risk, reduce incidents, and streamline RFIs and change orders.',
    icon: '🏗️',
    gradient: 'linear-gradient(135deg, #025082 0%, #0369a1 100%)',
    image: '/images/industries/construction-infrastructure.png',
    useCases: [
      'AI estimation and bid risk analysis',
      'Predictive schedule intelligence',
      'Safety analytics and leading indicators',
      'Document and drawing intelligence for RFIs and submittals',
      'Project performance dashboards',
    ],
    challenges: [
      'Estimation inaccuracies causing margin erosion',
      'Schedule delays cascading across projects',
      'Safety incidents despite compliance programs',
      'Distributed stakeholders and siloed information',
      'Labor shortages and knowledge transfer gaps',
    ],
    solutions: [
      'Historical-learning estimation platforms',
      'Real-time schedule risk prediction and optimization',
      'Predictive safety models using observations and near-misses',
      'AI processing for RFIs, submittals, and change orders',
      'Portfolio performance visibility with alerts',
    ],
    metrics: [
      '20% improvement in estimation accuracy',
      '20-30% improvement in schedule adherence',
      '25-40% reduction in recordable incident rates',
      '2.3 point margin improvement across portfolio',
    ],
  },
  {
    id: 'hospitality-travel',
    name: 'Hospitality & Travel',
    slug: 'hospitality-travel',
    description: 'AI for exceptional guest experiences, dynamic revenue management, and lean operations.',
    longDescription:
      'Hospitality must deliver personalized experiences at scale with tight margins and labor pressure. AI optimizes pricing, personalizes journeys, and improves operational efficiency across properties.',
    icon: '🛎️',
    gradient: 'linear-gradient(135deg, #0f4c75 0%, #1b262c 100%)',
    image: '/images/industries/hospitality-travel.png',
    useCases: [
      'Dynamic revenue and channel optimization',
      'Guest intelligence and personalization',
      'Labor and maintenance optimization',
      'Reputation monitoring and response assistance',
      'Operations dashboards across properties',
    ],
    challenges: [
      'Rising labor costs and shortages',
      'Guests expect personalization across touchpoints',
      'Complex revenue management by channel/segment',
      'Operational inefficiency across properties',
      'Reputation risk across digital platforms',
    ],
    solutions: [
      'AI-powered revenue management systems',
      'Unified guest profiles with predictive needs',
      'Predictive scheduling and maintenance',
      'Review and social analysis with drafted responses',
      'Real-time ops visibility for multi-property portfolios',
    ],
    metrics: [
      '5-12% RevPAR improvement',
      '10-15% improvement in guest satisfaction',
      '15-20% improvement in labor efficiency',
      '80% reduction in review response times',
    ],
  },
  {
    id: 'agriculture-food',
    name: 'Agriculture & Food Production',
    slug: 'agriculture-food',
    description: 'AI from field to fork: precision agriculture, operations efficiency, and transparent supply chains.',
    longDescription:
      'Agriculture faces climate volatility, margin pressure, and transparency demands. AI optimizes inputs, predicts yields, reduces waste, and improves traceability throughout the food system.',
    icon: '🌾',
    gradient: 'linear-gradient(135deg, #0369a1 0%, #025082 100%)',
    image: '/images/industries/agriculture-food.png',
    useCases: [
      'Precision agriculture recommendations',
      'Operations and logistics optimization',
      'Supply chain demand forecasting and routing',
      'Quality inspection and compliance monitoring',
      'Traceability from farm to consumer',
    ],
    challenges: [
      'Climate-driven yield unpredictability',
      'Input cost optimization (seed, water, fertilizer)',
      'Labor availability and efficiency',
      'Supply chain waste and spoilage',
      'Demand for transparency and sustainability',
    ],
    solutions: [
      'Field-level analytics with prescriptive inputs',
      'Equipment and labor scheduling optimization',
      'Demand and logistics forecasting to cut waste',
      'AI quality inspection and compliance automation',
      'End-to-end traceability systems',
    ],
    metrics: [
      '15-25% reduction in input costs',
      '20-30% improvement in operational efficiency',
      'Reduced yield variability',
      'Improved sustainability metrics',
    ],
  },
  {
    id: 'sports-entertainment',
    name: 'Sports & Entertainment',
    slug: 'sports-entertainment',
    description: 'AI that personalizes fan engagement, optimizes ticketing, and streamlines venue operations.',
    longDescription:
      'Sports and entertainment organizations must engage fans digitally, optimize dynamic pricing, and run efficient venues. AI powers fan intelligence, revenue optimization, and operational excellence.',
    icon: '🏟️',
    gradient: 'linear-gradient(135deg, #025082 0%, #013a5f 100%)',
    image: '/images/industries/sports-entertainment.png',
    useCases: [
      'Unified fan data and churn/lifetime value prediction',
      'Dynamic ticket and inventory pricing',
      'Event staffing and flow optimization',
      'Sponsorship valuation and activation analytics',
      'Content intelligence and personalization',
    ],
    challenges: [
      'Engaging fans across fragmented digital channels',
      'Pricing tickets in dynamic markets',
      'Stadium/venue operational efficiency',
      'Sponsorship valuation and activation proof',
      'Content personalization at scale',
    ],
    solutions: [
      'Fan intelligence platforms with personalization',
      'Revenue intelligence for tickets, merch, concessions',
      'Scheduling and flow optimization for events',
      'AI-powered sponsorship valuation and retention',
      'Content recommendation and distribution optimization',
    ],
    metrics: [
      '25-40% improvement in fan engagement metrics',
      '8-15% increase in ticket revenue',
      '15-20% reduction in event operating costs',
      'Improved sponsor retention and activation',
    ],
  },
];

export function getIndustryBySlug(slug: string): Industry | undefined {
  return industries.find((industry) => industry.slug === slug);
}

export function getSubIndustryBySlug(industrySlug: string, subIndustrySlug: string): SubIndustry | undefined {
  const industry = getIndustryBySlug(industrySlug);
  return industry?.subIndustries?.find((sub) => sub.slug === subIndustrySlug);
}

