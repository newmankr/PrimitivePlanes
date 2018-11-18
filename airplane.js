var airplane;

class Airplane {
  constructor() {
    this.x = 200;
    this.y = 150;
  }

  render() {
    push();
    image(airplaneLoad, this.x - 200, this.y - 102);
    tint(255);
    pop();
  }

  control() {
    if (keyIsDown(LEFT_ARROW) || keyIsDown(65)) {
      this.x -= 20;
    } else if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) {
      this.x += 20;
    } else if (keyIsDown(UP_ARROW) || keyIsDown(87)) {
      this.y -= 20;
    } else if (keyIsDown(DOWN_ARROW) || keyIsDown(83)) {
      this.y += 20;
    }
  }
}
