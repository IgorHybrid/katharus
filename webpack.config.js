var path = require('path');
var webpack = require('webpack');

module.exports = {
 entry: './client/index.js',
 output: {
  path: path.join(__dirname, 'client'),
  filename: 'bundle.js'
 },
 module: {
  loaders: [{
   test: /.jsx?$/,
   loader: 'babel-loader',
   exclude: /node_modules/,
   query: {
    presets: ['es2015', 'react']
   }
  },
  {
   test: /\.css$/,
   loader: "style-loader!css-loader"
  },
  {
   test: /\.(woff|woff2)$/,
   use: {
     loader: "file-loader",
     options: {
       name: "./client/fonts/[name].[ext]",
     },
   },
  }]
 }
}
