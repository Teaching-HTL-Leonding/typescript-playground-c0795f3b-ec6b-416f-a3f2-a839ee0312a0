const circles_x: number[] = [];
const circles_y: number[] = [];
const circles_diameter: number[] = [];

let waiting_time = 3000;
let circle_interval: number;
let level_interval: number;

let points = 0;


function setup() {
  createCanvas(300, 300);
  background("black");
  strokeWeight(2);
  stroke("lime");
  noFill();

  addRandomCircle();
  circle_interval = setInterval(addRandomCircle, 3000);


}


function draw() {
  background("black");
  if (circles_x.length >= 10) {
    stopGame();

    return;
  }

  strokeWeight(2);
  stroke("lime");
  fill("black");

  for (let i = 0; i < circles_x.length; i++) {
    circle(circles_x[i], circles_y[i], circles_diameter[i]);
  }


  noStroke();
  fill("yellow");
  textSize(20);
  text(`Points: ${points}`, 10, 30);
} 


function addRandomCircle() {
  circles_x.push(random(0, width));
  circles_y.push(random(0, height));
  circles_diameter.push(random(10, 51));
}

function isInside(x: number, y: number, circle_index: number): boolean {
  const dx = x - circles_x[circle_index];
  const dy = y - circles_y[circle_index];
  const distance = Math.sqrt(dx * dx + dy * dy);
  return distance < circles_diameter[circle_index] / 2;
}

function stopGame() {
  clearInterval(circle_interval);
  clearInterval(level_interval);

  background("black");
  textSize(30);
  fill("red");
  textAlign(CENTER, CENTER);
  text(`Game Over\Points: ${points}`, 0, 0, width, height);
  noLoop();
}
function mouseClicked() {
  for (let i = 0; i < circles_x.length; i++) {
    if (isInside(mouseX, mouseY, i)) {
      circles_x.splice(i, 1);
      circles_y.splice(i, 1);
      circles_diameter.splice(i, 1);
      points++;
    }
  }
} 