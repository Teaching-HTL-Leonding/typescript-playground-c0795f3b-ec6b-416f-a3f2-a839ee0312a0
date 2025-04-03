// <<< Add your game variables here
const smallcircleRadius = 50;
const targetRadius = 70;
let circlepositionX = 0;
let circlepositionY = 0;
let targetpositionX = 0;
let targetpositiony = 0;
let dragging = false;


function setup() {
  createCanvas(800, 600);

  circlepositionX = random(smallcircleRadius, width - smallcircleRadius);
  circlepositionY = random(smallcircleRadius, height - smallcircleRadius)

  targetpositionX = random(targetRadius, width - targetRadius);
  targetpositiony = random(targetRadius, height - targetRadius);

  circleOverlap();

}

function draw() {
  background("lightgray");

  noFill();
  stroke("black");
  circle(targetpositionX, targetpositiony, 2 * targetRadius);

  fill("blue");
  noStroke();
  circle(circlepositionX, circlepositionY, 2 * smallcircleRadius);

  fill("black");
  text(`Score: ${point}`, 10, height - 10);

  
}

function mousePressed() {
  const distancestick = calDistance(mouseX, mouseY, circlepositionX, circlepositionY)

  if (distancestick < smallcircleRadius) {
    dragging = true;

  }
}
function mouseDragged() {
  if (dragging) {
    circlepositionX = mouseX;
    circlepositionY = mouseY;
  }
  // <<< Add mouse dragged logic here
}

function mouseReleased() {
  dragging = false;
  // <<< Add mouse released logic here
}

// <<< Add additional functions here
function calDistance(x1: number, y1: number, x2: number, y2: number) {
  let dx = x1 - x2;
  let dy = y1 - y2;

  return Math.sqrt(dx * dx + dy * dy);
}

function circleOverlap() {
  let distance = calDistance(circlepositionX, circlepositionY, targetpositionX, targetpositiony);
  while (distance < smallcircleRadius + targetRadius) {
    circlepositionX = random(smallcircleRadius, width - smallcircleRadius);
    circlepositionY = random(smallcircleRadius, height - smallcircleRadius);
    distance = calDistance(circlepositionX, circlepositionY, targetpositionX, targetpositiony);

  }

}
