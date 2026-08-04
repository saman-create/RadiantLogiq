import { Fragment, type KeyboardEvent, useState } from 'react';
import { ArrowUpRight, Check } from 'lucide-react';
import { siteContent, type Product } from '../content';
import { ProductVisual } from './ProductVisual';

export function ProductSuite() {
  const [selectedId, setSelectedId] = useState<Product['id']>('telehealth');
  const [hasChangedProduct, setHasChangedProduct] = useState(false);
  const product = siteContent.products.find((item) => item.id === selectedId) ?? siteContent.products[0];

  const selectProduct = (productId: Product['id']) => {
    if (productId === selectedId) return;
    setHasChangedProduct(true);
    setSelectedId(productId);
  };

  const moveTab = (event: KeyboardEvent<HTMLButtonElement>, currentIndex: number) => {
    const lastIndex = siteContent.products.length - 1;
    let nextIndex = currentIndex;
    if (event.key === 'ArrowRight') nextIndex = currentIndex === lastIndex ? 0 : currentIndex + 1;
    else if (event.key === 'ArrowLeft') nextIndex = currentIndex === 0 ? lastIndex : currentIndex - 1;
    else if (event.key === 'Home') nextIndex = 0;
    else if (event.key === 'End') nextIndex = lastIndex;
    else return;

    event.preventDefault();
    const nextProduct = siteContent.products[nextIndex];
    selectProduct(nextProduct.id);
    document.getElementById(`tab-${nextProduct.id}`)?.focus();
  };

  return (
    <section className="product-suite section-pad" id="products">
      <div className="page-shell">
        <div className="section-intro split-intro">
          <div>
            <p className="eyebrow"><span /> The intelligent healthcare operating system</p>
            <h2>Clinical infrastructure that works as one.</h2>
          </div>
          <p>A modular suite of deterministic applications bringing unparalleled compliance, performance, and transparency to clinical reasoning.</p>
        </div>

        <div className="product-tabs-shell">
          <div className="product-tabs" role="tablist" aria-label="RadiantLogiq products">
            {siteContent.products.map((item, index) => (
              <button
                id={`tab-${item.id}`}
                key={item.id}
                type="button"
                role="tab"
                aria-label={item.name}
                aria-selected={item.id === product.id}
                aria-controls={`panel-${item.id}`}
                tabIndex={item.id === product.id ? 0 : -1}
                onClick={() => selectProduct(item.id)}
                onKeyDown={(event) => moveTab(event, index)}
              >
                <span>{item.code}</span>{item.name}
              </button>
            ))}
          </div>
        </div>

        <div
          className="product-stage"
          id={`panel-${product.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${product.id}`}
          data-product-id={product.id}
          data-switching={hasChangedProduct ? 'true' : undefined}
        >
          <Fragment key={product.id}>
            <div className="product-detail">
              <div className="product-code"><span>{product.code}</span>{product.status && <em>{product.status}</em>}</div>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <ul>
                {product.features.map((feature) => (
                  <li key={feature}><span><Check size={14} aria-hidden="true" /></span>{feature}</li>
                ))}
              </ul>
              <a className="text-link" href={product.href}>{product.cta}<ArrowUpRight size={17} aria-hidden="true" /></a>
            </div>
            <ProductVisual product={product} />
          </Fragment>
        </div>
      </div>
    </section>
  );
}
