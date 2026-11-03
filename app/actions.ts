"use server";

import { createClient } from "@supabase/supabase-js";
import { refresh, updateTag } from "next/cache";
import { PUBLIC_CONTENT_TAG } from "@/lib/content";
import { getSupabaseConfig } from "@/lib/supabase/config";

/**
 * Called by the admin workspace after it changes content or careers, so the statically rendered page
 * shows the change immediately. Only provisioned administrators (public.site_admins) can trigger it.
 */
export async function refreshPublicContent(accessToken: string): Promise<{ ok: boolean }> {
  const config = getSupabaseConfig();
  if (!config || typeof accessToken !== "string" || !accessToken) return { ok: false };

  const supabase = createClient(config.url, config.publishableKey, {
    auth: { persistSession: false, autoRefreshToken: false, detectSessionInUrl: false },
    global: { headers: { Authorization: `Bearer ${accessToken}` } },
  });
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser(accessToken);
  if (error || !user) return { ok: false };

  const { data: admin } = await supabase
    .from("site_admins")
    .select("user_id")
    .eq("user_id", user.id)
    .maybeSingle();
  if (!admin) return { ok: false };

  updateTag(PUBLIC_CONTENT_TAG);
  refresh();
  return { ok: true };
}
