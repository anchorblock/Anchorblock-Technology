export type SupabaseConfig = { url: string; publishableKey: string };

/**
 * Supabase project URL and publishable (browser-safe) key. Either naming pair is accepted, matching the
 * original deployment. Never put a secret or service-role key in these variables.
 */
export function getSupabaseConfig(): SupabaseConfig | null {
  const url = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
  const publishableKey =
    process.env.SUPABASE_PUBLISHABLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;
  return url && publishableKey ? { url, publishableKey } : null;
}
