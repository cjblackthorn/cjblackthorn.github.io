---
layout: page
title: Access
permalink: /categories/access/
description: Access essays and field notes from Blackthorn Field Notes.
---

Access essays now live with the Accessibility category.

<p><a href="{{ '/categories/accessibility/' | relative_url }}">Browse Accessibility &rarr;</a></p>

<ul class="post-list">
{% for post in site.posts %}
  {% if post.categories contains 'access' or post.tags contains 'access' %}
    <li>
      <h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
      <p class="post-meta">{{ post.date | date: "%B %-d, %Y" }}</p>
      <p>{{ post.description | default: post.excerpt | strip_html | truncate: 220 }}</p>
    </li>
  {% endif %}
{% endfor %}
</ul>
