export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content?: string;
  contentBlocks?: ContentBlock[];
  author: string;
  authorRole: string;
  publishedDate: string;
  category: 'ai-strategy' | 'industry-insights' | 'technology' | 'case-studies' | 'thought-leadership';
  tags: string[];
  image?: string;
  gradient?: string;
  featured?: boolean;
  readTime?: number;
}

export type ContentBlock =
  | { type: 'heading'; text: string }
  | { type: 'subheading'; text: string }
  | { type: 'paragraph'; text: string }
  | { type: 'list'; title?: string; items: string[] }
  | { type: 'quote'; text: string };

export const articles: Article[] = [
  {
    id: '1',
    slug: 'the-2-7-trillion-question-why-most-ai-investments-fail-to-deliver',
    title: 'The $2.7 Trillion Question: Why Most AI Investments Fail to Deliver',
    excerpt:
      "AI investment is exploding, yet 87% of projects never reach production. Here's what separates expensive experiments from systems that deliver value.",
    author: 'R² Solutions Team',
    authorRole: 'Strategy & AI Practice',
    publishedDate: '2024-12-12',
    category: 'ai-strategy',
    tags: ['AI Strategy', 'Execution', 'Private Equity', 'Value Creation'],
    image: '/images/yellow-glow-road.png',
    gradient: 'linear-gradient(135deg, #025082, #013a5f)',
    featured: true,
    readTime: 12,
    contentBlocks: [
      { type: 'paragraph', text: 'Global AI investment is projected to exceed $2.7 trillion by 2032, yet 87% of AI projects never make it to production. We analyzed 340 initiatives across 127 companies to learn why.' },
      { type: 'heading', text: 'The Consulting Trap' },
      { type: 'paragraph', text: "Traditional consulting is misaligned with AI outcomes. Strategies end in decks, not production systems; 23% success with this model versus 71% when implementation is integrated from day one." },
      { type: 'list', title: 'Why the trap persists', items: [
        'Deliverable problem: value is created in production, not PowerPoint',
        'Timeline mismatch: 12–16 week strategy phases + 6–12 month builds miss competitive windows',
        'Expertise gap: strategists and data scientists rarely build production-grade systems that survive legacy environments'
      ]},
      { type: 'heading', text: 'Three Patterns of AI Success' },
      { type: 'list', title: 'Patterns we observed', items: [
        'Ruthless prioritization: depth over breadth; one focused use case beat 47 scattered ideas',
        'Integration over innovation: mature tech integrated deeply beats novel pilots that stay siloed',
        'Organizational readiness: change management, ownership, and feedback loops drive adoption'
      ]},
      { type: 'paragraph', text: 'Successful companies spend materially on change enablement—up to 30% of AI budget—to achieve rapid adoption.' },
      { type: 'heading', text: "The Builder's Advantage" },
      { type: 'paragraph', text: 'AI success needs partners who blend strategy with implementation, closing the handoff gap. Recommendations must ship as working systems that deliver measurable value.' },
      { type: 'heading', text: 'Implications for Private Equity' },
      { type: 'list', items: [
        'Due diligence: verify deployable capability, not just AI claims or POCs',
        'Value creation: bake implementation into the 100-day and portfolio playbook',
        'Exit: buyers now differentiate real capability from AI theater'
      ]},
      { type: 'heading', text: 'The Path Forward' },
      { type: 'paragraph', text: 'Winning firms align around builders who move from opportunity to production without handoff gaps. The question is no longer whether AI will transform business—it’s whether your partners can actually build it.' }
    ],
  },
  {
    id: '2',
    slug: 'portfolio-company-ai-playbook-100-day-framework',
    title: 'The Portfolio Company AI Playbook: A 100-Day Framework',
    excerpt:
      'A PE-focused, four-phase sprint that scans, assesses readiness, deploys in 25 days, and scales AI across the portfolio.',
    author: 'R² Solutions Team',
    authorRole: 'Private Equity Practice',
    publishedDate: '2024-12-05',
    category: 'ai-strategy',
    tags: ['Private Equity', '100-Day Plan', 'Value Creation', 'Deployment'],
    image: '/images/r2-billboard.png',
    gradient: 'linear-gradient(135deg, #0369a1, #025082)',
    featured: true,
    readTime: 11,
    contentBlocks: [
      { type: 'paragraph', text: 'Slide 31 says “explore AI opportunities.” Twelve months later, nothing shipped. This framework delivers working AI in 100 days for PE-backed companies.' },
      { type: 'heading', text: 'Days 1–15: Opportunity Scan' },
      { type: 'paragraph', text: 'Start from value creation priorities, not shiny AI ideas. Map automation, decisioning, document extraction, and customer interaction opportunities to thesis targets.' },
      { type: 'list', title: 'Scan essentials', items: [
        'Interview front-line operators to surface high-friction work',
        'Produce 15–25 mapped use cases with value and complexity scores'
      ]},
      { type: 'heading', text: 'Days 16–35: Readiness Assessment' },
      { type: 'list', title: 'Score opportunities on', items: [
        'Data readiness: accessibility, quality, history, governance',
        'Technical readiness: stack, integrations, cloud posture, support capacity',
        'Organizational readiness: sponsorship, resistance, compliance, change muscle'
      ]},
      { type: 'heading', text: 'Days 36–60: Rapid Deployment (25 Days)' },
      { type: 'list', title: 'Weekly cadence', items: [
        'Week 1: Solution design + data integration + success metrics',
        'Week 2: Core build using proven components (no R&D vanity)',
        'Week 3: Test, refine, train pilot users',
        'Week 4: Production pilot with real users and data'
      ]},
      { type: 'heading', text: 'Days 61–85: Measure & Optimize' },
      { type: 'list', title: 'Measure what matters', items: [
        'Efficiency: time saved, tasks automated, errors reduced',
        'Financial: cost, revenue, working capital, margin impact',
        'Quality: accuracy, consistency, satisfaction',
        'Adoption: engagement, workflow fit, resistance signals'
      ]},
      { type: 'heading', text: 'Days 86–100: Scale & Systematize' },
      { type: 'list', items: [
        'Roll to new users/units; document processes and training',
        'Establish support, feedback loops, and governance',
        'Codify what worked and queue next opportunities'
      ]},
      { type: 'heading', text: 'Portfolio Multiplier' },
      { type: 'paragraph', text: 'Reusable solutions compound across a portfolio—turn single-company wins into platform capability.' },
      { type: 'paragraph', text: 'Results to date: 73% of initiatives reach production inside 100 days; measurable ROI in 67 days on average; 47% efficiency lift in targeted processes.' }
    ],
  },
  {
    id: '3',
    slug: 'document-intelligence-400b-opportunity',
    title: 'Document Intelligence: The $400 Billion Opportunity Hiding in Your Filing Cabinets',
    excerpt:
      'Third-generation document AI reads, understands, and answers questions—unlocking massive efficiency and quality gains across contracts, insurance, finance, healthcare, and legal.',
    author: 'R² Solutions Team',
    authorRole: 'AI & Automation Practice',
    publishedDate: '2024-11-20',
    category: 'industry-insights',
    tags: ['Document AI', 'Automation', 'Extraction', 'Compliance'],
    image: '/images/business-specific-ai.png',
    gradient: 'linear-gradient(135deg, #1e3a5f, #0c1929)',
    featured: true,
    readTime: 10,
    contentBlocks: [
      { type: 'paragraph', text: 'Enterprises manage hundreds of millions of documents; knowledge workers spend ~30% of their day searching and extracting. Document intelligence is the highest-ROI AI hiding in plain sight.' },
      { type: 'heading', text: 'The Evolution' },
      { type: 'list', items: [
        'Gen 1: OCR — reads characters, not meaning; brittle for variation',
        'Gen 2: Template extraction — rule-based, breaks on layout changes',
        'Gen 3: AI understanding — recognizes semantics, layout-agnostic, answers questions with citations'
      ]},
      { type: 'heading', text: 'Five High-Value Applications' },
      { type: 'list', items: [
        'Contract analysis: extract terms, obligations, renewals; 70–80% review time reduction',
        'Insurance submissions: parse ACORD, loss runs; 50–70% faster, 40–60% more capacity',
        'Financial docs: invoices/loans with 99%+ accuracy; 60–80% cost reduction',
        'Healthcare documentation: chart abstraction, billing optimization; 75%+ time savings',
        'Legal discovery/diligence: surface relevance and Q&A; 60–80% time reduction'
      ]},
      { type: 'heading', text: 'Implementation Reality' },
      { type: 'list', items: [
        'Data quality/training examples matter, especially for specialized docs',
        'Integration is 50%+ of effort; extracted data must hit downstream systems',
        'Exception handling and human-in-the-loop are mandatory',
        'Change management: new workflows and roles drive adoption'
      ]},
      { type: 'heading', text: 'Build vs. Buy' },
      { type: 'paragraph', text: 'Start with pre-built where possible, extend with platforms, build custom only when necessary—balancing speed with flexibility.' },
      { type: 'heading', text: 'Getting Started' },
      { type: 'list', items: [
        'Inventory high-volume document processes and quantify time × cost',
        'Assess digital readiness, integration points, and training data',
        'Prioritize one high-value, high-readiness use case; prove value, then expand'
      ]}
    ],
  },
  {
    id: '4',
    slug: 'the-ai-talent-paradox',
    title: "The AI Talent Paradox: Why Hiring Data Scientists Won't Solve Your AI Problem",
    excerpt:
      'Headcount is not capability. Closing the integration, business context, and maintenance gaps requires a different operating model.',
    author: 'R² Solutions Team',
    authorRole: 'People & Organization Practice',
    publishedDate: '2024-11-12',
    category: 'thought-leadership',
    tags: ['Talent', 'Operating Model', 'AI Teams', 'Change'],
    image: '/images/industry-specific-ai.png',
    gradient: 'linear-gradient(135deg, #0f4c75, #1b262c)',
    featured: true,
    readTime: 8,
    contentBlocks: [
      { type: 'paragraph', text: 'Companies are hiring AI talent at record pace, yet 87% of projects still fail. The paradox: talent without the right model doesn’t ship value.' },
      { type: 'heading', text: 'Why the Build-From-Scratch Model Fails' },
      { type: 'list', items: [
        'Integration gap: notebooks ≠ production systems with edge-case resilience',
        'Business context gap: optimized models that miss operational value',
        'Maintenance gap: drift, edge cases, and user support need ongoing ownership',
        'Scale gap: you cannot hire enough specialists to cover every use case'
      ]},
      { type: 'heading', text: 'The Right Model' },
      { type: 'list', items: [
        'Capability over headcount: strategy, integration, ops, and change in one system',
        'Build/buy balance: use pre-built and platforms; customize and integrate',
        'Partner leverage: implementation capacity plus specialized expertise',
        'Continuous development: AI fluency across executives, business teams, and IT'
      ]},
      { type: 'heading', text: 'The AI Operating Model' },
      { type: 'list', items: [
        'Lean CoE (3–10): roadmap, architecture, governance, partner management',
        'Embedded capability: business-embedded technologists who integrate and support',
        'Flexible partner network: surge capacity, specialized skills, pre-built solutions'
      ]},
      { type: 'heading', text: 'Practical Steps' },
      { type: 'list', items: [
        'Audit how talent spends time; reallocate from low-value toil',
        'Leverage partners and pre-built assets before hiring more',
        'Invest in integration capability and AI literacy across the org',
        'Restructure to embed AI where work happens'
      ]},
      { type: 'quote', text: 'The winners build the operating model that turns scarce talent into shipped capability.' }
    ],
  },
  {
    id: '5',
    slug: 'beyond-chatbots-enterprise-llm-applications',
    title: 'Beyond Chatbots: Enterprise Applications of Large Language Models',
    excerpt:
      'Chatbots are 5% of LLM value. The other 95% is document intelligence, knowledge retrieval, code, data cleanup, and decision support.',
    author: 'R² Solutions Team',
    authorRole: 'AI & Automation Practice',
    publishedDate: '2024-11-01',
    category: 'technology',
    tags: ['LLMs', 'RAG', 'Enterprise AI', 'Use Cases'],
    image: '/images/industry-specific-ai.png',
    gradient: 'linear-gradient(135deg, #0f4c75, #1b262c)',
    featured: false,
    readTime: 9,
    contentBlocks: [
      { type: 'paragraph', text: 'ChatGPT popularized conversation, but enterprise LLM value is far broader—understanding, generating, transforming, and reasoning over text and code.' },
      { type: 'heading', text: 'Ten High-Value Applications' },
      { type: 'list', items: [
        'Document understanding at scale (contracts, submissions, feedback)',
        'Knowledge base intelligence with natural language answers + citations',
        'Code generation/analysis for routine features and bug-finding',
        'Content generation/transformation for marketing and docs',
        'Data cleaning and normalization from messy inputs',
        'Customer communication analysis across channels',
        'Research acceleration for analysts and deal teams',
        'Process documentation and training material creation',
        'Email/communication drafting with context awareness',
        'Decision support and recommendations with synthesized evidence'
      ]},
      { type: 'heading', text: 'Implementation Considerations' },
      { type: 'list', items: [
        'Prompt design matters; treat it as a skill',
        'RAG to ground answers in your data',
        'Guardrails for accuracy, hallucination control, and human review',
        'Manage cost/latency at scale; optimize tokens',
        'Address security and privacy in architecture'
      ]},
      { type: 'paragraph', text: 'LLMs are a step-change in capability. Move quickly to capture productivity gains before competitors do.' }
    ],
  },
  {
    id: '6',
    slug: 'insurance-in-2030-five-predictions',
    title: 'Insurance in 2030: Five Predictions and What They Mean Today',
    excerpt:
      'Personal lines automation, AI-augmented underwriting, visible claims leakage, new risks, and fragmented distribution—carriers must prepare now.',
    author: 'R² Solutions Team',
    authorRole: 'Insurance Practice',
    publishedDate: '2024-10-18',
    category: 'industry-insights',
    tags: ['Insurance', 'Automation', 'Underwriting', 'Claims', 'Distribution'],
    image: '/images/industry-specific-ai.png',
    gradient: 'linear-gradient(135deg, #0f4c75, #1b262c)',
    featured: false,
    readTime: 9,
    contentBlocks: [
      { type: 'paragraph', text: 'Insurance will adapt to AI, but advantage accrues to carriers that prepare early. Five predictions for 2030—and actions to take now.' },
      { type: 'heading', text: 'Prediction 1: 80% of Personal Lines Will Be Fully Automated' },
      { type: 'paragraph', text: 'Quote-to-bind and service will be zero-touch for simple products. Human roles shift to exceptions and relationships.' },
      { type: 'heading', text: 'Prediction 2: Commercial Underwriting Is Universally AI-Augmented' },
      { type: 'paragraph', text: 'AI handles data gathering and risk analysis; underwriters focus on judgment. Data infrastructure becomes strategic.' },
      { type: 'heading', text: 'Prediction 3: Claims Leakage Becomes Visible—and Unacceptable' },
      { type: 'paragraph', text: 'Claims analytics will quantify leakage precisely, driving an arms race in SIU and settlement optimization.' },
      { type: 'heading', text: 'Prediction 4: New Risk Categories Emerge' },
      { type: 'paragraph', text: 'AI liability, autonomous incidents, synthetic identity, climate adaptation, and space commerce require rapid product development and new data partnerships.' },
      { type: 'heading', text: 'Prediction 5: Distribution Fragments' },
      { type: 'paragraph', text: 'Embedded, direct digital, affinity, and comparison channels grow alongside agents/brokers; API-first carriers win access.' },
      { type: 'heading', text: 'Preparation Imperative' },
      { type: 'paragraph', text: 'Invest now in automation, augmentation, analytics, product speed, and distribution flexibility—the catch-up cost later will be prohibitive.' }
    ],
  },
];

export const categories = [
  { id: 'ai-strategy', label: 'AI Strategy', description: 'Strategic insights on AI implementation and business impact' },
  { id: 'industry-insights', label: 'Industry Insights', description: 'Deep dives into industry-specific AI applications' },
  { id: 'technology', label: 'Technology', description: 'Technical deep dives and platform insights' },
  { id: 'case-studies', label: 'Case Studies', description: 'Real results from real implementations' },
  { id: 'thought-leadership', label: 'Thought Leadership', description: 'Perspectives on the future of AI in business' },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug);
}

export function getArticlesByCategory(category: string): Article[] {
  if (category === 'all') return articles;
  return articles.filter((article) => article.category === category);
}

export function getFeaturedArticles(): Article[] {
  return articles.filter((article) => article.featured);
}
