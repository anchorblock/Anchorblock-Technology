"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AdminOpenButton } from "@/components/admin/admin-open-button";
import { ADMIN_OPEN_EVENT } from "@/lib/ui-events";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  // Opening the admin panel from anywhere also closes the mobile menu.
  useEffect(() => {
    window.addEventListener(ADMIN_OPEN_EVENT, closeMenu);
    return () => window.removeEventListener(ADMIN_OPEN_EVENT, closeMenu);
  }, []);

  return (
    <header className="sticky top-0 z-40 pt-3 px-4 sm:px-6 lg:px-8 transition-all duration-300">
      <div className="max-w-7xl mx-auto rounded-2xl backdrop-blur-xl bg-porcelain/85 border border-stone-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#top"
          className="group flex items-center gap-3.5 focus:outline-hidden"
          aria-label="Anchorblock Technology home"
        >
          <div className="w-10 h-10 rounded-xl bg-white border border-stone-200/90 flex items-center justify-center shadow-xs group-hover:border-ink transition-all overflow-hidden p-1">
            <Image
              src="/anchorblock_logo.jpeg"
              alt="Anchorblock Icon"
              width={200}
              height={200}
              className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
              sizes="40px"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-sm tracking-tight text-ink flex items-center gap-1.5">
              Anchorblock Technology{" "}
              <span className="hidden sm:inline-flex text-[10px] font-mono px-1.5 py-0.5 rounded-md bg-stone-200/60 text-ink-muted font-medium">
                LLC
              </span>
            </span>
            <span className="hidden sm:block text-[11px] text-ink-muted font-body">
              Information Technology & Services
            </span>
          </div>
        </a>
        {/* Primary Nav Links */}
        <nav className="hidden xl:flex items-center gap-1 text-xs font-medium text-ink-muted">
          <a
            href="#philosophy"
            className="px-3.5 py-2 rounded-full hover:bg-stone-200/50 hover:text-ink transition-all"
          >
            Who we are
          </a>
          <a
            href="#work"
            className="px-3.5 py-2 rounded-full hover:bg-stone-200/50 hover:text-ink transition-all"
          >
            Products
          </a>
          <a
            href="#capabilities"
            className="px-3.5 py-2 rounded-full hover:bg-stone-200/50 hover:text-ink transition-all"
          >
            Capabilities
          </a>
          <a
            href="#industries"
            className="px-3.5 py-2 rounded-full hover:bg-stone-200/50 hover:text-ink transition-all"
          >
            Industries
          </a>
          <a
            href="#studio"
            className="px-3.5 py-2 rounded-full hover:bg-stone-200/50 hover:text-ink transition-all"
          >
            Location
          </a>
          <a
            href="#team"
            className="px-3.5 py-2 rounded-full hover:bg-stone-200/50 hover:text-ink transition-all"
          >
            Team
          </a>
          <a
            href="#careers"
            className="px-3.5 py-2 rounded-full hover:bg-stone-200/50 hover:text-ink transition-all"
          >
            Careers
          </a>
        </nav>
        {/* Header Actions */}
        <div className="flex items-center gap-3">
          {/* Let's Talk CTA */}
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-4 sm:px-5 py-2.5 text-xs font-semibold tracking-wide text-white bg-ink hover:bg-coral-600 transition-colors duration-300 rounded-full shadow-xs active:scale-95"
          >
            <span className="hidden sm:inline">Start a conversation</span>
            <span className="sm:hidden">Talk</span>
            <svg
              className="hidden sm:block w-3.5 h-3.5 ml-1.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
          {/* Mobile Menu Toggle Button */}
          <button
            id="menu-btn"
            className="xl:hidden p-2 rounded-xl text-ink-muted hover:text-ink hover:bg-stone-200/50 focus:outline-hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile Dropdown Navigation */}
      <div
        id="mobile-nav"
        className={`${menuOpen ? "" : "hidden "}xl:hidden max-w-7xl mx-auto mt-2 rounded-2xl bg-porcelain/95 backdrop-blur-xl border border-stone-200 shadow-xl px-6 py-5 text-sm space-y-3 font-medium`}
      >
        <a href="#philosophy" className="block text-ink-muted hover:text-ink py-1" onClick={closeMenu}>
          Who we are
        </a>
        <a href="#work" className="block text-ink-muted hover:text-ink py-1" onClick={closeMenu}>
          Products
        </a>
        <a href="#capabilities" className="block text-ink-muted hover:text-ink py-1" onClick={closeMenu}>
          Capabilities
        </a>
        <a href="#industries" className="block text-ink-muted hover:text-ink py-1" onClick={closeMenu}>
          Industries
        </a>
        <a href="#studio" className="block text-ink-muted hover:text-ink py-1" onClick={closeMenu}>
          Location
        </a>
        <a href="#team" className="block text-ink-muted hover:text-ink py-1" onClick={closeMenu}>
          Team
        </a>
        <a href="#careers" className="block text-ink-muted hover:text-ink py-1" onClick={closeMenu}>
          Careers
        </a>
        <AdminOpenButton
          type="button"
          data-admin-open=""
          className="block w-full text-left text-indigo-700 font-semibold py-1"
        >
          Admin login
        </AdminOpenButton>
      </div>
    </header>
  );
}
