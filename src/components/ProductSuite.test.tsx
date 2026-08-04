import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { ProductSuite } from './ProductSuite';

describe('ProductSuite', () => {
  it('reveals the verified details and destination for each selected product', async () => {
    const user = userEvent.setup();
    render(<ProductSuite />);

    const expectations = [
      ['RadiantLogiq TeleHealth', 'End-to-end encrypted virtual visits', 'Explore TeleHealth', '/products/telehealth'],
      ['RadiantLogiq PACS', 'Zero-footprint web viewer', 'Explore PACS', '/products/pacs'],
      ['RadiantLogiq CDS', 'PowerScribe companion app', 'Explore CDS', '/products/cds'],
      ['RadiantLogiq EHR', 'Seamless interoperability', 'Explore EHR', '/products/ehr'],
      ['RadiantLogiq MEDS', 'DoseSpot integration', 'Join the Waitlist', '/products/meds'],
    ];

    for (const [name, feature, cta, href] of expectations) {
      const tab = screen.getByRole('tab', { name });
      await user.click(tab);
      expect(tab).toHaveAttribute('aria-selected', 'true');
      const panel = screen.getByRole('tabpanel', { name });
      expect(panel).toHaveTextContent(feature);
      expect(screen.getByRole('link', { name: cta })).toHaveAttribute('href', href);
    }
  });

  it('marks MEDS as a waitlist product without inventing an availability claim', async () => {
    const user = userEvent.setup();
    render(<ProductSuite />);

    await user.click(screen.getByRole('tab', { name: 'RadiantLogiq MEDS' }));
    expect(screen.getByRole('tabpanel', { name: 'RadiantLogiq MEDS' })).toHaveTextContent('Waitlist');
  });

  it('uses the supplied RadiantLogiq logo inside every product illustration', () => {
    render(<ProductSuite />);

    const panel = screen.getByRole('tabpanel', { name: 'RadiantLogiq TeleHealth' });
    const logo = panel.querySelector('img.visual-logo');
    expect(logo).toHaveAttribute('src', '/brand/riq-logo.jpg');
  });

  it('moves between product tabs with arrow keys', async () => {
    const user = userEvent.setup();
    render(<ProductSuite />);

    const telehealth = screen.getByRole('tab', { name: 'RadiantLogiq TeleHealth' });
    telehealth.focus();
    await user.keyboard('{ArrowRight}');

    expect(screen.getByRole('tab', { name: 'RadiantLogiq PACS' })).toHaveAttribute('aria-selected', 'true');
    expect(screen.getByRole('tabpanel', { name: 'RadiantLogiq PACS' })).toBeInTheDocument();
  });

  it('marks a deliberate product change so the new clinical workspace can acknowledge it', async () => {
    const user = userEvent.setup();
    render(<ProductSuite />);

    expect(screen.getByRole('tabpanel', { name: 'RadiantLogiq TeleHealth' })).toHaveAttribute('data-product-id', 'telehealth');
    expect(screen.getByRole('tabpanel', { name: 'RadiantLogiq TeleHealth' })).not.toHaveAttribute('data-switching');

    await user.click(screen.getByRole('tab', { name: 'RadiantLogiq PACS' }));

    expect(screen.getByRole('tabpanel', { name: 'RadiantLogiq PACS' })).toHaveAttribute('data-product-id', 'pacs');
    expect(screen.getByRole('tabpanel', { name: 'RadiantLogiq PACS' })).toHaveAttribute('data-switching', 'true');
  });
});
