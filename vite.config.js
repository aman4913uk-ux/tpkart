import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Keep animated WebP/GIF/photos as real files instead of inlining them as base64
  build: { assetsInlineLimit: 0 },
})
