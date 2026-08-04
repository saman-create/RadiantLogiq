import { siteContent } from '../content';

export function MetricStrip() {
  return (
    <section className="metric-section" aria-label="RadiantLogiq at a glance">
      <div className="metric-strip page-shell">
        {siteContent.metrics.map((metric) => (
          <div className="metric" key={metric.label}>
            <strong>{metric.value}</strong>
            <span>{metric.label}</span>
          </div>
        ))}
        <p className="metric-note">Five platforms. One deterministic data loop.</p>
      </div>
    </section>
  );
}
