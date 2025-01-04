import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

/**
 * @see https://vite.dev/config/
 */
export const sharedConfig = defineConfig({
  plugins: [react()],
})
