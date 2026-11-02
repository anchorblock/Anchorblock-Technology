import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const byId = (id) => document.getElementById(id);
const modal = byId('admin-modal');
const statusBox = byId('admin-status');
const loginView = byId('admin-login-view');
const workspace = byId('admin-workspace');
const contentRoot = byId('site-custom-sections');
const careerRoot = byId('career-list');
const careerEmpty = byId('career-empty');
let supabase;
let authorizedAdmin = false;

function report(message, kind = 'info') {
  statusBox.textContent = message;
  statusBox.className = `admin-status mb-5 rounded-xl border px-4 py-3 text-sm ${kind === 'error' ? 'border-rose-200 bg-rose-50 text-rose-900' : kind === 'success' ? 'border-emerald-200 bg-emerald-50 text-emerald-900' : 'border-indigo-100 bg-indigo-50 text-indigo-900'}`;
}

function safeUrl(value, allowRelative = false) {
  if (!value) return '';
  const raw = String(value).trim();
  if (allowRelative && raw.startsWith('/') && !raw.startsWith('//')) return raw;
  try {
    const parsed = new URL(raw);
    return parsed.protocol === 'https:' || parsed.protocol === 'http:' ? parsed.href : '';
  } catch {
    return '';
  }
}

function element(tag, className, value) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (value !== undefined && value !== null) node.textContent = String(value);
  return node;
}

function makeAction(label, className, callback) {
  const button = element('button', className, label);
  button.type = 'button';
  button.addEventListener('click', callback);
  return button;
}

function setModal(open) {
  modal.classList.toggle('hidden', !open);
  modal.setAttribute('aria-hidden', String(!open));
  document.body.classList.toggle('overflow-hidden', open);
  if (open) byId('admin-email').focus();
}

function renderCustomSections(rows) {
  contentRoot.replaceChildren();
  const groups = new Map();
  rows.forEach((row) => {
    const label = row.section_title.trim() || 'Studio updates';
    if (!groups.has(label)) groups.set(label, []);
    groups.get(label).push(row);
  });

  groups.forEach((items, heading) => {
    const section = element('section', 'cms-section');
    section.id = `studio-${heading.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}`;
    const wrap = element('div', 'mx-auto max-w-7xl px-4 sm:px-6 lg:px-8');
    const title = element('h2', 'display-title mb-8 text-3xl font-bold text-ink sm:text-5xl', heading);
    const grid = element('div', 'grid gap-5 md:grid-cols-2 lg:grid-cols-3');
    wrap.append(title, grid);

    items.forEach((item) => {
      const card = element('article', 'cms-card overflow-hidden');
      const imageUrl = safeUrl(item.image_url, true);
      if (imageUrl) {
        const image = document.createElement('img');
        image.src = imageUrl;
        image.alt = item.title;
        image.loading = 'lazy';
        image.className = 'h-52 w-full object-cover';
        card.append(image);
      }
      const body = element('div', 'p-6 sm:p-7');
      body.append(element('h3', 'mb-3 text-xl font-bold tracking-tight text-ink', item.title));
      body.append(element('p', 'whitespace-pre-line text-sm leading-relaxed text-ink-muted', item.description));
      const linkUrl = safeUrl(item.link_url);
      if (linkUrl && item.link_label) {
        const link = element('a', 'mt-5 inline-flex items-center gap-2 text-sm font-semibold text-indigo-700 hover:text-indigo-900');
        link.href = linkUrl;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.append(document.createTextNode(item.link_label), element('span', '', '↗'));
        body.append(link);
      }
      card.append(body);
      grid.append(card);
    });

    section.append(wrap);
    contentRoot.append(section);
  });
}

function renderCareers(rows) {
  careerRoot.replaceChildren();
  const today = new Date(Date.now() + 6 * 60 * 60 * 1000).toISOString().slice(0, 10);
  const current = rows.filter((role) => !role.closes_on || role.closes_on >= today);
  byId('career-count').textContent = `${current.length} ${current.length === 1 ? 'opening' : 'openings'}`;
  if (!current.length) {
    careerRoot.append(careerEmpty);
    return;
  }

  current.forEach((role) => {
    const card = element('article', 'career-card flex flex-col p-6 sm:p-7');
    const badges = element('div', 'mb-5 flex flex-wrap gap-2');
    badges.append(element('span', 'rounded-full bg-emerald-50 px-3 py-1 font-mono text-[10px] font-semibold text-emerald-800', role.employment_type));
    badges.append(element('span', 'rounded-full bg-porcelain px-3 py-1 font-mono text-[10px] text-ink-muted', role.team_name));
    card.append(badges, element('h3', 'text-xl font-bold text-ink', role.title), element('p', 'mt-2 font-mono text-xs text-ink-muted', role.location), element('p', 'mt-5 flex-1 whitespace-pre-line text-sm leading-relaxed text-ink-muted', role.description));
    const footer = element('div', 'mt-6 flex items-end justify-between gap-3 border-t border-stone-200 pt-4');
    if (role.closes_on) footer.append(element('span', 'text-[10px] font-mono text-ink-subtle', `Apply by ${new Date(`${role.closes_on}T00:00:00`).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })}`));
    else footer.append(element('span', 'text-[10px] font-mono text-ink-subtle', 'Applications open'));
    const apply = element('a', 'shrink-0 rounded-full bg-ink px-4 py-2.5 text-xs font-semibold text-white hover:bg-emerald-700 transition-colors', 'Apply');
    apply.href = `mailto:${encodeURI(role.apply_email)}?subject=${encodeURIComponent(`Application: ${role.title}`)}`;
    footer.append(apply);
    card.append(footer);
    careerRoot.append(card);
  });
}

