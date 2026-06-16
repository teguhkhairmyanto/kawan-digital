import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue() // Memastikan Vite dapat mengompilasi file .vue dengan aman
  ],
  resolve: {
    alias: {
      // Menyediakan alias '@' yang mengarah ke folder 'src' jika diperlukan
      '@': '/src',
    },
  },
})