module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    {
      "name": "storybook-css-modules",
      "options": {
        "cssModulesLoaderOptions": {
          "importLoaders": 1,
          "modules": {
            "localIdentName": "[hash:base64:5]",
          }
        }
      }
    }
  ],
  "framework": "@storybook/react"
}