# labs.scoutos.com

Public-facing website for ScoutOS Labs. Experimental AI research & development dispatches.

## Stack

- [Astro](https://astro.build) (static site generator)
- TypeScript
- Markdown-driven content (Astro Content Collections)
- Deployed on Vercel

## Development

```sh
bun install
bun dev        # localhost:4321
bun build      # production build → ./dist/
bun preview    # preview production build
```

## Content

Lab Reports live in `src/content/reports/` as markdown files with frontmatter:

```yaml
---
title: "Report Title"
date: "2026-02-28"
number: "001"
highlights:
  - "First highlight"
  - "Second highlight"
---
```

New reports are published every Friday.

## RSS

Available at `/rss.xml`.
