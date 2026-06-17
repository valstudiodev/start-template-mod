import "../styles/main.scss"

// =============================================
// ================ initLoading ================
// =============================================
import { initLoadAnimation } from "./initLoader";
// =============================================
// ================ pageManager ================
// =============================================
import { setPage } from './pageManager';
// =============================================
// ================ initInput ==================
// =============================================
import { initInputMode } from "./inputMode";

// =============================================
// =============== Components ==================
// =============================================
import { initCurrentPath, burgerMenuInit, initDropdowns } from "../components";

// =============================================
// ============== initialisations ==============
// =============================================
import { initHeader } from "@widgets/header/header";
import { initFooter } from "@widgets/footer/footer";

import { initAboutPage } from '../pages/about/about';
import { initHomePage } from '../pages/home/home';
import { initContactsPage } from '../pages/contacts/contacts';

export function initApp(): void {
  initLoadAnimation();
  initInputMode();
  initHeader();
  initFooter();
  burgerMenuInit();
  initCurrentPath();
  initDropdowns()


  const page = document.body.dataset.page;

  if (page === 'about') {
    setPage('about', initAboutPage);
  }

  if (page === 'home') {
    setPage('home', initHomePage);
  }

  if (page === 'contacts') {
    setPage('contacts', initContactsPage);
  }
}

// export async function initApp(): Promise<void> {
//   initInputMode();
//   initLoadAnimation();
//   initHeader();
//   initFooter();

//   const page = document.body.dataset.page;

//   if (page === 'about') {
//     const module = await import('../pages/about/about');
//     module.initAboutPage();
//   }

//   if (page === 'contacts') {
//     const module = await import('../pages/contacts/contacts');
//     module.initContactsPage();
//   }

//   if (page === 'home') {
//     const module = await import('../pages/home/home');
//     module.initHomePage();
//   }
// }





