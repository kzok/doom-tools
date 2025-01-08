import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  stories: [
    {
      directory: "../packages/app-wad-viewer/src/**",
      files: "*.stories.tsx",
    },
  ],
  addons: [
    "@chromatic-com/storybook",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
};
export default config;
