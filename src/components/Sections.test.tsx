import { render, screen, within } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { EnterpriseBundle } from './EnterpriseBundle';
import { FinalCta } from './FinalCta';
import { Integrations } from './Integrations';
import { Principles } from './Principles';
import { TelehealthSpotlight } from './TelehealthSpotlight';

describe('landing page story sections', () => {
  it('renders every verified enterprise capability', () => {
    render(<EnterpriseBundle />);
    const section = screen.getByRole('region', { name: 'The Complete Platform Bundle' });
    for (const capability of [
      'Unified Single Sign-On (SSO)', 'Priority API Rate Limits', 'Dedicated Solutions Architect',
      'Custom Deterministic Rules Engine', 'White-labeled Patient Portals',
      '99.99% Guaranteed Uptime SLA', 'Full EHR/PACS Interoperability',
      '24/7 Dedicated Priority Support',
    ]) {
      expect(within(section).getByText(capability)).toBeInTheDocument();
    }
    expect(within(section).getByRole('link', { name: 'Request Enterprise Pricing' })).toHaveAttribute('href', '/contact?product=bundle');
  });

  it('explains the four existing architecture principles', () => {
    render(<Principles />);
    for (const title of ['Deterministic Engine', 'Zero PHI Footprint', 'Ironclad Security', 'Modular Composability']) {
      expect(screen.getByRole('heading', { name: title })).toBeInTheDocument();
    }
  });

  it('keeps all TeleHealth feature and compatibility claims', () => {
    render(<TelehealthSpotlight />);
    const section = screen.getByRole('region', { name: 'The infrastructure for modern virtual care.' });
    for (const feature of [
      'Secure Data Loops', 'Intelligent Workflows', 'Mobile First Patient Portal',
      'Real-time Waitlist', 'Zero PHI Footprint', 'Identity Verification',
    ]) {
      expect(within(section).getByRole('heading', { name: feature })).toBeInTheDocument();
    }
    for (const ehr of ['Epic', 'Cerner', 'Athenahealth', 'DrChrono', 'Eligible', 'eClinicalWorks']) {
      expect(within(section).getByText(ehr)).toBeInTheDocument();
    }
    const illustration = screen.getByLabelText('RadiantLogiq TeleHealth workflow illustration');
    expect(illustration.querySelector('img.visual-logo')).toHaveAttribute('src', '/brand/riq-logo.jpg');
  });

  it('renders the full integration set as accessible brand logos instead of text placeholders', () => {
    render(<Integrations />);
    const list = screen.getByRole('list', { name: 'Supported integrations' });
    expect(within(list).getAllByRole('listitem')).toHaveLength(20);
    expect(within(list).getAllByRole('img')).toHaveLength(20);
    expect(within(list).getByRole('img', { name: 'Epic logo' })).toHaveAttribute('src', '/integrations/epic.png');
    expect(within(list).getByRole('img', { name: 'PowerScribe logo' })).toHaveAttribute('src', '/integrations/powerscribe.svg');
    expect(within(list).getByRole('img', { name: 'SendGrid logo' })).toHaveAttribute('src', '/integrations/sendgrid.svg');
    expect(within(list).getByRole('img', { name: 'GCP logo' })).toHaveAttribute('src', '/integrations/gcp.png');
  expect(within(list).getByText('Epic')).toBeVisible();
  expect(within(list).getByText('eClinicalWorks')).toBeVisible();
  expect(within(list).getByText('GCP')).toBeVisible();
});

  it('preserves the final request and pricing destinations', () => {
    render(<FinalCta />);
    expect(screen.getByRole('link', { name: 'Request Demo' })).toHaveAttribute('href', '/contact');
    expect(screen.getByRole('link', { name: 'View Pricing' })).toHaveAttribute('href', '/pricing');
  });
});
