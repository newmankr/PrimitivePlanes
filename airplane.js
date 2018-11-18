aposx = 200;
aposy = 150;

function Airplane() {
  this.pos = createVector(200, 150);

  this.render = function() {
    push();
    image(airplaneLoad, aposx - 200, aposy - 102);
    tint(255);
    pop();
  };

  this.control = function() {
    if (keyIsDown(LEFT_ARROW) || keyIsDown(65)) {
      aposx -= 20;
    } else if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) {
      aposx += 20;
    } else if (keyIsDown(UP_ARROW) || keyIsDown(87)) {
      aposy -= 20;
    } else if (keyIsDown(DOWN_ARROW) || keyIsDown(83)) {
      aposy += 20;
    }
  };
}
