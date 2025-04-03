// <<< Add your game variables here
const smallcircleRadius = 50;
let beginpositionX = 0;
let beginpositionY = 0;

function setup() {
  createCanvas(800, 600);

  beginpositionX = random(0, width - 2* smallcircleRadius);
  beginpositionY = random(0, height - 2* smallcircleRadius)

}

function draw() {
  background("lightgray");

  fill("lightblue");
  circle(beginpositionX, beginpositionY, smallcircleRadius);

}

function mousePressed() {
  // <<< Add mouse pressed logic here
}

function mouseDragged() {
  // <<< Add mouse dragged logic here
}

function mouseReleased() {
  // <<< Add mouse released logic here
}

// <<< Add additional functions here
