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

    fill("white");
    // The message variable will recive the message to print
    let message: string;

    // Note the ìf statement here. It checks is the mouse click
    // was in the area (yellow). If it was, the message is "Yellow".
    if (mouseX < width / 3) {
        message = "Yellow"
    } else if (mouseX < width / 3 * 2) {
        message = "Red";
        // Note the else if statement here. If the user did not 
        // click in the yellow area, it checks if the user clicked 
        // in  the second area (green).
    } else {
        message = "Green";
        // If the click was not in the yellow and not in the green
        // area, the click must have been in the area.
    }
    textAlign(CENTER);
    textSize(40);
    text(message, 200, 180);
}







}