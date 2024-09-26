function setup() {
  createCanvas(400, 400);
  background("lightgray");

  // Define relative sizes and positions based on canvas width and height
  const headWidth = width * 0.50; // Head size as 50% of the canvas width
  const headHeight = height * 0.50; // Head size as 50% of the canvas width
  const headX = width / 2 - headWidth / 2; // Center the head horizontally
  const headY = height / 2 - headHeight / 2; // Center the head vertically
  const eyes1 = headX+ headWidth*0.25 
  const eyes2 = headY+ headHeight*0.25
  const mouthwidth = headWidth*0.50
  const mouthheight = headHeight*0.10
  const mouthX = headX + headWidth * 0.25; 
  const mouthY = headY + headHeight * 0.70;





  // Draw the robot's head
  fill("gray");
  rect(headX, headY, headWidth, headHeight);

  // Eyes
  fill("black");
  circle(eyes1, eyes2, 40);
  circle(eyes1 +100, eyes2, 40);

  //Mouth
fill("white");
rect(mouthX, mouthY, mouthwidth, mouthheight);


 