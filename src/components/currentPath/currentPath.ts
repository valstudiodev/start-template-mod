export function initCurrentPath(): void {
  const links = document.querySelectorAll<HTMLAnchorElement>('.link');

  const currentPath = window.location.pathname;

  links.forEach((link) => {
    const linkPath = new URL(link.href).pathname;

    const isActive =
      linkPath === currentPath;

    link.classList.toggle('is-active', isActive);
  });
}

