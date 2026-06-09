export const router = {
  getCurrentPage() {
    return document.body.dataset.page || 'home';
  },
};