export function Hero() {
  return (
    <section className="hero wrap" id="top" aria-labelledby="hero-title">
      <div className="eyebrow">
        <span className="eyebrow-dot" />
        Software &amp; data systems studio · Dhaka, Bangladesh
      </div>
      <h1 className="display-title" id="hero-title">
        Engineering tomorrow.
        <br />
        Building what <em>matters.</em>
      </h1>
      <div className="hero-bottom">
        <p className="hero-copy">
          We build our own products and work alongside teams to keep essential services running.
          Explore the products we’re shaping and the production support we provide.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#contact">
            Start a conversation <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
      <div className="hero-rule" aria-hidden="true" />
      <div className="hero-facts" aria-label="Anchorblock at a glance">
        <div>
          <span className="fact-value">04+</span>
          <span className="fact-label">Years in operation</span>
        </div>
        <div className="fact-specialist">
          <span className="fact-value">7</span>
          <span className="fact-label">Engineers &amp; Designers</span>
        </div>
        <div>
          <span className="fact-value">24/7</span>
          <span className="fact-label">Monitoring &amp; support</span>
        </div>
      </div>
    </section>
  );
}
