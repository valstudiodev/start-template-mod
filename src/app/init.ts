// Ціль: точка старту застосунку.
// Що робить:
// запускає bootstrap
// може підключати базові сервіси
// Ідея: це “пускова кнопка”, але без логіки.

import { bootstrap } from './bootstrap';

// export const initApp = () => {
//   bootstrap();
// };

import { pageRegistry } from './page-registry'

export const initApp = async (): Promise<void> => {
  const pageName = document.body.dataset.page

  if (!pageName) return

  const pageLoader = pageRegistry[pageName as keyof typeof pageRegistry]

  if (!pageLoader) return

  const page = await pageLoader()

  page.init()
  bootstrap();
}