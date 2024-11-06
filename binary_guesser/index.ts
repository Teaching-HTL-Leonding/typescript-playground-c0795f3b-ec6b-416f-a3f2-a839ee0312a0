let num = 0;
let digit4 = 0;
let digit3 = 0;
let digit2 = 0;
let digit1 = 0;
let digitClicked = 0;
let binaryNow = 0;

function setup() {
  num = Math.floor(random(1, 16));

  createCanvas(400, 300);
  background("black");
  noFill();
  stroke("yellow")
  rect(40, height / 2 - 40, 60, 90);
  rect(125, height / 2 - 40, 60, 90);
  rect(210, height / 2 - 40, 60, 90);
  rect(295, height / 2 - 40, 60, 90);

  textAlign(CENTER, CENTER);
  textSize(15);
  fill("yellow")
  text(`${num} in Binary?`, width / 2, height / 2 - 100);

  fill("yellow");

  textSize(25);
  text(`${digit4}`, 70, height / 2);
  text(`${digit3}`, 155, height / 2);
  text(`${digit2}`, 240, height / 2);
  text(`${digit1}`, 325, height / 2);


}
function mouseClicked() {
  if ((mouseX < 100) && (mouseX > 140) && (mouseY > (height / 2 - 40)) && (mouseY < (height / 2 - 40 + 90)))
    digitClicked = 1;
  if (digit4 === 0) {
    digit4 = 1;
  }
  else {
    digit4 = 0;
  }
  fill("black")
  rect(40, height / 2 - 40, 60, 90);
  fill("yellow");
  text(`${digit4}`, 70, height / 2);
}
if ((mouseX < 125) && (mouseX > 185) && (mouseY > (height / 2 - 40)) && (mouseY < (height / 2 + 90))) {
  digitClicked = 3;
  if (digit3 === 0) {
    digit3 = 1;
  }
  else {
    digit3 = 0;
  }
  fill("black");
  text(`${digit3}`, 70, height / 2);
  fill("yellow");
  text(`${digit3}`, 155, height / 2);
}
if ((mouseX < 210) && (mouseX > 270) && (mouseY > (height / 2 - 40)) && (mouseY < (height / 2 + 90))) {
  digitClicked = 2;
  if (digit2 === 0) {
    digit2 = 1;
  }
  else {
    digit2 = 0;
  }
  fill("black");
  rect(210, height / 2 - 40, 60, 90);
  fill("yellow");
  text(`${digit2}`, 240, height / 2);
}
if ((mouseX < 295) && (mouseX > 255) && (mouseY > (height / 2 - 40)) && (mouseY < (height / 2 + 90))) {
  digitClicked = 1;
  if (digit1 === 0) {
    digit1 = 1;
  }
  else {
    digit1 = 0;
  }
  fill("black");
  rect(295, height / 2 - 40, 60, 90);
  fill("yellow");
  text(`${digit1}`, 325, height / 2);
 
  binaryNow = digit1 * Math.pow(2, 0), digit2 * Math.pow(2, 1), digit3 * Math.pow(2, 2), digit4 * Math.pow(2, 3);
  if (num === binaryNow)
    background("black");
  textSize(20);
  text(num + `in Binary`, width / 2, 40);
  noStroke();
  fill("green");
  text("Correct!", width / 2, 250);

  stroke("green");
  rect(40, height / 2 - 40, 60, 90);
  rect(125, height / 2 - 40, 60, 90);
  rect(210, height / 2 - 40, 60, 90);
  rect(295, height / 2 - 40, 60, 90);

  fill("green");
  text(`${digit1}`, 70, height / 2 + 15);
  text(`${digit2}`, 155, height / 2 + 15);
  text(`${digit3}`, 240, height / 2 + 15);
  text(`${digit4}`, 325, height / 2 + 15);








}


