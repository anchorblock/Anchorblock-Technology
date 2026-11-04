import { site } from "@/lib/site";

export function Studio() {
  return (
    <section className="section section-studio" id="studio" aria-labelledby="studio-title">
      <div className="wrap">
        <div className="studio-top">
          <div>
            <p className="section-kicker">06 / STUDIO</p>
            <h2 id="studio-title">
              One studio.
              <br />
              <span>Wide reach.</span>
            </h2>
            <p className="studio-description">
              Dhaka-based, supporting live systems across Bangladesh, Pakistan, and the United States.
            </p>
          </div>
        </div>
        <div className="studio-details">
          <div className="studio-address">
            <p className="detail-label">OFFICE</p>
            <address>
              House 432, Road 6
              <br />
              Mirpur DOHS, Dhaka-1216
              <br />
              Bangladesh
            </address>
            <a href={`tel:${site.telephone}`}>+880 1757 049 684</a>
            <p className="registration">Registration {site.registration}</p>
            <a className="text-link" href={site.mapUrl} target="_blank" rel="noreferrer">
              Open Google Maps <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className="map-card">
            <iframe
              className="map-card-frame"
              src={site.mapEmbedUrl}
              title="Map of the Anchorblock office in Mirpur DOHS, Dhaka"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="map-card-caption">
              <b>MIRPUR DOHS, DHAKA</b>
              <span>23.83719° N / 90.36898° E</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
