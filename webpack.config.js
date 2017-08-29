process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const path = require('path');

module.exports = {

  entry: [
  './src/index.js',
],
output: {
  filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    sourceMapFilename: 'bundle.map.js'
 },

 module: {
  loaders: [{
    test: /\.jsx?$/,
    exclude: /(node_modules|bower_components)/,
    loader: 'babel-loader',
    query: {
      presets: ['react', 'es2015'],
    },
  },
  {
    test: /\.css$/,
    loaders: ['style-loader', 'css-loader'],
  },
  {
    test: /\.scss$/,
    loaders: ['style-loader', 'css-loader', 'sass-loader'],
  },
      {
          test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
          loader: 'url-loader',
          options: {
              limit: 10000
          }
      }

  ],
},
resolve: {
  extensions: ['.js', '.jsx'],
},
devServer: {
  historyApiFallback: true,
  contentBase: './'
},

devtool: process.env.NODE_ENV === 'production' ? undefined : 'cheap-module-eval-source-map'};




