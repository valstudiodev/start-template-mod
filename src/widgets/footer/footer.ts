import './footer.scss'

export function initFooter(): void {
  const footer = document.querySelector(`.footer`) as HTMLElement
  if (!footer) return

  console.log('Footer initialized');

}