import { AdminOpenButton } from "@/components/admin/admin-open-button";
import { CopyButton } from "@/components/copy-button";

export function SiteFooter() {
  return (
    <footer className="relative z-10 border-t border-stone-200/80 bg-white pt-16 pb-12 font-sans text-xs text-ink-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-stone-200/80">
          {/* Brand & Mission */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-porcelain border border-stone-200 flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-ink"
                  viewBox="0 0 28 28"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  <circle cx="14" cy="5.6" r="2.6" />
                  <path d="M14 8.4V24M7.4 12.8h13.2M4.2 16.6c0 4.2 4.4 6.7 9.8 6.7s9.8-2.5 9.8-6.7" />
                </svg>
              </div>
              <div>
                <span className="font-bold text-sm text-ink tracking-tight">Anchorblock</span>{" "}
                <span className="text-[10px] font-mono text-ink-subtle ml-1">Technology LLC</span>
              </div>
            </div>
            <p className="text-ink-muted font-body text-sm max-w-sm leading-relaxed">
              Software, high-concurrency data systems, and automation studio. Built in Dhaka, active
              in global production.
            </p>
            <p className="font-serif italic text-base text-coral-600">
              Quietly powerful. Technically extraordinary.
            </p>
          </div>
          {/* Quick Nav */}
          <div className="lg:col-span-2 space-y-2.5">
            <p className="font-mono font-semibold text-ink text-xs uppercase mb-3">Studio</p>
            <a href="#top" className="block text-ink-muted hover:text-ink transition-colors">
              Home
            </a>{" "}
            <a href="#philosophy" className="block text-ink-muted hover:text-ink transition-colors">
              Philosophy
            </a>{" "}
            <a href="#work" className="block text-ink-muted hover:text-ink transition-colors">
              Selected Work
            </a>{" "}
            <a
              href="#capabilities"
              className="block text-ink-muted hover:text-ink transition-colors"
            >
              Capabilities
            </a>{" "}
            <a href="#careers" className="block text-ink-muted hover:text-ink transition-colors">
              Careers
            </a>{" "}
            <AdminOpenButton
              type="button"
              data-admin-open=""
              className="block text-left text-indigo-700 hover:text-indigo-900 transition-colors"
            >
              Admin login
            </AdminOpenButton>
          </div>
          {/* Capabilities Nav */}
          <div className="lg:col-span-2 space-y-2.5">
            <p className="font-mono font-semibold text-ink text-xs uppercase mb-3">Capabilities</p>
            <span className="block text-ink-muted">Software Development</span>{" "}
            <span className="block text-ink-muted">AI & Machine Learning</span>{" "}
            <span className="block text-ink-muted">Fintech Solutions</span>{" "}
            <span className="block text-ink-muted">IoT Engineering</span>{" "}
            <span className="block text-ink-muted">Automation</span>
          </div>
          {/* Address & Direct Contact */}
          <div className="lg:col-span-3 space-y-3 font-mono text-xs">
            <p className="font-mono font-semibold text-ink uppercase mb-3">Office</p>
            <address className="not-italic text-ink-muted font-sans leading-relaxed">
              House 432, Road 6<br /> Mirpur DOHS, Dhaka-1216, Bangladesh
            </address>
            <div className="pt-1">
              <CopyButton
                text="+8801757049684"
                message="Phone copied!"
                className="text-coral-600 font-semibold hover:underline flex items-center gap-1"
              >
                <span>+880 1757 049 684</span>
              </CopyButton>
            </div>
            <p className="text-ink-subtle text-[11px]">Incorporation Reg. C-182691</p>
          </div>
        </div>
        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-ink-subtle">
          <p>
            © <span id="year-label">2026</span> Anchorblock Technology LLC. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span>Mirpur DOHS: 23.83719° N / 90.36898° E</span>
            <span>•</span>
            <a
              href="#top"
              className="text-ink hover:text-coral-600 transition-colors font-semibold"
            >
              Back to top ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
