const path = require('path');

module.exports = {
  title: 'Right UI Style Guide',
  components: 'src/components/**/[A-Z]*.vue',
  defaultExample: false,
  require: [path.join(__dirname, 'styleguide.global.requires.js')],
};
