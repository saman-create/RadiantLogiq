import { ArrowUpRight, Check } from 'lucide-react';
import { siteContent } from '../content';

export function EnterpriseBundle() {
  const { enterprise } = siteContent;
  return (
    <section className="enterprise section-pad" aria-labelledby="enterprise-title">
      <div className="enterprise-orb orb-one" aria-hidden="true" />
      <div className="enterprise-orb orb-two" aria-hidden="true" />
      <div className="enterprise-inner page-shell">
        <div className="enterprise-copy">
          <p className="eyebrow eyebrow-light"><span /> {enterprise.eyebrow}</p>
          <h2 id="enterprise-title">{enterprise.title}</h2>
          <p>{enterprise.description}</p>
          <a className="button button-light" href={enterprise.href}>{enterprise.cta}<ArrowUpRight size={17} aria-hidden="true" /></a>
        </div>
        <div className="enterprise-list">
          {enterprise.capabilities.map((capability, index) => (
            <div className="enterprise-item" key={capability}>
              <span><Check size={14} aria-hidden="true" /></span>
              <div><small>{String(index + 1).padStart(2, '0')}</small><strong>{capability}</strong></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
