var bullets = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
    frameRate(30);
    airplane = new Airplane();
}

function draw() {
    background(0);
    airplane.render();
    airplane.control();

    for (var i = 0; i < bullets.length; i++) {
        bullets[i].render();
        bullets[i].movement();
    }
}

function Airplane() {
    this.pos = createVector(200, 150);
    this.heading = 0;

    this.render = function () {
        push();
        noStroke();
        ellipse(this.pos.x, this.pos.y, 80, 80);
        pop();
    }
}

function Bullet(apos) {
    this.pos = createVector(apos.x, apos.y);

    this.render = function () {
        push();
        stroke(255);
        strokeWeight(3);
        point(this.pos.x, this.pos.y);
        pop();
    }
    //Movimentação para a direita
    this.movement = function () {
        for (i = 0; i < 10; i++) {
            this.pos.x++;
        }
    }
}
//Ao pressionar espaço, é lançada a bala
function keyPressed() {
    if (key == ' ') {
        //Posição da bala de acordo com a posição do avião
        bullets.push(new Bullet(airplane.pos));
    }
}