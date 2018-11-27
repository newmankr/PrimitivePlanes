var backgroundLoad;
var airplaneLoad;
var bulletLoad;
var fontBold;

function preload() {
  backgroundLoad = loadImage("images/background.png")
  airplaneLoad = loadImage("images/airplane/airplane1.png");
  bulletLoad = loadImage("images/airplane/bullet1.png");
  fontBold = loadFont("fonts/RifficFree-Bold.ttf");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(30);
  deviceOrientation = 'landscape';

  for (let i = 0; i < 3; i++) {
    primitives.push(new Primitive());
  }

  airplane = new Airplane();
}

function draw() {
  background(3, 169, 244);

  Foreground();

  airplane.render();
  airplane.control();

  if (primitives.length == 0) {
    primitives.push(new Primitive());
  }

  for (let i = 0; i < primitives.length; i++) {
    primitives[i].render();
    primitives[i].movement();
    primitives[i].edges();
  }

  for (let i = 0; i < bullets.length; i++) {
    bullets[i].render();
    bullets[i].movement();
    bullets[i].hits();
    bullets[i].edges();
  }
}

function keyPressed() {
  if (key == " ") {
    bullets.push(
      new Bullet(airplane.x, airplane.y, primitives[0].x, primitives[0].y)
    );
  }
}

function touchStarted(){
  bullets.push(
    new Bullet(airplane.x, airplane.y, primitives[0].x, primitives[0].y)
  );
}
