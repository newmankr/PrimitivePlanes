var character = {x:250, y:300};
var object = {x:800, y:Math.random(0,1)*500};
var ammo = {x:250, y:300};

function setup() {
  createCanvas(800,500);
  frameRate(30);
}

function draw() {
  //drawing the scenario
  background(0, 150, 240);
  bullet();
  airplane();
  enemies();
}

function airplane(){
  ellipse(character.x, character.y, 80, 80);

    //using the keyboard to control the character
  if (keyIsDown(LEFT_ARROW) || keyIsDown(65)){
    character.x-=10;
  } else if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)){
    character.x+=10;
  } else if (keyIsDown(UP_ARROW) || keyIsDown(87)){
    character.y-=10;
  } else if (keyIsDown(DOWN_ARROW) || keyIsDown(83)){
    character.y+=10;
  }
}

function bullet(){
  if(keyCode == 32){
    rect(ammo.x,ammo.y,15,15);
    ammo.x += 5;
  }
  if(ammo.x>800){

  }
  return false;
}

function enemies(){
  rect(object.x,object.y,50,50);
  object.x -= 5;
  if(object.x<0){
    object.x = 800;
    rect(object.x,object.y,50,50);
  }
  return false;
}
