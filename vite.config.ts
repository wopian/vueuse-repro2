import createVuePlugin from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    createVuePlugin({
      reactivityTransform: true
    })
  ]
})
