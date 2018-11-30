var bullets = [];
var hit = false;

class Bullet {
  constructor(aposx, aposy) {
    this.x = aposx;
    this.y = aposy - 20;
  }

  render() {
    push();
    image(bulletLoad, this.x, this.y, 16, 4);
    pop();
  }

  movement() {
    this.x += 120;
  }

  edges(primitive) {
    return collideRectRect(
      this.x,
      this.y,
      16,
      4,
      primitive.x,
      primitive.y,
      50,
      50
    );
  }
}
