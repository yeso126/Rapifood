module.exports = {
  entry: './src/js/entryPoint.jsx',
  output: {
    filename: 'dist/js/app.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
     exclude: /(node_modules|bower_components)/,
     loader: 'babel'
      }
    ]
  }
};
