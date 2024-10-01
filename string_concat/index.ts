let mouseProtocol: string = `0/0`;

function setup() {
  createCanvas(400, 400);
  background("skyblue");
  textSize(20);
  text(mouseProtocol, 20, 20, 360, 360)
}


function mouseClicked() {
background("skyblue");
 mouseProtocol += `, ${mouseX}/${mouseY}`;


  noStroke();
  fill("magenta");
  circle(mouseX, mouseY, 25);


  fill("black");
  text(mouseProtocol, 20, 20, 360, 360 );
}













}
