export function initAboutPage(): void {
  console.log('About page loaded');

  const btn = document.querySelector('#about-btn');

  btn?.addEventListener('click', () => {
    console.log('click');
  });
}


