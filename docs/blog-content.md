# Blog content

The three articles were supplied in the `riq-blog` HTML folder on September 18, 2026. Their titles, summaries, dates, authors, reading times, body paragraphs, quotes, disclaimers, and takeaways are preserved in `src/pages/blogContent.ts`. Supplied images are stored in `public/blog/images`.

The blog listing keeps the existing featured-story and two-column design. Full stories use the shared RadiantLogiq header, footer, typography, colors, and responsive layout. Only the three explicit article routes are registered; unknown blog URLs remain 404s.

`node scripts/read-blog-source.mjs <source-folder>` extracts structured content to stdout for future imports. It reads editorial text only, without copying executable HTML, scripts, or the source stylesheet.

When adding stories, update `src/routes.ts` and the explicit blog route rule in `vercel.json` as well as the content. Firebase route HTML is emitted automatically by the Vite route plugin.
