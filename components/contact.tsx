import { ContactForm } from "@/components/contact-form";

export function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32 bg-porcelain">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 reveal">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-coral-600 font-semibold mb-3">
            <span className="w-2 h-2 rounded-full bg-coral-500" />
            <span>08 / NEXT STEP</span>
          </div>
          <h2 className="display-title text-3xl sm:text-5xl lg:text-6xl font-bold text-ink mb-4">
            Have a challenge <em>worth solving?</em>
          </h2>
          <p className="text-ink-muted font-body text-base sm:text-lg max-w-lg mx-auto leading-relaxed sm:leading-7">
            Let’s bring the right people, ideas, and software engineering discipline together to
            make it happen.
          </p>
        </div>
        {/* Clean White Form Card */}
        <div className="studio-card p-8 sm:p-12 rounded-[2rem] bg-white">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
