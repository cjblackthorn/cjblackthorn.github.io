document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.getElementById('site-menu-toggle');
  const menuButton = document.querySelector('[data-site-menu-button]');
  const menuList = document.querySelector('[data-site-menu-list]');
  const menuDetails = Array.from(document.querySelectorAll('.site-menu-details'));

  function isMobileMenu() {
    return window.matchMedia('(max-width: 760px)').matches;
  }

  function setMenuExpanded(expanded) {
    if (!menuToggle || !menuButton) return;

    menuToggle.checked = expanded;
    menuButton.setAttribute('aria-expanded', expanded ? 'true' : 'false');
  }

  function closeSubmenus(exceptDetails) {
    menuDetails.forEach(details => {
      if (details !== exceptDetails) {
        details.removeAttribute('open');
      }
    });
  }

  if (menuToggle && menuButton && menuList) {
    setMenuExpanded(menuToggle.checked);

    menuToggle.addEventListener('change', function () {
      setMenuExpanded(menuToggle.checked);
    });

    menuButton.addEventListener('keydown', function (event) {
      if (event.key !== 'Enter' && event.key !== ' ') return;

      event.preventDefault();
      setMenuExpanded(!menuToggle.checked);
    });

    menuList.addEventListener('click', function (event) {
      if (!isMobileMenu() || !event.target.closest('a')) return;

      setMenuExpanded(false);
      closeSubmenus();
    });
  }

  menuDetails.forEach(details => {
    details.addEventListener('toggle', function () {
      if (details.open) {
        closeSubmenus(details);
      }
    });
  });

  document.addEventListener('keydown', function (event) {
    if (event.key !== 'Escape') return;

    const menuWasExpanded = Boolean(menuToggle && menuToggle.checked);
    const submenuWasExpanded = menuDetails.some(details => details.open);

    setMenuExpanded(false);
    closeSubmenus();

    if (menuButton && isMobileMenu() && (menuWasExpanded || submenuWasExpanded)) {
      menuButton.focus();
    }
  });

  document.addEventListener('click', function (event) {
    if (event.target.closest('.site-menu')) return;

    setMenuExpanded(false);
    closeSubmenus();
  });
});
