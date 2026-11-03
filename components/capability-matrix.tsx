"use client";

import { useState, type ReactNode } from "react";

type Capability = {
  key: string;
  /** List card. */
  label: string;
  labelClass: string;
  meta: string;
  heading: string;
  summary: string;
  hoverBorderClass: string;
  /** Showcase panel. */
  badge: string;
  badgeClass: string;
  title: string;
  desc: string;
  tags: string[];
  borderClass: string;
};

const CAPABILITIES: Capability[] = [
  {
    key: "software",
    label: "01 / SOFTWARE DEVELOPMENT",
    labelClass: "text-indigo-600",
    meta: "FULL-STACK • APIS",
    heading: "Web platforms, backend systems, and high-concurrency databases.",
    summary: "High-throughput microservices, fault-tolerant relational schemas, and APIs.",
    hoverBorderClass: "",
    badge: "CAPABILITY FOCUS: 01 / 08",
    badgeClass: "text-indigo-600",
    title: "Software & Web Platform Engineering",
    desc: "Full-stack application development prioritizing latency reduction, relational database integrity, and high-concurrency microservices that run continuously in production.",
    tags: ["Go / Python / Node", "PostgreSQL", "Docker & K8s", "High Uptime"],
    borderClass: "border-l-indigo-500",
  },
  {
    key: "aiml",
    label: "02 / AI & MACHINE LEARNING",
    labelClass: "text-iris-600",
    meta: "APPLIED ML • LLMS",
    heading: "Models that change a decision, not notebooks trapped in a lab.",
    summary: "Document reasoning engines, predictive logistics, and natural language tooling.",
    hoverBorderClass: "hover:border-l-iris-500",
    badge: "CAPABILITY FOCUS: 02 / 08",
    badgeClass: "text-iris-600",
    title: "Applied AI & Machine Learning Systems",
    desc: "Deploying operational language models, classification pipelines, and anomaly detection algorithms that directly accelerate human decisions and eliminate manual review bottlenecks.",
    tags: ["Applied LLMs", "Time-series ML", "Vector Embeddings", "Model Observability"],
    borderClass: "border-l-iris-500",
  },
  {
    key: "fintech",
    label: "03 / FINTECH SOLUTIONS",
    labelClass: "text-coral-600",
    meta: "TRANSACTIONS • AUDIT",
    heading: "Transaction systems where correctness is the product.",
    summary: "Ledger accounting, USSD & mobile money channels, payment reconciliations.",
    hoverBorderClass: "hover:border-l-coral-500",
    badge: "CAPABILITY FOCUS: 03 / 08",
    badgeClass: "text-coral-600",
    title: "Fintech Platforms & Transaction Engines",
    desc: "High-availability ledger engines, automated bank reconciliations, USSD cellular gateways, and fraud-resistant financial conduits where correctness is non-negotiable.",
    tags: ["Double-Entry Ledgers", "USSD Integrations", "Real-Time Reconciliation", "Bank APIs"],
    borderClass: "border-l-coral-500",
  },
  {
    key: "iot",
    label: "04 / IOT ENGINEERING",
    labelClass: "text-emerald-600",
    meta: "TELEMETRY • GEOSPATIAL",
    heading: "From hardware device signal to an interface people can trust.",
    summary: "Real-time GPS streams, sensor filtering, and high-concurrency ingestion.",
    hoverBorderClass: "hover:border-l-emerald-500",
    badge: "CAPABILITY FOCUS: 04 / 08",
    badgeClass: "text-emerald-600",
    title: "IoT Engineering & Geospatial Telemetry",
    desc: "Low-latency GPS streaming, automated sensor jitter elimination, route reconstruction, and national fleet telemetry architectures handling hundreds of thousands of active devices.",
    tags: ["GPS Telemetry", "Fleet Visibility", "Geofencing", "Monitoring"],
    borderClass: "border-l-emerald-500",
  },
  {
    key: "automation",
    label: "05 / AUTOMATION ENGINEERING",
    labelClass: "text-marigold-600",
    meta: "WORKFLOWS • OPERATIONS",
    heading: "Remove repetitive human work — and keep it observable.",
    summary: "Synthetic user testing suites, automated finance runs, event-driven pipelines.",
    hoverBorderClass: "hover:border-l-marigold-500",
    badge: "CAPABILITY FOCUS: 05 / 08",
    badgeClass: "text-marigold-600",
    title: "Operational & Testing Automation",
    desc: "Custom daemons that orchestrate multi-step business procedures, eliminate error-prone data entry, and autonomously test production environments 24/7 without manual intervention.",
    tags: ["Continuous Validation", "Scheduled Daemons", "Workflow Synthesis", "Observable Ops"],
    borderClass: "border-l-marigold-500",
  },
  {
    key: "mobile",
    label: "06 / MOBILE APPLICATIONS",
    labelClass: "text-azure-600",
    meta: "ANDROID • IOS • FIELD",
    heading: "Mobile experiences built for real networks and real hands.",
    summary: "Offline-first local databases, field staff UX, and low-bandwidth resilience.",
    hoverBorderClass: "hover:border-l-azure-500",
    badge: "CAPABILITY FOCUS: 06 / 08",
    badgeClass: "text-azure-600",
    title: "Mobile Applications (iOS & Android)",
    desc: "Crafted with offline-first caching, graceful degradation in spotty network zones, and intuitive ergonomic interfaces for delivery personnel, field agents, and end consumers.",
    tags: ["Offline First", "Field-Tested UX", "React Native / Flutter", "Real-Time Sync"],
    borderClass: "border-l-azure-500",
  },
  {
    key: "healthcare",
    label: "07 / HEALTHCARE TECHNOLOGY",
    labelClass: "text-emerald-600",
    meta: "DIGITAL HEALTH • PRIVACY",
    heading: "Digital health software and data systems, engineered with care.",
    summary: "Clinical telemetry, HIPAA-informed patterns, and appointment platforms.",
    hoverBorderClass: "hover:border-l-emerald-500",
    badge: "CAPABILITY FOCUS: 07 / 08",
    badgeClass: "text-emerald-600",
    title: "Healthcare & Clinical Software Systems",
    desc: "Secure digital health software built around clinical workflows, patient record privacy, regulatory compliance, and dependable high-uptime scheduling architectures.",
    tags: ["Clinical Data", "Patient Privacy", "Appointment Dispatch", "High Reliability"],
    borderClass: "border-l-emerald-500",
  },
  {
    key: "agentic",
    label: "08 / AGENTIC FLOW",
    labelClass: "text-violet-600",
    meta: "PLANNING • TOOLS • REVIEW",
    heading: "AI agents that plan, use tools, and coordinate work.",
    summary: "Build observable multi-agent workflows with clear tasks, controlled tool access, and human review.",
    hoverBorderClass: "hover:border-l-violet-500",
    badge: "CAPABILITY FOCUS: 08 / 08",
    badgeClass: "text-violet-600",
    title: "Agentic Flow & Multi-Agent Systems",
    desc: "Design task-driven agent systems that plan steps, select tools, share context, and verify results with observable checkpoints and human approval where needed.",
    tags: ["Agent Orchestration", "Tool Access", "Shared Context", "Human Review"],
    borderClass: "border-l-violet-500",
  },
];

