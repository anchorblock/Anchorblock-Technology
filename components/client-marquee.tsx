export function ClientMarquee() {
  return (
    <section className="py-10 border-b border-stone-200/80 bg-white/75 backdrop-blur-md overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4 flex items-center justify-between">
        <p className="font-mono text-[11px] text-ink-subtle uppercase tracking-widest font-semibold">
          Products & production partnerships
        </p>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-xs font-mono text-ink-muted">In active production</span>
        </div>
      </div>
      <div className="marquee-wrap overflow-hidden py-3">
        <div className="marquee-track flex items-center gap-14 text-xl sm:text-2xl font-semibold text-ink-muted/80">
          <span className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-coral-500" />
            <strong className="text-ink font-bold">bKash</strong> Limited{" "}
            <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-stone-100 text-ink-muted font-normal ml-1">
              Fintech Automation
            </span>
          </span>
          <span className="text-stone-300">/</span>
          <span className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <strong className="text-ink font-bold">Trukker</strong>
            <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-stone-100 text-ink-muted font-normal ml-1">
              Tracking Support
            </span>
          </span>
          <span className="text-stone-300">/</span>
          <span className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-indigo-500" />
            <strong className="text-ink font-bold">Omnizen AI</strong>
            <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-stone-100 text-ink-muted font-normal ml-1">
              Model Gateway
            </span>
          </span>
          <span className="text-stone-300">/</span>
          <span className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-coral-500" />
            <strong className="text-ink font-bold">bKash</strong> Limited{" "}
            <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-stone-100 text-ink-muted font-normal ml-1">
              Fintech Automation
            </span>
          </span>
          <span className="text-stone-300">/</span>
          <span className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <strong className="text-ink font-bold">Trukker</strong>
            <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-stone-100 text-ink-muted font-normal ml-1">
              Tracking Support
            </span>
          </span>
          <span className="text-stone-300">/</span>
          <span className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-indigo-500" />
            <strong className="text-ink font-bold">Omnizen AI</strong>
            <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-stone-100 text-ink-muted font-normal ml-1">
              Model Gateway
            </span>
          </span>
        </div>
      </div>
    </section>
  );
}
