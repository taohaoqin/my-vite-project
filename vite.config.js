import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { resolve } from 'path'
// https://vitejs.dev/config/

function pathResolve(dir) {
  return resolve(process.cwd(), '.', dir)
}

export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: pathResolve('src')
      },
    ],
    dedupe: ['vue']
  },
  server: {
    host: true,
    port: 8080,
  }
})
