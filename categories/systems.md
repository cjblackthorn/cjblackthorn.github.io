---
layout: page
title: Systems
permalink: /categories/systems/
description: Systems essays and field notes from Blackthorn Field Notes.
---

# Systems

Essays and field notes about institutions, incentives, bureaucracy, policy, power, and the structures that shape people’s lives.

<ul class="post-list">
{% for post in site.categories.systems %}
  <li>
    <h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
    <p class="post-meta">{{ post.date | date: "%B %-d, %Y" }}</p>
    <p>{{ post.description | default: post.excerpt | strip_html | truncate: 220 }}</p>
  </li>
{% endfor %}
</ul>
