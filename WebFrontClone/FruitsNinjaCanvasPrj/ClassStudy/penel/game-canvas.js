function GameCanvas() {
  this.dom = document.querySelector(".game-canvas");
  /** @type {CanvasRenderingContext2D} */
  this.ctx = this.dom.getContext("2d");
  this.boy = new Boy(100, 100);

  this.dom.onclick = this.clickHandler.bind(this); //onclick 속성에 handler를 엮어준다.
  //deligation function // callback function(?)
}
//생성자에만 있는 녀석임
GameCanvas.prototype = {
  run: function () {
    // 초당 60 프레임으로 화면을 다시 그리는 코드
    this.update();
    this.draw();
  },
  update: function () {}, //move가 지정되면, 한프레임씩 움직이게 만드는 아이
  draw: function () {
    //그림을 그리는 아이
    this.boy.draw(this.ctx);
  },
  //
  clickHandler: function () {
    this.boy.move(2);
    this.boy.draw(this.ctx);
  }, //dom의 객체를 참조하는게 아니라 GameCanvas를 가리켜야 하기 때문에 바꿔야함 호출자가 달라지면 this를 일관되게 가지도록 this를 변경하는것
};
