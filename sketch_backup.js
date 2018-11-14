var airplane;
var primitive = [];
var bullet = [];
var cloudLoad = [];
var cloud = [];
var cont = 1;
var life = ["❤", "❤", "❤", "❤", "❤", "❤", "❤", "❤", "❤", "❤"];

var airplaneposx = 200;
var airplaneposy = 150;
var primitiveposx = 900;
var primitiveposy = Math.random() * 500;
var bulletposx = airplaneposx;
var bulletposy = airplaneposy;

// COLISION = TAKE THE primitive.posx and posy + a certain ammount and compare to the bullet.posx and posy

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
  }

  for (let j = 0; j < bullet.length; j++) {
    bullet[j].render();
    bullet[j].movement();
  }
}

function Airplane() {
  //this.pos = createVector(200, 150);

  this.render = function() {
    push();
    noStroke();
    ellipse(airplaneposx, airplaneposy, 80, 80);
    pop();
  };

  this.control = function() {
    if (keyIsDown(LEFT_ARROW) || keyIsDown(65)) {
      airplaneposx -= 10;
    } else if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) {
      airplaneposx += 10;
    } else if (keyIsDown(UP_ARROW) || keyIsDown(87)) {
      airplaneposy -= 10;
    } else if (keyIsDown(DOWN_ARROW) || keyIsDown(83)) {
      airplaneposy += 10;
    }
  };
}

function Primitive() {
  this.radius = int(
    dist(width / 2, height / 2, width / 2 + 50, height / 2 + 50)
  );

  //this.posx = windowWidth + 100;
  //this.posy = Math.random() * 500;

  this.render = function() {
    rect(primitiveposx, primitiveposy, 50, 50);
  };

  this.movement = function() {
    for (let i = 0; i < 10; i++) {
      primitiveposx -= 2.5;
      if (primitiveposx < -100) {
        life.pop();
      }
    }
  };

  this.edges = function() {
    if (primitiveposx < -100) {
      primitiveposx = windowWidth + 100;
    }
  };
}

function Bullet(airplanepos) {
  //this.posx = airplanepos.x;
  //this.posy = airplanepos.y;

  this.render = function() {
    push();
    stroke(255);
    strokeWeight(3);
    point(bulletposx, bulletposy);
    pop();
  };

  this.movement = function() {
    for (let i = 0; i < 10; i++) {
      bulletposx += 10;
      //console.log(primitive.posx);

      //if (this.posx < bullet.posx) {
      //console.log(this.posx);
      //}
    }
  };
}

function Foreground() {
  textSize(20);
  text(life, 10, 30);
  fill(255);
}

function Cloud() {
  this.posx = Math.random() * (windowWidth + 200);
  this.posy = Math.random() * 500;

  this.render = function() {
    image(cloudLoad[cont], this.posx, this.posy);
    tint(255, 126);
    cont++;
    if (cont >= 8) {
      cont = 1;
    }
  };

  this.movement = function() {
    for (let i = 0; i < 10; i++) {
      this.posx -= 3;
    }
  };

  this.edges = function() {
    if (this.posx < -300) {
      this.posx = windowWidth + 100;
    }
  };
}

function keyPressed() {
  if (key == " ") {
    bullet.push(new Bullet(airplane.pos));
  }
  return false;
}
