var primitives = [];

class Primitive {
  constructor() {
    this.x = 1300;
    this.y = Math.random() * 500;
  }

  render() {
    rect(this.x, this.y, 50, 50);
  }

  movement() {
    for (let i = 0; i < 10; i++) {
      this.x -= 2.5;
    }
  }

  edges() {
    if (this.x < -100) {
      primitives.pop();
      life.pop();
    }
  }
}
