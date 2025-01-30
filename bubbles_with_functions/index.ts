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
 
  // <<< Add code here
}
 
function draw() {
  background("black");
  if (circles_x.length >= 10) {
   
  }
 
  // <<< Add code here
  for(let i = 0; i < circles_x.length; i ++){
    circle(circles_x[i], circles_y[i], circles_diameter[i]);
  }
}
 
// <<< Add functions here
function addRandomCircle(){
  circles_x.push(random(0, width));
  circles_y.push(random(0, height));
  circles_diameter.push(random(10, 51));
}
 
function isInside(){
 
}