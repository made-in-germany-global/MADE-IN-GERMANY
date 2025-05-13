import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Expose to all network interfaces
    port: 5173,
    watch: {
      usePolling: true, // Enable polling for file changes
      interval: 1000, // Check for changes every second
    },
  },
})