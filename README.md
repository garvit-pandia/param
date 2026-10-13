# Hackers Family

Website for Hackers Family: software development, AI and business automation, and cybersecurity (penetration testing, OSINT and cloud security reviews).

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
| Service areas, security cards, service list, counters, "why choose us" | `data/services.ts` |
| Websites shown in "Our Work" | `data/work.ts`, with a screenshot of the same name in `images/work/` |
| FAQ questions and answers | `data/faq.ts` |
| Photos and 3D icons | files in `images/`, wired up in `data/images.ts` |
| Where each picture is placed | `components/art.tsx` |
| Picture sources and licences | `docs/image-credits.md` |
| Colours, fonts, layout | `app/globals.css` |

## Request form

The form opens from the header ("Contact Us") and from any service or security card ("Get a Quote"), with the message pre-filled. It is not connected to a backend yet: `lib/submit-request.ts` is the one function to fill in. Until then the form tells the visitor the request was not sent.

## Stack

Next.js 16 (App Router), React 19, TypeScript, plain CSS. Deployed on Vercel.
