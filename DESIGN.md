---
name: RadiantLogiq
description: Paper-and-ink healthcare technology with mint and lavender accents.
colors:
  ink: "#11292d"
  ink-soft: "#315054"
  muted: "#52676a"
  canvas: "#f7f5ef"
  paper: "#fffdfa"
  mint: "#c9f6df"
  mint-bright: "#43dfa1"
  mint-dark: "#126951"
  lavender: "#ddd6ff"
  violet: "#7355f3"
  violet-dark: "#4e32c7"
  line: "rgba(17, 41, 45, 0.13)"
typography:
  display:
    fontFamily: "Manrope, sans-serif"
    fontSize: "clamp(40px, 5.2vw, 76px)"
    fontWeight: 500
    lineHeight: 1.08
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Manrope, sans-serif"
    fontSize: "clamp(26px, 3vw, 38px)"
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Manrope, sans-serif"
    fontSize: "21px"
    letterSpacing: "-0.02em"
  body:
    fontFamily: "DM Sans, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    lineHeight: 1.55
  intro:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "clamp(18px, 1.6vw, 21px)"
    lineHeight: 1.65
  label:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "14px"
    fontWeight: 600
rounded:
  input: "9px"
  small-panel: "12px"
  plan: "16px"
  form-panel: "20px"
  feature-panel: "24px"
  pill: "999px"
spacing:
  compact: "8px"
  item: "16px"
  grid: "24px"
  panel: "32px"
  feature: "40px"
  section: "64px"
components:
  button-dark:
    backgroundColor: "{colors.ink}"
    textColor: "white"
    rounded: "{rounded.pill}"
    padding: "0 22px"
  button-mint:
    backgroundColor: "{colors.mint}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0 22px"
  input:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.input}"
    padding: "13px 14px"
  featured-plan:
    backgroundColor: "{colors.lavender}"
    textColor: "{colors.ink}"
    rounded: "{rounded.plan}"
    padding: "36px 28px"
  plan-badge:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    padding: "7px 16px"
  team-profile:
    backgroundColor: "{colors.lavender}"
    rounded: "{rounded.feature-panel}"
    padding: "40px"
---

# Design System: RadiantLogiq

## Overview

**Creative North Star: "Paper and Ink"**

The incumbent visual system pairs warm reading surfaces and deep ink with mint and lavender highlights. Manrope headings provide clear hierarchy; DM Sans keeps detailed healthcare technology copy approachable. The atmosphere is premium, clear, trustworthy, human, and modern.

This is a code-derived record of the shared visual language and its implemented secondary-page extensions, not a homepage redesign. Pricing, team, editorial, product, legal, and form pages retain their own compositions inside the same navigation and footer. The approved paper/ink direction supplies the descriptive language; no new visual identity is proposed.

**Key Characteristics:**

- Warm paper surfaces, deep ink text, and selective mint/lavender panels.
- Generous reading space, restrained borders, and rounded feature surfaces.
- Pill actions, visible keyboard focus, and responsive single-column fallbacks.
- Distinct page compositions with factual, clearly labeled service handoffs.

Evidence: `src/styles.css`, `src/pages/pages.css`, `src/pages/CompanyPages.tsx`, and `src/pages/Shared.tsx`. Brand and accessibility constraints come from `PRODUCT.md`; this document does not revise its product statements. Measurements describe source CSS, not a rendered-browser audit.

## Colors

The palette uses soft, warm neutrals as the reading ground, with cool botanical and violet accents for emphasis.

### Primary

- **Deep Ink** (`ink`): headings, primary actions, selected controls, and dark contrast panels.
- **Botanical Mint** (`mint`): supportive panels, secondary actions, and dark-panel contrast.
- **Mint Signal** (`mint-bright`): small status markers rather than long-form text.
- **Deep Mint** (`mint-dark`): feature checks, contact links, and consent accents.

### Secondary