async function loadPublicContent() {
  if (!supabase) return;
  const [contentResult, careerResult] = await Promise.all([
    supabase.from('site_content').select('id,section_title,title,description,image_url,link_url,link_label,sort_order').eq('published', true).order('sort_order').order('created_at'),
    supabase.from('career_posts').select('id,title,team_name,employment_type,location,description,apply_email,closes_on,created_at').eq('published', true).order('created_at', { ascending: false })
  ]);
  if (contentResult.error) console.error('Public site content could not be loaded:', contentResult.error.message);
  else renderCustomSections(contentResult.data || []);
  if (careerResult.error) {
    console.error('Career posts could not be loaded:', careerResult.error.message);
    byId('career-count').textContent = 'Openings unavailable';
    careerRoot.replaceChildren(element('p', 'col-span-full rounded-2xl border border-stone-200 bg-white px-6 py-8 text-sm text-ink-muted', 'Career listings are temporarily unavailable. Please check back soon.'));
  } else renderCareers(careerResult.data || []);
}

async function verifyAdmin() {
  const { data: { user }, error: userError } = await supabase.auth.getUser();
  if (userError || !user) return false;
  const { data, error } = await supabase.from('site_admins').select('user_id').eq('user_id', user.id).maybeSingle();
  return !error && Boolean(data);
}

function addAdminRow(container, title, published, toggle, remove) {
  const row = element('div', 'flex items-center justify-between gap-3 rounded-xl bg-porcelain px-3 py-2.5');
  const details = element('div', 'min-w-0');
  details.append(element('p', 'truncate text-xs font-semibold text-ink', title), element('p', 'mt-0.5 font-mono text-[9px] text-ink-subtle', published ? 'Published' : 'Draft'));
  const actions = element('div', 'flex shrink-0 items-center gap-2');
  actions.append(makeAction(published ? 'Unpublish' : 'Publish', 'text-[10px] font-semibold text-indigo-700 hover:text-indigo-900', toggle));
  actions.append(makeAction('Delete', 'text-[10px] font-semibold text-rose-700 hover:text-rose-900', remove));
  row.append(details, actions);
  container.append(row);
}

async function loadAdminLists() {
  const [contentResult, careerResult] = await Promise.all([
    supabase.from('site_content').select('id,section_title,title,published').order('created_at', { ascending: false }),
    supabase.from('career_posts').select('id,title,published').order('created_at', { ascending: false })
  ]);
  const contentList = byId('admin-content-list');
  const careerList = byId('admin-career-list');
  contentList.replaceChildren(element('p', 'mb-2 font-mono text-[10px] font-semibold uppercase tracking-wider text-ink-subtle', 'Managed content'));
  careerList.replaceChildren(element('p', 'mb-2 font-mono text-[10px] font-semibold uppercase tracking-wider text-ink-subtle', 'Posted circulars'));

  if (contentResult.error) report(`Could not load content: ${contentResult.error.message}`, 'error');
  else if (!(contentResult.data || []).length) contentList.append(element('p', 'text-xs text-ink-subtle', 'No custom content yet.'));
  else contentResult.data.forEach((item) => {
    const title = `${item.section_title} · ${item.title}`;
    addAdminRow(contentList, title, item.published, async () => {
      const { error } = await supabase.from('site_content').update({ published: !item.published }).eq('id', item.id);
      if (error) report(error.message, 'error'); else { await loadAdminLists(); await loadPublicContent(); }
    }, async () => {
      if (!window.confirm(`Delete “${item.title}” from ${item.section_title}?`)) return;
      const { error } = await supabase.from('site_content').delete().eq('id', item.id);
      if (error) report(error.message, 'error'); else { await loadAdminLists(); await loadPublicContent(); }
    });
  });

  if (careerResult.error) report(`Could not load careers: ${careerResult.error.message}`, 'error');
  else if (!(careerResult.data || []).length) careerList.append(element('p', 'text-xs text-ink-subtle', 'No circulars posted yet.'));
  else careerResult.data.forEach((item) => addAdminRow(careerList, item.title, item.published, async () => {
    const { error } = await supabase.from('career_posts').update({ published: !item.published }).eq('id', item.id);
    if (error) report(error.message, 'error'); else { await loadAdminLists(); await loadPublicContent(); }
  }, async () => {
    if (!window.confirm(`Delete the “${item.title}” circular?`)) return;
    const { error } = await supabase.from('career_posts').delete().eq('id', item.id);
    if (error) report(error.message, 'error'); else { await loadAdminLists(); await loadPublicContent(); }
  }));
}

