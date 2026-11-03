/** Full-viewport background video behind the hero and philosophy intro. */
export function HeroBackdrop() {
  return (
    <div className="absolute inset-x-0 top-0 h-screen overflow-hidden pointer-events-none z-0">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover scale-105 pointer-events-none select-none brightness-[0.82] contrast-[1.04]"
      >
        <source src="/ab02.mp4" type="video/mp4" />
      </video>
      {/* Eye-Soothing Cinematic Multi-Layer Overlay */}
      <div className="absolute inset-0 bg-linear-to-r/srgb from-obsidian/95 via-obsidian/80 to-obsidian/45 z-10 pointer-events-none" />
      <div className="absolute inset-0 bg-linear-to-t/srgb from-obsidian via-transparent to-obsidian/60 z-10 pointer-events-none" />
      <div className="absolute inset-0 arch-grid-dark z-10 pointer-events-none" />
    </div>
  );
}

export function Hero() {
  return (
    <section className="hero-intro relative z-10 min-h-[88vh] md:min-h-[92vh] flex items-center pt-16 pb-24 md:pt-24 md:pb-32">
      <div className="hero-content max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="hero-orb-visual" aria-hidden="true">
          <div className="hero-orb-core" />
          <span className="hero-orb-ring hero-orb-ring--one" />{" "}
          <span className="hero-orb-ring hero-orb-ring--two" />
        </div>
        {/* Eyebrow Badge */}
        <div className="hero-eyebrow inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.07] backdrop-blur-xl border border-white/15 shadow-lg text-xs font-mono text-stone-200 mb-8 transition-transform hover:scale-105 duration-300">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-coral-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-coral-500" />
          </span>
          <span className="font-medium text-white tracking-wide">Dhaka, Bangladesh</span>
          <span className="text-stone-500">/</span>
          <span className="text-stone-300">Est. 2022</span>
        </div>
        {/* Main Editorial Headline */}
        <div className="hero-copy max-w-5xl">
          <h1 className="display-title font-sans text-4xl sm:text-6xl lg:text-7xl xl:text-[5.4rem] font-bold text-white leading-[1.05] mb-8 sm:leading-none lg:leading-none">
            Engineering <em className="text-stone-200 font-normal">tomorrow.</em>
            <br /> Building what{" "}
            <span className="text-coral-400 font-serif italic font-normal">matters.</span>
          </h1>
          <p className="font-body text-base sm:text-xl lg:text-[1.35rem] text-stone-300/95 font-normal max-w-3xl leading-[1.65] mb-12 sm:leading-7">
            We engineer intelligent digital solutions by combining advanced software engineering,
            telemetry automation, and applied AI. With experience spanning industries from FinTech
            to AI-integrated digital healthcare, we transform complex challenges into scalable,
            resilient, and future-ready products.
          </p>
          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#work"
              className="group px-7 py-4 bg-white hover:bg-porcelain text-obsidian font-semibold text-xs tracking-wider uppercase rounded-full transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center gap-2.5"
            >
              <span>Explore our work</span>
              <svg
                className="w-4 h-4 text-obsidian transition-transform duration-300 group-hover:translate-y-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </a>
            <a
              href="#contact"
              className="group px-7 py-4 bg-white/[0.08] hover:bg-white/[0.15] text-white border border-white/20 hover:border-white/40 backdrop-blur-xl font-medium text-xs tracking-wider uppercase rounded-full transition-all shadow-xs flex items-center gap-2.5 hover:-translate-y-0.5"
            >
              <span>Let’s talk</span>
              <svg
                className="w-4 h-4 text-coral-400 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          </div>
        </div>
        {/* Subtle Bottom Hero Telemetry Strip */}
        <div className="hero-telemetry grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 max-w-5xl text-xs font-mono text-stone-200">
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>PAKISTAN-WIDE FLEET SUPPORT</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-coral-400" />
            <span>CONTINUOUS FINTECH VALIDATION</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
            <span>MIRPUR DOHS STUDIO • GLOBAL DEPLOYMENTS</span>
          </div>
        </div>
      </div>
    </section>
  );
}
