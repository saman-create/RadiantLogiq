import { Check, FileText, HeartPulse, Image, Pill, Stethoscope } from 'lucide-react';
import type { Product } from '../content';

const icons = {
  telehealth: Stethoscope,
  pacs: Image,
  cds: HeartPulse,
  ehr: FileText,
  meds: Pill,
};

export function ProductVisual({ product }: { product: Product }) {
  const Icon = icons[product.id];

  return (
    <div className={`product-visual visual-${product.id}`} aria-hidden="true">
      <div className="visual-window">
        <div className="visual-sidebar">
          <span className="visual-logo">R<span>Q</span></span>
          {[0, 1, 2, 3].map((item) => <i key={item} className={item === 0 ? 'active' : ''} />)}
        </div>
        <div className="visual-main">
          <div className="visual-header">
            <div><span>{product.code}</span><strong>{product.name.replace('RadiantLogiq ', '')}</strong></div>
            <span className="visual-avatar">RL</span>
          </div>
          <div className="visual-summary">
            <div className="visual-summary-icon"><Icon size={24} /></div>
            <div><span>Workflow status</span><strong>Deterministic logic active</strong></div>
            <span className="visual-live"><i /> Live</span>
          </div>
          <div className="visual-rows">
            {product.features.slice(0, 3).map((feature, index) => (
              <div className="visual-row" key={feature}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <p>{feature}</p>
                <Check size={15} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="visual-chip visual-chip-top"><span /> Audit trail</div>
      <div className="visual-chip visual-chip-bottom"><Check size={14} /> Logic complete</div>
    </div>
  );
}
