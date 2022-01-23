# Webpack

Webpack is a module bundler

## Webpack Setup

1. To initiaite our npm project.

- `npm init -y` => creates a package.json file.

2. Install Webpack and webpack cli as dev dependancies.

- `npm i -D webpack webpack-cli` OR `npm i --save-dev webpack webpack-cli` => installs node_modules folder.

3. Create a webpack.config.file.

4. Create a webpack script for build and bundling.

5. Install the HTMLWebpackPlugin

- `npm install --save-dev html-webpack-plugin` OR `npm i -D html-webpack-plugin` => installs the HTML Webpack Plugin.

6. Install loaders for .css extensions

- `npm i -D style-loader css-loader` OR `npm install --save-dev style-loader css-loader` => installs the loaders required to convert css files to modules so that it can be injected into html files throught javascript file imports.

7. Install the wbepack development server

- `npm install --save-dev webpack-dev-server` OR `npm i -D webpack-dev-server` => installs the webpack development server.

8. Add asset resource loader into the webpack.config.js file.

9. Install babel to transpile code for ES5.

- `npm install -D babel-loader @babel/core @babel/preset-env` OR `npm i --save-dev babel-loader @babel/core @babel/preset-env`

#### Webpack Videos

- [Getting Started with Webpack 5 in 2021](https://www.youtube.com/watch?v=9c3dBhvtt6o) => A simple explanation on how to setup webpack for projects.
- []
