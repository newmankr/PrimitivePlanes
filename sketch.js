var airplane;
var primitives = [];
var bullets = [];
var cloudLoad = [];
var airplaneLoad;
var bulletLoad;
var cloud = [];
var cont = 1;
var life = ["❤", "❤", "❤", "❤", "❤", "❤", "❤", "❤", "❤", "❤"];
var hit = false;

function preload() {
  for (let i = 1; i < 9; i++) {
    cloudLoad[i] = loadImage("images/clouds/cloud" + i + ".png");
  }
  airplaneLoad = loadImage("images/airplane/airplane1.png");
  bulletLoad = loadImage("images/airplane/bullet1.png");
}

function setup() {
  createCanvas(windowWidth - 5, windowHeight - 5);
  frameRate(30);

  for (let i = 0; i < 1; i++) {
    primitives.push(new Primitive());
  }

  for (let k = 0; k < 5; k++) {
    cloud.push(new Cloud());
  }
  collideDebug(true);
  airplane = new Airplane();
}

function draw() {
  background(3, 169, 244);

  Foreground();

  for (let k = 0; k < cloud.length; k++) {
    cloud[k].render();
    cloud[k].movement();
    cloud[k].edges();
  }

  airplane.render();
  airplane.control();

  if (primitives.length === 0) {
    primitives.push(new Primitive());
  }

  for (let i = 0; i < primitives.length; i++) {
    primitives[i].render();
    primitives[i].movement();
    primitives[i].edges();

    if (pposx <= -90) {
      life.pop();
    }
  }

  for (let j = 0; j < bullets.length; j++) {
    bullets[j].render();
    bullets[j].movement();
    bullets[j].edges();
    bullets[j].hits();
  }
}

function keyPressed() {
  if (key == " ") {
    bullets.push(new Bullet(aposx, aposy));
  }
  return false;
}
