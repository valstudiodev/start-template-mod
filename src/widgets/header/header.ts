import './header.scss'

export function initHeader(): void {
  const header = document.querySelector(`.header`) as HTMLElement
  if (!header) return

  console.log('Header initialized');

  scrollHeaderHide()
}


function scrollHeaderHide(): void {
  const header = document.querySelector('.header') as HTMLElement

  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;

    if (currentScroll <= 50) {
      header.classList.remove('hide');
      return;
    }

    if (currentScroll > lastScroll) {
      header.classList.add('hide');
    } else {
      header.classList.remove('hide');
    }

    lastScroll = currentScroll;
  });
}