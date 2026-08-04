# RadiantLogiq Hero Variants Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the delight comparison with a persistent selector for the current RadiantLogiq hero and four new responsive hero compositions.

**Architecture:** `App` owns the selected `HeroVariant`. A small dispatcher in `Hero.tsx` renders one of five isolated hero components; shared message, CTA, and assurance fragments keep verified copy identical. CSS is namespaced by variant, while the fixed selector and motion system remain shared.

**Tech Stack:** React 19, TypeScript, Vite, Lucide React, CSS, Vitest, Testing Library

## Global Constraints

- Preserve all verified hero content and destinations from `src/content.ts`.
- Add no testimonials, customers, metrics, certifications, outcomes, integrations, or claims.
- Keep the rest of the landing page on `data-delight-version="after"` and `data-motion-version="after"`.
- Keep all controls keyboard operable, responsive from 320px upward, and safe under `prefers-reduced-motion`.
- Add no runtime dependencies.

---

### Task 1: Hero selector behavior

**Files:**
- Modify: `src/App.test.tsx`
- Modify: `src/App.tsx`

**Interfaces:**
- Consumes: `HeroVariant` from `src/components/Hero.tsx`
- Produces: `HeroSwitcher({ variant, onChange })` and `data-hero-variant`

- [ ] **Step 1: Write the failing selector test**

Replace the delight comparison test with a test that finds the `Choose hero design` group, verifies `Current` is initially pressed, clicks `Signal`, `Orbit`, `Ledger`, and `Layers`, and expects `data-hero-variant` plus the matching pressed state to update.

- [ ] **Step 2: Run the focused test and verify failure**

Run: `npm test -- --run src/App.test.tsx`

Expected: FAIL because the new hero selector does not exist.

- [ ] **Step 3: Implement selector state**

Use:

```tsx
const heroOptions: { value: HeroVariant; label: string }[] = [
  { value: 'current', label: 'Current' },
  { value: 'signal', label: 'Signal' },
  { value: 'orbit', label: 'Orbit' },
  { value: 'ledger', label: 'Ledger' },
  { value: 'layers', label: 'Layers' },
];
```

Keep `data-delight-version="after"`, add `data-hero-variant={heroVariant}`, render `<Hero variant={heroVariant} />`, and label the fixed group `Choose hero design`.

- [ ] **Step 4: Run the focused test and verify pass**

Run: `npm test -- --run src/App.test.tsx`

Expected: all App tests pass.

### Task 2: Shared hero contract and current hero preservation

**Files:**
- Create: `src/components/heroes/HeroShared.tsx`
- Create: `src/components/heroes/CurrentHero.tsx`
- Modify: `src/components/Hero.tsx`
- Create: `src/components/Hero.test.tsx`

**Interfaces:**
- Produces: `HeroVariant = 'current' | 'signal' | 'orbit' | 'ledger' | 'layers'`
- Produces: `Hero({ variant?: HeroVariant })`
- Produces: `HeroMessage`, `HeroActions`, and `HeroAssurance`

- [ ] **Step 1: Write the failing dispatcher test**

Render `<Hero variant="current" />`, assert `data-hero-variant="current"`, one H1 with the verified headline, `/demo` and `#products` CTA links, and all three assurances.

- [ ] **Step 2: Run the focused test and verify failure**

Run: `npm test -- --run src/components/Hero.test.tsx`

Expected: FAIL because `Hero` has no variant contract.

- [ ] **Step 3: Extract shared content and current composition**

Move the current markup unchanged into `CurrentHero`. Keep `HeroMessage` DOM order as kicker, H1, description, actions, assurances. Dispatch `current` by default in `Hero.tsx`.

- [ ] **Step 4: Run the focused test and verify pass**

Run: `npm test -- --run src/components/Hero.test.tsx`

Expected: current hero contract passes.

### Task 3: Four new visual proof components

**Files:**
- Create: `src/components/heroes/SignalHero.tsx`
- Create: `src/components/heroes/OrbitHero.tsx`
- Create: `src/components/heroes/LedgerHero.tsx`
- Create: `src/components/heroes/LayersHero.tsx`
- Modify: `src/components/Hero.tsx`
- Modify: `src/components/Hero.test.tsx`

