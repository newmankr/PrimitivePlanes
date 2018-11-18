/*E2 - Fazer a movimentação do jogador usando um teclado.*/

var airplane;

function setup() {
  createCanvas(windowWidth, windowHeight);
  airplane = new Airplane();
}

function draw() {
  background(0);
  airplane.render();
  airplane.control();
}

class Airplane {
  constructor() {
    this.x = 200;
    this.y = 150;
  }
  //Renderização do personagem na tela
  render() {
    push();
    ellipse(this.x, this.y, 150, 300);
    tint(255);
    pop();
  }
  //Movimentação do personagem usando w,a,s,d e setas
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
