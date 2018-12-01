var bombs = [];
var powerups = [];
var bombVelocity = 2;

class Bomb {
  constructor() {
    this.x = round(width + Math.random() * 400);
    this.y = round(Math.random() * 500);
  }

  render() {
    image(bombLoad, this.x, this.y, 90, 35);
  }

  movement() {
    this.x -= bombVelocity;
  }
}

class Powerup {
  constructor() {
    this.x = round(width + Math.random() * 4000);
    this.y = round(Math.random() * 500);
  }

  render() {
    image(lifePowerupLoad, this.x, this.y, 40, 40);
  }

  movement() {
    this.x -= 2;
  }
}
