type MotionKind = 'copy' | 'metric' | 'rail' | 'stage' | 'item' | 'centered' | 'integration' | 'finale' | 'dark';

type MotionRegistration = {
  selector: string;
  kind: MotionKind;
  stagger?: boolean;
};

const registrations: MotionRegistration[] = [
  { selector: '.metric-strip', kind: 'metric' },
  { selector: '.product-suite .split-intro', kind: 'copy' },
  { selector: '.product-tabs-shell', kind: 'rail' },
  { selector: '.product-stage', kind: 'stage' },
  { selector: '.principles-heading', kind: 'copy' },
  { selector: '.principle', kind: 'item', stagger: true },
  { selector: '.enterprise-copy', kind: 'dark' },
  { selector: '.enterprise-item', kind: 'item', stagger: true },
  { selector: '.telehealth .centered-intro', kind: 'centered' },
  { selector: '.telehealth-visual', kind: 'stage' },
  { selector: '.telehealth-features article', kind: 'item', stagger: true },
  { selector: '.ehr-compatibility', kind: 'rail' },
  { selector: '.integrations-copy', kind: 'copy' },
  { selector: '.integration-cloud li', kind: 'integration', stagger: true },
  { selector: '.final-cta', kind: 'finale' },
  { selector: '.footer-top, .footer-program, .footer-bottom', kind: 'dark', stagger: true },
];

const loopRegionSelector = '.hero, .product-stage, .telehealth-visual';

export function installScrollMotion(root: ParentNode = document) {
  const targets: HTMLElement[] = [];
  const loopRegions = Array.from(root.querySelectorAll<HTMLElement>(loopRegionSelector));

  for (const registration of registrations) {
    const elements = Array.from(root.querySelectorAll<HTMLElement>(registration.selector));
    elements.forEach((element, index) => {
      element.dataset.motionKind = registration.kind;
      element.style.setProperty('--motion-order', String(registration.stagger ? Math.min(index, 7) : 0));
      targets.push(element);
    });
  }

  loopRegions.forEach((region) => {
    region.classList.add('motion-loop-region', 'motion-page-visible');
  });

  if (!('IntersectionObserver' in globalThis)) {
    return () => clearMotionState(targets, loopRegions);
  }

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('motion-target', 'is-revealed');
      revealObserver.unobserve(entry.target);
    });
  }, { threshold: 0.04, rootMargin: '0px 0px -2% 0px' });

  const loopObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle('motion-active', entry.isIntersecting);
    });
  }, { threshold: 0.04 });

  targets.forEach((target) => revealObserver.observe(target));
  loopRegions.forEach((region) => loopObserver.observe(region));

  const syncVisibility = () => {
    const visible = document.visibilityState !== 'hidden';
    loopRegions.forEach((region) => region.classList.toggle('motion-page-visible', visible));
  };
  document.addEventListener('visibilitychange', syncVisibility);

  return () => {
    revealObserver.disconnect();
    loopObserver.disconnect();
    document.removeEventListener('visibilitychange', syncVisibility);
    clearMotionState(targets, loopRegions);
  };
}

function clearMotionState(targets: HTMLElement[], loopRegions: HTMLElement[]) {
  targets.forEach((target) => {
    target.classList.remove('motion-target', 'is-revealed');
    target.removeAttribute('data-motion-kind');
    target.style.removeProperty('--motion-order');
  });
  loopRegions.forEach((region) => {
    region.classList.remove('motion-loop-region', 'motion-active', 'motion-page-visible');
  });
}
