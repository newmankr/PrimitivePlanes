function setup() {
  createCanvas(800,500);
}
var x = 300;
var y = 300;
function draw() {
  background(40);
  ellipse(x, y, 80, 80);
  rect(400,280,50,50);

  if (keyIsDown(LEFT_ARROW)){
    x = x - 10;
  } else if (keyIsDown(RIGHT_ARROW)){
    x = x + 10;
  }
}
