import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  assetsInclude: ['**/*.PNG', '**/*.JPG', '**/*.JPEG'],
  server: {
    watch: {
      // Ignore files that OneDrive may lock during sync
      ignored: [
        '**/src/assets/*.png',
        '**/src/assets/*.jpg',
        '**/.git/**',
      ],
    },
  },
})