**Interfaces:**
- Each component renders one `<section className="hero hero-variant hero-{name}">`.
- Each component exposes a unique labelled visual: `Deterministic signal flow`, `Deterministic decision orbit`, `Auditable decision ledger`, or `Transparent logic layers`.

- [ ] **Step 1: Extend the test for all visual variants**

For each variant, rerender `Hero`, assert the matching `data-hero-variant`, unique visual accessible label, verified H1, and CTA destinations.

- [ ] **Step 2: Run the test and verify failure**

Run: `npm test -- --run src/components/Hero.test.tsx`

Expected: FAIL because the four new components are absent.

- [ ] **Step 3: Build the signal pathway**

Create a horizontal sequence using existing terms: Clinical input, Clinical criteria, Deterministic engine, and Ready to route. Keep each node semantic text and mark the decorative line/signal `aria-hidden`.

- [ ] **Step 4: Build the orbit system**

Create a central `Deterministic logic` core with four positioned nodes: Clinical input, Rules engine, Audit trail, Ready to route. The visual container receives the unique accessible label.

- [ ] **Step 5: Build the audit ledger**

Create numbered rows for Imaging order, Clinical criteria, Appropriateness logic, and Route recommendation, ending in the existing Ready to route state.

- [ ] **Step 6: Build the logic layers**

Create four depth layers labelled Clinical input, Deterministic engine, Route recommendation, and Auditable output. Keep the DOM order equal to the process order even when CSS offsets them.

- [ ] **Step 7: Run the focused test and verify pass**

Run: `npm test -- --run src/components/Hero.test.tsx`

Expected: all hero variant tests pass.

### Task 4: Responsive styling and transitions

**Files:**
- Modify: `src/styles.css`

**Interfaces:**
- Consumes: `.hero-signal`, `.hero-orbit`, `.hero-ledger`, `.hero-layers`, and `.hero-switcher` class contracts.
- Produces: desktop, tablet, mobile, and reduced-motion styling.

- [ ] **Step 1: Add shared variant and switcher styles**

Keep the existing current hero selectors intact. Add a 5-option fixed selector with a maximum desktop width, 44px controls, an active mint state, and horizontal overflow on mobile.

- [ ] **Step 2: Add four distinct desktop compositions**

Signal uses a wide pathway; Orbit reverses the split and uses a bounded circular field; Ledger uses editorial rules and a vertical record; Layers uses a perspective stack with bounded transforms and overflow-safe padding.

- [ ] **Step 3: Add tablet and mobile adaptations**

At existing breakpoints, reduce geometric scale, stack message before proof, remove negative offsets that can clip, and preserve selector access at 320px.

- [ ] **Step 4: Add motion safety**

Animate variant entry and one native visual behavior per concept only while the hero is active. Disable continuous and entrance animation inside the existing `prefers-reduced-motion: reduce` block.

- [ ] **Step 5: Run mechanical design detection**

Run: `node C:\Users\lenovo\.agents\skills\impeccable\scripts\detect.mjs --json src/App.tsx src/components/Hero.tsx src/components/heroes src/styles.css`

Expected: no unexplained findings.

### Task 5: Integration and visual verification

**Files:**
- Verify: `src/App.test.tsx`
- Verify: `src/components/Hero.test.tsx`
- Verify: `src/styles.css`

**Interfaces:**
- Consumes the complete five-hero feature.
- Produces verified production output.

- [ ] **Step 1: Run all tests**

Run: `npm test -- --run`

Expected: all tests pass.

- [ ] **Step 2: Build production output**

Run: `npm run build`

Expected: TypeScript and Vite build succeed.

- [ ] **Step 3: Inspect desktop and mobile in one bounded pass**

Capture the first viewport at desktop and mobile for all five options. Verify navbar clearance, no clipped proof elements, one dominant H1, visible CTAs, selector usability, and stable page position while switching.

- [ ] **Step 4: Apply one material-fix batch and confirm once**

Fix all clipping, hierarchy, or control-density problems found in the first pass together, then recapture the same viewports once.
