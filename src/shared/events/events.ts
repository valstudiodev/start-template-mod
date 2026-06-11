// ✔ описує функцію-обробник події
// ✔ приймає:

// e → native DOM event
// el → елемент, який відповідає selector’у

// 👉 це “контракт” для всіх кліків/інпутів
// ========================= Handler ==============================
type Handler = (e: Event, el: HTMLElement) => void;

type ListenerItem = {
  selector: string;
  handler: Handler;
};

const handlers: Map<string, ListenerItem[]> = new Map();
const globalListeners: Map<string, (e: Event) => void> = new Map();
// =========================== Add ===============================
// ✔ реєструє подію через event delegation
// ✔ підключає 1 listener на document (на event тип)
// ✔ знаходить елемент через closest(selector)
// ✔ викликає handler тільки якщо елемент знайдено
// 👉 заміняє десятки addEventListener
// ==========================================================
export function add(
  event: string,
  selector: string,
  handler: Handler
): void {
  if (!handlers.has(event)) {
    handlers.set(event, []);

    const listener = (e: Event) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      const list = handlers.get(event);
      if (!list) return;

      for (const item of list) {
        const el = target.closest(item.selector) as HTMLElement | null;
        if (el) item.handler(e, el);
      }
    };

    document.addEventListener(event, listener);
    globalListeners.set(event, listener);
  }

  handlers.get(event)!.push({ selector, handler });
}

// =========================== clearAllEvents =============================
// ✔ видаляє ВСІ глобальні event listeners
// ✔ очищає registry (Map)
// ✔ використовується при зміні сторінки
// 👉 запобігає:
// дублюванню подій
// memory leaks
// “подія спрацьовує кілька разів”
// ==========================================================
export function clearAllEvents(): void {
  for (const [event, listener] of globalListeners.entries()) {
    document.removeEventListener(event, listener);
  }

  handlers.clear();
  globalListeners.clear();
}
