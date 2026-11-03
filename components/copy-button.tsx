"use client";

import type { ComponentProps } from "react";
import { showToast } from "@/lib/ui-events";

async function copyText(text: string) {
  try {
    await navigator.clipboard.writeText(text);
    return;
  } catch {
    // Fall back for browsers or contexts without the async clipboard API.
  }
  const textArea = document.createElement("textarea");
  textArea.value = text;
  textArea.style.position = "fixed";
  textArea.style.opacity = "0";
  document.body.appendChild(textArea);
  textArea.select();
  try {
    document.execCommand("copy");
  } catch (err) {
    console.warn("Copy fallback failed", err);
  }
  document.body.removeChild(textArea);
}

/** Copies `text` to the clipboard and confirms with the page toast. */
export function CopyButton({
  text,
  message,
  type = "button",
  ...props
}: ComponentProps<"button"> & { text: string; message: string }) {
  return (
    <button
      {...props}
      type={type}
      onClick={() => {
        void copyText(text);
        showToast(message);
      }}
    />
  );
}
