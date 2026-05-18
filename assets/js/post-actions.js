document.addEventListener('DOMContentLoaded', () => {
  const shareButton = document.querySelector('[data-share-button]');
  const printButton = document.querySelector('[data-print-button]');

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
});
