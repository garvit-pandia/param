<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Project rules (Hackers Family site)

- **Dev URL:** http://localhost:5184 (`npm run dev`). The port is pinned in `package.json` and registered in `../PORT-REGISTRY.md`. If it is busy, find the owner with `ss -ltnp`; do not switch ports and do not kill a server you did not start.
- **After any change:** run `npm run lint` and `npm run build`, then check the page at a phone width (390 px) and a desktop width: nav links and the phone menu, the four service-area cards, the three security cards, the six services, the "Our Work" cards and their links, the FAQ, the bottom action bar on phones, and the request form opening from a card.
- **Stack:** Next.js 16 App Router with `cacheComponents`, React 19, TypeScript, npm, plain CSS in `app/globals.css` (no Tailwind). No backend, no login, no database.
- **Design:** deep navy background with blue and sky accents; Space Grotesk for headings, Inter for body text, JetBrains Mono for small labels. Colours, radii and spacing are variables at the top of `app/globals.css`; use them instead of new values. Sizes are in `rem` so the page follows the reader's text-size setting. The 3D icons are the 3dicons "gradient" style, shifted to blue by the `.icon3d` filter.
- **Page structure:** hero, service areas, security services, our services, our work, how it works, about (with the counters), why choose us, FAQ, call to action, footer. Each section is a `<section>` named by its heading through `aria-labelledby`; there is one `<h1>` and the headings go in order without skipping a level.
- **Accessibility (keep these working):**
  - text and buttons meet WCAG AA contrast, so check any new colour pair before using it;
  - every control is reachable by keyboard and shows the shared focus ring;
  - buttons and links are at least 44 px tall;
  - the request form is a native `<dialog>` opened with `showModal()`, which traps focus, closes on Escape and returns focus to the button that opened it;
  - form results are announced through the status line inside the form;
  - each "Our Work" card is one link (the title link is stretched over the card) that says it opens in a new tab;
  - decorative images have empty `alt`, and animation is switched off under `prefers-reduced-motion`.
- **Scroll-in animation:** the `.reveal` class is CSS only (`animation-timeline: view()`), so nothing is hidden if scripts fail. Do not replace it with script-driven hiding.
- **Phones:** below 560 px the service-area cards, steps and security cards stack one per row (area and step cards put the icon beside the text), and a bar with the two main actions is pinned to the bottom once the hero scrolls away (`components/MobileCta.tsx`). The menu button replaces the nav below 1140 px.
- **Where things live:** brand name, nav links, footer text, the two contact email addresses and the website credit in `data/site.ts`; the four service areas, the three security cards, the six services, the four steps, counters and "why choose us" rows in `data/services.ts`; the websites in "Our Work" in `data/work.ts`; questions in `data/faq.ts`; the request form and its open/close state in `components/RequestAccess.tsx`.
- **Pictures:** photos and 3D icons live in `images/`, are imported once in `data/images.ts`, and are shown with `next/image` (served as AVIF, with WebP as the fallback). Every file must have a row in `docs/image-credits.md` with its source and a licence that allows commercial use. The logo mark in `components/graphics.tsx` and the small interface glyphs (ticks, menu, form icons) stay as code.
- **Numbers and claims:** the counters are counted from the lists in `data/services.ts` and `data/work.ts`. Do not add testimonials, client counts, certifications or other figures that are not real.
- **What is not sold here:** no reselling of software subscriptions, licence keys or account activations, and no lookups of other people's personal records. Security and OSINT work is described as done for the owner of the systems, with written permission.
- **Request form:** `lib/submit-request.ts` is the only place that sends a request, and it is not connected to anything yet. Until it is, the form must keep reporting that the request was not sent. Never show a success message for a request that was not stored.
- **Services:** add or change services in `data/services.ts` only; the page builds the cards from it. A new id there needs a matching icon in `data/images.ts`.
- **Git:** do not commit or push unless asked. Commit messages, code comments and docs are written in the owner's voice and never mention tooling used to write them.
