const webpack = require('webpack');
const { common } = require('./webpack.config.common');

const DEFAULT_PORT = process.env.PORT || 5000;

const development = {
  devtool: 'eval-source-map',
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    stats: 'errors-only',
    host: process.env.HOST,
    port: DEFAULT_PORT
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({ 'process.env': { 'NODE_ENV': '"development"' }})
  ]
};

module.exports = Object.assign({}, common, development);
