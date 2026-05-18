---
layout: page
title: All Field Notes
permalink: /all/
description: Browse every Blackthorn Field Notes article by date and category.
---

<section class="all-posts-header">
  <h1>All Field Notes</h1>

  <p>
    Browse every article published on Blackthorn Field Notes.
  </p>
</section>

<section class="all-posts-controls">
  <label>
    Search
    <input type="text" id="all-posts-search" placeholder="Search articles...">
  </label>

  <label>
    Sort
    <select id="all-posts-sort">
      <option value="newest">Newest First</option>
      <option value="oldest">Oldest First</option>
      <option value="title">Title</option>
    </select>
  </label>

  <label>
    Category
    <select id="all-posts-category">
      <option value="all">All Categories</option>
      {% assign categories = site.categories | sort %}
      {% for category in categories %}
        <option value="{{ category[0] | downcase }}">{{ category[0] }}</option>
      {% endfor %}
    </select>
  </label>
</section>

<section class="all-posts-list">
  <ul id="all-posts-container" class="post-list">
    {% for post in site.posts %}
      <li
        class="all-post-item"
        data-title="{{ post.title | downcase }}"
        data-date="{{ post.date | date: '%s' }}"
        data-categories="{{ post.categories | join: ' ' | downcase }}"
      >
        <h2>
          <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
        </h2>

        <p class="post-meta">
          {{ post.date | date: "%B %-d, %Y" }}
          {% if post.categories %}
            · {{ post.categories | join: ", " }}
          {% endif %}
        </p>

        {% if post.description %}
          <p>{{ post.description }}</p>
        {% else %}
          <p>{{ post.excerpt | strip_html | truncate: 220 }}</p>
        {% endif %}
      </li>
    {% endfor %}
  </ul>
</section>

<script>
document.addEventListener('DOMContentLoaded', function () {
  const searchInput = document.getElementById('all-posts-search');
  const sortSelect = document.getElementById('all-posts-sort');
  const categorySelect = document.getElementById('all-posts-category');
  const container = document.getElementById('all-posts-container');

  if (!container) return;

  function updatePosts() {
    const items = Array.from(container.querySelectorAll('.all-post-item'));
    const query = searchInput.value.toLowerCase().trim();
    const category = categorySelect.value;
    const sort = sortSelect.value;

    items.forEach(item => {
      const title = item.dataset.title;
      const categories = item.dataset.categories;

      const matchesSearch = !query || title.includes(query) || categories.includes(query);
      const matchesCategory = category === 'all' || categories.includes(category);

      item.style.display = matchesSearch && matchesCategory ? '' : 'none';
    });

    const visibleItems = items.filter(item => item.style.display !== 'none');

    visibleItems.sort((a, b) => {
      if (sort === 'oldest') {
        return Number(a.dataset.date) - Number(b.dataset.date);
      }

      if (sort === 'title') {
        return a.dataset.title.localeCompare(b.dataset.title);
      }

      return Number(b.dataset.date) - Number(a.dataset.date);
    });

    visibleItems.forEach(item => container.appendChild(item));
  }

  searchInput.addEventListener('input', updatePosts);
  sortSelect.addEventListener('change', updatePosts);
  categorySelect.addEventListener('change', updatePosts);
});
</script>
