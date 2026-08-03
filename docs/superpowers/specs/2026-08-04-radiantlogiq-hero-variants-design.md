# RadiantLogiq Hero Variants Design

## Goal

Let the user compare the current landing-page hero with four materially different, production-quality hero directions in the website itself. The fixed bottom comparison control becomes a hero selector. Everything below the hero remains on the current polished landing-page version.

## Product and Content Constraints

- Preserve the current verified hero kicker, headline, description, primary and secondary CTA destinations, and the Deterministic, Auditable, and Zero PHI footprint assurances.
- Reuse only workflow language already present in the current hero and verified project content.
- Do not add customers, testimonials, metrics, certifications, outcomes, integrations, or claims.
- Preserve the fixed header, the rest of the page, scroll motion, accessibility behavior, and reduced-motion support.

## Hero Directions

1. **Current** — the existing side-by-side copy and clinical logic workspace remains visually and structurally intact.
2. **Signal Flow** — an airy, full-width composition with copy above a horizontal input-to-rules-to-output pathway. A restrained traveling signal demonstrates deterministic progression.
3. **Decision Orbit** — a reversed split composition. A circular system map places deterministic logic at the center with Clinical input, Rules, Audit trail, and Ready to route nodes around it.
4. **Audit Ledger** — an editorial, high-precision composition with oversized headline typography and a numbered vertical decision record. Fine rules and structured rows make auditability the dominant visual idea.
5. **Logic Layers** — a softly colored split composition with a perspective stack for Clinical input, Deterministic engine, Route recommendation, and Auditable output. Layer depth demonstrates the transparent data loop without decorative card clutter.

## Interaction

- A fixed, bottom-centered selector shows five short labels: Current, Signal, Orbit, Ledger, and Layers.
- The active option uses `aria-pressed` and remains keyboard operable.
- Switching replaces only the hero and keeps page scroll position stable.
- Each hero enters with a short composition-specific transition. Reduced-motion users receive an immediate switch.
- Mobile uses a horizontally scrollable selector with full-size touch targets.

## Architecture

- `App.tsx` owns a `HeroVariant` state and renders the shared header, selected hero, unchanged page sections, and `HeroSwitcher`.
- `Hero.tsx` exports the `HeroVariant` type and a single `Hero` dispatcher. Variant-specific components stay isolated in the same module because they share content and are limited to one surface.
- Shared CTA and assurance fragments prevent content drift.
- Variant styles are namespaced under `.hero-current`, `.hero-flow`, `.hero-orbit`, `.hero-ledger`, and `.hero-layers`.

## Responsive Behavior

- Desktop compositions preserve their distinct topology.
- Tablet layouts simplify perspective and node spacing without hiding content.
- Mobile layouts become single-column, keep the headline first in DOM order, and place the visual proof after the CTAs.
- All visuals use bounded widths and overflow-safe geometry.

## Verification

- Component tests verify all five selector options, active state, and switching.
- Existing content and section tests remain green.
- The production build must pass.
- Desktop and mobile screenshots verify clipping, navbar clearance, hierarchy, and selector usability.
