const path = require('path')

module.exports = {
  devtool: 'source-map',
  entry: './Browser/index.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: [ 'env', 'react', 'stage-2' ]
      }
    }]
  }
}
