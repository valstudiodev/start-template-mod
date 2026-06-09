// Ціль: єдина точка входу для app-layer.
// Що робить:
// просто викликає initApp()
// Ідея: чистий entry без логіки. Vite/webpack підхоплює саме його.

import "../styles/main.scss"

import { initApp } from './init';

initApp();



// import '../styles/main.scss';

// import { bootstrap } from './bootstrap';

// bootstrap();