export function Philosophy() {
  return (
    <section
      id="philosophy"
      className="philosophy-section relative z-10 overflow-hidden py-24 sm:py-32 bg-porcelain"
    >
      {/* Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Interactive Luminous Stats Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-24 sm:mb-32 reveal">
          {/* Stat 1: Years (Coral) */}
          <div className="group relative overflow-hidden rounded-3xl border border-white/80 bg-white/90 p-6 sm:p-7 shadow-xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white">
            <div className="absolute top-0 left-0 right-0 h-1 bg-coral-500 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
            <span className="mb-2 block font-mono text-[11px] font-semibold tracking-wider text-slate-400">
              01 / PRODUCTION
            </span>
            <div className="flex items-baseline gap-1 font-bold tracking-tight text-ink text-4xl sm:text-5xl">
              <span>04</span>
              <span className="font-serif italic text-3xl text-coral-500">+</span>
            </div>
            <p className="mt-2 text-sm font-bold text-ink">Years in Operation</p>
            <p className="mt-0.5 font-body text-xs text-ink-muted">
              Building in production since 2022.
            </p>
          </div>
          {/* Stat 2: Specialists (Indigo) */}
          <div className="group relative overflow-hidden rounded-3xl border border-white/80 bg-white/90 p-6 sm:p-7 shadow-xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white">
            <div className="absolute top-0 left-0 right-0 h-1 bg-indigo-500 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
            <span className="mb-2 block font-mono text-[11px] font-semibold tracking-wider text-slate-400">
              02 / CORE TEAM
            </span>
            <div className="flex items-baseline gap-1.5 font-bold tracking-tight text-ink text-4xl sm:text-5xl">
              <span>07</span>
              <span className="font-mono text-xs font-semibold uppercase text-indigo-600 tracking-normal">
                Specialists
              </span>
            </div>
            <p className="mt-2 text-sm font-bold text-ink">Engineering & Design</p>
            <p className="mt-0.5 font-body text-xs text-ink-muted">
              Close to schema, UX, and uptime.
            </p>
          </div>
          {/* Stat 3: Fleet (Emerald) */}
          <div className="group relative overflow-hidden rounded-3xl border border-white/80 bg-white/90 p-6 sm:p-7 shadow-xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white">
            <div className="absolute top-0 left-0 right-0 h-1 bg-emerald-500 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
            <span className="mb-2 block font-mono text-[11px] font-semibold tracking-wider text-slate-400">
              03 / CLIENT WORK
            </span>
            <div className="flex items-baseline gap-1 font-bold tracking-tight text-ink text-4xl sm:text-5xl">
              <span>02</span>
              <span className="font-mono text-xs font-semibold uppercase text-emerald-600 tracking-normal">
                Partners
              </span>
            </div>
            <p className="mt-2 text-sm font-bold text-ink">Production Partnerships</p>
            <p className="mt-0.5 font-body text-xs text-ink-muted">
              Fintech operations & fleet tracking.
            </p>
          </div>
          {/* Stat 4: Support (Marigold) */}
          <div className="group relative overflow-hidden rounded-3xl border border-white/80 bg-white/90 p-6 sm:p-7 shadow-xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white">
            <div className="absolute top-0 left-0 right-0 h-1 bg-marigold-500 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
            <span className="mb-2 block font-mono text-[11px] font-semibold tracking-wider text-slate-400">
              04 / RELIABILITY
            </span>
            <div className="flex items-baseline gap-2 font-bold tracking-tight text-ink text-4xl sm:text-5xl">
              <span>24/7</span>
              <span className="self-center h-2.5 w-2.5 rounded-full bg-emerald-500 ring-4 ring-emerald-500/20" />
            </div>
            <p className="mt-2 text-sm font-bold text-ink">Monitoring & Support</p>
            <p className="mt-0.5 font-body text-xs text-ink-muted">End-to-end, not office hours.</p>
          </div>
        </div>
        {/* Section Header */}
        <div className="max-w-3xl mb-16 reveal">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.08] backdrop-blur-xl border border-coral-400/40 text-xs font-mono font-semibold tracking-wider text-white shadow-lg mb-5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-coral-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-coral-400" />
            </span>
            <span className="text-stone-100">02 / PHILOSOPHY</span>
          </div>
          <h2 className="display-title text-3xl sm:text-5xl lg:text-6xl font-bold text-white mb-5">
            How we see the <em className="text-stone-300">future.</em>
          </h2>
          <p className="text-stone-300 font-body text-base sm:text-lg leading-relaxed sm:leading-7">
            Four convictions shape every system we ship. We believe in software that holds up under
            pressure, respects its operators, and delivers measurable value.
          </p>
        </div>
        {/* 4 Convictions Grid (Obsidian Glass Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 reveal">
          {/* Principle 1 */}
          <div className="glass-card-dark p-8 sm:p-10 rounded-3xl group">
            <div className="flex items-center justify-between mb-6">
              <span className="font-mono text-xs px-3 py-1 rounded-full bg-coral-500/15 text-coral-400 border border-coral-500/30 font-semibold">
                01
              </span>
              <span className="text-xs font-mono text-stone-400 tracking-widest">PURPOSE</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-coral-400 transition-colors">
              Technology should solve real problems.
            </h3>
            <p className="text-stone-300/90 font-body text-sm sm:text-base leading-relaxed sm:leading-6">
              Not demo problems. The kind that keep a team at their desks after hours, with real
              money, real people, and real consequences on the other side.
            </p>
          </div>
          {/* Principle 2 */}
          <div className="glass-card-dark p-8 sm:p-10 rounded-3xl group">
            <div className="flex items-center justify-between mb-6">
              <span className="font-mono text-xs px-3 py-1 rounded-full bg-indigo-500/15 text-indigo-400 border border-indigo-500/30 font-semibold">
                02
              </span>
              <span className="text-xs font-mono text-stone-400 tracking-widest">MEASUREMENT</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors">
              Innovation must create measurable value.
            </h3>
            <p className="text-stone-300/90 font-body text-sm sm:text-base leading-relaxed sm:leading-6">
              We measure our work in uptime, throughput, hours returned, and decisions made — not in
              architectural novelty.
            </p>
          </div>
          {/* Principle 3 */}
          <div className="glass-card-dark p-8 sm:p-10 rounded-3xl group">
            <div className="flex items-center justify-between mb-6">
              <span className="font-mono text-xs px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 font-semibold">
                03
              </span>
              <span className="text-xs font-mono text-stone-400 tracking-widest">HUMAN FACTOR</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
              Great products begin with understanding people.
            </h3>
            <p className="text-stone-300/90 font-body text-sm sm:text-base leading-relaxed sm:leading-6">
              The field worker, the support agent, the finance lead. If the interface fails them
              under stress, the underlying architecture does not matter.
            </p>
          </div>
          {/* Principle 4 */}
          <div className="glass-card-dark p-8 sm:p-10 rounded-3xl group">
            <div className="flex items-center justify-between mb-6">
              <span className="font-mono text-xs px-3 py-1 rounded-full bg-marigold-500/15 text-marigold-400 border border-marigold-500/30 font-semibold">
                04
              </span>
              <span className="text-xs font-mono text-stone-400 tracking-widest">LIFECYCLE</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-marigold-400 transition-colors">
              The best systems are built to be lived with.
            </h3>
            <p className="text-stone-300/90 font-body text-sm sm:text-base leading-relaxed sm:leading-6">
              Instrumented, documented, and actively supported long after launch. Software is an
              ongoing operational relationship, not an unmonitored handover.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
