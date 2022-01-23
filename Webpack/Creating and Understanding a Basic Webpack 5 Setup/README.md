# Creating and understanding a basic webpack 5 setup

## Step 1

- `npm int -y` OR
- `npm init` to initialzise a package.json file.

## Step 2

- Inside the package.json:
  - Remove the `"main": "index.js"` key pair values and replace it with the `"private" : "true",`

## Step 3

- `npm i -D webpack webpack-cli` OR
- `npm i --save-dev webpack webpack-cli` OR
- `npm install -D webpack webpack-cli` OR
- `npm install --save-dev webpack webpack-cli` to install webpack and the webpack command line interface.

## Step 4

- Create a .gitignore file in order to ignore the node_module directory.

## TESTING OPTIONS

- `npx webpack` OR
- `npx webpack --mode=development` OR
- `npx --mode=production` to bundle js into a main.js file inside the dist directory.

## Step 5

- `npm i @babel/core @babel/preset-env babel-loader` to install babel and rleevenat loaders in order to transpile JS code for ES5 browsers and older.

## Step 6

- Create a webpack.config.js file that houses all you webpack configuration.

- Place the following code in the webpack.config.js file.

```js
module.exports = {
  // loaders are added in module object here.
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
};
```

- options object can either be added as above into the webpack.config.js file or put into a seperate file called .babelrc file.

## step 7

- Therafater configure the webpack mode to etheir run in prodcution mode (by default) or change it to development mode.

- Place the following code in the root of the module.exports object.

```js
mode: 'development',
```

## Step 8

- Then configure the webpack to do source mapping for development purposes.

- Place the following code in the root of the module.exports object.

```js
devtool: 'source-map',
```

- Enable source mapping for development (troubleshooting and finding bugs) purposes.
- It enables us to see the file where output is coming from in the browsers console when mode is set to production.

## Step 9

- Then setup up a webpack dev server by running the following commands.

- `npm i -D webpack-dev-server` OR
- `npm i --save-dev webpack-dev-server` OR
- `npm install -D webpack-dev-server` OR
- `npm install --save-dev webpack-dev-server` to install the webpack development server.

- Place the following code in the root of the module.exports object.

```js
  devServer: {
    static: 'dist',
  },
```

## Step 10

- Set up entry and output points but can be left out becuase defaults are src and dist directories.

- Place the following code in the root of the module.exports object.

```js
entry: './src/index.js',

output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
},
```

## Step 11

- Install cross-env so as to run node environemnt variables in scripts.

- `npm install -D cross-env`
