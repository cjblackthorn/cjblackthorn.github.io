---
layout: page
title: Advocacy
permalink: /categories/advocacy/
description: Advocacy essays and field notes from Blackthorn Field Notes.
---

# Advocacy

Essays and field notes about speaking truth, challenging systems, and pushing for change.

<ul class="post-list">
{% for post in site.categories.advocacy %}
  <li>
    <h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
    <p class="post-meta">{{ post.date | date: "%B %-d, %Y" }}</p>
    <p>{{ post.description | default: post.excerpt | strip_html | truncate: 220 }}</p>
  </li>
{% endfor %}
</ul>
