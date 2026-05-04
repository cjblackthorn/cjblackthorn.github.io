---
layout: page
title: Start Here
permalink: /start-here/
description: A guided starting point for Blackthorn Field Notes by C. J. Blackthorn.
image: /assets/images/blackthorn-field-notes-card.PNG
---

# Start Here

Blackthorn Field Notes is a place for essays about systems, survival, technology, relationships, disability, access, boundaries, and the work of staying human.

If you are new here, you do not have to read everything in order. Start with the doorway that sounds closest to what brought you here.

<div class="start-grid">
  <div class="start-card">
    <a class="start-card-title" href="/categories/disability/">Disability &amp; Access</a>
    <span>For writing about pain, mobility, healthcare, access barriers, and what it means to survive inside systems that were not built for disabled people.</span>
  </div>

  <div class="start-card">
    <a class="start-card-title" href="/categories/advocacy/">Advocacy</a>
    <span>For pieces about speaking plainly, naming harm, challenging institutions, and refusing to disappear quietly.</span>
  </div>

  <div class="start-card">
    <a class="start-card-title" href="/categories/systems/">Systems &amp; Power</a>
    <span>For essays that ask what failed, who benefits, who gets left behind, and what needs to change.</span>
  </div>

  <div class="start-card">
    <a class="start-card-title" href="/categories/technology/">Technology</a>
    <span>For systems thinking, tech culture, digital life, access, security, and the ways technology shapes human survival.</span>
  </div>

  <div class="start-card">
    <a class="start-card-title" href="/categories/relationships/">Relationships &amp; Boundaries</a>
    <span>For writing about love, accountability, repair, communication, power, rupture, and the boundaries that keep people human.</span>
  </div>

  <div class="start-card">
    <a class="start-card-title" href="/categories/personal-essays/">Personal Essays</a>
    <span>For the more intimate pieces: survival, grief, identity, hope, pain, truth, and the language people reach for when they need to feel less alone.</span>
  </div>
</div>

## Latest Field Notes

<ul class="post-list">
  {% for post in site.posts limit:8 %}
    <li>
      <h3>
        <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
      </h3>

      <p class="post-meta">
        {{ post.date | date: "%B %-d, %Y" }}
      </p>

      {% if post.description %}
        <p>{{ post.description }}</p>
      {% else %}
        <p>{{ post.excerpt | strip_html | truncate: 180 }}</p>
      {% endif %}
    </li>
  {% endfor %}
</ul>

<p><a href="{{ '/news/' | relative_url }}">Read all posts →</a></p>
