import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

import "@~/core/styles/reset.css";
import "@~/core/styles/global.css";
import "./preview.css";

export default preview;
