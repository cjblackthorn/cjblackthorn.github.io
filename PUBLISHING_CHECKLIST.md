# Publishing Checklist

Use this checklist before publishing a new Blackthorn Field Notes post.

## File and Front Matter

- [ ] Filename follows `_posts/YYYY-MM-DD-short-title.md`
- [ ] `layout: post` is present
- [ ] Title is clear, human, and accurate
- [ ] Date is correct
- [ ] Categories match the established site category names
- [ ] Tags are useful and not excessive
- [ ] Description is present and works as a one-sentence preview
- [ ] Image is included only if the image path is real

## Category Standards

Use category names consistently so category pages continue to work.

Common pairings:

```yaml
categories: [disability, advocacy]
categories: [technology, systems]
categories: [relationships, boundaries]
categories: [healthcare, accessibility]
categories: [personal-essays]
```

Other supported categories include:

```text
advocacy
accessibility
boundaries
disability
healthcare
personal-essays
relationships
survival
systems
technology
```

## Accessibility and Reader Support

- [ ] Does this post need a plain-language summary?
- [ ] Does this post need a content note?
- [ ] Headings are descriptive and useful
- [ ] Links use meaningful text, not vague text like “click here”
- [ ] Any images have meaningful alt text or are decorative
- [ ] Read-aloud controls still make sense for the post
- [ ] Save as PDF / print output is reasonable

## Plain-Language Summary

Use `plain_summary` when a post is long, emotionally dense, concept-heavy, or likely to benefit from a quick orientation.

Example:

```yaml
plain_summary: "This article explains how healthy relationships require shared responsibility, repair, and emotional accountability."
```

## Content Note Review

Ask whether the post discusses any of the following:

- Trauma
- Abuse
- Emotional conflict
- Relationship instability
- Healthcare distress
- Medical fear
- Self-harm or suicide
- Grief
- Sexual harm
- Violence
- Discrimination
- Poverty
- Food insecurity
- Housing instability
- Disability-related harm

If yes, consider adding a brief, neutral `content_note`.

Example:

```yaml
content_note: "Discusses emotional conflict, trauma responses, and relationship instability."
```

Content notes should be clear but not graphic. They should help readers make informed choices without turning the note itself into another source of distress.

## Body Review

- [ ] Opening hook is strong
- [ ] Main point is clear
- [ ] Personal/systemic example is grounded
- [ ] The system failure is named
- [ ] Why it matters is explained
- [ ] What needs to change is practical and specific
- [ ] Closing thought lands cleanly
- [ ] No manual subscribe/share/support footer is included inside the post
- [ ] Repetition is intentional, not accidental
- [ ] Tone is clear, human, direct, emotionally honest, systems-aware, and unapologetic without becoming cruel

## Final QA

- [ ] Preview the post on mobile
- [ ] Preview the post on desktop
- [ ] Confirm dark/light mode readability
- [ ] Confirm links open correctly
- [ ] Confirm categories display correctly
- [ ] Confirm RSS/feed updates after publishing
- [ ] Confirm the post appears in Latest Field Notes
