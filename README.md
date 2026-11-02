# Anchorblock Technology website

Static company website with Vercel Functions for runtime configuration and a Supabase-backed content and careers editor.

## Vercel deployment

Create a Vercel project with this repository as its root directory. The repository is served as static files from `.`; there is no build command. `vercel.json` routes `/` to `anchorblock_studio.html`, and the `api/` directory contains the runtime configuration function.

Add the Supabase URL and publishable key to the Vercel project for Preview and Production. The runtime accepts either naming pair:

- `SUPABASE_URL` and `SUPABASE_PUBLISHABLE_KEY`, or
- `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`.

The publishable key is intended for browser use; do not add a Supabase secret/service-role key to this website.

## Enable admin publishing

1. Create a Supabase project and run [`supabase/schema.sql`](supabase/schema.sql) in its SQL Editor.
2. Create the administrator account in Supabase Authentication.
3. In the SQL file's provisioning query, replace `admin@example.com` with that account's email, uncomment the query, and run it once. The admin page only permits users listed in `public.site_admins`.
4. Add the two Vercel environment variables above and redeploy.

The public site reads only published content and open career circulars. Supabase row-level security restricts all inserts, updates, and deletes to provisioned administrators. Admins can add cards to existing named sections or create new sections by entering a new section name, and can publish or remove career circulars. Public links and images can use HTTPS URLs; local image paths can reference assets in this repository.

For local Vercel-compatible development, put one of the variable pairs above in `.env.local`, then run `vercel dev` from this directory. `.env.local` is ignored by Git.
