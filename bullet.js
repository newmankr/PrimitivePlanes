var bullets = [];
var hit = false;

class Bullet {
  constructor(aposx, aposy) {
    this.x = aposx + 200;
    this.y = aposy + 100;
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
    /*if (this.x > windowWidth) {
      bullets.pop();
    }*/
    return collidePointRect(this.x, this.y, primitive.x, primitive.y, 50, 50);
  }
}
