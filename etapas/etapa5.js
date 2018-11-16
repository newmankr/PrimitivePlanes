var life = ["❤", "❤", "❤", "❤", "❤", "❤", "❤", "❤", "❤", "❤"];

function draw() {
  // Se a posição do objeto ultrapassar o limite de tela
  // Retira uma vida
  if (pposx <= -90) {
    life.pop();
  }
}
