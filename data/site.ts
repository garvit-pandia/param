// Brand details used across the site. Change the name here and it updates everywhere.
export const site = {
  nameFirst: "Hackers",
  nameAccent: "Family",
  title: "Hackers Family | Cybersecurity, Design & Web Development",
  description:
    "One team for cybersecurity, graphic design and website development, plus premium tools and subscriptions at the best prices.",
  tagline:
    "Cybersecurity, graphic design and website development from one team, plus premium tools at the best prices.",
  notes: ["Security testing is carried out only with the owner's written permission."],
  copyright: "© 2026 Hackers Family. All rights reserved.",
} as const;

export const siteName = `${site.nameFirst} ${site.nameAccent}`;

// Links shown in the header and in the footer. Each href matches a section id on the page.
export const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#process", label: "How it works" },
  { href: "#tools", label: "Premium tools" },
  { href: "#about", label: "About" },
  { href: "#faq", label: "FAQ" },
] as const;
