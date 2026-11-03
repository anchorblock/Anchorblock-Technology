export function Team() {
  return (
    <section id="team" className="py-24 sm:py-32 border-b border-stone-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start reveal">
          <div className="lg:col-span-5 [&>*+*]:mt-5">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-indigo-600 font-semibold">
              <span className="w-2 h-2 rounded-full bg-indigo-500" />
              <span>06 / TEAM</span>
            </div>
            <h2 className="display-title text-3xl sm:text-5xl lg:text-6xl font-bold text-ink">
              Seven people. <br />
              <em>One direction.</em>
            </h2>
            <p className="text-ink-muted font-body text-base sm:text-lg leading-relaxed sm:leading-7">
              Engineering, data, and design in the same conversation. We stay close to what we build
              — from schema and interface to the production alert that arrives at 3 a.m.
            </p>
            <div className="pt-3">
              <ul className="space-y-3.5 text-xs font-mono text-ink-muted">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-coral-500" /> Platform Engineering &
                  Microservices
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-indigo-500" /> Time-Series Data &
                  Telemetry Infrastructure
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" /> Product Architecture &
                  Field Systems UX
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-marigold-500" /> Production Discovery &
                  24/7 Operations
                </li>
              </ul>
            </div>
          </div>
          {/* Team Directory */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <article className="studio-card sm:col-span-2 p-6 sm:p-7 rounded-3xl relative overflow-hidden">
                <div className="absolute -right-8 -top-12 w-40 h-40 rounded-full bg-coral-100/70 blur-3xl pointer-events-none" />
                <div className="relative flex flex-col sm:flex-row sm:items-center justify-between gap-5">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-coral-50 border border-coral-200 flex items-center justify-center font-mono text-sm font-bold text-coral-600 shadow-xs shrink-0">
                      AF
                    </div>
                    <div>
                      <p className="text-[10px] font-mono uppercase tracking-[0.16em] text-coral-600 font-semibold mb-1">
                        Leadership
                      </p>
                      <h3 className="text-lg sm:text-xl font-bold text-ink">Abul Kalam Faruk</h3>
                      <p className="text-xs font-mono text-ink-muted mt-0.5">Managing Director</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 text-xs font-mono">
                    <a
                      href="mailto:faruk@anchorblock.vc"
                      className="px-3 py-2 rounded-full bg-white/90 border border-stone-200 text-ink-muted hover:text-coral-600 transition-colors"
                    >
                      faruk@anchorblock.vc
                    </a>
                    <a
                      href="tel:+8801747810786"
                      className="px-3 py-2 rounded-full bg-white/90 border border-stone-200 text-ink-muted hover:text-coral-600 transition-colors"
                    >
                      01747810786
                    </a>
                  </div>
                </div>
              </article>
              <article className="studio-card p-5 sm:p-6 rounded-3xl">
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center font-mono text-xs font-bold text-indigo-600 shrink-0">
                    HS
                  </div>
                  <div>
                    <h3 className="font-bold text-ink">Hasan Sarower</h3>
                    <p className="text-[11px] font-mono text-indigo-600 mt-0.5">
                      Head of Product & Business Intelligence
                    </p>
                  </div>
                </div>
                <div className="space-y-2 border-t border-stone-200/80 pt-3 text-[11px] font-mono">
                  <a
                    href="mailto:hasan@anchorblock.vc"
                    className="block text-ink-muted hover:text-indigo-600 transition-colors"
                  >
                    hasan@anchorblock.vc
                  </a>{" "}
                  <a
                    href="tel:+8801757049684"
                    className="block text-ink-muted hover:text-indigo-600 transition-colors"
                  >
                    +880 1757 049 684
                  </a>
                </div>
              </article>
              <article className="studio-card p-5 sm:p-6 rounded-3xl">
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-porcelain-alt border border-stone-200 flex items-center justify-center font-mono text-xs font-bold text-ink-muted shrink-0">
                    TN
                  </div>
                  <div>
                    <h3 className="font-bold text-ink">Md Tajul Islam Nowsad</h3>
                    <p className="text-[11px] font-mono text-ink-muted mt-0.5">
                      Administration Officer
                    </p>
                  </div>
                </div>
                <div className="space-y-2 border-t border-stone-200/80 pt-3 text-[11px] font-mono">
                  <a
                    href="mailto:admin@anchorblock.vc"
                    className="block text-ink-muted hover:text-ink transition-colors"
                  >
                    admin@anchorblock.vc
                  </a>{" "}
                  <a
                    href="tel:+8801779250850"
                    className="block text-ink-muted hover:text-ink transition-colors"
                  >
                    +880 1779 250 850
                  </a>
                </div>
              </article>
              <article className="studio-card p-5 sm:p-6 rounded-3xl">
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center font-mono text-xs font-bold text-amber-700 shrink-0">
                    SN
                  </div>
                  <div>
                    <h3 className="font-bold text-ink">Syed Mehedi Hasan Nirob</h3>
                    <p className="text-[11px] font-mono text-amber-700 mt-0.5">
                      Senior Full Stack Engineer
                    </p>
                  </div>
                </div>
                <div className="space-y-2 border-t border-stone-200/80 pt-3 text-[11px] font-mono">
                  <a
                    href="mailto:smh.nirob@gmail.com"
                    className="block text-ink-muted hover:text-amber-700 transition-colors"
                  >
                    smh.nirob@gmail.com
                  </a>{" "}
                  <a
                    href="tel:+8801738705880"
                    className="block text-ink-muted hover:text-amber-700 transition-colors"
                  >
                    +880 1738 705 880
                  </a>
                </div>
              </article>
              <article className="studio-card p-5 sm:p-6 rounded-3xl">
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center font-mono text-xs font-bold text-sky-700 shrink-0">
                    MK
                  </div>
                  <div>
                    <h3 className="font-bold text-ink">Mahim Khan</h3>
                    <p className="text-[11px] font-mono text-sky-700 mt-0.5">Full Stack Engineer</p>
                  </div>
                </div>
                <div className="space-y-2 border-t border-stone-200/80 pt-3 text-[11px] font-mono">
                  <a
                    href="mailto:mahim@anchorblock.vc"
                    className="block text-ink-muted hover:text-sky-700 transition-colors"
                  >
                    mahim@anchorblock.vc
                  </a>{" "}
                  <a
                    href="tel:+8801843886963"
                    className="block text-ink-muted hover:text-sky-700 transition-colors"
                  >
                    +880 1843 886 963
                  </a>
                </div>
              </article>
              <article className="studio-card p-5 sm:p-6 rounded-3xl">
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-violet-50 border border-violet-100 flex items-center justify-center font-mono text-xs font-bold text-violet-700 shrink-0">
                    AK
                  </div>
                  <div>
                    <h3 className="font-bold text-ink">Alif Khan</h3>
                    <p className="text-[11px] font-mono text-violet-700 mt-0.5">UI/UX Designer</p>
                  </div>
                </div>
                <div className="space-y-2 border-t border-stone-200/80 pt-3 text-[11px] font-mono">
                  <a
                    href="mailto:khanalif004700@gmail.com"
                    className="block wrap-break-word text-ink-muted hover:text-violet-700 transition-colors"
                  >
                    khanalif004700@gmail.com
                  </a>{" "}
                  <a
                    href="tel:+8801879949707"
                    className="block text-ink-muted hover:text-violet-700 transition-colors"
                  >
                    01879949707
                  </a>
                </div>
              </article>
              <article className="studio-card p-5 sm:p-6 rounded-3xl">
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center font-mono text-xs font-bold text-emerald-700 shrink-0">
                    SK
                  </div>
                  <div>
                    <h3 className="font-bold text-ink">Sifat Khan</h3>
                    <p className="text-[11px] font-mono text-emerald-700 mt-0.5">
                      Full Stack Engineer
                    </p>
                  </div>
                </div>
                <div className="space-y-2 border-t border-stone-200/80 pt-3 text-[11px] font-mono">
                  <a
                    href="mailto:sifat@anchorblock.vc"
                    className="block text-ink-muted hover:text-emerald-700 transition-colors"
                  >
                    sifat@anchorblock.vc
                  </a>{" "}
                  <a
                    href="tel:+8801633004146"
                    className="block text-ink-muted hover:text-emerald-700 transition-colors"
                  >
                    +880 1633 004 146
                  </a>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
