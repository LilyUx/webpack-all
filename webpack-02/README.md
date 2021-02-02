# loader

## css

## less、sass、stylus

## postcss

- 自动补齐浏览器前缀
- px to rem
- css 压缩

postcss-loader

## 自定义 loader

分工明确、职责单一、从后往前

- loader 就是一个函数，不可以是箭头函数
- loader 必须有返回值
- loader 如何接受参数
- loader 所有的 api 都挂载在 this 对象上
- 返回多种信息 this.callback
- 处理异步逻辑 this.async
- 多个自定义 loader
  ```
  use: [
    path.resolve(__dirname, "./myLoaders/replace-loader.js"),
    {
      // 一个loader
      loader: path.resolve(
        __dirname,
        "./myLoaders/replace-loader-async.js"
      ),
      options: {
        name: "ling",
      },
    },
  ],
  ```

## jpg jpeg png gif

file-loader src-loader

## webpack-dev-server

- 创建本地服务器
  - dist 目录中的文件加载到内存中，速度更快
- 打包成功 自动帮助我们启动一个浏览器
- 热更新
- mock 数据 提升开发效率

## 多页面打包通用方案

- entry
- html-webpack-plugin 生成不同的模板

## 热更新 HotModuleReplacementPlugin()

对模块进行了监听，监听到修改就替换修改后的代码。以模块作为单位。

- js 模块，会刷新界面
  - hotOnly: 关闭浏览器刷新
  ```
  if (module.hot) {
    module.hot.accept("./number.js", () => {
      console.log("hello...");
    });
  }
  ```
- css 模块，不会刷新界面，更友好

## babel-loader

Babel 是一个 JavaScript 编译器

- 语法转换
- 通过 Polyfill 添加缺失的特性

## 如何实现一个 plugin

webpack 在编译代码过程中，生命周期概念，对应不同的打包阶段

不同打包阶段

- module
- Assets

plugin 本质上是一个类

- ? 它是如何注册到 webpack 的对应阶段

### webpack 的打包流程

1. 拿到配置（webpack.config.js），初始化工作，得到最终配置项
2. 实例化一个 compiler 类，注册所有插件，对应的生命周期绑定相应的事件
3. 执行编译，compiler.run
4. compiler(构建阶段) -> compilation(第 n 个阶段，bundle 资源被加工成什么样子)
5. 递归处理所有依赖模块 生成 chunk
6. 把 chunk 输出到 output 指定的位置

### plugin 的钩子函数 https://www.webpackjs.com/api/compiler-hooks/

- run
- normalModuleFactory
- contextModuleFactory
- beforeCompile
- compile
- thisCompilation
- compilation
- make
- normalModuleFactory
- contextModuleFactory
- beforeCompile
- compilation
- afterCompile
- afterCompile
- shouldEmit
- emit
- assetEmitted
- afterEmit
- done

> 实现一个打包清单插件
> 要求：打包结束后，输出目录多出一个 fileList.txt
> 内容：bundle 文件的数量以及全称
