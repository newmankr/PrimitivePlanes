function Foreground() {
  textSize(20);
  text(life, 10, 30);
  fill(255);
}

function Cloud() {
  this.posx = Math.random() * (windowWidth + 200);
  this.posy = Math.random() * 500;

  this.render = function() {
    push();
    image(cloudLoad[cont], this.posx, this.posy);
    tint(255, 126);
    cont++;
    if (cont >= 8) {
      cont = 1;
    }
    pop();
  };

  this.movement = function() {
    for (let i = 0; i < 10; i++) {
      this.posx -= 3;
    }
  };

  this.edges = function() {
    if (this.posx < -300) {
      this.posx = random(windowWidth + 100, windowWidth + 600);
    }
    if (this.posx == bullets.posx && this.posy == bullets.posy) {
      this.posx = windowWidth + 100;
    }
  };
}
