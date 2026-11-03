"use client";

import type { SupabaseClient } from "@supabase/supabase-js";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { refreshPublicContent } from "@/app/actions";
import { safeUrl } from "@/lib/safe-url";
import type { SupabaseConfig } from "@/lib/supabase/config";
import { ADMIN_OPEN_EVENT } from "@/lib/ui-events";

type Status = { message: string; kind: "info" | "error" | "success" };
type Row = { id: string; title: string; published: boolean; section_title?: string };
type Lists = { content: Row[] | null; careers: Row[] | null };

const STATUS_STYLES: Record<Status["kind"], string> = {
  error: "border-rose-200 bg-rose-50 text-rose-900",
  success: "border-emerald-200 bg-emerald-50 text-emerald-900",
  info: "border-indigo-100 bg-indigo-50 text-indigo-900",
};

const text = (form: HTMLFormElement, name: string) =>
  String(new FormData(form).get(name) ?? "").trim();

function AdminRow({
  title,
  published,
  onToggle,
  onDelete,
}: {
  title: string;
  published: boolean;
  onToggle: () => void;
  onDelete: () => void;
}) {
  return (
    <div className="flex items-center justify-between gap-3 rounded-xl bg-porcelain px-3 py-2.5">
      <div className="min-w-0">
        <p className="truncate text-xs font-semibold text-ink">{title}</p>
        <p className="mt-0.5 font-mono text-[9px] text-ink-subtle">{published ? "Published" : "Draft"}</p>
      </div>
      <div className="flex shrink-0 items-center gap-2">
        <button
          type="button"
          className="text-[10px] font-semibold text-indigo-700 hover:text-indigo-900"
          onClick={onToggle}
        >
          {published ? "Unpublish" : "Publish"}
        </button>
        <button
          type="button"
          className="text-[10px] font-semibold text-rose-700 hover:text-rose-900"
          onClick={onDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

/**
 * Sign-in and publishing workspace for site content and career circulars. Supabase row-level security
 * enforces who may write; supabase-js is only downloaded once the panel is first opened.
 */
export function AdminPanel({ config }: { config: SupabaseConfig | null }) {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<Status | null>(null);
  const [authorized, setAuthorized] = useState(false);
  const [signingIn, setSigningIn] = useState(false);
  const [lists, setLists] = useState<Lists>({ content: null, careers: null });
  const clientRef = useRef<Promise<SupabaseClient> | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const report = (message: string, kind: Status["kind"] = "info") => setStatus({ message, kind });

  const getClient = () => {
    if (!config) return null;
    clientRef.current ??= import("@supabase/supabase-js").then(({ createClient }) =>
      createClient(config.url, config.publishableKey, {
        auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: false },
      }),
    );
    return clientRef.current;
  };

  async function verifyAdmin(supabase: SupabaseClient) {
    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();
    if (userError || !user) return false;
    const { data, error } = await supabase
      .from("site_admins")
      .select("user_id")
      .eq("user_id", user.id)
      .maybeSingle();
    return !error && Boolean(data);
  }

  async function loadAdminLists(supabase: SupabaseClient) {
    const [contentResult, careerResult] = await Promise.all([
      supabase.from("site_content").select("id,section_title,title,published").order("created_at", { ascending: false }),
      supabase.from("career_posts").select("id,title,published").order("created_at", { ascending: false }),
    ]);
    if (contentResult.error) report(`Could not load content: ${contentResult.error.message}`, "error");
    if (careerResult.error) report(`Could not load careers: ${careerResult.error.message}`, "error");
    setLists({
      content: contentResult.error ? null : contentResult.data,
      careers: careerResult.error ? null : careerResult.data,
    });
  }

  /** Reloads the admin lists and asks the server to re-render the public page with the change. */
  async function afterChange(supabase: SupabaseClient) {
    const {
      data: { session },
    } = await supabase.auth.getSession();
    await Promise.all([
      loadAdminLists(supabase),
      session ? refreshPublicContent(session.access_token) : Promise.resolve(),
    ]);
  }

  async function enterWorkspace(supabase: SupabaseClient) {
    const isAdmin = await verifyAdmin(supabase);
    setAuthorized(isAdmin);
    if (!isAdmin) {
      await supabase.auth.signOut();
      report("This account is not on the Anchorblock admin list.", "error");
      return;
    }
    report("Signed in. Changes publish according to the selected publish setting.", "success");
    await loadAdminLists(supabase);
  }

  // Open from any "Admin" button; on first open, resume an existing session.
  useEffect(() => {
    const onOpen = () => {
      setOpen(true);
      const client = getClient();
      if (!client) {
        report("Admin publishing needs Supabase environment variables in Vercel. See README.md for setup.", "error");
        return;
      }
      void client.then(async (supabase) => {
        const {
          data: { session },
        } = await supabase.auth.getSession();
        if (session && !authorized) await enterWorkspace(supabase);
      });
    };
    window.addEventListener(ADMIN_OPEN_EVENT, onOpen);
    return () => window.removeEventListener(ADMIN_OPEN_EVENT, onOpen);
  });

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", open);
    if (!open) return;
    emailRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  async function signIn(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const client = getClient();
    if (!client) {
      report("Admin publishing is not configured yet. Add the Supabase Vercel environment variables and redeploy.", "error");
      return;
    }
    const supabase = await client;
    setSigningIn(true);
    const { error } = await supabase.auth.signInWithPassword({
      email: emailRef.current?.value.trim() ?? "",
      password: passwordRef.current?.value ?? "",
    });
    setSigningIn(false);
    if (error) return report(error.message, "error");
    await enterWorkspace(supabase);
  }

  async function signOut() {
    const client = getClient();
    if (client) await (await client).auth.signOut();
    setAuthorized(false);
    if (passwordRef.current) passwordRef.current.value = "";
    report("You have signed out.", "success");
  }

  async function addContent(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const client = getClient();
    if (!authorized || !client) return report("Sign in with an administrator account first.", "error");
    const payload = {
      section_title: text(form, "section_title"),
      title: text(form, "title"),
      description: text(form, "description"),
      image_url: text(form, "image_url") || null,
      link_url: text(form, "link_url") || null,
      link_label: text(form, "link_label") || null,
      published: new FormData(form).has("published"),
      sort_order: 0,
    };
    if (payload.image_url && !safeUrl(payload.image_url, true))
      return report("Image URL must use HTTPS or a local path.", "error");
    if (payload.link_url && !safeUrl(payload.link_url)) return report("Links must use HTTP or HTTPS.", "error");
    const supabase = await client;
    const { error } = await supabase.from("site_content").insert(payload);
    if (error) return report(error.message, "error");
    form.reset();
    report("Content added.", "success");
    await afterChange(supabase);
  }

  async function addCareer(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const client = getClient();
    if (!authorized || !client) return report("Sign in with an administrator account first.", "error");
    const payload = {
      title: text(form, "title"),
      team_name: text(form, "team_name"),
      employment_type: text(form, "employment_type"),
      location: text(form, "location"),
      description: text(form, "description"),
      apply_email: text(form, "apply_email"),
      closes_on: text(form, "closes_on") || null,
      published: new FormData(form).has("published"),
    };
    const supabase = await client;
    const { error } = await supabase.from("career_posts").insert(payload);
    if (error) return report(error.message, "error");
    form.reset();
    report("Career circular posted.", "success");
    await afterChange(supabase);
  }

  async function update(table: "site_content" | "career_posts", row: Row) {
    const supabase = await getClient();
    if (!supabase) return;
    const { error } = await supabase.from(table).update({ published: !row.published }).eq("id", row.id);
    if (error) report(error.message, "error");
    else await afterChange(supabase);
  }

  async function remove(table: "site_content" | "career_posts", row: Row, question: string) {
    const supabase = await getClient();
    if (!supabase || !window.confirm(question)) return;
    const { error } = await supabase.from(table).delete().eq("id", row.id);
    if (error) report(error.message, "error");
    else await afterChange(supabase);
  }

  return (
    <div
      ref={modalRef}
      id="admin-modal"
      className={`admin-modal${open ? "" : " hidden"}`}
      aria-hidden={!open}
      onClick={(event) => {
        if (event.target === modalRef.current) setOpen(false);
      }}
    >
      <section className="admin-dialog" role="dialog" aria-modal="true" aria-labelledby="admin-title">
        <div className="sticky top-0 z-10 flex items-center justify-between gap-4 border-b border-stone-200 bg-white/95 px-5 py-4 sm:px-7 backdrop-blur-xl">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-700">
              <svg className="h-5 w-5" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path
                  d="M10 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM4 17v-1a6 6 0 0 1 12 0v1H4Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div>
              <h2 id="admin-title" className="font-bold text-ink">
                Anchorblock Admin
              </h2>
              <p className="text-[11px] font-mono text-ink-subtle">Content &amp; careers</p>
            </div>
          </div>
          <button
            type="button"
            id="admin-close"
            className="rounded-full border border-stone-200 bg-white px-3 py-2 text-xs font-semibold text-ink-muted hover:text-ink"
            aria-label="Close admin panel"
            onClick={() => setOpen(false)}
          >
            Close
          </button>
        </div>
        <div className="p-5 sm:p-7">
          <p
            id="admin-status"
            className={`admin-status mb-5 rounded-xl border px-4 py-3 text-sm ${STATUS_STYLES[status?.kind ?? "info"]}`}
            role="status"
            aria-live="polite"
          >
            {status?.message}
          </p>
          <div id="admin-login-view" className={`mx-auto max-w-md py-8${authorized ? " hidden" : ""}`}>
            <p className="mb-2 font-mono text-[10px] font-semibold tracking-[.18em] text-indigo-600">
              SECURE SIGN IN
            </p>
            <h3 className="mb-3 text-3xl font-medium tracking-tight text-ink">Manage the studio site.</h3>
            <p className="mb-7 text-sm leading-relaxed text-ink-muted">
              Sign in with an administrator account provisioned for Anchorblock.
            </p>
            <form id="admin-login-form" className="space-y-4" onSubmit={signIn}>
              <div>
                <label className="admin-label" htmlFor="admin-email">
                  Email
                </label>
                <input ref={emailRef} className="admin-field" type="email" id="admin-email" autoComplete="username" required />
              </div>
              <div>
                <label className="admin-label" htmlFor="admin-password">
                  Password
                </label>
                <input
                  ref={passwordRef}
                  className="admin-field"
                  type="password"
                  id="admin-password"
                  autoComplete="current-password"
                  required
                />
              </div>
              <button
                className="w-full rounded-xl bg-ink px-5 py-3.5 text-sm font-semibold text-white hover:bg-indigo-700 transition-colors"
                type="submit"
                disabled={signingIn}
              >
                {signingIn ? "Signing in…" : "Sign in"}
              </button>
            </form>
          </div>
          <div id="admin-workspace" className={authorized ? "" : "hidden"}>
            <div className="mb-7 flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="font-mono text-[10px] font-semibold tracking-[.18em] text-emerald-700">
                  CONTENT STUDIO
                </p>
                <h3 className="mt-1 text-xl font-bold text-ink">Publish site updates</h3>
              </div>
              <button
                id="admin-signout"
                type="button"
                className="rounded-full border border-stone-200 bg-white px-4 py-2 text-xs font-semibold text-ink-muted hover:text-ink"
                onClick={signOut}
              >
                Sign out
              </button>
            </div>
            <div className="grid gap-6 lg:grid-cols-2">
              <section className="rounded-2xl border border-stone-200 bg-white p-5 sm:p-6">
                <h4 className="mb-1 text-base font-bold text-ink">Add to a section</h4>
                <p className="mb-5 text-xs text-ink-muted">
                  Use an existing section name or enter a new one to create a new page section.
                </p>
                <form id="content-form" className="space-y-4" onSubmit={addContent}>
                  <div>
                    <label className="admin-label" htmlFor="content-section">
                      Section name
                    </label>
                    <input
                      className="admin-field"
                      id="content-section"
                      name="section_title"
                      maxLength={80}
                      placeholder="e.g. Research & Insights"
                      required
                    />
                  </div>
                  <div>
                    <label className="admin-label" htmlFor="content-title">
                      Card title
                    </label>
                    <input className="admin-field" id="content-title" name="title" maxLength={140} required />
                  </div>
                  <div>
                    <label className="admin-label" htmlFor="content-description">
                      Description
                    </label>
                    <textarea
                      className="admin-field"
                      id="content-description"
                      name="description"
                      rows={4}
                      maxLength={2000}
                      required
                    />
                  </div>
                  <div>
                    <label className="admin-label" htmlFor="content-image">
                      Image URL (optional)
                    </label>
                    <input
                      className="admin-field"
                      type="text"
                      inputMode="url"
                      id="content-image"
                      name="image_url"
                      placeholder="https://… or /image.png"
                    />
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div>
                      <label className="admin-label" htmlFor="content-link">
                        Link URL (optional)
                      </label>
                      <input className="admin-field" type="url" id="content-link" name="link_url" placeholder="https://…" />
                    </div>
                    <div>
                      <label className="admin-label" htmlFor="content-link-label">
                        Link label
                      </label>
                      <input
                        className="admin-field"
                        id="content-link-label"
                        name="link_label"
                        maxLength={40}
                        placeholder="Learn more"
                      />
                    </div>
                  </div>
                  <label className="flex items-center gap-2 text-xs font-medium text-ink">
                    <input type="checkbox" id="content-published" name="published" defaultChecked className="accent-indigo-600" />{" "}
                    Publish immediately
                  </label>
                  <button
                    type="submit"
                    className="w-full rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white hover:bg-indigo-700"
                  >
                    Add content
                  </button>
                </form>
                <div id="admin-content-list" className="mt-6 space-y-2 border-t border-stone-200 pt-4">
                  {lists.content && (
                    <>
                      <p className="mb-2 font-mono text-[10px] font-semibold uppercase tracking-wider text-ink-subtle">
                        Managed content
                      </p>
                      {lists.content.length === 0 ? (
                        <p className="text-xs text-ink-subtle">No custom content yet.</p>
                      ) : (
                        lists.content.map((item) => (
                          <AdminRow
                            key={item.id}
                            title={`${item.section_title} · ${item.title}`}
                            published={item.published}
                            onToggle={() => update("site_content", item)}
                            onDelete={() => remove("site_content", item, `Delete “${item.title}” from ${item.section_title}?`)}
                          />
                        ))
                      )}
                    </>
                  )}
                </div>
              </section>
              <section className="rounded-2xl border border-stone-200 bg-white p-5 sm:p-6">
                <h4 className="mb-1 text-base font-bold text-ink">Post a career circular</h4>
                <p className="mb-5 text-xs text-ink-muted">Published roles appear in the public Careers section.</p>
                <form id="career-form" className="space-y-4" onSubmit={addCareer}>
                  <div>
                    <label className="admin-label" htmlFor="career-title">
                      Position title
                    </label>
                    <input className="admin-field" id="career-title" name="title" maxLength={140} required />
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div>
                      <label className="admin-label" htmlFor="career-team">
                        Team / department
                      </label>
                      <input
                        className="admin-field"
                        id="career-team"
                        name="team_name"
                        maxLength={80}
                        placeholder="Engineering"
                        required
                      />
                    </div>
                    <div>
                      <label className="admin-label" htmlFor="career-type">
                        Employment type
                      </label>
                      <select className="admin-field" id="career-type" name="employment_type">
                        <option>Full-time</option>
                        <option>Contract</option>
                        <option>Internship</option>
                        <option>Part-time</option>
                      </select>
                    </div>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div>
                      <label className="admin-label" htmlFor="career-location">
                        Location
                      </label>
                      <input
                        className="admin-field"
                        id="career-location"
                        name="location"
                        maxLength={100}
                        placeholder="Dhaka / Remote"
                        required
                      />
                    </div>
                    <div>
                      <label className="admin-label" htmlFor="career-deadline">
                        Application deadline
                      </label>
                      <input className="admin-field" type="date" id="career-deadline" name="closes_on" />
                    </div>
                  </div>
                  <div>
                    <label className="admin-label" htmlFor="career-description">
                      Role summary
                    </label>
                    <textarea
                      className="admin-field"
                      id="career-description"
                      name="description"
                      rows={4}
                      maxLength={3000}
                      required
                    />
                  </div>
                  <div>
                    <label className="admin-label" htmlFor="career-email">
                      Application email
                    </label>
                    <input
                      className="admin-field"
                      type="email"
                      id="career-email"
                      name="apply_email"
                      placeholder="Hiring contact email"
                      required
                    />
                  </div>
                  <label className="flex items-center gap-2 text-xs font-medium text-ink">
                    <input type="checkbox" id="career-published" name="published" defaultChecked className="accent-indigo-600" />{" "}
                    Publish circular
                  </label>
                  <button
                    type="submit"
                    className="w-full rounded-xl bg-ink px-5 py-3 text-sm font-semibold text-white hover:bg-emerald-700"
                  >
                    Post circular
                  </button>
                </form>
                <div id="admin-career-list" className="mt-6 space-y-2 border-t border-stone-200 pt-4">
                  {lists.careers && (
                    <>
                      <p className="mb-2 font-mono text-[10px] font-semibold uppercase tracking-wider text-ink-subtle">
                        Posted circulars
                      </p>
                      {lists.careers.length === 0 ? (
                        <p className="text-xs text-ink-subtle">No circulars posted yet.</p>
                      ) : (
                        lists.careers.map((item) => (
                          <AdminRow
                            key={item.id}
                            title={item.title}
                            published={item.published}
                            onToggle={() => update("career_posts", item)}
                            onDelete={() => remove("career_posts", item, `Delete the “${item.title}” circular?`)}
                          />
                        ))
                      )}
                    </>
                  )}
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
