window.addEventListener("load", function () {
  // this.window.onclick = function () {
  //   console.log("윈도우 클릭");
  // };
  // var canvas = this.document.querySelector(".game-canvas");
  // var ctx = canvas.getContext("2d");

  //------------------------------ 실행문
  const gameCanvas = new GameCanvas(); //gamecanvas에 다른 변수를 대입할 필요가 없기 때문에.
  gameCanvas.run();

  // gameCanvas.pause();
});

// 1.ES6(변수선언)
//let  지역화 가능, 변수충돌 억제
//var 지역화 불가능 , 호이스팅 문제
//const => java의 final ==> 상수형 변수를 넣는것
// 2.ES6(클래스 등장)
