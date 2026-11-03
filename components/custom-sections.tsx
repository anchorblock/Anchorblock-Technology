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
        <section key={heading} id={`studio-${slug(heading)}`} className="cms-section">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="display-title mb-8 text-3xl font-bold text-ink sm:text-5xl">{heading}</h2>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {items.map((item) => {
                const imageUrl = safeUrl(item.image_url, true);
                const linkUrl = safeUrl(item.link_url);
                return (
                  <article key={item.id} className="cms-card overflow-hidden">
                    {imageUrl && (
                      // Admin-provided images can come from any host, so they bypass next/image.
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={imageUrl} alt={item.title} loading="lazy" className="h-52 w-full object-cover" />
                    )}
                    <div className="p-6 sm:p-7">
                      <h3 className="mb-3 text-xl font-bold tracking-tight text-ink">{item.title}</h3>
                      <p className="whitespace-pre-line text-sm leading-relaxed text-ink-muted">
                        {item.description}
                      </p>
                      {linkUrl && item.link_label && (
                        <a
                          className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-indigo-700 hover:text-indigo-900"
                          href={linkUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {item.link_label}
                          <span>↗</span>
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
