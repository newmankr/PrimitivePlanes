function Bullet(aposx, aposy) {
  this.bposx = aposx;
  this.bposy = aposy;

  this.render = function() {
    push();
    image(bulletLoad, this.bposx, this.bposy, 16, 4);
    pop();
  };

  this.movement = function() {
    for (let i = 0; i < 10; i++) {
      this.bposx += 10;
    }
  };

  this.edges = function() {
    if (this.bposx > windowWidth) {
      bullets.pop();
    }

    /*hit = collidePointRect(this.bposx, this.bposy, pposx, pposy, 50, 50);

    if (hit) {
      primitives.pop();
      pposx = windowWidth + 200;
      pposy = Math.random() * 500;
    }*/
  };

  this.hits = function() {
    hit = collidePointRect(this.bposx, this.bposy, pposx, pposy, 50, 50);

    if (hit) {
      primitives.pop();
      pposx = windowWidth + 200;
      pposy = Math.random() * 500;
    }
  };
}
