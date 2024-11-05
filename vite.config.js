import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '',
  build: {
    outDir: 'out', // Change this to 'out'
    assetsDir: 'assets', // Ensure assets are placed correctly
  },
})


