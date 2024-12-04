
const TOP_MARGIN = 80;
const SPHERE_DIAMETER = 30;
const INITIAL_TRIANGLE_BASE_WIDTH = 100;
const SIZE_INCREASE_BY_LAYER = 0.5;
const HEIGHT_TO_WIDTH_RATIO = 0.5;
const NUMBER_OF_LAYERS = 4;
const TRUNK_WIDTH = 50;
const TRUNK_HEIGHT = 50;

function setup() {
  createCanvas(500, 500);
  background("black");
  colorMode(HSB);
  let color = 0;
  noStroke();

  translate(width / 2, TOP_MARGIN);
  fill("green");
  let trianglewidth = INITIAL_TRIANGLE_BASE_WIDTH;
  for (let i = 0; i < NUMBER_OF_LAYERS; i++) {
    fill("green");
    triangle(- trianglewidth / 2, trianglewidth / 2, 0, 0, trianglewidth / 2, trianglewidth / 2)
  
    for (let i = 0; i < NUMBER_OF_LAYERS; i++) {
   fill(Math.floor(random(0, 355)), Math.floor(random(0, 355)), Math.floor(random(0, 355)));
      circle(- trianglewidth / 2, trianglewidth / 2 + 15, SPHERE_DIAMETER)
      circle(trianglewidth / 2, trianglewidth / 2 + 15, SPHERE_DIAMETER)
      
    }
    translate(0, trianglewidth / 4);
    trianglewidth *= 1.5;
}
 fill("brown");
  rect(-25, 84, 50, 60);
}