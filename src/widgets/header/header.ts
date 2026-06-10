import './header.scss'

export function initHeader(): void {
  const header = document.querySelector(`.header`) as HTMLElement
  if (!header) return

  console.log('Header initialized');

}