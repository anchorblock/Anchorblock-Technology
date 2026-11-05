import type { Metadata } from "next";
import { Careers } from "@/components/careers";
import { RevealObserver } from "@/components/reveal-observer";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { site } from "@/lib/site";

const description =
  "Open roles at Anchorblock Technology in Mirpur DOHS, Dhaka: product thinking, software engineering, and production support in one team.";

export const metadata: Metadata = {
  title: `Careers — ${site.name}`,
  description,
  alternates: { canonical: "/careers" },
  openGraph: { type: "website", url: "/careers", siteName: site.name, title: `Careers — ${site.name}`, description },
  twitter: { card: "summary_large_image", title: `Careers — ${site.name}`, description },
};

export default function CareersPage() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main">
        <Careers />
      </main>
      <SiteFooter />
      <RevealObserver />
    </>
  );
}
