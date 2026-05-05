# Accessibility Notes

Blackthorn Field Notes is built with accessibility in mind. The goal is to make essays easier to read, listen to, navigate, print, and share.

## Current Accessibility Features

- System-aware light and dark mode
- Read-aloud controls on article pages
- Reader speed control for article read-aloud
- Sticky article reader toolbar
- Skip-to-content link
- Visible keyboard focus styles
- Reduced-motion support using `prefers-reduced-motion`
- Large tap targets for interactive controls
- Optional plain-language summaries through post front matter
- Optional content notes through post front matter
- Auto-generated article table of contents for longer posts
- Cleaner print/PDF output with source URL

## Post Front Matter Fields

Longer or sensitive posts can include these optional fields:

```yaml
plain_summary: "A short plain-language summary of the article."
content_note: "Brief note about potentially difficult content."
```

Use `plain_summary` when a post is long, concept-heavy, emotionally dense, or likely to benefit from a quick orientation.

Use `content_note` when a post discusses topics such as abuse, trauma, violence, medical distress, suicide, self-harm, grief, sexual harm, discrimination, or other potentially activating material.

## Content Note Style Guide

Content notes should be brief, neutral, and specific enough to let readers make informed choices.

Good examples:

- `content_note: "Discusses emotional conflict, trauma responses, and relationship instability."`
- `content_note: "Discusses healthcare barriers, medical distress, and disability-related harm."`
- `content_note: "Discusses grief, survival, and trauma without graphic detail."`

Avoid sensational wording, excessive detail, or language that turns the note into another source of distress.

## Future Improvements

Potential future additions:

- Optional follow-along scrolling while read-aloud is active
- Voice selector when browser support is reliable enough
- Reader preference persistence
- Manual high-contrast toggle
- Larger text toggle
- Per-post content note review checklist
