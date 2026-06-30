document.addEventListener('DOMContentLoaded', function () {
  const input = document.getElementById('search-input');
  const results = document.getElementById('search-results');

  if (!input || !results) return;

  let posts = [];

  function clearResults() {
    results.replaceChildren();
  }

  function appendEmptyResult(title, message) {
    const item = document.createElement('li');
    const strong = document.createElement('strong');
    const paragraph = document.createElement('p');

    item.className = 'search-empty';
    strong.textContent = title;
    paragraph.textContent = message;

    item.append(strong, paragraph);
    results.appendChild(item);
  }

  function appendPostResult(post) {
    const item = document.createElement('li');
    const heading = document.createElement('h3');
    const link = document.createElement('a');
    const metadata = document.createElement('p');
    const description = document.createElement('p');

    link.href = post.url;
    link.textContent = post.title;
    heading.appendChild(link);

    metadata.className = 'post-meta';
    metadata.textContent = [post.date, post.categories].filter(Boolean).join(' · ');

    description.textContent = post.description || '';

    item.append(heading, metadata, description);
    results.appendChild(item);
  }

  fetch('/search.json')
    .then(response => response.json())
    .then(data => {
      posts = data;
    })
    .catch(error => {
      console.error('Search index failed to load:', error);
      appendEmptyResult('Search is unavailable.', 'Please try browsing by category instead.');
    });

  input.addEventListener('input', function () {
    const query = input.value.toLowerCase().trim();
    clearResults();

    if (query.length < 2) {
      return;
    }

    const matches = posts.filter(post => {
      const searchableText = `${post.title} ${post.description} ${post.categories} ${post.tags} ${post.content}`.toLowerCase();
      return searchableText.includes(query);
    }).slice(0,10);

    if (matches.length === 0) {
      appendEmptyResult('No Field Notes found.', 'Try another topic or keyword.');
      return;
    }

    matches.forEach(appendPostResult);
  });
});
