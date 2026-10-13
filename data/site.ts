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
  copyright: "Copyright © 2026 Hackers Family. All rights reserved.",
} as const;

export const siteName = `${site.nameFirst} ${site.nameAccent}`;

// Links shown in the header and in the footer's "Quick Links".
export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#security", label: "Security" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#work", label: "Our Work" },
  { href: "#faq", label: "FAQ" },
] as const;
