"use client";

import { useEffect } from "react";

const REVEAL_SELECTOR = [
  ".section-heading",
  ".principle-card",
  ".product-card",
  ".client-story",
  ".capability-card",
  ".agentic-flow",
  ".sector-point",
  ".studio-top",
  ".studio-details",
  ".cms-card",
  ".career-card",
  ".team-heading",
  ".team-list > div",
  ".contact-form",
].join(", ");

/** Fades blocks in as they scroll into view, unless the visitor prefers reduced motion. */
export function RevealObserver() {
  useEffect(() => {
    const items = document.querySelectorAll(REVEAL_SELECTOR);
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !items.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -5% 0px" },
    );
    document.documentElement.classList.add("motion-ready");
    items.forEach((item) => {
      item.classList.add("reveal-on-scroll");
      observer.observe(item);
    });
    return () => observer.disconnect();
  }, []);

  return null;
}
