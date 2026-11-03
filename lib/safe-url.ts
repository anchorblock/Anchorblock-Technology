/** Allows only http(s) URLs, plus same-site paths when `allowRelative` is set. */
export function safeUrl(value: string | null | undefined, allowRelative = false) {
  if (!value) return "";
  const raw = String(value).trim();
  if (allowRelative && raw.startsWith("/") && !raw.startsWith("//")) return raw;
  try {
    const parsed = new URL(raw);
    return parsed.protocol === "https:" || parsed.protocol === "http:" ? parsed.href : "";
  } catch {
    return "";
  }
}
