let mouseProtocol: string = "0/0";



function setup() {
  createCanvas(400, 400);
  background("skyblue");
  textSize(10);
  text(mouseProtocol, 10, 10, 360, 360)
}


function mouseClicked() {
background("skyblue");

  noStroke();
  fill("magenta");
  circle(mouseX, mouseY, 25);

  mouseProtocol: `${mouseProtocol} , ${mouseX}, ${mouseY}`;
  fill("black");
  text(mouseProtocol, 10, 10, 360, 360 );
}













}
