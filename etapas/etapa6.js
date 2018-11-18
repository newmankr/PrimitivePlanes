/*E6 - Detectar colisão entre o jogador e os outros objetos do cenário. Entre o
objeto arremessado pelo jogador e outros objetos do cenário (quando for o caso).
Quando o jogador for atingido por um objeto, a quantidade de vidas deve diminuir.
Quando o jogador acertar um alvo (objeto) a quantidade de pontos deve aumentar.*/

var bullets = [];

class Bullet {
  constructor(aposx, aposy, bulletLoad, pposx, pposy) {
    this.x = aposx;
    this.y = aposy;
    this.bulletLoad = bulletLoad;
    this.px = pposx;
    this.py = pposy;
  }

  render() {
    push();
    image(this.bulletLoad, this.x, this.y, 16, 4);
    pop();
  }

  //Função de colisão utilizando a p5collision2D
  hits() {
    //Colisão utilizando a posição(x,y) da bala e a posição(px,py) do objeto
    this.hit = collidePointRect(this.x, this.y, this.px, this.py, 50, 50);
    //Caso acertado, o objeto é retirado do cenário
    if (this.hit) {
      primitives.pop();
      this.px = windowWidth + 200;
      this.py = Math.random() * 500;
    }
  }
}
