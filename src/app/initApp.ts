import "../styles/main.scss"

import { initAboutPage } from '../pages/about/about';
import { initContactsPage } from '../pages/contacts/contacts';
import { initHomePage } from '../pages/home/home';

export function initApp(): void {
  const page = document.body.dataset.page;

  if (!page) return;

  switch (page) {
    case 'about':
      initAboutPage();
      break;

    case 'contacts':
      initContactsPage();
      break;

    case 'home':
      initHomePage();
      break;

    default:
      console.warn(`Unknown page: ${page}`);
  }
}
