var cont = 1;
var life = ["❤", "❤", "❤", "❤", "❤"];
var score = 0;
var bgx = 0;

function Foreground() {
  push();
  //background
  image(backgroundLoad, bgx, 0, backgroundLoad.width, height);
  bgx -= 10;

  if (bgx <= -backgroundLoad.width + width) {
    image(
      backgroundLoad,
      bgx + backgroundLoad.width,
      0,
      backgroundLoad.width,
      height
    );
    if (bgx <= -backgroundLoad.width) {
      bgx = 0;
    }
  }
  //Life
  textSize(20);
  text(life.join(" "), 10, 30);
  fill(255);

  //Score
  textFont(fontBold);
  text(`Score: ${score}`, width - 150, 30);
  pop();
}
