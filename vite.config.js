import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // <-- Import indispensable

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // <-- Activation du plugin
  ],
})
