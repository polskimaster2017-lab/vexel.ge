import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  // პირდაპირ და გარკვევით ვეუბნებით Vite-ს, სად არის public ფოლდერი.
  // ეს არის სტანდარტული პარამეტრი, მაგრამ ჩვენ მას ვწერთ, რომ 100%-ით დარწმუნებულები ვიყოთ.
  publicDir: 'public',

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})