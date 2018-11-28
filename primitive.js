var primitives = [];
var prim = ["∫ sec^2(x)", "∫ 1/x", "∫ sin(x)", "∫ cos(x)", "∫ e^x"];
var ans = ["tan(x)", "ln(x)", "-cos(x)", "sin(x)", "e^x"];
var selectedPrimitive = parseInt(Math.random() * prim.length);

class Primitive {
  constructor(i) {
    this.x = width + Math.random() * 400;
    this.y = Math.random() * 500;
    this.selectedA = parseInt(Math.random() * ans.length);
    this.i = i;
  }

  render() {
    push();
    rect(this.x, this.y, 50, 50);
    fill(0);
    text(ans[this.selectedA], this.x, this.y + 30);
    fill(255);
    pop();
  }

  movement() {
    this.x -= 10;
  }

  edges() {
    if (this.x < -100) {
      ans.splice(this.selectedA, 1);
      primitives.splice(this.i, 1);
      life.pop();
    }
  }
}
