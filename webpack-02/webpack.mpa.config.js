const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const htmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const glob = require("glob");

const setMap = () => {
  const entry = {};
  const htmlwebpackplugins = [];
  const entryFiles = glob.sync(path.join(__dirname, "./src/*/index.js"));

  entryFiles.map((item, index) => {
    const reg = /src\/(.*)\/index\.js$/;
    const match = item.match(reg);
    const pageName = match[1];
    entry[pageName] = item;
    htmlwebpackplugins.push(
      new htmlWebpackPlugin({
        template: `./src/${pageName}/index.html`,
        filename: `${pageName}.html`,
        chunks: [pageName],
      })
    );
  });
  return {
    entry,
    htmlwebpackplugins,
  };
};

const { entry, htmlwebpackplugins } = setMap();

module.exports = {
  entry,
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].js",
  },
  mode: "development",
  // resolveLoader: {
  //   modules: ["node-modules", "./myLoaders"],
  // },
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
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          // "style-loader",
          "css-loader",
          "postcss-loader",
          "less-loader",
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        use: {
          loader: "file-loader",
          options: {
            // name: "images/[name].[ext]",
            name: "[name].[ext]",
            outputPath: "images/",
            publicPath: "../images",
            // * 阈值，超过阈值的图片会独立文件，没有超过会处理成base64
            limit: 1024 * 3,
          },
        },
      },
      {
        test: /\.(eto|woff|woff2)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            publicPath: "../",
          },
        },
      },
      // {
      //   test: /\.less$/,
      //   use: ["ll-style-loader", "ll-css-loader", "ll-less-loader"],
      // },
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
  devtool: "inline-source-map", // * https://www.webpackjs.com/configuration/devtool/ source-map
  devServer: {
    contentBase: "./dist",
    open: true,
    port: 8081,
    proxy: {
      "/api": {
        target: "http://localhost:9000",
      },
    },
  },
  plugins: [
    ...htmlwebpackplugins,
    new MiniCssExtractPlugin({
      filename: "css/[name].css",
    }),
    new CleanWebpackPlugin(),
  ],
};
