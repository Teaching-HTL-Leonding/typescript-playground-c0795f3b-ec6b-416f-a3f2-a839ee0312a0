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

  circlepositionX = random(0, width - 2 * smallcircleRadius);
  circlepositionY = random(0, height - 2 * smallcircleRadius)

  targetpositionX = random(targetpositionX, width - targetRadius);
  targetpositiony = random(targetpositiony, width - targetRadius);

}

function draw() {
  background("lightgray");

  if (circlepositionX > width - smallcircleRadius) {
    circlepositionX = width - smallcircleRadius;
  } else if (circlepositionX < smallcircleRadius) {
    circlepositionX = smallcircleRadius;
  } else if (circlepositionY > height - smallcircleRadius) {
    circlepositionY = height - smallcircleRadius;
  } else if (circlepositionY < smallcircleRadius) {
    circlepositionY = smallcircleRadius
  }

  fill("blue");
  noStroke();
  circle(circlepositionX, circlepositionY, smallcircleRadius * 2);

  if (targetpositionX > width - targetRadius) {
    targetpositionX = width - targetRadius;
  } else if (targetpositionX < targetRadius) {
    targetpositionX = targetRadius;
  } else if (targetpositiony > height - targetRadius) {
    targetpositiony = height - targetRadius;
  } else if (targetpositiony < targetRadius) {
    targetpositiony = targetRadius
  }
  noFill();
  stroke("black");
  circle(targetpositionX, targetpositiony, targetRadius * 2);



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
  let dx = x2 - x1;
  let dy = y2 - y1;

  return Math.sqrt(dx * dx + dy * dy);
}

function circleOvelap(){
  let distance = calDistance(circlepositionX, circlepositionY, targetpositionX, targetpositiony);
  return distance < smallcircleRadius + targetRadius;


}
