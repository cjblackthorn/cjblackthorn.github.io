---
layout: page
title: Healthcare
permalink: /categories/healthcare/
description: Healthcare essays and field notes from Blackthorn Field Notes.
---

# Healthcare

Essays and field notes about medical systems, insurance barriers, care delays, access failures, and the human cost of being treated like paperwork.

<ul class="post-list">
{% for post in site.categories.healthcare %}
  <li>
    <h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
    <p class="post-meta">{{ post.date | date: "%B %-d, %Y" }}</p>
    <p>{{ post.description | default: post.excerpt | strip_html | truncate: 220 }}</p>
  </li>
{% endfor %}
</ul>
