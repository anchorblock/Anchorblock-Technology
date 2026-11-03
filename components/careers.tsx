import { JsonLd } from "@/components/json-ld";
import { getOpenCareerPosts, type CareerPost } from "@/lib/content";
import { site, siteUrl } from "@/lib/site";

const EMPLOYMENT_TYPES: Record<string, string> = {
  "Full-time": "FULL_TIME",
  "Part-time": "PART_TIME",
  Contract: "CONTRACTOR",
  Internship: "INTERN",
};

function formatDeadline(date: string) {
  return new Date(`${date}T00:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  });
}

/** schema.org JobPosting data so open roles can appear in search job listings. */
function jobPostings(roles: CareerPost[]) {
  return roles.map((role) => ({
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: role.title,
    description: role.description,
    datePosted: role.created_at.slice(0, 10),
    ...(role.closes_on && { validThrough: `${role.closes_on}T23:59:59+06:00` }),
    employmentType: EMPLOYMENT_TYPES[role.employment_type] ?? "OTHER",
    hiringOrganization: {
      "@type": "Organization",
      name: site.legalName,
      sameAs: siteUrl.href,
      logo: new URL(site.logo, siteUrl).href,
    },
    jobLocation: {
      "@type": "Place",
      address: { "@type": "PostalAddress", ...site.address },
    },
    directApply: false,
  }));
}

export async function Careers() {
  const result = await getOpenCareerPosts();
  const roles = result.status === "ok" ? result.data : [];
  const count =
    result.status === "ok"
      ? `${roles.length} ${roles.length === 1 ? "opening" : "openings"}`
      : result.status === "error"
        ? "Openings unavailable"
        : "No current openings";

  return (
    <section className="section section-careers" id="careers" aria-labelledby="careers-title">
      <div className="wrap">
        <div className="section-heading careers-heading">
          <div>
            <p className="section-kicker">07 / CAREERS</p>
            <h2 id="careers-title">
              Build useful things
              <br />
              <span>with us.</span>
            </h2>
            <p className="section-intro section-intro-wrap">
              We bring product thinking, software engineering, and production support into one team.
              Open roles appear here when we are hiring.
            </p>
          </div>
          <span id="career-count" className="career-count">
            {count}
          </span>
        </div>
        <div id="career-list" className="career-grid" aria-live="polite">
          {result.status === "error" ? (
            <p className="career-empty">Career listings are temporarily unavailable. Please check back soon.</p>
          ) : roles.length === 0 ? (
            <p id="career-empty" className="career-empty">
              No current openings. Please check back for future opportunities.
            </p>
          ) : (
            roles.map((role) => (
              <article key={role.id} className="career-card">
                <div className="career-meta">
                  <span className="product-category-chip">{role.employment_type}</span>
                  <span className="career-team">{role.team_name}</span>
                </div>
                <h3>{role.title}</h3>
                <p className="career-location">{role.location}</p>
                <p className="career-description">{role.description}</p>
                <div className="career-footer">
                  <span>{role.closes_on ? `Apply by ${formatDeadline(role.closes_on)}` : "Applications open"}</span>
                  <a
                    className="button button-primary"
                    href={`mailto:${encodeURI(role.apply_email)}?subject=${encodeURIComponent(`Application: ${role.title}`)}`}
                  >
                    Apply <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </article>
            ))
          )}
        </div>
      </div>
      {roles.length > 0 && <JsonLd data={jobPostings(roles)} />}
    </section>
  );
}
