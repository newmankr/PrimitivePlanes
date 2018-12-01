var airplane;

class Airplane {
  constructor() {
    this.x = 200;
    this.y = 150;
  }

  render() {
    image(airplaneLoad, this.x - 230, this.y - 120);
    if (keyIsDown(32)) {
      for (let i = 0; i < 2; i++) {
        image(airplaneAttackLoad[i], this.x - 230, this.y - 120);
      }
    }
  }

  control() {
    if (keyIsDown(LEFT_ARROW) || keyIsDown(65)) {
      this.x -= 15;
    } else if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) {
      this.x += 15;
    } else if (keyIsDown(UP_ARROW) || keyIsDown(87)) {
      this.y -= 15;
    } else if (keyIsDown(DOWN_ARROW) || keyIsDown(83)) {
      this.y += 15;
    }
  }

  edges() {
    if (this.x < 150) {
      this.x = 150;
    } else if (this.y < 0) {
      this.y = 0;
    } else if (this.y > windowHeight) {
      this.y = windowHeight;
    }
  }

  hits(bomb) {
    return collideRectRect(
      this.x - 150,
      this.y - 40,
      150,
      80,
      bomb.x,
      bomb.y,
      90,
      35
    );
  }
}
