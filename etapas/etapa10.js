/*E10 - Adicionar animações ao jogo. Pode ser no jogador, nos objetos, no arremesso de 
objetos, na colisão de objetos, etc. 
 */
var airplaneAttackLoad = [];

//Carrega a animação de atirar
function preload() {
  for (let i = 0; i < 2; i++) {
    airplaneAttackLoad[i] = loadImage(
      "images/animations/airplaneattack" + i + ".png"
    );
  }
}

class Airplane {
  constructor() {
    this.x = 200;
    this.y = 150;
  }

  render() {
    image(airplaneLoad, this.x - 230, this.y - 120);
    //Se precionada a tecla espaço, animação é acionada
    if (keyIsDown(32)) {
      for (let i = 0; i < 2; i++) {
        image(airplaneAttackLoad[i], this.x - 230, this.y - 120);
      }
    }
  }
}
