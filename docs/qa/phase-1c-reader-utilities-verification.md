# Blackthorn Field Notes — Phase 1C Reader Utilities Verification

## Purpose

This phase verifies reader utility reliability and print/PDF output behavior across mobile and desktop environments.

The objective is ensuring the site behaves like a stable publication experience rather than an unstable web application.

---

# Verification Scope

## Share Controls

Verify:

- native mobile sharing works correctly
- desktop fallback behavior works correctly
- no broken sharing states occur
- share controls remain accessible on mobile
- share controls remain readable at larger text sizes

Test:

- iPhone Safari
- Android Chrome
- desktop Chrome
- desktop Firefox
- desktop Safari

---

## Print / Save as PDF Output

Verify:

- article content prints cleanly
- navigation is excluded from print output
- support buttons are hidden correctly
- footer clutter is removed from print output
- dark mode does not produce unreadable PDFs
- typography remains readable in print mode
- article spacing remains intact in PDFs

Verify article-only rendering quality.

---

## Read Aloud Controls

Verify:

- read aloud targets article content correctly
- repeated activation remains stable
- stop reading works reliably
- duplicate speech sessions do not occur
- controls remain functional after navigation

---

## Responsive Reader QA

Test:

- iPhone Safari
- Android Chrome
- tablet portrait
- tablet landscape
- desktop Chrome
- desktop Firefox
- desktop Safari

Verify:

- controls remain visible
- controls do not overlap
- no clipping occurs
- spacing remains readable
- utility controls remain accessible at larger text sizes

---

# Non-Goals

This phase does not include:

- redesigning utility controls
- adding new sharing systems
- adding new accessibility systems
- animation systems
- navigation restructuring

---

# Release Classification

QA / Reader Experience / Accessibility / Stability
