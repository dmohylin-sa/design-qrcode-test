import path from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // Relative base so the build runs from any sub-path on a static host.
  base: './',
  plugins: [react()],
  resolve: { alias: { '@': path.resolve(import.meta.dirname, './src') } },
  build: {
    // The pages are whole screens in one file and the dataset is inlined, so the bundle
    // is large by design. One request, no loading states mid-demo.
    chunkSizeWarningLimit: 4000,
  },
})
