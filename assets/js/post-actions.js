document.addEventListener('DOMContentLoaded', () => {
  const shareButton = document.querySelector('[data-share-button]');
  const printButton = document.querySelector('[data-print-button]');
  const articleContent = document.querySelector('.post-content');
  const articleReader = document.querySelector('.article-reader');
  const readArticleButton = document.querySelector('[data-read-article]');
  const pauseArticleButton = document.querySelector('[data-pause-article]');
  const resumeArticleButton = document.querySelector('[data-resume-article]');
  const stopArticleButton = document.querySelector('[data-stop-article]');
  const readerSpeedSelect = document.querySelector('[data-reader-speed]');
  const readerStatus = document.querySelector('[data-reader-status]');
  const articleToc = document.querySelector('.article-toc');
  const articleTocList = document.querySelector('[data-article-toc-list]');

  let currentUtterance = null;

  function setReaderStatus(message) {
    if (readerStatus) {
      readerStatus.textContent = message;
    }
  }

  function updateReaderControls(state) {
    const isReading = state === 'reading';
    const isPaused = state === 'paused';

    if (readArticleButton) {
      readArticleButton.disabled = isReading || isPaused;
    }

    if (pauseArticleButton) {
      pauseArticleButton.disabled = !isReading;
    }

    if (resumeArticleButton) {
      resumeArticleButton.disabled = !isPaused;
    }

    if (stopArticleButton) {
      stopArticleButton.disabled = !isReading && !isPaused;
    }
  }

  function getArticleText() {
    return articleContent ? articleContent.innerText.replace(/\s+/g, ' ').trim() : '';
  }

  function getReaderSpeed() {
    if (!readerSpeedSelect) {
      return 0.95;
    }

    return parseFloat(readerSpeedSelect.value) || 0.95;
  }

  function stopReading(statusMessage) {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }

    currentUtterance = null;
    updateReaderControls('stopped');
    setReaderStatus(statusMessage || '');
  }

  function slugifyHeading(text, usedSlugs) {
    const baseSlug = text
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-') || 'section';

    let slug = baseSlug;
    let suffix = 2;

    while (usedSlugs.has(slug)) {
      slug = `${baseSlug}-${suffix}`;
      suffix += 1;
    }

    usedSlugs.add(slug);
    return slug;
  }

  function buildArticleToc() {
    if (!articleContent || !articleToc || !articleTocList) {
      return;
    }

    const headings = Array.from(articleContent.querySelectorAll('h2, h3'));

    if (headings.length < 2) {
      return;
    }

    const usedSlugs = new Set();
    const fragment = document.createDocumentFragment();

    headings.forEach(heading => {
      if (!heading.id) {
        heading.id = slugifyHeading(heading.textContent, usedSlugs);
      } else {
        usedSlugs.add(heading.id);
      }

      const item = document.createElement('li');
      const link = document.createElement('a');

      link.href = `#${heading.id}`;
      link.textContent = heading.textContent;
      item.appendChild(link);
      fragment.appendChild(item);
    });

    articleTocList.replaceChildren(fragment);
    articleToc.hidden = false;
  }

  function setupArticleReader() {
    if (!articleReader) {
      return;
    }

    const speechSupported = 'speechSynthesis' in window && 'SpeechSynthesisUtterance' in window;

    if (!speechSupported) {
      articleReader.hidden = true;
      return;
    }

    updateReaderControls('stopped');

    if (readArticleButton) {
      readArticleButton.addEventListener('click', () => {
        const text = getArticleText();

        if (!text) {
          setReaderStatus('No article text found.');
          return;
        }

        stopReading();

        currentUtterance = new SpeechSynthesisUtterance(text);
        currentUtterance.rate = getReaderSpeed();
        currentUtterance.pitch = 1;

        currentUtterance.onstart = () => {
          updateReaderControls('reading');
          setReaderStatus('Reading article aloud.');
        };

        currentUtterance.onpause = () => {
          updateReaderControls('paused');
          setReaderStatus('Reading paused.');
        };

        currentUtterance.onresume = () => {
          updateReaderControls('reading');
          setReaderStatus('Reading resumed.');
        };

        currentUtterance.onend = () => {
          currentUtterance = null;
          updateReaderControls('stopped');
          setReaderStatus('Finished reading.');
        };

        currentUtterance.onerror = () => {
          currentUtterance = null;
          updateReaderControls('stopped');
          setReaderStatus('Reading stopped.');
        };

        window.speechSynthesis.speak(currentUtterance);
      });
    }

    if (pauseArticleButton) {
      pauseArticleButton.addEventListener('click', () => {
        if (window.speechSynthesis.speaking && !window.speechSynthesis.paused) {
          window.speechSynthesis.pause();
        }
      });
    }

    if (resumeArticleButton) {
      resumeArticleButton.addEventListener('click', () => {
        if (window.speechSynthesis.paused) {
          window.speechSynthesis.resume();
        }
      });
    }

    if (stopArticleButton) {
      stopArticleButton.addEventListener('click', () => {
        stopReading('Reading stopped.');
      });
    }

    if (readerSpeedSelect) {
      readerSpeedSelect.addEventListener('change', () => {
        if (window.speechSynthesis.speaking || window.speechSynthesis.paused) {
          setReaderStatus('Speed will apply the next time reading starts.');
        }
      });
    }

    window.addEventListener('beforeunload', () => {
      window.speechSynthesis.cancel();
    });
  }

  if (shareButton) {
    shareButton.addEventListener('click', async () => {
      try {
        if (navigator.share) {
          await navigator.share({
            title: document.title,
            url: window.location.href
          });
        } else if (navigator.clipboard) {
          await navigator.clipboard.writeText(window.location.href);

          const originalText = shareButton.textContent;
          shareButton.textContent = 'Link copied';

          setTimeout(() => {
            shareButton.textContent = originalText;
          }, 2000);
        }
      } catch (error) {
        console.error(error);
      }
    });
  }

  if (printButton) {
    printButton.addEventListener('click', () => {
      window.print();
    });
  }

  buildArticleToc();
  setupArticleReader();
});
