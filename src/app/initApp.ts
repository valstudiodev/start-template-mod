import "../styles/main.scss"

// ================ initInput ================
import { initInputMode } from "./inputMode";
// ================ initLoading ================
import { initLoadAnimation } from "./initLoader";

import { initHeader } from "@widgets/header/header";
import { initFooter } from "@widgets/footer/footer";

// import { initAboutPage } from '../pages/about/about';
// import { initHomePage } from '../pages/home/home';
// import { initContactsPage } from '../pages/contacts/contacts';

// export function initApp(): void {
//   const page = document.body.dataset.page;

//   if (page === 'about') {
//     initAboutPage();
//   }

//   if (page === 'home') {
//     initHomePage();
//   }

//   if (page === 'contacts') {
//     initContactsPage();
//   }
// }


export async function initApp(): Promise<void> {
  initInputMode();
  initLoadAnimation();
  initHeader();
  initFooter();

  const page = document.body.dataset.page;

  if (page === 'about') {
    const module = await import('../pages/about/about');
    module.initAboutPage();
  }

  if (page === 'contacts') {
    const module = await import('../pages/contacts/contacts');
    module.initContactsPage();
  }

  if (page === 'home') {
    const module = await import('../pages/home/home');
    module.initHomePage();
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}




