const path = require('path');

const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'dist')
};

const common = {
  entry: PATHS.app,
  output: {
    path: PATHS.build,
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader?sourceMap&modules',
          {
            loader: 'postcss-loader',
            options: {
              plugins: function () {
                return [
                  require('postcss-flexbugs-fixes'),
                  require('autoprefixer')({ browsers: ['last 2 versions'] })
                ];
              }
            }
          },
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
  }
};

function cleanRules (rules, ...args) {
  return args.reduce((res, clean) => {
    return res.filter((rule) => !rule.test.test(`.${clean}`));
  }, [ ...rules ]);
}

module.exports = {
  common,
  cleanRules,
  PATHS
};
