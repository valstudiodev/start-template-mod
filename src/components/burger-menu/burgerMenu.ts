
import './_burgerMenu.scss'

export function burgerMenuInit(): void {
  document.addEventListener('click', (e) => {
    const target = e.target as HTMLElement | null;
    if (!target) return;

    if (!target.closest('.icon-menu')) return;

    const isOpen = document.body.classList.contains('menu-open');

    document.body.classList.toggle('menu-open', !isOpen);
    document.body.classList.toggle('scroll-lock', !isOpen);
    document.documentElement.classList.toggle('menu-open', !isOpen);
  });
}