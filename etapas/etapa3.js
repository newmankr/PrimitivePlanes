var primitives = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
    frameRate(30);
    for (var i = 0; i < 1; i++) {
        primitives.push(new Primitive());
    }
}

function draw() {
    background(0);

    for (var i = 0; i < primitives.length; i++) {
        primitives[i].render();
        primitives[i].movement();
        primitives[i].edges();
    }
}

function Primitive() {
    this.pos = createVector(windowWidth + 30, Math.random() * 500);
    this.render = function () {
        rect(this.pos.x, this.pos.y, 50, 50);
    }
    //Movimentação para a esquerda
    this.movement = function () {
        for (i = 0; i < 10; i++) {
            this.pos.x--;
        }
    }
    //Limite da tela, quando o objeto atinge um valor fora da tela pela esquerda
    this.edges = function () {
        if (this.pos.x < 0) {
            this.pos.x = windowWidth + 30;
        }
    }
}