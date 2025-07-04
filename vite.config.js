import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/itran-film/', // ESSENCIAL pro GitHub Pages funcionar direitinho
})
