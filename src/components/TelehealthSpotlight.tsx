import { CalendarDays, Check, Clock3, Fingerprint, LockKeyhole, Smartphone, Workflow } from 'lucide-react';
import { siteContent } from '../content';

const featureIcons = [LockKeyhole, Workflow, Smartphone, Clock3, Fingerprint, Check];

export function TelehealthSpotlight() {
  const { telehealth } = siteContent;
  return (
    <section className="telehealth section-pad" aria-labelledby="telehealth-title">
      <div className="page-shell">
        <div className="section-intro centered-intro">
          <p className="eyebrow"><span /> {telehealth.eyebrow}</p>
          <h2 id="telehealth-title">{telehealth.title}</h2>
          <p>{telehealth.description}</p>
        </div>

        <div className="telehealth-visual" aria-label="RadiantLogiq TeleHealth workflow illustration">
          <div className="portal-rail" aria-hidden="true">
            <span className="visual-logo">R<span>Q</span></span>
            <i className="active" /><i /><i /><i />
          </div>
          <div className="portal-panel portal-waitlist">
            <div className="portal-heading"><div><small>Real-time</small><strong>Waitlist</strong></div><Clock3 size={18} aria-hidden="true" /></div>
            <div className="waitlist-row"><span className="patient-avatar">01</span><div><strong>Patient verified</strong><small>Ready for visit</small></div><Check size={16} /></div>
            <div className="waitlist-row"><span className="patient-avatar violet-avatar">02</span><div><strong>Provider available</strong><small>Securely connected</small></div><span className="status-dot" /></div>
            <div className="waitlist-row is-muted"><span className="patient-avatar">03</span><div><strong>Visit queued</strong><small>Notification active</small></div><Clock3 size={16} /></div>
          </div>
          <div className="portal-panel portal-visit">
            <div className="visit-status"><span><i /> Encrypted visit</span><LockKeyhole size={17} /></div>
            <div className="video-frame">
              <div className="video-person"><span /><i /></div>
              <div className="video-controls"><i /><i /><i /></div>
            </div>
            <div className="visit-meta"><div><small>Virtual care</small><strong>Connected workflow</strong></div><CalendarDays size={20} /></div>
          </div>
          <div className="portal-panel portal-mobile">
            <div className="phone-notch" />
            <small>Patient portal</small>
            <div className="phone-check"><Check size={22} /></div>
            <strong>Identity verified</strong>
            <span>Ready to join</span>
            <button type="button" tabIndex={-1}>Join visit</button>
          </div>
          <div className="portal-float" aria-hidden="true"><Fingerprint size={18} /> Identity verification</div>
        </div>

        <div className="telehealth-features">
          {telehealth.features.map((feature, index) => {
            const Icon = featureIcons[index];
            return (
              <article key={feature.title}>
                <span><Icon size={18} aria-hidden="true" /></span>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </article>
            );
          })}
        </div>

        <div className="ehr-compatibility">
          <span>Compatible EHR Systems:</span>
          <div>{telehealth.compatibleEhrs.map((ehr) => <strong key={ehr}>{ehr}</strong>)}</div>
        </div>
      </div>
    </section>
  );
}
