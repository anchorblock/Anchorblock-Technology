"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ADMIN_OPEN_EVENT } from "@/lib/ui-events";

const NAV_LINKS = [
  { href: "#products", label: "Products" },
  { href: "#client-work", label: "Client work" },
  { href: "#capabilities", label: "Capabilities" },
  { href: "#studio", label: "Studio" },
  { href: "#careers", label: "Careers" },
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);

  // Escape closes the mobile menu and returns focus to its button; opening the admin panel closes it too.
  useEffect(() => {
    const close = () => setMenuOpen(false);
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape" || menuButton.current?.getAttribute("aria-expanded") !== "true") return;
      close();
      menuButton.current.focus();
    };
    document.addEventListener("keydown", onKeyDown);
    window.addEventListener(ADMIN_OPEN_EVENT, close);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      window.removeEventListener(ADMIN_OPEN_EVENT, close);
    };
  }, []);

  return (
    <header className="site-header">
      <div className="header-inner wrap">
        <a className="brand" href="#top" aria-label="Anchorblock Technology home">
          <Image
            className="brand-logo"
            src="/brand/anchorblock-logo-main.png"
            alt="Anchorblock Technology"
            width={1052}
            height={744}
            sizes="152px"
            loading="eager"
          />
        </a>
        <button
          ref={menuButton}
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="primary-nav"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="menu-toggle-label">Menu</span>
          <span className="menu-icon" aria-hidden="true">
            <i />
            <i />
          </span>
        </button>
        <nav
          className={`primary-nav${menuOpen ? " is-open" : ""}`}
          id="primary-nav"
          aria-label="Main navigation"
          onClick={(event) => {
            if ((event.target as HTMLElement).closest("a")) setMenuOpen(false);
          }}
        >
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
          <a className="nav-contact" href="#contact">
            Let’s talk <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
