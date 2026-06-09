// Ціль: підготовка до навігації між сторінками.
// Зараз (MPA):
// читає data-page
// Пізніше (SPA):
// стане справжнім роутером
// Ідея: не міняти архітектуру при переході на SPA.

export const router = {
  getCurrentPage() {
    return document.body.dataset.page || 'home';
  },
};