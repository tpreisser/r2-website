export interface Agent {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  longDescription: string;
  category: 'revenue' | 'operations' | 'compliance' | 'customer-experience' | 'analytics';
  industries: string[];
  features: string[];
  useCases: string[];
  benefits: string[];
  metrics?: string[];
  problems?: string[];
  howItWorks?: string[];
  results?: string[];
  bestFor?: string;
  gradient: string;
  icon: string;
  image?: string;
}

export const agents: Agent[] = [
  // Customer Interaction
  {
    id: 'ai-voice-ivr',
    name: 'AI Voice IVR Agent',
    slug: 'ai-voice-ivr',
    tagline: 'Transform your phone experience',
    description: 'Natural-language IVR that routes calls intelligently, captures intent, and reduces abandonment.',
    longDescription:
      'The phone tree is dead. Customers speak naturally, and our AI understands intent, urgency, and context to route calls instantly—while capturing information for your team.',
    category: 'customer-experience',
    industries: ['home', 'healthcare', 'insurance'],
    problems: [
      'High call abandonment from frustrating phone trees',
      'Misrouted calls consuming agent time',
      'After-hours calls going to voicemail',
      'No scalable way to capture caller intent',
    ],
    howItWorks: [
      "Caller speaks naturally: \"I need to schedule a repair\"",
      'AI extracts intent, urgency, and relevant details',
      'Routes to the right team with context',
      'Integrates with CRM to surface history',
    ],
    features: [
      'Natural language understanding',
      'Urgency detection and priority routing',
      'Information capture and CRM integration',
      'Seamless handoff with context',
      'After-hours handling and callback scheduling',
      'Multi-language support',
    ],
    useCases: [
      'Replace traditional IVR systems',
      'Reduce call center wait times',
      'Handle after-hours inquiries',
      'Improve first-call resolution',
    ],
    benefits: [
      'Reduce abandonment',
      'Faster routing',
      'Better first-call resolution',
      'Improved customer satisfaction',
    ],
    metrics: [
      '30-50% reduction in abandonment',
      '40% reduction in misrouted calls',
      '20% improvement in first-call resolution',
    ],
    bestFor: 'Home services, healthcare, insurance, any high-call-volume operation',
    gradient: 'linear-gradient(135deg, #025082 0%, #0369a1 100%)',
    icon: '📞',
    image: '/images/industry-specific-ai.png',
  },
  {
    id: 'ai-sms',
    name: 'AI SMS Agent',
    slug: 'ai-sms',
    tagline: 'Never miss a text conversation',
    description: '24/7 SMS handling that qualifies leads, answers questions, and routes to humans when needed.',
    longDescription:
      "Customers prefer text, but responses lag. This agent answers immediately, qualifies intent, and escalates when appropriate—capturing leads you’d otherwise lose.",
    category: 'customer-experience',
    industries: ['home', 'retail', 'healthcare'],
    problems: [
      'Text inquiries wait hours',
      'Manual responses burn staff time',
      'Lost leads from slow response',
      'No visibility into text quality',
    ],
    howItWorks: [
      'Customer texts your business line',
      'AI responds instantly and transparently',
      'Captures info, answers FAQs, qualifies intent',
      'Routes to human when required',
      'Logs interactions to CRM',
    ],
    features: [
      'Immediate responses',
      'Lead qualification and capture',
      'FAQ handling',
      'Smart human escalation',
      'Multi-language support',
      'Conversation analytics',
    ],
    useCases: [
      'After-hours inquiry capture',
      'Lead qualification via SMS',
      'Customer support triage',
    ],
    benefits: [
      'Faster responses',
      'Fewer lost leads',
      'Lower manual workload',
      '24/7 coverage',
    ],
    metrics: [
      '15-25% improvement in lead response rate',
      '60% of inquiries handled without humans',
    ],
    bestFor: 'Home services, retail, healthcare, any text-heavy business',
    gradient: 'linear-gradient(135deg, #013a5f 0%, #025082 100%)',
    icon: '💬',
  },
  {
    id: 'customer-service-ai',
    name: 'Customer Service AI',
    slug: 'customer-service-ai',
    tagline: 'Resolve issues faster, everywhere',
    description: 'Multichannel AI that handles routine inquiries across chat, email, SMS, and social.',
    longDescription:
      'Handles routine questions, retrieves information, and escalates with full context—so teams can focus on complex issues.',
    category: 'customer-experience',
    industries: ['ecommerce', 'saas', 'financial', 'insurance'],
    problems: [
      'Customers wait for simple answers',
      'Agents stuck on repetitive inquiries',
      'Inconsistent responses',
      'Limited service hours',
    ],
    howItWorks: [
      'Identify intent across channels',
      'Retrieve answers from knowledge bases',
      'Resolve routine issues automatically',
      'Escalate complex cases with context',
      'Continuously learns from resolutions',
    ],
    features: [
      'Multi-channel support',
      'Intent classification',
      'Knowledge base integration',
      'Context-preserving escalation',
      'Analytics and reporting',
    ],
    useCases: [
      'Order status and billing inquiries',
      'FAQ handling',
      'Tier-1 support deflection',
    ],
    benefits: [
      'Higher self-serve resolution',
      'Faster response times',
      'Consistent answers',
      'Happier customers',
    ],
    metrics: [
      '50-70% of inquiries resolved without humans',
      '60% reduction in response time',
    ],
    bestFor: 'E-commerce, SaaS, financial services, any customer service operation',
    gradient: 'linear-gradient(135deg, #0f4c75 0%, #1b262c 100%)',
    icon: '🤖',
  },

  // Sales & Revenue
  {
    id: 'cross-sell',
    name: 'Cross-Sell Agent',
    slug: 'cross-sell-agent',
    tagline: 'Intelligent product recommendations that drive revenue',
    description:
      'Analyzes customer data to identify the right products at the right time, delivering personalized offers that convert.',
    longDescription:
      'Understands behavior, purchase history, and lifecycle stage to deliver targeted offers. Built for insurance, financial services, and any multi-product business.',
    category: 'revenue',
    industries: ['insurance', 'financial', 'healthcare', 'retail', 'saas', 'home'],
    problems: [
      'Cross-sell opportunities go unidentified',
      'Sales focus only on new acquisition',
      'Generic offers miss customer needs',
      'Manual analysis of product affinities',
    ],
    howItWorks: [
      'Integrates with CRM and transactions',
      'Builds customer/product affinity models',
      'Identifies highest-probability offers',
      'Generates personalized recommendations',
      'Executes multi-channel outreach',
      'Tracks conversion and optimizes',
    ],
    features: [
      'Real-time customer analysis',
      'Product affinity modeling',
      'Next-best-offer recommendations',
      'Personalized offer generation',
      'Multi-channel activation',
      'A/B testing and optimization',
    ],
    useCases: [
      'Insurance cross-sell (auto → home, etc.)',
      'Financial product recommendations',
      'Retail add-on/upsell',
      'Home services upgrades',
    ],
    benefits: [
      'Increase revenue per customer',
      'Improve LTV',
      'Reduce manual sales effort',
      'Relevant offers at scale',
    ],
    metrics: [
      '20-40% increase in cross-sell conversion',
      '15-25% LTV improvement',
      '3x ROI on campaigns',
    ],
    bestFor: 'Financial services, insurance, retail, SaaS, home services',
    gradient: 'linear-gradient(135deg, #025082 0%, #0369a1 100%)',
    icon: '💰',
    image: '/images/business-specific-ai.png',
  },
  {
    id: 'missed-opportunity-recovery',
    name: 'Missed Opportunity Recovery Agent',
    slug: 'missed-opportunity-recovery',
    tagline: 'Turn missed calls into booked revenue',
    description: 'Automated follow-up for missed calls, unbooked leads, and abandoned quotes across SMS, email, and voice.',
    longDescription:
      'Detects missed opportunities, launches personalized multi-channel follow-up, and routes engaged prospects to sales—recovering revenue without extra headcount.',
    category: 'revenue',
    industries: ['home', 'healthcare', 'insurance', 'financial'],
    problems: [
      'Missed calls and quotes go untouched',
      'Inconsistent manual follow-up',
      'Leads fall out of sequences',
    ],
    howItWorks: [
      'Integrates with phone system and CRM',
      'Triggers follow-up sequences automatically',
      'Personalizes outreach by context',
      'Routes engaged prospects to sales',
      'Tracks recovery and ROI',
    ],
    features: [
      'Real-time missed call detection',
      'Multi-touch sequences (SMS/email/callback)',
      'Lead prioritization and scoring',
      'CRM integration and logging',
      'Performance tracking and A/B testing',
    ],
    useCases: [
      'Recover missed calls',
      'Re-engage abandoned quotes',
      'After-hours lead capture',
    ],
    benefits: [
      'Recover lost revenue',
      'Consistent follow-up',
      'Less manual effort',
    ],
    metrics: [
      '15-25% recovery on missed opportunities',
      '10-15% increase in booked appointments',
    ],
    bestFor: 'Home services, healthcare, insurance, any high-ticket service business',
    gradient: 'linear-gradient(135deg, #0f4c75 0%, #1b262c 100%)',
    icon: '📱',
  },
  {
    id: 'quote-follow-up',
    name: 'Quote Follow-Up Agent',
    slug: 'quote-follow-up',
    tagline: 'Don’t let big deals die',
    description: 'Automated nurture for high-value unbooked quotes with timing and escalation intelligence.',
    longDescription:
      'Tracks open quotes, triggers value-based nurture, and alerts sales when engagement rises—recovering high-value opportunities.',
    category: 'revenue',
    industries: ['home', 'construction', 'b2b', 'insurance', 'financial'],
    problems: [
      'Large quotes sit unfollowed',
      'Inconsistent salesperson follow-up',
      'Deals lost to faster responders',
    ],
    howItWorks: [
      'Monitors quoting system for open quotes',
      'Launches sequences based on value/age',
      'Responds immediately to engagement',
      'Alerts sales when quotes heat up',
      'Tracks conversion by sequence',
    ],
    features: [
      'Quote pipeline monitoring',
      'Value-based sequence selection',
      'Multi-channel nurture',
      'Engagement scoring and alerts',
      'A/B testing and optimization',
    ],
    useCases: [
      'Recover unbooked install quotes',
      'Reduce quote aging',
      'Improve quote-to-close',
    ],
    benefits: [
      'Higher quote conversion',
      'Reduced aging',
      'Better sales focus',
    ],
    metrics: [
      '3-5% improvement in quote-to-close',
      '20% reduction in quote aging',
    ],
    bestFor: 'Home services, construction, B2B services, any high-value quotes',
    gradient: 'linear-gradient(135deg, #025082 0%, #013a5f 100%)',
    icon: '💵',
  },
  {
    id: 'customer-reengagement',
    name: 'Customer Re-Engagement Agent',
    slug: 'customer-reengagement',
    tagline: 'Reactivate dormant customers',
    description: 'Outbound AI outreach to win back dormant customers with personalized conversations.',
    longDescription:
      'Identifies dormant customers, segments by value and likelihood, and runs multi-channel outreach (including AI voice) to reactivate at a fraction of new CAC.',
    category: 'revenue',
    industries: ['home', 'healthcare', 'financial', 'insurance', 'retail'],
    problems: [
      'Dormant customers remain untouched',
      'No systematic reactivation',
      'High cost of new acquisition',
    ],
    howItWorks: [
      'Analyze customer data to find reactivation opportunities',
      'Segment by value, recency, likelihood',
      'Deploy personalized outreach across channels',
      'Book directly or route to team',
      'Optimize based on response patterns',
    ],
    features: [
      'Customer segmentation and scoring',
      'Trigger-based campaigns',
      'AI voice outreach',
      'Multi-channel orchestration',
      'ROI tracking by segment',
    ],
    useCases: [
      'Win-back dormant customers',
      'Low-cost reactivation vs. acquisition',
      'Lifecycle re-engagement',
    ],
    benefits: [
      'Lower CAC vs. new acquisition',
      'Recover lost revenue',
      'Personalized at scale',
    ],
    metrics: [
      '15-25% response rate',
      '5-10% conversion to booked service',
      '60-80% lower CAC vs. paid channels',
    ],
    bestFor: 'Home services, healthcare, automotive, subscription/repeat-purchase businesses',
    gradient: 'linear-gradient(135deg, #0369a1 0%, #013a5f 100%)',
    icon: '📞',
  },

  // Operations & Productivity
  {
    id: 'csr-performance',
    name: 'CSR Performance Intelligence',
    slug: 'csr-performance',
    tagline: 'Turn every call into a coaching opportunity',
    description: 'AI listens to every call, scores performance, and surfaces coaching opportunities automatically.',
    longDescription:
      'Analyzes 100% of calls, scores against your rubric, identifies what top performers do, and provides actionable coaching insights to lift booking rates.',
    category: 'analytics',
    industries: ['home', 'insurance', 'healthcare', 'call-center'],
    problems: [
      'QA limited to small samples',
      'Inconsistent CSR performance',
      'No insight into why calls don’t convert',
      'Manual QA doesn’t scale',
    ],
    howItWorks: [
      'Integrates with call recordings',
      'Transcribes and analyzes every call',
      'Scores against custom rubric',
      'Surfaces coaching opportunities',
      'Generates team and individual reports',
    ],
    features: [
      'Automatic transcription and analysis',
      'Customizable scoring rubrics',
      'Trend analysis and benchmarking',
      'Top-performer pattern detection',
      'Manager dashboards',
    ],
    useCases: [
      'Call center performance improvement',
      'Sales coaching optimization',
      'QA automation',
    ],
    benefits: [
      'Higher booking rates',
      'Data-driven coaching',
      'Consistent standards',
      'Less manual QA',
    ],
    metrics: [
      '15-25% booking rate improvement',
      '100% call coverage vs. samples',
      '80% reduction in QA time',
    ],
    bestFor: 'Call centers, home services, insurance, healthcare—any phone-heavy operation',
    gradient: 'linear-gradient(135deg, #0369a1 0%, #025082 100%)',
    icon: '📊',
  },
  {
    id: 'event-triggered-campaigns',
    name: 'Event-Triggered Campaign Engine',
    slug: 'event-triggered-campaigns',
    tagline: 'First to market when it matters',
    description: 'Launches campaigns automatically on weather/seasonal/external triggers with personalized messaging.',
    longDescription:
      'Monitors weather, seasonal, and custom triggers; activates pre-built campaigns; personalizes by segment and geography; tracks performance.',
    category: 'revenue',
    industries: ['home', 'retail', 'hospitality', 'energy', 'insurance'],
    problems: [
      'Slow reaction to events',
      'Manual campaign activation misses windows',
      'Generic messaging not matching conditions',
    ],
    howItWorks: [
      'Monitor weather/seasonal/custom triggers',
      'Activate pre-built campaigns automatically',
      'Personalize by segment and trigger',
      'Track performance and optimize timing',
    ],
    features: [
      'Weather/seasonal monitoring',
      'Custom trigger configuration',
      'Pre-built templates',
      'Geographic targeting',
      'Performance analytics',
    ],
    useCases: [
      'Weather-triggered campaigns',
      'Seasonal marketing automation',
      'Emergency response marketing',
    ],
    benefits: [
      'First-to-market positioning',
      'Higher response rates',
      'Reduced manual effort',
    ],
    metrics: [
      '30-50% higher response on triggered campaigns',
      '60% reduction in campaign setup time',
    ],
    bestFor: 'Home services, retail, hospitality, energy',
    gradient: 'linear-gradient(135deg, #0f4c75 0%, #025082 100%)',
    icon: '🌡️',
  },
  {
    id: 'document-processing',
    name: 'Document Processing Agent',
    slug: 'document-processing',
    tagline: 'Stop the paper chase',
    description: 'Classifies, extracts, and routes documents automatically with high accuracy.',
    longDescription:
      'Ingests documents from any source, classifies type, extracts fields, validates confidence, routes to workflows, and flags exceptions for review.',
    category: 'operations',
    industries: ['financial', 'insurance', 'healthcare', 'legal'],
    problems: [
      'Manual document review consumes staff time',
      'Data entry errors and slow queues',
      'No visibility into document pipeline',
    ],
    howItWorks: [
      'Accepts docs from email/upload/API',
      'Classifies document type automatically',
      'Extracts relevant data with validation',
      'Routes to downstream systems',
      'Flags exceptions for human review',
    ],
    features: [
      'Multi-format support',
      'Custom extraction templates',
      'Validation and confidence scoring',
      'Exception handling and HITL',
      'Integration with downstream systems',
    ],
    useCases: [
      'Applications, contracts, invoices',
      'Claims and policy documents',
      'Loan packages and filings',
    ],
    benefits: [
      'Less manual entry',
      'Faster processing',
      'Higher data quality',
    ],
    metrics: [
      '80% reduction in manual data entry',
      '95%+ extraction accuracy',
      '60% faster processing',
    ],
    bestFor: 'Financial services, insurance, healthcare, legal—any document-heavy operation',
    gradient: 'linear-gradient(135deg, #025082 0%, #013a5f 100%)',
    icon: '📄',
  },
  {
    id: 'document-analyzer',
    name: 'Document Analyzer Agent',
    slug: 'document-analyzer-agent',
    tagline: 'Understand any document, instantly',
    description:
      'Reads, understands, and answers questions about documents with citations—across PDFs, scans, contracts, policies, and more.',
    longDescription:
      'Processes any document type, answers natural language questions with citations, summarizes, compares, and exports structured data while flagging risks.',
    category: 'operations',
    industries: ['legal', 'insurance', 'financial', 'healthcare', 'real-estate'],
    problems: [
      'Manual review consumes professional time',
      'Important details get missed',
      'Inconsistent analysis across reviewers',
      'Slow turnaround on document-heavy processes',
    ],
    howItWorks: [
      'Upload any format (PDF, Word, scans)',
      'AI indexes and understands content',
      'Ask questions and get cited answers',
      'Generate summaries and comparisons',
      'Export extracted data to systems',
    ],
    features: [
      'OCR for scans',
      'Natural language Q&A with citations',
      'Summarization and comparison',
      'Risk/issue identification',
      'Key term extraction',
      'DMS integration',
    ],
    useCases: [
      'Contract review and diligence',
      'Policy analysis and claims docs',
      'Loan packages and regulatory filings',
      'Medical record summarization',
    ],
    benefits: [
      'Faster reviews',
      'Higher accuracy',
      'Consistent analysis',
      'Reduced risk',
    ],
    metrics: [
      '70-90% reduction in review time',
      '99%+ extraction accuracy',
    ],
    bestFor: 'Legal, insurance, financial services, healthcare, real estate',
    gradient: 'linear-gradient(135deg, #013a5f 0%, #025082 100%)',
    icon: '📑',
    image: '/images/prototypes-within-days.png',
  },
  {
    id: 'csr-performance-intel',
    name: 'CSR Performance Intelligence',
    slug: 'csr-performance-intel',
    tagline: 'QA every call, coach with data',
    description: 'Analyzes every call, scores performance, and delivers coaching insights to lift booking rates.',
    longDescription:
      'Monitors 100% of calls with AI, scores against custom rubrics, surfaces coaching opportunities, and benchmarks teams.',
    category: 'analytics',
    industries: ['home', 'insurance', 'healthcare', 'call-center'],
    features: [
      'Full-call transcription and analysis',
      'Custom scoring rubrics',
      'Coaching insight generation',
      'Trend and benchmark reporting',
      'Top-performer pattern mining',
    ],
    useCases: [
      'Call center QA',
      'Sales coaching',
      'Performance benchmarking',
    ],
    benefits: [
      'Better booking rates',
      'Scalable QA',
      'Actionable coaching',
    ],
    metrics: [
      '15-25% booking lift',
      '100% call coverage',
    ],
    gradient: 'linear-gradient(135deg, #0369a1 0%, #025082 100%)',
    icon: '📈',
  },

  // Compliance
  {
    id: 'compliance-monitor',
    name: 'Compliance Monitor Agent',
    slug: 'compliance-monitor-agent',
    tagline: 'Automated regulatory compliance and risk monitoring',
    description:
      'Continuously monitors operations, documents, and communications for compliance with industry regulations.',
    longDescription:
      'Understands HIPAA, FINRA, insurance and other regulations; monitors activity, documents, and transactions; generates alerts and audit trails to stay ahead of issues.',
    category: 'compliance',
    industries: ['insurance', 'healthcare', 'financial'],
    features: [
      'Multi-regulation support',
      'Real-time monitoring',
      'Automated compliance checks',
      'Risk scoring and alerts',
      'Audit trail generation',
      'Regulatory update tracking',
    ],
    useCases: [
      'HIPAA compliance monitoring',
      'Insurance regulation compliance',
      'Financial services compliance',
      'Document and communication review',
      'Transaction monitoring',
    ],
    benefits: [
      'Reduce compliance risk',
      'Automate monitoring',
      'Early issue detection',
      'Comprehensive audit trails',
    ],
    metrics: [
      '90% reduction in compliance issues',
      'Real-time coverage',
    ],
    gradient: 'linear-gradient(135deg, #0369a1 0%, #025082 100%)',
    icon: '🛡️',
  },

  // Customer Experience / Onboarding
  {
    id: 'customer-onboarding',
    name: 'Customer Onboarding Agent',
    slug: 'customer-onboarding-agent',
    tagline: 'Streamline onboarding from first touch to first value',
    description:
      'Automates and personalizes onboarding, collects info, sets up accounts, and guides to first success.',
    longDescription:
      'Personalizes flows by customer type and need, reducing onboarding time by 60% while improving satisfaction.',
    category: 'customer-experience',
    industries: ['insurance', 'financial', 'healthcare', 'home', 'saas'],
    features: [
      'Personalized onboarding flows',
      'Automated information collection',
      'Proactive guidance and support',
      'CRM/system integration',
      'Progress and milestone tracking',
    ],
    useCases: [
      'Policy/account onboarding',
      'Product activation',
      'Service provider onboarding',
    ],
    benefits: [
      'Faster onboarding',
      'Higher satisfaction',
      'Lower support burden',
    ],
    metrics: [
      '60% reduction in onboarding time',
      '85% customer satisfaction',
    ],
    gradient: 'linear-gradient(135deg, #025082 0%, #013a5f 100%)',
    icon: '🚀',
  },

  // Operations: Insurance-centric
  {
    id: 'claims-processor',
    name: 'Claims Processing Agent',
    slug: 'claims-processing-agent',
    tagline: 'Automated claims processing with intelligent decision-making',
    description:
      'Straight-through processing for routine claims with triage, validation, coverage checks, and payments.',
    longDescription:
      'Handles the entire claims lifecycle, automating simple claims while flagging complex ones for humans—10x faster with higher accuracy.',
    category: 'operations',
    industries: ['insurance'],
    features: [
      'Automated claim triage',
      'Document extraction and validation',
      'Coverage verification',
      'Damage assessment',
      'Fraud detection',
      'Payment processing',
    ],
    useCases: [
      'Property and casualty claims',
      'Health insurance claims',
      'Auto and life claims',
      'Workers compensation',
    ],
    benefits: [
      'Faster claims',
      'Lower cost',
      'Higher accuracy',
      '24/7 availability',
    ],
    metrics: [
      '10x faster processing',
      '80% cost reduction',
      '95% accuracy',
    ],
    gradient: 'linear-gradient(135deg, #0f4c75 0%, #025082 100%)',
    icon: '⚡',
  },
  {
    id: 'submission-intelligence',
    name: 'Submission Intelligence Agent',
    slug: 'submission-intelligence',
    tagline: 'Transform submission intake',
    description:
      'Ingests submissions from any channel, extracts data, enriches, applies clearance rules, and routes to underwriters.',
    longDescription:
      'Parses ACORD forms, schedules, loss runs, and applications; enriches with third-party data; applies routing rules; delivers preliminary risk assessment to underwriters.',
    category: 'operations',
    industries: ['insurance'],
    features: [
      'Multi-format extraction (PDF, Excel, scans)',
      'ACORD parsing with high accuracy',
      'Vehicle schedule extraction',
      'Integration with Salesforce/Majesco/portals',
      'Clearance workflow automation',
      'Rule-based triage and routing',
    ],
    useCases: [
      'Commercial submission intake',
      'Broker email ingestion',
      'Underwriter routing and triage',
    ],
    benefits: [
      'Faster submission processing',
      'Less underwriter data entry',
      'Better broker experience',
    ],
    metrics: [
      '60%+ reduction in submission touch time',
      'Same-day processing vs. multi-day delays',
    ],
    gradient: 'linear-gradient(135deg, #025082 0%, #0f4c75 100%)',
    icon: '📥',
  },
  {
    id: 'appointment-scheduler',
    name: 'Appointment Scheduler Agent',
    slug: 'appointment-scheduler-agent',
    tagline: 'Optimize scheduling and reduce no-shows',
    description:
      'Manages appointments, optimizes schedules, sends reminders, and handles rescheduling automatically.',
    longDescription:
      'Understands constraints, availability, preferences, and business rules to maximize utilization and cut no-shows.',
    category: 'operations',
    industries: ['healthcare', 'home', 'professional-services'],
    features: [
      'Schedule optimization',
      'Automated reminders',
      'Rescheduling management',
      'Resource allocation',
      'No-show prediction',
      'Multi-channel communication',
    ],
    useCases: [
      'Healthcare scheduling',
      'Home services booking',
      'Consultation scheduling',
    ],
    benefits: [
      'Fewer no-shows',
      'Lower scheduling overhead',
      'Better utilization',
    ],
    metrics: [
      '40% reduction in no-shows',
      '70% scheduling automation',
    ],
    gradient: 'linear-gradient(135deg, #0369a1 0%, #013a5f 100%)',
    icon: '📅',
  },

  // Analytics & Risk
  {
    id: 'marketing-spend-optimizer',
    name: 'Marketing Spend Optimizer',
    slug: 'marketing-spend-optimizer',
    tagline: 'Make every marketing dollar work harder',
    description:
      'Analyzes performance across channels and reallocates budget to maximize ROI automatically or with approval.',
    longDescription:
      'Integrates with all marketing platforms, CRM, and revenue systems; runs attribution; recommends or executes budget shifts; monitors continuously.',
    category: 'analytics',
    industries: ['insurance', 'financial', 'healthcare', 'home', 'retail', 'b2b'],
    features: [
      'Multi-channel performance analysis',
      'Goal-based optimization',
      'Automated budget reallocation',
      'Predictive analytics and forecasting',
      'Custom dashboards and reporting',
    ],
    useCases: [
      'Optimize paid media spend',
      'Reallocate budget across channels',
      'Identify high-performing segments',
      'Reduce wasted spend',
    ],
    benefits: [
      'Higher marketing ROI',
      'Lower CPA',
      'Automated budget moves',
      'Data-driven decisions',
    ],
    metrics: [
      '15-30% improvement in ROI',
      '20-40% reduction in wasted spend',
    ],
    gradient: 'linear-gradient(135deg, #0f4c75 0%, #1b262c 100%)',
    icon: '📊',
    image: '/images/industry-specific-ai.png',
  },
  {
    id: 'risk-assessor',
    name: 'Risk Assessment Agent',
    slug: 'risk-assessment-agent',
    tagline: 'Automated risk analysis and underwriting support',
    description:
      'Evaluates applications and documents to deliver consistent, accurate risk scores and recommendations.',
    longDescription:
      'Understands underwriting criteria and compliance requirements to speed decisions while maintaining accuracy.',
    category: 'analytics',
    industries: ['insurance', 'financial'],
    features: [
      'Multi-factor risk analysis',
      'Automated underwriting support',
      'Risk scoring',
      'Document analysis',
      'Regulatory checks',
      'Decision recommendations',
    ],
    useCases: [
      'Insurance underwriting',
      'Loan and credit assessment',
      'Investment risk analysis',
    ],
    benefits: [
      'Faster decisions',
      'Consistent scoring',
      'Improved accuracy',
      'Regulatory compliance',
    ],
    metrics: [
      '60% faster decisions',
      '95% accuracy',
    ],
    gradient: 'linear-gradient(135deg, #013a5f 0%, #0f4c75 100%)',
    icon: '🎯',
  },
  {
    id: 'accounts-receivable',
    name: 'Accounts Receivable Agent',
    slug: 'accounts-receivable-agent',
    tagline: 'Collections prioritization, personalized outreach, and cash flow forecasting.',
    description:
      'Optimizes AR by segmenting accounts, predicting payment, prioritizing effort, and personalizing communications to reduce DSO.',
    longDescription:
      'Most AR teams treat every account the same. This agent analyzes payment behavior, risk, and value to target the right accounts with the right outreach, improving recovery and cash flow while reducing manual effort.',
    category: 'operations',
    industries: ['financial', 'home', 'healthcare', 'insurance', 'retail'],
    features: [
      'Payment timing prediction',
      'Delinquency risk scoring',
      'Personalized collection communications',
      'Dispute likelihood prediction',
      'Cash flow forecasting with confidence bands',
    ],
    useCases: [
      'Reduce days sales outstanding',
      'Prioritize high-impact accounts',
      'Automate tailored outreach',
      'Predict and deflect disputes',
      'Forecast AR-driven cash',
    ],
    benefits: [
      'Collections effort focused where it matters',
      'Faster cash realization',
      'Lower manual workload per account',
      'Fewer disputes and write-offs',
    ],
    metrics: [
      '15-25% DSO reduction',
      '20-30% improvement in collection effectiveness',
      '40% staff productivity lift',
      '10-20% bad debt reduction',
    ],
    bestFor: 'Any AR-heavy business seeking faster cash and leaner collections.',
    gradient: 'linear-gradient(135deg, #025082 0%, #0369a1 100%)',
    icon: '💵',
  },
  {
    id: 'procurement-intelligence',
    name: 'Procurement Intelligence Agent',
    slug: 'procurement-intelligence-agent',
    tagline: 'Spend visibility, supplier intelligence, and negotiation support.',
    description:
      'Consolidates and classifies spend, scores suppliers, surfaces savings, and arms teams with negotiation benchmarks.',
    longDescription:
      'Procurement teams lack clear, timely visibility into spend and supplier performance. This agent delivers clean classification, supplier scoring, and actionable savings plays—so negotiations start from strength.',
    category: 'operations',
    industries: ['manufacturing', 'financial', 'healthcare', 'insurance', 'retail'],
    features: [
      'AI spend classification',
      'Supplier scoring and risk assessment',
      'Savings opportunity identification',
      'Market and pricing intelligence',
      'Contract term extraction and compliance tracking',
    ],
    useCases: [
      'Unify and classify fragmented spend data',
      'Identify consolidation and rate opportunities',
      'Benchmark suppliers before negotiation',
      'Monitor contract compliance and obligations',
    ],
    benefits: [
      'Higher addressable spend under management',
      'Material sourcing savings',
      'Supplier base rationalization',
      'Better contract compliance',
    ],
    metrics: [
      '40-60% increase in addressed spend',
      '5-15% sourcing savings on addressed categories',
      '20-30% supplier count reduction',
      '25% contract compliance improvement',
    ],
    gradient: 'linear-gradient(135deg, #0f4c75 0%, #1b262c 100%)',
    icon: '📦',
  },
  {
    id: 'sales-forecasting',
    name: 'Sales Forecasting Agent',
    slug: 'sales-forecasting-agent',
    tagline: 'Probability-weighted pipeline and revenue forecasts with early warning.',
    description:
      'Analyzes pipeline signals, historical patterns, and external context to deliver accurate forecasts and spotlight at-risk deals.',
    longDescription:
      'Forecast accuracy averages below 50%. This agent scores deals, models scenarios, and detects risk early—so leadership can plan confidently and intervene before slips.',
    category: 'analytics',
    industries: ['saas', 'b2b', 'financial', 'insurance', 'home'],
    features: [
      'Deal health scoring',
      'Scenario-based forecast modeling with confidence intervals',
      'Rep and team productivity insights',
      'Pipeline health leading indicators',
      'Accuracy tracking and variance explanations',
    ],
    useCases: [
      'Improve forecast accuracy',
      'Identify at-risk deals weeks earlier',
      'Coach reps with productivity patterns',
      'Align inventory and capacity to demand',
    ],
    benefits: [
      'More reliable forecasts for board and ops planning',
      'Earlier interventions on slipping deals',
      'Higher sales management efficiency',
    ],
    metrics: [
      '25-40% forecast accuracy improvement',
      '100% pipeline coverage vs. selective review',
      '3-4 week earlier risk detection',
      '30% sales management time savings',
    ],
    gradient: 'linear-gradient(135deg, #025082 0%, #013a5f 100%)',
    icon: '📈',
  },
  {
    id: 'employee-onboarding',
    name: 'Employee Onboarding Agent',
    slug: 'employee-onboarding-agent',
    tagline: 'Personalized onboarding journeys and 24/7 answers that cut time-to-productivity.',
    description:
      'Guides new hires with tailored paths, answers questions instantly, coordinates tasks, and monitors sentiment to reduce early attrition.',
    longDescription:
      'Onboarding is often fragmented and slow. This agent orchestrates tasks across stakeholders, provides instant Q&A, and flags stuck or unhappy new hires so they ramp faster and stay longer.',
    category: 'operations',
    industries: ['saas', 'professional-services', 'healthcare', 'financial', 'home'],
    features: [
      'Role-based onboarding journeys',
      'Knowledge-base Q&A for policies and processes',
      'Task coordination and follow-up',
      'Mentor matching recommendations',
      'Sentiment monitoring for early risk detection',
    ],
    useCases: [
      'Shorten time-to-productivity',
      'Reduce HR coordination load',
      'Improve new hire experience',
      'Lower 90-day turnover',
    ],
    benefits: [
      'Faster ramp and contribution',
      'Less manual HR follow-up',
      'Happier new hires with clearer guidance',
      'Reduced early attrition',
    ],
    metrics: [
      '30-40% reduction in time-to-productivity',
      '50% HR time reduction per hire',
      '25% new hire satisfaction lift',
      '20% reduction in 90-day turnover',
    ],
    gradient: 'linear-gradient(135deg, #0369a1 0%, #0f4c75 100%)',
    icon: '🎒',
  },
  {
    id: 'competitive-intelligence',
    name: 'Competitive Intelligence Agent',
    slug: 'competitive-intelligence-agent',
    tagline: 'Continuous monitoring, signal detection, and battlecard generation.',
    description:
      'Tracks competitors across web, news, social, jobs, and filings; interprets changes; and delivers alerts and sales-ready intelligence.',
    longDescription:
      'Competitive monitoring is often sporadic. This agent automates coverage, detects meaningful changes, and synthesizes insights into concise briefings and battlecards for sales and product teams.',
    category: 'analytics',
    industries: ['saas', 'b2b', 'financial', 'insurance', 'retail'],
    features: [
      'Multi-source monitoring (web, news, social, jobs, filings, patents)',
      'Change detection and categorization',
      'Signal interpretation for significance',
      'Automatic battlecard updates',
      'Market mapping and alerting',
    ],
    useCases: [
      'Keep a live view of competitor moves',
      'Arm sales with current battlecards',
      'Spot market shifts early',
      'Inform product and pricing decisions',
    ],
    benefits: [
      'Full competitive coverage without manual effort',
      'Faster detection of major moves',
      'Higher win rates in competitive deals',
      '3x productivity for intel teams',
    ],
    metrics: [
      '100% coverage of defined competitors',
      '80% faster major-move detection',
      '15-25% win-rate improvement on competitive deals',
      '3x intelligence output',
    ],
    gradient: 'linear-gradient(135deg, #025082 0%, #0369a1 100%)',
    icon: '🛰️',
  },
  {
    id: 'it-service-desk',
    name: 'IT Service Desk Agent',
    slug: 'it-service-desk-agent',
    tagline: 'Automated resolution for common IT issues with smart escalation.',
    description:
      'Deflects repetitive tickets, guides self-service, routes complex issues, and learns from resolutions to expand coverage.',
    longDescription:
      'Service desks drown in password resets and basic troubleshooting. This agent resolves common requests instantly, routes complex ones with context, and spots emerging issues before they spike volume.',
    category: 'operations',
    industries: ['saas', 'professional-services', 'financial', 'healthcare', 'insurance'],
    features: [
      'Automated resolution for common IT tasks',
      'Natural language understanding of user issues',
      'Guided troubleshooting flows',
      'Smart escalation with context',
      'Trend analysis to detect systemic problems',
    ],
    useCases: [
      'Deflect repetitive tickets',
      'Shorten mean time to resolution',
      'Improve user satisfaction',
      'Identify emerging IT incidents early',
    ],
    benefits: [
      '40-60% ticket deflection',
      '50% faster resolution time',
      'Higher satisfaction with 24/7 responses',
      'More productive service desk teams',
    ],
    metrics: [
      '40-60% deflection rate',
      '50% MTTR reduction',
      '20% user satisfaction lift',
      '30-40% service desk productivity increase',
    ],
    gradient: 'linear-gradient(135deg, #0f4c75 0%, #1b262c 100%)',
    icon: '🛠️',
  },
  {
    id: 'regulatory-change',
    name: 'Regulatory Change Agent',
    slug: 'regulatory-change-agent',
    tagline: 'Monitor, assess, and track regulatory changes end-to-end.',
    description:
      'Continuously scans regulatory sources, filters relevance, maps impact, and tracks compliance actions with audit-ready documentation.',
    longDescription:
      'Regulatory change is constant. This agent ensures nothing is missed, quickly assesses applicability, drives action plans, and maintains evidence for audits.',
    category: 'compliance',
    industries: ['financial', 'healthcare', 'insurance'],
    features: [
      'Multi-source regulatory monitoring',
      'Applicability and relevance filtering',
      'Impact mapping to policies and processes',
      'Action and compliance tracking',
      'Audit trail documentation',
    ],
    useCases: [
      'Monitor evolving regulations continuously',
      'Assess impact fast and assign actions',
      'Reduce audit findings and compliance gaps',
      'Maintain evidence for regulators',
    ],
    benefits: [
      'Full coverage of relevant sources',
      'Much faster assessment cycles',
      'Fewer audit surprises',
      'Higher compliance team throughput',
    ],
    metrics: [
      '100% coverage of relevant regulatory sources',
      '80% reduction in time to assess new rules',
      '50% reduction in audit-discovered gaps',
      '40% compliance productivity increase',
    ],
    gradient: 'linear-gradient(135deg, #025082 0%, #013a5f 100%)',
    icon: '🛡️',
  },
];

export function getAgentBySlug(slug: string): Agent | undefined {
  return agents.find((agent) => agent.slug === slug);
}

export function getAgentsByCategory(category: string): Agent[] {
  if (category === 'all') return agents;
  return agents.filter((agent) => agent.category === category);
}

export function getAgentsByIndustry(industryId: string): Agent[] {
  return agents.filter((agent) => agent.industries.includes(industryId));
}

export const agentCategories = [
  { id: 'all', label: 'All Agents', description: 'View all available AI agents' },
  { id: 'revenue', label: 'Revenue', description: 'Agents that drive revenue growth' },
  { id: 'operations', label: 'Operations', description: 'Agents that streamline operations' },
  { id: 'compliance', label: 'Compliance', description: 'Agents for regulatory compliance' },
  { id: 'customer-experience', label: 'Customer Experience', description: 'Agents that improve customer experience' },
  { id: 'analytics', label: 'Analytics', description: 'Agents for data analysis and insights' },
];

