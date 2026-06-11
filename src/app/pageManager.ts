import { clearAllEvents } from '../shared/events/events';

// ✔ керує життєвим циклом сторінки
// ✔ робить cleanup попередньої сторінки
// ✔ ініціалізує нову сторінку
// 👉 забезпечує SPA-поведінку в MPA
// ==============================================================
let currentPage: string | null = null;

export function setPage(page: string, initFn: () => void): void {
  if (currentPage) {
    cleanup();
  }

  currentPage = page;
  initFn();
}

function cleanup(): void {
  clearAllEvents();

  const root = document.querySelector('#app');
  if (root) {
    root.innerHTML = '';
  }
}

