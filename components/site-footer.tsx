import Image from "next/image";
import { cacheLife } from "next/cache";
import { AdminOpenButton } from "@/components/admin/admin-open-button";
import { site } from "@/lib/site";

async function currentYear() {
  "use cache";
  cacheLife("days");
  return new Date().getFullYear();
}

export async function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-main">
        <div className="footer-brand">
          <a className="brand footer-brand-link" href="#top" aria-label="Anchorblock Technology home">
            <Image
              className="brand-logo footer-logo"
              src="/brand/anchorblock-logo-white.svg"
              alt="Anchorblock Technology"
              width={1068}
              height={668}
              unoptimized
            />
          </a>
          <p>
            Thoughtful products.
            <br />
            Reliable in production.
          </p>
          <span className="footer-registration">Dhaka · Registration {site.registration}</span>
        </div>
        <div className="footer-column">
          <h2>Visit</h2>
          <address>
            House 432, Road 6
            <br />
            Mirpur DOHS, Dhaka-1216
            <br />
            Bangladesh
          </address>
          <a href={site.mapUrl} target="_blank" rel="noreferrer">
            Open Google Maps ↗
          </a>
        </div>
        <div className="footer-column">
          <h2>Contact</h2>
          <a href={`tel:${site.telephone}`}>+880 1757 049 684</a>
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <a href={`mailto:${site.adminEmail}`}>{site.adminEmail}</a>
        </div>
        <div className="footer-column">
          <h2>Connect</h2>
          <a href="#careers">Careers</a>
          <a href={site.social.linkedin} target="_blank" rel="noreferrer">
            LinkedIn ↗
          </a>
          <a href={site.social.facebook} target="_blank" rel="noreferrer">
            Facebook ↗
          </a>
          <a href={site.social.github} target="_blank" rel="noreferrer">
            GitHub ↗
          </a>
          <a href="#contact">Send us a message ↗</a>
          <AdminOpenButton type="button" className="footer-admin">
            Admin login
          </AdminOpenButton>
        </div>
      </div>
      <div className="wrap footer-bottom">
        <span>© {await currentYear()} Anchorblock Technology</span>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  );
}
