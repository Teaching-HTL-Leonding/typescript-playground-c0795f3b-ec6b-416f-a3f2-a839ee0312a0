let num = 0;
let digit4 = 0;
let digit3 = 0;
let digit2 = 0;
let digit1 = 0;
let digitclick = 0;
let binarynow= 0;

function setup() {
  num = Math.floor(random(1, 16));

  createCanvas(400, 300);
  background("black");

  fill("yellow");
  textAlign(CENTER, CENTER);
  text(`${num} in binary`, width / 2, height / 4);


  stroke("yellow");
  noFill();
  rect(50, height / 2 - 40, 50, 80);
  rect(130, height / 2 - 40, 50, 80);
  rect(210, height / 2 - 40, 50, 80);
  rect(290, height / 2 - 40, 50, 80);



  text(`${digit4}`, 75, height / 2);
  text(`${digit3}`, 155, height / 2);
  text(`${digit2}`, 235, height / 2);
  text(`${digit1}`, 315, height / 2);




    if ((mouseX < 100) && (mouseX > 50) && (mouseY > (height / 2 - 40)) && (mouseY < (height / 2 + 80))) {
    digitclick = 4;
    if (digit4 === 0) {
      digit4 = 1;
    }
    else {
      digit4 = 0;
    }
    fill("black");
    rect(50, height / 2 - 40, 50, 80);
    fill("yellow");
    text(`${digit4}`, 75, height / 2);
  }
  if ((mouseX < 180) && (mouseX > 130) && (mouseY > (height / 2 - 40)) && (mouseY < (height / 2 + 80))) {
    digitclick = 3;
    if (digit3 === 0) {
      digit3 = 1;
    }
    else {
      digit3 = 0;
    }
    fill("black");
    rect(130, height / 2 - 40, 50, 80);
    fill("yellow");
    text(`${digit3}`, 155, height / 2);
  }
if ((mouseX < 260) && (mouseX > 210) && (mouseY > (height / 2 - 40)) && (mouseY < (height / 2 + 80))) {
    digitclick = 2;
    if (digit2 === 0) {
      digit2 = 1;
    }
    else {
      digit2 = 0;
    }
    fill("black");
    rect(210, height / 2 - 40, 50, 80);
    fill("yellow");
    text(`${digit2}`, 235, height / 2);
  }
  if ((mouseX < 340) && (mouseX > 290) && (mouseY > (height / 2 - 40)) && (mouseY < (height / 2 + 80))) {
    digitclick = 1;
    if (digit1 === 0) {
      digit1 = 1;
    }
    else {
      digit1 = 0;
    }
    fill("black");
    rect(290, height / 2 - 40, 50, 80);
    fill("yellow");
    text(`${digit1}`, 315, height / 2);
  }
  

