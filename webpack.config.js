const path = require("path");
const webpack = require("webpack");
// const AsyncAwaitPlugin = require("webpack-async-await");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "bundle.min.js",
  },
  module: {
    rules: [
      { test: /\.css$/, use: "css-loader" },
      { test: /\.tsx?$/, use: "ts-loader" },
    ],
  },
  plugins: [
    // new AsyncAwaitPlugin(),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
