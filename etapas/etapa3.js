/*E3 - Fazer um objeto aparecer e andar no cenário do jogo. Este objeto deve
sumir ao atravessar os limites do cenário e um novo objeto deve aparecer tempos
depois.*/

var primitives = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(30);
  //Determinando a quantidade de objetos que irão aparecer no cenário
  for (var i = 0; i < 1; i++) {
    primitives.push(new Primitive());
  }
}

function draw() {
  background(0);
  //Caso não tenha nenhum objeto no cenário, criar um novo
  if (primitives.length == 0) {
    primitives.push(new Primitive());
  }

  for (var i = 0; i < primitives.length; i++) {
    //Chamando as funções para cada objeto
    primitives[i].render();
    primitives[i].movement();
    primitives[i].edges();
  }
}

class Primitive {
  //Coordenadas da posição do objeto
  constructor() {
    this.x = 1300;
    this.y = Math.random() * 500;
  }
  //Renderização do objeto no cenário
  render() {
    rect(this.x, this.y, 50, 50);
  }
  //Movimentação do objeto
  movement() {
    for (let i = 0; i < 10; i++) {
      this.x -= 2.5;
    }
  }
  //Limites do cenário à esquerda da tela
  edges() {
    if (this.x < -100) {
      //Retira o último elemento do vetor
      primitives.pop();
    }
  }
}
