# Sophandros

Preview site for **Sophandros: A Classical Education for the Modern Professional**, a modern revival of the classical education.

Sophandros is a self-paced online course for intellectually ambitious professionals: Latin, Greek, philosophy, art, architecture, and mathematics, in the order Greece, Rome, Renaissance. The name joins Greek *sophos* (wise) and *andros* (man). The mark is a gold line profile in a thin gold circle, with the name in classical capitals.

The course is 140 lessons. It builds one figure in six Greek layers, from honor to practical wisdom, then Rome, the Renaissance, and the Founding. Taught on the site: the prologue, The Birth of Civilization, then Module 1 from The World of Homer through Book 24, in Samuel Butler’s translation. The week titles and the “what failed” lines follow the outline of 16 October 2026. References for every lesson are generated from `src/data/references.ts`. The shape is in `docs/lesson-style.md`. A book is optional.

This repository is a static [Astro](https://astro.build) site. Phase I (Greece) is summarized from the drafted syllabi. Rome and the Renaissance are listed as coming soon. The waitlist form does not store addresses.

- Domain: [sophandros.com](https://sophandros.com)
- Contact: [hello@sophandros.com](mailto:hello@sophandros.com)

## Pages

| Path | Page |
| --- | --- |
| `/` | Home |
| `/curriculum` | Greece, Rome, the Renaissance, and Part IV, 140 lessons |
| `/lessons/the-birth-of-civilization` | Prologue |
| `/references` | Chicago references for all 140 lessons |
| `/curriculum/the-heroic-code` | Phase I, Module 1 |
| `/curriculum/homecoming` | Phase I, Module 2 |
| `/curriculum/inquiry-and-war` | Phase I, Module 3 |
| `/curriculum/tragedy-and-the-city` | Phase I, Module 4 |
| `/curriculum/the-examined-life` | Phase I, Module 5 |
| `/curriculum/virtue-and-polity` | Phase I, Module 6, with the phase capstone |
| `/founders` | Founders Edition (outline) |
| `/about` | About (the name) |
| `/waitlist` | Waitlist form |

## Run locally

Node.js 22.22 or newer (Astro 7 requires it).

```bash
npm install
npm run dev
```

The dev server listens on [http://127.0.0.1:43123](http://127.0.0.1:43123).

```bash
npm run build
npm run preview
```

`npm run build` writes a static site to `dist/`. Deploy steps are in [DEPLOY.md](DEPLOY.md).

## Waitlist

The form is a placeholder. It is marked **TODO** in a code comment in `src/components/WaitlistForm.astro`, not on the page. Submitting it opens the visitor’s email client to `hello@sophandros.com` and does not store the message. Before a public launch, replace it with a real provider (for example Buttondown or Resend) and remove the TODO comment.

## Content

Greece module pages summarize the drafted Phase I syllabi (16 October 2026). They do not add readings. Each Greece page, and a line on Home and on the curriculum, quotes a short public-domain passage. The English is Butler, Jowett, Jebb, Crawley, Macaulay, Heath, Ross, Evelyn-White, or Smyth, copied from Perseus, Project Gutenberg, or Wikisource, with the Greek from Perseus beside it. Rome, the Renaissance, and the Physic elective are named only. The Founders Edition page follows that outline and leaves out claims the outline itself marks for re-checking.
