document.addEventListener("click", (e) => {
  // 1. Шукаємо кнопку-заголовок через closest (делегування)
  const btn = e.target.closest("[data-accordion-btn]");
  if (!btn) return;

  // 2. Знаходимо батьківський елемент та потрібні деталі
  const accordion = btn.closest("[data-accordion]");
  const body = accordion.querySelector("[data-accordion-body]");
  const icon = btn.querySelector("[data-accordion-icon]");

  if (!body) return;

  const isOpen = accordion.classList.contains("is-open");

  if (!isOpen) {
    // --- ВІДКРИТТЯ ---
    accordion.classList.add("is-open");
    if (icon) icon.classList.add("icon-active"); // Клас активної іконки

    body.style.height = `${body.scrollHeight}px`;

    body.addEventListener("transitionend", function handler() {
      if (accordion.classList.contains("is-open")) {
        body.style.height = "auto";
      }
      body.removeEventListener("transitionend", handler);
    }, { once: true });

  } else {
    // --- ЗАКРИТТЯ ---
    body.style.height = `${body.scrollHeight}px`;
    body.offsetHeight; // force reflow

    requestAnimationFrame(() => {
      body.style.height = "0";
      accordion.classList.remove("is-open");
      if (icon) icon.classList.remove("icon-active"); // Прибираємо клас
    });
  }
});