import { catalog } from "./catalog";

export type PillarId = "security" | "design" | "web";

// Edit the text below to match exactly what you offer.

/** The three cards under the hero. */
export const pillars: { id: PillarId; title: string; text: string }[] = [
  {
    id: "security",
    title: "Cybersecurity",
    text: "Penetration testing, security audits and hardening that find the weak points in your systems before attackers do.",
  },
  {
    id: "design",
    title: "Graphic Design",
    text: "Logos, brand identity, social media creatives and print designs that make your business look sharp everywhere.",
  },
  {
    id: "web",
    title: "Web Development",
    text: "Fast, responsive websites and web apps built with modern tools, from a single landing page to a full product.",
  },
];

export type ServiceItem = {
  id: string;
  pillar: PillarId;
  title: string;
  text: string;
};

/** "Our Services": the first three sit on the left, the last three on the right. */
export const serviceItems: ServiceItem[] = [
  {
    id: "vapt",
    pillar: "security",
    title: "VAPT Services",
    text: "Vulnerability assessment and penetration testing for networks, applications and systems, with fixes ranked by risk.",
  },
  {
    id: "web-security",
    pillar: "security",
    title: "Web Security Testing",
    text: "Testing of websites, web apps and APIs for the flaws that lead to breaches, defacement and data loss.",
  },
  {
    id: "hardening",
    pillar: "security",
    title: "Security Hardening",
    text: "Server and network hardening, plus an exposure review of your own domains and accounts.",
  },
  {
    id: "branding",
    pillar: "design",
    title: "Brand & Logo Design",
    text: "Logos, colour palettes and brand kits that keep your business consistent everywhere it shows up.",
  },
  {
    id: "creatives",
    pillar: "design",
    title: "Social Media Creatives",
    text: "Posts, ad creatives, posters, banners and thumbnails designed to stop the scroll.",
  },
  {
    id: "websites",
    pillar: "web",
    title: "Website Development",
    text: "Landing pages, business websites and web apps with React and Next.js, including interactive 3D.",
  },
];

/** Tick list in the "About us" section. */
export const highlights = [
  "Penetration Testing (VAPT)",
  "Web & API Security",
  "Logo & Brand Design",
  "Social Media Creatives",
  "Websites & Web Apps",
  "Premium Tool Activations",
];

export const productCount = catalog.reduce(
  (total, category) => total + category.products.length,
  0,
);

export type Track = {
  id: "services" | "catalog";
  badge: string;
  title: string;
  price: string;
  priceNote: string;
  summary: string;
  features: string[];
  cta: string;
};

/** The two cards that explain the two ways to work with us. */
export const tracks: Track[] = [
  {
    id: "services",
    badge: "SERVICES",
    title: "Project Work",
    price: "Custom Quote",
    priceNote: "/project",
    summary: "Security, design and web projects priced to your scope",
    features: [
      "Vulnerability assessment & penetration testing",
      "Web application & API security testing",
      "Network and server hardening",
      "Clear reports with fixes ranked by risk",
      "Logos & brand identity",
      "Social media posts & ad creatives",
      "Posters, banners & thumbnails",
      "Landing pages & business websites",
      "Web apps with React & Next.js",
      "Interactive 3D with Three.js / WebGL",
      "Deployment, domains & hosting setup",
    ],
    cta: "Get a Quote",
  },
  {
    id: "catalog",
    badge: "PREMIUM TOOLS",
    title: "Premium Catalog",
    price: "Best Price",
    priceNote: "guaranteed",
    summary: "Premium tools and subscriptions on your own account",
    features: [
      `${productCount}+ premium tools & subscriptions`,
      "AI, dev & automation tools",
      "Design, video & creator tools",
      "Content & writing tools",
      "Business & collaboration tools",
      "Education & career plans",
      "Lifetime licences & keys",
      "Activated on your own account",
      "Instant delivery once payment is verified",
      "Genuine activations",
      "Found it cheaper? We will beat the price",
    ],
    cta: "Browse Catalog",
  },
];

/** Numbers shown in the counter strip. The first two are counted from the catalog. */
export const stats = [
  { id: "tools", value: productCount, suffix: "+", label: "Premium Tools" },
  { id: "categories", value: catalog.length, suffix: "", label: "Tool Categories" },
  { id: "genuine", value: 100, suffix: "%", label: "Genuine Activations" },
  { id: "delivery", value: 24, suffix: "/7", label: "Instant Delivery" },
] as const;

/** Rows in "Why choose us". */
export const reasons = [
  {
    id: "instant",
    title: "Instant Activation",
    text: "No waiting periods. Get your premium access deployed the moment your payment is verified.",
  },
  {
    id: "private",
    title: "Private & Secure",
    text: "Unlike shared accounts, our tools are activated exclusively on your own email or custom accounts.",
  },
  {
    id: "price",
    title: "Best Price Guarantee",
    text: "Found a cheaper deal? Tell us the price and we will beat it. Unmatched rates in the market.",
  },
  {
    id: "trusted",
    title: "DTS / NSD Trusted",
    text: "Vetted and verified premium setups, backed by our promise of quality.",
  },
] as const;
