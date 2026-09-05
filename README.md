# The Diva and the Maestro — website

The site for the novel *The Diva and the Maestro: The Life and Times of Abbie Mitchell and Will Marion Cook* by Jacques Cook, Antoinette Cook Bush, and Penny Daniels.

Built with [Astro](https://astro.build). It is a static site: text and images, no database.

## Run it

```bash
npm install
npm run dev
```

Then open http://localhost:4321. `npm run build` writes the finished site to `dist/`.

## Where things live

| What | Where |
| --- | --- |
| Pages | `src/pages/` — one file per page (`index.astro` is the home page) |
| Archive items | `src/data/archive.ts` — one entry per photograph, score, program, place, or recording |
| Archive images | `src/assets/archive/` |
| Audio | `public/audio/` |
| Timeline entries | `src/data/timeline.ts` |
| Cast of characters | `src/data/people.ts` |
| Colors and type | `src/styles/global.css` |
| Header and footer | `src/components/` |
| The site plan | `docs/site-plan.html` |

## Add an archive item

1. Put the image in `src/assets/archive/`. Use a plain lowercase filename with hyphens, e.g. `abbie-london-1903.jpg`.
2. In `src/data/archive.ts`, add an import at the top and a new entry to the `archive` list. Copy an existing entry and change the fields. Every entry needs a `source` and a `rights` line.
3. Save. The item gets its own page at `/archive/<slug>` and appears in the archive listing automatically. Set `featured: true` to show it on the home page.

Scan masters (TIFF, 400–600 dpi) should be kept outside this folder. The site only needs a JPEG around 2000 pixels on the long side.

## Still to fill in

- Cover art and retailer links on the Book page (`src/pages/book.astro`).
- Author photographs and biographies (`src/pages/authors.astro`).
- The authors' own wording about Abbie's age on the Diva page (`src/pages/abbie.astro`).
- The book's biographic summaries, to replace the placeholder entries in `src/data/people.ts`.
- A photograph of the box for `src/pages/the-box.astro`.
- A mailing service for the newsletter form in `src/components/Footer.astro`.
- Contact address on the Authors page.

## Image sources

All current archive images are public domain and come from Wikimedia Commons, the New York Public Library, the Library of Congress, and university collections. Each item's source and rights are recorded in `src/data/archive.ts` and shown on its page. The Southern Syncopated Orchestra photograph is CC BY-SA 4.0 and needs a credit line when reused elsewhere.
