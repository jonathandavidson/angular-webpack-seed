module.exports = {
  entry: './src/app.js',
  module: {
    loaders: [
      {
        loaders: ["style", "css", "sass"],
        test: /\.scss$/
      },
      {
        exclude: /node_modules/,
        loader: 'babel-loader',
        test: /\.js$/
      }
    ]
  },
  output: {
    filename: 'app.bundle.js',
    path: './public/js'
  }
};