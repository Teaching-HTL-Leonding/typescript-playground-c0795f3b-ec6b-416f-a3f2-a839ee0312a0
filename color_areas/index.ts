function setup() {
    createCanvas(400, 200);
    background("black");
    noStroke();

      fill("yellow");
    rect(0, 0, width / 3);

    fill("red");
    rect(width / 3, 0, width / 3);

    fill("green");
    rect(width / 3 * 2, 0, width / 3);
}
    function mouseClicked() {

    fill("black");
    rect(0, 150, width, 50);

    fill("white");}

     if (mouseX < width / 3) {
        message = "Yellow"
         } else if (mouseX < width / 3 * 2) {
        message = "Red";
        
        message = "Green";}



    textAlign(CENTER);
    textSize(40);
    text(message, 200, 180);







}