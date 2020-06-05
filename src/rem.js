(function flexible(window, document) {
  // 获取html的根元素
  var docEl = document.documentElement;
  // dpr 是物理像素比
  var dpr = window.devicePixelRatio || 1;

  // adjust body font size 设置body的字体大小
  function setBodyFontSize() {
    // 如果页面中有body这个元素，就设置body的字体大小
    if (document.body) {
      document.body.style.fontSize = "0.13rem";
    } else {
      // 如果页面中没有body这个元素，则等着页面的主要DOM元素加载完毕再去设置body的字体大小
      document.addEventListener("DOMContentLoaded", setBodyFontSize);
    }
  }
  setBodyFontSize();

  // set 1rem = viewWidth / 3.75  设置html元素的文字大小
  function setRemUnit() {
    var rem = docEl.clientWidth / 3.75;
    docEl.style.fontSize = rem + "px";
  }

  setRemUnit();

  // reset rem unit on page resize  当页面尺寸大小发生变化的时候，要重新设置下rem的大小
  window.addEventListener("resize", setRemUnit);
  // pageshow 是重新加载页面触发的事件
  window.addEventListener("pageshow", function (e) {
    // e.persisted 返回的是true，就是说如果这个页面是从缓存取过来的页面，也需要重新计算一下rem的大小
    if (e.persisted) {
      setRemUnit();
    }
  });

  // detect 0.5px supports  有些移动端的浏览器不支持0.5像素的写法
  if (dpr >= 2) {
    var fakeBody = document.createElement("body");
    var testElement = document.createElement("div");
    testElement.style.border = ".5px solid transparent";
    fakeBody.appendChild(testElement);
    docEl.appendChild(fakeBody);
    if (testElement.offsetHeight === 1) {
      docEl.classList.add("hairlines");
    }
    docEl.removeChild(fakeBody);
  }
})(window, document);

// 设置 rem 函数
// function setRem() {
//   // 当前页面宽度相对于 750 宽的缩放比例，可根据自己需要修改。
//   const scale = document.documentElement.clientWidth / 375
//   // 设置页面根节点字体大小

//   document.documentElement.style.fontSize = scale * 100 + 'px'
//   document.body.style.fontSize = 16 + 'px'
// }
// // 初始化
// setRem()
// // 改变窗口大小时重新设置 rem
// window.onresize = function () {
//   setRem()
// }