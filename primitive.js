pposx = 900;
pposy = Math.random() * 500;

function Primitive() {
  this.posx = windowWidth + 100;
  this.posy = Math.random() * 500;
  this.r = createVector(pposx + 10, pposy + 10);

  this.render = function() {
    rect(pposx, pposy, 50, 50);
  };

  this.movement = function() {
    for (let i = 0; i < 10; i++) {
      pposx -= 2.5;
    }
  };

  this.edges = function() {
    if (pposx < -100) {
      pposx = windowWidth + 100;
    }
  };
}
