class TxtWebpackPlugin {
  constructor(options) {
    console.log(options);
  }
  // * 必写 apply函数，帮助插件注册，接收compile类
  apply(complier) {
    // console.log("hello plugins");
    // ! 异步 使用tapAsync, 有callback
    complier.hooks.emit.tapAsync("TxtWebpackPlugin", (compilation, cb) => {
      // console.log(compilation.assets);
      compilation.assets["hh.txt"] = {
        source: function () {
          // 定义文件内容
          return "明月几时有";
        },
        size: function () {
          // 定义文件体积
          return 1024;
        },
      };
      cb();
    });

    // ! 同步 使用tap
    complier.hooks.compile.tap("TxtWebpackPlugin", compilation => {
      console.log("同步钩子");
    });
  }
}

module.exports = TxtWebpackPlugin;
