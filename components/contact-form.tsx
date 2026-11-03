"use client";

import { useState } from "react";
import { site } from "@/lib/site";

const FOCUS_AREAS = [
  "Fintech Platforms & Automation",
  "IoT & Geospatial Fleet Systems",
  "Web Platform & Backend Engineering",
  "Applied AI & Machine Learning",
  "General Technical Architecture",
  "Other",
];

function Label({ children }: { children: string }) {
  return (
    <span className="form-label-text">
      {children} <span className="required-marker" aria-hidden="true">*</span>
    </span>
  );
}

/** Project enquiry form. Submitting opens the visitor's email app with the enquiry ready to send. */
export function ContactForm() {
  const [status, setStatus] = useState("");

  return (
    <form
      className="contact-form"
      id="contact-form"
      onSubmit={(event) => {
        event.preventDefault();
        const form = new FormData(event.currentTarget);
        const subject = `Website enquiry — ${form.get("focus")}`;
        const body = [
          `Name: ${form.get("name")}`,
          `Business email: ${form.get("email")}`,
          `Focus area: ${form.get("focus")}`,
          "",
          "Project brief:",
          form.get("brief"),
        ].join("\n");
        setStatus("Your email app is opening with your message ready to send.");
        window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      }}
    >
      <div className="form-row">
        <label>
          <Label>Your name</Label>
          <input name="name" autoComplete="name" required />
        </label>
        <label>
          <Label>Business email</Label>
          <input name="email" type="email" autoComplete="email" required />
        </label>
      </div>
      <label>
        <Label>Primary focus area</Label>
        <select name="focus" required defaultValue="">
          <option value="" disabled>
            Select an area
          </option>
          {FOCUS_AREAS.map((area) => (
            <option key={area}>{area}</option>
          ))}
        </select>
      </label>
      <label>
        <Label>Brief us on your project</Label>
        <textarea name="brief" rows={4} required />
      </label>
      <div className="form-submit-row">
        <button className="button button-primary" type="submit">
          Send message <span aria-hidden="true">↗</span>
        </button>
        <p>Opens your email app with your message ready to send.</p>
      </div>
      <p className="form-status" role="status" aria-live="polite">
        {status}
      </p>
    </form>
  );
}
