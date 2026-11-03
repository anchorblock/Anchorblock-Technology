import { CopyButton } from "@/components/copy-button";

export function StudioLocation() {
  return (
    <section id="studio" className="py-24 sm:py-32 border-b border-stone-200/70 bg-porcelain">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center reveal">
          {/* Studio Address & Credentials (Left) */}
          <div className="lg:col-span-6 [&>*+*]:mt-6">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-coral-600 font-semibold">
              <span className="w-2 h-2 rounded-full bg-coral-500" />
              <span>06 / STUDIO LOCATION</span>
            </div>
            <h2 className="display-title text-3xl sm:text-5xl lg:text-6xl font-bold text-ink">
              One studio. <br />
              <em>Wide reach.</em>
            </h2>
            <p className="text-ink-muted font-body text-base sm:text-lg leading-relaxed sm:leading-7">
              Our engineering studio is based in Mirpur DOHS, Dhaka. From here, we work with clients
              and deploy systems in Bangladesh, Pakistan, and the United States — in live
              production, not just in workshops.
            </p>
            {/* Studio Card */}
            <div className="studio-card p-7 sm:p-8 rounded-3xl space-y-5">
              <div>
                <span className="font-mono text-xs text-ink-subtle block mb-1.5">OFFICE</span>
                <address className="not-italic font-semibold text-ink text-base sm:text-lg leading-relaxed sm:leading-7">
                  House 432, Road 6<br /> Mirpur DOHS, Dhaka-1216
                  <br /> Bangladesh
                </address>
              </div>
              <div className="pt-4 border-t border-stone-200/80 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
                <span className="text-ink-muted">Registration C-182691</span>
                <CopyButton
                  text="+8801757049684"
                  message="Phone number copied!"
                  className="text-coral-600 hover:text-coral-700 font-semibold flex items-center gap-1.5 bg-coral-50 px-3 py-1.5 rounded-full border border-coral-200 transition-colors"
                >
                  <span>+880 1757 049 684</span>
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                </CopyButton>
              </div>
              <div className="pt-1">
                <a
                  href="https://www.openstreetmap.org/?mlat=23.83719&mlon=90.36898#map=18/23.83719/90.36898"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-indigo-600 hover:text-indigo-700 font-semibold"
                >
                  <span>Open in OpenStreetMap</span>
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          {/* Interactive OpenStreetMap with animated office locator */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="studio-card w-full max-w-[560px] rounded-[2rem] p-3 sm:p-4 relative overflow-hidden bg-white">
              <div className="flex flex-wrap items-center justify-between gap-2 px-3 py-3 text-[10px] sm:text-xs font-mono text-ink-subtle">
                <span className="font-semibold tracking-wide">MIRPUR DOHS, DHAKA</span>
                <span className="text-emerald-600 font-semibold">23.83719° N / 90.36898° E</span>
              </div>
              <div className="office-map-frame">
                <iframe
                  title="OpenStreetMap centered on Anchorblock Technology's Mirpur DOHS office"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=90.36498%2C23.83419%2C90.37298%2C23.84019&layer=mapnik&marker=23.83719%2C90.36898"
                />
                <span className="office-map-marker" aria-hidden="true" />
              </div>
              <div className="pt-3 px-3 flex items-center justify-between gap-3 text-[10px] sm:text-xs font-mono text-ink-muted">
                <span>Open map to pan & zoom</span>
                <span className="font-semibold text-ink">MIRPUR DOHS • ROAD 6</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
