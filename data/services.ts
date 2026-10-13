import { work } from "./work";

export type AreaId = "software" | "ai" | "security" | "saas";

// Edit the text below to match exactly what you offer.

/** The four cards under the hero: everything we do, at a glance. */
export const areas: { id: AreaId; title: string; text: string }[] = [
  {
    id: "software",
    title: "Software Development",
    text: "Websites, web applications, business dashboards, APIs and custom software built around the way you work.",
  },
  {
    id: "ai",
    title: "AI & Business Automation",
    text: "Chatbots, AI integrations, workflow automation and document processing that take the busywork off your team.",
  },
  {
    id: "security",
    title: "Cybersecurity & OSINT",
    text: "VAPT, application security, cloud assessments and digital exposure intelligence, before attackers get there first.",
  },
  {
    id: "saas",
    title: "SaaS Products",
    text: "Launch your own subscription software, security automation or OSINT platform, taken from idea to live product.",
  },
];

export type SecurityService = {
  id: "vapt" | "osint" | "cloud";
  badge: string;
  title: string;
  summary: string;
  /** What is covered, shown as the tick list on the card. */
  checks: string[];
  /** The service we lead with gets the brighter card. */
  featured?: boolean;
};

/** The three security cards. The order here is the order on the page. */
export const securityServices: SecurityService[] = [
  {
    id: "vapt",
    badge: "FLAGSHIP",
    title: "VAPT & Penetration Testing",
    summary: "We attack your systems the way a real intruder would, then confirm the fixes hold.",
    checks: [
      "Web application penetration testing",
      "API security testing",
      "Network and infrastructure testing",
      "Mobile application security testing",
      "Vulnerability assessment and remediation verification",
    ],
    featured: true,
  },
  {
    id: "osint",
    badge: "OSINT",
    title: "OSINT & Digital Exposure Intelligence",
    summary: "See what the open internet already reveals about your business.",
    checks: [
      "External attack-surface discovery",
      "Domain and subdomain exposure analysis",
      "Publicly exposed credentials and data checks",
      "Brand impersonation and phishing-domain monitoring",
      "Threat intelligence and digital footprint assessments",
    ],
  },
  {
    id: "cloud",
    badge: "CLOUD",
    title: "Cloud & Infrastructure Security",
    summary: "Close the gaps in the accounts, servers and storage you run on.",
    checks: [
      "AWS, Azure and Google Cloud configuration reviews",
      "Identity and access management reviews",
      "Server and firewall configuration assessments",
      "Cloud storage exposure checks",
      "Security hardening recommendations",
    ],
  },
];

export type ServiceItem = {
  id: string;
  title: string;
  text: string;
};

/** "Our Services": the first three sit on the left, the last three on the right. */
export const serviceItems: ServiceItem[] = [
  {
    id: "websites",
    title: "Websites & Web Apps",
    text: "Landing pages, business websites and full web applications with React and Next.js, including interactive 3D.",
  },
  {
    id: "software",
    title: "Dashboards & Custom Software",
    text: "Business dashboards, APIs and custom software shaped around the way your team already works.",
  },
  {
    id: "automation",
    title: "AI & Workflow Automation",
    text: "Chatbots, AI integrations and document processing that turn repetitive work into a workflow that runs itself.",
  },
  {
    id: "testing",
    title: "Security Testing & OSINT",
    text: "Penetration tests, cloud reviews and digital exposure checks, reported with fixes ranked by risk.",
  },
  {
    id: "products",
    title: "SaaS Product Builds",
    text: "Subscription software taken from first idea to launch, including security automation and OSINT platforms.",
  },
  {
    id: "branding",
    title: "Brand & Graphic Design",
    text: "Logos, brand kits and social media creatives that keep your business consistent everywhere it shows up.",
  },
];

/** Tick list in the "About us" section. */
export const highlights = [
  "Websites & Web Apps",
  "Custom Software & APIs",
  "AI & Workflow Automation",
  "Penetration Testing (VAPT)",
  "OSINT & Exposure Checks",
  "Cloud Security Reviews",
];

const checkCount = securityServices.reduce(
  (total, service) => total + service.checks.length,
  0,
);

/** Numbers shown in the counter strip. The first three are counted from the data files. */
export const stats = [
  { id: "areas", value: areas.length, suffix: "", label: "Service Areas" },
  { id: "sites", value: work.length, suffix: "", label: "Websites Designed" },
  { id: "checks", value: checkCount, suffix: "", label: "Security Checks" },
  { id: "permission", value: 100, suffix: "%", label: "Permission-Based Testing" },
] as const;

/** Rows in "Why choose us". */
export const reasons = [
  {
    id: "permission",
    title: "Permission First",
    text: "We only test systems you own or are authorised to test, and only after written permission.",
  },
  {
    id: "reports",
    title: "Fixes Ranked by Risk",
    text: "Every finding comes with a clear fix, sorted by how much it matters, and a re-test once it is patched.",
  },
  {
    id: "team",
    title: "Builders Who Think Like Attackers",
    text: "The team that writes your software also knows how it gets broken into, so security is built in from day one.",
  },
  {
    id: "price",
    title: "Priced to Your Scope",
    text: "You get a plan and a custom quote for the project in front of you before any work starts.",
  },
] as const;
