function setup() {
  createCanvas(800,500);
}
var x = 250;
var y = 300;
function draw() {
  //drawing the scenario - 1
  background(40);
  ellipse(x, y, 80, 80);
  rect(450,280,50,50);

  //using the keyboard to control the character - 2
  if (keyIsDown(LEFT_ARROW) || keyIsDown(65)){
    x-=10;
  } else if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)){
    x+=10;
  } else if (keyIsDown(UP_ARROW) || keyIsDown(87)){
    y-=10;
  } else if (keyIsDown(DOWN_ARROW) || keyIsDown(83)){
    y+=10;
  }
}
