"use client";

import { useState } from "react";
import { OPEN_SOURCE_REPOS } from "@/lib/open-source-repos";

const CATEGORIES = ["All", "Blockchain & Web3", "AI & Agents", "Quant & Trading", "Data & Analytics", "Developer Tools", "Apps & Web"];
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
    <div className="repo-explorer">
      <div className="repo-toolbar">
        <p aria-live="polite">
          Showing {visible.length} of {filtered.length} repositories
        </p>
        <label>
          <span className="visually-hidden">Search open-source repositories</span>
          <input
            type="search"
            placeholder="Search repositories or topics"
            value={query}
            onChange={(event) => {
              setQuery(event.target.value);
              setLimit(PAGE_SIZE);
            }}
          />
        </label>
      </div>
      <div className="repo-filters" aria-label="Filter repositories by category">
        {CATEGORIES.map((name) => (
          <button
            key={name}
            type="button"
            aria-pressed={name === category}
            onClick={() => {
              setCategory(name);
              setLimit(PAGE_SIZE);
            }}
          >
            {name}{" "}
            <span>
              {name === "All" ? OPEN_SOURCE_REPOS.length : OPEN_SOURCE_REPOS.filter((repo) => repo.category === name).length}
            </span>
          </button>
        ))}
      </div>
      <div className="repo-grid" aria-live="polite">
        {visible.map((repo) => (
          <a
            key={repo.name}
            className="repo-card"
            href={`https://github.com/anchorblock/${encodeURIComponent(repo.name)}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${repo.name} on GitHub`}
          >
            <span className="product-category-chip">{repo.category}</span>
            <h3>{repo.name}</h3>
            <p>{repo.desc}</p>
            <span className="repo-path">anchorblock/{repo.name} ↗</span>
          </a>
        ))}
      </div>
      {filtered.length === 0 && <p className="repo-empty">No repositories match that search. Try another name or category.</p>}
      {visible.length < filtered.length && (
        <button type="button" className="button repo-more" onClick={() => setLimit(limit + PAGE_SIZE)}>
          Show {Math.min(PAGE_SIZE, filtered.length - visible.length)} more repositories
        </button>
      )}
    </div>
  );
}
