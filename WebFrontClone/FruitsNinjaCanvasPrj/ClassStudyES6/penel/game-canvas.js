// function GameCanvas() {
//   this.dom = document.querySelector(".game-canvas");
//   /** @type {CanvasRenderingContext2D} */
//   this.ctx = this.dom.getContext("2d");
//   this.boy = new Boy(100, 100);

//   this.dom.onclick = this.clickHandler.bind(this); //onclick 속성에 handler를 엮어준다.
//   //deligation function // callback function(?)
// }
// //생성자에만 있는 녀석임
// GameCanvas.prototype = {
//   run: function () {
//     // 초당 60 프레임으로 화면을 다시 그리는 코드
//     this.update();
//     this.draw();
//   },
//   update: function () {}, //move가 지정되면, 한프레임씩 움직이게 만드는 아이
//   draw: function () {
//     //그림을 그리는 아이
//     this.boy.draw(this.ctx);
//   },
//   //
//   clickHandler: function () {
//     this.boy.move(2);
//     this.boy.draw(this.ctx);
//   }, //dom의 객체를 참조하는게 아니라 GameCanvas를 가리켜야 하기 때문에 바꿔야함 호출자가 달라지면 this를 일관되게 가지도록 this를 변경하는것
// };

class GameCanvas {
  constructor() {
    //생성자
    this.dom = document.querySelector(".game-canvas");
    this.dom.focus();
    /** @type {CanvasRenderingContext2D} */
    this.ctx = this.dom.getContext("2d");
    this.boy = new Boy(200, 200);
    this.bg = new Background();
    //게임 상태변수
    this.gameover = false; //종료
    this.pause = false; //정지

    this.dom.onclick = this.clickHandler.bind(this);
    this.dom.onkeydown = this.keyDownHandler.bind(this);
  }

  run() {
    if (this.pause) return;
    //setTimeOut(1회성 알람) setInterval(주기를 가지고) AnimationFrame
    // 초당 60 프레임으로 화면을 다시 그리는 코드
    this.update();
    this.draw();
    console.log("timer Start");
    // window.setTimeout(this.run.bine(this),1000);
    // window.setTimeout(function(){
    //   this.run();

    // },1000);
    window.setTimeout(() => {
      this.run();
    }, 17);
  }
  update() {
    // this.boy.move(2); //상태변화
    this.boy.update();
  }
  draw() {
    // this.bg.draw(this.ctx);
    this.boy.draw(this.ctx); //그리기
  }
  pause() {
    this.pause = true;
  }
  clickHandler(e) {
    // this.pause = true;
    // this.boy.move(2);
    // this.boy.draw(this.ctx);
    this.boy.moveTo(e.x, e.y);
  }
  keyDownHandler(e) {
    console.log(e.keyCode);
    console.log(e.key);
    console.log(e.char);
    // switch (e.keyCode) {
    //   case 38: //북
    //     this.boy.moveTo(boy.x, boy.y - 30);
    //     break;
    //   case 39: //동
    //     this.boy.moveTo(boy.x + 30, boy.y);
    //     break;
    //   case 40: //남
    //     this.boy.moveTo(boy.x, boy.y + 30);
    //     break;
    //   case 37: //서
    //     this.boy.moveTo(boy.x - 30, boy.y);
    //     break;
    // }

    switch (e.key) {
      case "ArrowUp":
        break;
      case "ArrowRight":
        break;
      case "ArrowLeft":
        break;
      case "ArrowDown":
        break;
      default:
        break;
    }
  }
}

// update / draw 는 사용자가 호출하는것이 아님 (game thread)
