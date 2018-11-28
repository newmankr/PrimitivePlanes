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
  createCanvas(1200, 600);
  frameRate(30);
  deviceOrientation = "landscape";
  screen = 1;
  for (let i = 0; i < 3; i++) {
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

  if (score >= 400) {
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
    primitives.push(new Primitive());
  }

  for (let i = 0; i < primitives.length; i++) {
    primitives[i].render();
    primitives[i].movement();

    if (primitives[i].x < -100) {
      primitives.splice(i, 1);
      life.pop();
    }
  }

  for (let i = 0; i < bullets.length; i++) {
    bullets[i].render();
    bullets[i].movement();
    bullets[i].hits();
    bullets[i].edges();
  }
}

function win() {
  push();
  background(3, 169, 244);
  fill(255);
  textFont(fontBold);
  textSize(64);
  text("YOU WIN!", 400, 250);
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
    bullets.push(
      new Bullet(airplane.x, airplane.y, primitives[0].x, primitives[0].y)
    );
  }
  if (screen == 1 || screen == 3 || screen == 4) {
    if (keyCode == ENTER) {
      reset();
      screen = 2;
    }
  }
}

function touchStarted() {
  bullets.push(
    new Bullet(airplane.x, airplane.y, primitives[0].x, primitives[0].y)
  );
}
