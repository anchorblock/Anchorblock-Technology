import { OpenSourceExplorer } from "@/components/open-source-explorer";

/** Open source repository showcase. Hidden for now: it is not rendered anywhere (see SelectedWork). */
export function OpenSource() {
  return (
    <section
      id="opensource"
      className="mt-16 sm:mt-24 py-12 sm:py-16 border-y border-stone-200/80 reveal"
      aria-labelledby="opensource-title"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-violet-600 font-semibold mb-3">
            <span className="w-2 h-2 rounded-full bg-violet-500" />
            <span>OPEN SOURCE / ANCHORBLOCK ORGANIZATION</span>
          </div>
          <h3
            id="opensource-title"
            className="display-title text-3xl sm:text-5xl lg:text-6xl font-bold text-ink mb-4"
          >
            Open code. <em>Shared momentum.</em>
          </h3>
          <p className="max-w-2xl text-ink-muted font-body text-base sm:text-lg leading-relaxed sm:leading-7">
            Explore public repositories across AI, blockchain, quantitative finance, developer
            tools, data systems, and digital products. Follow the work, learn from it, or build on
            it.
          </p>
          <div className="flex flex-wrap gap-6 sm:gap-9 mt-8">
            <div>
              <span className="block text-3xl sm:text-4xl font-bold tracking-tight text-ink">
                52
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-subtle">
                Public repositories
              </span>
            </div>
            <div>
              <span className="block text-3xl sm:text-4xl font-bold tracking-tight text-ink">
                06
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-subtle">
                Technology themes
              </span>
            </div>
            <a
              href="https://github.com/anchorblock"
              target="_blank"
              rel="noopener noreferrer"
              className="group self-end inline-flex items-center gap-2 text-xs font-mono font-semibold text-ink hover:text-violet-700 transition-colors"
            >
              Explore on GitHub{" "}
              <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">
                →
              </span>
            </a>
          </div>
        </div>
        <div className="lg:col-span-5">
          <div
            className="repo-constellation"
            role="img"
            aria-label="Animated constellation connecting Anchorblock repositories across AI, blockchain, quantitative finance, and developer tools"
          >
            <div className="absolute left-5 top-5 z-10 font-mono text-[9px] tracking-[0.16em] text-slate-400">
              ANCHORBLOCK / OPEN NETWORK
            </div>
            <div className="repo-orbit repo-orbit--one">
              <span className="repo-orbit-node" />
              <span className="repo-orbit-node" />
              <span className="repo-orbit-node" />
              <span className="repo-orbit-node" />
            </div>
            <div className="repo-orbit repo-orbit--two" />
            <div className="repo-constellation-hub">
              <strong>AB</strong>
              <span>OPEN SOURCE</span>
            </div>
            <span className="repo-constellation-label repo-constellation-label--ai">
              AI / AGENTS
            </span>{" "}
            <span className="repo-constellation-label repo-constellation-label--chain">
              BLOCKCHAIN
            </span>{" "}
            <span className="repo-constellation-label repo-constellation-label--quant">
              QUANT FINANCE
            </span>{" "}
            <span className="repo-constellation-label repo-constellation-label--tools">
              DEV TOOLS
            </span>
            <div className="absolute bottom-4 right-5 z-10 flex items-center gap-2 font-mono text-[9px] text-slate-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> PUBLIC
              REPOSITORIES
            </div>
          </div>
        </div>
      </div>
      <OpenSourceExplorer />
    </section>
  );
}
