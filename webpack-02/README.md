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
