var character = { x: 250, y: 300};

function setup() {
  createCanvas(800,500);
}

function draw() {
  //drawing the scenario
  background(40);
  ellipse(character.x, character.y, 80, 80);
  rect(450,280,50,50);

  //using the keyboard to control the character
  if (keyIsDown(LEFT_ARROW) || keyIsDown(65)){
    character.x-=10;
  } else if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)){
    character.x+=10;
  } else if (keyIsDown(UP_ARROW) || keyIsDown(87)){
    character.y-=10;
  } else if (keyIsDown(DOWN_ARROW) || keyIsDown(83)){
    character.y+=10;
  }
}
