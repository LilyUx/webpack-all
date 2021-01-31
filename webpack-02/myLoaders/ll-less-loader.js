// 使用less模块处理less语法
const less = require("less");

module.exports = function (source) {
  less.render(source, (err, output) => {
    let { css } = output;
    this.callback(err, css);
  });
};
