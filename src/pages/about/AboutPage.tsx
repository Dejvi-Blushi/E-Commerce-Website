import "./about.css";

const values = [
  {
    title: "Fast Delivery",
    desc: "Orders placed before noon ship same day. Most customers receive their packages within 2 business days."
  },
  {
    title: "Secure Shopping",
    desc: "Your payment and personal data are protected with bank-grade encryption at every step."
  },
  {
    title: "Sustainable Choices",
    desc: "We partner with brands that prioritize ethical sourcing, recycled materials, and carbon-offset shipping."
  },
  {
    title: "Honest Pricing",
    desc: "No hidden fees, no surprise markups. The price you see is the price you pay — always."
  },
  {
    title: "Real Support",
    desc: "Reach a real person via chat, email, or phone. We reply within hours, not days."
  },
  {
    title: "Easy Returns",
    desc: "Not happy? Return anything within 30 days for a full refund. No questions asked."
  }
];

export default function AboutPage() {
  return (
    <div className="about-page">
      {/* Hero */}
      <section className="about-hero">
        <div className="about-hero-inner">
          <p className="about-hero-eyebrow">Our Story</p>
          <h1>We believe shopping should feel good.</h1>
          <p className="about-hero-lead">
            Founded in 2019, we set out to build an online store where quality,
            transparency, and genuine care for customers come first — not
            afterthought.
          </p>
        </div>
      </section>

      {/* Stats */}
      <div className="about-stats">
        <div className="about-stats-inner">
          <div className="about-stat">
            <div className="about-stat-number">120k+</div>
            <div className="about-stat-label">Happy customers</div>
          </div>
          <div className="about-stat">
            <div className="about-stat-number">4.9★</div>
            <div className="about-stat-label">Average rating</div>
          </div>
          <div className="about-stat">
            <div className="about-stat-number">5 years</div>
            <div className="about-stat-label">In business</div>
          </div>
          <div className="about-stat">
            <div className="about-stat-number">98%</div>
            <div className="about-stat-label">On-time delivery</div>
          </div>
        </div>
      </div>

      {/* Content sections */}
      <div className="about-content">
        {/* Mission */}
        <div className="about-section">
          <div className="about-section-text">
            <p className="about-section-eyebrow">Our Mission</p>
            <h2>Quality you can count on, prices you won't question.</h2>
            <p>
              Every product in our catalog is hand-reviewed before it goes live.
              We only list items we'd buy ourselves — and we back that up with a
              no-hassle return policy and human support that actually helps.
            </p>
          </div>
          <div className="about-section-visual">
            <span className="about-visual-icon"></span>
          </div>
        </div>

        {/* How it works */}
        <div className="about-section reverse">
          <div className="about-section-text">
            <p className="about-section-eyebrow">How We Work</p>
            <h2>Direct from trusted suppliers to your door.</h2>
            <p>
              We cut out the middlemen. Our team works directly with
              manufacturers and small-batch producers to negotiate fair prices —
              savings we pass straight on to you.
            </p>
          </div>
          <div className="about-section-visual">
            <span className="about-visual-icon"></span>
          </div>
        </div>

        {/* Values */}
        <div className="about-values">
          <div className="about-values-header">
            <h2>What we stand for</h2>
            <p>Six principles that guide every decision we make.</p>
          </div>
          <div className="about-values-grid">
            {values.map((v) => (
              <div key={v.title} className="about-value-card">
                <div className="about-value-title">{v.title}</div>
                <div className="about-value-desc">{v.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