/** Copy shown before any capability is chosen (it differs slightly from the "software" entry). */
const INITIAL_DESC =
  "Full-stack application development prioritizing latency reduction, relational database integrity, and high-concurrency microservices that run flawlessly in production.";

const VISUALS: Record<string, ReactNode> = {
  software: (
    <svg
      className="w-48 h-48 text-indigo-600"
      viewBox="0 0 200 200"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <rect x="30" y="40" width="140" height="32" rx="6" fill="#EEF2FF" stroke="#4F46E5" />
      <rect x="30" y="84" width="140" height="32" rx="6" fill="#FFFFFF" stroke="#4F46E5" />
      <rect x="30" y="128" width="140" height="32" rx="6" fill="#FBF9F5" stroke="#4F46E5" />
      <circle cx="50" cy="56" r="4" fill="#4F46E5" />
      <circle cx="50" cy="100" r="4" fill="#10B981" />
      <circle cx="50" cy="144" r="4" fill="#F25533" />
      <path d="M100 72v12M100 116v12" stroke="#4F46E5" strokeDasharray="3 3" />
    </svg>
  ),
  aiml: (
    <svg
      className="w-48 h-48 text-iris-600"
      viewBox="0 0 200 200"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <circle cx="50" cy="60" r="10" fill="#EDE9FE" stroke="#8B5CF6" />
      <circle cx="150" cy="60" r="10" fill="#EDE9FE" stroke="#8B5CF6" />
      <circle cx="100" cy="100" r="14" fill="#8B5CF6" stroke="#7C3AED" />
      <circle cx="50" cy="140" r="10" fill="#EDE9FE" stroke="#8B5CF6" />
      <circle cx="150" cy="140" r="10" fill="#EDE9FE" stroke="#8B5CF6" />
      <path
        d="M58 66l34 26M142 66l-34 26M58 134l34-26M142 134l-34-26"
        stroke="#8B5CF6"
        strokeWidth="1.5"
      />
      <circle cx="100" cy="100" r="5" fill="#FFFFFF" />
    </svg>
  ),
  fintech: (
    <svg
      className="w-48 h-48 text-coral-500"
      viewBox="0 0 200 200"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <rect x="24" y="60" width="152" height="80" rx="8" fill="#FFF5F2" stroke="#F25533" />
      <path d="M24 90h152M50 115h30M130 115h20" stroke="#F25533" />
      <circle cx="50" cy="75" r="4" fill="#F25533" />
      <circle cx="64" cy="75" r="4" fill="#F59E0B" />
      <circle cx="150" cy="100" r="14" fill="#F25533" opacity="0.15" />
      <path d="M145 100h10M150 95v10" stroke="#F25533" strokeWidth="2" />
    </svg>
  ),
  iot: (
    <svg
      className="w-48 h-48 text-emerald-600"
      viewBox="0 0 200 200"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <circle cx="100" cy="100" r="60" stroke="#10B981" strokeDasharray="4 4" />
      <circle cx="100" cy="100" r="35" stroke="#10B981" />
      <circle cx="100" cy="100" r="8" fill="#10B981" />
      <path d="M100 40v20M100 140v20M40 100h20M140 100h20" stroke="#10B981" />
      <circle cx="130" cy="80" r="5" fill="#F25533" />
    </svg>
  ),
  automation: (
    <svg
      className="w-48 h-48 text-marigold-500"
      viewBox="0 0 200 200"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path
        d="M60 80a45 45 0 0 1 75-15M140 120a45 45 0 0 1-75 15"
        stroke="#F59E0B"
        strokeLinecap="round"
      />
      <polyline points="130,45 138,65 118,65" fill="none" stroke="#F59E0B" strokeLinecap="round" />
      <polyline points="70,155 62,135 82,135" fill="none" stroke="#F59E0B" strokeLinecap="round" />
      <rect x="85" y="85" width="30" height="30" rx="6" fill="#FEF3C7" stroke="#F59E0B" />
      <circle cx="100" cy="100" r="4" fill="#F59E0B" />
    </svg>
  ),
  mobile: (
    <svg
      className="w-48 h-48 text-azure-600"
      viewBox="0 0 200 200"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <rect x="65" y="30" width="70" height="140" rx="12" fill="#F0F9FF" stroke="#0EA5E9" />
      <line x1="90" y1="42" x2="110" y2="42" stroke="#0EA5E9" strokeLinecap="round" />
      <circle cx="100" cy="155" r="5" fill="#0EA5E9" />
      <rect
        x="75"
        y="55"
        width="50"
        height="80"
        rx="4"
        fill="#FFFFFF"
        stroke="#0EA5E9"
        strokeDasharray="2 2"
      />
      <path d="M82 75h36M82 90h26M82 105h30" stroke="#0284C7" strokeLinecap="round" />
    </svg>
  ),
  healthcare: (
    <svg
      className="w-48 h-48 text-emerald-600"
      viewBox="0 0 200 200"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <rect x="30" y="50" width="140" height="100" rx="10" fill="#ECFDF5" stroke="#10B981" />
      <path
        d="M45 100h25l10-25 15 50 15-30 10 10h35"
        stroke="#10B981"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.2"
      />
      <circle cx="100" cy="35" r="8" fill="#10B981" />
    </svg>
  ),
  agentic: (
    <svg
      className="w-48 h-48 text-violet-600"
      viewBox="0 0 200 200"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path
        d="M100 56v34M100 90L48 128M100 90v38M100 90l52 38"
        stroke="#8B5CF6"
        strokeDasharray="5 5"
        className="agent-flow-wire-path"
      />
      <rect x="64" y="24" width="72" height="36" rx="10" fill="#F5F3FF" stroke="#8B5CF6" />
      <circle cx="78" cy="42" r="4" fill="#8B5CF6" />
      <path d="M88 42h34" stroke="#8B5CF6" />
      <rect x="24" y="126" width="48" height="42" rx="9" fill="#EEF2FF" stroke="#6366F1" />
      <rect x="76" y="126" width="48" height="42" rx="9" fill="#F5F3FF" stroke="#8B5CF6" />
      <rect x="128" y="126" width="48" height="42" rx="9" fill="#ECFDF5" stroke="#10B981" />
      <circle cx="48" cy="146" r="6" fill="#6366F1" />
      <circle cx="100" cy="146" r="6" fill="#8B5CF6" />
      <circle cx="152" cy="146" r="6" fill="#10B981" />
    </svg>
  ),
};


