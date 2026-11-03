# Anchorblock Technology website

Company website built with Next.js 16 (App Router, TypeScript, Tailwind CSS v4), with a Supabase-backed content and careers editor.

The page is prerendered as static HTML. Content published from the admin panel and open career circulars are fetched on the server with Cache Components (`"use cache"`), so they are part of the static page, refresh hourly on their own, and update immediately when an admin publishes a change.

## Development

Requires Node.js 20.9 or later.

```bash
npm install
npm run dev
```

Other scripts: `npm run build`, `npm start`, `npm run lint`, `npm run typecheck`.

## Project layout

- `app/` — root layout (fonts, metadata), the page, the admin Server Action, and generated SEO files: `opengraph-image.tsx`, `robots.ts`, `sitemap.ts`, `manifest.ts`, `icon.png`, `apple-icon.png`.
- `app/globals.css` — Tailwind setup. It reproduces the original Tailwind v3 colors, line heights and cascade order so the design matches the previous static page exactly; read the comments before changing it.
- `app/site.css` — the site's own styles, carried over unchanged from the static page.
- `components/` — one component per page section. Files starting with `"use client"` are the interactive pieces (header menu, capability matrix, galleries, contact form, admin panel).
- `lib/` — site details (`site.ts`), Supabase configuration, and the cached data loaders (`content.ts`).
- `public/` — images and the hero video, served at the same paths as before (e.g. `/omniWEB.png`).

The open source section is hidden. Its component (`components/open-source.tsx`) is kept so it can be restored by rendering `<OpenSource />` in `components/selected-work.tsx`.

## Environment variables

Copy `.env.example` to `.env.local` for local development.

- `SUPABASE_URL` and `SUPABASE_PUBLISHABLE_KEY` (or `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`) — the Supabase project used for site content and careers. The publishable key is intended for browser use; do not add a Supabase secret/service-role key to this website. Without these, the site still builds and shows "No current openings".
- `NEXT_PUBLIC_SITE_URL` (optional) — canonical origin used in metadata, the sitemap and structured data, e.g. `https://www.example.com`. On Vercel it defaults to the project's production domain.

Changes to these variables take effect on the next deployment.

## Vercel deployment

`vercel.json` sets the framework, install command, build command and output directory (`.next`). These take precedence over **Project Settings → Build and Deployment**, which still holds the Output Directory `.` from the previous static site; with that setting, Vercel looks for `routes-manifest.json` in the repository root and the deployment fails.

Add the Supabase variables above to the Vercel project for Preview and Production.

## Enable admin publishing

1. Create a Supabase project and run [`supabase/schema.sql`](supabase/schema.sql) in its SQL Editor.
2. Create the administrator account in Supabase Authentication.
3. In the SQL file's provisioning query, replace `admin@example.com` with that account's email, uncomment the query, and run it once. The admin panel only permits users listed in `public.site_admins`.
4. Add the Supabase environment variables and redeploy.

The public site reads only published content and open career circulars. Supabase row-level security restricts all inserts, updates, and deletes to provisioned administrators. Admins can add cards to existing named sections or create new sections by entering a new section name, and can publish or remove career circulars. Public links and images can use HTTPS URLs; local image paths can reference files in `public/`.

After each change, the admin panel calls a Server Action that checks the signed-in user is an administrator and then refreshes the cached page data, so the change is visible straight away.
