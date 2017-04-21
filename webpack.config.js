const webpack = require('webpack');
const path = require('path');

const TARGET = process.env.npm_lifecycle_event;
const DEFAULT_PORT = process.env.PORT || 5000;
const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build')
};

const common = {
  entry: PATHS.app,
  output: {
    path: PATHS.build,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader?sourceMap&modules',
          'sass-loader?sourceMap'
        ],
        include: PATHS.app
      },
      {
        test: /\.js$/,
        use: [
          'babel-loader?cacheDirectory',
          'eslint-loader'
        ],
        include: PATHS.app
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ]
};

module.exports = Object.assign(common, {
  start: {
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
  },
  build: {

  }
}[TARGET]);
