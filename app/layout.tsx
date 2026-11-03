import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { site, siteUrl } from "@/lib/site";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

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
 * The stylesheet keys the mobile menu off `html.js` / `html.no-js`, so the menu still works without
 * JavaScript. The class changes before first paint, hence suppressHydrationWarning on <html>.
 */
const JS_CLASS_SCRIPT = `document.documentElement.classList.replace("no-js", "js");`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`no-js ${inter.variable}`} suppressHydrationWarning>
      <body>
        <script dangerouslySetInnerHTML={{ __html: JS_CLASS_SCRIPT }} />
        {children}
      </body>
    </html>
  );
}
