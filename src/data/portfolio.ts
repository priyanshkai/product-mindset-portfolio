export const profile = {
  name: "Priyansh Kailabag",
  title: "Aspiring Product Manager",
  tagline: "I identify user pain points, translate them into product decisions, and build data-backed solutions that drive measurable impact.",
  bio: "Aspiring Product Manager who turns messy, real-world problems into structured, actionable product decisions. I focus on identifying leverage points, making clear trade-offs, and building solutions that balance user needs with business impact.",
  email: "priyanshkailabag77@gmail.com",
  linkedin: "https://www.linkedin.com/in/priyansh-k-883b792a5/",
  github: "https://github.com/priyanshkai",
};

export const skills = [
  { label: "Product Thinking", desc: "Problem framing, prioritization, roadmapping", icon: "Lightbulb", color: "amber" },
  { label: "Analytics", desc: "SQL, A/B testing, funnel analysis", icon: "BarChart3", color: "blue" },
  { label: "User Research", desc: "Interviews, surveys, usability testing", icon: "Users", color: "emerald" },
  { label: "Growth", desc: "Activation, retention, north-star metrics", icon: "TrendingUp", color: "rose" },
];

export const tools = ["Power BI", "Notion", "Figma", "Mixpanel", "SQL", "Jira", "Amplitude", "Excel"];

export type CaseStudy = {
  slug: string;
  title: string;
  summary: string;
  context: string;
  duration: string;
  role: string;
  problem: string;
  approach: string[];
  insights: string[];
  solution: string;
  tradeoffs: string[];
  metrics: { label: string; value: string }[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "ai-carbon-intelligence",
    title: "AI-Powered Carbon Intelligence for Infrastructure Planning",
    summary:
      "Designed an AI-driven decision-support system to enable early-stage carbon-aware planning using fast, explainable insights.",
    context: "B2B · Infrastructure · AI Decision Support",
    duration: "5 weeks",
    role: "Product (case study)",
    problem:
      "Infrastructure planners lack accessible tools to estimate embodied carbon during early project stages. Existing LCA tools are complex, require expertise, and are used too late—resulting in high-emission decisions being locked in early.",
    approach: [
      "Applied JTBD framework to define core user need (early-stage decision support)",
      "Analyzed current workflows in infrastructure planning (BOQ, material selection)",
      "Evaluated existing solutions (LCA tools, manual methods) to identify gaps",
      "Defined MVP scope and AI use cases focused on speed, usability, and explainability",
    ],
    insights: [
      "Carbon decisions are made early, but tools are introduced too late",
      "Users prioritize speed and simplicity over accuracy in planning stages",
      "Complex tools discourage exploration of alternative materials",
      "Explainability is critical for trust in AI-driven decisions",
    ],
    solution:
      "Designed an AI-powered platform that generates carbon estimates from incomplete inputs, enables side-by-side comparison of materials and designs, provides plain-language explanations for decision-making, and allows export of insights for planning and approvals.",
    tradeoffs: [
      "Prioritized speed over accuracy — accepted directional insights instead of detailed LCA precision",
      "Limited scope to planning-stage only — excluded full lifecycle modeling and compliance workflows",
      "Avoided automation of decisions — kept system as decision-support, not decision-maker",
    ],
    metrics: [
      { label: "Decision speed", value: "Faster" },
      { label: "Early-stage coverage", value: "Planning-first" },
      { label: "Explainability", value: "Plain-language" },
    ],
  },
  {
    slug: "ashraya-pg-platform",
    title: "Ashraya — Smart PG Management Platform",
    summary:
      "Designed a centralized system to reduce daily friction in PG living by streamlining food, rent, and communication into a single platform.",
    context: "Consumer · Operations · Experience",
    duration: "4–5 weeks",
    role: "Product (case study)",
    problem:
      "PG living is highly fragmented—food updates, rent tracking, and communication are handled across WhatsApp, manual processes, and informal systems. This creates daily friction, lack of transparency, and poor user experience for residents.",
    approach: [
      "Observed and mapped day-to-day PG workflows (food, rent, communication)",
      "Identified repeated friction points through personal experience and peer inputs",
      "Broke down the system into core user needs (visibility, communication, tracking)",
      "Defined a simple MVP focused on solving high-frequency daily problems",
    ],
    insights: [
      "The problem isn't lack of tools—it's fragmentation across multiple channels",
      "Most issues occur daily, making small inefficiencies highly frustrating",
      "Users value clarity and predictability more than feature richness",
      "Communication gaps are a major source of dissatisfaction",
    ],
    solution:
      "Designed a centralized platform that displays daily food menus and updates, tracks rent and payment status, enables direct communication with PG management, and provides a simple dashboard for daily visibility.",
    tradeoffs: [
      "Prioritized simplicity over feature depth — avoided adding complex automation early",
      "Focused on residents as primary users — deferred owner-side complexity",
      "Limited scope to core daily use cases — excluded advanced analytics and integrations",
    ],
    metrics: [
      { label: "Daily visibility", value: "Improved" },
      { label: "Communication gaps", value: "Reduced" },
      { label: "Routine follow-ups", value: "Lower" },
    ],
  },
];

export const projects = [
  {
    title: "Spotify Discovery Teardown",
    desc: "Product teardown analyzing how Spotify's discovery surfaces drive engagement vs. listening depth.",
    tag: "Teardown",
  },
  {
    title: "AI Carbon Intelligence App",
    desc: "AI-powered decision-support tool for early-stage, carbon-aware infrastructure planning with explainable insights.",
    tag: "Dashboard",
  },
  {
    title: "AI Note-taking App PRD",
    desc: "End-to-end PRD for a voice-first note-taking app, including success metrics and rollout plan.",
    tag: "PRD",
  },
  {
    title: "Ashraya — Smart PG Platform",
    desc: "Centralized PG management experiment streamlining food, rent, and communication into one simple dashboard.",
    tag: "Experiment",
  },
];

export const experience = [
  {
    title: "Product Management with Agentic AI",
    org: "BITS Pilani School of Management",
    year: "2025 — 2026",
    desc: "Coursework focused on product management practices augmented with agentic AI workflows and decision-support systems.",
  },
  {
    title: "Business Analyst",
    org: "Cognizant",
    year: "2023",
    desc: "Built dashboards and ran funnel analyses to support decision-making across business teams.",
  },
  {
    title: "B.Tech in Technology",
    org: "G H Raisoni University",
    year: "2020 — 2024",
    desc: "Bachelor's in technology with coursework spanning CS fundamentals, statistics, and applied problem solving.",
  },
];
