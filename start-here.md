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
  <a class="start-card" href="/categories/disability/">
    <strong>Disability & Access</strong>
    <span>For writing about pain, mobility, healthcare, access barriers, and what it means to survive inside systems that were not built for disabled people.</span>
  </a>

  <a class="start-card" href="/categories/advocacy/">
    <strong>Advocacy</strong>
    <span>For pieces about speaking plainly, naming harm, challenging institutions, and refusing to disappear quietly.</span>
  </a>

  <a class="start-card" href="/categories/systems/">
    <strong>Systems & Power</strong>
    <span>For essays that ask what failed, who benefits, who gets left behind, and what needs to change.</span>
  </a>

  <a class="start-card" href="/categories/technology/">
    <strong>Technology</strong>
    <span>For systems thinking, tech culture, digital life, access, security, and the ways technology shapes human survival.</span>
  </a>

  <a class="start-card" href="/categories/relationships/">
    <strong>Relationships & Boundaries</strong>
    <span>For writing about love, accountability, repair, communication, power, rupture, and the boundaries that keep people human.</span>
  </a>

  <a class="start-card" href="/categories/personal-essays/">
    <strong>Personal Essays</strong>
    <span>For the more intimate pieces: survival, grief, identity, hope, pain, truth, and the language people reach for when they need to feel less alone.</span>
  </a>
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
