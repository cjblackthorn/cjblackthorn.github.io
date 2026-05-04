---
layout: page
title: Disability
permalink: /categories/disability/
description: Disability essays and field notes from Blackthorn Field Notes.
---

# Disability

Essays and field notes about disabled life, access, survival, visibility, and the cost of being forced to navigate systems that were not built to hold us.

<ul class="post-list">
{% for post in site.categories.disability %}
  <li>
    <h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
    <p class="post-meta">{{ post.date | date: "%B %-d, %Y" }}</p>
    <p>{{ post.description | default: post.excerpt | strip_html | truncate: 220 }}</p>
  </li>
{% endfor %}
</ul>
