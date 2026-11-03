const FOCUS_AREAS = [
  "Platform Engineering & Microservices",
  "Time-Series Data & Telemetry Infrastructure",
  "Product Architecture & Field Systems UX",
  "Production Discovery & 24/7 Operations",
];

const MEMBERS = [
  { initials: "AF", name: "Abul Kalam Faruk", role: "Managing Director", email: "faruk@anchorblock.vc", phone: "+8801747810786", phoneLabel: "01747810786", lead: true },
  { initials: "HS", name: "Hasan Sarower", role: "Head of Product & Business Intelligence", email: "hasan@anchorblock.vc", phone: "+8801757049684", phoneLabel: "+880 1757 049 684" },
  { initials: "TN", name: "Md Tajul Islam Nowsad", role: "Administration Officer", email: "admin@anchorblock.vc", phone: "+8801779250850", phoneLabel: "+880 1779 250 850" },
  { initials: "SN", name: "Syed Mehedi Hasan Nirob", role: "Senior Full Stack Engineer", email: "smh.nirob@gmail.com", phone: "+8801738705880", phoneLabel: "+880 1738 705 880" },
  { initials: "MK", name: "Mahim Khan", role: "Full Stack Engineer", email: "mahim@anchorblock.vc", phone: "+8801843886963", phoneLabel: "+880 1843 886 963" },
  { initials: "AK", name: "Alif Khan", role: "UI/UX Designer", email: "khanalif004700@gmail.com", phone: "+8801879949707", phoneLabel: "01879949707" },
  { initials: "SK", name: "Sifat Khan", role: "Full Stack Engineer", email: "sifat@anchorblock.vc", phone: "+8801633004146", phoneLabel: "+880 1633 004 146" },
];

/** Team directory. Hidden for now: it is not rendered anywhere (see app/page.tsx). */
export function Team() {
  return (
    <section className="section section-team" id="team" aria-labelledby="team-title">
      <div className="wrap">
        <div className="team-heading">
          <div>
            <p className="section-kicker">TEAM</p>
            <h2 id="team-title">
              Seven people.
              <br />
              <span>One direction.</span>
            </h2>
          </div>
          <p>
            Engineering, data, and design in the same conversation. We stay close to what we build — from
            schema and interface to the production alert that arrives at 3 a.m.
          </p>
        </div>
        <ul className="team-focus">
          {FOCUS_AREAS.map((area) => (
            <li key={area}>{area}</li>
          ))}
        </ul>
        <div className="team-list">
          {MEMBERS.map((member) => (
            <div key={member.email} className={member.lead ? "team-lead" : undefined}>
              <span>{member.initials}</span>
              <p>
                <b>{member.name}</b>
                <small>{member.role}</small>
                <small>
                  <a href={`mailto:${member.email}`}>{member.email}</a> ·{" "}
                  <a href={`tel:${member.phone}`}>{member.phoneLabel}</a>
                </small>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
