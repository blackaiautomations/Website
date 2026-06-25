/* Black Automation — trilingual dictionaries.
   English is the source of truth, authored here.
   Arabic + Sorani come from the original site (legacy-i18n.ts) plus
   translations for keys the redesign added (v2.*). */

import { LEGACY_I18N } from "./legacy-i18n";

export type Lang = "en" | "ar" | "ckb";

const en: Record<string, string> = {
  // UI / navigation
  "ui.skip": "Skip to content",
  "nav.home": "Home",
  "nav.solutions": "Solutions",
  "nav.work": "Work",
  "nav.about": "About",
  "nav.contact": "Contact",

  // Footer
  "footer.blurb":
    "AI automation systems, integrations, dashboards, and process foundations.",
  "footer.tagline": "Automation, perfected.",
  "footer.contact": "Contact",
  "footer.cases": "Case Studies",
  "footer.faq": "FAQ",
  "footer.privacy": "Privacy",
  "footer.terms": "Terms",

  // Home — hero
  "home.eyebrow": "Built for teams tired of doing it manually.",
  "home.t1": "Replace repetitive work",
  "home.t2": "with intelligent automation.",
  "home.lead":
    "Black Automation designs AI-powered workflows, internal tools, and autonomous systems that help teams reduce manual work, improve response time, and operate at scale.",
  "home.cta1": "View Solutions",
  "home.cta2": "Start a conversation",
  "home.scroll": "Scroll",
  "home.chipIntake": "Lead intake",
  "home.chipRouting": "Agent routing",
  "home.chipSync": "Dashboard sync",

  // Home — stats
  "stats.s1": "less manual coordination",
  "stats.s2": "fewer missed handoff steps",
  "stats.s3": "hours saved weekly per manager",
  "stats.s4": "first-year return on investment",

  // Home — marquee
  "mq.label": "Connecting the tools your teams already rely on",
  "mq.crm": "CRM systems",
  "mq.payments": "Payments",
  "mq.forms": "Forms",
  "mq.dashboards": "Dashboards",
  "mq.databases": "Databases",
  "mq.webhooks": "Webhooks",

  // Home — solutions preview
  "hs.eyebrow": "Solutions",
  "hs.title": "Systems designed to remove operational friction.",
  "hs.lead":
    "From AI-powered workflows to connected internal systems, Black Automation builds infrastructure that helps teams move faster with less manual work.",
  "hs.c1t": "AI Agents",
  "hs.c1b":
    "AI agents that classify requests, assist decision-making, and route work to the right next step automatically.",
  "hs.c2t": "Workflow Automation",
  "hs.c2b":
    "Remove repetitive handoffs, approval delays, and manual coordination across internal workflows.",
  "hs.c3t": "Integrations",
  "hs.c3b":
    "Connect your existing tools and systems so information moves cleanly across operations.",
  "hs.c4t": "Dashboards",
  "hs.c4b":
    "Real-time operational dashboards that give teams visibility into performance, bottlenecks, and system activity.",
  "hs.c5t": "CRM Automation",
  "hs.c5b":
    "Automate lead intake, follow-up, pipeline movement, and customer workflow management.",
  "hs.c6t": "Process Systems",
  "hs.c6b":
    "Turn fragmented workflows into structured systems your team can scale and operate reliably.",

  // Home — model showcase
  "hm.eyebrow": "Model showcase",
  "hm.title": "The intelligence layer behind the automation.",
  "hm.lead":
    "Each automation is powered by a purpose-built AI system designed to handle a specific function, connect to your tools, and operate without constant oversight.",
  "hm.link": "Explore AI Models",
  "mdl.intake.t": "Intake Agent",
  "mdl.ops.t": "Ops Router",
  "mdl.insight.t": "Insight Model",
  "mdl.support.t": "Support Agent",
  "mdl.lead.t": "Lead Qualification",

  // Home — case study preview
  "hc.eyebrow": "Case studies",
  "hc.title": "Proof from real operating systems.",
  "hc.lead":
    "Black Automation systems have already helped teams reduce coordination overhead, protect lean budgets, and keep critical workflows moving.",
  "hc.m1": "IT Consulting / SaaS",
  "hc.h1": "Horizon Tech Solutions",
  "hc.b1":
    "Automated project handoffs, dashboards, task routing, and leadership reports, reducing manual coordination by 80%.",
  "hc.m2": "Healthcare / Smart Clinic",
  "hc.h2": "CC Smart Clinic",
  "hc.b2":
    "Built AI-first clinic operations so a single doctor could coordinate communication, appointments, follow-ups, and admin workflows.",
  "hc.btn": "See Case Studies",

  // Home — CTA
  "cta.eyebrow": "Contact",
  "cta.title": "Ready to map the first automation opportunity?",
  "cta.lead":
    "Start with one repetitive workflow. We will help identify where automation can create the fastest operational return.",
  "cta.btn": "Contact Us",

  // Process (new in redesign)
  "v2.proc.eyebrow": "Process",
  "v2.proc.title": "From discovery call to deployed system.",
  "v2.proc.s1t": "Discovery",
  "v2.proc.s1b":
    "A discovery call and workflow analysis to find the highest-value automation to build first.",
  "v2.proc.s2t": "Design",
  "v2.proc.s2b":
    "The workflow is mapped and a solution proposal defines scope, integrations, and measurable outcomes.",
  "v2.proc.s3t": "Build & test",
  "v2.proc.s3b":
    "The system is built, connected to your tools, and tested against real operating conditions.",
  "v2.proc.s4t": "Deploy & support",
  "v2.proc.s4b":
    "Deployment with training, documentation, monitoring, and long-term support.",

  // Solutions page
  "sol.eyebrow": "Solutions",
  "sol.title": "Automation systems framed around measurable outcomes.",
  "sol.lead":
    "Black Automation designs practical AI systems that reduce repetitive work, connect disconnected tools, shorten response times, and give teams a clearer operating rhythm.",
  "sol.c1t": "AI Agents",
  "sol.c1b":
    "Assistants that classify requests, summarize context, answer routine questions, and move work toward the correct next action.",
  "sol.c2t": "Workflow Automation",
  "sol.c2b":
    "Automated handoffs, alerts, approvals, and status updates that remove coordination work from managers and operators.",
  "sol.c3t": "CRM Automation",
  "sol.c3b":
    "Lead intake, qualification, follow-up, pipeline movement, and customer data hygiene built into a consistent sales process.",
  "sol.c4t": "Dashboards",
  "sol.c4b":
    "Live operational visibility for leadership, managers, and teams so delays, workload, and performance are visible early.",
  "sol.c5t": "Process Systems",
  "sol.c5b":
    "Structured operating systems that turn scattered work into repeatable flows with clear ownership and fewer missed steps.",
  "sol.c6t": "Integrations",
  "sol.c6b":
    "API and automation-platform connections that keep CRMs, communication tools, databases, payment systems, and internal tools in sync.",

  // Integrations (section on Solutions page)
  "ig.eyebrow": "Integrations",
  "ig.title": "Compatibility with the tools teams already use.",
  "ig.lead":
    "Black Automation connects existing software through APIs, automation platforms, middleware, and custom development so data moves cleanly between teams, tools, and workflows.",
  "ig.c1t": "CRM",
  "ig.c1b":
    "Lead records, pipeline stages, customer activity, follow-up tasks, and sales handoffs kept current without manual updates.",
  "ig.c2t": "Communication",
  "ig.c2b":
    "Email, chat, notifications, and internal messaging connected to the workflows that need instant alerts or summaries.",
  "ig.c3t": "Data",
  "ig.c3b":
    "Spreadsheets, databases, analytics sources, and operational records organized into reliable dashboards and reports.",
  "ig.c4t": "Payments",
  "ig.c4b":
    "Billing, invoicing, subscription, checkout, and payment-status signals tied into operations and customer communication.",
  "ig.c5t": "Forms",
  "ig.c5b":
    "Intake, booking, survey, lead-capture, and request forms turned into structured records and automated next steps.",
  "ig.c6t": "Internal Tools",
  "ig.c6b":
    "Admin panels, portals, operations systems, and custom tools connected through clean APIs and purpose-built workflows.",

  // Models (section on Solutions page)
  "mdp.eyebrow": "Model Showcase",
  "mdp.title": "The intelligence layer behind the automation.",
  "mdp.lead":
    "These are the core AI systems Black Automation uses to read context, make routing decisions, summarize activity, and keep operational workflows moving.",
  "mdp.useLbl": "Use case:",
  "mdp.intake.b":
    "Reads incoming requests, classifies intent, enriches the context, and prepares the right next action.",
  "mdp.intake.use":
    "Forms, email inquiries, bookings, support messages, and new internal requests.",
  "mdp.ops.b":
    "Moves work between teams, owners, tools, and dashboards based on workflow rules and operational priority.",
  "mdp.ops.use":
    "Project handoffs, task assignment, approvals, alerts, and cross-department coordination.",
  "mdp.insight.b":
    "Monitors workflow activity, detects delays, summarizes patterns, and prepares leadership-ready updates.",
  "mdp.insight.use":
    "Weekly reports, risk alerts, bottleneck detection, and operational visibility.",
  "mdp.support.b":
    "Triage support requests, drafts responses, escalates edge cases, and logs conversation context automatically.",
  "mdp.support.use":
    "Customer support, internal help desks, clinic inquiries, and knowledge-base assistants.",
  "mdp.lead.b":
    "Scores fit and intent, prepares follow-up recommendations, and routes qualified leads into the right pipeline stage.",
  "mdp.lead.use":
    "Sales intake, cold outreach, CRM enrichment, and automated follow-up sequences.",
  "mdp.cta.eyebrow": "Next step",
  "mdp.cta.title": "See where these systems create results.",
  "mdp.cta.lead":
    "The strongest proof is operational: fewer handoffs, faster responses, cleaner reporting, and systems that scale without adding coordination headcount.",
  "mdp.cta.btn": "See Case Studies",
  "status.ready": "Ready",
  "status.concept": "Concept",
  "status.draft": "Draft",

  // Work / case studies page
  "cs.eyebrow": "Case Studies",
  "cs.title": "Proof built around challenge, solution, and result.",
  "cs.lead":
    "Two early Black Automation systems show the same pattern: remove manual coordination, connect the operating tools, and give teams a clearer way to scale.",
  "cs.lblCh": "Challenge:",
  "cs.lblSol": "Solution:",
  "cs.lblRes": "Result:",
  "cs.meta1": "IT Consulting / SaaS • Erbil, Iraq",
  "cs.h1": "From manual chaos to seamless handoffs.",
  "cs.ch1":
    "Horizon Tech Solutions managed concurrent client projects across email, WhatsApp, spreadsheets, and disconnected tools. Managers spent 8-12 hours per week chasing status updates, handoff steps were missed, and leadership saw delays too late.",
  "cs.sol1":
    "Black Automation deployed an automated Project Handoff & Tracking System with phase triggers, a centralized Notion dashboard, Slack and Gmail notifications, smart task routing, a client progress portal, and AI-generated weekly leadership reports.",
  "cs.res1":
    "Manual coordination dropped by 80%, missed handoff steps fell by 85%, project managers saved 10 hours per week, onboarding dropped from two days to three hours, and the system produced an estimated 12x first-year ROI.",
  "cs.k1a": "80% less coordination",
  "cs.k1b": "10 hrs saved weekly",
  "cs.k1c": "12x first-year ROI",
  "cs.meta2": "Healthcare / Smart Clinic • Erbil, Iraq",
  "cs.h2": "One Doctor Army: building Erbil's first smart clinic.",
  "cs.ch2":
    "CC Smart Clinic launched with heavy startup costs and limited operational budget. A traditional clinic structure would have required 15-20 employees across reception, customer service, appointment coordination, social media, admin, follow-up, and marketing.",
  "cs.sol2":
    "Black Automation built an AI-first operating layer for customer communication, appointment coordination, social media scheduling, patient follow-ups, administrative workflows, and centralized communication management.",
  "cs.res2":
    "The clinic created a lean operational model managed primarily by one doctor, lowering overhead while maintaining professional patient communication, workflow consistency, and a scalable path toward profitability.",
  "cs.k2a": "15-20 roles offset",
  "cs.k2b": "$3k implementation",
  "cs.k2c": "$250 monthly ops",
  "cs.cta.eyebrow": "Next step",
  "cs.cta.title": "Learn who is behind Black Automation.",
  "cs.cta.lead":
    "These systems are built around practical ROI, privacy, and operational clarity, not automation for its own sake.",
  "cs.cta.btn": "Learn About Black Automation",

  // About page
  "ab.eyebrow": "About",
  "ab.title": "The standards and philosophy behind the systems.",
  "ab.lead":
    "Black Automation exists to help teams automate intelligently without sacrificing trust, privacy, or operational control.",
  "ab.coEyebrow": "Company",
  "ab.coTitle": "Why Black Automation exists.",
  "ab.coP1":
    "We focus on practical AI systems that create measurable business results: less repetitive work, cleaner handoffs, faster response times, and stronger visibility. Every build starts with the workflow, not the tool. The goal is to design automation that employees can trust, teams can maintain, and leadership can measure.",
  "ab.coP2":
    "Confidentiality is part of the work. Client identity, internal workflows, customer data, operating systems, and strategic processes are treated as sensitive by default.",
  "ab.teamEyebrow": "Team",
  "ab.teamTitle": "Meet the team.",
  "ab.teamLead": "The team of engineers that created Black.",
  "ab.role1": "Architectural engineer",
  "ab.role2": "Data engineer",
  "ab.role3": "Civil engineer",
  "ab.bkEyebrow": "Backers & Partners",
  "ab.bkTitle": "Organizations backing the Black Automation foundation.",
  "ab.bkLead":
    "Early partners and clients helping shape the operating systems, healthcare workflows, and technical automation Black Automation is building.",
  "ab.cta.eyebrow": "Next step",
  "ab.cta.title": "Clear the final questions before contact.",
  "ab.cta.lead":
    "Review the common questions around process, security, integrations, pricing, and support before starting a project conversation.",
  "ab.cta.btn1": "Read FAQ",
  "ab.cta.btn2": "Start a Conversation",

  // Contact page
  "ct.eyebrow": "Contact",
  "ct.title": "Simple paths to start the conversation.",
  "ct.lead":
    "Email, call, or drop by. Tell us which workflow is eating your team's time and we will suggest the first automation opportunity.",
  "ct.h1": "Email",
  "ct.h2": "Phone",
  "ct.h3": "Location & Booking",
  "ct.h4": "Social",
  "ct.lblGeneral": "General:",
  "ct.lblMain": "Main:",
  "ct.lblCompany": "Company:",
  "ct.lblBooking": "Booking:",

  // FAQ (section on Contact page)
  "fq.eyebrow": "FAQ",
  "fq.title": "Answers that remove doubt before contact.",
  "fq.lead":
    "Clear answers about process, timelines, integrations, pricing, maintenance, security, and custom AI systems.",
  "fq.q1": "What does Black Automation do?",
  "fq.a1":
    "Black Automation helps businesses automate repetitive tasks, streamline workflows, reduce operational costs, and improve productivity using AI systems, workflow automation, and custom integrations.",
  "fq.q2": "How does a project usually start?",
  "fq.a2":
    "Projects usually begin with a discovery call, workflow analysis, solution proposal, build, testing, deployment, training, and support. The first goal is to find the highest-value workflow to automate safely.",
  "fq.q3": "How long does an automation project take?",
  "fq.a3":
    "Simple automations can launch in days. Larger systems with multiple integrations, dashboards, and AI workflows can take several weeks depending on complexity.",
  "fq.q4": "Can you integrate with our current tools?",
  "fq.a4":
    "In most cases, yes. Systems can connect through APIs, automation platforms, middleware, or custom development across CRMs, communication tools, data systems, payments, forms, and internal tools.",
  "fq.q5": "How does pricing work?",
  "fq.a5":
    "Pricing depends on project scope, integrations, complexity, and support needs. Engagements may be fixed-price projects, retainers, monthly maintenance plans, or custom enterprise agreements.",
  "fq.q6": "Do you build custom AI agents?",
  "fq.a6":
    "Yes. Black Automation builds custom AI agents for support, sales, operations, intake, routing, internal assistance, reporting, and knowledge-base workflows.",
  "fq.q7": "Is company data secure?",
  "fq.a7":
    "Security and confidentiality are core priorities. Systems are designed with access controls, secure API handling, privacy-conscious workflows, limited exposure, and appropriate monitoring.",
  "fq.q8": "Do you provide support after launch?",
  "fq.a8":
    "Yes. Support can include monitoring, troubleshooting, optimization, updates, documentation, training, and long-term maintenance depending on the engagement.",

  // Privacy page
  "pv.eyebrow": "Privacy",
  "pv.title": "Automation without compromising trust.",
  "pv.lead":
    "Black Automation protects client workflows, operational data, business processes, customer interactions, and sensitive company information as a core responsibility.",
  "pv.updated": "Last updated: May 2026",
  "pv.h1": "Information We Collect",
  "pv.p1":
    "We may collect business contact details, workflow requirements, operational process information, technical infrastructure details, authorized integration credentials, system logs, meeting notes, project documentation, and website usage information.",
  "pv.h2": "How Information Is Used",
  "pv.p2":
    "Information is used to deliver automation services, build AI systems, improve workflows, provide support, maintain security, troubleshoot issues, optimize performance, and fulfill contractual obligations.",
  "pv.h3": "Client Confidentiality",
  "pv.p3":
    "We do not publicly identify clients, expose internal systems, disclose proprietary workflows, or reveal sensitive operational information unless explicitly authorized in writing.",
  "pv.h4": "Security Practices",
  "pv.p4":
    "Systems may use access restrictions, secure authentication, encryption, API security practices, audit logging, infrastructure monitoring, and principle-of-least-privilege access.",
  "pv.h5": "AI & Third-Party Systems",
  "pv.p5":
    "Some services may use AI APIs, cloud infrastructure, automation platforms, and third-party tools. We aim to minimize sensitive data exposure, restrict access, and configure privacy-conscious workflows.",
  "pv.h6": "Data Retention & Rights",
  "pv.p6":
    "Data is retained only as needed to deliver services, maintain systems, meet obligations, and resolve technical issues. Clients may request access, correction, deletion, or processing restrictions where applicable.",

  // Terms page
  "tm.eyebrow": "Terms",
  "tm.title": "Terms for responsible automation work.",
  "tm.lead":
    "These terms outline the working principles for Black Automation services, client responsibilities, confidentiality, ownership, availability, and ethical AI use.",
  "tm.h1": "Scope of Services",
  "tm.p1":
    "Services may include AI automation development, workflow consulting, API integrations, AI chatbot systems, operational optimization, technical implementation, automation maintenance, and infrastructure setup. Final scope is defined by the relevant proposal, agreement, or statement of work.",
  "tm.h2": "Client Responsibilities",
  "tm.p2":
    "Clients are responsible for providing accurate information, maintaining lawful use of systems, securing credentials, cooperating during implementation, and reviewing deliverables in a timely manner.",
  "tm.h3": "Ownership",
  "tm.p3":
    "Clients retain ownership of their business data and proprietary information. Ownership of deliverables, reusable components, frameworks, and internal methodologies is defined in project agreements.",
  "tm.h4": "Confidentiality",
  "tm.p4":
    "Both parties are expected to protect confidential business information, proprietary systems, technical documentation, financial information, internal operations, and strategic information unless disclosure is authorized or legally required.",
  "tm.h5": "Service Availability",
  "tm.p5":
    "No automation system can guarantee uninterrupted availability. Third-party APIs, infrastructure services, external providers, and client-side security decisions may affect system performance.",
  "tm.h6": "Ethical AI Usage",
  "tm.p6":
    "Black Automation may refuse projects involving illegal activity, fraud, harmful surveillance, malicious automation, abusive AI usage, privacy violations, or unauthorized data harvesting.",
};

