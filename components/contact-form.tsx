"use client";

import { useState } from "react";
import { CopyButton } from "@/components/copy-button";

/** Project inquiry form. Submissions are acknowledged in the page only; nothing is sent yet. */
export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  return (
    <form
      id="contact-form"
      className="space-y-6"
      onSubmit={(event) => {
        event.preventDefault();
        const form = event.currentTarget;
        setStatus("sending");
        window.setTimeout(() => {
          setStatus("sent");
          form.reset();
        }, 750);
      }}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-xs font-mono font-semibold text-ink mb-2">
            YOUR NAME *
          </label>{" "}
          <input
            type="text"
            id="name"
            required
            placeholder="Elena Vance"
            className="w-full bg-porcelain border border-stone-200/90 focus:border-ink focus:bg-white text-ink text-sm px-4 py-3.5 rounded-xl font-sans focus:outline-hidden focus:ring-2 focus:ring-ink/10 transition-all"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-xs font-mono font-semibold text-ink mb-2">
            BUSINESS EMAIL *
          </label>{" "}
          <input
            type="email"
            id="email"
            required
            placeholder="elena@company.com"
            className="w-full bg-porcelain border border-stone-200/90 focus:border-ink focus:bg-white text-ink text-sm px-4 py-3.5 rounded-xl font-sans focus:outline-hidden focus:ring-2 focus:ring-ink/10 transition-all"
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="service-select"
          className="block text-xs font-mono font-semibold text-ink mb-2"
        >
          PRIMARY FOCUS AREA
        </label>{" "}
        <select
          id="service-select"
          className="w-full bg-porcelain border border-stone-200/90 focus:border-ink focus:bg-white text-ink text-sm px-4 py-3.5 rounded-xl font-sans focus:outline-hidden focus:ring-2 focus:ring-ink/10 transition-all"
        >
          <option value="fintech">Fintech Platforms & Automation</option>
          <option value="iot">IoT & Geospatial Fleet Systems</option>
          <option value="software">Web Platform & Backend Engineering</option>
          <option value="aiml">Applied AI & Machine Learning</option>
          <option value="other">General Technical Architecture Brief</option>
        </select>
      </div>
      <div>
        <label htmlFor="message" className="block text-xs font-mono font-semibold text-ink mb-2">
          BRIEF US ON YOUR PROJECT *
        </label>{" "}
        <textarea
          id="message"
          rows={4}
          required
          placeholder="Tell us about your system requirements, timeline, or current challenges..."
          className="w-full bg-porcelain border border-stone-200/90 focus:border-ink focus:bg-white text-ink text-sm px-4 py-3.5 rounded-xl font-sans focus:outline-hidden focus:ring-2 focus:ring-ink/10 transition-all"
        />
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
        <div className="text-xs font-mono text-ink-muted">
          Prefer direct phone?{" "}
          <CopyButton
            text="+8801757049684"
            message="Phone number copied!"
            type="button"
            className="text-coral-600 font-semibold hover:underline"
          >
            +880 1757 049 684
          </CopyButton>
        </div>
        <button
          type="submit"
          id="submit-btn"
          disabled={status !== "idle"}
          className="w-full sm:w-auto px-8 py-4 bg-ink hover:bg-coral-600 text-white font-mono font-semibold text-xs tracking-wider uppercase rounded-full transition-colors duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
        >
          {status === "idle" ? (
            <>
              <span>Send Message</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </>
          ) : (
            <span>{status === "sending" ? "Sending..." : "Message Sent"}</span>
          )}
        </button>
      </div>
      {/* Message Sent Confirmation Banner */}
      {status === "sent" && (
        <div
          id="form-success"
          className="mt-4 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-mono"
        >
          <strong>Transmission Received:</strong> Thank you for reaching out. An Anchorblock
          technical lead will review your requirements and respond promptly.
        </div>
      )}
    </form>
  );
}
