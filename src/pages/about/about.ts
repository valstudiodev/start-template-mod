export function initAboutPage(): void {
  const btn = document.querySelector<HTMLButtonElement>('#about-btn');

  btn?.addEventListener('click', () => {
    console.log('About clicked');
  });
}

