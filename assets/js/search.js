document.addEventListener('DOMContentLoaded', function () {
  const input = document.getElementById('search-input');
  const results = document.getElementById('search-results');
  const status = document.getElementById('search-status');

  if (!input || !results) return;

  let posts = [];
  let searchReady = false;
  let searchFailed = false;

  function clearResults() {
    results.replaceChildren();
  }

  function setStatus(message) {
    if (status) {
      status.textContent = message;
    }
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

  function announceMatchCount(count) {
    if (count === 1) {
      setStatus('1 Field Note found.');
      return;
    }

    setStatus(`${count} Field Notes found.`);
  }

  function runSearch() {
    const query = input.value.toLowerCase().trim();
    clearResults();
    results.removeAttribute('aria-busy');

    if (query.length < 2) {
      setStatus('');
      return;
    }

    if (searchFailed) {
      appendEmptyResult('Search is unavailable.', 'Please try browsing by category instead.');
      setStatus('Search is unavailable.');
      return;
    }

    if (!searchReady) {
      results.setAttribute('aria-busy', 'true');
      appendEmptyResult('Search is loading.', 'Results will appear when the index is ready.');
      setStatus('Search is loading.');
      return;
    }

    const matches = posts.filter(post => {
      const searchableText = [
        post.title,
        post.description,
        post.categories,
        post.tags,
        post.content
      ].filter(Boolean).join(' ').toLowerCase();

      return searchableText.includes(query);
    }).slice(0, 10);

    if (matches.length === 0) {
      appendEmptyResult('No Field Notes found.', 'Try another topic or keyword.');
      setStatus('No Field Notes found.');
      return;
    }

    announceMatchCount(matches.length);
    matches.forEach(appendPostResult);
  }

  fetch('/search.json')
    .then(response => {
      if (!response.ok) {
        throw new Error('Search index request failed.');
      }

      return response.json();
    })
    .then(data => {
      posts = Array.isArray(data) ? data : [];
      searchReady = true;

      if (input.value.trim().length >= 2) {
        runSearch();
      }
    })
    .catch(error => {
      console.error('Search index failed to load:', error);
      searchFailed = true;
      runSearch();
    });

  input.addEventListener('input', runSearch);
});
