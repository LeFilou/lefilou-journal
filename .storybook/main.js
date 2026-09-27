module.exports = {
  stories: ['../components/**/*.stories.@(js|jsx|ts|tsx|mdx)'],

  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
  ],

  /**
   * Typescript configuration handling
   * @see https://storybook.js.org/docs/react/configure/typescript#mainjs-configuration
   */
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      shouldRemoveUndefinedFromOptional: true,
      propFilter: (prop) =>
          prop.parent ? !/node_modules/.test(prop.parent.fileName) : true,
    },
  },


  framework: {
    name: '@storybook/nextjs',
    options: {}
  },

  docs: {
    autodocs: true
  }
};
