// Ціль: ініціалізація всієї системи.
// Тут запускається:
// router
// глобальні компоненти (header/footer)
// сервіси (storage, api, analytics)
// Ідея: це “двигун”, який збирає систему докупи.

// export const bootstrap = () => {
//   console.log('[APP] bootstrap initialized');

//   // тут майбутні ініціалізації:
//   // - router
//   // - layouts
//   // - services
// };

// let isBound = false;

// export function bootstrap(): void {
//   if (isBound) return;
//   isBound = true;

//   document.addEventListener('click', (e) => {
//     const target = e.target as HTMLElement;

//     const link = target.closest('a');
//     if (!link) return;

//     const href = link.getAttribute('href');
//     if (!href || href.startsWith('http')) return;

//     e.preventDefault();

//     window.history.pushState({}, '', href);
//     window.dispatchEvent(new PopStateEvent('popstate'));
//   });
// }

export function bootstrap(): void {
  console.log('shared init logic')
}