export type Product = {
  name: string;
  /** How long the plan lasts, shown as the tag on the card. */
  validity: string;
};

export type Category = {
  id: string;
  /** Short name used on the filter button. */
  label: string;
  /** Heading shown above the cards. */
  title: string;
  products: Product[];
};

// To add or remove a product, edit the list for its category below.
export const catalog: Category[] = [
  {
    id: "ai-dev",
    label: "AI / Dev / Auto",
    title: "AI, Dev & Automation",
    products: [
      { name: "ChatPRD Pro", validity: "1 Year" },
      { name: "Perplexity Pro", validity: "1 Year" },
      { name: "Raycast Pro", validity: "1 Year" },
      { name: "Replit Core", validity: "1 Year" },
      { name: "Lovable Pro (100 Credits/Month)", validity: "1 Year" },
      { name: "Hostinger Cloud Startup", validity: "1 Year" },
      { name: "Postman Basic", validity: "1 Year" },
      { name: "GitLab Ultimate", validity: "12 Months" },
      { name: "Supabase Pro", validity: "12 Months" },
      { name: "n8n Starter", validity: "1 Year" },
      { name: "Make.com Team", validity: "1 Year" },
      { name: "Devin AI Core", validity: "1 Year" },
      { name: "Bolt Pro", validity: "1 Year" },
      { name: "Vapi", validity: "$200 Credits (12M)" },
      { name: "Deepgram", validity: "1199 Credits (12M)" },
      { name: "Firecrawl AI", validity: "50K Credits – 1 Year" },
      { name: "Bubble.io", validity: "$500 Credits – 3 Months" },
    ],
  },
  {
    id: "design",
    label: "Design / Video",
    title: "Design, Video & Creator",
    products: [
      { name: "Beautiful.ai Pro", validity: "1 Year" },
      { name: "Mobbin Pro", validity: "1 Year" },
      { name: "Magic Patterns Hobby", validity: "1 Year" },
      { name: "Gamma Pro", validity: "1 Year" },
      { name: "Mermaid Chart Pro", validity: "1 Year" },
      { name: "Webflow CMS", validity: "1 Year" },
      { name: "Webflow Business", validity: "1 Year" },
      { name: "Webflow Growth", validity: "Lifetime" },
      { name: "Framer Basic / Pro", validity: "1 Year" },
      { name: "Adobe Creative Cloud Pro Plus", validity: "1 Year" },
      { name: "Descript Creator", validity: "1 Year" },
      { name: "Movavi Unlimited", validity: "1 Year" },
      { name: "Flixier Pro", validity: "1 Year" },
      { name: "Slidebean Starter", validity: "1 Year" },
      { name: "Warp Pro", validity: "1 Year" },
      { name: "Rive.app Cadet", validity: "1 Year" },
      { name: "Runway ML Unlimited", validity: "1 Month" },
    ],
  },
  {
    id: "content",
    label: "Content / Writing",
    title: "Content & Writing",
    products: [
      { name: "Wispr Flow Pro", validity: "1 Year" },
      { name: "Jasper Pro", validity: "1 Month" },
      { name: "Lex Pro", validity: "1 Month / 1 Year" },
      { name: "Wordtune Unlimited", validity: "1 Month" },
      { name: "Jenni AI Unlimited", validity: "1 Month" },
      { name: "Quillbot Premium", validity: "1 Month" },
      { name: "Writer.com Starter", validity: "1 Month" },
      { name: "Paperpal Prime", validity: "1 Month" },
    ],
  },
  {
    id: "business",
    label: "Business / Collab",
    title: "Business & Collaboration",
    products: [
      { name: "Notion Business + AI", validity: "3 / 6 Months" },
      { name: "Airtable Teams / Business", validity: "1 Month" },
      { name: "Asana Advanced", validity: "6 Months" },
      { name: "Miro Starter (1 Seat)", validity: "1 Year" },
      { name: "Miro Business", validity: "3 Months" },
      { name: "Sentry Teams", validity: "6 Months" },
      { name: "Sentry Business", validity: "1 Year" },
      { name: "Frame.io Teams", validity: "3 Months" },
      { name: "ClickUp Business / Enterprise", validity: "1 Year" },
      { name: "Bitwarden Premium + Family", validity: "1 Year" },
      { name: "Backblaze Cloud Unlimited", validity: "1 Year" },
      { name: "PromptDrive Teams", validity: "1 Year" },
    ],
  },
  {
    id: "edu",
    label: "Edu / Career",
    title: "Education & Career",
    products: [
      { name: "LinkedIn Career / Business Premium", validity: "3 Months" },
      { name: "LinkedIn Sales Navigator Core", validity: "2 Months" },
      { name: "JetBrains All Products Pack", validity: "1 Year" },
      { name: "Scrimba Pro", validity: "1 Year" },
    ],
  },
  {
    id: "short-term",
    label: "Short Term",
    title: "Short Term Deals",
    products: [
      { name: "CodeRabbit Pro", validity: "1-2 Months" },
      { name: "Figma Pro", validity: "1 Month" },
      { name: "Cloudinary Plus", validity: "1 Month" },
      { name: "Expo.dev Starter", validity: "1 Month" },
      { name: "FlutterFlow Premium", validity: "2 Months" },
      { name: "Cosine.sh Hobby/Pro", validity: "1 Month" },
      { name: "Ebookmaker.ai", validity: "1 Month" },
      { name: "Humanic AI Growth/Scale", validity: "1 Month" },
      { name: "AMZScout AI Bundle", validity: "1 Month" },
      { name: "Dev.to Plus Plus", validity: "1 Month" },
      { name: "Wiroom.io Pro/Teams", validity: "3 Months" },
      { name: "Dreamlit Pro", validity: "6 Months" },
    ],
  },
  {
    id: "lifetime",
    label: "Lifetime / Keys",
    title: "Lifetime & Keys",
    products: [
      { name: "Windows 10/11 Pro", validity: "Lifetime" },
      { name: "Office 2019 / 2021 Professional Plus", validity: "Lifetime" },
      { name: "Office 365 (5 Devices + 5TB Cloud)", validity: "Lifetime" },
      { name: "Windows 10 / 11 Enterprise LTSC", validity: "Lifetime" },
      { name: "Visio / Project 2021 Professional Plus", validity: "Lifetime" },
      { name: "Rezi AI", validity: "Lifetime" },
      { name: "PNGTree Premium", validity: "Lifetime" },
    ],
  },
];
