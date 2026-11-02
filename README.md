# Marga Studio website

This is the React + TypeScript version of the Marga Studio site. The original Framer export remains in the repository as a reference; the root `index.html` now starts this app through Vite.

## Run locally

```sh
npm install
npm run dev
```

Create a production build with `npm run build`.

## Where to edit

- Homepage and About page copy and structure: `src/main.tsx`
- Project case study content: `src/data/cases.json`
- Hero animation and intro headline: `src/components/ui/scroll-morph-hero.tsx`
- Site fonts, colors, layout, and responsive styles: `src/styles.css`
- Images and local fonts: `public/images`

Project pages are available at `/projects/<slug>` and the About page at `/about`.
