var backgroundLoad;
var mainmenuLoad;
var gameoverLoad;
var winLoad;
var airplaneLoad;
var bulletLoad;
var bombLoad;
var fontBold;
var screen;

function preload() {
  backgroundLoad = loadImage("images/background.png");
  mainmenuLoad = loadImage("images/mainmenu.png");
  gameoverLoad = loadImage("images/gameover.png");
  winLoad = loadImage("images/win.png");
  airplaneLoad = loadImage("images/airplane.png");
  bulletLoad = loadImage("images/bullet.png");
  bombLoad = loadImage("images/bomb.png");
  fontBold = loadFont("fonts/Rainbow.ttf");
}

function setup() {
  collideDebug(true);
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

  for (let i = 0; i < 5; i++) {
    bombs.push(new Bomb());
  }
}

function draw() {
  background(0);

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
    bvelocity = 3;
  } else if (score >= 2000 && score < 3000) {
    bvelocity = 4;
  } else if (score >= 3000 && score < 4000) {
    bvelocity = 6;
  } else if (score >= 4000 && score < 5000) {
    bvelocity = 10;
  } else if (score >= 5000) {
    screen = 3;
  }
}

function mainMenu() {
  push();
  screen = 1;
  background(3, 169, 244);
  image(mainmenuLoad, 0, 0, windowWidth, windowHeight);
  pop();
}

function newLevel() {
  Foreground();

  airplane.render();
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
          bullets.splice(i, 1);
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
}

function win() {
  push();
  background(3, 169, 244);
  image(winLoad, 0, 0, windowWidth, windowHeight);
  pop();
}

function gameOver() {
  push();
  background(200, 0, 0);
  image(gameoverLoad, 0, 0, windowWidth, windowHeight);
  pop();
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
