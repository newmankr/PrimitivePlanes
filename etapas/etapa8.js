/*E8 - Implementar no mínimo cinco níveis de dificuldade para o jogo. Em cada nível de dificuldade 
pelo menos uma característica do cenário (jogo) deve ser modificada. Por exemplo: quantidade de 
objetos a serem destruídos; velocidade de movimentação dos objetos; aumentar a resistência dos 
objetos; e outros.  
 */

// A mudança de nível se dá pelo aumento na velocidade da bomba(objeto a ser atingido)
// a cada 1000 pontos ganhos
function draw() {
  if (score >= 1000 && score < 2000) {
    bombVelocity = 3;
  } else if (score >= 2000 && score < 3000) {
    bombVelocity = 4;
  } else if (score >= 3000 && score < 4000) {
    bombVelocity = 6;
  } else if (score >= 4000 && score < 5000) {
    bombVelocity = 10;
  } else if (score >= 5000) {
    screen = 3;
  }
}
