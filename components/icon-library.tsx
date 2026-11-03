/** SVG symbols for the capability and sector icons, referenced with `<use href="#icon-…">`. */
export function IconLibrary() {
  return (
    <svg className="icon-library" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
      <symbol id="icon-platform" viewBox="0 0 32 32">
        <rect x="4" y="5" width="10" height="9" rx="1" />
        <rect x="18" y="5" width="10" height="9" rx="1" />
        <rect x="4" y="18" width="10" height="9" rx="1" />
        <path d="M21 19h7v8h-7zM18 23h3" />
      </symbol>
      <symbol id="icon-ai" viewBox="0 0 32 32">
        <circle cx="16" cy="16" r="4" />
        <circle cx="6" cy="7" r="2" />
        <circle cx="26" cy="7" r="2" />
        <circle cx="6" cy="25" r="2" />
        <circle cx="26" cy="25" r="2" />
        <path d="m13 13-5.5-4.5M19 13l5.5-4.5M13 19l-5.5 4.5M19 19l5.5 4.5M16 12V5" />
      </symbol>
      <symbol id="icon-finance" viewBox="0 0 32 32">
        <rect x="4" y="7" width="24" height="18" rx="2" />
        <path d="M4 12h24M9 20h5M22 17v6M19 20h6" />
      </symbol>
      <symbol id="icon-location" viewBox="0 0 32 32">
        <path d="M25 13c0 7-9 15-9 15S7 20 7 13a9 9 0 1 1 18 0Z" />
        <circle cx="16" cy="13" r="3" />
        <path d="M3 8a14 14 0 0 1 3-4M29 8a14 14 0 0 0-3-4" />
      </symbol>
      <symbol id="icon-automation" viewBox="0 0 32 32">
        <path d="M5 8h22M5 16h22M5 24h22" />
        <circle cx="12" cy="8" r="2.5" fill="white" />
        <circle cx="21" cy="16" r="2.5" fill="white" />
        <circle cx="10" cy="24" r="2.5" fill="white" />
      </symbol>
      <symbol id="icon-mobile" viewBox="0 0 32 32">
        <rect x="9" y="3.5" width="14" height="25" rx="2.5" />
        <path d="M13 7h6M14.5 24.5h3" />
      </symbol>
      <symbol id="icon-health" viewBox="0 0 32 32">
        <path d="M16 27S4 20 4 11.5A6.5 6.5 0 0 1 16 8a6.5 6.5 0 0 1 12 3.5C28 20 16 27 16 27Z" />
        <path d="M11 16h3l2-4 2.3 8 2-4H23" />
      </symbol>
      <symbol id="icon-agent" viewBox="0 0 32 32">
        <rect x="11" y="4" width="10" height="7" rx="1.5" />
        <rect x="3" y="21" width="9" height="7" rx="1.5" />
        <rect x="20" y="21" width="9" height="7" rx="1.5" />
        <path d="M16 11v5M7.5 21v-5H24v5" />
      </symbol>
    </svg>
  );
}

export function Icon({ name }: { name: string }) {
  return (
    <svg>
      <use href={`#icon-${name}`} />
    </svg>
  );
}
