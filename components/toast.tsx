"use client";

import { useEffect, useState } from "react";
import { TOAST_EVENT } from "@/lib/ui-events";

export function Toast() {
  const [message, setMessage] = useState("Copied to clipboard");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let timer: number | undefined;
    const onToast = (event: Event) => {
      setMessage((event as CustomEvent<string>).detail || "Copied to clipboard");
      setVisible(true);
      window.clearTimeout(timer);
      timer = window.setTimeout(() => setVisible(false), 2400);
    };
    window.addEventListener(TOAST_EVENT, onToast);
    return () => {
      window.removeEventListener(TOAST_EVENT, onToast);
      window.clearTimeout(timer);
    };
  }, []);

  return (
    <div
      id="toast"
      className={`fixed bottom-6 right-6 z-50 ${visible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"} transition-all duration-300 pointer-events-none bg-obsidian/95 backdrop-blur-md border border-white/15 text-white font-mono text-xs px-5 py-3 rounded-full shadow-2xl flex items-center gap-2.5`}
    >
      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
      <span id="toast-message">{message}</span>
    </div>
  );
}
