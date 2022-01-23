const path = require('path');

const mode = process.env.NODE.ENV === 'production' ? 'production' : 'development';

module.exports = {
  // Step 7
  //mode: 'development', // default value of production. Can either be set to 'development', 'production' or 'none'.

  // Step 11
  //   mode: mode,
  mode: 'development',

  //   // Step 10
  //   entry: './src/index.js',

  //   // Step 10
  //   output: {
  //     path: path.resolve(__dirname, 'dist'),
  //     filename: 'bundle.js',
  //   },

  // Step 6
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },

  // Step 8
  devtool: 'source-map',

  // Step 9
  devServer: {
    static: 'dist',
    open: true,
    hot: true,
  },
};
