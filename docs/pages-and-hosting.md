# Pages and portable routing

## Local commands

`npm run dev` starts Vite with explicit route handling. `npm run build` creates the portable `dist` output. `npm run preview` serves that production output with the same real-404 behavior. `npx vitest run` covers route rendering, form interactions, and HTTP responses in both development and preview (the hosting tests build their own output).

The route inventory is `src/routes.ts`. `/` remains the existing landing page. Pricing, About, Partners, Blog, Contact, Demo, Login, five product pages and four legal/security pages have explicit destinations. Unknown paths render the app's NotFound component even on an incorrectly configured SPA host. Vite also returns HTTP 404 using `public/404.html` for unknown document/asset requests.

`build/siteRoutes.ts` emits an HTML entry file for each known path. Firebase serves these files with no catch-all rewrite. `vercel.json` maps only known routes and preserves a true-404 fallback after filesystem checks. Do not reintroduce a `** -> /index.html` or `/(.*) -> /index.html` rewrite. Adding routes requires extending the manifest and Vercel allowlist.

## Source and content

Content was inspected on https://app.radiantlogiq.ai/ and the linked pages on 2026-09-16. `src/pages/pageContent.ts` records the migrated product, plan, partner, biography and legal copy. Prices, product features, credentials and compliance statements are reproduced from the owner's site, not newly invented or independently certified. The source blog contains three summaries without article links; no full articles were invented.

The biography layout uses the user-supplied doctor portraits stored locally in `public/team`. Partner logos and blog photographs currently reference the original public image sources. The 404 uses the same transparent `riq-logo-dark.png` as the current hero/header.

## Live-service boundary

This repository does not contain the original authentication provider setup or the Next.js server actions `submitDemoRequest` and `joinMedsWaitlist`.

- `/login` is a branded gateway to the existing application login, including its sign-up and recovery functionality. It does not collect credentials locally.
- Contact and Demo retain the original fields and consent text. Their online submission CTA opens the original live form. The local form explicitly prepares an email draft; it does not send mail or display a submission-success claim. The visitor must send the draft with their email app.
- MEDS links to the original live waitlist. It does not claim to have enrolled anyone.

Do not retire `app.radiantlogiq.ai` until these backend services have been migrated. A fully same-origin submission/authentication experience requires the original backend implementation/configuration; copying a published Next.js action identifier is not a stable integration.

## Deployment

The changes are ready for Firebase Hosting and Vercel; publishing is separate from the local build. Firebase command: `firebase deploy --only hosting --project radiant-logiq-web-2026 --account saman@patriotictelehealth.com`. The committed Vercel configuration takes effect on the next deployment. After deployment verify `/` and the known pages are 200, and `/random`, `/products/unknown`, and a missing asset are 404.
