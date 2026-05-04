document.addEventListener("DOMContentLoaded", function () {
  const input = document.getElementById("search-input");
  const results = document.getElementById("search-results");

  if (!input || !results) return;

  let posts = [];

  fetch("/search.json")
    .then(response => response.json())
    .then(data => {
      posts = data;
    })
    .catch(error => {
      console.error("Search index failed to load:", error);
    });

  input.addEventListener("input", function () {
    const query = input.value.toLowerCase().trim();

    results.innerHTML = "";

    if (query.length < 2) return;

    const matches = posts.filter(post => {
      const searchableText = `
        ${post.title}
        ${post.description}
        ${post.categories}
        ${post.tags}
        ${post.content}
      `.toLowerCase();

      return searchableText.includes(query);
    }).slice(0, 10);

    if (matches.length === 0) {
      results.innerHTML = "<li>No matching field notes found.</li>";
      return;
    }

    matches.forEach(post => {
      const li = document.createElement("li");

      li.innerHTML = `
        <a href="${post.url}">${post.title}</a>
        <p class="post-meta">${post.date} · ${post.categories}</p>
        <p>${post.description || ""}</p>
      `;

      results.appendChild(li);
    });
  });
});
