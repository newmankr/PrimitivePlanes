/*E7 - Adicionar um número arbitrário de objetos e adicionar um conjunto de elementos 
para complementar o cenário. Estes novos elementos podem dar algum bônus ao jogador 
quando forem destruídos. Por exemplo, ganhar uma vida, ganhar mais pontos, 
mais velocidade ao jogador, etc.  Nessa etapa é obrigatório o uso de vetores e 
estruturas de repetição.*/

// Disponível em bomb.js
var powerups = [];

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
function preload() {
  lifePowerupLoad = loadImage("images/animations/powerup.png");
}

function draw() {
  for (let i = bullets.length - 1; i >= 0; i--) {
    if (bullets[i].x > windowWidth) {
      bullets.splice(i, 1);
    } else {
      bullets[i].render();
      bullets[i].movement();

      // Ao acertar o objeto, o personagem ganha uma vida
      for (let j = powerups.length - 1; j >= 0; j--) {
        if (bullets[i].hits(powerups[j])) {
          powerups.splice(j, 1);
          life.push("❤");

          break;
        }
      }
    }
  }
}
