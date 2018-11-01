var airplane;
var object = {
  x: 800,
  y: Math.random(0, 1) * 500
};
var ammo = {
  x: 250,
  y: 300
};

function setup() {
  createCanvas(800, 500);
  frameRate(30);
  airplane = new Airplane();
}

function draw() {
  //drawing the scenario
  background(0, 150, 240);
  bullet();
  Airplane();
  Airplane.render();
  Airplane.control();
  enemies();
}

function Airplane() {
  this.pos = createVector(250, height / 2);

  this.render = function () {
    translate(this.pos.x, this.pos.y);
    ellipse(this.pos.x, this.pos.y, 80, 80);
    return false;
  }

  this.control = function () {
    if (keyIsDown(LEFT_ARROW) || keyIsDown(65)) {
      character.x -= 10;
    } else if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) {
      character.x += 10;
    } else if (keyIsDown(UP_ARROW) || keyIsDown(87)) {
      character.y -= 10;
    } else if (keyIsDown(DOWN_ARROW) || keyIsDown(83)) {
      character.y += 10;
    }
  }
}

function bullet() {
  if (keyCode == 32) {
    rect(ammo.x, ammo.y, 15, 15);
    ammo.x += 5;
  }
  if (ammo.x > 800) {

  }
  return false;
}

function enemies() {
  this.render = function () {
    rect(object.x, object.y, 50, 50);
  }
  object.x -= 5;
  if (object.x < 0) {
    object.x = 800;
    rect(object.x, object.y, 50, 50);
  }
  return false;
}