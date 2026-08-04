import { ArrowDown, ArrowUpRight, Check, ShieldCheck } from 'lucide-react';
import { siteContent } from '../../content';

export function HeroMessage({ className = '' }: { className?: string }) {
  return (
    <div className={`hero-copy ${className}`.trim()}>
      <p className="eyebrow"><span /> {siteContent.hero.kicker}</p>
      <h1>Clinical reasoning for <span>imaging decisions.</span></h1>
      <p className="hero-description">{siteContent.hero.description}</p>
      <HeroActions />
      <HeroAssurance />
    </div>
  );
}

export function HeroActions() {
  return (
    <div className="hero-actions">
      <a className="button button-dark" href={siteContent.hero.primaryCta.href}>
        {siteContent.hero.primaryCta.label}<ArrowUpRight size={17} aria-hidden="true" />
      </a>
      <a className="text-link" href={siteContent.hero.secondaryCta.href}>
        {siteContent.hero.secondaryCta.label}<ArrowDown size={16} aria-hidden="true" />
      </a>
    </div>
  );
}

export function HeroAssurance() {
  return (
    <div className="hero-assurance" aria-label="Platform architecture highlights">
      <span><ShieldCheck size={16} aria-hidden="true" /> Deterministic</span>
      <span><Check size={16} aria-hidden="true" /> Auditable</span>
      <span><Check size={16} aria-hidden="true" /> Zero PHI footprint</span>
    </div>
  );
}
