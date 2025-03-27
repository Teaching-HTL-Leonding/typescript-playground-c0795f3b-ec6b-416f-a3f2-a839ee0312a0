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
  circle(width/2, height - 50, smallcircleradius * 2)

  push();
  imageMode(CENTER);
  translate(width / 2 + fighterPositionX, height / 2 + fighterPositionY);
  image(fighter, 0, 0, fighterDisplayWidth, fighterDisplayHeight);
  pop();
}



function mousePressed() {
  pressedcircle = distance(mouseX, mouseY);
}


function mouseDragged() { 
  if(pressedcircle === true){
    circleX = mouseX
    circleY = mouseY
  }
}

function mouseReleased() {
}

function distance(x:number,y:number,):boolean{
  const dx = mouseX -x;
  const dy = mouseY - y;
  const distance = Math.sqrt(dx * dx + dy * dy);
  return distance <= smallcircleradius;
  }
