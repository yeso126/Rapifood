var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-hot-middleware/client',
    './src/index.jsx'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [{
      test: /\.(js|jsx)$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'src')
    },
    { test: /\.css$/, loader: 'style-loader!css-loader?modules!autoprefixer-loader?browsers=last 2 version' },
    { test: /\.png$/, loader: 'url-loader?limit=100000' },
    { test: /\.jpg$/, loader: 'file-loader' }]
  }
};
