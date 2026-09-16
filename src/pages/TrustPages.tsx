import { ShieldCheck, LockKeyhole, Activity, Eye } from "lucide-react";
import { legalContent } from "./pageContent";
import { FeatureList, PageIntro, PageLink } from "./Shared";

export function LegalPage({ kind }: { kind: keyof typeof legalContent }) {
  const page = legalContent[kind];
  return (
    <>
      <PageIntro title={page.title} description="Last Updated: May 2024" />
      <div className="legal-layout">
        <nav aria-label="On this page">
          {page.sections.map(([heading], i) => (
            <a key={heading} href={`#section-${i}`}>
              {heading}
            </a>
          ))}
        </nav>
        <article className="legal-copy">
          {page.sections.map(([heading, body], i) => (
            <section id={`section-${i}`} key={heading}>
              <h2>{heading}</h2>
              <p>{body}</p>
              {heading === "Contact Privacy Officer" && (
                <a href="mailto:privacy@radiantlogiq.com">
                  privacy@radiantlogiq.com
                </a>
              )}
            </section>
          ))}
        </article>
      </div>
    </>
  );
}

export function HipaaPage() {
  return (
    <>
      <PageIntro
        title="HIPAA Compliance"
        description="Ensuring the highest standards of data integrity and patient privacy."
      />
      <div className="trust-layout">
        <section>
          <ShieldCheck className="trust-icon" aria-hidden="true" />
          <h2>Compliance Framework</h2>
          <p>
            RadiantLogiq is built with a 'Privacy-by-Design' philosophy. We
            eliminate the need for persistent storage of PHI by providing
            real-time data processing and point-of-care decision support. This
            significantly reduces the risk profile for medical organizations.
          </p>
          <PageLink href="/contact?type=baa">
            Request Business Associate Agreement (BAA)
          </PageLink>
        </section>
        <section className="safeguards">
          <h2>Our Core Safeguards</h2>
          <FeatureList
            items={[
              "No Persistent Storage of PHI",
              "Zero-Footprint Web Architecture",
              "Encrypted Data Transmission (SSL/TLS)",
              "Strict Role-Based Access Controls (RBAC)",
              "Detailed Audit Logging & Traceability",
            ]}
          />
        </section>
      </div>
      <blockquote className="trust-quote">
        “RadiantLogiq completes periodic SOC 2 Type II and HIPAA audits to
        maintain best-in-class security controls and organizational
        transparency.”
      </blockquote>
    </>
  );
}

export function SecurityPage() {
  const items = [
    {
      title: "Infrastructure",
      text: "Multi-layered encryption for data at rest and in transit (AES-256 / TLS 1.3)",
      Icon: LockKeyhole,
    },
    {
      title: "Monitoring",
      text: "Real-time auditing and active threat monitoring with 24/7 SIEM support",
      Icon: Activity,
    },
    {
      title: "Governance",
      text: "Regular SOC 2 Type II audits and rigorous internal security assessments",
      Icon: ShieldCheck,
    },
    {
      title: "Observability",
      text: "Centralized logging with intelligent anomaly detection and alerting",
      Icon: Eye,
    },
  ];
  return (
    <>
      <PageIntro
        title="Enterprise-Grade Security"
        description="Protecting medical intelligence and ensuring patient safety with state-of-the-art security architecture and continuous compliance auditing."
      />
      <div className="security-rows">
        {items.map(({ title, text, Icon }) => (
          <section key={title}>
            <Icon aria-hidden="true" />
            <h2>{title}</h2>
            <p>{text}</p>
          </section>
        ))}
      </div>
      <section className="security-close">
        <h2>Security is our fundamental priority.</h2>
        <p>
          “We leverage a security-first culture that ensures every line of code
          passed through the RadiantLogiq platform is built with the highest
          standards of safety and organizational integrity.”
        </p>
        <PageLink href="/contact?type=audit" light>
          Request Audit Documentation
        </PageLink>
      </section>
    </>
  );
}
