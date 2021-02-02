const fs = require("fs");
const path = require("path");
const parser = require("@babel/parser");
const traverse = require("@babel/traverse").default;
const { transformFromAst } = require("@babel/core");

module.exports = class Webpack {
  constructor(options) {
    const { entry, output } = options;
    // console.log(entry, output);
    this.entry = entry;
    this.output = output;
    this.modules = [];
  }
  run() {
    // 开发编译、执行打包
    const info = this.parse(this.entry);
    // console.log(info);
    this.modules.push(info);

    // * 双重遍历实现模块的依赖关系
    for (let i = 0; i < this.modules.length; i++) {
      const item = this.modules[i];
      const dependencies = item.dependencies;

      // ? 如果模块之间存在相互依赖
      if (dependencies) {
        for (const j in dependencies) {
          this.modules.push(this.parse(dependencies[j]));
        }
      }
    }
    // 数组结构转对象结构
    const obj = {};
    this.modules.forEach(item => {
      obj[item.entryFile] = {
        dependencies: item.dependencies,
        code: item.code,
      };
    });
    // console.log(obj);
    this.file(obj);
  }
  parse(entryFile) {
    // 分析入口模块的内容
    const content = fs.readFileSync(entryFile, "utf-8");
    // 处理依赖
    const ast = parser.parse(content, {
      sourceType: "module",
    });

    const dependencies = {};

    traverse(ast, {
      ImportDeclaration({ node }) {
        // * 拼接字符串（暴力）
        const pathname = path.dirname(entryFile) + node.source.value.substr(1);
        dependencies[node.source.value] = pathname;
      },
    });

    // console.log(dependencies);
    // 处理内容
    const { code } = transformFromAst(ast, null, {
      presets: ["@babel/preset-env"],
    });
    // console.log(code);
    return {
      entryFile,
      dependencies,
      code,
    };
  }

  file(code) {
    // 生成代码内容 webpack启动函数
    const filePath = path.join(this.output.path, this.output.filename);
    // console.log(filePath);
    const newCode = JSON.stringify(code);
    const bundle = `(function(graph) {
  function require(modulePath) {
    function PathRequire(relativePath) {
      return require(graph[module].dependencies[relativePath])
    }
    const exports = {}
    (function(require, exports, code) {
      eval(code)
    })(PathRequire, exports, graph[module].code)
    return exports
  }
  require('${this.entry}')
})(${newCode})`;
    // 生成main.js dist目录
    fs.writeFileSync(filePath, bundle, "utf-8");
  }
};
