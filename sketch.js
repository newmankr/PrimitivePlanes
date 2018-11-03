var airplane;
var primitives = [];
var bullets = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(30);
  airplane = new Airplane();
  for (var i = 0; i < 1; i++) {
    primitives.push(new Primitive());
  }
}

function draw() {
  background(0);
  airplane.render();
  airplane.control();

  for (var i = 0; i < primitives.length; i++) {
    primitives[i].render();
    primitives[i].movement();
    primitives[i].edges();
  }

  for (var i = 0; i < bullets.length; i++) {
    bullets[i].render();
    bullets[i].movement();
  }
}

function Airplane() {
  this.pos = createVector(200, 150);
  this.heading = 0;

  this.render = function () {
    push();
    noStroke();
    ellipse(this.pos.x, this.pos.y, 80, 80);
    pop();
  }

  this.control = function () {
    if (keyIsDown(LEFT_ARROW) || keyIsDown(65)) {
      this.pos.x -= 10;
    } else if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) {
      this.pos.x += 10;
    } else if (keyIsDown(UP_ARROW) || keyIsDown(87)) {
      this.pos.y -= 10;
    } else if (keyIsDown(DOWN_ARROW) || keyIsDown(83)) {
      this.pos.y += 10;
    }
  }
}

function Primitive() {
  this.pos = createVector(windowWidth + 30, Math.random() * 500);
  this.render = function () {
    rect(this.pos.x, this.pos.y, 50, 50);
  }

  this.movement = function () {
    for (i = 0; i < 10; i++) {
      this.pos.x--;
    }
  }

  this.edges = function () {
    if (this.pos.x < 0) {
      this.pos.x = windowWidth + 30;
    }
  }
}
var apos = airplane.pos;

function Bullet(apos) {
  this.pos = createVector(apos.x, apos.y);

  this.render = function () {
    push();
    stroke(255);
    strokeWeight(3);
    point(this.pos.x, this.pos.y);
    pop();
  }

  this.movement = function () {
    for (i = 0; i < 10; i++) {
      this.pos.x++;
    }
  }
}

function keyPressed() {
  if (key == ' ') {
    bullets.push(new Bullet(airplane.pos));
  }
}