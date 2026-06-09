import { defineConfig } from 'vite'
import { resolve } from 'node:path'

const isGitHub = process.env.GITHUB_PAGES_BUILD === "true";

export default defineConfig({
  // base: '/start-template-mod/', // назва репозиторію GitHub
  base: isGitHub ? "/start-template-mod/" : "/",

  build: {
    rollupOptions: {
      input: {
        home: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        contacts: resolve(__dirname, 'contacts.html'),
      }
    }
  },

  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@app': resolve(__dirname, './src/app'),
      '@pages': resolve(__dirname, './src/pages'),
      '@components': resolve(__dirname, './src/components'),
      '@shared': resolve(__dirname, './src/shared'),
      '@assets': resolve(__dirname, './src/assets')
    }
  }
})