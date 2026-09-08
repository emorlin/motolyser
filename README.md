# Motolyser

Marketing site for **Motolyser** and **Magnalyser** — precision measurement tools for sensor-equipped brushless motors, built by [Sepro AB](https://motolyser.com).

Stack: [Next.js](https://nextjs.org) (App Router) · [Tailwind CSS v4](https://tailwindcss.com) · TypeScript · deployed on [Vercel](https://vercel.com).

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Other scripts: `npm run build`, `npm start`, `npm run lint`.

## Content

All page content currently lives as hardcoded, structured data in `src/content/*.ts`, accessed exclusively through the data-access layer in `src/lib/cms/*.ts` (e.g. `listProducts()`, `getProduct(slug)`). Pages and components only ever import from `src/lib/cms`, never from `src/content` directly.

This boundary is what will let content move to **Contentful** later without touching any page or component — only the internals of `src/lib/cms/*.ts` need to change.

Several values (product specifications, distributor list, legal page copy) are clearly marked as placeholders in code comments and must be verified/replaced with real data before launch.

## Project structure

```
src/app/            routes (App Router)
src/components/      UI components, grouped by domain
src/content/         hardcoded content, shaped like the future Contentful model
src/lib/cms/         data-access layer — the only thing pages import content through
src/lib/             shared types, constants, utils
```
