/*E5 - Apresentar informações sobre o jogo na tela. Por exemplo: quantidade de
vidas, pontuação, nível de dificuldade, etc. */

//Vetor que armazena a vida do personagem
var life = ["❤", "❤", "❤", "❤", "❤", "❤", "❤", "❤", "❤", "❤"];
var primitives = [];

function setup() {
  createCanvas(windowWidth - 5, windowHeight - 5);
  frameRate(30);

  for (let i = 0; i < 1; i++) {
    primitives.push(new Primitive());
  }
}

function draw() {
  background(3, 169, 244);

  if (primitives.length == 0) {
    primitives.push(new Primitive());
  }

  for (let i = 0; i < primitives.length; i++) {
    primitives[i].edges();
  }
}

class Primitive {
  constructor() {
    this.x = 1300;
    this.y = Math.random() * 500;
  }

  edges() {
    if (this.x < -100) {
      primitives.pop();
      //Se a posição do objeto ultrapassar a tela do lado esquerdo, é retirada uma vida
      life.pop();
    }
  }
}
