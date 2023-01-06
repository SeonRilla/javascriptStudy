//캡슐화 : 역할을 나눠주는것
//developing(객체 지향의 산물)

//------------------------------ Boy 생성자 함수
function Boy(x, y) {
  //인덱스
  this.ix = 1;
  this.iy = 2;
  //이미지 너비 길이
  this.sw = 48;
  this.sh = 48;
  //잘라낼 가로위치 세로위치
  this.sx = this.sw * this.ix;
  this.sy = this.sh * this.iy;
  this.x = x || 100;
  this.y = y || 100;
}
//------------------------------ 집중화를 위한 Prototype
Boy.prototype = {
  draw: function (ctx) {
    var img = new Image();
    img.src = "./image/boy.png";
    img.onload = function () {
      ctx.drawImage(
        img,
        this.sx,
        this.sy,
        this.sw,
        this.sh,
        this.x,
        this.y,
        this.sw,
        this.sh
      );
    }.bind(this);
  },
  move: function (dir) {
    switch (dir) {
      case 1: //북쪽
        this.y -= 10;
        break;

      case 2: // 동쪽
        this.x += 10;
        break;

      case 3: //남쪽
        this.y += 10;
        break;

      case 4: //서쪽
        this.x -= 10;
        break;
    }
  },
};
