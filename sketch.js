var backgroundLoad;
var airplaneLoad;
var bulletLoad;
var fontBold;
var screen;

function preload() {
  backgroundLoad = loadImage("images/background.png");
  airplaneLoad = loadImage("images/airplane/airplane1.png");
  bulletLoad = loadImage("images/airplane/bullet1.png");
  fontBold = loadFont("fonts/RifficFree-Bold.ttf");
}

function setup() {
  collideDebug(true);
  createCanvas(windowWidth, windowHeight);
  frameRate(30);
  screen = 2;
  for (let i = 0; i < 5; i++) {
    primitives.push(new Primitive());
  }

  airplane = new Airplane();
}

function draw() {
  background(3, 169, 244);

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

  if (score >= 5000) {
    screen = 3;
  }
}

function mainMenu() {
  push();
  screen = 1;
  background(3, 169, 244);
  fill(255);
  textFont(fontBold);
  textSize(64);
  textAlign(CENTER);
  text("Primitive\nPlanes", 600, 250);
  text("Press ENTER to play!", 600, 500);
  pop();
}

function newLevel() {
  Foreground();

  airplane.render();
  airplane.control();

  if (primitives.length == 0) {
    for (let i = 0; i < 5; i++) {
      primitives.push(new Primitive());
    }
  }

  for (let i = 0; i < primitives.length; i++) {
    primitives[i].render(i);
    primitives[i].movement(i);
    primitives[i].edges(i);
  }

  for (let i = 0; i < bullets.length; i++) {
    bullets[i].render();
    bullets[i].movement();

    for (let j = 0; j < primitives.length; j++) {
      if (bullets[i].edges(primitives[j])) {
        score += 100;
        primitives.splice(j, 1);
        bullets.splice(i, 1);
        break;
      }
    }
  }
}

function win() {
  push();
  background(3, 169, 244);
  fill(255);
  textFont(fontBold);
  textSize(64);
  text("YOU WON!", 400, 250);
  text(`Score: ${score}`, 400, 350);
  textSize(32);
  text("Press ENTER to play again!", 360, 450);
  pop();
}

function gameOver() {
  push();
  background(200, 0, 0);
  fill(255);
  textFont(fontBold);
  textSize(64);
  text("GAME OVER", 400, 250);
  textSize(32);
  text("Press ENTER to play again.", 400, 400);
  pop();
}

function reset() {
  life = ["❤", "❤", "❤", "❤", "❤"];
  score = 0;
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
