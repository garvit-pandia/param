import { catalog } from "./catalog";

export type CraftId = "security" | "design" | "web";

export type Craft = {
  id: CraftId;
  /** Short name, used in labels and the footer. */
  label: string;
  /** Headline on the card. */
  title: string;
  summary: string;
  /** The individual services offered under this craft. */
  items: { title: string; text: string }[];
};

// Edit the text below to match exactly what you offer.
export const crafts: Craft[] = [
  {
    id: "security",
    label: "Cybersecurity",
    title: "Find the weak points before attackers do",
    summary:
      "We test your systems the way an attacker would, then show you exactly what to fix.",
    items: [
      {
        title: "VAPT",
        text: "Vulnerability assessment and penetration testing for networks, applications and systems.",
      },
      {
        title: "Web & API security testing",
        text: "Testing for the flaws that lead to breaches, defacement and data loss.",
      },
      {
        title: "Security hardening",
        text: "Server and network hardening, plus an exposure review of your own domains and accounts.",
      },
    ],
  },
  {
    id: "design",
    label: "Graphic Design",
    title: "A brand that looks sharp everywhere",
    summary:
      "Visuals that stay consistent from your logo to your latest social post.",
    items: [
      {
        title: "Brand & logo design",
        text: "Logos, colour palettes and brand kits your whole business can build on.",
      },
      {
        title: "Social media creatives",
        text: "Posts, ad creatives and thumbnails designed to stop the scroll.",
      },
      {
        title: "Print & marketing design",
        text: "Posters, banners, flyers and UI mockups for websites and apps.",
      },
    ],
  },
  {
    id: "web",
    label: "Web Development",
    title: "Fast websites that work on every screen",
    summary:
      "From a one-page landing site to a full web app, built with modern tools.",
    items: [
      {
        title: "Landing pages & business sites",
        text: "Responsive sites that load quickly and are easy to keep up to date.",
      },
      {
        title: "Web apps",
        text: "Products built with React and Next.js, including forms, databases and integrations.",
      },
      {
        title: "Interactive 3D & launch",
        text: "Three.js / WebGL experiences, plus deployment, domains and hosting setup.",
      },
    ],
  },
];

/** "How it works", in order. */
export const steps = [
  {
    id: "brief",
    title: "Tell us what you need",
    text: "Send a short note through the form: a security test, a logo, a website or a premium tool.",
  },
  {
    id: "plan",
    title: "Get a plan and a price",
    text: "We reply with the scope, the timeline and a quote before any work starts.",
  },
  {
    id: "work",
    title: "We do the work",
    text: "You get updates along the way. Security testing only begins with the owner's written permission.",
  },
  {
    id: "handover",
    title: "Handover",
    text: "You receive the report, the design files or the live site, explained in plain language.",
  },
] as const;

/** The three promises shown above the tools catalog. */
export const promises = [
  {
    id: "instant",
    title: "Instant activation",
    text: "No waiting periods. Your access is set up the moment your payment is verified.",
  },
  {
    id: "private",
    title: "Private & secure",
    text: "Unlike shared accounts, tools are activated exclusively on your own email or custom accounts.",
  },
  {
    id: "price",
    title: "Best price guarantee",
    text: "Found a cheaper deal? Tell us the price and we will beat it.",
  },
] as const;

/** Tick list in the "About" section. */
export const highlights = [
  "Penetration testing (VAPT)",
  "Web & API security",
  "Logo & brand design",
  "Social media creatives",
  "Websites & web apps",
  "Premium tool activations",
];

export const productCount = catalog.reduce(
  (total, category) => total + category.products.length,
  0,
);

/** Numbers shown on the page. All four are counted from the data, not typed in. */
export const stats = [
  { value: String(crafts.length), label: "Crafts under one roof" },
  {
    value: String(crafts.reduce((total, craft) => total + craft.items.length, 0)),
    label: "Services to choose from",
  },
  { value: `${productCount}+`, label: "Premium tools" },
  { value: String(catalog.length), label: "Tool categories" },
];
