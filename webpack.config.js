const webpack = require('webpack');

const config = {
  devtool: 'eval',
  entry: './src/app.js',
  module: {
    loaders: [
      {
        include: /src/,
        loaders: ["style", "css", "sass"],
        test: /\.scss$/
      },
      {
        include: /src/,
        loader: 'babel',
        test: /\.js$/
      }
    ]
  },
  output: {
    filename: 'app.bundle.js',
    path: './public/js'
  },
  plugins: []
};

if (process.env.NODE_ENV === 'production') {
    config.devtool = 'cheap-module-source-map';

    config.plugins.push(
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false,
        },
        output: {
          comments: false,
        }
      })
    );
}

module.exports = config;
