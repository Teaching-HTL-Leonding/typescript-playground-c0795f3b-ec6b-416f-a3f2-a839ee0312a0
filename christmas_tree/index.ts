const TOP_MARGIN = 80;
const SPHERE_DIAMETER = 30;
const INITIAL_TRIANGLE_BASE_WIDTH = 100;
const SIZE_INCREASE_BY_LAYER = 0.5;
const HEIGHT_TO_WIDTH_RATIO = 0.5;
const NUMBER_OF_LAYERS = 4;
const TRUNK_WIDTH = 50;
const TRUNK_HEIGHT = 50;
const SIZE = 500;
 
function setup() {
  createCanvas(500, 500);
  background("black");
  fill("green");
  noStroke();
 
  // <<< Draw the tree
 
  let trianglewidth = INITIAL_TRIANGLE_BASE_WIDTH;
  let circlewidth = INITIAL_TRIANGLE_BASE_WIDTH;
  let color1 = 30;
  translate(width / 2 , TOP_MARGIN);
  push();
  for(let i = 0; i < NUMBER_OF_LAYERS; i ++){
    fill("green");
    triangle(- trianglewidth / 2, trianglewidth / 2, 0, 0, trianglewidth / 2, trianglewidth / 2);
    translate(0, trianglewidth / 4);
    trianglewidth *= 1.5;
     fill("brown");
    rect(- TRUNK_WIDTH / 2, trianglewidth / 2, TRUNK_WIDTH, TRUNK_HEIGHT);
  }
    for(let x = 0; x <= SIZE; x += 50){
    pop();
      fill(color1 , 90, 60)
      circle(- circlewidth / 2, circlewidth / 2 + 15, SPHERE_DIAMETER);
      circle(circlewidth / 2, circlewidth / 2 + 15, SPHERE_DIAMETER);
      translate(0, circlewidth / 4);
      circlewidth *= 1.5;
      color1 += 80;
    }
   
}
