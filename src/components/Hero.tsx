import { lazy, Suspense } from 'react';
import { HeroMessage } from './heroes/HeroShared';

const ColorBends = lazy(() => import('./ColorBends'));

export function Hero() {
  return (
    <section className="hero hero-immersive hero-variant-prism" data-hero-variant="prism" aria-label="RadiantLogiq immersive hero">
      <div className="hero-scene prism-scene" aria-hidden="true">
        <Suspense fallback={<div className="color-bends-container hero-color-bends" data-testid="color-bends-background" />}>
          <ColorBends
            className="hero-color-bends"
            colors={['#7355f3', '#43dfa1', '#2468c9']}
            rotation={180}
            autoRotate={0}
            speed={0.2}
            scale={1}
            frequency={1}
            warpStrength={1}
            mouseInfluence={1}
            noise={0.19}
            parallax={0.2}
            iterations={1}
            intensity={2}
            bandWidth={4.5}
            transparent
          />
        </Suspense>
        <span className="color-bends-veil" />
      </div>
      <div className="hero-center page-shell">
        <HeroMessage className="immersive-message" />
      </div>
    </section>
  );
}
