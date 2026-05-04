---
layout: page
title: Relationships
permalink: /categories/relationships/
description: Relationship essays and field notes from Blackthorn Field Notes.
---

# Relationships

Essays and field notes about connection, accountability, communication, conflict, repair, care, and what people owe each other.

<ul class="post-list">
{% for post in site.categories.relationships %}
  <li>
    <h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
    <p class="post-meta">{{ post.date | date: "%B %-d, %Y" }}</p>
    <p>{{ post.description | default: post.excerpt | strip_html | truncate: 220 }}</p>
  </li>
{% endfor %}
</ul>
