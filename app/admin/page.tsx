import type { Metadata } from "next";
import { AdminWorkspace } from "@/components/admin/admin-workspace";
import { getSupabaseConfig } from "@/lib/supabase/config";

/** Not linked from the site; kept out of search results here and by the X-Robots-Tag header in next.config. */
export const metadata: Metadata = {
  title: "Admin",
  robots: { index: false, follow: false, nocache: true, googleBot: { index: false, follow: false } },
  alternates: { canonical: null },
  openGraph: null,
  twitter: null,
};

export default function AdminPage() {
  return <AdminWorkspace config={getSupabaseConfig()} />;
}
