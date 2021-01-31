module.exports = function (source) {
  // 动态生成style标签，再将style标签放入header
  return `const tag = document.createElement('style')
    tag.innerHTML = ${source}
    document.head.appendChild(tag)
  `;
};
