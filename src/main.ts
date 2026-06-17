import './styles/main.scss'

import { initApp } from "./app/initApp";

console.log('MAIN LOADED');

const run = (): void => {
  initApp();
};
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', run);
} else {
  run();
}

