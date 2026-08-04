import { render, screen, within } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Hero } from './Hero';

describe('Hero', () => {
  it('renders the centered immersive hero with the verified message and actions', () => {
    render(<Hero />);

    const hero = screen.getByRole('region', { name: 'RadiantLogiq immersive hero' });
    expect(hero).toHaveAttribute('data-hero-variant', 'prism');
    expect(within(hero).getByRole('heading', { level: 1 })).toHaveTextContent('Clinical reasoning for imaging decisions.');
    expect(within(hero).getByRole('link', { name: 'Request Demo' })).toHaveAttribute('href', '/demo');
    expect(within(hero).getByRole('link', { name: 'Explore Platform' })).toHaveAttribute('href', '#products');
    expect(within(hero).getByText('Deterministic')).toBeVisible();
    expect(within(hero).getByText('Auditable')).toBeVisible();
    expect(within(hero).getByText('Zero PHI footprint')).toBeVisible();
    expect(within(hero).queryByText('Clinical logic workspace')).not.toBeInTheDocument();
    expect(within(hero).queryByText('Rules engine')).not.toBeInTheDocument();
    expect(screen.queryByRole('group', { name: 'Choose hero design' })).not.toBeInTheDocument();
  });
});