/** Capability list with a sticky showcase that follows hover or click. */
export function CapabilityMatrix() {
  const [activeKey, setActiveKey] = useState("software");
  const [touched, setTouched] = useState(false);
  const active = CAPABILITIES.find((cap) => cap.key === activeKey) ?? CAPABILITIES[0];
  const select = (key: string) => {
    setActiveKey(key);
    setTouched(true);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start reveal">
      {/* Interactive Capabilities List (Left) */}
      <div className="lg:col-span-6 space-y-3" id="capabilities-list">
        {CAPABILITIES.map((cap) => (
          <div
            key={cap.key}
            className={`cap-card studio-card p-5 sm:p-6 rounded-2xl cursor-pointer transition-all border-l-4 ${cap.key === activeKey ? cap.borderClass : "border-l-transparent"} ${cap.hoverBorderClass}`}
            data-cap={cap.key}
            onMouseEnter={() => select(cap.key)}
            onClick={() => select(cap.key)}
          >
            <div className="flex items-center justify-between mb-1.5">
              <span className={`font-mono text-xs font-semibold ${cap.labelClass}`}>{cap.label}</span>
              <span className="text-[11px] font-mono text-ink-subtle">{cap.meta}</span>
            </div>
            <h3 className="text-base font-bold text-ink">{cap.heading}</h3>
            <p className="text-xs font-body text-ink-muted mt-1 leading-relaxed">{cap.summary}</p>
          </div>
        ))}
      </div>
      {/* Dynamic Schematic & Brief Showcase (Right) */}
      <div className="lg:col-span-6 lg:sticky lg:top-28">
        <div className="studio-card p-8 sm:p-10 rounded-[2rem] bg-white relative">
          <div className="flex items-center justify-between pb-4 border-b border-stone-200/80">
            <span id="showcase-badge" className={`font-mono text-xs font-semibold ${active.badgeClass}`}>
              {active.badge}
            </span>
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 ring-4 ring-emerald-500/15" />
          </div>
          {/* Graphic Schematic Box */}
          <div
            id="showcase-visual"
            className="w-full aspect-[4/3] bg-porcelain dot-matrix-light rounded-2xl my-6 border border-stone-200/80 flex items-center justify-center p-8 transition-all duration-300"
          >
            {VISUALS[active.key]}
          </div>
          {/* Text Brief */}
          <h4 id="showcase-title" className="text-xl sm:text-2xl font-bold text-ink mb-2.5">
            {active.title}
          </h4>
          <p id="showcase-desc" className="text-sm sm:text-base font-body text-ink-muted leading-relaxed mb-6 sm:leading-6">
            {touched ? active.desc : INITIAL_DESC}
          </p>
          {/* Details Tags */}
          <div
            id="showcase-tags"
            className="flex flex-wrap gap-2 pt-5 border-t border-stone-200/80 text-xs font-mono"
          >
            {active.tags.map((tag, index) =>
              !touched && index === active.tags.length - 1 ? (
                <span
                  key={tag}
                  className="px-3 py-1.5 rounded-full bg-indigo-50 text-indigo-700 font-semibold border border-indigo-200"
                >
                  {tag}
                </span>
              ) : (
                <span key={tag} className="px-3 py-1.5 rounded-full bg-porcelain-alt text-ink-muted">
                  {tag}
                </span>
              ),
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
