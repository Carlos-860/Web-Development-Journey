// import the path module from node.
// const { NONAME } = require('dns');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // 1. MODE - has a default value of none but should either be development or production.
  mode: 'development',
  entry: {
    main: path.resolve(__dirname, 'src/app.js'), // Primary js file.
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js', // Gives the bundle file a unique name each time it is built.
    // filename: '[name].bundle.js', // Change the file name of the bundle code in the dist folder.
    assetModuleFilename: '[name][ext]', // ensures that the assets filenames are not contenthased but instead keep original names.
    clean: true, // Cleans the built folder (dist) whenever project is built.
  },

  // 4. DEV SERVER
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
    port: 5001, // default of 8080
    open: true, // open deafult browser.
    hot: true, // Relaod browser window on changes in the src folder.
    // watchContentBase: true, // Relaod browser window on changes in the dist folder. !!! GETTING ERRORS HERE
  },

  // 2. LOADERS - turn non-javacript files into modules.
  module: {
    rules: [
      {
        // css
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        // images
        test: /\.(svg|ico|png|webp|jpg|gif|jpeg)$/,
        type: 'asset/resource',
        // No need to install asset resource loader since it is built in webpack 5.
      },
      {
        // js for babel
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

  // 3. PLUGINS - are things loaders cannot do since they do extra work.
  plugins: [
    new HtmlWebpackPlugin({
      // Options object
      title: 'Just a demo',
      filename: 'index.html',
      template: path.resolve(__dirname, 'src/temp.html'),
    }),
  ],
};
