// Brand details used across the site. Change the name here and it updates everywhere.
export const site = {
  nameFirst: "Hackers",
  nameAccent: "Family",
  title: "Hackers Family | Cybersecurity, Design & Web Development",
  description:
    "Cybersecurity services, graphic design and website development from Hackers Family, plus premium tools and subscriptions at the best prices.",
  tagline:
    "Cybersecurity, graphic design and website development, plus premium tools at the best prices.",
  notes: [
    "Security testing is carried out only with the owner's written permission.",
    "Instant delivery & genuine activations.",
  ],
  copyright: "Copyright © 2026 Hackers Family. All rights reserved.",
} as const;

export const siteName = `${site.nameFirst} ${site.nameAccent}`;

// Links shown in the header and in the footer's "Quick Links".
export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#catalog", label: "Catalog" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#faq", label: "FAQ" },
] as const;
