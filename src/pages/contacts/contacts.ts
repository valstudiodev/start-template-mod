export function initContactsPage(): void {
  const btn = document.querySelector(`.btn-cont`)

  btn?.addEventListener('click', () => {
    console.log('click');
  });
}