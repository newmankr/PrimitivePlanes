bposx = 0;
bposy = 0;

function Bullet(aposx, aposy) {
  bposx = aposx;
  bposy = aposy;

  this.render = function() {
    push();
    stroke(255);
    strokeWeight(3);
    point(bposx, bposy);
    pop();
  };

  this.movement = function() {
    for (let i = 0; i < 10; i++) {
      bposx += 10;
    }
  };

  this.hits = function(primitive) {
    var d = dist(bposx, bposy, primitive.posx, primitive.posy);

    if (d < this.r + primitive.r) {
      return true;
    } else {
      return false;
    }
  };
}
