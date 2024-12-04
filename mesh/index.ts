const SIZE = 400;  // Canvas size (square)
const MARGIN = 50; // Margin between the edges and the rays.
                   // This is also the distance between the rays.

// Use the HSB color scheme for this exercise. Draw the first rays
// (from left-upper corner) with hue 0 (=red), the next rays with
// hue 60 (yellow), the next with 120 (green), etc. Use the following
// constant for incrementing the hue value from point to point.
const COLOR_HUE_OFFSET = 60;

function setup() {
  createCanvas(SIZE, SIZE);
  background("black");

  strokeWeight(1);
  colorMode(HSB);

  let left = MARGIN;
  let colorline = 0;
  while (left < SIZE ) {
    stroke(colorline, 100, 100);
    let right = MARGIN;
    while (right < SIZE ) {
      line(MARGIN, left, SIZE - MARGIN, right);
      right += MARGIN;
    }

    left += MARGIN;
    colorline = colorline + COLOR_HUE_OFFSET;
  }
}

