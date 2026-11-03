import { ContactForm } from "@/components/contact-form";
import { site } from "@/lib/site";

export function Contact() {
  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-title">
      <div className="wrap contact-inner">
        <div className="contact-intro">
          <p className="section-kicker">08 / NEXT STEP</p>
          <h2 id="contact-title">
            Have a challenge
            <br />
            worth <em>solving?</em>
          </h2>
          <p>
            Let’s bring the right people, ideas, and software engineering discipline together to make it
            happen.
          </p>
          <div className="contact-direct">
            <a href={`tel:${site.telephone}`}>+880 1757 049 684</a>
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
