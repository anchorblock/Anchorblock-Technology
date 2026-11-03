import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono, Newsreader, Plus_Jakarta_Sans } from "next/font/google";
import { site, siteUrl } from "@/lib/site";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
// Glyphs outside the Latin subset (e.g. "→") fall back to the system monospace font, as on the original page.
const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  adjustFontFallback: false,
  fallback: ["monospace"],
});
// The serif is only ever set in italic (display-title accents), so the upright style is not loaded.
const newsreader = Newsreader({
  subsets: ["latin"],
  style: "italic",
  axes: ["opsz"],
  variable: "--font-newsreader",
});

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: site.title,
  description: site.description,
  applicationName: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: site.name,
    title: site.title,
    description: site.description,
    locale: "en_US",
  },
  twitter: { card: "summary_large_image", title: site.title, description: site.description },
  category: "technology",
};

export const viewport: Viewport = {
  themeColor: site.themeColor,
};

/**
 * Runs before first paint: shows the logo intro once per browser session (skipped for reduced motion),
 * then clears it. The class lives on <html>, hence suppressHydrationWarning there.
 */
const BRAND_OPENING_SCRIPT = `try {
  if (!sessionStorage.getItem('anchorblock-opening-seen') && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.documentElement.classList.add('brand-opening-pending');
    sessionStorage.setItem('anchorblock-opening-seen', '1');
    window.setTimeout(function () { document.documentElement.classList.remove('brand-opening-pending'); }, 2200);
  }
} catch (_) {}`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`scroll-smooth ${jakarta.variable} ${inter.variable} ${jetbrains.variable} ${newsreader.variable}`}
      suppressHydrationWarning
    >
      <body className="relative min-h-screen text-ink antialiased selection:bg-coral-100 selection:text-coral-600">
        <script dangerouslySetInnerHTML={{ __html: BRAND_OPENING_SCRIPT }} />
        {children}
      </body>
    </html>
  );
}
