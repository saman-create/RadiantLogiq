import { afterEach, describe, expect, it, vi } from 'vitest';
import { installScrollMotion } from './motion';

type ObserverCallback = IntersectionObserverCallback;

class FakeIntersectionObserver {
  static instances: FakeIntersectionObserver[] = [];
  callback: ObserverCallback;
  observed = new Set<Element>();

  constructor(callback: ObserverCallback) {
    this.callback = callback;
    FakeIntersectionObserver.instances.push(this);
  }

  observe = vi.fn((element: Element) => this.observed.add(element));
  unobserve = vi.fn((element: Element) => this.observed.delete(element));
  disconnect = vi.fn(() => this.observed.clear());
  takeRecords = vi.fn(() => []);
  root = null;
  rootMargin = '0px';
  thresholds = [0];
}

describe('scroll motion controller', () => {
  const originalObserver = globalThis.IntersectionObserver;

  afterEach(() => {
    document.body.innerHTML = '';
    FakeIntersectionObserver.instances = [];
    globalThis.IntersectionObserver = originalObserver;
  });

  it('reveals registered content when it enters the viewport', () => {
    globalThis.IntersectionObserver = FakeIntersectionObserver as unknown as typeof IntersectionObserver;
    document.body.innerHTML = `
      <main>
        <section class="product-suite"><div class="split-intro">Products</div></section>
        <section class="principles"><article class="principle">Principle</article></section>
      </main>
    `;

    const cleanup = installScrollMotion(document);
    const intro = document.querySelector('.split-intro')!;
    const revealObserver = FakeIntersectionObserver.instances[0];

    expect(intro).toHaveAttribute('data-motion-kind', 'copy');
    expect(revealObserver.observed.has(intro)).toBe(true);
    expect(intro).not.toHaveClass('motion-target');
    expect(intro).not.toHaveClass('is-revealed');

    revealObserver.callback([
      { target: intro, isIntersecting: true } as IntersectionObserverEntry,
    ], revealObserver as unknown as IntersectionObserver);

    expect(intro).toHaveClass('motion-target', 'is-revealed');
    expect(revealObserver.unobserve).toHaveBeenCalledWith(intro);

    cleanup();
    expect(intro).not.toHaveAttribute('data-motion-kind');
    expect(intro).not.toHaveClass('is-revealed');
  });

  it('keeps registered content visible while the observer is idle', () => {
    globalThis.IntersectionObserver = FakeIntersectionObserver as unknown as typeof IntersectionObserver;
    document.body.innerHTML = `
      <main>
        <section class="product-suite"><div class="split-intro">Products</div></section>
      </main>
    `;

    const cleanup = installScrollMotion(document);
    const intro = document.querySelector('.split-intro')!;

    expect(intro).toHaveAttribute('data-motion-kind', 'copy');
    expect(intro).not.toHaveClass('motion-target');
    expect(intro).not.toHaveClass('is-revealed');
    expect((intro as HTMLElement).style.opacity).toBe('');
    expect((intro as HTMLElement).style.transform).toBe('');
    expect((intro as HTMLElement).style.visibility).toBe('');

    cleanup();
  });

  it('caps long list staggers instead of restarting the sequence', () => {
    globalThis.IntersectionObserver = FakeIntersectionObserver as unknown as typeof IntersectionObserver;
    document.body.innerHTML = `
      <ul class="integration-cloud">
        ${Array.from({ length: 10 }, (_, index) => `<li>Integration ${index + 1}</li>`).join('')}
      </ul>
    `;

    const cleanup = installScrollMotion(document);
    const orders = Array.from(document.querySelectorAll<HTMLElement>('.integration-cloud li'))
      .map((item) => item.style.getPropertyValue('--motion-order'));

    expect(orders).toEqual(['0', '1', '2', '3', '4', '5', '6', '7', '7', '7']);
    cleanup();
  });
});
