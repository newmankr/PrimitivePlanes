var cont = 1;
var cloud = [];
var life = ["❤", "❤", "❤", "❤", "❤", "❤", "❤", "❤", "❤", "❤"];

function Foreground() {
  textSize(20);
  text(life, 10, 30);
  fill(255);
}

class Cloud {
  constructor() {
    this.x = Math.random() * (windowWidth + 200);
    this.y = Math.random() * 500;
  }

  render() {
    push();
    image(cloudLoad[cont], this.x, this.y);
    tint(255, 126);
    cont++;
    if (cont >= 8) {
      cont = 1;
    }
    pop();
  }

  movement() {
    for (let i = 0; i < 10; i++) {
      this.x -= 3;
    }
  }

  edges() {
    if (this.x < -300) {
      this.x = random(windowWidth + 100, windowWidth + 600);
    }
  }
}
