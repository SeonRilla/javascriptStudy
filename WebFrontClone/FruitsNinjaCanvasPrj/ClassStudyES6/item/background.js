// function Background() {
//   this.dom = document.querySelector(".game-canvas");
//   /** @type {CanvasRenderingContext2D} */
//   this.ctx = this.dom.getContext("2d");
//   this.boy = new Boy(100, 100);
// }

// Background.prototype = {
//   scroll: function (d) {
//     // 4개 함수를 만들래? 매개변수로 하나만 넘겨서 쓸래?
//   },
//   update: function () {}, //한번 움직이는데 50 픽셀 움직인다 가정했을때, 이것도 잘게 쪼개서 가야하기 때문에 필요
//   draw: function () {}, // 그림그리기
// };

//ES5의 문제점

//module System이 없어서, HTML에서 불러왔음
//객체지향을 지정하지 않음 (Prototype을 이용한건 은닉성을 보장하지 않아 캡슐이 깨짐,
//상속도 prototype만으로 했음)

class Background {
  constructor() {
    this.img = document.querySelector("#bg");
    this.x = 0;
    this.y = 0;
  }

  draw(ctx) {
    ctx.drawImage(this.img, this.x, this.y);
  }
  update() {}
}
