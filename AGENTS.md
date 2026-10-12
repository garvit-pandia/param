<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Project rules (Hackers Family site)

- **Dev URL:** http://localhost:5184 (`npm run dev`). The port is pinned in `package.json` and registered in `../PORT-REGISTRY.md`. If it is busy, find the owner with `ss -ltnp`; do not switch ports and do not kill a server you did not start.
- **After any change:** run `npm run lint` and `npm run build`, then check the page at a phone width (390 px) and a desktop width: nav links and the phone menu, catalog tiles and "View More", the FAQ, the bottom action bar on phones, and the request form opening from a card.
- **Stack:** Next.js 16 App Router with `cacheComponents`, React 19, TypeScript, npm, plain CSS in `app/globals.css` (no Tailwind). No backend, no login, no database.
- **Design:** black background, neon green (`--green`), grey-green panels (`--panel`), Roboto Serif throughout, pill buttons with the green-to-grey gradient (`--grad`). Colours are variables at the top of `app/globals.css`; use them instead of new hex values.
- **Phones:** below 520 px the category tiles are one swipeable row, products are two per row, and a bar with the two main actions is pinned to the bottom once the hero scrolls away (`components/MobileCta.tsx`). The menu button replaces the nav below 1200 px.
- **Where things live:** brand name, nav links and footer text in `data/site.ts`; service cards, plan cards, counters and "why choose us" rows in `data/services.ts`; products in `data/catalog.ts`; questions in `data/faq.ts`; the request form and its open/close state in `components/RequestAccess.tsx`.
- **Pictures:** photos and 3D icons live in `images/`, are imported once in `data/images.ts`, and are laid out in `components/art.tsx` with `next/image`. Every file must have a row in `docs/image-credits.md` with its source and a licence that allows commercial use. The logo mark in `components/graphics.tsx` and the small interface glyphs (ticks, menu, form icons) stay as code.
- **Numbers and claims:** the counters are derived from the catalog. Do not add testimonials, client counts or other figures that are not real.
- **Request form:** `lib/submit-request.ts` is the only place that sends a request, and it is not connected to anything yet. Until it is, the form must keep reporting that the request was not sent. Never show a success message for a request that was not stored.
- **Catalog:** add or remove products in `data/catalog.ts` only; the page builds the cards and filter buttons from it.
- **Git:** do not commit or push unless asked. Commit messages, code comments and docs are written in the owner's voice and never mention tooling used to write them.
