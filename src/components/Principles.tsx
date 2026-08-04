import { Blocks, GitBranch, LockKeyhole, ShieldCheck } from 'lucide-react';
import { siteContent } from '../content';

const icons = [GitBranch, ShieldCheck, LockKeyhole, Blocks];

export function Principles() {
  return (
    <section className="principles section-pad" aria-labelledby="principles-title">
      <div className="page-shell">
        <div className="principles-heading">
          <p className="eyebrow"><span /> Why RadiantLogiq?</p>
          <h2 id="principles-title">A different standard for clinical software.</h2>
          <p>A paradigm shift in clinical software architecture. We prioritize defensibility, strict adherence, and compliance by design.</p>
        </div>
        <div className="principle-list">
          {siteContent.principles.map((principle, index) => {
            const Icon = icons[index];
            return (
              <article className="principle" key={principle.number}>
                <span className="principle-number">{principle.number}</span>
                <div className="principle-icon"><Icon size={22} aria-hidden="true" /></div>
                <h3>{principle.title}</h3>
                <p>{principle.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
