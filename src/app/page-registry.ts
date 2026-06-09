// ===============================
// Page Registry + Lazy Loader
// ===============================

export type PageModule = {
  init: () => void;
};

// 1. Registry сторінок
// Тут НЕ імпортуємо одразу — тільки функції-лоадери
export const pageRegistry = {
  home: (): Promise<PageModule> =>
    import('@pages/home').then((m) => ({
      init: m.initHomePage,
    })),

  about: (): Promise<PageModule> =>
    import('@pages/about').then((m) => ({
      init: m.initAboutPage,
    })),

  contacts: (): Promise<PageModule> =>
    import('@pages/contacts').then((m) => ({
      init: m.initContactsPage,
    })),
}

// ===============================
// Router-lite (lazy init engine)
// ===============================
type PageName = keyof typeof pageRegistry;

class PageRouter {
  private currentPage: PageName | null = null;

  async init(): Promise<void> {
    const page = this.getPageFromURL();
    await this.loadPage(page);

    window.addEventListener('popstate', async () => {
      const newPage = this.getPageFromURL();
      await this.loadPage(newPage);
    });
  }

  private getPageFromURL(): PageName {
    const base = import.meta.env.BASE_URL;

    let path = window.location.pathname;

    if (path.startsWith(base)) {
      path = path.replace(base, '');
    }

    path = path.replace(/^\/+/, '');

    return (path || 'home') as PageName;
  }

  async loadPage(pageName: string): Promise<void> {
    if (this.currentPage === pageName) return;

    const loader = pageRegistry[pageName as PageName];

    if (!loader) {
      console.warn(`Page "${pageName}" not found`);
      return;
    }

    this.destroyCurrentPage();

    const module = await loader();
    module.init();

    this.currentPage = pageName as PageName;
  }

  private destroyCurrentPage(): void {
    const root = document.querySelector('#app');
    if (root) root.innerHTML = '';
  }
}

// ===============================
// Bootstrap
// ===============================

export const router = new PageRouter();

// main.ts
router.init();