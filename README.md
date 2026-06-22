# Personal Website

Built with [Astro](https://astro.build). Includes a portfolio page, an articles section (Markdown-driven content collections), and a shared nav/footer.

## Local dev

```sh
# requires Node 18+
npm install
npm run dev        # http://localhost:4321
npm run build      # production build → ./dist/
npm run preview    # preview the production build locally
```

---

## How to edit the main things

### Add a nav tab

Edit `src/config/nav.ts` and append one entry:

```ts
{ label: 'Speaking', href: '/speaking' },
```

Then create `src/pages/speaking.astro`. The header updates automatically.

---

### Add a project

Edit `src/data/projects.ts` and add an object to the `PROJECTS` array:

```ts
{
  title: 'My New Project',
  description: 'Short description shown on the card.',
  tags: ['Tag1', 'Tag2'],
  image: '/images/my-project.jpg',   // put the file in public/images/
  imageAlt: 'Descriptive alt text',
  demoUrl: 'https://example.com',    // optional
  repoUrl: 'https://github.com/...',  // optional
},
```

No markup to touch — the portfolio grid rebuilds from the data array.

---

### Publish an article

Create a new `.md` file in `src/content/articles/`. The filename becomes the URL slug.

```
src/content/articles/my-article-title.md
```

Required frontmatter:

```yaml
---
title: "My Article Title"
date: 2025-12-01
description: "One-sentence summary shown on the index page."
tags: ["Tag1", "Tag2"]
draft: false        # set true to hide from the index while drafting
---

Your Markdown content here.
```

That's it. The article appears on `/articles` sorted newest-first.

---

### Update socials / contact links

Edit `src/consts.ts`:

```ts
export const SOCIAL_LINKS = {
  github:   'https://github.com/your-username',
  linkedin: 'https://linkedin.com/in/your-username',
  email:    'mailto:you@example.com',
};
```

These feed both the footer and the home page contact block.

---

### Change colors / fonts / spacing

All design tokens are in `src/styles/global.css` under the `:root` block at the top of the file. To change the accent color across the whole site, change one line:

```css
--accent: #2a7c7c;  /* ← change this */
```

Dark mode tokens are in the `[data-theme='dark']` block directly below.

---

## Deploy

**Netlify / Vercel:** connect the repo, set build command to `npm run build`, output directory to `dist`. No other config needed.

**GitHub Pages:** add `base: '/repo-name'` to `astro.config.mjs` and use the [Astro GitHub Pages guide](https://docs.astro.build/en/guides/deploy/github/).
