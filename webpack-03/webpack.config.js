const path = require("path");
// ! 零配置
module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "main.js",
  },
  mode: "development",
};
