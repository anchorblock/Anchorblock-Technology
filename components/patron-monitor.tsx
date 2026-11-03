"use client";

import { useState } from "react";

const ACTIVE_PROD = "px-3.5 py-1 rounded-full bg-ink text-white font-medium transition-all";
const ACTIVE_UAT = "px-3.5 py-1 rounded-full bg-emerald-600 text-white font-medium transition-all";
const INACTIVE = "px-3.5 py-1 rounded-full text-ink-muted hover:text-ink transition-all";

/** Illustrative Patron monitoring panel with a PROD/UAT view switcher. */
export function PatronMonitor() {
  const [env, setEnv] = useState<"prod" | "uat">("prod");
  return (
    <div className="lg:col-span-7 bg-porcelain dot-matrix-light border border-stone-200/90 rounded-2xl p-6 sm:p-7 shadow-inner font-sans">
      {/* Telemetry Top Bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-stone-200/80 mb-5">
        <div className="flex items-center gap-2.5">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="font-mono text-xs font-bold text-ink tracking-wide">
            PATRON / MONITORING VIEW PREVIEW
          </span>
        </div>
        {/* Environment switcher */}
        <div className="flex items-center gap-1 bg-white p-1 rounded-full border border-stone-200 text-xs font-mono shadow-xs">
          <button
            id="env-prod-btn"
            className={env === "prod" ? ACTIVE_PROD : INACTIVE}
            onClick={() => setEnv("prod")}
          >
            PROD
          </button>
          <button
            id="env-uat-btn"
            className={env === "uat" ? ACTIVE_UAT : INACTIVE}
            onClick={() => setEnv("uat")}
          >
            UAT
          </button>
        </div>
      </div>
      {/* Stats Row */}
      <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-5">
        <div className="bg-white/95 p-3.5 rounded-xl border border-stone-200/80 shadow-xs">
          <span className="text-[10px] font-mono text-ink-subtle block uppercase tracking-wider">
            AUTOMATION COVERAGE
          </span>{" "}
          <span
            id="patron-uptime"
            className="text-sm sm:text-base font-bold text-emerald-600 font-mono mt-1 block"
          >
            App + USSD
          </span>
        </div>
        <div className="bg-white/95 p-3.5 rounded-xl border border-stone-200/80 shadow-xs">
          <span className="text-[10px] font-mono text-ink-subtle block uppercase tracking-wider">
            SUPPORT WINDOW
          </span>{" "}
          <span
            id="patron-cadence"
            className="text-lg sm:text-xl font-bold text-ink font-mono mt-0.5 block"
          >
            24/7
          </span>
        </div>
        <div className="bg-white/95 p-3.5 rounded-xl border border-stone-200/80 shadow-xs">
          <span className="text-[10px] font-mono text-ink-subtle block uppercase tracking-wider">
            MONITORING
          </span>{" "}
          <span
            id="patron-nodes"
            className="text-sm sm:text-base font-bold text-indigo-600 font-mono mt-1 block"
          >
            Centralized
          </span>
        </div>
      </div>
      {/* Sparkline Graph */}
      <div className="bg-white/95 p-4 rounded-xl border border-stone-200/80 shadow-xs mb-5">
        <div className="flex items-center justify-between text-xs font-mono text-ink-subtle mb-2">
          <span>ILLUSTRATIVE AUTOMATION SIGNALS</span>
          <span id="patron-latency" className="text-emerald-600 font-semibold">
            {env === "prod" ? "APP + USSD" : "TEST VIEW"}
          </span>
        </div>
        <svg className="w-full h-16" viewBox="0 0 320 60" preserveAspectRatio="none">
          <defs>
            <linearGradient id="coralSpark" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#F25533" stopOpacity="0.22" />
              <stop offset="100%" stopColor="#F25533" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M0,45 C15,40 25,38 40,42 C55,46 65,28 80,32 C95,36 105,20 120,25 C135,30 145,14 160,19 C175,24 185,12 200,16 C215,20 225,10 240,14 C255,18 265,6 280,11 C295,16 305,6 320,9 L320,60 L0,60 Z"
            fill="url(#coralSpark)"
          />
          <path
            d="M0,45 C15,40 25,38 40,42 C55,46 65,28 80,32 C95,36 105,20 120,25 C135,30 145,14 160,19 C175,24 185,12 200,16 C215,20 225,10 240,14 C255,18 265,6 280,11 C295,16 305,6 320,9"
            fill="none"
            stroke="#F25533"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <circle cx="318" cy="9" r="3.5" fill="#F25533" className="animate-ping" />
          <circle cx="318" cy="9" r="3" fill="#F25533" />
        </svg>
      </div>
      {/* Checks Checklist */}
      <div className="space-y-2.5 text-xs font-mono">
        <div className="flex items-center justify-between p-3 bg-white/95 rounded-xl border border-stone-200/80 shadow-xs">
          <span className="flex items-center gap-2.5 text-ink font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-500" /> App • Biometric Login
          </span>
          <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-semibold border border-emerald-200">
            PASS [200 OK]
          </span>
        </div>
        <div className="flex items-center justify-between p-3 bg-white/95 rounded-xl border border-stone-200/80 shadow-xs">
          <span className="flex items-center gap-2.5 text-ink font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-500" /> USSD • Send Money Protocol
          </span>
          <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-semibold border border-emerald-200">
            PASS [200 OK]
          </span>
        </div>
      </div>
    </div>
  );
}
