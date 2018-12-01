var backgroundLoad;
var mainMenuLoad;
var gameOverLoad;
var winLoad;
var airplaneLoad;
var airplaneAttackLoad = [];
var bombExplosionLoad = [];
var lifePowerupLoad;
var bulletLoad;
var bombLoad;
var fontBold;
var screen;
var cont = 1;

function preload() {
  backgroundLoad = loadImage("images/background.png");
  mainMenuLoad = loadImage("images/mainmenu.png");
  gameOverLoad = loadImage("images/gameover.png");
  winLoad = loadImage("images/win.png");
  airplaneLoad = loadImage("images/airplane.png");
  bulletLoad = loadImage("images/bullet.png");
  bombLoad = loadImage("images/bomb.png");
  lifePowerupLoad = loadImage("images/animations/Life_power_up.gif");
  fontBold = loadFont("fonts/Rainbow.ttf");

  for (let i = 0; i < 2; i++) {
    airplaneAttackLoad[i] = loadImage(
      "images/animations/airplaneattack" + i + ".png"
    );
  }

  /*for (let i = 1; i < 16; i++) {
    bombExplosionLoad[i] = loadImage("images/animations/" + i + ".png");
  }*/
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(30);
  screen = 1;
  reset();
  airplane = new Airplane();
}

function reset() {
  life = ["❤", "❤", "❤", "❤", "❤"];
  score = 0;
  bombs = [];
  powerups = [];

  for (let i = 0; i < 5; i++) {
    bombs.push(new Bomb());
  }

  for (let i = 0; i < 2; i++) {
    powerups.push(new Powerup());
  }
}

function draw() {
  switch (screen) {
    case 1:
      mainMenu();
      break;
    case 2:
      newLevel();
      break;
    case 3:
      win();
      break;
    case 4:
      gameOver();
      break;
  }

  if (life.length == 0) {
    screen = 4;
  }

  if (score >= 1000 && score < 2000) {
    bulletVelocity = 3;
  } else if (score >= 2000 && score < 3000) {
    bulletVelocity = 4;
  } else if (score >= 3000 && score < 4000) {
    bulletVelocity = 6;
  } else if (score >= 4000 && score < 5000) {
    bulletVelocity = 10;
  } else if (score >= 5000) {
    screen = 3;
  }
}

function mainMenu() {
  screen = 1;
  image(mainMenuLoad, 0, 0, windowWidth, windowHeight);
}

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
/*
function banimation(j) {
  cont++;
  if (cont >= 16) {
    cont = 1;
  }
  console.log(cont);
  image(bombExplosionLoad[cont], bombs[j].x, bombs[j].y);
}
*/
function win() {
  image(winLoad, 0, 0, windowWidth, windowHeight);
}

function gameOver() {
  image(gameOverLoad, 0, 0, windowWidth, windowHeight);
}

function keyPressed() {
  if (key == " ") {
    bullets.push(new Bullet(airplane.x, airplane.y));
  }
  if (screen == 1 || screen == 3 || screen == 4) {
    if (keyCode == ENTER) {
      reset();
      screen = 2;
    }
  }
}

function touches() {
  if (screen == 1 || screen == 3 || screen == 4) {
    reset();
    screen = 2;
  }
  if (screen == 2) {
    bullets.push(new Bullet(airplane.x, airplane.y));
  }
}
