# Hackers Family

Website for Hackers Family: cybersecurity services, graphic design and website development, plus a catalog of premium tools and subscriptions.

## Run it

```bash
npm install
npm run dev
```

Dev URL: **http://localhost:5184**

| Command | What it does |
|---|---|
| `npm run dev` | Dev server on port 5184 |
| `npm run build` | Production build |
| `npm start` | Serves the production build on port 5184 |
| `npm run lint` | Lint check |

The port is fixed in `package.json`. If 5184 is busy, find what is using it (`ss -ltnp`) rather than changing the port.

## Editing content

| What | Where |
|---|---|
| Brand name, nav links, tagline, footer notes | `data/site.ts` |
| Services, "how it works" steps, promises, stats | `data/services.ts` |
| Catalog products and categories | `data/catalog.ts` |
| FAQ questions and answers | `data/faq.ts` |
| Photos and 3D icons | files in `images/`, wired up in `data/images.ts` |
| Picture sources and licences | `docs/image-credits.md` |
| Colours, fonts, layout | `app/globals.css` |

## Request form

The form opens from the header, from a service ("Get a quote") and from a tool ("Request"), with the message pre-filled. It is not connected to a backend yet: `lib/submit-request.ts` is the one function to fill in. Until then the form tells the visitor the request was not sent.

## Accessibility

The page is built to WCAG 2.2 AA: one `<h1>` and ordered headings, labelled landmarks, a skip link, AA colour contrast, 44 px touch targets, a keyboard-friendly menu and form, announced search results and form status, and no motion for people who ask for reduced motion.

## Stack

Next.js 16 (App Router), React 19, TypeScript, plain CSS. Deployed on Vercel.
