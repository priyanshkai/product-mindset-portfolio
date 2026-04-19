export const profile = {
  name: "Priyansh Kailabag",
  title: "Aspiring Product Manager",
  tagline: "I identify user pain points, translate them into product decisions, and build data-backed solutions that drive measurable impact.",
  bio: "I'm an aspiring Product Manager passionate about building products that solve real user problems. I focus on the intersection of user research, data, and business strategy — translating ambiguity into clear, prioritized roadmaps. I enjoy breaking down complex problems, identifying leverage points, and shipping iteratively.",
  email: "hello@example.com",
  linkedin: "https://linkedin.com/in/yourhandle",
  github: "https://github.com/yourhandle",
};

export const skills = [
  { label: "Product Thinking", desc: "Problem framing, prioritization, roadmapping" },
  { label: "Analytics", desc: "SQL, A/B testing, funnel analysis" },
  { label: "User Research", desc: "Interviews, surveys, usability testing" },
  { label: "Growth", desc: "Activation, retention, north-star metrics" },
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
    slug: "improving-onboarding",
    title: "Reducing Drop-off in SaaS Onboarding",
    summary: "Redesigned a 5-step signup flow and lifted activation by 28% through progressive disclosure.",
    context: "B2B SaaS · Growth Team",
    duration: "6 weeks",
    role: "Product (case study)",
    problem:
      "Free-trial users were dropping off at 47% during onboarding. Sales flagged that activated users converted 3× more, making onboarding the highest-leverage funnel to fix.",
    approach: [
      "Funnel analysis to pinpoint the steepest drop-off step",
      "8 user interviews with churned trial users",
      "Heuristic review of competitor onboarding flows",
      "Hypothesis tree to prioritize 4 testable interventions",
    ],
    insights: [
      "62% of churned users never reached the 'first value' moment",
      "Users perceived the workspace setup as work, not value",
      "Most users wanted to explore before committing data",
    ],
    solution:
      "Replaced the linear setup with a sample-data sandbox, deferred workspace configuration, and added a single 'aha-moment' task surfaced on first login.",
    tradeoffs: [
      "Sample data risked confusion vs. real data — mitigated with a clear 'demo' badge",
      "Skipping setup added technical debt for the data team — scoped as a 1-sprint follow-up",
    ],
    metrics: [
      { label: "Activation rate", value: "+28%" },
      { label: "Time to first value", value: "−54%" },
      { label: "Trial-to-paid", value: "+11%" },
    ],
  },
  {
    slug: "checkout-redesign",
    title: "Mobile Checkout: Cutting Cart Abandonment",
    summary: "Identified friction in a 4-step mobile checkout and proposed a one-page flow validated with prototypes.",
    context: "D2C E-commerce · Self-initiated teardown",
    duration: "4 weeks",
    role: "Product (case study)",
    problem:
      "A mid-market D2C brand had 71% cart abandonment on mobile vs. 58% on desktop. Most attempts to fix it focused on payment options, not the underlying flow.",
    approach: [
      "Session-replay review of 40 abandoned carts",
      "Comparative teardown of 6 best-in-class checkouts",
      "Quant survey of 120 shoppers on perceived friction",
      "Prototype tested with 5 users via moderated sessions",
    ],
    insights: [
      "Address entry caused 38% of mobile drop-offs",
      "Users distrusted the order summary because totals updated late",
      "Guest checkout was hidden behind a login wall",
    ],
    solution:
      "Single-page checkout with autofill-first address, sticky order summary, and guest checkout as the default path. Login surfaced only post-purchase.",
    tradeoffs: [
      "Lower account creation rate — offset by post-purchase nudges",
      "Engineering complexity for sticky summary on small viewports",
    ],
    metrics: [
      { label: "Projected abandonment", value: "−14 pts" },
      { label: "Tasks completed (usability)", value: "5/5" },
      { label: "Avg. time to checkout", value: "−32%" },
    ],
  },
  {
    slug: "creator-retention",
    title: "Improving Week-2 Retention for a Creator Tool",
    summary: "Used cohort analysis to find a 'second-session gap' and proposed a habit-forming notification loop.",
    context: "Consumer · Creator economy",
    duration: "5 weeks",
    role: "Product (case study)",
    problem:
      "A creator tool had healthy day-1 sign-ups but only 19% W2 retention. Leadership wanted hypotheses before committing engineering capacity.",
    approach: [
      "Cohort analysis by acquisition channel and persona",
      "Built a retention curve and benchmarked against PMF heuristics",
      "Mapped the user journey and identified the 'second session' as the key gap",
      "Drafted RICE-prioritized intervention list",
    ],
    insights: [
      "Users who returned within 72h retained 4× better",
      "No trigger existed to bring users back after first export",
      "Top creators shared their work externally — a built-in loop was missing",
    ],
    solution:
      "Proposed a lightweight notification loop tied to publishing milestones, plus a 'share to socials' primitive that doubles as a re-engagement trigger.",
    tradeoffs: [
      "Notifications risk feeling spammy — mitigated with frequency caps",
      "Social share primitive adds scope — phased as MVP first",
    ],
    metrics: [
      { label: "W2 retention (target)", value: "+12 pts" },
      { label: "Second-session rate", value: "+40%" },
      { label: "Hypotheses prioritized", value: "11 → 3" },
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
    title: "E-commerce Funnel Dashboard",
    desc: "Power BI dashboard tracking acquisition, activation, and retention with cohort views.",
    tag: "Dashboard",
  },
  {
    title: "AI Note-taking App PRD",
    desc: "End-to-end PRD for a voice-first note-taking app, including success metrics and rollout plan.",
    tag: "PRD",
  },
  {
    title: "Newsletter Growth Experiment",
    desc: "8-week content experiment testing hooks, formats, and CTAs to grow a niche newsletter.",
    tag: "Experiment",
  },
];

export const experience = [
  {
    title: "Product Management Certification",
    org: "Reforge / Coursera",
    year: "2024",
    desc: "Completed coursework on growth, retention, and product strategy frameworks.",
  },
  {
    title: "Data Analytics Internship",
    org: "Company Name",
    year: "2023",
    desc: "Built dashboards and ran funnel analyses to support marketing decisions.",
  },
  {
    title: "B.Tech / Bachelor's Degree",
    org: "University Name",
    year: "2020 — 2024",
    desc: "Coursework in CS, statistics, and business fundamentals.",
  },
];
