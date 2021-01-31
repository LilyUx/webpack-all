// 自定义一loader
// * loader就是一个函数，不可以是箭头函数
// * loader 必须有返回值
// * loader 如何接受参数
// * loader 所有的api都挂载在this对象上
// * 返回多种信息 this.callback
// * 处理异步逻辑 this.async

module.exports = function (source) {
  // console.log(source);
  // console.log(this.query);
  // const callback = this.async();
  // setTimeout(() => {
  //   const content = source.replace("hello", "😸");
  //   // return content;
  //   callback(null, content);
  // }, 3000);
  // this.callback(null, content);
  return source.replace("wepack", "好好笑");
};
