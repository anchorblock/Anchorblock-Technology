-- Anchorblock public-site CMS and careers tables.
-- Run in Supabase SQL Editor before deploying the admin workspace.

create table if not exists public.site_admins (
  user_id uuid primary key references auth.users(id) on delete cascade,
  created_at timestamptz not null default now()
);

create table if not exists public.site_content (
  id uuid primary key default gen_random_uuid(),
  section_title text not null check (char_length(section_title) between 1 and 80),
  title text not null check (char_length(title) between 1 and 140),
  description text not null check (char_length(description) between 1 and 2000),
  image_url text,
  link_url text,
  link_label text,
  sort_order integer not null default 0,
  published boolean not null default false,
  created_at timestamptz not null default now()
);

create table if not exists public.career_posts (
  id uuid primary key default gen_random_uuid(),
  title text not null check (char_length(title) between 1 and 140),
  team_name text not null check (char_length(team_name) between 1 and 80),
  employment_type text not null default 'Full-time',
  location text not null check (char_length(location) between 1 and 100),
  description text not null check (char_length(description) between 1 and 3000),
  apply_email text not null,
  closes_on date,
  published boolean not null default false,
  created_at timestamptz not null default now()
);

create or replace function public.is_site_admin()
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
  select exists (
    select 1 from public.site_admins
    where user_id = (select auth.uid())
  );
$$;

revoke all on function public.is_site_admin() from public;
grant execute on function public.is_site_admin() to authenticated;

alter table public.site_admins enable row level security;
alter table public.site_content enable row level security;
alter table public.career_posts enable row level security;
grant usage on schema public to anon, authenticated;

drop policy if exists "Admins can read their own admin record" on public.site_admins;
create policy "Admins can read their own admin record"
  on public.site_admins for select to authenticated
  using (user_id = (select auth.uid()));

drop policy if exists "Public can read published site content" on public.site_content;
create policy "Public can read published site content"
  on public.site_content for select to anon, authenticated
  using (published = true);
drop policy if exists "Admins can manage site content" on public.site_content;
create policy "Admins can manage site content"
  on public.site_content for all to authenticated
  using ((select public.is_site_admin()))
  with check ((select public.is_site_admin()));

drop policy if exists "Public can read published career posts" on public.career_posts;
create policy "Public can read published career posts"
  on public.career_posts for select to anon, authenticated
  using (published = true);
drop policy if exists "Admins can manage career posts" on public.career_posts;
create policy "Admins can manage career posts"
  on public.career_posts for all to authenticated
  using ((select public.is_site_admin()))
  with check ((select public.is_site_admin()));

grant select on public.site_admins to authenticated;
grant select on public.site_content, public.career_posts to anon, authenticated;
grant insert, update, delete on public.site_content, public.career_posts to authenticated;

-- Provision an administrator only after creating their Supabase Auth account:
-- replace the email below, uncomment the INSERT, and run it in SQL Editor.
-- insert into public.site_admins (user_id)
-- select id from auth.users where lower(email) = lower('admin@example.com')
-- on conflict (user_id) do nothing;
