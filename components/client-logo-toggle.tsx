"use client";

import Image from "next/image";
import { useState } from "react";

type Props = {
  detailId: string;
  label: string;
  glow: string;
  logo: { src: string; alt: string; width: number; height: number };
  detail: string;
  detailClassName: string;
};

/** Client logo button that reveals a one-line summary of the engagement below it. */
export function ClientLogoToggle({ detailId, label, glow, logo, detail, detailClassName }: Props) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="flex flex-wrap items-center gap-3">
        <button
          type="button"
          className="client-logo-toggle"
          style={{ "--client-glow": glow } as React.CSSProperties}
          data-client-logo-toggle=""
          aria-expanded={open}
          aria-controls={detailId}
          aria-label={label}
          onClick={() => setOpen(!open)}
        >
          <Image src={logo.src} alt={logo.alt} width={logo.width} height={logo.height} sizes="136px" />
        </button>
        <span className="text-xs font-mono text-ink-subtle">Tap logo to explore</span>
      </div>
      <div id={detailId} className={`client-logo-detail${open ? " is-open" : ""}`} aria-hidden={!open}>
        <span className={detailClassName}>{detail}</span>
      </div>
    </>
  );
}
