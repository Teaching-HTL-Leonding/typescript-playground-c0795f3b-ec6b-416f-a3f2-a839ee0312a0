// Set the initial fill levels for the silos. The fill levels are separated by commas.
const INITIAL_FILL = "3,7,8,3,10,2";

const SILO_MAX = 10; // Maximum fill for each silo
const CRITICAL_FILL = 8; // Critical fill level for each silo

// Store the fill values for the silos. Will be a value between 0 and SILO_MAX.
const silos: number[] = [];

// Constants for the layout
const CANVAS_HEIGHT = 500;
const CANVAS_WIDTH = 480;

const SILO_WIDTH = 50; // Width of each silo
const SILO_GAP = 25; // Gap between silos
const SILO_HEIGHT = 320; // Height of each silo
const SILOS_TOP = CANVAS_HEIGHT / 2 - SILO_HEIGHT / 2; // Y-coordinate of the top of the silos

const BUTTON_SIZE = 20; // Height of the button rectangles
const BUTTON_GAP = 15; // Gap between the buttons and the silos
const BUTTON_TOP = SILOS_TOP - BUTTON_GAP - BUTTON_SIZE; // Y-coordinate of the top of the button rectangles
const BUTTON_SPACING = 2; // Small gap between the two yellow rectangles

// Arrays to store the x-coordinates of each silo
const silos_x: number[] = [];

function setup() {
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);

  // Parse initial fill levels
  let num = 0;
  for (let i = 0; i < INITIAL_FILL.length; i++) {
    if (INITIAL_FILL[i] === ",") {
      silos.push(num);
      num = 0;
    } else {
      num = num * 10 + parseInt(INITIAL_FILL[i]);
    }
  }
  silos.push(num);

  // Calculate the x-coordinates of the silos
  for (let i = 0; i < silos.length; i++) {
    silos_x.push(SILO_GAP + i * (SILO_WIDTH + SILO_GAP));
  }
}

function draw() {
  background("black");

  // Draw fill levels
  textAlign(CENTER);
  fill("yellow");
  textSize(15);
  noStroke();
  for (let i = 0; i < silos.length; i++) {
    text(`${silos[i]}`, silos_x[i] + SILO_WIDTH / 2, SILOS_TOP + SILO_HEIGHT + 35);
  }

  // Draw silos
  stroke("yellow");
  strokeWeight(2);
  for (let j = 0; j < silos.length; j++) {
    line(silos_x[j], SILOS_TOP, silos_x[j], SILOS_TOP + SILO_HEIGHT);
    line(silos_x[j], SILOS_TOP + SILO_HEIGHT, silos_x[j] + SILO_WIDTH, SILOS_TOP + SILO_HEIGHT);
    line(silos_x[j] + SILO_WIDTH, SILOS_TOP + SILO_HEIGHT, silos_x[j] + SILO_WIDTH, SILOS_TOP);
  }

  // Draw fill inside silos
  noStroke();
  for (let k = 0; k < silos.length; k++) {
    if (silos[k] >= CRITICAL_FILL) {
      fill("red");
    } else {
      fill("green");
    }
    rect(silos_x[k], SILOS_TOP + (SILO_HEIGHT / 10 * (10 - silos[k])), SILO_WIDTH, SILO_HEIGHT / 10 * silos[k]);
  }

  // Draw buttons (two yellow rectangles with triangles inside)
  for (let i = 0; i < silos.length; i++) {
    // Left yellow rectangle (Add button)
    fill("yellow");
    rect(silos_x[i], BUTTON_TOP, SILO_WIDTH / 2 - BUTTON_SPACING, BUTTON_SIZE);

    // Right yellow rectangle (Remove button)
    rect(
      silos_x[i] + SILO_WIDTH / 2 + BUTTON_SPACING, // Add spacing
      BUTTON_TOP,
      SILO_WIDTH / 2 - BUTTON_SPACING,
      BUTTON_SIZE
    );

    // Upward triangle (Add) inside the left rectangle
    fill("black");
    triangle(
      silos_x[i] + SILO_WIDTH / 4 - 5, BUTTON_TOP + BUTTON_SIZE - 5, // Bottom-left
      silos_x[i] + SILO_WIDTH / 4 + 5, BUTTON_TOP + BUTTON_SIZE - 5, // Bottom-right
      silos_x[i] + SILO_WIDTH / 4, BUTTON_TOP + 5 // Top
    );

    // Downward triangle (Remove) inside the right rectangle
    triangle(
      silos_x[i] + 3 * SILO_WIDTH / 4 - 5, BUTTON_TOP + 5, // Top-left
      silos_x[i] + 3 * SILO_WIDTH / 4 + 5, BUTTON_TOP + 5, // Top-right
      silos_x[i] + 3 * SILO_WIDTH / 4, BUTTON_TOP + BUTTON_SIZE - 5 // Bottom
    );
  }
}

function mouseClicked() {
  
}
