import { CapabilityMatrix } from "@/components/capability-matrix";

export function Capabilities() {
  return (
    <section id="capabilities" className="py-24 sm:py-32 border-b border-stone-200/70 bg-porcelain">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 reveal">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-emerald-600 font-semibold mb-3">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>04 / CAPABILITIES</span>
          </div>
          <h2 className="display-title text-3xl sm:text-5xl lg:text-6xl font-bold text-ink mb-4">
            From complex challenges <br />
            to <em>real solutions.</em>
          </h2>
          <p className="text-ink-muted font-body text-base sm:text-lg leading-relaxed sm:leading-7">
            Eight capabilities, one operating standard: understand the real load before designing
            for it. Click or hover any discipline to view technical details and schematics.
          </p>
        </div>
        {/* Split Layout: List on Left, Interactive Schematic Showcase on Right */}
        <CapabilityMatrix />
        {/* Agentic Flow: animated agent-building workflow */}
        <div
          id="agentic-flow"
          className="mt-16 sm:mt-20 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center reveal"
        >
          <div className="lg:col-span-4 [&>*+*]:mt-5">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-violet-600 font-semibold">
              <span className="w-2 h-2 rounded-full bg-violet-500 animate-pulse" />
              <span>AGENTIC FLOW</span>
            </div>
            <h3 className="display-title text-3xl sm:text-4xl font-bold text-ink">
              Agents that <em>build the flow.</em>
            </h3>
            <p className="text-sm sm:text-base font-body text-ink-muted leading-relaxed sm:leading-6">
              We shape agent workflows around clear tasks: plan the steps, assemble the right
              specialist agents, connect tools with boundaries, then verify the result.
            </p>
            <div className="space-y-2.5 pt-1 text-xs font-mono text-ink-muted">
              <div className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-lg bg-violet-50 text-violet-600 flex items-center justify-center font-semibold">
                  01
                </span>{" "}
                Define the goal and constraints
              </div>
              <div className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center font-semibold">
                  02
                </span>{" "}
                Assign work across agents and tools
              </div>
              <div className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center font-semibold">
                  03
                </span>{" "}
                Review outputs before delivery
              </div>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 pt-2 text-xs font-mono font-semibold text-violet-700 hover:text-violet-900 transition-colors"
            >
              Discuss an agent workflow <span aria-hidden="true">→</span>
            </a>
          </div>
          <div className="lg:col-span-8">
            <div className="agent-flow-board p-4 sm:p-6">
              <div className="agent-flow-content">
                <div className="flex items-center justify-between gap-3 pb-4 border-b border-stone-200/80 text-[10px] sm:text-xs font-mono">
                  <span className="font-semibold tracking-[0.12em] text-ink">
                    AGENT BUILDER / ORCHESTRATION PREVIEW
                  </span>
                  <span className="inline-flex items-center gap-2 text-emerald-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> FLOW
                    ACTIVE
                  </span>
                </div>
                <div className="flex justify-center pt-5">
                  <div className="rounded-xl border border-stone-200 bg-white/90 px-4 py-3 shadow-xs text-center">
                    <span className="block text-[9px] font-mono font-semibold tracking-[0.16em] text-ink-subtle">
                      TASK BRIEF
                    </span>{" "}
                    <span className="mt-1 block text-xs sm:text-sm font-semibold text-ink">
                      Prepare a monthly expense summary
                    </span>
                  </div>
                </div>
                <div className="flex justify-center py-4">
                  <div className="agent-flow-coordinator rounded-2xl border border-violet-200 bg-white px-5 py-3 text-center">
                    <span className="block text-[9px] font-mono font-semibold tracking-[0.16em] text-violet-600">
                      FLOW BUILDER
                    </span>{" "}
                    <span className="mt-1 block text-sm font-bold text-ink">
                      Plan · assign · coordinate
                    </span>
                  </div>
                </div>
                <div
                  className="agent-flow-connector relative h-12 sm:h-14 -mt-1 -mb-1"
                  aria-hidden="true"
                >
                  <svg
                    className="agent-flow-wire absolute inset-0 w-full h-full"
                    viewBox="0 0 600 70"
                    preserveAspectRatio="none"
                    fill="none"
                  >
                    <path d="M300 0 C300 26 100 26 100 68" stroke="#818CF8" strokeWidth="2" />
                    <path d="M300 0 V68" stroke="#8B5CF6" strokeWidth="2" />
                    <path d="M300 0 C300 26 500 26 500 68" stroke="#34D399" strokeWidth="2" />
                  </svg>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <article className="agent-flow-agent rounded-xl border border-indigo-100 bg-white/95 p-4">
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center font-mono text-[10px] font-bold">
                        01
                      </span>
                      <span className="text-[9px] font-mono uppercase tracking-wide text-indigo-600">
                        Research
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-ink">Gather context</h4>
                    <p className="mt-1 text-[10px] leading-relaxed text-ink-muted">
                      Finds relevant records and source data.
                    </p>
                  </article>
                  <article className="agent-flow-agent rounded-xl border border-violet-100 bg-white/95 p-4">
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="w-8 h-8 rounded-lg bg-violet-50 text-violet-600 flex items-center justify-center font-mono text-[10px] font-bold">
                        02
                      </span>
                      <span className="text-[9px] font-mono uppercase tracking-wide text-violet-600">
                        Build
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-ink">Create the summary</h4>
                    <p className="mt-1 text-[10px] leading-relaxed text-ink-muted">
                      Transforms approved inputs into a report.
                    </p>
                  </article>
                  <article className="agent-flow-agent rounded-xl border border-emerald-100 bg-white/95 p-4">
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center font-mono text-[10px] font-bold">
                        03
                      </span>
                      <span className="text-[9px] font-mono uppercase tracking-wide text-emerald-600">
                        Verify
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-ink">Check before delivery</h4>
                    <p className="mt-1 text-[10px] leading-relaxed text-ink-muted">
                      Validates the output for review.
                    </p>
                  </article>
                </div>
                <div className="mt-4 rounded-xl border border-stone-200 bg-white/90 p-3 sm:px-4">
                  <div className="flex items-center justify-between gap-3 text-[9px] sm:text-[10px] font-mono text-ink-muted">
                    <span>HUMAN REVIEW GATE</span>
                    <span className="font-semibold text-emerald-700">READY FOR APPROVAL</span>
                  </div>
                  <div className="mt-2 h-1.5 rounded-full bg-stone-100 overflow-hidden">
                    <div className="agent-flow-progress h-full w-full rounded-full bg-linear-to-r/srgb from-indigo-400 via-violet-500 to-emerald-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
