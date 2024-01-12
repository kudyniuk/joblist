import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        rewrite: (path) => {
          console.log("Path")
          return path.replace('/api', '')
        },
        changeOrigin: true,
        secure: false
      }
    }
  }
})
