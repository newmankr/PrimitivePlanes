var character = { x: 250, y: 300};

function setup() {
  createCanvas(800,500);
}

function draw() {
  //drawing the scenario
  background(40);
  ellipse(character.x, character.y, 80, 80);
  rect(450,280,50,50);

}
