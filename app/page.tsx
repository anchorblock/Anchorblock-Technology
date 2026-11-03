import Image from "next/image";
import { AdminOpenButton } from "@/components/admin/admin-open-button";
import { AdminPanel } from "@/components/admin/admin-panel";
import { BrandOpening } from "@/components/brand-opening";
import { Capabilities } from "@/components/capabilities";
import { Careers } from "@/components/careers";
import { ClientMarquee } from "@/components/client-marquee";
import { Contact } from "@/components/contact";
import { CustomSections } from "@/components/custom-sections";
import { Hero, HeroBackdrop } from "@/components/hero";
import { Industries } from "@/components/industries";
import { JsonLd } from "@/components/json-ld";
import { Philosophy } from "@/components/philosophy";
import { RevealObserver } from "@/components/reveal-observer";
import { SelectedWork } from "@/components/selected-work";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { StudioLocation } from "@/components/studio-location";
import { Toast } from "@/components/toast";
import { site, siteUrl } from "@/lib/site";
import { getSupabaseConfig } from "@/lib/supabase/config";

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
      areaServed: ["Bangladesh", "Pakistan", "United States"],
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
      <BrandOpening />
      {/* Ambient Soft Chromatic Mesh */}
      <div className="ambient-mesh" aria-hidden="true">
        <div className="orb orb-coral" />
        <div className="orb orb-indigo" />
        <div className="orb orb-emerald" />
      </div>
      {/* Toast Feedback Notification */}
      <Toast />
      <AdminOpenButton
        type="button"
        data-admin-open=""
        className="admin-floating-button"
        aria-label="Open Anchorblock admin login"
      >
        <Image src="/anchorblock_logo.jpeg" alt="" width={200} height={200} sizes="41px" />
        <span>Admin</span>
      </AdminOpenButton>
      {/* Admin sign-in and publishing workspace */}
      <AdminPanel config={getSupabaseConfig()} />
      <SiteHeader />
      <main id="top" className="relative">
        <HeroBackdrop />
        <Hero />
        <Philosophy />
        {/* ==================== MAIN CONTENT WRAPPER ==================== */}
        <div className="relative z-10 bg-porcelain border-t border-white/80">
          <ClientMarquee />
          <SelectedWork />
          <Capabilities />
          <Industries />
          <StudioLocation />
          {/* Custom sections published by the Anchorblock admin workspace */}
          <CustomSections />
          <Careers />
          {/* Team section (components/team.tsx) is hidden for now; render <Team /> here to restore it. */}
          <Contact />
        </div>
      </main>
      <SiteFooter />
      <RevealObserver />
      <JsonLd data={organization} />
    </>
  );
}
