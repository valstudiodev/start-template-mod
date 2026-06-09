// Ціль: підключити app + глобальні стилі.
// Що тут:
// import './app'
// import styles
// Ідея: це міст між Vite і твоєю архітектурою.

import './app/init';
import './styles/main.scss'

import { initApp } from '@app/init'

initApp()

console.log('App initialized')







import { test } from '@shared/test'

console.log(test)
