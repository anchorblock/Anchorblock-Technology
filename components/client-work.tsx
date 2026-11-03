import Image from "next/image";

const ART_SIZES = "(max-width: 640px) calc(100vw - 66px), (max-width: 1320px) 50vw, 600px";

export function ClientWork() {
  return (
    <section className="section section-client" id="client-work" aria-labelledby="client-title">
      <div className="wrap">
        <div className="section-heading section-heading-wide client-heading">
          <div>
            <p className="section-kicker">03 / PRODUCTION PARTNERSHIPS</p>
            <h2 id="client-title">
              In the flow of
              <br />
              <span>live services.</span>
            </h2>
            <p className="section-intro">
              We keep critical client services monitored, supported, and reliable in production.
            </p>
          </div>
        </div>
        <div className="client-grid">
          <article className="client-story patron-story">
            <Image
              className="client-art patron-art patron-banner"
              src="/work/bkash-patron-banner.png"
              alt="bKash banner for Patron production support"
              width={597}
              height={220}
              sizes={ART_SIZES}
            />
            <div className="client-copy">
              <div className="client-client">
                <Image
                  className="client-logo bkash-logo"
                  src="/partners/bkash-logo.png"
                  alt="bKash"
                  width={131}
                  height={74}
                  sizes="88px"
                />
                <span>bKash Limited</span>
              </div>
              <p className="client-type">FINTECH AUTOMATION · PARTNERSHIP</p>
              <h3>Patron</h3>
              <p>
                We support production app and USSD automation with centralized service checks,
                round-the-clock monitoring, and responsive technical support. Ongoing knowledge sharing
                helps client teams understand the checks and the systems behind them.
              </p>
              <div className="tag-list">
                <span>App &amp; USSD</span>
                <span>Centralized Checks</span>
                <span>Knowledge Sharing</span>
                <span>24/7 Support</span>
              </div>
            </div>
          </article>
          <article className="client-story trukkr-story">
            <Image
              className="client-art trukkr-art trukkr-cover"
              src="/work/trukkr-tracking-cover.png"
              alt="Trukkr fleet tracking map showing vehicle routes across Pakistan"
              width={597}
              height={220}
              sizes={ART_SIZES}
            />
            <div className="client-copy">
              <div className="client-client">
                <Image
                  className="client-logo trukkr-logo"
                  src="/partners/trukkr-logo.png"
                  alt="Trukkr"
                  width={214}
                  height={69}
                  sizes="116px"
                />
                <span>Vehicle Tracking · Pakistan</span>
              </div>
              <p className="client-type">TRACKING OPERATIONS · PARTNERSHIP</p>
              <h3>Trukkr Tracking Operations</h3>
              <p>
                We help this Pakistan-wide vehicle tracking provider resolve major tracking issues and
                keep its services running smoothly. Our support spans service management, technical
                troubleshooting, and end-to-end problem resolution as needs arise.
              </p>
              <div className="tag-list">
                <span>Telemetry</span>
                <span>Geospatial</span>
                <span>Tracking issue resolution</span>
                <span>Managed technical support</span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
