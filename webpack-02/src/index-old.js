// // 样式
// import css from "./index.less";
// import img from "./logo.png";
// console.log(img);

// // 自定义loader
// // console.log("hello webpack");

// const pic = new Image();
// pic.src = img;
// const tag = document.getElementById("root");
// tag.append(pic);

// import axios from "axios";

// axios.get("/api/info").then(res => {
//   console.log(res);
// });

// console.log("hello webpack");

// import counter from "./count";
// import number from "./number";

// counter();
// number();

// // 钩子函数
// if (module.hot) {
//   module.hot.accept("./number.js", () => {
//     console.log("hello...");
//   });
// }

// import "@babel/polyfill";
// const arr = [1, 2, 3, 4];

// arr.map(item => console.log(item));

import React, { Component } from "react";
import ReactDOM from "react-dom";

class App extends Component {
  render() {
    return <div>hello</div>;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
