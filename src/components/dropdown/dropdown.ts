import './_dropdown.scss';

export function initDropdowns(): void {
  const html = document.documentElement;
  const menuItems = document.querySelectorAll<HTMLElement>(
    '.menu-dropdown__item--submenu'
  );

  const closeAllMenus = (): void => {
    menuItems.forEach((item) => item.classList.remove('is-active'));
  };

  menuItems.forEach((item) => {
    const isTouch = () =>
      html.dataset.input === 'touch' || html.dataset.input === 'pen';


    item.addEventListener('click', (e: Event) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      if (!isTouch()) return;

      const link = target.closest<HTMLElement>('.menu-dropdown__link');
      if (!link) return;

      e.preventDefault();

      menuItems.forEach((el) => {
        if (el !== item) el.classList.remove('is-active');
      });

      item.classList.toggle('is-active');
    });

    item.addEventListener('focusin', () => {
      if (html.dataset.input !== 'keyboard') return;
      item.classList.add('is-active');
    });

    item.addEventListener('focusout', (e: FocusEvent) => {
      const related = e.relatedTarget as Node | null;

      if (!related || !item.contains(related)) {
        item.classList.remove('is-active');
      }
    });
  });

  document.addEventListener('click', (e: Event) => {
    const target = e.target as HTMLElement | null;
    if (!target) return;

    if (!target.closest('.menu-dropdown__item--submenu')) {
      closeAllMenus();
    }
  });

  document.addEventListener('keydown', (e: KeyboardEvent) => {
    if (e.key !== 'Escape') return;

    closeAllMenus();

    if (html.dataset.input === 'keyboard') {
      (document.activeElement as HTMLElement | null)?.blur?.();
    }
  });
}