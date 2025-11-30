import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,           // Permite usar describe, expect, it sem importar
    environment: 'jsdom',    // Simula o navegador
    setupFiles: './src/setupTests.js', // Arquivo de configuração que vamos criar
  },
})