import { ArrowUpRight } from 'lucide-react';
import { siteContent } from '../content';

const integrationLogoFiles: Record<string, string> = {
  Epic: 'epic.png', Cerner: 'cerner.png', Meditech: 'meditech.png', DrChrono: 'drchrono.png',
  Athenahealth: 'athenahealth.png', eClinicalWorks: 'eclinicalworks.png', Allscripts: 'allscripts.png',
  NextGen: 'nextgen.png', Greenway: 'greenway.png', Kareo: 'kareo.png', PowerScribe: 'powerscribe.svg',
  DoseSpot: 'dosespot.png', SureScripts: 'surescripts.png', DrFirst: 'drfirst.png', Vouched: 'vouched.png',
  Stripe: 'stripe.png', Twilio: 'twilio.png', SendGrid: 'sendgrid.svg', Firebase: 'firebase.png', GCP: 'gcp.png',
};

export function Integrations() {
  return (
    <section className="integrations section-pad" aria-labelledby="integrations-title">
      <div className="page-shell integrations-inner">
        <div className="integrations-copy">
          <p className="eyebrow"><span /> Native interoperability</p>
          <h2 id="integrations-title">Connects with everything.</h2>
          <p>Natively interoperable with all major EMR, PACS, and e-prescribing tools out of the box. No costly custom integrations required.</p>
          <a className="text-link" href="/partners">Our partners <ArrowUpRight size={17} aria-hidden="true" /></a>
        </div>
        <ul className="integration-cloud" aria-label="Supported integrations">
          {siteContent.integrations.map((integration) => (
            <li key={integration} title={integration}>
              <span className="integration-logo">
                <img
                  src={`/integrations/${integrationLogoFiles[integration]}`}
                  alt={`${integration} logo`}
                  className={integration === 'PowerScribe' ? 'integration-logo-wordmark' : 'integration-logo-icon'}
                  loading="lazy"
                  decoding="async"
                />
              </span>
              <span className="integration-name">{integration}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
