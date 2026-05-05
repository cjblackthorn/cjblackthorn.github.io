# Blackthorn Field Notes

Repository for **Blackthorn Field Notes**, the public GitHub Pages site for C. J. Blackthorn.

Live site: https://cjblackthorn.github.io

## Purpose

Blackthorn Field Notes publishes essays on systems, survival, technology, relationships, disability, access, advocacy, boundaries, and the work of staying human.

## Site Structure

- `_posts/` — published articles
- `_layouts/` — Jekyll page and post templates
- `_includes/` — reusable site includes such as navigation
- `_data/navigation.yml` — main site navigation
- `assets/css/` — site stylesheets
- `assets/images/` — public site images
- `categories/` — category landing pages

## Publishing Posts

Posts belong in `_posts/` using this filename pattern:

```text
YYYY-MM-DD-short-title.md
```

Each post should use Jekyll front matter similar to:

```yaml
---
layout: post
title: "Post Title"
date: YYYY-MM-DD
categories: [category, category]
tags: [tag, tag, tag]
description: "Short one-sentence description for SEO and previews."
---
```

Do not add manual subscribe, support, share, or footer content inside individual posts. The post layout injects that globally.

## Security Notes

This is a public repository. Anything committed here should be treated as public.

Do not commit API keys, tokens, private keys, Stripe secret keys, OAuth secrets, `.env` files, or private personal information.

## Build Check

A GitHub Actions workflow checks that the Jekyll site builds successfully on pushes and pull requests to `main`.
