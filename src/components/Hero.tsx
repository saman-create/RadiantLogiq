import { HeroMessage } from './heroes/HeroShared';

export function Hero() {
  return (
    <section className="hero hero-immersive hero-variant-prism" data-hero-variant="prism" aria-label="RadiantLogiq immersive hero">
      <div className="hero-scene prism-scene" aria-hidden="true">
        <span className="prism-plane prism-plane-violet" />
        <span className="prism-plane prism-plane-mint" />
        <span className="prism-plane prism-plane-blue" />
        <span className="prism-light" />
      </div>
      <div className="hero-center page-shell">
        <HeroMessage className="immersive-message" />
      </div>
    </section>
  );
}
