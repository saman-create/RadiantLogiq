import { describe, expect, it } from 'vitest';
import { siteContent } from './content';

describe('verified RadiantLogiq content contract', () => {
  it('keeps the three published business metrics', () => {
    expect(siteContent.metrics.map(({ value, label }) => [value, label])).toEqual([
      ['10000+', 'Active clinicians'],
      ['99.9%', 'Uptime SLA'],
      ['5', 'Enterprise platforms'],
    ]);
  });

  it('keeps all five real product names and destinations', () => {
    expect(siteContent.products.map(({ name, href }) => [name, href])).toEqual([
      ['RadiantLogiq TeleHealth', '/products/telehealth'],
      ['RadiantLogiq PACS', '/products/pacs'],
      ['RadiantLogiq CDS', '/products/cds'],
      ['RadiantLogiq EHR', '/products/ehr'],
      ['RadiantLogiq MEDS', '/products/meds'],
    ]);
  });

  it('preserves every primary navigation destination', () => {
    expect(siteContent.navigation).toEqual([
      { label: 'Products', href: '#products' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'About', href: '/about' },
      { label: 'Partners', href: '/partners' },
      { label: 'Blog', href: '/blog' },
      { label: 'Contact', href: '/contact' },
    ]);
  });

  it('keeps the complete integration list from the current landing page', () => {
    expect(siteContent.integrations).toEqual([
      'Epic', 'Cerner', 'Meditech', 'DrChrono', 'Athenahealth',
      'eClinicalWorks', 'Allscripts', 'NextGen', 'Greenway', 'Kareo',
      'PowerScribe', 'DoseSpot', 'SureScripts', 'DrFirst', 'Vouched',
      'Stripe', 'Twilio', 'SendGrid', 'Firebase', 'GCP',
    ]);
  });
});
