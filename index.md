---
layout: default
title: Blackthorn Field Notes
description: Systems, survival, technology, relationships, and the work of staying human.
image: /assets/images/blackthorn-field-notes-card.PNG
---

<section class="home-hero">
  <img
    src="/assets/images/blackthorn-field-notes-card.PNG"
    alt="Blackthorn Field Notes banner"
    class="home-hero-image"
  >

  <h1>Blackthorn Field Notes</h1>

  <p class="tagline">
    Systems, survival, technology, relationships, and the work of staying human.
  </p>

  <p>
    Blackthorn Field Notes is a collection of essays by C. J. Blackthorn about
    advocacy, disability, access, technology, relationships, boundaries,
    survival, and the systems people are forced to live inside.
  </p>

  <p>
    I write about the things people are often expected to endure quietly:
    broken healthcare, inaccessible systems, poverty, trauma, love, power,
    technology, and what it means to keep going anyway.
  </p>

  <p>
    <a class="home-start-button" href="{{ '/start-here/' | relative_url }}">Start here →</a>
  </p>
</section>

<section class="home-search">
  <h2>Search the Field Notes</h2>
  <input
    type="text"
    id="search-input"
    placeholder="Search articles..."
    aria-label="Search articles"
  >
  <ul id="search-results"></ul>
</section>

<section class="featured-posts">
  <h2>Featured Field Notes</h2>

  <p>
    New here? These categories are good places to begin.
  </p>

  <div class="featured-grid">
    <div class="featured-card">
      <a class="featured-card-title" href="{{ '/start-here/' | relative_url }}">Start Here</a>
      <span>A guided path through Blackthorn Field Notes by theme and purpose.</span>
    </div>

    <div class="featured-card">
      <a class="featured-card-title" href="{{ '/categories/disability/' | relative_url }}">Disability &amp; Access</a>
      <span>Essays about pain, mobility, healthcare, accessibility, and systems that fail disabled people.</span>
    </div>

    <div class="featured-card">
      <a class="featured-card-title" href="{{ '/categories/systems/' | relative_url }}">Systems &amp; Power</a>
      <span>Writing that asks what failed, who benefits, who is left behind, and what needs to change.</span>
    </div>
  </div>
</section>

<section class="latest-posts">
  <h2>Latest Field Notes</h2>

  <ul class="post-list">
    {% for post in site.posts limit:5 %}
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
</section>

<section class="category-links">
  <h2>Browse by Category</h2>

  <div class="category-grid">
    <a href="/categories/advocacy/">Advocacy</a>
    <a href="/categories/disability/">Disability</a>
    <a href="/categories/accessibility/">Accessibility</a>
    <a href="/categories/healthcare/">Healthcare</a>
    <a href="/categories/technology/">Technology</a>
    <a href="/categories/systems/">Systems</a>
    <a href="/categories/relationships/">Relationships</a>
    <a href="/categories/boundaries/">Boundaries</a>
    <a href="/categories/survival/">Survival</a>
    <a href="/categories/personal-essays/">Personal Essays</a>
  </div>
</section>

<section class="subscribe-callout">
  <h2>Subscribe</h2>

  <p>
    Follow Blackthorn Field Notes to get new essays, resources, and field notes
    when they are published.
  </p>

  <p><a href="{{ '/subscribe/' | relative_url }}">Subscribe here →</a></p>
</section>

<script src="{{ '/assets/js/search.js' | relative_url }}"></script>
