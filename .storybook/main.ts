import type { StorybookConfig } from "@storybook/nextjs";
const path = require("path");
const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    {
      name: "@storybook/addon-styling",
      options: {
        sass: {
          // Require your Sass preprocessor here
          implementation: require("sass"),
        },
      },
    },
  ],
  framework: {
    name: "@storybook/nextjs",
    // Other configuration options...

    options: {},
  },
  webpackFinal: async (config, { configType }) => {
    // Add or modify the following lines to resolve path aliases
    if (config.resolve) {
      config.resolve.alias = {
        ...config.resolve.alias,
        "@components": path.resolve(__dirname, "../src/components"),
        "@utils": path.resolve(__dirname, "../src/utils"),
        "@hooks": path.resolve(__dirname, "../src/hooks"),
        "@stories": path.resolve(__dirname, "../src/stories"),
        // Add your path aliases here
      };
    }

    // Return the updated Storybook config
    return config;
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;
