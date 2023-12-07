import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
        environment: 'jsdom',
        setupFiles: ['./src/setup.js'],
      testMatch: ['./tests/**/*.test.jsx'],
        globals: true,
        coverage: {
          all: true,
          
      },
  
      }
})
