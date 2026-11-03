import { createClient } from "@supabase/supabase-js";
import { cacheLife, cacheTag } from "next/cache";
import { getSupabaseConfig } from "@/lib/supabase/config";

/** Cache tag for everything the admin workspace publishes; see app/actions.ts. */
export const PUBLIC_CONTENT_TAG = "public-content";

export type ContentItem = {
  id: string;
  section_title: string;
  title: string;
  description: string;
  image_url: string | null;
  link_url: string | null;
  link_label: string | null;
  sort_order: number;
};

export type CareerPost = {
  id: string;
  title: string;
  team_name: string;
  employment_type: string;
  location: string;
  description: string;
  apply_email: string;
  closes_on: string | null;
  created_at: string;
};

export type Result<T> = { status: "ok"; data: T[] } | { status: "error" } | { status: "unconfigured" };

function publicClient() {
  const config = getSupabaseConfig();
  if (!config) return null;
  return createClient(config.url, config.publishableKey, {
    auth: { persistSession: false, autoRefreshToken: false, detectSessionInUrl: false },
  });
}

export async function getPublishedContent(): Promise<Result<ContentItem>> {
  "use cache";
  cacheTag(PUBLIC_CONTENT_TAG);
  const supabase = publicClient();
  if (!supabase) {
    cacheLife("hours");
    return { status: "unconfigured" };
  }
  const { data, error } = await supabase
    .from("site_content")
    .select("id,section_title,title,description,image_url,link_url,link_label,sort_order")
    .eq("published", true)
    .order("sort_order")
    .order("created_at");
  if (error) {
    console.error("Public site content could not be loaded:", error.message);
    cacheLife("minutes");
    return { status: "error" };
  }
  cacheLife("hours");
  return { status: "ok", data };
}

export async function getOpenCareerPosts(): Promise<Result<CareerPost>> {
  "use cache";
  cacheTag(PUBLIC_CONTENT_TAG);
  const supabase = publicClient();
  if (!supabase) {
    cacheLife("hours");
    return { status: "unconfigured" };
  }
  const { data, error } = await supabase
    .from("career_posts")
    .select("id,title,team_name,employment_type,location,description,apply_email,closes_on,created_at")
    .eq("published", true)
    .order("created_at", { ascending: false });
  if (error) {
    console.error("Career posts could not be loaded:", error.message);
    cacheLife("minutes");
    return { status: "error" };
  }
  // Roles stay listed through their deadline in Dhaka time (UTC+6).
  const today = new Date(Date.now() + 6 * 60 * 60 * 1000).toISOString().slice(0, 10);
  cacheLife("hours");
  return { status: "ok", data: data.filter((role) => !role.closes_on || role.closes_on >= today) };
}
