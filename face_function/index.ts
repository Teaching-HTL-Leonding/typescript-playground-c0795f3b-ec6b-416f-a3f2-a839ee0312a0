let smileNext = true;
function setup() {
  createCanvas(500, 500);
  angleMode(DEGREES);

  // Function CALL
  // +------------------------------ Function name
  // |  +--------------------------- Function parameter
  // v  v
  smile(true);
}
function mouseClicked(){
smileNext = !smileNext;
smile(smileNext);
}
// Function DEFINITION
//       +-------------------------- Function name
//       |     +-------------------- Parameter name
//       |     |      +------------- Parameter type
//       v     v      v
function smile(happy: boolean) {
  // <<< Add your code here
  push();
  translate(random(0, width), random(0, height))
  scale(0.3);

  strokeWeight(5);
  stroke("black");
  if(happy){
    fill("yellow");
  } else{
    fill("green");
  }

circle(200, 200, 350);

  fill("black");
  circle(125, 120, 30);
  circle(275, 120, 30);

  noFill();

  if(happy) {
    arc(200, 250, 200, 150, 0, 180);
  } else {
    arc(200, 300, 200, 150, 180, 360);
  }

  pop();
}


