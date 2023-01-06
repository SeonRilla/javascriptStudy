//캡슐화 : 역할을 나눠주는것
//developing(객체 지향의 산물)

//------------------------------ Boy 생성자 함수
class Boy {
  constructor(x, y) {
    //인덱스
    this.ix = 1;
    this.iy = 2;
    //이미지 너비 길이
    this.sw = 106;
    this.sh = 148.25;
    //잘라낼 가로위치 세로위치
    this.sx = this.sw * this.ix;
    this.sy = this.sh * this.iy;
    this.x = x || 200;
    this.y = y || 200;

    //이미지를 그리기 위한 변수들
    this.vx = 0;
    this.vy = 0;

    //목적지 좌표
    this.dx = 0;
    this.dy = 0;

    this.walkDelay = 30;

    //
    this.img = document.querySelector("#boy");
  }
  draw(ctx) {
    this.sx = this.sw * this.ix;
    //영사기가 쓰는 애
    ctx.drawImage(
      this.img,
      this.sx,
      this.sy,
      this.sw,
      this.sh,
      this.x - this.sw / 2,
      this.y - this.sh - 50,
      this.sw,
      this.sh
    );
  }
  move(dir) {
    switch (dir) {
      case 1: //북쪽
        this.y -= 1;
        break;

      case 2: // 동쪽
        this.x += 1;
        break;

      case 3: //남쪽
        this.y += 1;
        break;

      case 4: //서쪽
        this.x -= 1;
        break;
    }
  }
  moveTo(dx, dy) {
    //사용자 입력
    let w = dx - this.x;
    let h = dy - this.y;
    this.dx = dx;
    this.dy = dy;

    let d = Math.sqrt(w * w + h * h);
    this.vx = w / d;
    this.vy = h / d;
    this.ix = 0;
  }

  update() {
    //영사기가 쓰는애
    //this.dx-1 < this.x && this.x< this.dx+1)
    // this.ix = 0;

    if (Math.abs(this.dx - this.x) < 1 && Math.abs(this.dy - this.y) < 1) {
      this.vx = 0;
      this.vy = 0;
    }

    if (this.vx == 0 && this.vy == 0) {
      this.ix = 1;
      return;
    }

    this.walkDelay--;
    if (this.walkDelay == 0) {
      this.ix = this.ix == 2 ? 0 : 2;
      this.walkDelay = 30;
    }
    this.x += this.vx;
    this.y += this.vy;
  }
}
