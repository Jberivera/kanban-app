const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const { common, cleanRules, PATHS } = require('./webpack.config.common');

const development = {
  module: {
    rules: [
      ...cleanRules(common.module.rules, 'scss'),
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({
          loader: [
            { loader: 'css-loader' },
            {
              loader: 'postcss-loader',
              query: {
                plugins: function () {
                  return [
                    require('postcss-flexbugs-fixes'),
                    require('autoprefixer')({ browsers: ['last 2 versions'] })
                  ];
                }
              }
            },
            { loader: 'sass-loader' }
          ],
          fallback: 'style-loader!css-loader?modules!postcss-loader!sass-loader',
        }),
        include: PATHS.app
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({ 'process.env': { 'NODE_ENV': '"production"' }}),
    new ExtractTextPlugin({
      filename: 'css/[name].css?[hash]-[chunkhash]-[contenthash]-[name]',
      allChunks: true
    }),
    new webpack.optimize.UglifyJsPlugin()
  ]
};

module.exports = Object.assign({}, common, development);
