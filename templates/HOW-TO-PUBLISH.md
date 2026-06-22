# How to Publish Content on Your Website

This folder is for reference only — nothing here affects the live site.
Use it to store templates and come back to these instructions whenever you need them.

---

## Part 1 — Articles (`/articles`)

Articles are standalone pieces of writing: opinions, analysis, essays.
URL pattern: `wilsoncai.com/articles/my-article-title`

### Step 1 — Write in Notion, export to Markdown

1. Finish your article in Notion.
2. Click **⋯ (top-right menu) → Export → Markdown & CSV**.
3. Notion will download a `.zip`. Unzip it.
   You'll get something like:
   ```
   My Article Title/
     My Article Title.md
     image1.png
     image2.png
     Untitled 27a3b...png    ← Notion's ugly auto-names
   ```

### Step 2 — Rename and move the images

1. Create a folder for this article's images:
   ```
   public/images/articles/my-article-title/
   ```
   (Use lowercase, hyphens instead of spaces — same style as the article filename.)

2. Rename each image to something descriptive:
   ```
   Untitled 27a3b...png  →  bambu-ams-unboxing.jpg
   image2.png            →  first-multicolour-print.jpg
   ```
   Tip: convert to `.jpg` and compress at squoosh.app to keep page loads fast.
   Aim for under 200 KB per image.

3. Copy the renamed images into `public/images/articles/my-article-title/`.

### Step 3 — Prepare the Markdown file

Open the exported `.md` file in any text editor (TextEdit, VS Code, etc.).

**Add the frontmatter block at the very top** (Notion won't include this):

```markdown
---
title: "Your Article Title Here"
date: 2026-06-20
description: "One sentence that summarises the article. Shown on the index page."
tags: ["Tag1", "Tag2", "Tag3"]
draft: false
---
```

- `date`: use today's date in YYYY-MM-DD format.
- `tags`: use consistent tags you'll reuse (e.g. "AI", "3D Printing", "Economics").
- `draft: true` hides the article from the site while you're still editing.

**Fix the image paths** — Notion exports them like this:
```markdown
![](image1.png)
```
Change each one to the public path you set up in Step 2:
```markdown
![Description of what's in the photo](/images/articles/my-article-title/bambu-ams-unboxing.jpg)
```
Always write a real description in the `[brackets]` — it's what screen readers say
and what shows if the image fails to load.

### Step 4 — Name and place the file

- Rename the `.md` file using lowercase and hyphens: `my-article-title.md`
- The filename becomes the URL slug:
  `my-article-title.md` → `wilsoncai.com/articles/my-article-title`
- Drop it into:
  ```
  src/content/articles/my-article-title.md
  ```

### Step 5 — Done

Run `npm run dev` and visit `http://localhost:4321/articles` to see it appear.
The article is sorted newest-first automatically by the `date` field.

---

## Part 2 — Projects (`/portfolio`)

Projects are detailed write-ups of things you've built, with structured sections.
URL pattern: `wilsoncai.com/portfolio/my-project`

### Step 1 — Write in Notion, export to Markdown

Same as articles — export as **Markdown & CSV**, unzip.

### Step 2 — Rename and move the images

1. Create a folder for this project's images:
   ```
   public/images/projects/my-project-name/
   ```

2. You'll likely have multiple images across different sections. Rename them
   to reflect where they're used:
   ```
   planning-sketch.jpg
   wiring-diagram.jpg
   finished-result.jpg
   ```

3. One image will be the **card thumbnail** shown on the Portfolio page.
   Name it `hero.jpg` (or whatever you like) and note the path:
   `/images/projects/my-project-name/hero.jpg`

4. Compress everything at squoosh.app. Under 300 KB per image is good.

### Step 3 — Prepare the Markdown file

Open the exported `.md` file and add the frontmatter at the top:

```markdown
---
title: "My Project Name"
description: "One sentence shown on the portfolio card."
tags: ["Tag1", "Tag2"]
image: "/images/projects/my-project-name/hero.jpg"
imageAlt: "Brief description of what the hero photo shows"
order: 1
draft: false
---
```

- `image`: the card thumbnail. Remove this line entirely if you have no photo yet.
- `order`: controls the sort order on the Portfolio page. `1` appears first, `2` second, etc.
- `draft: true` hides the project from the site while you're still writing.

**Structure the body using these six headings** (copy from the template file):

```markdown
## Objective

What were you trying to achieve?

## Planning

How did you approach it before starting? Design decisions, material choices, research.

## Purpose

Why did you build this? What problem does it solve?

## Process

Walk through how you made it. Add images freely here:

![Wiring the controller board](/images/projects/my-project-name/wiring-diagram.jpg)

More text, more images, as detailed as you like.

## Results & Accomplishments

What did you end up with? Finished photos go well here.

![Finished result](/images/projects/my-project-name/finished-result.jpg)

## Further Research & Development

What would you do next? What did you learn?
```

**Fix Notion's exported image paths** the same way as articles — change each
`![](image.png)` to the full public path you set up in Step 2.

### Step 4 — Name and place the file

- Filename → URL: `3d-prints.md` → `wilsoncai.com/portfolio/3d-prints`
- Drop it into:
  ```
  src/content/projects/my-project-name.md
  ```

### Step 5 — Done

Visit `http://localhost:4321/portfolio` to see the card, then click through to
check the full project page.

---

## Quick reference cheat sheet

```
New article:
  src/content/articles/my-title.md
  public/images/articles/my-title/image.jpg

New project:
  src/content/projects/my-project.md
  public/images/projects/my-project/hero.jpg      ← card thumbnail
  public/images/projects/my-project/other.jpg     ← in-page images

Frontmatter reminder:
  Articles  → title, date, description, tags, draft
  Projects  → title, description, tags, image, imageAlt, order, draft

Image rules:
  - Compress to under 200-300 KB at squoosh.app
  - Always write descriptive alt text: ![what is shown in the photo](...)
  - Use lowercase filenames with hyphens, no spaces
```

---

## If you want me (Claude) to do it for you

You can also just:
1. Paste your Notion text directly into the chat.
2. Tell me the title, tags, and whether it's an article or project.
3. Drop your images into the right folder.
4. I'll write the `.md` file, fix the frontmatter, and place everything correctly.
