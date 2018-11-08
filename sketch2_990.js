var airplane;
var primitive = [];
var bullet = [];
var cloud = [];
var cont = 1;
var life = ["❤", "❤", "❤", "❤", "❤", "❤", "❤", "❤", "❤", "❤"];

function preload() {
  for (let i = 1; i < 9; i++) {
    cloud[i] = loadImage("images/clouds/cloud" + i + ".png");
  }
}

function setup() {
  createCanvas(windowWidth - 5, windowHeight - 5);
  frameRate(60);
  airplane = new Airplane();

  for (let i = 0; i < 1; i++) {
    primitive.push(new Primitive());
  }
}

function draw() {
  background(3, 169, 244);

  Cloud();
  airplane.render();
  airplane.control();
  Foreground();

  for (let i = 0; i < primitive.length; i++) {
    primitive[i].render();
    primitive[i].movement();
    primitive[i].edges();
  }

  for (let j = 0; j < bullet.length; j++) {
    bullet[j].render();
    bullet[j].movement();
  }
}

function Airplane() {
  this.pos = createVector(200, 150);

  this.render = function() {
    push();
    noStroke();
    ellipse(this.pos.x, this.pos.y, 80, 80);
    pop();
  };

  this.control = function() {
    if (keyIsDown(LEFT_ARROW) || keyIsDown(65)) {
      this.pos.x -= 10;
    } else if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) {
      this.pos.x += 10;
    } else if (keyIsDown(UP_ARROW) || keyIsDown(87)) {
      this.pos.y -= 10;
    } else if (keyIsDown(DOWN_ARROW) || keyIsDown(83)) {
      this.pos.y += 10;
    }
  };
}

function Primitive() {
  this.posx = windowWidth + 50; //aqui o problema
  this.posy = Math.random() * 500;

  this.render = function() {
    rect(this.posx, this.posy, 50, 50);
  };

  this.movement = function() {
    for (let i = 0; i < 10; i++) {
      this.posx -= 2.5;
      if (this.posx < 0) {
        life.pop();
      }
    }
  };

  this.edges = function() {
    if (this.posx < 0) {
      this.posx = windowWidth + 30;
    }
  };
}

function Bullet(airplanepos) {
  this.pos = createVector(airplanepos.x, airplanepos.y);

  this.render = function() {
    push();
    stroke(255);
    strokeWeight(3);
    point(this.pos.x, this.pos.y);
    pop();
  };

  this.movement = function() {
    for (let i = 0; i < 10; i++) {
      this.pos.x += 10;
    }
  };
}

function Foreground() {
  textSize(20);
  text(life, 10, 60);
  fill(255);
}

function Cloud() {
  this.posx = 700;
  this.posy = 100;

  image(cloud[cont], this.posx, this.posy);
  tint(255, 126);
  cont++;
  if (cont >= 8) {
    cont = 1;
  }
}

function keyPressed() {
  if (key == " ") {
    bullet.push(new Bullet(airplane.pos));
  }
  return false;
}
