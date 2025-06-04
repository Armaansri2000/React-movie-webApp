import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config
export default defineConfig({
  plugins: [react()],
  server: {
    open: true // 👈 this will open the default browser automatically
  }
})