- **Soft Lavender** (`lavender`): featured pricing, team profiles, editorial features, and product illustration surrounds.
- **Violet Signal** (`violet`): shared navigation underlines and global focus.
- **Deep Violet** (`violet-dark`): active navigation, editorial categories, and secondary-page focus.

### Neutral

- **Warm Canvas** (`canvas`): outer page ground and quiet supporting surfaces.
- **Reading Paper** (`paper`): primary reading and input surfaces.
- **Soft Ink** (`ink-soft`): supporting detail that remains visually connected to headings.
- **Muted Ink** (`muted`): descriptions and body text on light backgrounds.
- **Hairline Ink** (`line`): understated divisions between content groups.

**The Shared Palette Rule.** Extend the existing paper, ink, mint, and lavender roles before introducing a new accent family.

## Typography

Display and headings use Manrope; global heading fallbacks include DM Sans and sans-serif, while secondary-page heading rules use sans-serif directly. Body text uses the DM Sans system stack in the frontmatter. The pairing is geometric and composed in headings, softer and readable in supporting copy.

- **Display:** balanced page introductions; retain the fluid size and moderate weight in the tokens. Product and contact introductions use smaller contextual clamps.
- **Headline:** section headings; pricing titles and editorial headlines have local size adjustments.
- **Title:** compact subsection headings for details and supporting content.
- **Body:** the global line-height is the baseline, not a mandate for every page. Editorial copy uses (17px / 1.7); legal copy uses (18px / 1.85) and a reading width of (72ch).
- **Intro:** supporting page-introduction text, constrained to (650px); the containing introduction reaches (860px).
- **Label:** form labels; categories and badges use similarly compact, stronger text.

**The Reading Hierarchy Rule.** Let scale, weight, and whitespace distinguish content; do not turn every paragraph into a display statement.

## Layout

Secondary pages use a centered container of `min(1280px, calc(100% - 96px))`. Main content begins below the fixed header with vertical padding (150px 0 100px). Introductions normally leave (64px) before the next section.

At (1000px) and below, the container becomes `calc(100% - 48px)` and paired layouts tighten. At (720px) and below, it becomes `calc(100% - 40px)` with main padding (116px 0 64px); major multi-column compositions stack. Shared desktop navigation changes to its mobile menu at (960px), independently of page layout breakpoints.

- **Pricing:** three equal columns, aligned feature lists, and a lavender featured middle plan; mobile plans stack with breathing room for the badge.
- **Team:** pill selection above a profile split (0.8fr / 1.2fr), followed by three detail columns and a mint vision panel.
- **Partners:** a mint feature split followed by divided directory rows with contained logos, copy, and external links.
- **Editorial:** two-column story feed with a full-width split featured story; ordinary images use aspect ratio (1.75).
- **Contact and demo:** explanation beside a tinted inquiry panel; field pairs become single-column at the tablet breakpoint before the overall layout stacks.
- **Product:** balanced copy/visual split, followed by two-column capabilities and related-product links. Representative UI remains explicitly captioned.
- **Login and waitlist:** focused service-handoff compositions; login pairs an ink brand panel with a quiet action panel, while the waitlist panel is centered.
- **Legal:** narrow sticky section navigation beside a readable article; navigation becomes static on mobile.

**The Composition Rule.** Reuse shared primitives without flattening these different information structures into one universal card grid.

## Elevation & Depth

Secondary content is predominantly flat: tinted surfaces and fine borders establish grouping. Depth is reserved for shared navigation and actions; feature panels do not need decorative floating shadows. The global ambient shadow remains available for existing representative product interfaces.

- **Action:** `0 12px 28px rgba(17, 41, 45, 0.2)`; dark button hover deepens to `0 16px 36px rgba(17, 41, 45, 0.24)`.
- **Navigation:** `0 6px 22px rgba(17, 41, 45, 0.045)` beneath the translucent paper header.
- **Ambient interface:** `0 24px 64px rgba(26, 47, 48, 0.12)`, from the existing global shadow variable.

