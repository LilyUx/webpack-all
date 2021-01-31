const path = require("path");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].js",
  },
  mode: "development",
  resolveLoader: {
    modules: ["node-modules", "./myLoaders"],
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      /**
       * ! less 模块处理 less 语法
       * ! less-loader 是 webpack 沟通 less 之间的桥梁
       */
      // {
      //   test: /\.less$/,
      //   use: [
      //     // MiniCssExtractPlugin.loader,
      //     "style-loader",
      //     "css-loader",
      //     "postcss-loader",
      //     "less-loader",
      //   ],
      // },
      {
        test: /\.less$/,
        use: ["ll-style-loader", "ll-css-loader", "ll-less-loader"],
      },
      // {
      //   test: /\.js$/,
      //   use: [
      //     "replace-loader",
      //     // path.resolve(__dirname, "./myLoaders/replace-loader.js"),
      //     {
      //       // 一个loader
      //       // loader: path.resolve(
      //       //   __dirname,
      //       //   "./myLoaders/replace-loader-async.js"
      //       // ),
      //       loader: "replace-loader-async",
      //       options: {
      //         name: "ling",
      //       },
      //     },
      //   ],
      // },
    ],
  },
  // plugins: [
  //   new MiniCssExtractPlugin({
  //     filename: "index.css",
  //   }),
  // ],
};
