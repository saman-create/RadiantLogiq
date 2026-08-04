# RadiantLogiq Landing Page Redesign

## Objective

Rebuild the existing RadiantLogiq landing page as a responsive React + Vite experience that feels premium, calm, human, and credible for healthcare technology. The redesign keeps RadiantLogiq's verified product names, claims, metrics, integrations, navigation destinations, and calls to action while replacing the dense dark starfield and repetitive card grid with an airy editorial rhythm inspired by the supplied Carepatron screenshot.

## Verified source of truth

All copy and product facts come from the live RadiantLogiq page and its supplied screenshot. The page will retain:

- Navigation: Products, Pricing, About, Partners, Blog, Contact, Log in, Request Demo.
- Hero: “Clinical reasoning for imaging decisions.” and its existing supporting statement.
- Metrics: 10,000+ active clinicians, 99.9% uptime SLA, and 5 enterprise platforms.
- Products: RadiantLogiq TeleHealth, PACS, CDS, EHR, and MEDS, including their existing feature statements and destinations.
- Existing enterprise bundle capabilities, architecture differentiators, TeleHealth feature claims, EHR compatibility list, integration list, footer legal destinations, and NVIDIA Inception Program membership statement.
- Existing URL behavior, including `/demo`, `/pricing`, `/products/*`, `/contact`, and legal routes.

No new testimonial, customer, certification, statistic, partnership, pricing figure, or clinical outcome will be introduced. Existing statements such as HIPAA COMPLIANT, SOC 2 TYPE II, and NVIDIA Inception Program will be reproduced only because they are present on the current page.

## Visual direction

The page uses a warm ivory canvas, near-black editorial typography, clean white surfaces, soft lavender and mint fields, and concentrated RadiantLogiq green/violet accents. The tone is bright and spacious rather than dark and futuristic. Rounded shapes, fine borders, oversized headings, generous margins, and alternating full-width editorial sections create the Carepatron-like rhythm without copying its composition or assets.

The hero pairs concise conversion copy with an original HTML/CSS “clinical logic workspace” visual. The visual shows a radiology decision moving through deterministic rules into a routed recommendation, using only verified product language. Subtle layered glows and interface motion add depth without a starfield.

## Page architecture

1. Sticky light navigation with desktop links and an accessible mobile menu.
2. Hero with primary Request Demo CTA, secondary Explore Platform CTA, and product-workflow visual.
3. Metric strip using the three verified values.
4. Product suite introduction followed by alternating product stories, not a dense bento grid.
5. A full-width enterprise bundle section that groups the eight existing bundle capabilities.
6. “Why RadiantLogiq?” architecture story with four large numbered principles.
7. TeleHealth spotlight with an interface-style scheduling/waitlist composition and the six existing features.
8. Integration cloud preserving every named integration and compatible EHR.
9. High-contrast final CTA and a complete footer preserving current destinations and program statements.

## Interaction and responsive behavior

- The sticky header gains a subtle solid backdrop on scroll.
- Mobile navigation opens with a labeled button, traps no focus, closes on destination selection and Escape, and restores page scrolling.
- Product story selectors update the visible detail pane without changing verified copy.
- Motion uses short opacity/translate transitions and slow ambient movement; `prefers-reduced-motion` disables nonessential animation.
- Layout collapses from split-screen to one column below tablet widths. Tap targets remain at least 44px, text stays readable without horizontal scrolling, and interface visuals reflow rather than shrink illegibly.

## Accessibility and quality

Use semantic landmarks, one H1, logical heading order, visible keyboard focus, sufficient contrast, accessible names for icon-only controls, and decorative elements hidden from assistive technology. Test the verified content contract, core links, product selector, and mobile menu. Validate with unit tests, a production build, and browser checks at desktop and mobile sizes.

## Scope boundaries

This deliverable is the landing page only. Existing routes remain links; they are not recreated. The page has no backend, form submission, authentication, pricing logic, or invented product UI. Product visuals are representative interface compositions made from existing language, not screenshots of functionality that has not been verified.
