import { useEffect, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { siteContent } from '../content';

function Wordmark() {
  return (
    <a className="wordmark" href="/" aria-label="RadiantLogiq home">
      <img className="wordmark-logo" src="/brand/riq-logo.jpg" alt="" />
      <span>RadiantLogiq</span>
    </a>
  );
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isOverHero, setIsOverHero] = useState(true);
  const [isHeroScrolled, setIsHeroScrolled] = useState(false);

  useEffect(() => {
    const syncHeaderSurface = () => {
      const hero = document.querySelector<HTMLElement>('.hero-immersive');
      if (!hero || hero.offsetHeight === 0) return;
      const overHero = window.scrollY < hero.offsetTop + hero.offsetHeight - 88;
      setIsOverHero(overHero);
      setIsHeroScrolled(overHero && window.scrollY > 24);
    };

    syncHeaderSurface();
    window.addEventListener('scroll', syncHeaderSurface, { passive: true });
    window.addEventListener('resize', syncHeaderSurface);
    return () => {
      window.removeEventListener('scroll', syncHeaderSurface);
      window.removeEventListener('resize', syncHeaderSurface);
    };
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`site-header ${isOverHero ? 'is-over-hero' : 'is-after-hero'}${isHeroScrolled ? ' is-hero-scrolled' : ''}`}>
      <div className="header-inner">
        <Wordmark />
        <nav className="desktop-nav" aria-label="Primary navigation">
          <div className="nav-links">
            {siteContent.navigation.map((item) => (
              <a key={item.label} href={item.href}>{item.label}</a>
            ))}
          </div>
          <div className="nav-actions">
            <a className="login-link" href="/login">Log in</a>
            <a className="button button-dark button-small" href="/demo">
              Request Demo <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          </div>
        </nav>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>
      {menuOpen && (
        <div id="mobile-navigation" className="mobile-nav" role="dialog" aria-modal="true" aria-label="Mobile navigation">
          <nav aria-label="Mobile menu">
            {siteContent.navigation.map((item) => (
              <a key={item.label} href={item.href} onClick={closeMenu}>{item.label}</a>
            ))}
            <a href="/login" onClick={closeMenu}>Log in</a>
            <a className="button button-dark" href="/demo" onClick={closeMenu}>Request Demo</a>
          </nav>
        </div>
      )}
    </header>
  );
}
