import { defineConfig, mergeConfig } from 'vitest/config'
import {sharedConfig} from './vite.config'

export default mergeConfig(sharedConfig, defineConfig({
  test: {
    environment: "jsdom",
    include: ["**/__tests__/*.{test,spec}.?(c|m)ts?(x)"],
    exclude: ["node_modules"],
  },
}))
