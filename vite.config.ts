import { defineConfig } from 'vite'
import deno from '@deno/vite-plugin'

// https://vite.dev/config/
export default defineConfig({
  plugins: [deno()],
  server: {
    port: 3000,
  },
  preview: {
    port: 3000,
  },
})
