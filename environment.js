var cont = 1;
var cloud = [];
var life = ["❤", "❤", "❤", "❤", "❤"];
var score = 0;
var bgx = 0;

function Foreground() {
  push();
  //background
  image(backgroundLoad, bgx, 0, backgroundLoad.width, height);
  bgx-=10;

  if (bgx <= -backgroundLoad.width + width) {
    image(backgroundLoad, bgx + backgroundLoad.width, 0, backgroundLoad.width, height);
    if (bgx <= -backgroundLoad.width) {
      bgx = 0;
    }
}
  //Life
  textSize(20);
  text(life.join(" "), 10, 30);
  fill(255);

  //Primitive selector
  text(prim[selectedPrimitive], width / 2, 30);

  //Score
  textFont(fontBold);
  text(`Score: ${score}`, windowWidth - 150, 30);
  pop();
}

/*class Cloud {
  constructor() {
    this.x = Math.random() * (windowWidth + 200);
    this.y = Math.random() * 500;
  }

  render() {
    push();
    image(cloudLoad[2], this.x, this.y);
    tint(255, 126);
    cont++;
    if (cont >= 8) {
      cont = 1;
    }
    pop();
  }

  movement() {
    for (let i = 0; i < 10; i++) {
      this.x -= 3;
    }
  }

  edges() {
    if (this.x < -300) {
      this.x = random(windowWidth + 100, windowWidth + 600);
    }
  }
}*/
