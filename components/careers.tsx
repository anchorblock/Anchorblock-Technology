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
    <section id="careers" className="border-b border-stone-200/70 bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
          <div className="max-w-3xl">
            <div className="mb-3 inline-flex items-center gap-2 font-mono text-xs font-semibold text-emerald-700">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              <span>CAREERS / JOIN THE STUDIO</span>
            </div>
            <h2 className="display-title text-3xl font-bold text-ink sm:text-5xl">
              Build useful things <em>with us.</em>
            </h2>
            <p className="mt-4 max-w-2xl font-body text-base leading-relaxed text-ink-muted">
              We bring product thinking, software engineering, and production support into one team.
              Open roles appear here when we are hiring.
            </p>
          </div>
          <span
            id="career-count"
            className="inline-flex w-fit items-center rounded-full border border-stone-200 bg-porcelain px-4 py-2 font-mono text-xs text-ink-muted"
          >
            {count}
          </span>
        </div>
        <div
          id="career-list"
          className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
          aria-live="polite"
        >
          {result.status === "error" ? (
            <p className="col-span-full rounded-2xl border border-stone-200 bg-white px-6 py-8 text-sm text-ink-muted">
              Career listings are temporarily unavailable. Please check back soon.
            </p>
          ) : roles.length === 0 ? (
            <p
              id="career-empty"
              className="col-span-full rounded-2xl border border-dashed border-stone-300 bg-porcelain/70 px-6 py-8 text-sm text-ink-muted"
            >
              No current openings. Please check back for future opportunities.
            </p>
          ) : (
            roles.map((role) => (
              <article key={role.id} className="career-card flex flex-col p-6 sm:p-7">
                <div className="mb-5 flex flex-wrap gap-2">
                  <span className="rounded-full bg-emerald-50 px-3 py-1 font-mono text-[10px] font-semibold text-emerald-800">
                    {role.employment_type}
                  </span>
                  <span className="rounded-full bg-porcelain px-3 py-1 font-mono text-[10px] text-ink-muted">
                    {role.team_name}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-ink">{role.title}</h3>
                <p className="mt-2 font-mono text-xs text-ink-muted">{role.location}</p>
                <p className="mt-5 flex-1 whitespace-pre-line text-sm leading-relaxed text-ink-muted">
                  {role.description}
                </p>
                <div className="mt-6 flex items-end justify-between gap-3 border-t border-stone-200 pt-4">
                  <span className="text-[10px] font-mono text-ink-subtle">
                    {role.closes_on ? `Apply by ${formatDeadline(role.closes_on)}` : "Applications open"}
                  </span>
                  <a
                    className="shrink-0 rounded-full bg-ink px-4 py-2.5 text-xs font-semibold text-white hover:bg-emerald-700 transition-colors"
                    href={`mailto:${encodeURI(role.apply_email)}?subject=${encodeURIComponent(`Application: ${role.title}`)}`}
                  >
                    Apply
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
