import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { PageIntro, PageLink, FeatureList } from "./Shared";
import { partners, plans, posts, team, vision } from "./pageContent";

export function PricingPage() {
  return (
    <>
      <PageIntro
        title="Simple, transparent pricing."
        description="Modular pricing designed so you only pay for the parts of the intelligence engine you actually use."
      />
      <div className="pricing-grid">
        {plans.map((plan, i) => (
          <section
            className={`price-plan ${i === 1 ? "price-featured" : ""}`}
            key={plan.name}
          >
            {i === 1 && <span className="plan-badge">Most Popular</span>}
            <h2>{plan.name}</h2>
            <p>{plan.description}</p>
            <div className="plan-price">
              {plan.price}
              <span>{plan.unit}</span>
            </div>
            <PageLink href={plan.href}>{plan.cta}</PageLink>
            <FeatureList items={plan.features} />
          </section>
        ))}
      </div>
    </>
  );
}

export function AboutPage() {
  const [selected, setSelected] = useState(0);
  const person = team[selected];
  return (
    <>
      <PageIntro
        title="Built by a physician-led team."
        description="RadiantLogiq is designed to improve efficiency and scalability in modern healthcare delivery."
      />
      <div className="team-picker" role="group" aria-label="Choose team member">
        {team.map((p, i) => (
          <button
            key={p.name}
            aria-pressed={selected === i}
            onClick={() => setSelected(i)}
          >
            {p.name}
          </button>
        ))}
      </div>
      <section className="team-profile" aria-label={person.name}>
        <img className="team-portrait" src={`/team/${person.image}`} alt={person.name} />
        <div>
          <h2>{person.name}</h2>
          <p className="team-role">{person.title}</p>
          <p>{person.bio}</p>
        </div>
      </section>
      <div className="team-details">
        <section>
          <h3>Education</h3>
          <dl>
            {person.education.map(([label, text]) => (
              <div key={label}>
                <dt>{label}</dt>
                <dd>{text}</dd>
              </div>
            ))}
          </dl>
        </section>
        <section>
          <h3>Active Licenses</h3>
          <FeatureList items={person.licenses} />
        </section>
        <section>
          <h3>Personal &amp; Bio</h3>
          <dl>
            <div>
              <dt>Languages</dt>
              <dd>{person.languages}</dd>
            </div>
            <div>
              <dt>Recognition</dt>
              <dd>{person.recognition}</dd>
            </div>
          </dl>
        </section>
      </div>
      <section className="vision-panel">
        <h2>Partnership &amp; Vision</h2>
        {vision.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </section>
    </>
  );
}

export function PartnersPage() {
  return (
    <>
      <PageIntro
        title="Strategic Partnerships"
        description="We collaborate with industry leaders in AI, pharmaceuticals, and clinical care to build the most intelligent audit trail in modern healthcare."
      />
      <section className="nvidia-feature">
        <div>
          <h2>Empowering AI-Driven Decision Support</h2>
          <p>
            RadiantLogiq is a proud member of the NVIDIA Inception Program. This
            global program provides us with critical go-to-market support,
            expertise, and technology for startups that are revolutionizing
            industries with advancements in AI and data science.
          </p>
          <FeatureList
            items={[
              "GPU-Accelerated Inferencing",
              "Exclusive Networking Access",
            ]}
          />
        </div>
        <div className="nvidia-image">
          <img
            src="/brand/nvidia-inception-logo.png"
            alt="NVIDIA Inception Program"
          />
          <span>Member, NVIDIA Inception Program</span>
        </div>
      </section>
      <div className="partner-directory">
        {partners.map((p) => (
          <section className="partner-row" key={p.name}>
            <div className="partner-image">
              <img
                src={`/partners/${p.image}`}
                alt={p.name}
                loading="lazy"
              />
            </div>
            <div>
              <h2>{p.name}</h2>
              <p>{p.description}</p>
            </div>
            <a
              className="text-link"
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Website <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          </section>
        ))}
      </div>
    </>
  );
}

export function BlogPage() {
  return (
    <>
      <PageIntro
        title="The Radiant Logiq Blog"
        description="Insights from the intersection of AI, clinical operations, and radiology."
      />
      <div className="blog-feed">
        {posts.map((post, i) => (
          <article
            className={`blog-story ${i === 0 ? "blog-featured" : ""}`}
            key={post.title}
          >
            <img
              src={`https://images.unsplash.com/${post.image}?auto=format&fit=crop&q=80&w=1000`}
              alt=""
              loading={i === 0 ? "eager" : "lazy"}
            />
            <div className="blog-story-body">
              <span className="story-category">{post.category}</span>
              <h2>{post.title}</h2>
              <p>{post.description}</p>
              <div className="story-byline">
                <span>{post.date}</span>
                <span>{post.author}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
