export function initHomePage(): void {
  const btn = document.querySelector(`.btn`) as HTMLButtonElement

  btn?.addEventListener('click', () => {
    console.log('click');
  });
}