// <<< Add your game variables here
const smallcircleRadius = 50;
let beginpositionX = 0;
let beginpositionY = 0;
let dragging = false;
function setup() {
  createCanvas(800, 600);

  beginpositionX = random(0, width - 3 * smallcircleRadius);
  beginpositionY = random(0, height - 3 * smallcircleRadius)

}

function draw() {
  background("lightgray");

  if (beginpositionX > width - smallcircleRadius) {
    beginpositionX = width - smallcircleRadius;
  } else if (beginpositionX < smallcircleRadius) {
    beginpositionX = smallcircleRadius;
  } else if (beginpositionY > height - smallcircleRadius) {
    beginpositionY = height - smallcircleRadius;
  } else if (beginpositionY < smallcircleRadius) {
    beginpositionY = smallcircleRadius
  }



  fill("blue");
  noStroke();
  circle(beginpositionX, beginpositionY, smallcircleRadius);

}

function mousePressed() {
  const distancestick = calDistance(mouseX, mouseY, beginpositionX, beginpositionY)

  if (distancestick < smallcircleRadius) {
    dragging = true;

  }
}
function mouseDragged() {
  if (dragging) {
    beginpositionX = mouseX;
    beginpositionY = mouseY;
  }
  // <<< Add mouse dragged logic here
}

function mouseReleased() {
  dragging = false;
  // <<< Add mouse released logic here
}

// <<< Add additional functions here
function calDistance(x1: number, y1: number, x2: number, y2: number) {
  let dx = x2 - x1;
  let dy = y2 - y1;

  return Math.sqrt(dx * dx + dy * dy);
}
