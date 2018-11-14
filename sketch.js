var airplane;
var primitive = [];
var bullet = [];
var cloudLoad = [];
var cloud = [];
var cont = 1;
var life = ["❤", "❤", "❤", "❤", "❤", "❤", "❤", "❤", "❤", "❤"];
var hit = false;

function preload() {
  for (let i = 1; i < 9; i++) {
    cloudLoad[i] = loadImage("images/clouds/cloud" + i + ".png");
  }
}

function setup() {
  createCanvas(windowWidth - 5, windowHeight - 5);
  frameRate(60);
  airplane = new Airplane();

  for (let i = 0; i < 1; i++) {
    primitive.push(new Primitive());
  }

  for (let i = 0; i < 5; i++) {
    cloud.push(new Cloud());
  }
  collideDebug(true);
}

function draw() {
  background(3, 169, 244);

  airplane.render();
  airplane.control();
  Foreground();

  for (let k = 0; k < cloud.length; k++) {
    cloud[k].render();
    cloud[k].movement();
    cloud[k].edges();
  }

  for (let i = 0; i < primitive.length; i++) {
    primitive[i].render();
    primitive[i].movement();
    primitive[i].edges();

    if (pposx <= -90) {
      life.pop();
    }
  }

  for (let j = 0; j < bullet.length; j++) {
    bullet[j].render();
    bullet[j].movement();
  }

  hit = collidePointRect(bposx, bposy, pposx, pposy, 50, 50);

  if (hit) {
    primitive.pop();
  }
}

function keyPressed() {
  if (key == " ") {
    bullet.push(new Bullet(aposx, aposy));
  }
  return false;
}
