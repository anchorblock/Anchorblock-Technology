import { OpenSourceExplorer } from "@/components/open-source-explorer";
import { OPEN_SOURCE_REPOS } from "@/lib/open-source-repos";
import { site } from "@/lib/site";

/** Open source repository showcase. Hidden for now: it is not rendered anywhere (see app/page.tsx). */
export function OpenSource() {
  return (
    <section className="section section-opensource" id="opensource" aria-labelledby="opensource-title">
      <div className="wrap">
        <div className="section-heading section-heading-wide">
          <div>
            <p className="section-kicker">OPEN SOURCE / ANCHORBLOCK ORGANIZATION</p>
            <h2 id="opensource-title">
              Open code.
              <br />
              <span>Shared momentum.</span>
            </h2>
            <p className="section-intro section-intro-wrap">
              Explore public repositories across AI, blockchain, quantitative finance, developer tools,
              data systems, and digital products. Follow the work, learn from it, or build on it.
            </p>
          </div>
        </div>
        <div className="opensource-facts">
          <div>
            <span className="fact-value">{OPEN_SOURCE_REPOS.length}</span>
            <span className="fact-label">Public repositories</span>
          </div>
          <div>
            <span className="fact-value">06</span>
            <span className="fact-label">Technology themes</span>
          </div>
          <a className="text-link" href={site.social.github} target="_blank" rel="noopener noreferrer">
            Explore on GitHub <span aria-hidden="true">↗</span>
          </a>
        </div>
        <OpenSourceExplorer />
      </div>
    </section>
  );
}
