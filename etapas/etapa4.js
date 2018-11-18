/*E4 - Fazer o jogador realizar disparos ou arremessos de objetos.*/

var bullets = [];
var airplane;
var airplaneLoad;
var bulletLoad;

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(30);
  //Carregando as imagens do avião e da munição
  airplaneLoad = loadImage("images/airplane/airplane1.png");
  bulletLoad = loadImage("images/airplane/bullet1.png");

  airplane = new Airplane();
}

function draw() {
  background(3, 169, 244);
  airplane.render();
  airplane.control();

  //Chamando a classe de acordo com o tamanho do vetor
  for (let i = 0; i < bullets.length; i++) {
    bullets[i].render();
    bullets[i].movement();
    bullets[i].edges();
  }
}

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
//Bullet é o objeto a ser arremessado
class Bullet {
  constructor(airplaneposx, airplaneposy, bulletLoad) {
    this.x = airplaneposx;
    this.y = airplaneposy;
    this.bulletLoad = bulletLoad;
  }
  //Renderização da munição na posição do avião
  render() {
    push();
    image(this.bulletLoad, this.x, this.y, 16, 4);
    pop();
  }
  //Movimentação da munição sempre para a direita
  movement() {
    for (let i = 0; i < 10; i++) {
      this.x += 10;
    }
  }
  //Limites do cenário
  edges() {
    if (this.x > windowWidth) {
      bullets.pop();
    }
  }
}

//Ao pressionar espaço, é lançada a bala
function keyPressed() {
  if (key == " ") {
    //Os argumentos a serem passados são:
    //A posição do avião(x,y) e a função que carrega a imagem
    bullets.push(new Bullet(airplane.x, airplane.y, bulletLoad));
  }
}
