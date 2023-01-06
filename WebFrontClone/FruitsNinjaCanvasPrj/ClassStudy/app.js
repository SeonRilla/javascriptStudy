window.addEventListener("load", function () {
  // this.window.onclick = function () {
  //   console.log("윈도우 클릭");
  // };
  // var canvas = this.document.querySelector(".game-canvas");
  // var ctx = canvas.getContext("2d");

  //------------------------------ 실행문
  var gameCanvas = new GameCanvas();
  gameCanvas.run();
});
