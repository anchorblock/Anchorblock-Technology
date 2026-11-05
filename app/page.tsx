import { Capabilities } from "@/components/capabilities";
import { ClientWork } from "@/components/client-work";
import { Contact } from "@/components/contact";
import { CustomSections } from "@/components/custom-sections";
import { Hero } from "@/components/hero";
import { IconLibrary } from "@/components/icon-library";
import { JsonLd } from "@/components/json-ld";
import { PartnerBand } from "@/components/partner-band";
import { Philosophy } from "@/components/philosophy";
import { Products } from "@/components/products";
import { RevealObserver } from "@/components/reveal-observer";
import { Sectors } from "@/components/sectors";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Studio } from "@/components/studio";
import { site, siteUrl } from "@/lib/site";

const organization = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": new URL("/#organization", siteUrl).href,
      name: site.name,
      legalName: site.legalName,
      description: site.description,
      url: siteUrl.href,
      logo: new URL(site.logo, siteUrl).href,
      image: new URL(site.logo, siteUrl).href,
      foundingDate: site.foundingYear,
      telephone: site.telephone,
      address: { "@type": "PostalAddress", ...site.address },
      geo: { "@type": "GeoCoordinates", ...site.geo },
      email: site.email,
      areaServed: ["Bangladesh", "Pakistan", "United States"],
      sameAs: Object.values(site.social),
    },
    {
      "@type": "WebSite",
      "@id": new URL("/#website", siteUrl).href,
      url: siteUrl.href,
      name: site.name,
      inLanguage: "en",
      publisher: { "@id": new URL("/#organization", siteUrl).href },
    },
  ],
};

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <IconLibrary />
      <SiteHeader />
      <main id="main">
        <Hero />
        <PartnerBand />
        <Philosophy />
        <Products />
        {/* Open source section (components/open-source.tsx) is hidden for now; render <OpenSource /> here to restore it. */}
        <ClientWork />
        <Capabilities />
        <Sectors />
        <Studio />
        {/* Team section (components/team.tsx) is hidden for now; render <Team /> here to restore it. */}
        {/* Custom sections published by the Anchorblock admin workspace */}
        <CustomSections />
        <Contact />
      </main>
      <SiteFooter />
      <RevealObserver />
      <JsonLd data={organization} />
    </>
  );
}
