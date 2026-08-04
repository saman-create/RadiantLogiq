import { useLayoutEffect, useRef } from 'react';
import { Footer } from './components/Footer';
import { EnterpriseBundle } from './components/EnterpriseBundle';
import { FinalCta } from './components/FinalCta';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Integrations } from './components/Integrations';
import { MetricStrip } from './components/MetricStrip';
import { Principles } from './components/Principles';
import { ProductSuite } from './components/ProductSuite';
import { TelehealthSpotlight } from './components/TelehealthSpotlight';
import { installScrollMotion } from './motion';

export default function App() {
  const experienceRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const experience = experienceRef.current;
    if (!experience) return;

    experience.dataset.motionReady = 'true';
    return installScrollMotion(experience);
  }, []);

  return (
    <div ref={experienceRef} className="landing-experience" data-motion-version="after" data-motion-pace="balanced" data-delight-version="after" data-hero-variant="prism">
      <Header />
      <main>
        <Hero />
        <MetricStrip />
        <ProductSuite />
        <Principles />
        <EnterpriseBundle />
        <TelehealthSpotlight />
        <Integrations />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
