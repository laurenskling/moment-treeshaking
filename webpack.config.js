const debug = process.env.NODE_ENV !== "production";

const webpack = require('webpack');
const path = require('path');

const config = {
  context: __dirname,

  devtool: debug ? "sourcemap" : false,

  entry: [
    path.resolve(__dirname, "index.js"),
  ],

  output: {
    path: path.join(__dirname, 'build'),
    publicPath: '/build/',
    filename: 'bundle.js',
  },

  resolve: {
    modules: [
      "node_modules",
      path.resolve(__dirname),
    ],
  },

  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },

  plugins:
    [
      new webpack.NoEmitOnErrorsPlugin(),
    ]
    .concat(!debug && [
      new webpack.optimize.UglifyJsPlugin({
        beautify: false,
        mangle: {
          screw_ie8: true,
          keep_fnames: true,
        },
        compress: {
          screw_ie8: true,
          warnings: false,
          drop_console: true,
        },
        comments: false,
      }),
    ])
    .filter(x => !!x),

  devServer: {
    publicPath: '/build/',
    contentBase: path.join(__dirname),
    port: 8000,
    hot: true,
    hotOnly: true,
    stats: "errors-only",
  },
}

module.exports = config;
