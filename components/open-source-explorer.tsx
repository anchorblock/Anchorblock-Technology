"use client";

import { useState } from "react";
import { OPEN_SOURCE_REPOS } from "@/lib/open-source-repos";

const CATEGORIES = ["All", "Blockchain & Web3", "AI & Agents", "Quant & Trading", "Data & Analytics", "Developer Tools", "Apps & Web"];
const CATEGORY_STYLES: Record<string, string> = {
  "Blockchain & Web3": "text-amber-700 bg-amber-50 border-amber-200",
  "AI & Agents": "text-violet-700 bg-violet-50 border-violet-200",
  "Quant & Trading": "text-emerald-700 bg-emerald-50 border-emerald-200",
  "Data & Analytics": "text-sky-700 bg-sky-50 border-sky-200",
  "Developer Tools": "text-indigo-700 bg-indigo-50 border-indigo-200",
  "Apps & Web": "text-coral-700 bg-coral-50 border-coral-200",
};
const PAGE_SIZE = 12;

/** Searchable, filterable directory of the organization's public repositories. */
export function OpenSourceExplorer() {
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");
  const [limit, setLimit] = useState(PAGE_SIZE);

  const needle = query.trim().toLowerCase();
  const filtered = OPEN_SOURCE_REPOS.filter(
    (repo) =>
      (category === "All" || repo.category === category) &&
      (!needle || `${repo.name} ${repo.category} ${repo.desc}`.toLowerCase().includes(needle)),
  );
  const visible = filtered.slice(0, limit);

  return (
    <div className="mt-10 sm:mt-14">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-5">
        <div>
          <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-subtle">Repository explorer</span>
          <p id="opensource-result-count" className="mt-1 text-sm font-semibold text-ink" aria-live="polite">
            Showing {visible.length} of {filtered.length} repositories
          </p>
        </div>
        <label className="relative block w-full lg:w-80">
          <span className="sr-only">Search open-source repositories</span>
          <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-ink-subtle" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
            <circle cx="10.8" cy="10.8" r="6.8" />
            <path d="m16 16 4.2 4.2" strokeLinecap="round" />
          </svg>
          <input
            id="opensource-search"
            type="search"
            placeholder="Search repositories or topics"
            className="w-full rounded-xl border border-stone-200 bg-white/85 py-3 pl-10 pr-4 text-sm text-ink placeholder:text-ink-subtle focus:border-violet-400 focus:outline-hidden focus:ring-2 focus:ring-violet-500/10"
            value={query}
            onChange={(event) => {
              setQuery(event.target.value);
              setLimit(PAGE_SIZE);
            }}
          />
        </label>
      </div>
      <div id="opensource-filters" className="flex gap-2 overflow-x-auto pb-3 mb-4" aria-label="Filter repositories by category">
        {CATEGORIES.map((name) => (
          <button
            key={name}
            type="button"
            className="repo-filter shrink-0 rounded-full px-3.5 py-2 font-mono text-[10px] font-semibold"
            aria-pressed={name === category}
            onClick={() => {
              setCategory(name);
              setLimit(PAGE_SIZE);
            }}
          >
            {name}{" "}
            <span className="opacity-70">
              {name === "All" ? OPEN_SOURCE_REPOS.length : OPEN_SOURCE_REPOS.filter((repo) => repo.category === name).length}
            </span>
          </button>
        ))}
      </div>
      <div id="opensource-grid" className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4" aria-live="polite">
        {visible.map((repo, index) => (
          <a
            key={repo.name}
            className="repo-card studio-card group flex min-h-[14rem] flex-col rounded-2xl p-5 sm:p-6"
            style={{ "--repo-index": index } as React.CSSProperties}
            href={`https://github.com/anchorblock/${encodeURIComponent(repo.name)}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${repo.name} on GitHub`}
          >
            <div className="flex items-start justify-between gap-3 mb-5">
              <span className={`rounded-full border px-2.5 py-1 text-[9px] font-mono font-semibold ${CATEGORY_STYLES[repo.category] ?? "text-ink-muted bg-porcelain-alt border-stone-200"}`}>
                {repo.category}
              </span>
              <span className="font-mono text-[9px] text-ink-subtle">
                {String(OPEN_SOURCE_REPOS.indexOf(repo) + 1).padStart(2, "0")} / 52
              </span>
            </div>
            <h4 className="wrap-break-word text-lg font-bold tracking-tight text-ink group-hover:text-violet-700 transition-colors">{repo.name}</h4>
            <p className="repo-card-description mt-2 flex-1 text-xs sm:text-sm leading-relaxed text-ink-muted sm:leading-5">{repo.desc}</p>
            <div className="mt-5 flex items-center justify-between border-t border-stone-200/80 pt-3 font-mono text-[10px] text-ink-subtle">
              <span>anchorblock/{repo.name}</span>
              <svg className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
                <path d="M7 17 17 7M8 7h9v9" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </a>
        ))}
      </div>
      {filtered.length === 0 && (
        <p id="opensource-empty" className="py-12 text-center text-sm text-ink-muted">
          No repositories match that search. Try another name or category.
        </p>
      )}
      <div className="flex flex-col items-center gap-3 pt-7">
        {visible.length < filtered.length && (
          <button
            id="opensource-more"
            type="button"
            className="rounded-full border border-stone-200 bg-white px-6 py-3 font-mono text-xs font-semibold text-ink hover:border-violet-300 hover:text-violet-700 hover:-translate-y-0.5 transition-all"
            onClick={() => setLimit(limit + PAGE_SIZE)}
          >
            Show {Math.min(PAGE_SIZE, filtered.length - visible.length)} more repositories
          </button>
        )}
        <a href="https://github.com/anchorblock" target="_blank" rel="noopener noreferrer" className="text-xs font-mono text-ink-subtle hover:text-violet-700 transition-colors">
          Browse all public repositories on GitHub →
        </a>
      </div>
    </div>
  );
}
