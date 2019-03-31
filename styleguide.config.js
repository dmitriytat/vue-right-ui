const path = require('path');

module.exports = {
  title: 'Right UI',

  sections: [
    {
      name: 'Introduction',
      content: 'docs/introduction.md'
    },
    {
      name: 'UI Components',
      components: 'src/components/**/[A-Z]*.vue',
    },
    {
      name: 'Examples',
      components: 'src/examples/**/[A-Z]*.vue',
    }
  ],

  defaultExample: false,
  webpackConfig: require(path.join(__dirname, 'webpack.config.js')),
  require: [path.join(__dirname, 'styleguide.setup.js')],
};
