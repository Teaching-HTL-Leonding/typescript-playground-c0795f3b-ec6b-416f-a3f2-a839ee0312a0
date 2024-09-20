function setup() {
createCanvas(300, 300)
background("cyan");
}

function mouseClicked() {
circle(mouseX, mouseY, 10); 

fill("gold");
noStroke();
rect(0, height- 20, width / 2, height);

fill("black");
text(`X: ${mouseX}, Y: ${mouseY}` , 5, height - 5);
}

function mouseMoved() {
noStroke();
fill("mediumorchid");
circle(mouseX, mouseY, 10);

fill("white");
noStroke();
rect(width / 2, height-20,
     width / 2, 20);

fill("black");
text(`X: ${mouseX}, Y: ${mouseY}` , 200, height - 5);         

}




