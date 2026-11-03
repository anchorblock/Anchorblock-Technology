import { Icon } from "@/components/icon-library";

const SECTORS = [
  { icon: "health", name: "AI in Healthcare", body: "Human-centered healthcare tools, supported by responsible AI and useful clinical workflows." },
  { icon: "finance", name: "Fintech", body: "Secure financial products, payments, and digital services designed around trust." },
  { icon: "location", name: "Vehicle Tracking", body: "Live fleet visibility and location intelligence for better movement and operations." },
  { icon: "automation", name: "Automation", body: "Connected workflows that reduce repetitive work and help teams move faster." },
  { icon: "mobile", name: "App Development", body: "Intuitive mobile and web applications built for real people and real-world use." },
  { icon: "ai", name: "AI & Machine Learning", body: "Practical machine learning that turns complex data into clearer decisions." },
  { icon: "platform", name: "Personalized Digital Solutions", body: "Purpose-built digital experiences shaped around each organization’s needs." },
  { icon: "location", name: "GIS", body: "Geographic information systems that make place-based data easier to use." },
  { icon: "platform", name: "Digital Consultancy", body: "Clear technical guidance to shape, plan, and improve digital products." },
];

export function Sectors() {
  return (
    <section className="section section-sectors" id="sectors" aria-labelledby="sectors-title">
      <div className="wrap sectors-layout">
        <div className="sectors-intro">
          <p className="section-kicker">05 / SECTORS &amp; DOMAINS</p>
          <h2 id="sectors-title">
            Technology for
            <br />
            <span>what’s next.</span>
          </h2>
          <p>
            From intelligent healthcare to location-aware platforms, we build thoughtful digital
            solutions for the systems people rely on every day.
          </p>
        </div>
        <div className="sector-list">
          {SECTORS.map((sector) => (
            <article key={sector.name} className="sector-point">
              <Icon name={sector.icon} />
              <div>
                <h3>{sector.name}</h3>
                <p className="sector-description">{sector.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
