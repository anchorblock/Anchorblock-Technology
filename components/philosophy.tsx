const PRINCIPLES = [
  {
    category: "PURPOSE",
    title: "Technology should solve real problems.",
    body: "Not demo problems. The kind that keep a team at their desks after hours, with real money, real people, and real consequences on the other side.",
  },
  {
    category: "MEASUREMENT",
    title: "Innovation must create measurable value.",
    body: "We measure our work in uptime, throughput, hours returned, and decisions made — not in architectural novelty.",
  },
  {
    category: "HUMAN FACTOR",
    title: "Great products begin with understanding people.",
    body: "The field worker, the support agent, the finance lead. If the interface fails them under stress, the underlying architecture does not matter.",
  },
  {
    category: "LIFECYCLE",
    title: "The best systems are built to be lived with.",
    body: "Instrumented, documented, and actively supported long after launch. Software is an ongoing operational relationship, not an unmonitored handover.",
  },
];

export function Philosophy() {
  return (
    <section className="section section-philosophy" id="philosophy" aria-labelledby="philosophy-title">
      <div className="wrap">
        <div className="section-heading section-heading-wide">
          <div>
            <p className="section-kicker">01 / PHILOSOPHY</p>
            <h2 id="philosophy-title">
              How we see
              <br />
              <span>the future.</span>
            </h2>
            <p className="section-intro section-intro-wrap">
              Four convictions shape every system we ship. We believe in software that holds up under
              pressure, respects its operators, and delivers measurable value.
            </p>
          </div>
        </div>
        <div className="principle-grid">
          {PRINCIPLES.map((principle, index) => (
            <article key={principle.category} className="principle-card">
              <div className="product-meta">
                <span className="product-index">{String(index + 1).padStart(2, "0")}</span>
                <span className="product-category-chip">{principle.category}</span>
              </div>
              <h3>{principle.title}</h3>
              <p>{principle.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
