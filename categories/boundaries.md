---
layout: page
title: Boundaries
permalink: /categories/boundaries/
description: Boundary essays and field notes from Blackthorn Field Notes.
---

# Boundaries

Essays and field notes about self-respect, limits, emotional safety, accountability, and refusing to disappear inside someone else’s comfort.

<ul class="post-list">
{% for post in site.categories.boundaries %}
  <li>
    <h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
    <p class="post-meta">{{ post.date | date: "%B %-d, %Y" }}</p>
    <p>{{ post.description | default: post.excerpt | strip_html | truncate: 220 }}</p>
  </li>
{% endfor %}
</ul>
