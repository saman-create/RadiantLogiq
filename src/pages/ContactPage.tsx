import { useState } from "react";
import type { FormEvent } from "react";
import { ShieldCheck, Workflow } from "lucide-react";
import { PageIntro, PageLink } from "./Shared";

const choices = [
  ["bundle", "Enterprise Bundle"],
  ["cds", "RadiantLogiq CDS"],
  ["ehr", "RadiantLogiq EHR"],
  ["telehealth", "RadiantLogiq TeleHealth"],
  ["pacs", "RadiantLogiq PACS"],
];

export function ContactPage({ demo = false }: { demo?: boolean }) {
  const query = new URLSearchParams(window.location.search);
  const rawProduct = query.get("product") || (demo ? "cds" : "bundle");
  const product =
    (
      { "cds-core": "cds", "growth-suite": "telehealth" } as Record<
        string,
        string
      >
    )[rawProduct] || rawProduct;
  const [draft, setDraft] = useState("");
  const requestType = query.get("type");
  const requestSubject =
    requestType === "early-access"
      ? "Early access request"
      : requestType === "baa"
        ? "Business Associate Agreement (BAA) request"
        : requestType === "audit"
          ? "Audit documentation request"
          : "RadiantLogiq demo request";
  function prepareEmail(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const body = [
      "Name: " + data.get("name"),
      "Work email: " + data.get("email"),
      "Organization: " + data.get("org"),
      "Role: " + data.get("role"),
      "Product: " + data.get("product"),
      "Request: " + requestSubject,
      "Original interest: " + rawProduct,
      "",
      data.get("message") || "",
      "",
      "I consent to being contacted. No PHI is included.",
    ].join("\n");
    setDraft(
      `mailto:sales@radiantlogiq.com?subject=${encodeURIComponent(requestSubject)}&body=${encodeURIComponent(body)}`,
    );
  }
  return (
    <div className="contact-layout">
      <div className="contact-introduction">
        <PageIntro
          title={
            demo
              ? "Experience the Future of Clinical Reasoning"
              : "Let’s build the future of clinical operations."
          }
          description={
            demo
              ? "See how RadiantLogiq transforms clinical decision-making with deterministic logic and automated compliance—without storing PHI."
              : "Whether you run a fast-growing telehealth startup or a nationwide hospital network, RadiantLogiq can streamline your workflow and ensure rock-solid compliance."
          }
        />
        {demo ? (
          <div className="demo-benefits">
            <section>
              <ShieldCheck aria-hidden="true" />
              <div>
                <h2>Privacy-by-Design</h2>
                <p>See our zero-persistence architecture in action today.</p>
              </div>
            </section>
            <section>
              <Workflow aria-hidden="true" />
              <div>
                <h2>Real-time Clinical Integration</h2>
                <p>
                  Experience seamless workflows for PACS, EHR, and Telehealth.
                </p>
              </div>
            </section>
          </div>
        ) : (
          <div className="contact-addresses">
            <section>
              <h2>Sales Inquiries</h2>
              <a href="mailto:sales@radiantlogiq.com">sales@radiantlogiq.com</a>
            </section>
            <section>
              <h2>Partnerships</h2>
              <a href="mailto:partners@radiantlogiq.com">
                partners@radiantlogiq.com
              </a>
            </section>
          </div>
        )}
        <div className="online-request">
          <PageLink
            href={`https://app.radiantlogiq.ai/${demo ? "demo" : "contact"}${window.location.search}`}
          >
            {demo ? "Schedule Demo Now" : "Request Demo"}
          </PageLink>
          <p className="handoff-note">
            Submit online through the existing RadiantLogiq request form, or
            prepare an email here.
          </p>
        </div>
      </div>
      <section className="inquiry-panel">
        <h2>{demo ? "Schedule Your Demo" : "Talk to our team"}</h2>
        <p className="form-explanation">
          Prepare your request below, then send it using your email app. Nothing
          is submitted automatically.
        </p>
        <form onSubmit={prepareEmail} onChange={() => setDraft("")}>
          <div className="form-grid">
            <label>
              {demo ? "First & Last Name" : "Full Name"}
              <input name="name" autoComplete="name" required maxLength={120} />
            </label>
            <label>
              {demo ? "Professional Email" : "Work Email"}
              <input
                name="email"
                type="email"
                autoComplete="email"
                required
                maxLength={254}
              />
            </label>
            <label>
              Organization
              <input
                name="org"
                autoComplete="organization"
                required
                maxLength={180}
              />
            </label>
            <label>
              {demo ? "Role" : "Role / Job Title"}
              <input
                name="role"
                autoComplete="organization-title"
                required={!demo}
                maxLength={120}
              />
            </label>
          </div>
          <label>
            {demo ? "Product Interest" : "Product of Interest"}
            <select
              name="product"
              defaultValue={
                choices.some((c) => c[0] === product) ? product : "bundle"
              }
            >
              {choices.map(([value, label]) => (
                <option key={value} value={value}>
                  {demo && value === "bundle" ? "Full Platform Bundle" : label}
                </option>
              ))}
            </select>
          </label>
          <label>
            Message (Optional)
            <textarea
              name="message"
              rows={4}
              maxLength={2000}
              defaultValue={
                query.get("type") === "early-access"
                  ? "I would like to apply for early access."
                  : ""
              }
            />
          </label>
          <label className="consent">
            <input name="hipaaConsent" type="checkbox" required />
            <span>
              {demo ? (
                "I consent to be contacted and agree that I will not include any protected health information (PHI) in the message field above."
              ) : (
                <>
                  I consent to RadiantLogiq processing my information in
                  accordance with the <a href="/privacy">Privacy Policy</a>. Do
                  not include any sensitive patient information (PHI/PII) in
                  this form.
                </>
              )}
            </span>
          </label>
          <button type="submit" className="button button-dark">
            Prepare email request
          </button>
          {draft && (
            <div className="email-ready" role="status">
              <p>Your draft is ready—not yet sent.</p>
              <a className="text-link" href={draft}>
                Open email app to send request
              </a>
            </div>
          )}
        </form>
      </section>
    </div>
  );
}

export function LoginPage() {
  return (
    <div className="login-layout">
      <div className="login-brand-panel">
        <img src="/brand/riq-logo-dark.png" alt="RadiantLogiq" />
        <h2>Clinical reasoning for imaging decisions.</h2>
        <p>The most intelligent audit trail in modern healthcare.</p>
      </div>
      <section className="login-panel">
        <PageIntro
          title="Welcome back."
          description="Sign in to your RadiantLogiq account."
        />
        <PageLink href="https://app.radiantlogiq.ai/login">
          Continue to Log in
        </PageLink>
        <p>
          Your existing account, Google sign-in, and password recovery are
          available on the RadiantLogiq application.
        </p>
        <a className="text-link" href="/contact">
          Need help? Contact our team
        </a>
      </section>
    </div>
  );
}
