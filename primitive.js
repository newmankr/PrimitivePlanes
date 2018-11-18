pposx = 1300;
pposy = Math.random() * 500;

function Primitive() {
  //this.posx = windowWidth + 100;
  //this.posy = Math.random() * 500;

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
      primitives.pop();
      pposx = windowWidth + 200;
      pposy = Math.random() * 500;
    }
  };
}
