---
layout: page
title: Accessibility
permalink: /categories/accessibility/
description: Accessibility essays and field notes from Blackthorn Field Notes.
---

# Accessibility

Essays and field notes about access, mobility, design, public spaces, technology, and what it means to build a world people can actually live in.

<ul class="post-list">
{% for post in site.categories.accessibility %}
  <li>
    <h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
    <p class="post-meta">{{ post.date | date: "%B %-d, %Y" }}</p>
    <p>{{ post.description | default: post.excerpt | strip_html | truncate: 220 }}</p>
  </li>
{% endfor %}
</ul>
