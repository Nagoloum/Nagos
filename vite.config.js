import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Le chunk Three.js (~570 kB) est chargé à la demande par la sphère 3D
    chunkSizeWarningLimit: 650,
  },
})
