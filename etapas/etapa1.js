/*E1 - esenhar no mínimo duas figuras geométricas ilustrando uma elipse como
o jogador e um quadrado como um obstáculo. O jogador deve ser posicionado no
lado oposto ao obstáculo.*/

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  ellipse(200, 280, 80, 80);
  rect(450, 280, 50, 50);
}
