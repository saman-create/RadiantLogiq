import { ArrowUpRight } from 'lucide-react';
import { siteContent } from '../content';

type FooterGroupProps = {
  title: string;
  links: readonly { label: string; href: string }[];
};

function FooterGroup({ title, links }: FooterGroupProps) {
  return (
    <div className="footer-group">
      <h3>{title}</h3>
      <ul>
        {links.map((link) => (
          <li key={link.label}><a href={link.href}>{link.label}</a></li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="footer-brand">
          <a className="wordmark wordmark-light" href="/" aria-label="RadiantLogiq home">
            <img className="wordmark-logo" src="/brand/riq-logo.jpg" alt="" />
            <span>RadiantLogiq</span>
          </a>
          <p>{siteContent.footer.description}</p>
          <a className="footer-contact" href="/contact">Talk to our team <ArrowUpRight size={16} aria-hidden="true" /></a>
        </div>
        <div className="footer-links">
          <FooterGroup title="Products" links={siteContent.footer.products} />
          <FooterGroup title="Company" links={siteContent.footer.company} />
          <FooterGroup title="Resources" links={siteContent.footer.resources} />
          <FooterGroup title="Legal" links={siteContent.footer.legal} />
        </div>
      </div>
      <div className="footer-program">
        <img src="/brand/nvidia-inception-logo.png" alt="NVIDIA Inception Program" />
        <span>Member, NVIDIA Inception Program</span>
      </div>
      <div className="footer-bottom">
        <p>© 2026 RadiantLogiq, Inc. All rights reserved.</p>
        <div><span>HIPAA COMPLIANT</span><span>SOC 2 TYPE II</span></div>
      </div>
    </footer>
  );
}
