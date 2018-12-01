var bombs = [];
var bvelocity = 2;

class Bomb {
  constructor() {
    this.x = round(width + Math.random() * 400);
    this.y = round(Math.random() * 500);
  }

  render() {
    push();
    image(bombLoad, this.x, this.y, 90, 35);
    pop();
  }

  movement() {
    this.x -= bvelocity;
  }
}
