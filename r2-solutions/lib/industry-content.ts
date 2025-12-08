export interface IndustryEnhancedContent {
  hero: {
    headline: string;
    subheadline: string;
  };
  challenge: {
    title: string;
    description: string;
    keyChallenges: string[];
  };
  howWeHelp: {
    sections: Array<{
      title: string;
      description: string;
      result: string;
    }>;
  };
  deliverables: string[];
  featuredAgents?: Array<{
    name: string;
    description: string;
  }>;
  caseStudy?: {
    title: string;
    situation: string;
    approach: string;
    results: string[];
  };
}

export const industryEnhancedContent: Record<string, IndustryEnhancedContent> = {
  'professional-services': {
    hero: {
      headline: 'AI-Powered Professional Services',
      subheadline: 'Transform how law firms, accounting practices, and consultancies deliver value—AI that amplifies expertise while protecting the human judgment that clients pay for.',
    },
    challenge: {
      title: 'The Professional Services Challenge',
      description: 'Professional services firms face a fundamental tension: clients demand both expertise and efficiency. They want senior-level insight at competitive rates. They expect rapid turnarounds without sacrificing quality. And increasingly, they question whether traditional billing models reflect the value actually delivered.\n\nAI offers a path through this tension. Not by replacing professionals—the expertise remains essential—but by amplifying their capacity and eliminating the non-value-added work that inflates costs and timelines.',
      keyChallenges: [
        'Associate and junior staff time consumed by research and document review',
        'Knowledge trapped in individual practitioners rather than institutionalized',
        'Billing pressures that reward inefficiency over client outcomes',
        'Administrative overhead that distracts from client-facing work',
        'Competitive pressure from alternative service providers and AI-native entrants',
      ],
    },
    howWeHelp: {
      sections: [
        {
          title: 'Knowledge Intelligence',
          description: 'Transform institutional knowledge from an individual asset to an organizational one. AI-powered systems that capture expertise, enable natural language queries against historical work product, and surface relevant precedents for new matters.',
          result: 'Junior professionals perform like experienced ones. Experienced professionals are freed from repetitive research. Institutional knowledge survives personnel transitions.',
        },
        {
          title: 'Document Intelligence',
          description: 'Professional services run on documents—contracts, filings, reports, correspondence. AI-powered document analysis accelerates review, extraction, and generation while maintaining the quality standards clients expect.',
          result: 'Document review time reduced 60-80%. Generation of routine documents automated. Professionals focus on judgment and strategy rather than document mechanics.',
        },
        {
          title: 'Research Acceleration',
          description: 'Legal research. Accounting guidance. Industry analysis. Market intelligence. AI can process and synthesize information faster than any human team—surfacing relevant findings for professional judgment.',
          result: 'Research timelines compressed from days to hours. Broader, more comprehensive research without proportional cost increases.',
        },
        {
          title: 'Practice Management Intelligence',
          description: 'AI-powered matter management, resource allocation, and profitability analysis. Understand which work is profitable, which clients are growing, and where capacity exists.',
          result: 'Better resource utilization. Improved realization. Data-driven practice development.',
        },
      ],
    },
    deliverables: [
      'Knowledge Management Platform: AI-powered institutional knowledge capture and retrieval',
      'Document Analysis Suite: Intelligent document review, extraction, and generation',
      'Research Acceleration Tools: AI-assisted research across legal, accounting, and business domains',
      'Practice Analytics: Profitability, utilization, and client intelligence',
      'Client Portal: AI-enhanced client communication and matter tracking',
    ],
    featuredAgents: [
      {
        name: 'Document Analyzer Agent',
        description: 'Review contracts, filings, and correspondence at scale. Extract key provisions, identify issues, compare across documents.',
      },
      {
        name: 'Research Assistant Agent',
        description: 'AI-powered research that synthesizes findings from multiple sources into actionable summaries.',
      },
      {
        name: 'Knowledge Intelligence Agent',
        description: 'Query institutional knowledge in natural language. Find relevant precedents, prior work, and expertise.',
      },
    ],
    caseStudy: {
      title: 'Regional Law Firm Transformation',
      situation: '120-attorney firm spending 40% of associate time on document review and research. Client pressure on fees. Difficulty retaining talent frustrated by non-value-added work.',
      approach: 'Deployed document intelligence for contract review and due diligence. Implemented knowledge management platform with 15 years of firm work product. Created AI-assisted research tools for litigation and transactional matters.',
      results: [
        'Associate time on document review reduced 65%',
        'Client matter timelines compressed 40%',
        'Improved realization on fixed-fee matters',
        'Associate satisfaction scores improved 30 points',
      ],
    },
  },
  'construction-infrastructure': {
    hero: {
      headline: 'Building Smarter with AI',
      subheadline: 'From preconstruction to closeout, AI solutions that reduce risk, improve margins, and keep projects on schedule and budget.',
    },
    challenge: {
      title: 'The Construction Challenge',
      description: 'Construction is one of the least digitized industries—and the opportunity costs are enormous. Project delays, cost overruns, safety incidents, and rework consume 30% or more of project value. Information silos between stakeholders create friction at every stage.\n\nAI can transform construction, but implementation must respect the industry\'s realities: distributed workforces, complex project structures, and technology environments that vary dramatically across job sites and trade partners.',
      keyChallenges: [
        'Project estimation inaccuracies leading to margin erosion',
        'Schedule delays cascading across complex project networks',
        'Safety incidents despite extensive compliance programs',
        'Document and drawing management across project stakeholders',
        'Skilled labor shortages and knowledge transfer challenges',
      ],
    },
    howWeHelp: {
      sections: [
        {
          title: 'Preconstruction Intelligence',
          description: 'AI-powered estimation that learns from historical projects. Bid analysis that identifies risk factors and margin opportunities. Scope review that catches gaps before they become change orders.',
          result: 'Estimate accuracy improvement of 15-25%. Bid win rates increased through better risk-adjusted pricing.',
        },
        {
          title: 'Project Execution Optimization',
          description: 'Real-time schedule analysis that predicts delays before they happen. Resource optimization across projects. Quality monitoring that catches issues early.',
          result: 'Schedule adherence improved 20-30%. Rework reduced through early defect detection.',
        },
        {
          title: 'Safety Intelligence',
          description: 'Predictive safety analytics that identify high-risk conditions before incidents occur. AI-powered safety observation analysis. Leading indicator monitoring.',
          result: 'Recordable incident rates reduced 25-40%. Insurance costs decreased through improved experience modification rates.',
        },
        {
          title: 'Document and Drawing Intelligence',
          description: 'AI-powered processing of RFIs, submittals, and change orders. Drawing analysis that identifies conflicts and discrepancies. Natural language queries against project documentation.',
          result: 'RFI response time improved 50%. Drawing conflicts identified during preconstruction rather than field discovery.',
        },
      ],
    },
    deliverables: [
      'AI Estimation Platform: Historical learning and risk analysis for project estimation',
      'Schedule Intelligence: Predictive schedule analysis and optimization',
      'Safety Analytics: Leading indicator monitoring and predictive risk assessment',
      'Document Management AI: Intelligent processing of project documentation',
      'Project Performance Dashboard: Real-time visibility across portfolio',
    ],
    featuredAgents: [
      {
        name: 'Document Analyzer Agent',
        description: 'Process RFIs, submittals, change orders, and contracts. Extract key terms and surface issues requiring attention.',
      },
      {
        name: 'Scheduling Optimization Agent',
        description: 'Analyze schedule impacts and optimize resource allocation across projects.',
      },
      {
        name: 'Quality Monitoring Agent',
        description: 'Analyze inspection data, photo documentation, and field reports to identify quality trends and predict issues.',
      },
    ],
    caseStudy: {
      title: 'Commercial General Contractor',
      situation: 'Mid-sized GC with consistent margin erosion on projects. Estimation accuracy below industry benchmarks. Safety program struggling to reduce incident rates.',
      approach: 'Deployed AI estimation tools trained on 10 years of project history. Implemented predictive schedule analytics on active projects. Created safety intelligence platform analyzing near-miss and observation data.',
      results: [
        'Estimation accuracy improved 20%',
        'Two major schedule delays predicted and mitigated',
        'TRIR improved 35% in first year',
        'Margin improvement of 2.3 points across project portfolio',
      ],
    },
  },
  'hospitality-travel': {
    hero: {
      headline: 'AI for Exceptional Experiences',
      subheadline: 'Transform guest experiences and operational efficiency with AI solutions designed for hotels, restaurants, and travel companies.',
    },
    challenge: {
      title: 'The Hospitality Challenge',
      description: 'Hospitality faces the ultimate personalization challenge: delivering exceptional experiences at scale, often with high staff turnover and thin margins. The post-pandemic environment has intensified pressure on labor efficiency while guest expectations continue rising.\n\nAI enables the resolution of this tension—delivering personalized service more efficiently, optimizing pricing in real-time, and reducing the operational complexity that drags on profitability.',
      keyChallenges: [
        'Labor costs rising while availability shrinks',
        'Guest expectations for personalized experiences',
        'Revenue management complexity across channels and segments',
        'Operational inefficiency across distributed properties',
        'Reputation management across digital platforms',
      ],
    },
    howWeHelp: {
      sections: [
        {
          title: 'Revenue Optimization',
          description: 'AI-powered dynamic pricing that responds to demand signals in real-time. Competitive intelligence that informs positioning. Channel optimization that maximizes revenue while managing costs.',
          result: 'RevPAR improvement of 5-12%. Channel mix optimization reducing distribution costs.',
        },
        {
          title: 'Guest Intelligence',
          description: 'Unified guest profiles that enable personalized service across touchpoints. Sentiment analysis that surfaces issues before they become reviews. Predictive analytics that anticipate guest needs.',
          result: 'Guest satisfaction scores improved 10-15%. Repeat booking rates increased 20%.',
        },
        {
          title: 'Operations Efficiency',
          description: 'AI-powered scheduling that matches labor to demand patterns. Predictive maintenance for facility equipment. Inventory optimization for F&B operations.',
          result: 'Labor efficiency improved 15-20%. Maintenance costs reduced through predictive approaches.',
        },
        {
          title: 'Reputation Management',
          description: 'AI analysis of reviews and social mentions across platforms. Automated response drafting for common feedback. Competitive intelligence on market positioning.',
          result: 'Review response times reduced 80%. Reputation scores improved through proactive management.',
        },
      ],
    },
    deliverables: [
      'Revenue Management System: AI-powered dynamic pricing and channel optimization',
      'Guest Intelligence Platform: Unified profiles with personalization recommendations',
      'Labor Optimization: Predictive scheduling based on demand patterns',
      'Reputation Analytics: Comprehensive monitoring with response assistance',
      'Operations Dashboard: Real-time visibility across properties',
    ],
    featuredAgents: [
      {
        name: 'Revenue Intelligence Agent',
        description: 'Real-time pricing optimization based on demand, competition, and booking patterns.',
      },
      {
        name: 'Customer Engagement Agent',
        description: 'Personalized guest communication across the journey—pre-arrival, on-property, post-stay.',
      },
      {
        name: 'Scheduling Optimization Agent',
        description: 'AI-powered labor scheduling matched to predicted demand.',
      },
    ],
  },
  'agriculture-food': {
    hero: {
      headline: 'AI for Agriculture and Food',
      subheadline: 'From field to fork, AI solutions that improve yields, reduce waste, and create transparency across the food system.',
    },
    challenge: {
      title: 'The Agriculture Challenge',
      description: 'Agriculture feeds the world—but faces mounting challenges. Climate volatility creates yield uncertainty. Input costs pressure margins. Labor availability constrains operations. And consumers increasingly demand transparency about how their food is produced.\n\nAI offers solutions at every stage: precision agriculture that optimizes inputs, predictive analytics that reduce uncertainty, supply chain intelligence that improves efficiency, and traceability systems that create trust.',
      keyChallenges: [
        'Climate variability creating yield unpredictability',
        'Input cost optimization (seed, fertilizer, chemicals, water)',
        'Labor availability and efficiency',
        'Supply chain waste and inefficiency',
        'Consumer demand for transparency and sustainability',
      ],
    },
    howWeHelp: {
      sections: [
        {
          title: 'Precision Agriculture',
          description: 'AI-powered analysis of field conditions, weather patterns, and crop health. Prescriptive recommendations for input application. Yield prediction that enables better planning and marketing.',
          result: 'Input costs reduced 15-25%. Yield variability decreased. Sustainability metrics improved.',
        },
        {
          title: 'Operations Optimization',
          description: 'Equipment utilization analysis. Labor scheduling optimization. Harvest logistics planning. Storage and inventory management.',
          result: 'Operational efficiency improved 20-30%. Spoilage and waste reduced.',
        },
        {
          title: 'Supply Chain Intelligence',
          description: 'Demand forecasting across customers and channels. Logistics optimization. Supplier performance monitoring. Traceability systems.',
          result: 'Distribution costs reduced. Waste decreased. Customer service levels improved.',
        },
        {
          title: 'Quality and Compliance',
          description: 'AI-powered quality inspection. Compliance monitoring for food safety regulations. Automated documentation and reporting.',
          result: 'Quality incidents reduced. Compliance costs decreased. Audit readiness improved.',
        },
      ],
    },
    deliverables: [
      'Precision Agriculture Platform: Field-level analysis and recommendations',
      'Operations Management System: Equipment, labor, and logistics optimization',
      'Supply Chain Analytics: Demand forecasting and distribution optimization',
      'Quality Management System: AI-powered inspection and compliance',
      'Traceability Solution: Farm-to-consumer transparency',
    ],
    featuredAgents: [
      {
        name: 'Quality Monitoring Agent',
        description: 'AI-powered inspection and quality prediction across production processes.',
      },
      {
        name: 'Scheduling Optimization Agent',
        description: 'Labor and equipment scheduling based on crop conditions and weather forecasts.',
      },
      {
        name: 'Document Analyzer Agent',
        description: 'Process compliance documentation, certifications, and supplier agreements.',
      },
    ],
  },
  'sports-entertainment': {
    hero: {
      headline: 'AI for Sports and Entertainment',
      subheadline: 'Transform fan engagement, optimize operations, and unlock new revenue with AI solutions designed for teams, venues, and entertainment companies.',
    },
    challenge: {
      title: 'The Sports & Entertainment Challenge',
      description: 'The business of sports and entertainment has evolved beyond game day or show night. Organizations must engage fans across digital platforms, optimize stadium and venue operations, maximize sponsorship and media value, and create experiences that compete with at-home alternatives.\n\nAI enables this evolution—personalizing fan engagement at scale, optimizing pricing in real-time, improving operational efficiency, and generating insights from the massive data streams these businesses produce.',
      keyChallenges: [
        'Fan engagement across proliferating digital channels',
        'Ticket pricing optimization in dynamic markets',
        'Stadium/venue operational efficiency',
        'Sponsorship valuation and activation',
        'Content personalization and distribution',
      ],
    },
    howWeHelp: {
      sections: [
        {
          title: 'Fan Intelligence',
          description: 'Unified fan profiles across ticketing, merchandise, digital, and in-venue data. Personalized engagement across channels. Predictive analytics for churn and lifetime value.',
          result: 'Fan engagement metrics improved 25-40%. Revenue per fan increased through personalized offers.',
        },
        {
          title: 'Revenue Optimization',
          description: 'Dynamic ticket pricing based on real-time demand. Merchandise optimization. Concession and in-venue revenue maximization.',
          result: 'Ticket revenue increased 8-15%. Secondary market capture improved. In-venue spend per attendee increased.',
        },
        {
          title: 'Operations Excellence',
          description: 'Staffing optimization for events. Ingress and egress flow management. Facility maintenance prediction. Energy optimization.',
          result: 'Event operating costs reduced 15-20%. Fan experience scores improved.',
        },
        {
          title: 'Sponsorship Intelligence',
          description: 'AI-powered valuation of sponsorship inventory. Activation effectiveness measurement. Sponsor matching and prospecting.',
          result: 'Sponsorship revenue increased through better valuation and activation. Sponsor retention improved.',
        },
      ],
    },
    deliverables: [
      'Fan Data Platform: Unified profiles with engagement intelligence',
      'Dynamic Pricing Engine: Real-time ticket and inventory pricing',
      'Event Operations Suite: Staffing, flow, and facility optimization',
      'Sponsorship Analytics: Valuation, activation, and effectiveness measurement',
      'Content Intelligence: Personalization and distribution optimization',
    ],
    featuredAgents: [
      {
        name: 'Revenue Intelligence Agent',
        description: 'Dynamic pricing and revenue optimization across ticket, merchandise, and concession categories.',
      },
      {
        name: 'Customer Engagement Agent',
        description: 'Personalized fan communication across digital channels and lifecycle stages.',
      },
      {
        name: 'Scheduling Optimization Agent',
        description: 'Event staffing and operations scheduling based on predicted attendance and patterns.',
      },
    ],
  },
};
