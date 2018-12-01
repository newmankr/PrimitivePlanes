/*E9 - Trocar entre telas do jogo. O jogo deve possuir no mínimo quatro momentos: 
tela de inicialização contendo o nome do jogo, por exemplo; tela de andamento do jogo, 
onde o usuário pode interagir com o personagem do jogo;  tela de fim de jogo (Game Over); 
Tela de conclusão de todas os níveis do jogo.  
 */

function draw() {
  switch (screen) {
    //Screen == 1 leva à tela inicial
    case 1:
      mainMenu();
      break;
    //Screen == 2 leva ao jogo
    case 2:
      newLevel();
      break;
    //Screen == 3 leva à tela final caso o jogador ganhe
    case 3:
      win();
      break;
    //Screen == 4 leva à tela final caso o player perda(tela de gameover)
    case 4:
      gameOver();
      break;
  }
  //Caso não possua mais vidas, o jogo acaba
  if (life.length == 0) {
    screen = 4;
  }

  if (score >= 1000 && score < 2000) {
    bombVelocity = 3;
  } else if (score >= 2000 && score < 3000) {
    bombVelocity = 4;
  } else if (score >= 3000 && score < 4000) {
    bombVelocity = 6;
  } else if (score >= 4000 && score < 5000) {
    bombVelocity = 10;
  } else if (score >= 5000) {
    //Caso os pontos cheguem a 5000, o jogador ganhou o jogo
    screen = 3;
  }
}

//Tela de "ganho"
function win() {
  image(winLoad, 0, 0, windowWidth, windowHeight);
}
//Tela de jogo perdido
function gameOver() {
  image(gameOverLoad, 0, 0, windowWidth, windowHeight);
}
//Função que carrega o jogo em sí
function newLevel() {
  Foreground();

  airplane.render();
  airplane.edges();
  airplane.control();

  for (let i = bullets.length - 1; i >= 0; i--) {
    if (bullets[i].x > windowWidth) {
      bullets.splice(i, 1);
    } else {
      bullets[i].render();
      bullets[i].movement();

      for (let j = bombs.length - 1; j >= 0; j--) {
        if (bullets[i].edges(bombs[j])) {
          score += 100;
          bombs.splice(j, 1);
          //bullets.splice(i, 1);
          //banimation(j);

          break;
        }
      }
      console.log(i);
      for (let j = powerups.length - 1; j >= 0; j--) {
        if (bullets[i].edges(powerups[j])) {
          powerups.splice(j, 1);
          //bullets.splice(i, 1);
          life.push("❤");

          break;
        }
      }
    }
  }

  if (bombs.length == 1) {
    for (let i = 0; i < 5; i++) {
      bombs.push(new Bomb());
    }
  }

  for (let i = bombs.length - 1; i >= 0; i--) {
    bombs[i].render();
    bombs[i].movement();
    if (bombs[i].x < -100) {
      bombs.splice(i, 1);
      life.pop();
    }
    for (let j = bombs.length - 1; j >= 0; j--) {
      if (airplane.hits(bombs[j])) {
        bombs.splice(j, 1);
        life.pop();
      }
    }
  }

  for (let i = powerups.length - 1; i >= 0; i--) {
    powerups[i].render();
    powerups[i].movement();
    if (powerups[i].x < -100) {
      powerups.splice(i, 1);
    }
  }
}
