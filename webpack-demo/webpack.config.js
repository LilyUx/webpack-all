const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
// ! 零配置
module.exports = {
  // 入口
  // * str 单页面
  entry: "./src/index.js",
  //* arr 单页面
  // entry: ["./src/index.js", "./src/list.js"],
  // * obj 多页面
  // entry: {
  //   // main chunk名称
  //   index: "./src/index.js",
  //   list: "./src/list.js",
  //   detail: "./src/detail.js",
  // },
  // 出口
  output: {
    // 绝对路径
    path: path.resolve(__dirname, "./dist"),
    // * filename: "[name].js" 多页面应用一定要用占位符的方式
    filename: "[name].js",
  },
  // 模式 development 开发模式 production 生产模式
  mode: "development",
  // mode: "none",
  module: {
    rules: [
      {
        test: /\.css/,
        // ! css-loader => webpack支持.css模块的语法
        // ! style-loader => 把css的代码抽离出来，动态的生成style标签，插入到html的头部，然后再把css放进去
        // * 执行顺序，从后向前
        use: ["style-loader", "css-loader"],
      },
      // {
      //   test: /\.vue/,
      //   use: "vue-loader",
      // },
    ],
  },
  plugins: [
    new htmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
    }),
  ],
};
