// 读取配置
const options = require("./webpack.config");

// 引入webpack
const Webpack = require("./lib/webpack");
// webpack接收配置 启动入口函数，执行打包
new Webpack(options).run();
