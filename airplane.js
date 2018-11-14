aposx = 200;
aposy = 150;

function Airplane() {
  this.pos = createVector(200, 150);

  this.render = function() {
    push();
    noStroke();
    ellipse(aposx, aposy, 80, 80);
    pop();
  };

  this.control = function() {
    if (keyIsDown(LEFT_ARROW) || keyIsDown(65)) {
      aposx -= 10;
    } else if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) {
      aposx += 10;
    } else if (keyIsDown(UP_ARROW) || keyIsDown(87)) {
      aposy -= 10;
    } else if (keyIsDown(DOWN_ARROW) || keyIsDown(83)) {
      aposy += 10;
    }
  };
}
