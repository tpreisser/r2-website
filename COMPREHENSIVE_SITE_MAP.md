# R² Solutions - Comprehensive Website Site Map

**Generated:** December 2024  
**Framework:** Next.js 16 (App Router)  
**Base URL:** https://r2solutions.ai (or configured domain)  
**Total Pages:** ~100+ pages

---

## Table of Contents

1. [Main Navigation Structure](#main-navigation-structure)
2. [Homepage](#homepage)
3. [About Section](#about-section)
4. [Services Section](#services-section)
5. [Industries Section](#industries-section)
6. [Solutions Page](#solutions-page)
7. [Case Studies Section](#case-studies-section)
8. [Insights Section](#insights-section)
9. [Agent Factory Section](#agent-factory-section)
10. [Workshop Page](#workshop-page)
11. [Contact Page](#contact-page)
12. [Footer Navigation](#footer-navigation)
13. [Page Count Summary](#page-count-summary)

---

## Main Navigation Structure

### Primary Navigation (Header)
- **Logo** → `/` (Homepage)
- **Industries** (Dropdown)
  - All Industries → `/industries`
  - Insurance → `/industries/insurance`
  - Healthcare → `/industries/healthcare`
  - Financial Services → `/industries/financial-services`
  - Home Services → `/industries/home-services`
  - Professional Services → `/industries/professional-services`
  - Construction & Infrastructure → `/industries/construction-infrastructure`
  - Hospitality & Travel → `/industries/hospitality-travel`
  - Agriculture & Food → `/industries/agriculture-food`
  - Sports & Entertainment → `/industries/sports-entertainment`
- **Services** (Dropdown)
  - All Services → `/services`
  - The Forge → `/services/the-forge`
  - Agent Factory → `/services/agent-factory`
  - Process Automation → `/services/process-automation`
  - Advisory → `/services/advisory`
- **Insights** → `/insights`
- **About** (Dropdown)
  - About R² → `/about`
  - Methodology → `/about/methodology`
  - Technology → `/about/technology`
  - Leadership → `/about/leadership`
  - Careers → `/about/careers`
- **Contact** → `/contact`

---

## Homepage

**URL:** `/`

### Sections:
1. **Hero Section**
   - Headline: "Industry-specific AI that ships to production."
   - Animated scroll arrow indicator

2. **Research Articles Section**
   - Title: "What research says about AI project success"
   - Featured Article (Left) - Rotating carousel:
     - "Majority of Generic Chatbot Integration Projects Fail" (Gartner)
     - "AI projects stall without C-suite-caliber engineers" (Harvard Business Review)
     - "Business Specific AI integration shows 4x success rate" (MIT Sloan)
     - "Industry specific AI is accelerating without compromise" (Forrester)
   - Article Tiles (Right) - Clickable preview cards
   - Links to: `/insights/[article-slug]`

3. **Why Teams Choose Us Section**
   - Title: "Why Teams Choose Us"
   - Interactive Carousel with 3 Pillars:
     - **SPEED** - "Prototypes in Days"
     - **RESULTS** - "Built for Business Impact"
     - **TRUST** - "Your Success Is Our Growth"

4. **Final CTA Section**
   - Title: "See Working AI in One Day"
   - Description about The Forge workshop
   - Primary CTA: "Explore The Forge" → `/services/the-forge`
   - Secondary CTA: "Talk to Our Team" → `/contact`

---

## About Section

### About Overview
**URL:** `/about`

#### Sections:
1. **Hero Section**
   - Headline and subheadline about R² Solutions

2. **Core Beliefs Section**
   - 5 Core Beliefs:
     - "AI projects fail for people reasons, not technology reasons."
     - "Speed is a feature."
     - "Working software beats beautiful slides."
     - "Honesty is more valuable than agreement."
     - "The best consultants make themselves unnecessary."

3. **Team Section**
   - Team member profiles (Rich Rivara, Will Godfrey, etc.)

4. **CTA Section**
   - Links to contact and workshop

### About Subpages:

#### Methodology
**URL:** `/about/methodology`

**Sections:**
- How We Work
- Our Approach
- Process Overview
- Results & Outcomes

#### Technology
**URL:** `/about/technology`

**Sections:**
- Technical Philosophy
- Technology Stack
- Implementation Approach
- Security & Compliance

#### Leadership
**URL:** `/about/leadership`

**Sections:**
- Leadership Team
- Executive Profiles
- Company Values
- Advisory Board (if applicable)

#### Careers
**URL:** `/about/careers`

**Sections:**
- Open Positions
- Company Culture
- Benefits
- Application Process

---

## Services Section

### Services Overview
**URL:** `/services`

#### Sections:
1. **Hero Section**
   - Title: "How We Work"
   - Description of services approach

2. **Service Cards** (4 services):
   - **The Forge**
     - Eyebrow: "Premium Experience"
     - Description: "One-day build with our entire senior team. Working prototypes, not presentations. Guaranteed value or you don't pay."
     - CTA: "Request a Session" → `/services/the-forge`
   
   - **Agent Factory**
     - Eyebrow: "Pre-Built Solutions"
     - Description: "Battle-tested AI agents for common challenges. Deploy in days, customize to your workflows, and scale fast."
     - CTA: "Explore Agents" → `/services/agent-factory`
   
   - **Process Automation**
     - Eyebrow: "Implementation Services"
     - Description: "AI-powered automation that kills manual work. Document processing, data movement, decision flows, reporting, and more."
     - CTA: "Start an Assessment" → `/services/process-automation`
   
   - **Advisory**
     - Eyebrow: "Strategic Services"
     - Description: "Strategy from builders. Outcome-based roadmaps, diligence support, org design, vendor selection, and executive education."
     - CTA: "Start a Conversation" → `/services/advisory`

3. **CTA Section**
   - Contact and workshop links

### Service Detail Pages:

#### The Forge
**URL:** `/services/the-forge`

**Sections:**
- Hero with value proposition
- What You Get
- Process Overview
- Success Stories
- Pricing/Booking
- FAQ

#### Agent Factory
**URL:** `/services/agent-factory`

**Sections:**
- Hero section
- Agent Categories Overview
- Featured Agents
- How It Works
- Integration Process
- CTA to browse all agents → `/agent-factory`

#### Process Automation
**URL:** `/services/process-automation`

**Sections:**
- Hero section
- Automation Capabilities
- Use Cases
- Implementation Process
- ROI Examples
- CTA

#### Advisory
**URL:** `/services/advisory`

**Sections:**
- Hero section
- Advisory Services
- Strategic Offerings
- Client Success
- Engagement Models
- CTA

---

## Industries Section

### Industries Overview
**URL:** `/industries`

#### Sections:
1. **Hero Section**
   - Title and description

2. **Industry Grid** (9 industries):
   - Insurance
   - Healthcare
   - Financial Services
   - Home Services
   - Professional Services
   - Construction & Infrastructure
   - Hospitality & Travel
   - Agriculture & Food
   - Sports & Entertainment

3. **Hash Navigation Support**
   - `/industries#insurance`
   - `/industries#healthcare`
   - `/industries#financial-services`
   - `/industries#home-services`
   - (etc.)

### Industry Detail Pages

**Pattern:** `/industries/[slug]`

#### Available Industry Pages:

1. **Insurance** → `/industries/insurance`
   - Hero Section
   - Challenge Section
   - How We Help Section
   - Use Cases
   - Featured Agents
   - Case Study (if applicable)
   - Sub-pages:
     - How We Apply AI → `/industries/insurance/how-we-apply-ai`
     - Integration → `/industries/insurance/integration`
   - Sub-industries:
     - Property & Casualty → `/industries/insurance/property-casualty`
     - Life & Health → `/industries/insurance/life-health`
     - Commercial Insurance → `/industries/insurance/commercial`

2. **Healthcare** → `/industries/healthcare`
   - Hero Section
   - Challenge Section
   - How We Help Section
   - Use Cases
   - Featured Agents
   - Sub-pages:
     - How We Apply AI → `/industries/healthcare/how-we-apply-ai`
     - Integration → `/industries/healthcare/integration`
   - Sub-industries:
     - Hospitals & Health Systems → `/industries/healthcare/hospitals`
     - Clinics & Practices → `/industries/healthcare/clinics`
     - Pharmaceutical → `/industries/healthcare/pharmaceutical`

3. **Financial Services** → `/industries/financial-services`
   - Hero Section
   - Challenge Section
   - How We Help Section
   - Use Cases
   - Featured Agents
   - Sub-pages:
     - How We Apply AI → `/industries/financial-services/how-we-apply-ai`
     - Integration → `/industries/financial-services/integration`
   - Sub-industries:
     - Wealth Management → `/industries/financial-services/wealth-management`
     - Banking → `/industries/financial-services/banking`
     - FinTech → `/industries/financial-services/fintech`

4. **Home Services** → `/industries/home-services`
   - Hero Section
   - Challenge Section
   - How We Help Section
   - Use Cases
   - Featured Agents
   - Sub-pages:
     - How We Apply AI → `/industries/home-services/how-we-apply-ai`
     - Integration → `/industries/home-services/integration`
   - Sub-industries:
     - HVAC → `/industries/home-services/hvac`
     - Plumbing → `/industries/home-services/plumbing`
     - Electrical → `/industries/home-services/electrical`

5. **Professional Services** → `/industries/professional-services`
   - Hero Section
   - Challenge Section
   - How We Help Section (4 sections):
     - Knowledge Intelligence
     - Document Intelligence
     - Research Acceleration
     - Practice Management Intelligence
   - Deliverables
   - Featured Agents
   - Case Study
   - Sub-pages:
     - How We Apply AI → `/industries/professional-services/how-we-apply-ai`
     - Integration → `/industries/professional-services/integration`

6. **Construction & Infrastructure** → `/industries/construction-infrastructure`
   - Hero Section
   - Challenge Section
   - How We Help Section (4 sections):
     - Preconstruction Intelligence
     - Project Execution Optimization
     - Safety Intelligence
     - Document and Drawing Intelligence
   - Deliverables
   - Featured Agents
   - Case Study
   - Sub-pages:
     - How We Apply AI → `/industries/construction-infrastructure/how-we-apply-ai`
     - Integration → `/industries/construction-infrastructure/integration`

7. **Hospitality & Travel** → `/industries/hospitality-travel`
   - Hero Section
   - Challenge Section
   - How We Help Section (4 sections):
     - Revenue Optimization
     - Guest Intelligence
     - Operations Efficiency
     - Reputation Management
   - Deliverables
   - Featured Agents
   - Sub-pages:
     - How We Apply AI → `/industries/hospitality-travel/how-we-apply-ai`
     - Integration → `/industries/hospitality-travel/integration`

8. **Agriculture & Food** → `/industries/agriculture-food`
   - Hero Section
   - Challenge Section
   - How We Help Section (4 sections):
     - Precision Agriculture
     - Operations Optimization
     - Supply Chain Intelligence
     - Quality and Compliance
   - Deliverables
   - Featured Agents
   - Sub-pages:
     - How We Apply AI → `/industries/agriculture-food/how-we-apply-ai`
     - Integration → `/industries/agriculture-food/integration`

9. **Sports & Entertainment** → `/industries/sports-entertainment`
   - Hero Section
   - Challenge Section
   - How We Help Section (4 sections):
     - Fan Intelligence
     - Revenue Optimization
     - Operations Excellence
     - Sponsorship Intelligence
   - Deliverables
   - Featured Agents
   - Sub-pages:
     - How We Apply AI → `/industries/sports-entertainment/how-we-apply-ai`
     - Integration → `/industries/sports-entertainment/integration`

### Industry Sub-Pages

**Pattern:** `/industries/[slug]/how-we-apply-ai`

**Sections:**
- How AI is Applied in [Industry]
- Use Case Examples
- Implementation Approach
- Results & Metrics

**Pattern:** `/industries/[slug]/integration`

**Sections:**
- Integration Overview
- Technical Requirements
- System Compatibility
- Implementation Process

### Sub-Industry Pages

**Pattern:** `/industries/[slug]/[subSlug]`

**Available Sub-Industries:**

#### Insurance Sub-Industries (3):
- `/industries/insurance/property-casualty`
- `/industries/insurance/life-health`
- `/industries/insurance/commercial`

#### Healthcare Sub-Industries (3):
- `/industries/healthcare/hospitals`
- `/industries/healthcare/clinics`
- `/industries/healthcare/pharmaceutical`

#### Financial Services Sub-Industries (3):
- `/industries/financial-services/wealth-management`
- `/industries/financial-services/banking`
- `/industries/financial-services/fintech`

#### Home Services Sub-Industries (3):
- `/industries/home-services/hvac`
- `/industries/home-services/plumbing`
- `/industries/home-services/electrical`

---

## Solutions Page

**URL:** `/solutions`

**Sections:**
- Hero Section
- Solution Categories
- Industry-Specific Solutions
- Technology Stack
- Integration Capabilities
- CTA Section

---

## Case Studies Section

### Case Studies Overview
**URL:** `/case-studies`

#### Sections:
1. **Hero Section**
   - Title and description

2. **Case Study Grid**
   - Featured case studies with cards
   - Filter by industry (if applicable)

3. **Case Study Listings**
   - All available case studies

### Case Study Detail Pages

**Pattern:** `/case-studies/[slug]`

#### Available Case Studies (3):

1. **Cassidy HVAC Platform** → `/case-studies/cassidy-hvac`
   - Industry: Home Services
   - Timeline: 90 days
   - Capability: Data & Analytics, AI & Automation
   - Sections:
     - Situation
     - Approach
     - Results
     - Quote/Testimonial
     - Related Content

2. **Regional MGA Transformation** → `/case-studies/regional-mga`
   - Industry: Insurance
   - Timeline: 60 days
   - Capability: AI & Automation, Operations Excellence
   - Sections:
     - Situation
     - Approach
     - Results
     - Quote/Testimonial
     - Related Content

3. **Manufacturing Intelligence** → `/case-studies/manufacturing-intelligence`
   - Industry: Manufacturing
   - Timeline: 120 days
   - Capability: AI & Automation, Operations Excellence
   - Sections:
     - Situation
     - Approach
     - Results
     - Quote/Testimonial
     - Related Content

---

## Insights Section

### Insights Overview
**URL:** `/insights`

#### Sections:
1. **Hero Section**
   - Title and description

2. **Featured Articles**
   - Highlighted articles carousel

3. **Article Categories**
   - AI Strategy
   - Industry Insights
   - Technology
   - Case Studies
   - Thought Leadership

4. **Article Grid**
   - All articles with cards
   - Category filtering
   - Search functionality (if applicable)

### Article Detail Pages

**Pattern:** `/insights/[slug]`

#### Available Articles (6):

1. **The $2.7 Trillion Question: Why Most AI Investments Fail to Deliver**
   - URL: `/insights/the-2-7-trillion-question-why-most-ai-investments-fail-to-deliver`
   - Category: AI Strategy
   - Featured: Yes
   - Read Time: 12 min
   - Sections:
     - Hero with image
     - Article content blocks:
       - Paragraphs
       - Headings
       - Lists
       - Quotes
     - Author info
     - Related articles
     - Share buttons

2. **The Portfolio Company AI Playbook: A 100-Day Framework**
   - URL: `/insights/portfolio-company-ai-playbook-100-day-framework`
   - Category: AI Strategy
   - Featured: Yes
   - Read Time: 11 min
   - Sections: Same structure as above

3. **Document Intelligence: The $400 Billion Opportunity Hiding in Your Filing Cabinets**
   - URL: `/insights/document-intelligence-400b-opportunity`
   - Category: Industry Insights
   - Featured: Yes
   - Read Time: 10 min
   - Sections: Same structure as above

4. **The AI Talent Paradox: Why Hiring Data Scientists Won't Solve Your AI Problem**
   - URL: `/insights/the-ai-talent-paradox`
   - Category: Thought Leadership
   - Featured: Yes
   - Read Time: 8 min
   - Sections: Same structure as above

5. **Beyond Chatbots: Enterprise Applications of Large Language Models**
   - URL: `/insights/beyond-chatbots-enterprise-llm-applications`
   - Category: Technology
   - Featured: No
   - Read Time: 9 min
   - Sections: Same structure as above

6. **Insurance in 2030: Five Predictions and What They Mean Today**
   - URL: `/insights/insurance-in-2030-five-predictions`
   - Category: Industry Insights
   - Featured: No
   - Read Time: 9 min
   - Sections: Same structure as above

---

## Agent Factory Section

### Agent Factory Overview
**URL:** `/agent-factory`

**Note:** Redirects to `/services/agent-factory` but also has its own listing page.

#### Sections:
1. **Hero Section**
   - Title and description

2. **Agent Categories**
   - Customer Experience
   - Revenue & Growth
   - Operations & Productivity
   - Compliance
   - Insurance-Specific
   - Analytics & Risk

3. **Agent Grid**
   - All 26 agents displayed
   - Category filtering
   - Search functionality

### Agent Detail Pages

**Pattern:** `/agent-factory/[slug]`

#### Available Agents (26):

##### Customer Experience Agents (4):

1. **AI Voice IVR Agent** → `/agent-factory/ai-voice-ivr`
   - Tagline: "Transform your phone experience"
   - Category: Customer Experience
   - Industries: Home Services, Healthcare, Insurance
   - Sections:
     - Hero
     - Problems Solved
     - How It Works
     - Features
     - Use Cases
     - Benefits
     - Metrics
     - Best For
     - CTA

2. **AI SMS Agent** → `/agent-factory/ai-sms`
   - Tagline: "Never miss a text conversation"
   - Category: Customer Experience
   - Industries: Home Services, Retail, Healthcare

3. **Customer Service AI** → `/agent-factory/customer-service-ai`
   - Tagline: "Resolve issues faster, everywhere"
   - Category: Customer Experience
   - Industries: E-commerce, SaaS, Financial, Insurance

4. **Customer Onboarding Agent** → `/agent-factory/customer-onboarding-agent`
   - Tagline: "Streamline onboarding from first touch to first value"
   - Category: Customer Experience
   - Industries: Insurance, Financial, Healthcare, Home Services, SaaS

##### Revenue & Growth Agents (5):

5. **Cross-Sell Agent** → `/agent-factory/cross-sell-agent`
   - Tagline: "Intelligent product recommendations that drive revenue"
   - Category: Revenue
   - Industries: Insurance, Financial, Healthcare, Retail, SaaS, Home Services

6. **Missed Opportunity Recovery Agent** → `/agent-factory/missed-opportunity-recovery`
   - Tagline: "Turn missed calls into booked revenue"
   - Category: Revenue
   - Industries: Home Services, Healthcare, Insurance, Financial

7. **Quote Follow-Up Agent** → `/agent-factory/quote-follow-up`
   - Tagline: "Don't let big deals die"
   - Category: Revenue
   - Industries: Home Services, Construction, B2B, Insurance, Financial

8. **Customer Re-Engagement Agent** → `/agent-factory/customer-reengagement`
   - Tagline: "Reactivate dormant customers"
   - Category: Revenue
   - Industries: Home Services, Healthcare, Financial, Insurance, Retail

9. **Event-Triggered Campaigns** → `/agent-factory/event-triggered-campaigns`
   - Tagline: "First to market when it matters"
   - Category: Revenue
   - Industries: Home Services, Retail, Hospitality, Energy, Insurance

##### Operations & Productivity Agents (9):

10. **CSR Performance Intelligence** → `/agent-factory/csr-performance`
    - Tagline: "Turn every call into a coaching opportunity"
    - Category: Analytics
    - Industries: Home Services, Insurance, Healthcare, Call Center

11. **Document Processing Agent** → `/agent-factory/document-processing`
    - Tagline: "Stop the paper chase"
    - Category: Operations
    - Industries: Financial, Insurance, Healthcare, Legal

12. **Document Analyzer Agent** → `/agent-factory/document-analyzer-agent`
    - Tagline: "Understand any document, instantly"
    - Category: Operations
    - Industries: Legal, Insurance, Financial, Healthcare, Real Estate

13. **CSR Performance Intelligence** → `/agent-factory/csr-performance-intel`
    - Tagline: "QA every call, coach with data"
    - Category: Analytics
    - Industries: Home Services, Insurance, Healthcare, Call Center

14. **Appointment Scheduler Agent** → `/agent-factory/appointment-scheduler-agent`
    - Tagline: "Optimize scheduling and reduce no-shows"
    - Category: Operations
    - Industries: Healthcare, Home Services, Professional Services

15. **Accounts Receivable Agent** → `/agent-factory/accounts-receivable-agent`
    - Tagline: "Collections prioritization, personalized outreach, and cash flow forecasting"
    - Category: Operations
    - Industries: Financial, Home Services, Healthcare, Insurance, Retail

16. **Procurement Intelligence Agent** → `/agent-factory/procurement-intelligence-agent`
    - Tagline: "Spend visibility, supplier intelligence, and negotiation support"
    - Category: Operations
    - Industries: Manufacturing, Financial, Healthcare, Insurance, Retail

17. **Employee Onboarding Agent** → `/agent-factory/employee-onboarding-agent`
    - Tagline: "Personalized onboarding journeys and 24/7 answers that cut time-to-productivity"
    - Category: Operations
    - Industries: SaaS, Professional Services, Healthcare, Financial, Home Services

18. **IT Service Desk Agent** → `/agent-factory/it-service-desk-agent`
    - Tagline: "Automated resolution for common IT issues with smart escalation"
    - Category: Operations
    - Industries: SaaS, Professional Services, Financial, Healthcare, Insurance

##### Compliance Agents (2):

19. **Compliance Monitor Agent** → `/agent-factory/compliance-monitor-agent`
    - Tagline: "Automated regulatory compliance and risk monitoring"
    - Category: Compliance
    - Industries: Insurance, Healthcare, Financial

20. **Regulatory Change Agent** → `/agent-factory/regulatory-change-agent`
    - Tagline: "Monitor, assess, and track regulatory changes end-to-end"
    - Category: Compliance
    - Industries: Financial, Healthcare, Insurance

##### Insurance-Specific Agents (2):

21. **Claims Processing Agent** → `/agent-factory/claims-processing-agent`
    - Tagline: "Automated claims processing with intelligent decision-making"
    - Category: Operations
    - Industries: Insurance

22. **Submission Intelligence Agent** → `/agent-factory/submission-intelligence`
    - Tagline: "Transform submission intake"
    - Category: Operations
    - Industries: Insurance

##### Analytics & Risk Agents (4):

23. **Marketing Spend Optimizer** → `/agent-factory/marketing-spend-optimizer`
    - Tagline: "Make every marketing dollar work harder"
    - Category: Analytics
    - Industries: Insurance, Financial, Healthcare, Home Services, Retail, B2B

24. **Risk Assessment Agent** → `/agent-factory/risk-assessment-agent`
    - Tagline: "Automated risk analysis and underwriting support"
    - Category: Analytics
    - Industries: Insurance, Financial

25. **Sales Forecasting Agent** → `/agent-factory/sales-forecasting-agent`
    - Tagline: "Probability-weighted pipeline and revenue forecasts with early warning"
    - Category: Analytics
    - Industries: SaaS, B2B, Financial, Insurance, Home Services

26. **Competitive Intelligence Agent** → `/agent-factory/competitive-intelligence-agent`
    - Tagline: "Continuous monitoring, signal detection, and battlecard generation"
    - Category: Analytics
    - Industries: SaaS, B2B, Financial, Insurance, Retail

---

## Workshop Page

**URL:** `/workshop`

**Sections:**
1. **Hero Section**
   - Title and value proposition
   - Workshop overview

2. **What You Get**
   - Workshop deliverables
   - Outcomes

3. **Process Overview**
   - Day structure
   - Activities

4. **Success Stories**
   - Testimonials
   - Results

5. **Booking Section**
   - Calendar/Booking form
   - Contact information

6. **FAQ Section**
   - Common questions

---

## Contact Page

**URL:** `/contact`

**Query Parameters:**
- `?industry=[industry-slug]` - Pre-fills industry
- `?service=[service-slug]` - Pre-fills service interest

**Sections:**
1. **Hero Section**
   - Title and description

2. **Contact Form**
   - Name
   - Email
   - Company
   - Industry (dropdown)
   - Service Interest (dropdown)
   - Message
   - Submit button

3. **Contact Information**
   - Email addresses
   - Phone numbers
   - Office locations (if applicable)

4. **Additional CTAs**
   - Link to workshop booking
   - Link to services

---

## Footer Navigation

**Footer Links:**
- The Forge → `/services/the-forge`
- Agent Factory → `/services/agent-factory`
- Process Automation → `/services/process-automation`
- Advisory → `/services/advisory`
- Industries → `/industries`
- Insights → `/insights`
- Workshop → `/workshop`
- About → `/about`
- Contact → `/contact`

**Footer Elements:**
- Logo
- Copyright notice
- Social media links (if applicable)

---

## Page Count Summary

### Static Pages: 15
- Homepage (1)
- About (1) + Subpages (4) = 5
- Services (1) + Subpages (4) = 5
- Solutions (1)
- Case Studies Overview (1)
- Insights Overview (1)
- Agent Factory Overview (1)
- Workshop (1)
- Contact (1)

### Dynamic Industry Pages: 39
- Industries Overview (1)
- Industry Detail Pages (9)
- Industry "How We Apply AI" Pages (9)
- Industry "Integration" Pages (9)
- Sub-Industry Pages (12)

### Dynamic Content Pages: 35
- Case Study Detail Pages (3)
- Article Detail Pages (6)
- Agent Detail Pages (26)

### Total: ~89-100 Pages

**Note:** This count includes:
- All static pages
- All dynamic routes with their generated pages
- All subpages and nested routes
- Hash-based navigation sections (counted as part of parent pages)

---

## Navigation Patterns

### Hash-Based Navigation
- Industries page supports hash scrolling: `/industries#insurance`
- Solutions page may support hash navigation for sections

### Query Parameters
- Contact page: `?industry=` and `?service=`
- Insights page: Category filtering (if implemented)
- Agent Factory: Category filtering

### Redirects
- `/agent-factory` → `/services/agent-factory` (if redirect configured)

---

## SEO & Metadata

### Static Generation
- All dynamic routes use `generateStaticParams()` for static generation
- Industry pages support hash-based navigation for anchor links
- Article and case study pages include rich metadata
- Agent pages include structured data for discovery

### URL Structure
- Clean, semantic URLs
- Industry slugs: kebab-case
- Article slugs: descriptive, SEO-friendly
- Agent slugs: kebab-case with descriptive names

---

## Mobile Navigation

### Mobile Menu Structure
- Hamburger menu on mobile
- Slide-out navigation panel
- Nested dropdowns for Industries, Services, About
- Submenu panels for dropdown items
- Back navigation for submenus

---

## Internal Page Sections Reference

### Common Section Types Across Pages:
1. **Hero Sections** - Headline, subheadline, CTA
2. **Challenge Sections** - Problem statements
3. **Solution Sections** - How we help
4. **Feature Sections** - Capabilities and features
5. **Use Case Sections** - Application examples
6. **Results/Metrics Sections** - Outcomes and KPIs
7. **Testimonial Sections** - Client quotes
8. **CTA Sections** - Call-to-action blocks
9. **FAQ Sections** - Frequently asked questions
10. **Related Content Sections** - Links to related pages

---

*This comprehensive site map reflects the complete structure of the R² Solutions website as of December 2024. All pages, subpages, sections, navigation elements, and dynamic routes are documented above.*
