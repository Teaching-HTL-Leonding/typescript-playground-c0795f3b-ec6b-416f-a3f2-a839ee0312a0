function setup() {
createCanvas(600, 600);
background("skyblue");
}

function mouseMoved() {
background("lightblue");

noFill()
strokeWeight(2);
circle(mouseX, mouseY, 50 );
circle(mouseX, mouseY, 22);
line(mouseX, mouseY - 35, mouseX, mouseY + 35);
line(mouseX - 35, mouseY, mouseX + 35, mouseY );
}
