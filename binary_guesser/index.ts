let num = 0;
let digit1 = 0;
let digit2 = 0;
let digit3 = 0;
let digit4 = 0;

function setup() {
  num = Math.floor(random(0, 16));

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
  text(`${digit1}`, 70, height / 2 + 15);
  text(`${digit2}`, 155, height / 2 + 15);
  text(`${digit3}`, 240, height / 2 + 15);
  text(`${digit4}`, 325, height / 2 + 15);


}
function mouseClicked() {
if(mouseX > )  

}
