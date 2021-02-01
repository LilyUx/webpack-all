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

import axios from "axios";

axios.get("/api/info").then(res => {
  console.log(res);
});

console.log("hello webpack");
