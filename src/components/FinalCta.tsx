import { ArrowUpRight } from 'lucide-react';
import { siteContent } from '../content';

export function FinalCta() {
  const { finalCta } = siteContent;
  return (
    <section className="final-cta-wrap section-pad" aria-labelledby="final-cta-title">
      <div className="final-cta page-shell">
        <div className="cta-grid" aria-hidden="true"><i /><i /><i /><i /><i /><i /></div>
        <p className="eyebrow eyebrow-light"><span /> Built for modern healthcare</p>
        <h2 id="final-cta-title">{finalCta.title}</h2>
        <p>{finalCta.description}</p>
        <div className="final-actions">
          <a className="button button-light" href={finalCta.primary.href}>{finalCta.primary.label}<ArrowUpRight size={17} aria-hidden="true" /></a>
          <a className="button button-outline-light" href={finalCta.secondary.href}>{finalCta.secondary.label}</a>
        </div>
      </div>
    </section>
  );
}
