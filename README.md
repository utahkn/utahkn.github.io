# UTA HKN Website

The official website for the **Epsilon Mu Chapter** of **Eta Kappa Nu (HKN)**, the IEEE
electrical/computer engineering honor society, at The University of Texas at Arlington.

Live at: **https://utahkn.github.io**

Built with [Astro](https://astro.build) + [Tailwind CSS](https://tailwindcss.com), hosted free
on GitHub Pages.

## If you're not a developer

You can still update most of this site without writing real code. Nearly all editable content
(officers, events, tutoring resources) lives in three small files under `src/data/`. If you have
[Claude Code](https://claude.com/product/claude-code) available, just open this folder and ask it
to make the change in plain English — e.g. "add Jane Doe as our new Treasurer" or "add an event
for our Fall kickoff on September 5th." See `CLAUDE.md` for details a fresh AI session needs to
pick this up with no prior context.

## Running it locally

Requires [Node.js](https://nodejs.org) (LTS).

```bash
npm install
npm run dev
```

This starts a local dev server (usually at `http://localhost:4321`) that live-reloads as you
edit files.

To build the production version and check it compiles cleanly:

```bash
npm run build
```

## Where content lives

| Page                        | Edit this file               |
| ---------------------------- | ----------------------------- |
| Officers                    | `src/data/officers.ts`       |
| Events                      | `src/data/events.ts`         |
| Tutoring courses/resources  | `src/data/tutoring.ts`       |
| About / chapter history     | `src/pages/about.astro`      |
| Induction requirements      | `src/pages/induction.astro`  |
| Contact info                | `src/pages/contact.astro`    |
| Site-wide nav/footer/colors | `src/components/`, `src/layouts/Layout.astro` |

Images and downloadable files (PDFs, photos) live in `public/images/` and `public/resources/`.

Several pages have a **TODO** callout box for placeholder content (chapter history, induction
criteria, current officer bios/contact info) — those are the highest-priority things for the
current officer board to replace with real content.

## Deploying

Deployment is automatic: pushing to the `master` branch triggers a GitHub Actions workflow
(`.github/workflows/deploy.yml`) that builds the site and publishes it to GitHub Pages. There's
nothing to run manually — just commit and push.

One-time setup note: this repo's GitHub Pages **source** must be set to "GitHub Actions" (not
"Deploy from a branch") under Settings → Pages, since Astro needs a build step that plain GitHub
Pages doesn't run automatically the way it does for Jekyll.

## History

This is a rebuild of the chapter's original Jekyll-based site (2017–2018). The old site's git
history is preserved in this repo's commit log if you need to reference it. The original site's
tutoring PDFs, chapter photo, and crest logo were carried forward into this rebuild.
