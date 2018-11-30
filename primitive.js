var primitives = [];
var pvelocity = 2;

class Primitive {
  constructor() {
    this.x = round(width + Math.random() * 400);
    this.y = round(Math.random() * 500);
  }

  render(i) {
    push();
    rect(this.x, this.y, 50, 50);
    fill(255);
    pop();
  }

  movement() {
    this.x -= pvelocity;
  }

  edges(i) {
    if (this.x < -100) {
      primitives.splice(i, 1);
      life.pop();
    }
  }
}
