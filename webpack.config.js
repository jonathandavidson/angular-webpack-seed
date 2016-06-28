const webpack = require('webpack');

const config = {
  devtool: 'eval-source-map',
  entry: './src/app.js',
  module: {
    loaders: [
      {
        exclude: /node_modules/,
        loaders: ["style", "css", "sass"],
        test: /\.scss$/
      },
      {
        exclude: /node_modules/,
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
  config.devtool = 'source-map';

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

if (process.env.npm_lifecycle_event === 'test') {
  config.entry = {};
  config.devtool = 'nline-source-map';
}

module.exports = config;