/* Keys the redesign added — Arabic */
const extraAr: Record<string, string> = {
  "nav.work": "الأعمال",
  "v2.proc.eyebrow": "آلية العمل",
  "v2.proc.title": "من مكالمة الاستكشاف إلى نظام قيد التشغيل.",
  "v2.proc.s1t": "الاستكشاف",
  "v2.proc.s1b":
    "مكالمة استكشاف وتحليل لسير العمل لتحديد الأتمتة الأعلى قيمة للبدء بها.",
  "v2.proc.s2t": "التصميم",
  "v2.proc.s2b":
    "نرسم خريطة سير العمل ويحدد مقترح الحل النطاق والتكاملات والنتائج القابلة للقياس.",
  "v2.proc.s3t": "البناء والاختبار",
  "v2.proc.s3b":
    "يُبنى النظام ويُربط بأدواتكم ويُختبر في ظروف تشغيل حقيقية.",
  "v2.proc.s4t": "الإطلاق والدعم",
  "v2.proc.s4b": "إطلاق مع تدريب وتوثيق ومراقبة ودعم طويل الأمد.",
};

/* Keys the redesign added — Sorani Kurdish */
const extraCkb: Record<string, string> = {
  "nav.work": "کارەکان",
  "v2.proc.eyebrow": "ڕێڕەوی کار",
  "v2.proc.title": "لە پەیوەندی ناسینەوە بۆ سیستەمێکی کارا.",
  "v2.proc.s1t": "ناسینەوە",
  "v2.proc.s1b":
    "پەیوەندییەکی ناسینەوە و شیکردنەوەی ڕێڕەوی کار بۆ دۆزینەوەی بەنرخترین ئۆتۆماسیۆن بۆ دەستپێک.",
  "v2.proc.s2t": "دیزاین",
  "v2.proc.s2b":
    "ڕێڕەوی کار نەخشە دەکرێت و پێشنیاری چارەسەر سنوور و تەواوکارییەکان و ئەنجامە پێوانەییەکان دیاری دەکات.",
  "v2.proc.s3t": "بنیاتنان و تاقیکردنەوە",
  "v2.proc.s3b":
    "سیستەمەکە بنیات دەنرێت، بە ئامرازەکانتان دەبەسترێتەوە و لە بارودۆخی کارکردنی ڕاستەقینەدا تاقی دەکرێتەوە.",
  "v2.proc.s4t": "دەستپێکردن و پشتگیری",
  "v2.proc.s4b":
    "دەستپێکردن لەگەڵ ڕاهێنان و بەڵگەنامە و چاودێری و پشتگیری درێژخایەن.",
};

export const DICTS: Record<Lang, Record<string, string>> = {
  en,
  ar: { ...LEGACY_I18N.ar, ...extraAr },
  ckb: { ...LEGACY_I18N.ckb, ...extraCkb },
};
