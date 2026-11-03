import { getPublishedContent, type ContentItem } from "@/lib/content";
import { safeUrl } from "@/lib/safe-url";

function slug(heading: string) {
  return heading
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

/** Sections and cards published from the admin workspace, grouped by section name. */
export async function CustomSections() {
  const result = await getPublishedContent();
  const groups = new Map<string, ContentItem[]>();
  if (result.status === "ok") {
    for (const row of result.data) {
      const label = row.section_title.trim() || "Studio updates";
      groups.set(label, [...(groups.get(label) ?? []), row]);
    }
  }

  return (
    <div id="site-custom-sections">
      {[...groups].map(([heading, items]) => (
        <section
          key={heading}
          id={`studio-${slug(heading)}`}
          className="section section-cms"
          aria-labelledby={`studio-${slug(heading)}-title`}
        >
          <div className="wrap">
            <div className="section-heading section-heading-wide">
              <div>
                <h2 id={`studio-${slug(heading)}-title`}>{heading}</h2>
              </div>
            </div>
            <div className="cms-grid">
              {items.map((item) => {
                const imageUrl = safeUrl(item.image_url, true);
                const linkUrl = safeUrl(item.link_url);
                return (
                  <article key={item.id} className="cms-card">
                    {imageUrl && (
                      // Admin-provided images can come from any host, so they bypass next/image.
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={imageUrl} alt={item.title} loading="lazy" />
                    )}
                    <div className="cms-card-body">
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                      {linkUrl && item.link_label && (
                        <a className="text-link" href={linkUrl} target="_blank" rel="noopener noreferrer">
                          {item.link_label} <span aria-hidden="true">↗</span>
                        </a>
                      )}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
