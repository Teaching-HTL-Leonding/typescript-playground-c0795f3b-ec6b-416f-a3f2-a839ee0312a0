const SIZE = 400;  // Canvas size (square)
const MARGIN = 50; // Margin between the edges and the rays.
                  // This is also the distance between the rays.

function setup() {
  createCanvas(SIZE, SIZE);
  background("black");

  strokeWeight(1);
  stroke("lime");

  // <<< Add your code here
  for(let i = MARGIN; i < SIZE; i += MARGIN){
    for(let j = MARGIN; j < SIZE; j += MARGIN)
    line(MARGIN, j, SIZE - MARGIN, i)
    
}
}