var hit = false;

function draw() {
  //Colisão a ser acertado, utilizando o p5.collide2d
  hit = collidePointRect(bposx, bposy, pposx, pposy, 50, 50);
  //Se acertado, retirar o objeto do vetor
  if (hit) {
    primitive.pop();
  }
}
