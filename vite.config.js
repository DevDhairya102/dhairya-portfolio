import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.png', '**/*.jpg', '**/*.pdf'],
  build: {
    outDir: 'dist',
    assetsInlineLimit: 10000000, // inline all assets since we use base64
  }
})
