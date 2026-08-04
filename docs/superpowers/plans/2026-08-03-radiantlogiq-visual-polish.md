# RadiantLogiq Visual Polish Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Apply the approved Impeccable visual critique to the existing RadiantLogiq landing page without changing its copy, product truth, navigation destinations, integrations, or section order.

**Architecture:** Keep the existing React component tree and content model. Make one narrow structural addition around the product tablist, then implement the visual refinement through the existing shared CSS system so typography, spacing, states, and grid hierarchy remain consistent across the page.

**Tech Stack:** React 19, TypeScript, Vite, Vitest, Testing Library, CSS.

## Global Constraints

- Preserve every existing piece of copy and every factual claim.
- Preserve all routes, product names, metrics, integrations, and section order.
- Do not add dependencies or unverified assets.
- Keep keyboard tab behavior, semantic tab roles, reduced-motion handling, and 320px minimum support.
- Use the persisted visual critique at `.impeccable/critique/2026-08-03T15-53-35Z__src-app-tsx.md` as the design specification.

---

### Task 1: Product selector adaptation

**Files:**
- Modify: `src/components/ProductSuite.tsx`
- Modify: `src/styles.css`
- Test: `src/components/ProductSuite.test.tsx`

**Interfaces:**
- Consumes: `siteContent.products`, the existing ARIA tab contract, and `selectedId` state.
- Produces: the same tab/tabpanel behavior inside a presentational `.product-tabs-shell` wrapper.

- [ ] **Step 1: Run the existing product behavior tests as the baseline**

Run: `npm test -- src/components/ProductSuite.test.tsx --run`

Expected: all existing tab selection, keyboard navigation, and product destination tests pass.

- [ ] **Step 2: Add the narrow structural wrapper**

Wrap the existing `.product-tabs` tablist in `.product-tabs-shell` without changing button labels, order, roles, state, or handlers.

- [ ] **Step 3: Implement responsive selector behavior**

At intermediate widths, retain horizontal scrolling with scroll snap and an edge-fade affordance. At `620px` and below, switch to a two-column grid with the fifth tab spanning both columns so all five products are visible without an inferred gesture.

- [ ] **Step 4: Re-run product behavior tests**

Run: `npm test -- src/components/ProductSuite.test.tsx --run`

Expected: all tests pass with the unchanged behavioral contract.

### Task 2: Type, spacing, and interaction system

**Files:**
- Modify: `src/styles.css`

**Interfaces:**
- Consumes: existing CSS variables and component class names.
- Produces: a tighter shared display scale, stronger secondary text, larger interactive hit areas, and coherent rest/hover/focus/active states.

- [ ] **Step 1: Refine shared tokens and spacing**

Darken `--muted`, reduce shared section padding, keep display tracking at or above `-0.04em`, and cap the largest display text at `6rem`.

- [ ] **Step 2: Remove generic emphasis treatments**

Replace hero gradient text with a solid brand accent and remove the ornamental two-axis CTA grid while retaining the established color system.

- [ ] **Step 3: Strengthen interactive states**

Give text links a 44px minimum target, add visible underline motion, strengthen product-tab selected state beyond color alone, and add coherent hover/focus-visible styling for tabs and integration tiles.

- [ ] **Step 4: Raise microcopy legibility**

Increase navigation, footer headings, footer links, tab codes, and state-label sizes where they communicate meaningful status.

### Task 3: Lower-page visual hierarchy

**Files:**
- Modify: `src/styles.css`

**Interfaces:**
- Consumes: existing principle, enterprise, TeleHealth feature, and integration markup.
- Produces: the same item inventory with stronger visual grouping and a less repetitive rhythm.

- [ ] **Step 1: Rebalance section introductions**

Reduce the display scale below the hero, tighten heading measures, align supporting copy nearer the heading, and shorten intro-to-content gaps.

- [ ] **Step 2: Differentiate repeated grids**

Use restrained alternating surface tints, stronger icon scale, and grouped row emphasis across principles, enterprise capabilities, TeleHealth features, and integrations without converting them into nested cards.

- [ ] **Step 3: Preserve responsive integrity**

Keep existing single-column mobile stacking, reduce cumulative mobile padding, and maintain readable 16px page gutters at 390px.

### Task 4: Verification and bounded visual QA

**Files:**
- Verify: all changed files

**Interfaces:**
- Consumes: complete landing page at the local Vite URL.
- Produces: evidence that the polished page builds, retains content, and behaves at desktop and mobile widths.

- [ ] **Step 1: Run the full automated suite**

Run: `npm test -- --run`

Expected: all tests pass with zero failures.

- [ ] **Step 2: Run the production build**

Run: `npm run build`

Expected: TypeScript and Vite complete with exit code 0.

- [ ] **Step 3: Inspect desktop and mobile together**

Inspect the live page at `1440x1000` and `390x844` in one bounded browser pass. Verify all five mobile product tabs are visible, no horizontal overflow exists, typography remains controlled, and focus/hover states are visually coherent.

- [ ] **Step 4: Apply one consolidated defect patch if necessary**

Fix only issues demonstrated by the batched inspection, then repeat tests, build, and one confirmation inspection.
