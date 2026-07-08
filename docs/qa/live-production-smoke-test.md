# Live Production Smoke Test

Use this checklist after merging navigation, layout, accessibility, or site-shell changes.

## Target

Production site:

- https://blackthornfieldnotes.ink/

## Desktop Checks

- Homepage loads without console errors.
- Page has one visible or screen-reader-only `h1`.
- Start Here dropdown opens and shows:
  - Start Here
  - Start Here by Need
- Categories dropdown opens and shows all category links.
- Only one desktop dropdown remains open at a time.
- Dropdown panels are not clipped by the navigation bar.
- Homepage search accepts a query and renders results.
- Footer subscribe field has:
  - an associated email label
  - helper text connected with `aria-describedby`
  - a visible subscribe button

## Mobile Checks

- Menu button opens the navigation and updates `aria-expanded`.
- Start Here dropdown opens full-width.
- Categories dropdown opens full-width.
- Mobile navigation remains vertically scrollable when needed.
- Display controls remain at least 44px tall.
- The page has no horizontal overflow.

## Article Checks

- Article page has one `h1`.
- Content note and plain-language summary, when present, have headings.
- Read-aloud controls are labelled and target `#post-content`.
- Article table of contents is generated when enough headings are present.
- Hero images load and include intrinsic dimensions when the image is local.
- Canonical URL, Open Graph title, description, image, and Twitter card are present.
- The page has no horizontal overflow.

## Expected Warnings

- Ruby may print `IO::Buffer is experimental` during local HTML-Proofer runs.
- Bundler may use a temporary home directory if the user home is not writable in the sandbox.
