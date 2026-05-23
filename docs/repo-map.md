# Blackthorn Field Notes Repository Map

This file documents what lives where in the site so future changes can stay scoped, surgical, and reviewable.

## Working Rules

Before changing code:

1. Identify the behavior or visual issue.
2. Locate the file that owns it.
3. Read the current implementation.
4. Change only the affected lines.
5. Touch another file only if it directly supports that change.
6. Avoid whole-file reconstruction, especially in layouts, includes, CSS, and posts.

## High-Risk / Patch-Only Files

These files affect broad areas of the site and should only receive small targeted edits.

### `_layouts/default.html`

Owns the global page shell.

Known responsibilities:

- document head
- global stylesheets
- SEO tag placement
- Cloudflare analytics script
- skip link
- site navigation include
- accessibility / reading controls
- main content wrapper
- site footer
- global display preference script

Change only when modifying global page structure, globally loaded CSS/JS, footer markup, or sitewide controls.

### `assets/css/style.scss`

Owns core theme and layout styling.

Known responsibilities:

- light/dark theme variables
- base typography and colors
- wrapper width
- header/footer base styling
- site navigation styling
- mobile navigation styling
- article spacing
- responsive post title sizing
- homepage/card spacing
- author photo layout
- share controls
- print styling
- support buttons
- Follow.it subscribe form styling
- footer base color rules

Use this for core theme and structural styling. Avoid large rewrites.

### `assets/css/enhancements.css`

Owns incremental post-launch visual/UX overrides.

Known responsibilities:

- mobile navigation overflow fix
- support button vertical centering
- unified navigation branding/logo styling
- accessibility control styling
- search spacing overrides
- homepage hierarchy spacing overrides

Use this for small visible refinements that do not require changing core Sass structure.

### `assets/js/search.js`

Owns homepage search behavior.

Known responsibilities:

- loads `/search.json`
- reads `#search-input`
- writes results into `#search-results`
- searches title, description, categories, tags, and content
- limits results to 10
- renders empty search state
- renders result title, metadata, and excerpt

Use this only for search behavior changes. Search styling belongs in CSS.

### `index.md`

Owns homepage structure/content.

Known sections:

- hero/banner image
- tagline and homepage intro text
- Start Here call-to-action
- homepage search block
- featured posts block
- latest posts block
- category link grid
- subscribe callout
- search script include

Use this for homepage content and structural changes only.

## Functional Ownership Map

### Homepage Search

Files involved:

- `index.md` — search markup and helper text
- `assets/js/search.js` — search behavior and result rendering
- `assets/css/enhancements.css` — search spacing refinements
- `/search.json` — generated search data/index

### Homepage Layout / Visual Hierarchy

Files involved:

- `index.md` — section order and homepage markup
- `assets/css/style.scss` — core homepage/card styling
- `assets/css/enhancements.css` — small spacing refinements

### Global Site Shell

Files involved:

- `_layouts/default.html` — global HTML shell
- `_includes/site-nav.html` — navigation include if present/used
- `assets/css/style.scss` — global layout/theme styling
- `assets/css/enhancements.css` — incremental global visual refinements

### Articles / Posts

Files involved:

- `_posts/` — individual article content
- `assets/css/style.scss` — article spacing, headings, metadata, print behavior
- layout files — post shell if customized

Do not modify posts during unrelated site layout work.

### Footer

Files involved:

- `_layouts/default.html` — footer markup
- `assets/css/style.scss` — footer base styling
- `assets/css/enhancements.css` — small footer refinements if added later

### Accessibility / Reader Controls

Files involved:

- `_layouts/default.html` — controls markup and preference script
- `assets/css/enhancements.css` — control styling

## Unmapped / Needs Future Inspection

These areas should be inspected before changing:

- category page templates/layouts
- `_includes/` contents beyond known navigation use
- standalone pages beyond homepage
- search index generation source
- News page structure
- subscribe page structure
- support page structure

## Change Scope Examples

### Add helper text under homepage search

Expected files:

- `index.md`

Optional only if styling is needed:

- `assets/css/enhancements.css`

### Change search result behavior

Expected files:

- `assets/js/search.js`

Optional only if visual spacing changes:

- `assets/css/enhancements.css`

### Change search spacing

Expected files:

- `assets/css/enhancements.css`

### Change global footer markup

Expected files:

- `_layouts/default.html`

Optional only if styling changes:

- `assets/css/style.scss` or `assets/css/enhancements.css`

### Change article typography

Expected files:

- `assets/css/style.scss`

Do not edit posts unless content itself is changing.

## Maintenance Notes

This map should be updated whenever a new major file, template, include, or ownership boundary is discovered.

The goal is to prevent accidental scope creep, unrelated file edits, truncation, and whole-file rewrites.