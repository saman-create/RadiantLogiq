# RadiantLogiq Landing Page Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a polished, responsive React + Vite landing page for RadiantLogiq using only verified content from the current site.

**Architecture:** A single-route Vite application composes focused React sections from a centralized verified-content module. State is limited to the mobile navigation and product story selector; visual compositions are semantic HTML/CSS with Lucide icons and original brand assets retrieved from the current site.

**Tech Stack:** React, TypeScript, Vite, Vitest, Testing Library, Lucide React, CSS.

## Global Constraints

- Preserve every existing product name, metric, integration, navigation label, destination, and claim used by the redesign.
- Do not invent testimonials, customers, certifications, statistics, partnerships, pricing, or clinical outcomes.
- Do not use Impeccable or gpt-taste.
- Provide responsive layouts from 360px mobile through wide desktop, keyboard accessibility, and reduced-motion support.
- Keep the project local; no deployment or external system mutation is part of this request.

---

### Task 1: Project foundation and verified content contract

**Files:**
- Create: `package.json`, `vite.config.ts`, `tsconfig.json`, `tsconfig.app.json`, `tsconfig.node.json`, `index.html`
- Create: `src/content.ts`
- Create: `src/content.test.ts`
- Create: `src/test/setup.ts`
- Copy: `public/brand/*` from the current RadiantLogiq site

**Interfaces:**
- Produces: `siteContent` containing navigation, metrics, products, principles, TeleHealth features, integrations, enterprise capabilities, and footer links.

- [ ] Write `src/content.test.ts` first to assert the exact metric values, five product names, navigation destinations, and the complete integration list.
- [ ] Run `npm test -- --run src/content.test.ts` and verify failure because `src/content.ts` does not exist.
- [ ] Add the Vite/Vitest foundation and implement `siteContent` with the exact content captured from the live site.
- [ ] Run `npm test -- --run src/content.test.ts` and verify the content contract passes.

### Task 2: Accessible application shell

**Files:**
- Create: `src/main.tsx`, `src/App.tsx`, `src/components/Header.tsx`, `src/components/Footer.tsx`
- Create: `src/App.test.tsx`

**Interfaces:**
- Consumes: `siteContent.navigation` and `siteContent.footer`.
- Produces: `App`, `Header`, and `Footer`; `Header` exposes a labeled mobile-menu button and uses ordinary anchors for existing routes.

- [ ] Write failing rendering tests for one H1, the primary `/demo` CTA, all desktop navigation links, footer legal links, and mobile menu open/close behavior.
- [ ] Run `npm test -- --run src/App.test.tsx` and verify failure because application components do not exist.
- [ ] Implement the semantic shell and stateful mobile menu with Escape handling and body-scroll restoration.
- [ ] Run `npm test -- --run src/App.test.tsx` and verify all shell behaviors pass.

### Task 3: Hero, metrics, and product storytelling

**Files:**
- Create: `src/components/Hero.tsx`, `src/components/MetricStrip.tsx`, `src/components/ProductSuite.tsx`, `src/components/ProductVisual.tsx`
- Create: `src/components/ProductSuite.test.tsx`
- Modify: `src/App.tsx`

**Interfaces:**
- Consumes: `siteContent.hero`, `siteContent.metrics`, and `siteContent.products`.
- Produces: a hero workflow visual and `ProductSuite` selector whose buttons expose `aria-selected` and display only verified selected-product details.

- [ ] Write failing tests that select PACS, CDS, EHR, TeleHealth, and MEDS and assert their exact descriptions, features, status labels, and destinations.
- [ ] Run the focused test and verify failure because the components are absent.
- [ ] Implement the hero, metric strip, product selector, and representative interface compositions.
- [ ] Run the focused test and then the full suite; verify both pass.

### Task 4: Architecture, enterprise, TeleHealth, integrations, and CTA sections

**Files:**
- Create: `src/components/EnterpriseBundle.tsx`, `src/components/Principles.tsx`, `src/components/TelehealthSpotlight.tsx`, `src/components/Integrations.tsx`, `src/components/FinalCta.tsx`
- Create: `src/components/Sections.test.tsx`
- Modify: `src/App.tsx`

**Interfaces:**
- Consumes: the remaining `siteContent` collections.
- Produces: semantic section components with exact headings, copy, and links from the source content.

- [ ] Write failing tests for all eight enterprise capabilities, four architecture principles, six TeleHealth features, six compatible EHRs, twenty integrations, and final CTA destinations.
- [ ] Run the focused test and verify failure because section components are absent.
- [ ] Implement the five sections with restrained decorative markup and no invented factual copy.
- [ ] Run the focused test and full suite; verify all assertions pass.

### Task 5: Responsive visual system and motion

**Files:**
- Create: `src/styles.css`
- Modify: all section components only where styling hooks or accessibility attributes are required.

**Interfaces:**
- Consumes: stable component class names and data attributes.
- Produces: warm editorial visual system, responsive breakpoints, visible focus, touch sizing, print-safe fallbacks, and reduced-motion overrides.

- [ ] Add a failing DOM test asserting decorative workflow layers are hidden from assistive technology and mobile controls expose expanded state.
- [ ] Run the test and confirm the intended accessibility attributes are absent.
- [ ] Implement global tokens, layouts, section-specific art direction, keyframes, and breakpoints at 1100px, 820px, and 560px.
- [ ] Run the accessibility test and full test suite; verify clean output.

### Task 6: Social preview and production verification

**Files:**
- Create: `public/og.png`
- Modify: `index.html`
- Create: `output/playwright/*` only for temporary browser validation artifacts.

**Interfaces:**
- Produces: site metadata/social preview and a production-ready static build in `dist/`.

- [ ] Generate exactly one original RadiantLogiq social preview image using the finished page palette and verified hero copy, inspect it for text accuracy, and wire it only if usable.
- [ ] Run `npm test -- --run` and confirm zero failures.
- [ ] Run `npm run build` and confirm a successful production build with no TypeScript errors.
- [ ] Start the Vite preview and use browser automation at 1440×1000, 768×900, and 390×844 to check layout, menu behavior, selector behavior, links, console errors, and horizontal overflow.
- [ ] Fix any observed issue by first adding a failing regression test, then rerun tests, build, and the affected browser check.