## Shapes

Actions are fully pill-shaped. Fields have tighter corners, plans medium corners, and editorial/team/product panels broad corners, following the frontmatter roles. Team portraits use (14px) corners; editorial images use (18px). Thin borders mark plans, controls, and directory divisions. Large tinted panels clip their imagery where the implemented composition calls for it.

## Components

### Buttons

Confident, compact pill actions. Dark actions pair ink with white; the secondary-page mint variant pairs mint with ink. Both use a minimum height of (48px), centered labels, and an (18px) up-right arrow where rendered by the shared page-link component. Dark hover changes to `#183b40`, strengthens the shadow, and lifts by (2px). Transitions take (0.25s); the lift uses `cubic-bezier(0.2, 0.8, 0.2, 1)`.

Shared light and light-outline variants remain available on dark shared surfaces; do not confuse the white light variant with the mint secondary-page variant. Text links use an animated underline and small arrow movement instead of a filled pill.

### Chips and Selection

The featured-plan badge is a dark, noninteractive label with (30px) radius and (13px) bold text. Team selectors are real buttons with (40px) radius and `aria-pressed`; selected state inverts to ink/paper. They wrap, then become full-width on mobile. No custom hover palette is currently specified for those selectors.

### Cards / Containers

Pricing plans have a fine border and medium corners; the featured plan replaces the visible border with lavender. Team and editorial feature panels are broader and flat. Mint panels frame vision, partnership, safeguards, and waitlist content. Do not apply an interaction state to a purely informational container.

### Inputs / Fields

Inputs, selects, and textareas use paper, ink, a `#b9bdc8` border, (16px) text, and the input padding/radius tokens. Labels stay outside controls. Textareas resize vertically. Consent pairs a (20px) checkbox with multiline copy and visibly linked legal text. The existing CSS does not establish a custom error or disabled palette; do not document one as implemented.

Secondary-page keyboard focus uses a (3px) deep-violet outline offset by (4px); shared controls inherit the global violet focus treatment. Keep the skip link visible when focused. Reduced-motion preferences reduce animation and transition duration to (0.01ms) and disable smooth scrolling.

### Navigation and Footer

Reuse the existing fixed, rounded, translucent paper header and dark footer rather than creating page-specific chrome. Navigation links use compact DM Sans, violet hover underlines, and deep violet for the current secondary destination. The mobile menu is a full-surface canvas with generous vertically divided links. Footer link groups, contact route, and verified program asset remain the shared closing structure.

### Feature Lists and Profile Monograms

Feature lists align small deep-mint checkmarks with multiline copy using (12px) separation and (16px) row gaps. Team profiles use the supplied local doctor portraits, with descriptive alt text and consistent cropping.

### Service Handoffs

Keep explanation next to authentication, waitlist, and online-request actions. These pages explicitly hand off to the legacy service where a backend is absent; a polished visual panel must not imply an implemented local authentication or submission flow. Preserve visible confirmation and handoff wording without inventing success states.

## Do's and Don'ts

### Do:

- Do preserve the shared paper/ink, mint/lavender, Manrope/DM Sans language.
- Do keep page-specific compositions, readable text widths, and mobile stacking.
- Do preserve keyboard focus, meaningful labels, and reduced-motion behavior.
- Do retain factual source copy, representative-interface captions, and explicit service-handoff explanations.
- Use the supplied local portraits in `public/team` for doctor profiles.

### Don't:

- Don't redesign the homepage when extending secondary pages.
- Don't invent people, metrics, pricing, certifications, or product behavior to fill a visual layout.
- Don't make informational panels appear clickable without a real destination or action.
- Don't imply that local authentication or online submission exists when the action hands off to another service.
- Don't replace distinct pricing, editorial, product, and form compositions with a uniform card template.
