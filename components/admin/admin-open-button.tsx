"use client";

import type { ComponentProps } from "react";
import { openAdmin } from "@/lib/ui-events";

export function AdminOpenButton({ onClick, ...props }: ComponentProps<"button">) {
  return (
    <button
      {...props}
      onClick={(event) => {
        onClick?.(event);
        openAdmin();
      }}
    />
  );
}
