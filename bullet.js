var bullets = [];

class Bullet {
  constructor(aposx, aposy, bulletLoad, pposx, pposy) {
    this.x = aposx;
    this.y = aposy;
    this.bulletLoad = bulletLoad;
    this.px = pposx;
    this.py = pposy;
  }

  render() {
    push();
    image(this.bulletLoad, this.x, this.y, 16, 4);
    pop();
  }

  movement() {
    for (let i = 0; i < 10; i++) {
      this.x += 10;
    }
  }

  edges() {
    if (this.x > windowWidth) {
      bullets.pop();
    }
  }

  hits() {
    this.hit = collidePointRect(this.x, this.y, this.px, this.py, 50, 50);

    if (this.hit) {
      primitives.pop();
      this.px = windowWidth + 200;
      this.py = Math.random() * 500;
    }
  }
}
