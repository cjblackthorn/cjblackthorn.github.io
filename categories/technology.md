---
layout: page
title: Technology
permalink: /categories/technology/
description: Technology essays and field notes from Blackthorn Field Notes.
---

# Technology

Essays and field notes about technology, privacy, cybersecurity, platforms, digital systems, and the human consequences of technical choices.

<ul class="post-list">
{% for post in site.categories.technology %}
  <li>
    <h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
    <p class="post-meta">{{ post.date | date: "%B %-d, %Y" }}</p>
    <p>{{ post.description | default: post.excerpt | strip_html | truncate: 220 }}</p>
  </li>
{% endfor %}
</ul>
