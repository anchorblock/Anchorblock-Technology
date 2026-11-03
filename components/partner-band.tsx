import Image from "next/image";

/** `sizes` matches each mark's rendered width in design.css. */
const PARTNERS = [
  { key: "omnizen", src: "/partners/omnizen-brand.png", alt: "Omnizen AI", width: 481, height: 121, sizes: "128px" },
  { key: "bkash", src: "/partners/bkash-logo.png", alt: "bKash", width: 131, height: 74, sizes: "68px" },
  { key: "trukkr", src: "/partners/trukkr-logo.png", alt: "Trukkr", width: 214, height: 69, sizes: "108px" },
  { key: "dedg", src: "/partners/dedg-logo.png", alt: "Digital Economy Development Forum", width: 1738, height: 769, sizes: "146px" },
  { key: "iut", src: "/partners/iut-logo.png", alt: "Islamic University of Technology", width: 248, height: 406, sizes: "42px" },
  { key: "teamq", src: "/partners/team-q-logo.png", alt: "Team Q", width: 573, height: 573, sizes: "132px" },
];

/** Continuously scrolling rail of products and partners. The second set is a visual duplicate for the loop. */
export function PartnerBand() {
  return (
    <section className="partner-band" aria-label="Products and production partnerships">
      <div className="partner-band-inner">
        <div className="partner-band-heading">
          <p>Products &amp; production partnerships</p>
        </div>
        <div className="partner-marquee">
          <div className="partner-track">
            {[false, true].map((duplicate) => (
              <ul
                key={String(duplicate)}
                className="partner-set"
                aria-label={duplicate ? undefined : "Selected products and partners"}
                aria-hidden={duplicate || undefined}
              >
                {PARTNERS.map((partner) => (
                  <li key={partner.key} className={`partner-entry partner-${partner.key}`}>
                    <Image
                      className={`partner-logo partner-logo-${partner.key}`}
                      src={partner.src}
                      alt={duplicate ? "" : partner.alt}
                      width={partner.width}
                      height={partner.height}
                      sizes={partner.sizes}
                      // Off-screen copies scroll into view with the animation, so none can wait to lazy-load.
                      loading="eager"
                    />
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