async function enterWorkspace() {
  authorizedAdmin = await verifyAdmin();
  if (!authorizedAdmin) {
    await supabase.auth.signOut();
    loginView.classList.remove('hidden');
    workspace.classList.add('hidden');
    report('This account is not on the Anchorblock admin list.', 'error');
    return;
  }
  loginView.classList.add('hidden');
  workspace.classList.remove('hidden');
  report('Signed in. Changes publish according to the selected publish setting.', 'success');
  await loadAdminLists();
}

document.querySelectorAll('[data-admin-open]').forEach((button) => button.addEventListener('click', () => {
  document.getElementById('mobile-nav')?.classList.add('hidden');
  setModal(true);
  if (!supabase) report('Admin publishing needs Supabase environment variables in Vercel. See README.md for setup.', 'error');
}));
byId('admin-close').addEventListener('click', () => setModal(false));
modal.addEventListener('click', (event) => { if (event.target === modal) setModal(false); });
document.addEventListener('keydown', (event) => { if (event.key === 'Escape' && !modal.classList.contains('hidden')) setModal(false); });

byId('admin-login-form').addEventListener('submit', async (event) => {
  event.preventDefault();
  if (!supabase) return report('Admin publishing is not configured yet. Add the Supabase Vercel environment variables and redeploy.', 'error');
  const button = event.currentTarget.querySelector('[type="submit"]');
  button.disabled = true;
  button.textContent = 'Signing in…';
  const { error } = await supabase.auth.signInWithPassword({ email: byId('admin-email').value.trim(), password: byId('admin-password').value });
  button.disabled = false;
  button.textContent = 'Sign in';
  if (error) return report(error.message, 'error');
  await enterWorkspace();
});

byId('admin-signout').addEventListener('click', async () => {
  if (supabase) await supabase.auth.signOut();
  authorizedAdmin = false;
  workspace.classList.add('hidden');
  loginView.classList.remove('hidden');
  byId('admin-password').value = '';
  report('You have signed out.', 'success');
});

byId('content-form').addEventListener('submit', async (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!authorizedAdmin) return report('Sign in with an administrator account first.', 'error');
  const payload = {
    section_title: byId('content-section').value.trim(),
    title: byId('content-title').value.trim(),
    description: byId('content-description').value.trim(),
    image_url: byId('content-image').value.trim() || null,
    link_url: byId('content-link').value.trim() || null,
    link_label: byId('content-link-label').value.trim() || null,
    published: byId('content-published').checked,
    sort_order: 0
  };
  if (payload.image_url && !safeUrl(payload.image_url, true)) return report('Image URL must use HTTPS or a local path.', 'error');
  if (payload.link_url && !safeUrl(payload.link_url)) return report('Links must use HTTP or HTTPS.', 'error');
  const { error } = await supabase.from('site_content').insert(payload);
  if (error) return report(error.message, 'error');
  form.reset();
  byId('content-published').checked = true;
  report('Content added.', 'success');
  await Promise.all([loadAdminLists(), loadPublicContent()]);
});

byId('career-form').addEventListener('submit', async (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!authorizedAdmin) return report('Sign in with an administrator account first.', 'error');
  const payload = {
    title: byId('career-title').value.trim(),
    team_name: byId('career-team').value.trim(),
    employment_type: byId('career-type').value,
    location: byId('career-location').value.trim(),
    description: byId('career-description').value.trim(),
    apply_email: byId('career-email').value.trim(),
    closes_on: byId('career-deadline').value || null,
    published: byId('career-published').checked
  };
  const { error } = await supabase.from('career_posts').insert(payload);
  if (error) return report(error.message, 'error');
  form.reset();
  byId('career-published').checked = true;
  report('Career circular posted.', 'success');
  await Promise.all([loadAdminLists(), loadPublicContent()]);
});

try {
  const response = await fetch('/api/config', { headers: { accept: 'application/json' } });
  const config = await response.json();
  if (!response.ok || !config.url || !config.publishableKey) throw new Error(config.error || 'Supabase has not been configured for this deployment.');
  supabase = createClient(config.url, config.publishableKey, { auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: false } });
  await loadPublicContent();
  const { data: { session } } = await supabase.auth.getSession();
  if (session) await enterWorkspace();
} catch (error) {
  console.info('Dynamic site content is not configured:', error.message);
  careerRoot.replaceChildren(careerEmpty);
  byId('career-count').textContent = 'No current openings';
}
