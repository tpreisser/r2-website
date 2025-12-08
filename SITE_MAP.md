# R² Solutions Website Site Map

**Generated:** December 2024  
**Framework:** Next.js 16 (App Router)  
**Base URL:** https://r2solutions.ai (or configured domain)

---

## Table of Contents
1. [Static Pages](#static-pages)
2. [Dynamic Routes](#dynamic-routes)
3. [Industry Pages](#industry-pages)
4. [Case Studies](#case-studies)
5. [Insights & Articles](#insights--articles)
6. [Agent Factory](#agent-factory)
7. [Site Structure Overview](#site-structure-overview)

---

## Static Pages

### Main Navigation
- **/** - Homepage
- **/about** - About Us
  - **/about/leadership** - Leadership Team
  - **/about/careers** - Careers
  - **/about/methodology** - Our Methodology
  - **/about/technology** - Technology
- **/services** - Services Overview
  - **/services/advisory** - Advisory Services
  - **/services/agent-factory** - Agent Factory Service
  - **/services/process-automation** - Process Automation
  - **/services/the-forge** - The Forge
- **/industries** - Industries Overview
- **/solutions** - Solutions Overview
- **/case-studies** - Case Studies Listing
- **/insights** - Insights & Research
- **/workshop** - Workshop Booking
- **/contact** - Contact Us
- **/agent-factory** - Agent Factory Overview (redirects to /services/agent-factory)

---

## Dynamic Routes

### Industry Detail Pages
**Pattern:** `/industries/[slug]`

Available industry slugs:
1. **insurance** - `/industries/insurance`
2. **healthcare** - `/industries/healthcare`
3. **financial-services** - `/industries/financial-services`
4. **home-services** - `/industries/home-services`
5. **professional-services** - `/industries/professional-services`
6. **construction-infrastructure** - `/industries/construction-infrastructure`
7. **hospitality-travel** - `/industries/hospitality-travel`
8. **agriculture-food** - `/industries/agriculture-food`
9. **sports-entertainment** - `/industries/sports-entertainment`

### Industry Sub-Pages
**Pattern:** `/industries/[slug]/how-we-apply-ai`
- Available for all industry slugs listed above

**Pattern:** `/industries/[slug]/integration`
- Available for all industry slugs listed above

### Sub-Industry Pages
**Pattern:** `/industries/[slug]/[subSlug]`

#### Insurance Sub-Industries
- `/industries/insurance/property-casualty`
- `/industries/insurance/life-health`
- `/industries/insurance/commercial`

#### Healthcare Sub-Industries
- `/industries/healthcare/hospitals`
- `/industries/healthcare/clinics`
- `/industries/healthcare/pharmaceutical`

#### Financial Services Sub-Industries
- `/industries/financial-services/wealth-management`
- `/industries/financial-services/banking`
- `/industries/financial-services/fintech`

#### Home Services Sub-Industries
- `/industries/home-services/hvac`
- `/industries/home-services/plumbing`
- `/industries/home-services/electrical`

---

## Case Studies

**Pattern:** `/case-studies/[slug]`

Available case study slugs:
1. **cassidy-hvac** - `/case-studies/cassidy-hvac`
   - *Cassidy HVAC Platform - PE-backed, multi-brand HVAC platform*
2. **regional-mga** - `/case-studies/regional-mga`
   - *Regional MGA Transformation - Automated submission processing*
3. **manufacturing-intelligence** - `/case-studies/manufacturing-intelligence`
   - *Manufacturing Intelligence - Predictive quality and maintenance*

---

## Insights & Articles

**Pattern:** `/insights/[slug]`

Available article slugs:
1. **the-2-7-trillion-question-why-most-ai-investments-fail-to-deliver** - `/insights/the-2-7-trillion-question-why-most-ai-investments-fail-to-deliver`
   - *Category: AI Strategy | Featured*
2. **portfolio-company-ai-playbook-100-day-framework** - `/insights/portfolio-company-ai-playbook-100-day-framework`
   - *Category: AI Strategy | Featured*
3. **document-intelligence-400b-opportunity** - `/insights/document-intelligence-400b-opportunity`
   - *Category: Industry Insights | Featured*
4. **the-ai-talent-paradox** - `/insights/the-ai-talent-paradox`
   - *Category: Thought Leadership | Featured*
5. **beyond-chatbots-enterprise-llm-applications** - `/insights/beyond-chatbots-enterprise-llm-applications`
   - *Category: Technology*
6. **insurance-in-2030-five-predictions** - `/insights/insurance-in-2030-five-predictions`
   - *Category: Industry Insights*

**Article Categories:**
- AI Strategy
- Industry Insights
- Technology
- Case Studies
- Thought Leadership

---

## Agent Factory

**Pattern:** `/agent-factory/[slug]`

Available agent slugs (organized by category):

### Customer Experience Agents
1. **ai-voice-ivr** - `/agent-factory/ai-voice-ivr`
   - *AI Voice IVR Agent - Transform your phone experience*
2. **ai-sms** - `/agent-factory/ai-sms`
   - *AI SMS Agent - Never miss a text conversation*
3. **customer-service-ai** - `/agent-factory/customer-service-ai`
   - *Customer Service AI - Resolve issues faster, everywhere*
4. **customer-onboarding-agent** - `/agent-factory/customer-onboarding-agent`
   - *Customer Onboarding Agent - Streamline onboarding*

### Revenue & Growth Agents
5. **cross-sell-agent** - `/agent-factory/cross-sell-agent`
   - *Cross-Sell Agent - Intelligent product recommendations*
6. **missed-opportunity-recovery** - `/agent-factory/missed-opportunity-recovery`
   - *Missed Opportunity Recovery Agent - Turn missed calls into booked revenue*
7. **quote-follow-up** - `/agent-factory/quote-follow-up`
   - *Quote Follow-Up Agent - Don't let big deals die*
8. **customer-reengagement** - `/agent-factory/customer-reengagement`
   - *Customer Re-Engagement Agent - Reactivate dormant customers*
9. **event-triggered-campaigns** - `/agent-factory/event-triggered-campaigns`
   - *Event-Triggered Campaign Engine - First to market when it matters*

### Operations & Productivity Agents
10. **csr-performance** - `/agent-factory/csr-performance`
    - *CSR Performance Intelligence - Turn every call into a coaching opportunity*
11. **document-processing** - `/agent-factory/document-processing`
    - *Document Processing Agent - Stop the paper chase*
12. **document-analyzer-agent** - `/agent-factory/document-analyzer-agent`
    - *Document Analyzer Agent - Understand any document, instantly*
13. **csr-performance-intel** - `/agent-factory/csr-performance-intel`
    - *CSR Performance Intelligence - QA every call, coach with data*
14. **appointment-scheduler-agent** - `/agent-factory/appointment-scheduler-agent`
    - *Appointment Scheduler Agent - Optimize scheduling and reduce no-shows*
15. **accounts-receivable-agent** - `/agent-factory/accounts-receivable-agent`
    - *Accounts Receivable Agent - Collections prioritization and cash flow forecasting*
16. **procurement-intelligence-agent** - `/agent-factory/procurement-intelligence-agent`
    - *Procurement Intelligence Agent - Spend visibility and supplier intelligence*
17. **employee-onboarding-agent** - `/agent-factory/employee-onboarding-agent`
    - *Employee Onboarding Agent - Personalized onboarding journeys*
18. **it-service-desk-agent** - `/agent-factory/it-service-desk-agent`
    - *IT Service Desk Agent - Automated resolution for common IT issues*

### Compliance Agents
19. **compliance-monitor-agent** - `/agent-factory/compliance-monitor-agent`
    - *Compliance Monitor Agent - Automated regulatory compliance*
20. **regulatory-change-agent** - `/agent-factory/regulatory-change-agent`
    - *Regulatory Change Agent - Monitor, assess, and track regulatory changes*

### Insurance-Specific Agents
21. **claims-processing-agent** - `/agent-factory/claims-processing-agent`
    - *Claims Processing Agent - Automated claims processing*
22. **submission-intelligence** - `/agent-factory/submission-intelligence`
    - *Submission Intelligence Agent - Transform submission intake*

### Analytics & Risk Agents
23. **marketing-spend-optimizer** - `/agent-factory/marketing-spend-optimizer`
    - *Marketing Spend Optimizer - Make every marketing dollar work harder*
24. **risk-assessment-agent** - `/agent-factory/risk-assessment-agent`
    - *Risk Assessment Agent - Automated risk analysis*
25. **sales-forecasting-agent** - `/agent-factory/sales-forecasting-agent`
    - *Sales Forecasting Agent - Probability-weighted pipeline forecasts*
26. **competitive-intelligence-agent** - `/agent-factory/competitive-intelligence-agent`
    - *Competitive Intelligence Agent - Continuous monitoring and signal detection*

---

## Site Structure Overview

### Total Page Count
- **Static Pages:** 15 pages
- **Industry Pages:** 9 main + 12 sub-industries + 18 sub-pages = 39 pages
- **Case Studies:** 3 pages
- **Insights:** 6 pages
- **Agent Factory:** 26 agent detail pages
- **Total:** ~89 pages

### Navigation Hierarchy

```
Home (/)
├── About (/about)
│   ├── Leadership (/about/leadership)
│   ├── Careers (/about/careers)
│   ├── Methodology (/about/methodology)
│   └── Technology (/about/technology)
├── Services (/services)
│   ├── Advisory (/services/advisory)
│   ├── Agent Factory (/services/agent-factory)
│   ├── Process Automation (/services/process-automation)
│   └── The Forge (/services/the-forge)
├── Industries (/industries)
│   └── [Industry Detail] (/industries/[slug])
│       ├── How We Apply AI (/industries/[slug]/how-we-apply-ai)
│       ├── Integration (/industries/[slug]/integration)
│       └── [Sub-Industry] (/industries/[slug]/[subSlug])
├── Solutions (/solutions)
├── Case Studies (/case-studies)
│   └── [Case Study Detail] (/case-studies/[slug])
├── Insights (/insights)
│   └── [Article Detail] (/insights/[slug])
├── Workshop (/workshop)
├── Contact (/contact)
└── Agent Factory (/agent-factory)
    └── [Agent Detail] (/agent-factory/[slug])
```

### Key Features
- **Dynamic Routing:** Next.js App Router with static generation for SEO
- **Industry-Specific Content:** 9 industries with sub-industries and specialized pages
- **Content Library:** Case studies and insights/articles with category filtering
- **Agent Catalog:** 26 pre-built AI agents organized by category
- **Responsive Design:** Mobile-first approach with premium UI/UX

### SEO Considerations
- All dynamic routes use `generateStaticParams()` for static generation
- Industry pages support hash-based navigation for anchor links
- Article and case study pages include rich metadata
- Agent pages include structured data for discovery

---

## Notes

- **Base Path:** All routes are relative to the site root
- **Query Parameters:** Contact page supports `?industry=` and `?service=` parameters
- **Hash Navigation:** Industries page supports hash-based scrolling (e.g., `/industries#insurance`)
- **Redirects:** `/agent-factory` redirects to `/services/agent-factory`
- **404 Handling:** Next.js default 404 page for unmatched routes

---

*This site map reflects the current state of the R² Solutions website as of December 2024. Dynamic content (articles, case studies, agents) may be added or updated over time.*
