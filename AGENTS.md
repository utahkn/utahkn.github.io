# For Claude / AI agents working on this repo

You're picking up the website for **HKN@UTA** — the Epsilon Mu Chapter of Eta Kappa Nu, the IEEE
electrical/computer engineering honor society, at The University of Texas at Arlington. The
person asking you to make a change is very likely a student officer with **little or no coding
background** — favor small, targeted edits to the data files below over restructuring anything,
and explain what you changed in plain language.

## Where content actually lives (edit these, not the page markup)

| They ask you to...                          | Edit this file                    |
| -------------------------------------------- | ---------------------------------- |
| Add/remove/update an officer                | `src/data/officers.ts`            |
| Add/remove/update an event                  | `src/data/events.ts`              |
| Add a tutoring course or resource file      | `src/data/tutoring.ts` (+ drop the file in `public/resources/<course>/`) |
| Update chapter history / mission            | `src/pages/about.astro`           |
| Update induction/membership requirements    | `src/pages/induction.astro`       |
| Update contact info / social links          | `src/pages/contact.astro`         |
| Change colors, nav links, or footer         | `src/components/Nav.astro`, `src/components/Footer.astro`, `src/layouts/Layout.astro` |
| Swap the logo or a photo                    | replace the file in `public/images/`, keep the same filename to avoid touching code |

Each `src/data/*.ts` file is a plain typed array — adding an entry is copy-paste-and-edit, not
a schema change. Several pages have an amber "TODO" callout box in the rendered HTML marking
placeholder content (chapter history, induction criteria, current contact info) left over from
the initial rebuild — when a real officer gives you the real version of that content, replace the
TODO block, not just the text around it.

## Stack

- **Astro** (static site, minimal client JS) + **Tailwind CSS v4** (via the Vite plugin, config
  lives inline — there is no separate `tailwind.config.js` in this v4 setup)
- No CMS, no database, no backend — this is a fully static site, content is just files in this repo
- TypeScript is used for the `src/data/*.ts` files for basic shape-checking, but nothing here
  requires deep TS knowledge to edit

## Running / verifying changes

```bash
npm install       # first time only, or after pulling changes to package.json
npm run dev        # local dev server with live reload
npm run build      # production build — run this before considering a change "done"
```

Always run `npm run build` after a change and confirm it exits cleanly before telling the user
you're finished — a typo in a `.ts` data file (e.g. a missing comma) will fail the build.

## Deployment — important, don't skip

This repo is `utahkn/utahkn.github.io` — a GitHub **user/org page** repo, so:
- `astro.config.mjs` must keep `site: 'https://utahkn.github.io'` and `base: '/'` (root, not a
  `/repo-name/` subpath — a wrong `base` is the most common way to break a Pages deploy)
- Deployment is **not** automatic Jekyll-style GitHub Pages building. It runs via
  `.github/workflows/deploy.yml`, a GitHub Actions workflow that builds the Astro site and
  publishes it, triggered on every push to `master`
- The repo's Settings → Pages → Source must be set to **"GitHub Actions"** (this was a one-time
  manual setting change made during the 2026 rebuild — if a future push isn't showing up on the
  live site, check this setting hasn't reverted before debugging anything else)

You (the AI agent) generally cannot push to `master` or change repo settings yourself — those
need the user's own GitHub authentication. Make the code changes, verify locally with
`npm run build`, and tell the user what to `git add`/`commit`/`push`.

## History worth knowing

This site is a from-scratch rebuild (2026) of the chapter's original 2017–2018 Jekyll site. The
old site's git history is still in this repo's log. Real assets were deliberately carried
forward rather than replaced with placeholders: the HKN crest (`public/images/hkn-crest.png`),
a chapter photo (`public/images/hkn-fall2017.jpg`), and several real tutoring review PDFs under
`public/resources/`. Don't assume everything under `public/` is placeholder — check before
replacing it.

---

## Astro framework notes (generic, not HKN-specific)

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
