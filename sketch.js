var cloudLoad = [],
  airplaneLoad,
  bulletLoad;
var fontBold;

function preload() {
  for (let i = 1; i < 9; i++) {
    cloudLoad[i] = loadImage("images/clouds/cloud" + i + ".png");
  }
  airplaneLoad = loadImage("images/airplane/airplane1.png");
  bulletLoad = loadImage("images/airplane/bullet1.png");
  fontBold = loadFont("fonts/RifficFree-Bold.ttf");
}

function setup() {
  createCanvas(windowWidth - 5, windowHeight - 5);
  frameRate(30);

  for (let i = 0; i < 3; i++) {
    primitives.push(new Primitive());
  }

  for (let i = 0; i < 5; i++) {
    cloud.push(new Cloud());
  }

  airplane = new Airplane();
}

function draw() {
  background(3, 169, 244);

  Foreground();

  for (let i = 0; i < cloud.length; i++) {
    cloud[i].render();
    cloud[i].movement();
    cloud[i].edges();
  }

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
