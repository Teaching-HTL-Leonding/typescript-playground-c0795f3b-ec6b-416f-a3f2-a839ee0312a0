let fighter: p5.Image;

const fighterImageWidth = 475;
const fighterImageHeight = 724;
const fighterDisplayHeight = 200;
const fighterDisplayWidth = fighterDisplayHeight * (fighterImageWidth / fighterImageHeight);
let fighterPositionX = 0;
let fighterPositionY = 0;
let pressedcircle = false;

let smallcircleradius = 10;
let bigcircleradius = 50;


let circleX = 500 / 2;
let circleY = 500 - 50;

function preload() {
  fighter = loadImage("https://cddataexchange.blob.core.windows.net/images/Spaceship.png");
}

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background("lightblue");
  stroke("red");
  fill("white");
  circle(width / 2, height - 50, bigcircleradius * 2);

  noStroke();
  fill("black");
  circle(circleX, circleY, smallcircleradius * 2)

  push();
  imageMode(CENTER);
  translate(width / 2 + fighterPositionX, height / 2 + fighterPositionY);
  image(fighter, 0, 0, fighterDisplayWidth, fighterDisplayHeight);
  pop();
   
   movePlane(circleX, circleY, mouseX, mouseY)
}


function mousePressed() {
  pressedcircle = distance(circleX, circleY);
}


function mouseDragged() {
  if (pressedcircle === true) {
    circleX = mouseX
    circleY = mouseY
  }
}

function mouseReleased() {
  pressedcircle = false;
}

function distance(x: number, y: number,): boolean {
  const dx = mouseX - x;
  const dy = mouseY - y;
  const distance = Math.sqrt(dx * dx + dy * dy);
  return distance <= smallcircleradius;
}

function movePlane(x: number, y: number, xm: number, ym: number) {

  let dx = 0
  let dy = 0

  dx = x - width / 2;
  dy = y - (height - 50);


  fighterPositionX += dx / 5
  fighterPositionY += dy / 5
  if (fighterPositionX > 250) {
    fighterPositionX = 250
  }
  else if (fighterPositionX < -250) {
    fighterPositionX = -250
  }
  if (fighterPositionY > 250) {
    fighterPositionY = 250
  }
  else if (fighterPositionY < -250) {
    fighterPositionY = -250
  }
}