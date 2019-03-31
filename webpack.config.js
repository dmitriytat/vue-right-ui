const path = require('path');
const StylelintWebpackPlugin = require('stylelint-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');

module.exports = {
  module: {
    rules: [
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        loader: 'vue-loader',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          'vue-style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
          'postcss-loader'
        ],
      },
      {
        test: /\.svg$/,
        exclude: /node_modules/,
        use: [
          'svg-sprite-loader',
          'svgo-loader',
        ],
      },
    ],
  },

  resolve: {
    extensions: ['.js', '.vue', '.json', '.svg', '.css'],
    alias: {
      '@': path.join(__dirname, 'src'),
    },
  },

  plugins: [
    new VueLoaderPlugin(),

    new SpriteLoaderPlugin({
      plainSprite: true,
    }),
  ],
};
