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
