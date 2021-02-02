(function(graph) {
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
  require('./src/index.js')
})({"./src/index.js":{"dependencies":{"./a.js":"./src/a.js","./b.js":"./src/b.js"},"code":"\"use strict\";\n\nvar _a = require(\"./a.js\");\n\nvar _b = require(\"./b.js\");\n\nfunction fn1() {\n  return \"heihei\";\n}\n\nconsole.log(\"hello \".concat(_a.str, \" \").concat(_b.str2));"},"./src/a.js":{"dependencies":{},"code":"\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.str = void 0;\nvar str = \"haha\";\nexports.str = str;"},"./src/b.js":{"dependencies":{},"code":"\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.str2 = void 0;\nvar str2 = \"bbb\";\nexports.str2 = str2;"}})