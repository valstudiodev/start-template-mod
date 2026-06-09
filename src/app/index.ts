// Ціль: єдина точка входу для app-layer.
// Що робить:
// просто викликає initApp()
// Ідея: чистий entry без логіки. Vite/webpack підхоплює саме його.

import { initApp } from './init';

initApp();