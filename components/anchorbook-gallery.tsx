"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const SCREENS = [
  { src: "/anchorbook1.png", width: 559, height: 877, alt: "AnchorBook account creation screen", caption: "Create account", thumb: "Sign up", label: "Show account creation screen" },
  { src: "/anchorbook2.png", width: 559, height: 877, alt: "AnchorBook sign-in screen", caption: "Secure sign in", thumb: "Sign in", label: "Show sign-in screen" },
  { src: "/anchorbook3.png", width: 1678, height: 816, alt: "AnchorBook financial dashboard with accounts, income, expenses, and reports", caption: "Financial dashboard", thumb: "Dashboard", label: "Show financial dashboard" },
  { src: "/anchorbook4.png", width: 1678, height: 816, alt: "AnchorBook organization subscription settings", caption: "Subscription settings", thumb: "Settings", label: "Show subscription settings" },
  { src: "/anchorbook5.png", width: 1678, height: 816, alt: "AnchorBook subscription plans and features", caption: "Plans and features", thumb: "Plans", label: "Show subscription plans" },
];
const INITIAL = 2;
const pad = (n: number) => String(n).padStart(2, "0");

/** AnchorBook screenshot viewer: thumbnails plus previous/next controls with a short cross-fade. */
export function AnchorBookGallery() {
  // `selected` drives the pressed thumbnail at once; `shown` swaps the large image after the fade-out.
  const [selected, setSelected] = useState(INITIAL);
  const [shown, setShown] = useState(INITIAL);
  const [changing, setChanging] = useState(false);
  const timer = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  const show = (index: number) => {
    const next = (index + SCREENS.length) % SCREENS.length;
    setSelected(next);
    setChanging(true);
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => {
      setShown(next);
      window.requestAnimationFrame(() => setChanging(false));
    }, 120);
  };

  const screen = SCREENS[shown];
  return (
    <div
      className="lg:col-span-7 rounded-2xl bg-linear-to-br/srgb from-slate-50 to-slate-100 border border-stone-200/80 p-3 sm:p-4 shadow-inner"
      data-anchorbook-gallery=""
    >
      <div className="anchorbook-preview-stage" aria-live="polite">
        <Image
          id="anchorbook-preview-image"
          src={screen.src}
          alt={screen.alt}
          width={1678}
          height={816}
          sizes="(min-width: 1280px) 680px, (min-width: 1024px) 55vw, 100vw"
          className={`anchorbook-preview-image${changing ? " is-changing" : ""}`}
        />
        <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/90 border border-white text-[10px] font-mono font-semibold tracking-wide text-ink-muted shadow-xs">
          ANCHORBOOK PREVIEW
        </span>
        <span
          id="anchorbook-preview-count"
          className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-ink/85 text-white text-[10px] font-mono tracking-wide"
        >
          {pad(shown + 1)} / {pad(SCREENS.length)}
        </span>
      </div>
      <div className="flex items-center justify-between gap-3 py-3">
        <p
          id="anchorbook-preview-caption"
          className="min-w-0 text-xs sm:text-sm font-semibold text-ink truncate"
          aria-live="polite"
        >
          {screen.caption}
        </p>
        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            id="anchorbook-preview-prev"
            aria-label="Previous AnchorBook screen"
            className="anchorbook-gallery-control w-8 h-8 rounded-full bg-white border border-stone-200 text-ink flex items-center justify-center shadow-xs"
            onClick={() => show(selected - 1)}
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="m15 18-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            type="button"
            id="anchorbook-preview-next"
            aria-label="Next AnchorBook screen"
            className="anchorbook-gallery-control w-8 h-8 rounded-full bg-white border border-stone-200 text-ink flex items-center justify-center shadow-xs"
            onClick={() => show(selected + 1)}
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="m9 18 6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
      <div className="grid grid-cols-5 gap-1.5 sm:gap-2" role="group" aria-label="Choose an AnchorBook screenshot">
        {SCREENS.map((item, index) => (
          <button
            key={item.src}
            type="button"
            className="anchorbook-thumb"
            aria-pressed={index === selected}
            aria-label={item.label}
            onClick={() => show(index)}
          >
            <Image src={item.src} alt="" width={item.width} height={item.height} sizes="128px" />
            <span className="text-[9px] sm:text-[10px] font-mono leading-tight text-ink-muted">
              {item.thumb}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
