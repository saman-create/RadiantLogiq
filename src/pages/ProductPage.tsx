import { siteContent } from "../content";
import { ProductVisual } from "../components/ProductVisual";
import { productDetails } from "./pageContent";
import { PageIntro, PageLink, FeatureList } from "./Shared";

export function ProductPage({ id }: { id: string }) {
  const product = siteContent.products.find((p) => p.id === id)!;
  if (id === "meds")
    return (
      <div className="meds-page">
        <PageIntro
          title="RadiantLogiq MEDS"
          description="Next-generation e-prescribing with DoseSpot integration. Coming soon to power your clinical workflows safely and efficiently."
        />
        <section className="waitlist-panel">
          <img src="/integrations/dosespot.png" alt="DoseSpot" />
          <h2>Get Early Access</h2>
          <p>
            Join the VIP waitlist to be notified first and get early exclusive
            features.
          </p>
          <PageLink href="https://app.radiantlogiq.ai/products/meds">
            Join the Waitlist
          </PageLink>
          <p className="handoff-note">
            Continue to the existing RadiantLogiq waitlist to enter your
            professional email.
          </p>
        </section>
        <a className="text-link" href="/#products">
          Back to Products
        </a>
      </div>
    );
  const details = productDetails[id as keyof typeof productDetails];
  return (
    <>
      <a className="text-link back-platform" href="/#products">
        Back to Platform
      </a>
      <div className="product-page-hero">
        <div>
          <PageIntro title={product.name} description={details.description} />
          <PageLink href={`/demo?product=${id}`}>{details.cta}</PageLink>
        </div>
        <div className="product-page-visual">
          <ProductVisual product={product} />
          <span className="visual-caption">Illustrative product interface</span>
        </div>
      </div>
      <section
        className="product-capabilities"
        aria-label={`${product.name} capabilities`}
      >
        <FeatureList items={details.features} />
      </section>
      <nav className="product-siblings" aria-label="Other products">
        {siteContent.products
          .filter((p) => p.id !== id)
          .map((p) => (
            <a key={p.id} href={p.href}>
              {p.name}
              <span aria-hidden="true">↗</span>
            </a>
          ))}
      </nav>
    </>
  );
}
