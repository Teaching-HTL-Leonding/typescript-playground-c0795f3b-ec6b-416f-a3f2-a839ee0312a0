let num = 0;
let digit2 = 0;
let digit3 = 0;
let digit4 = 0;
let digit5 = 0;
let digitclick = 0;

function setup() {
  num = Math.floor(random(0, 16));

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



  text(`${digit2}`, 75, height / 2);
  text(`${digit3}`, 155, height / 2);
  text(`${digit4}`, 235, height / 2);
  text(`${digit5}`, 315, height / 2);




  function mouseClicked(){
  if ((mouseX < 100) && (mouseX > 50)) && (mouseY > (height / 2 - 40)) && (mouseY < (height / 2 - 80)){
  digitclick= 4
  if(digit4=== 0){
  digit4= 1
  }
  }
} 
} 