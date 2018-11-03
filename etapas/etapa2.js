var airplane;

function setup() {
    createCanvas(windowWidth, windowHeight);
    airplane = new Airplane();
}

function draw() {
    background(0);
    airplane.control();
}

function Airplane() {
    this.control = function () {
        if (keyIsDown(LEFT_ARROW) || keyIsDown(65)) {
            this.pos.x -= 5;
        } else if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) {
            this.pos.x += 5;
        } else if (keyIsDown(UP_ARROW) || keyIsDown(87)) {
            this.pos.y -= 5;
        } else if (keyIsDown(DOWN_ARROW) || keyIsDown(83)) {
            this.pos.y += 5;
        }
    }
}