import Image from "next/image";
import { AnchorBookGallery } from "@/components/anchorbook-gallery";
import { ClientLogoToggle } from "@/components/client-logo-toggle";
import { PatronMonitor } from "@/components/patron-monitor";

export function SelectedWork() {
  return (
    <section id="work" className="py-24 sm:py-32 border-b border-stone-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 reveal">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-indigo-600 font-semibold mb-3">
            <span className="w-2 h-2 rounded-full bg-indigo-500" />
            <span>03 / SELECTED WORK</span>
          </div>
          <h2 className="display-title text-3xl sm:text-5xl lg:text-6xl font-bold text-ink mb-4">
            Thoughtful products. <em>Reliable in production.</em>
          </h2>
          <p className="text-ink-muted font-body text-base sm:text-lg leading-relaxed sm:leading-7">
            We build our own products and work alongside teams to keep essential services running.
            Explore the products we’re shaping and the production support we provide.
          </p>
        </div>
        {/* ANCHORBLOCK OWN BUILDS */}
        <div className="mb-14 sm:mb-20 reveal">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-7">
            <div>
              <span className="font-mono text-xs font-semibold tracking-[0.16em] uppercase text-indigo-600">
                Built at Anchorblock
              </span>
              <h3 className="display-title text-2xl sm:text-3xl font-bold text-ink mt-2">
                Our own product ideas, <em>made tangible.</em>
              </h3>
            </div>
            <p className="max-w-md text-sm font-body text-ink-muted leading-relaxed">
              From working software to detailed product blueprints, each project starts with a real
              user need.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            <article className="studio-card sm:col-span-2 rounded-[1.75rem] overflow-hidden p-5 sm:p-7 lg:p-9">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 lg:gap-10 items-center">
                <div className="lg:col-span-5">
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-xs font-semibold px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                      AI HEALTHCARE
                    </span>
                    <span className="font-mono text-xs text-ink-subtle">01 / OWN BUILD</span>
                  </div>
                  <h4 className="display-title text-2xl sm:text-3xl lg:text-4xl font-bold text-ink mb-4">
                    Onubot
                  </h4>
                  <p className="text-sm sm:text-base font-body text-ink-muted leading-relaxed sm:leading-6">
                    A companion for health questions, symptoms, and uploaded images or reports.
                    Onubot offers tailored guidance, doctor recommendations, and medication
                    information in a conversational mobile experience.
                  </p>
                  <p className="text-xs sm:text-sm font-body text-ink-subtle leading-relaxed mt-4 sm:leading-5">
                    Designed to support access to health information while keeping qualified
                    clinicians at the center of medical decisions.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-6">
                    <span className="text-[11px] font-mono px-3 py-1.5 rounded-full bg-porcelain-alt text-ink-muted">
                      Flutter
                    </span>
                    <span className="text-[11px] font-mono px-3 py-1.5 rounded-full bg-porcelain-alt text-ink-muted">
                      Mobile + Backend
                    </span>
                    <span className="text-[11px] font-mono px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-700">
                      AI health companion
                    </span>
                  </div>
                </div>
                <div
                  className="onubot-gallery lg:col-span-7 h-[22rem] sm:h-[30rem] lg:h-[29rem]"
                  aria-label="Onubot mobile app screenshots"
                >
                  <figure className="onubot-screen onubot-screen--splash">
                    <Image
                      src="/onu1.jpeg"
                      alt="Onubot app welcome screen"
                      width={738}
                      height={1600}
                      sizes="(min-width: 1024px) 200px, 30vw"
                    />
                  </figure>
                  <figure className="onubot-screen onubot-screen--chat">
                    <Image
                      src="/onu2.jpeg"
                      alt="Onubot Bengali AI chat and doctor recommendation"
                      width={738}
                      height={1600}
                      sizes="(min-width: 1024px) 200px, 30vw"
                    />
                  </figure>
                  <figure className="onubot-screen onubot-screen--appointment">
                    <Image
                      src="/onu3.jpeg"
                      alt="Onubot appointment and prescription preview screen"
                      width={738}
                      height={1600}
                      sizes="(min-width: 1024px) 200px, 30vw"
                    />
                  </figure>
                </div>
              </div>
            </article>
            <article className="studio-card sm:col-span-2 rounded-[1.75rem] overflow-hidden p-5 sm:p-7 lg:p-9">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 lg:gap-10 items-center">
                <div className="lg:col-span-5">
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-xs font-semibold px-3 py-1 rounded-full bg-lime-50 text-lime-800 border border-lime-200">
                      CROSS-BORDER FINTECH
                    </span>
                    <span className="font-mono text-xs text-ink-subtle">02 / OWN BUILD</span>
                  </div>
                  <h4 className="display-title text-2xl sm:text-3xl lg:text-4xl font-bold text-ink mb-4">
                    JaldiPay
                  </h4>
                  <p className="text-sm sm:text-base font-body text-ink-muted leading-relaxed sm:leading-6">
                    A Bangladesh–India remittance concept focused on more accessible cross-border
                    transfers. The product blueprint maps customer flows, compliance needs, payment
                    partners, local payout rails, and a Flutter app foundation.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-6">
                    <span className="text-[11px] font-mono px-3 py-1.5 rounded-full bg-porcelain-alt text-ink-muted">
                      Remittance
                    </span>
                    <span className="text-[11px] font-mono px-3 py-1.5 rounded-full bg-porcelain-alt text-ink-muted">
                      Product research
                    </span>
                    <span className="text-[11px] font-mono px-3 py-1.5 rounded-full bg-lime-50 text-lime-800">
                      Compliance-led
                    </span>
                  </div>
                </div>
                <div
                  className="jaldipay-gallery lg:col-span-7 h-[22rem] sm:h-[30rem] lg:h-[29rem]"
                  aria-label="JaldiPay wallet app screenshots"
                >
                  <div className="jaldipay-mark">
                    <Image
                      src="/jaldipay0.jpeg"
                      alt="JaldiPay logo"
                      width={1024}
                      height={1024}
                      sizes="56px"
                    />
                  </div>
                  <figure className="jaldipay-screen jaldipay-screen--add">
                    <Image
                      src="/jaldipay1.png"
                      alt="JaldiPay add money screen"
                      width={1080}
                      height={2340}
                      sizes="(min-width: 1024px) 200px, 30vw"
                    />
                  </figure>
                  <figure className="jaldipay-screen jaldipay-screen--wallet">
                    <Image
                      src="/jaldipay2.png"
                      alt="JaldiPay wallet balance and activity screen"
                      width={1080}
                      height={2340}
                      sizes="(min-width: 1024px) 200px, 30vw"
                    />
                  </figure>
                  <figure className="jaldipay-screen jaldipay-screen--transfer">
                    <Image
                      src="/jaldipay3.jpeg"
                      alt="JaldiPay transfer confirmation screen"
                      width={720}
                      height={1600}
                      sizes="(min-width: 1024px) 200px, 30vw"
                    />
                  </figure>
                </div>
              </div>
            </article>
            <article className="studio-card rounded-2xl p-6 sm:p-7">
              <div className="mb-6 aspect-[35/22] rounded-xl overflow-hidden border border-stone-800/10 bg-[#171411] shadow-inner">
                <Image
                  src="/omniWEB.png"
                  alt="Omnizen AI web platform dashboard"
                  width={1400}
                  height={880}
                  className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-[1.025]"
                  sizes="(min-width: 1280px) 600px, (min-width: 640px) 50vw, 100vw"
                />
              </div>
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-xs font-semibold px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200">
                  AI PLATFORM
                </span>
                <span className="font-mono text-xs text-ink-subtle">03</span>
              </div>
              <h4 className="text-xl font-bold text-ink mb-2">Omnizen AI</h4>
              <p className="text-sm font-body text-ink-muted leading-relaxed">
                One managed gateway for multiple AI model providers. Omnizen brings compatible APIs,
                virtual keys, usage limits, and billing controls together for a smoother developer
                workflow.
              </p>
              <div className="flex flex-wrap gap-2 mt-5">
                <span className="text-[11px] font-mono px-3 py-1.5 rounded-full bg-porcelain-alt text-ink-muted">
                  Model routing
                </span>
                <span className="text-[11px] font-mono px-3 py-1.5 rounded-full bg-porcelain-alt text-ink-muted">
                  API gateway
                </span>
                <span className="text-[11px] font-mono px-3 py-1.5 rounded-full bg-indigo-50 text-indigo-700">
                  Usage controls
                </span>
              </div>
            </article>
            <article className="studio-card rounded-2xl p-6 sm:p-7">
              <div className="mb-6 aspect-[35/22] rounded-xl overflow-hidden bg-[#f4eee2] flex items-center justify-center gap-3 sm:gap-5 px-4 sm:px-6">
                <Image
                  src="/omniapp1.jpeg"
                  alt="Omnizen app icon"
                  width={512}
                  height={512}
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl shadow-lg object-cover"
                  sizes="96px"
                />
                <Image
                  src="/omniapp2.jpeg"
                  alt="Omnizen app wordmark"
                  width={1200}
                  height={630}
                  className="w-0 min-w-0 flex-1 max-w-[19rem] h-20 sm:h-24 object-contain mix-blend-multiply"
                  sizes="304px"
                />
              </div>
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-xs font-semibold px-3 py-1 rounded-full bg-iris-50 text-iris-600 border border-iris-200">
                  PRODUCT DESIGN
                </span>
                <span className="font-mono text-xs text-ink-subtle">04</span>
              </div>
              <h4 className="text-xl font-bold text-ink mb-2">Omnizen App</h4>
              <p className="text-sm font-body text-ink-muted leading-relaxed">
                A product and design system for bringing AI apps into one connected experience, with
                a shared account, subscription, usage view, and model gateway. The project shapes
                the platform experience and its product foundations.
              </p>
              <div className="flex flex-wrap gap-2 mt-5">
                <span className="text-[11px] font-mono px-3 py-1.5 rounded-full bg-porcelain-alt text-ink-muted">
                  Design system
                </span>
                <span className="text-[11px] font-mono px-3 py-1.5 rounded-full bg-porcelain-alt text-ink-muted">
                  AI app hub
                </span>
                <span className="text-[11px] font-mono px-3 py-1.5 rounded-full bg-iris-50 text-iris-600">
                  Product strategy
                </span>
              </div>
            </article>
            <article className="studio-card sm:col-span-2 rounded-[1.75rem] overflow-hidden p-5 sm:p-7 lg:p-9">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 lg:gap-10 items-center">
                <div className="lg:col-span-5">
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-xs font-semibold px-3 py-1 rounded-full bg-sky-50 text-sky-700 border border-sky-200">
                      BUSINESS OPERATIONS
                    </span>
                    <span className="font-mono text-xs text-ink-subtle">05 / OWN BUILD</span>
                  </div>
                  <h4 className="display-title text-2xl sm:text-3xl lg:text-4xl font-bold text-ink mb-4">
                    AnchorBook
                  </h4>
                  <p className="text-sm sm:text-base font-body text-ink-muted leading-relaxed sm:leading-6">
                    One workspace for the daily work behind a growing business: financial and
                    cash-flow reporting, multi-warehouse inventory, POS, invoicing, vendor bills,
                    payroll, accountant journals, and multi-organization management.
                  </p>
                  <p className="text-xs sm:text-sm font-body text-ink-subtle leading-relaxed mt-4 sm:leading-5">
                    <strong className="text-ink-muted">Anchor Magic</strong> adds conversational and
                    voice AI that can carry out tasks such as adding customers and logging expenses.
                    Forecasting, automated reconciliation, recruitment interviews, and marketing
                    content are on the roadmap.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-6">
                    <span className="text-[11px] font-mono px-3 py-1.5 rounded-full bg-porcelain-alt text-ink-muted">
                      Accounting + POS
                    </span>
                    <span className="text-[11px] font-mono px-3 py-1.5 rounded-full bg-porcelain-alt text-ink-muted">
                      Inventory + Payroll
                    </span>
                    <span className="text-[11px] font-mono px-3 py-1.5 rounded-full bg-sky-50 text-sky-700">
                      Voice AI
                    </span>
                  </div>
                </div>
                <AnchorBookGallery />
              </div>
            </article>
          </div>
        </div>
        {/* Open source section (components/open-source.tsx) is hidden for now; render <OpenSource /> here to restore it. */}
        <div className="mb-8 reveal">
          <span className="font-mono text-xs font-semibold tracking-[0.16em] uppercase text-coral-600">
            Client operations & support
          </span>
          <h3 className="display-title text-2xl sm:text-3xl font-bold text-ink mt-2">
            In the flow of <em>live services.</em>
          </h3>
          <p className="max-w-2xl text-sm font-body text-ink-muted leading-relaxed mt-2">
            We help client teams monitor critical journeys, resolve production issues, and build
            confidence in the systems they operate.
          </p>
        </div>
        {/* WORK ITEM 1: BKASH PATRON */}
        <div className="studio-card rounded-[2rem] p-6 sm:p-10 lg:p-12 mb-12 relative overflow-hidden reveal">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Text Meta */}
            <div className="lg:col-span-5 space-y-5">
              <ClientLogoToggle
                detailId="bkash-client-detail"
                label="Show bKash support details"
                glow="rgba(216, 27, 96, .2)"
                logo={{
                  src: "https://images.seeklogo.com/logo-png/45/1/bkash-logo-png_seeklogo-457983.png",
                  alt: "bKash logo",
                  width: 2000,
                  height: 915,
                }}
                detail="24/7 production support · app + USSD automation"
                detailClassName="text-xs font-mono text-coral-600"
              />

              <div className="flex items-center gap-2 text-xs font-mono">
                <span className="px-3 py-1 rounded-full bg-coral-50 text-coral-600 font-semibold border border-coral-200">
                  bKash Limited
                </span>
                <span className="text-stone-300">•</span>
                <span className="text-ink-subtle">Fintech Automation</span>
              </div>
              <h3 className="text-2xl sm:text-4xl font-bold text-ink tracking-tight">Patron</h3>
              <p className="text-ink-muted font-body text-sm sm:text-base leading-relaxed sm:leading-6">
                We support production app and USSD automation with centralized service checks,
                round-the-clock monitoring, and responsive technical support. Ongoing knowledge
                sharing helps client teams understand the checks and the systems behind them.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="text-xs font-mono px-3 py-1.5 rounded-full bg-porcelain-alt text-ink-muted">
                  App & USSD
                </span>
                <span className="text-xs font-mono px-3 py-1.5 rounded-full bg-porcelain-alt text-ink-muted">
                  Centralized Checks
                </span>
                <span className="text-xs font-mono px-3 py-1.5 rounded-full bg-porcelain-alt text-ink-muted">
                  Knowledge Sharing
                </span>
                <span className="text-xs font-mono px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-700 font-medium border border-emerald-200">
                  24/7 Support
                </span>
              </div>
            </div>
            {/* Interactive Telemetry Component */}
            <PatronMonitor />
          </div>
        </div>
        {/* WORK ITEM 2: TRUKKER */}
        <div className="studio-card rounded-[2rem] p-6 sm:p-10 lg:p-12 mb-12 relative overflow-hidden reveal">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Animated Map Component */}
            <div className="lg:col-span-7 bg-porcelain dot-matrix-light border border-stone-200/90 rounded-2xl p-6 sm:p-7 shadow-inner order-2 lg:order-1 font-sans">
              <div className="flex items-center justify-between pb-4 border-b border-stone-200/80 mb-4">
                <span className="font-mono text-xs font-bold text-ink flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" /> FLEET /
                  GEOSPATIAL INTELLIGENCE
                </span>
                <span className="text-xs font-mono px-3 py-0.5 rounded-full bg-emerald-100/80 text-emerald-800 border border-emerald-200 font-semibold">
                  Across Pakistan
                </span>
              </div>
              {/* Stylized Minimal Map Canvas */}
              <div className="relative w-full h-60 bg-white rounded-xl border border-stone-200/90 overflow-hidden flex items-center justify-center shadow-xs">
                <svg className="w-full h-full" viewBox="0 0 440 220" preserveAspectRatio="none">
                  {/* Coordinate Grid Lines */}
                  <line x1="110" y1="0" x2="110" y2="220" stroke="#F1F5F9" strokeWidth="1" />
                  <line x1="220" y1="0" x2="220" y2="220" stroke="#F1F5F9" strokeWidth="1" />
                  <line x1="330" y1="0" x2="330" y2="220" stroke="#F1F5F9" strokeWidth="1" />
                  <line x1="0" y1="73" x2="440" y2="73" stroke="#F1F5F9" strokeWidth="1" />
                  <line x1="0" y1="146" x2="440" y2="146" stroke="#F1F5F9" strokeWidth="1" />
                  {/* Soft Road Vectors */}
                  <path
                    d="M-10,60 C90,70 140,30 220,50 S350,80 450,55"
                    fill="none"
                    stroke="#E2E8F0"
                    strokeWidth="2.5"
                  />
                  <path
                    d="M-10,160 C80,140 140,190 230,170 S350,130 450,155"
                    fill="none"
                    stroke="#E2E8F0"
                    strokeWidth="2.5"
                  />
                  <path
                    d="M70,-10 C80,60 50,120 85,200 S100,240 110,240"
                    fill="none"
                    stroke="#E2E8F0"
                    strokeWidth="2"
                  />
                  <path
                    d="M340,-10 C320,70 370,140 350,210 S330,240 340,240"
                    fill="none"
                    stroke="#E2E8F0"
                    strokeWidth="2"
                  />
                  {/* Active Logistics Route Curve Glow */}
                  <path
                    d="M30,180 C80,170 100,120 160,120 S240,65 300,75 S365,130 410,95"
                    fill="none"
                    stroke="#10B981"
                    strokeWidth="8"
                    strokeLinecap="round"
                    opacity="0.15"
                  />
                  {/* Active Logistics Route Curve */}
                  <path
                    id="routeCurve"
                    d="M30,180 C80,170 100,120 160,120 S240,65 300,75 S365,130 410,95"
                    fill="none"
                    stroke="#10B981"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  {/* Animated Tracking Vehicle Pulse */}
                  <circle r="10" fill="#10B981" opacity="0.25">
                    <animateMotion dur="12s" repeatCount="indefinite" rotate="auto">
                      <mpath href="#routeCurve" />
                    </animateMotion>
                  </circle>
                  <circle r="4.5" fill="#059669" stroke="#FFFFFF" strokeWidth="1.5">
                    <animateMotion dur="12s" repeatCount="indefinite" rotate="auto">
                      <mpath href="#routeCurve" />
                    </animateMotion>
                  </circle>
                </svg>
                {/* Map Overlay Tag */}
                <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-stone-200 text-xs font-mono text-ink shadow-xs flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="font-medium">Illustrative route view</span>
                </div>
              </div>
              {/* Telemetry Metrics */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mt-4 text-xs font-mono">
                <div className="p-3 bg-white/95 rounded-xl border border-stone-200/80 shadow-xs">
                  <span className="text-ink-subtle text-[10px] block uppercase">REGION</span>{" "}
                  <span className="font-bold text-ink mt-0.5 block">Pakistan-wide</span>
                </div>
                <div className="p-3 bg-white/95 rounded-xl border border-stone-200/80 shadow-xs">
                  <span className="text-ink-subtle text-[10px] block uppercase">FOCUS</span>{" "}
                  <span className="font-bold text-emerald-600 mt-0.5 block">
                    Tracking reliability
                  </span>
                </div>
                <div className="p-3 bg-white/95 rounded-xl border border-stone-200/80 shadow-xs">
                  <span className="text-ink-subtle text-[10px] block uppercase">SERVICE</span>{" "}
                  <span className="font-bold text-indigo-600 mt-0.5 block">Managed support</span>
                </div>
                <div className="p-3 bg-white/95 rounded-xl border border-stone-200/80 shadow-xs">
                  <span className="text-ink-subtle text-[10px] block uppercase">DELIVERY</span>{" "}
                  <span className="font-bold text-coral-600 mt-0.5 block">
                    End-to-end resolution
                  </span>
                </div>
              </div>
            </div>
            {/* Text Meta */}
            <div className="lg:col-span-5 space-y-5 order-1 lg:order-2">
              <ClientLogoToggle
                detailId="trukker-client-detail"
                label="Show TruKKer support details"
                glow="rgba(249, 115, 22, .22)"
                logo={{ src: "/trukkr.png", alt: "TruKKer logo", width: 320, height: 100 }}
                detail="Pakistan-wide tracking · managed technical support"
                detailClassName="text-xs font-mono text-emerald-700"
              />

              <div className="flex items-center gap-2 text-xs font-mono">
                <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 font-semibold border border-emerald-200">
                  Trukker
                </span>
                <span className="text-stone-300">•</span>
                <span className="text-ink-subtle">Vehicle Tracking • Pakistan</span>
              </div>
              <h3 className="text-2xl sm:text-4xl font-bold text-ink tracking-tight">
                Trukker Tracking Operations
              </h3>
              <p className="text-ink-muted font-body text-sm sm:text-base leading-relaxed sm:leading-6">
                We help this Pakistan-wide vehicle tracking provider resolve major tracking issues
                and keep its services running smoothly. Our support spans service management,
                technical troubleshooting, and end-to-end problem resolution as needs arise.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="text-xs font-mono px-3 py-1.5 rounded-full bg-porcelain-alt text-ink-muted">
                  Telemetry
                </span>
                <span className="text-xs font-mono px-3 py-1.5 rounded-full bg-porcelain-alt text-ink-muted">
                  Geospatial
                </span>
                <span className="text-xs font-mono px-3 py-1.5 rounded-full bg-porcelain-alt text-ink-muted">
                  Tracking issue resolution
                </span>
                <span className="text-xs font-mono px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-700 font-medium border border-emerald-200">
                  Managed technical support
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
