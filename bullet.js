var bullets = [];
var hit = false;

class Bullet {
  constructor(aposx, aposy) {
    this.x = aposx;
    this.y = aposy - 20;
  }

  render() {
    image(bulletLoad, this.x, this.y, 16, 4);
  }

  movement() {
    this.x += 120;
  }

  edges(bomb) {
    return collideRectRect(this.x, this.y, 16, 4, bomb.x, bomb.y, 90, 35);
  }

  hits(powerup) {
    return collideRectRect(this.x, this.y, 16, 4, powerup.x, powerup.y, 40, 40);
  }
}
