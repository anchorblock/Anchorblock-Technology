import Image from "next/image";

export function Industries() {
  return (
    <section
      id="industries"
      className="py-24 sm:py-32 border-b border-stone-200/70 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-12 sm:mb-16 reveal">
          <div className="lg:col-span-7 max-w-3xl">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-marigold-600 font-semibold mb-3">
              <span className="w-2 h-2 rounded-full bg-marigold-500" />
              <span>05 / SECTORS & DOMAINS</span>
            </div>
            <h2 className="display-title text-3xl sm:text-5xl lg:text-6xl font-bold text-ink mb-4">
              Technology for <em>what’s next.</em>
            </h2>
            <p className="text-ink-muted font-body text-base sm:text-lg leading-relaxed max-w-2xl sm:leading-7">
              From intelligent healthcare to location-aware platforms, we build thoughtful digital
              solutions for the systems people rely on every day.
            </p>
          </div>
          <div
            className="lg:col-span-5 flex items-center justify-center min-h-56 sm:min-h-72"
            aria-hidden="true"
          >
            <Image
              src="/anchorblock-sectors.png"
              alt=""
              width={1254}
              height={1254}
              className="w-full max-w-[25rem] sm:max-w-[29rem] h-auto object-contain drop-shadow-[0_22px_30px_rgba(20,24,33,0.10)]"
              sizes="(min-width: 640px) 464px, 400px"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 reveal">
          <article className="studio-card group p-6 sm:p-7 rounded-2xl">
            <div className="sector-art sector-art--healthcare">
              <Image
                src="/sector-healthcare.svg"
                alt="Medical cross and AI health signal illustration"
                width={320}
                height={180}
                unoptimized
              />
            </div>
            <div className="flex items-center justify-between mb-6">
              <span className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-mono text-xs font-bold">
                01
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-subtle">
                Healthcare
              </span>
            </div>
            <h3 className="text-lg font-bold text-ink mb-2">AI in Healthcare</h3>
            <p className="text-sm font-body text-ink-muted leading-relaxed">
              Human-centered healthcare tools, supported by responsible AI and useful clinical
              workflows.
            </p>
          </article>
          <article className="studio-card group p-6 sm:p-7 rounded-2xl">
            <div className="sector-art sector-art--finance">
              <Image
                src="/sector-fintech.svg"
                alt="Payment card and coin illustration"
                width={320}
                height={180}
                unoptimized
              />
            </div>
            <div className="flex items-center justify-between mb-6">
              <span className="w-9 h-9 rounded-xl bg-coral-50 text-coral-600 flex items-center justify-center font-mono text-xs font-bold">
                02
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-subtle">
                Finance
              </span>
            </div>
            <h3 className="text-lg font-bold text-ink mb-2">Fintech</h3>
            <p className="text-sm font-body text-ink-muted leading-relaxed">
              Secure financial products, payments, and digital services designed around trust.
            </p>
          </article>
          <article className="studio-card group p-6 sm:p-7 rounded-2xl">
            <div className="sector-art sector-art--mobility">
              <Image
                src="/sector-mobility.svg"
                alt="Car following a live location route illustration"
                width={320}
                height={180}
                unoptimized
              />
            </div>
            <div className="flex items-center justify-between mb-6">
              <span className="w-9 h-9 rounded-xl bg-azure-50 text-azure-600 flex items-center justify-center font-mono text-xs font-bold">
                03
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-subtle">
                Mobility
              </span>
            </div>
            <h3 className="text-lg font-bold text-ink mb-2">Vehicle Tracking</h3>
            <p className="text-sm font-body text-ink-muted leading-relaxed">
              Live fleet visibility and location intelligence for better movement and operations.
            </p>
          </article>
          <article className="studio-card group p-6 sm:p-7 rounded-2xl">
            <div className="sector-art sector-art--automation">
              <Image
                src="/sector-automation.svg"
                alt="Automated workflow and robotic arm illustration"
                width={320}
                height={180}
                unoptimized
              />
            </div>
            <div className="flex items-center justify-between mb-6">
              <span className="w-9 h-9 rounded-xl bg-marigold-50 text-marigold-600 flex items-center justify-center font-mono text-xs font-bold">
                04
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-subtle">
                Operations
              </span>
            </div>
            <h3 className="text-lg font-bold text-ink mb-2">Automation</h3>
            <p className="text-sm font-body text-ink-muted leading-relaxed">
              Connected workflows that reduce repetitive work and help teams move faster.
            </p>
          </article>
          <article className="studio-card group p-6 sm:p-7 rounded-2xl">
            <div className="sector-art sector-art--apps">
              <Image
                src="/sector-apps.svg"
                alt="Mobile app interface on a phone illustration"
                width={320}
                height={180}
                unoptimized
              />
            </div>
            <div className="flex items-center justify-between mb-6">
              <span className="w-9 h-9 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-mono text-xs font-bold">
                05
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-subtle">
                Products
              </span>
            </div>
            <h3 className="text-lg font-bold text-ink mb-2">App Development</h3>
            <p className="text-sm font-body text-ink-muted leading-relaxed">
              Intuitive mobile and web applications built for real people and real-world use.
            </p>
          </article>
          <article className="studio-card group p-6 sm:p-7 rounded-2xl">
            <div className="sector-art sector-art--aiml">
              <Image
                src="/sector-aiml.svg"
                alt="Machine learning nodes linked in a neural network illustration"
                width={320}
                height={180}
                unoptimized
              />
            </div>
            <div className="flex items-center justify-between mb-6">
              <span className="w-9 h-9 rounded-xl bg-iris-50 text-iris-600 flex items-center justify-center font-mono text-xs font-bold">
                06
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-subtle">
                Intelligence
              </span>
            </div>
            <h3 className="text-lg font-bold text-ink mb-2">AI & Machine Learning</h3>
            <p className="text-sm font-body text-ink-muted leading-relaxed">
              Practical machine learning that turns complex data into clearer decisions.
            </p>
          </article>
          <article className="studio-card group p-6 sm:p-7 rounded-2xl">
            <div className="sector-art sector-art--personalized">
              <Image
                src="/sector-personalized.svg"
                alt="Personalized digital profile and interface illustration"
                width={320}
                height={180}
                unoptimized
              />
            </div>
            <div className="flex items-center justify-between mb-6">
              <span className="w-9 h-9 rounded-xl bg-coral-50 text-coral-600 flex items-center justify-center font-mono text-xs font-bold">
                07
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-subtle">
                Digital
              </span>
            </div>
            <h3 className="text-lg font-bold text-ink mb-2">Personalized Digital Solutions</h3>
            <p className="text-sm font-body text-ink-muted leading-relaxed">
              Purpose-built digital experiences shaped around each organization’s needs.
            </p>
          </article>
          <article className="studio-card group p-6 sm:p-7 rounded-2xl">
            <div className="sector-art sector-art--gis">
              <Image
                src="/sector-gis.svg"
                alt="Map globe with a location marker illustration"
                width={320}
                height={180}
                unoptimized
              />
            </div>
            <div className="flex items-center justify-between mb-6">
              <span className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-mono text-xs font-bold">
                08
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-subtle">
                Geospatial
              </span>
            </div>
            <h3 className="text-lg font-bold text-ink mb-2">GIS</h3>
            <p className="text-sm font-body text-ink-muted leading-relaxed">
              Geographic information systems that make place-based data easier to use.
            </p>
          </article>
          <article className="studio-card group p-6 sm:p-7 rounded-2xl">
            <div className="sector-art sector-art--consultancy">
              <Image
                src="/sector-consultancy.svg"
                alt="Analytics chart and conversation bubble illustration"
                width={320}
                height={180}
                unoptimized
              />
            </div>
            <div className="flex items-center justify-between mb-6">
              <span className="w-9 h-9 rounded-xl bg-porcelain-alt text-ink-muted flex items-center justify-center font-mono text-xs font-bold">
                09
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-subtle">
                Advisory
              </span>
            </div>
            <h3 className="text-lg font-bold text-ink mb-2">Digital Consultancy</h3>
            <p className="text-sm font-body text-ink-muted leading-relaxed">
              Clear technical guidance to shape, plan, and improve digital products.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
