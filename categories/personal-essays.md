---
layout: page
title: Personal Essays
permalink: /categories/personal-essays/
description: Personal essays from Blackthorn Field Notes.
---

# Personal Essays

Personal essays and reflections about lived experience, meaning, survival, identity, and the private realities behind public systems.

<ul class="post-list">
{% for post in site.categories.personal-essays %}
  <li>
    <h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
    <p class="post-meta">{{ post.date | date: "%B %-d, %Y" }}</p>
    <p>{{ post.description | default: post.excerpt | strip_html | truncate: 220 }}</p>
  </li>
{% endfor %}
</ul>
