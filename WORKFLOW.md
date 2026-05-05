# Publishing Workflow

This repository uses a lightweight publishing workflow for Blackthorn Field Notes.

## Branches

```text
main = production / live GitHub Pages site
develop = staging / testing branch
feature/* = individual changes or experiments
```

## Standard Flow

For larger site changes:

```text
feature branch → develop → main
```

Examples of larger changes:

- Layout changes
- CSS changes
- Navigation changes
- Accessibility features
- Read-aloud changes
- Homepage redesigns
- Category/template changes
- JavaScript changes

## Publishing Posts

For normal article publishing, posts may go through either:

```text
post branch → main
```

or:

```text
post branch → develop → main
```

Use `develop` when the post depends on new layout, category, accessibility, or styling behavior that needs testing first.

## Pull Requests

Pull requests should pass the required build check before merging.

Required check:

```text
build
```

Workflow name:

```text
Jekyll build check
```

## Main Branch Rules

The `main` branch is the live site. It should remain protected.

Recommended protections:

- Block force pushes
- Restrict deletions
- Require the `build` status check
- Use pull requests for substantial changes

## Develop Branch Rules

The `develop` branch is for staging and testing.

Recommended protections:

- Block force pushes
- Restrict deletions
- Require the `build` status check

## QA Before Merging to Main

Before merging site changes to `main`, check:

- Build passes
- Homepage still loads
- Post pages still load
- Navigation works on mobile and desktop
- Dark/light mode still works
- Read-aloud controls still work on posts
- Share and Save as PDF still work
- Contact/support/subscribe links still work
- No secrets or private information were added

## Notes

GitHub Pages publishes from `main`. Treat anything merged to `main` as live production content.
