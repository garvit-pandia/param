// Brand details used across the site. Change the name here and it updates everywhere.
export const site = {
  nameFirst: "Hackers",
  nameAccent: "Family",
  title: "Hackers Family | Software, AI Automation & Cybersecurity",
  description:
    "Software development, AI and business automation, and cybersecurity from Hackers Family: penetration testing, OSINT and cloud security reviews under one roof.",
  tagline:
    "Software development, AI automation and cybersecurity, from the first build to the final penetration test.",
  notes: [
    "Security testing is carried out only with the owner's written permission.",
    "Exposure checks cover only the domains, brands and accounts you own.",
  ],
  copyright: "© 2026 Hackers Family. All rights reserved.",
} as const;

export const siteName = `${site.nameFirst} ${site.nameAccent}`;

/** Where people can write to Hackers Family. Shown in the footer, the call to action and the request form. */
export const contactEmails = ["hackersfamily213@gmail.com", "hackersfamily213@outlook.com"] as const;

/** Who designed and built the website, shown at the bottom of the footer. */
export const credit = {
  name: "Garvit Pandia",
  email: "mail@garvitpandia.me",
  portfolio: "https://garvitpandia.me",
  portfolioLabel: "garvitpandia.me",
} as const;

// Links shown in the header and in the footer. Each href matches a section id on the page.
export const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#security", label: "Security" },
  { href: "#work", label: "Our Work" },
  { href: "#process", label: "How it works" },
  { href: "#about", label: "About" },
  { href: "#faq", label: "FAQ" },
] as const;
