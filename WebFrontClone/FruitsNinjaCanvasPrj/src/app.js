window.addEventListener("load", function () {
  var canvas = this.document.querySelector(".game-canvas");

  canvas.onclick = function () {
    console.log(ball.dx);
    ball.move(2);
    ball.draw(ctx);
    //a
    ball.move(2);
  };
  /** @type {CanvasRenderingContext2D} */

  var ctx = canvas.getContext("2d");

  var Ball = function (x, y) {
    this.x = x || Math.floor(Math.random() * (canvas.width - 50));
    this.y = y || canvas.height + 100;
    if (this.x < canvas.width / 2) this.dx = Math.floor(Math.random() * 10 + 5);
    else this.dx = -Math.floor(Math.random() * 5 + 3);
    this.dy = -(Math.random() + 55 + 10);
    this.gravity = -3;
  };

  Ball.prototype = {
    draw: function (ctx) {
      var img = new Image();
      img.src = "../image/fruit2.png";
      img.onload = function () {
        ctx.drawImage(img, this.x, this.y);
      }.bind(this);
    },
    move: function (dir) {
      this.x += this.dx;
      this.dy -= this.gravity;
      this.y += this.dy;
    },
  };

  var ball = new Ball();
  ball.draw(ctx);

  var ball1 = new Ball();
  ball1.draw(ctx);
});
