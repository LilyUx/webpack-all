# webpack

## 概述

1. 推荐安装方式：局部安装
2. 启动 webpack 方式：npx webpack
   npx 是从当前项目的 node_modules bin 寻找 webpack 的软连接
3. webpack 和 webpack-cli 的区别

   1. webpack:
   2. webpack-cli: 命令行工作

4. chunks\chunk names

5. mode 默认为 production 生产模式 development 开发模式
6. webpack 的默认配置
   1. 4.x 以后零配置部署
      默认入口："./src/index.js"
7. webpackBootstrap
8. eval()

## webpack 配置核心概念

- chunk: 代码块，一个 chunk 可能由多个模块组合而成，也用于代码合并与分割
- bundle: 资源经过 webpack 流程解析编译后输出的最终成果文件
- entry: 入口起点
- output: 输出配置，包含输出文件的名称、位置
- loader: 默认为.js
- plugin
- mode:

bundle 包含了：

- webpack 启动函数
  ```
  (function(){})({eval()})
  ```

### entry

- str
- obj
- arr

单页面应用和多页面应用

### chunk

chunks 和入口有直接关系

- 单入口应用：bundle index.js chunk -> main
  bundle -- 对应一个 chunk -> 包含一个 模块 chunk 或多个 chunk

### mode

- development 开发模式
- production 生产模式
- none 不设置模式

### loader：模块解析器

让 webpack 支持更多的类型文件

### plugins: webpack 的扩展补充

- 作用于 webpack 打包整个过程
- webpack 的打包过程是有生命周期（钩子）的概念的
