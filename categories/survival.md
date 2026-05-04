---
layout: page
title: Survival
permalink: /categories/survival/
description: Survival essays and field notes from Blackthorn Field Notes.
---

# Survival

Essays and field notes about endurance, grief, trauma, adaptation, hope, and the hard work of staying human after life has tried to take that away.

<ul class="post-list">
{% for post in site.categories.survival %}
  <li>
    <h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
    <p class="post-meta">{{ post.date | date: "%B %-d, %Y" }}</p>
    <p>{{ post.description | default: post.excerpt | strip_html | truncate: 220 }}</p>
  </li>
{% endfor %}
</ul>
