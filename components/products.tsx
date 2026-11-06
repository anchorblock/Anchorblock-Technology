import Image from "next/image";

const VISUAL_SIZES = "(max-width: 640px) calc(100vw - 76px), (max-width: 900px) 55vw, 690px";

const PRODUCTS = [
  {
    key: "onubot",
    category: "AI HEALTHCARE",
    name: "Onubot",
    body: "A companion for health questions, symptoms, and uploaded images or reports. Onubot offers tailored guidance, doctor recommendations, and medication information in a conversational mobile experience. Designed to support access to health information while keeping qualified clinicians at the center of medical decisions.",
    tags: ["Flutter Mobile + Backend", "AI health companion"],
    image: { src: "/work/onubot-feature.png", alt: "Onubot health assistant, doctor profile, and prescription app screens" },
  },
  {
    key: "jaldi",
    category: "CROSS-BORDER FINTECH",
    name: "Jaldi Pay",
    body: "A Bangladesh–India remittance concept focused on more accessible cross-border transfers. The product blueprint maps customer flows, compliance needs, payment partners, local payout rails, and a Flutter app foundation.",
    tags: ["Remittance", "Product research", "Compliance-led"],
    image: { src: "/work/jaldi-pay-cover.png", alt: "Jaldi Pay mobile wallet screens" },
  },
  {
    key: "omnizen-ai",
    category: "AI PLATFORM",
    name: "Omnizen AI",
    body: "One managed gateway for multiple AI model providers. Omnizen brings compatible APIs, virtual keys, usage limits, and billing controls together for a smoother developer workflow.",
    tags: ["Model routing", "API gateway", "Usage controls"],
    image: { src: "/work/omnizen-ai-cover.png", alt: "Omnizen AI app discovery interface", width: 1400, height: 880 },
  },
  {
    key: "omnizen-app",
    category: "PRODUCT DESIGN",
    name: "Omnizen App",
    body: "A product and design system for bringing AI apps into one connected experience, with a shared account, subscription, usage view, and model gateway. The project shapes the platform experience and its product foundations.",
    tags: ["Design system", "AI app hub", "Product strategy"],
    image: { src: "/work/omnizen-app-cover.png", alt: "Omnizen App logo cover" },
  },
  {
    key: "anchorbook",
    category: "BUSINESS OPERATIONS",
    name: "AnchorBook",
    body: "One workspace for the daily work behind a growing business: financial and cash-flow reporting, multi-warehouse inventory, POS, invoicing, vendor bills, payroll, accountant journals, and multi-organization management. Anchor Magic adds conversational and voice AI that can carry out tasks such as adding customers and logging expenses. Forecasting, automated reconciliation, recruitment interviews, and marketing content are on the roadmap.",
    tags: ["Accounting + POS", "Inventory + Payroll", "Voice AI"],
    image: { src: "/work/anchorbooks-cover.png", alt: "AnchorBooks financial dashboard" },
  },
  {
    key: "banking",
    category: "AI BANKING OPERATIONS",
    name: "Banking Agent Suite",
    body: "An AI-assisted operations platform for banks. It brings letters of credit, customs clearance and credit recovery into one traceable flow. Agents cross-check the LC against the bill of lading, invoice and packing list, track every import milestone from port to close-out, and prepare recovery notices. Officers review, decide and sign off, with maker–checker controls and a full audit trail. People decide. Agents assist. Everything evidenced.",
    tags: ["LC examination", "Customs clearance", "Credit recovery", "Maker–checker audit"],
    image: {
      src: "/work/banking-agent-suite.png",
      alt: "Banking Agent Suite LC examination screen comparing the letter of credit with the bill of lading, commercial invoice and packing list, shown on synthetic demo data",
      width: 1696,
      height: 960,
    },
  },
];

/** Product panels stack as the page scrolls: each card is sticky and slides over the one before it. */
export function Products() {
  return (
    <section className="section section-products" id="products" aria-labelledby="products-title">
      <div className="wrap">
        <div className="section-heading section-heading-wide">
          <div>
            <p className="section-kicker">02 / BUILT AT ANCHORBLOCK</p>
            <h2 id="products-title">
              Thoughtful products.
              <br />
              <span>Reliable in production.</span>
            </h2>
            <p className="section-intro">
              Products shaped by real needs, from live software to production-ready blueprints.
            </p>
          </div>
        </div>
        <div className="product-grid">
          {PRODUCTS.map((product, index) => {
            const image = (
              <Image
                className={product.key === "anchorbook" ? "anchorbook-preview" : "product-art"}
                src={product.image.src}
                alt={product.image.alt}
                width={product.image.width ?? 1746}
                height={product.image.height ?? 1072}
                sizes={VISUAL_SIZES}
              />
            );
            return (
              <article key={product.key} className={`product-card product-${product.key}`}>
                <div className={`product-visual ${product.key}-visual`}>
                  {product.key === "anchorbook" ? <div className="anchorbook-window">{image}</div> : image}
                </div>
                <div className="product-copy">
                  <div className="product-meta">
                    <span className="product-index">{String(index + 1).padStart(2, "0")}</span>
                    <span className="product-category-chip">{product.category}</span>
                  </div>
                  <h3>{product.name}</h3>
                  <p>{product.body}</p>
                  <div className="tag-list">
                    {product.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
