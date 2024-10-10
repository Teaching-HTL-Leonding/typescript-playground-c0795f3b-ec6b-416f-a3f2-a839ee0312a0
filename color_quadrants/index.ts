function setup() {
    createCanvas(400, 200);
    background("black");
    noStroke();

    fill("yellow");
    rect(0, 0, width / 2, height / 2);

    fill("red");
    rect(width / 2, 0, width / 2, height / 2);

    fill("green");
    rect(0, height / 2, width / 2, height / 2);

    fill("blue");
    rect(width / 2, height / 2, width / 2, height / 2);

    fill("black");
    rect(width / 2 - width / 4, height / 2 - height / 6, width / 2, height / 3);

}

function mouseClicked() {
    fill("black");
    rect(width / 2 - width / 4, height / 2 - height / 6, width / 2, height / 3);

    fill("white");

    let message: string;


    if (mouseX < width / 2 && mouseY < height / 2) {
        message = "Yellow"
    }
    else if (mouseX > width / 2 && mouseY < height / 2) {
        message = "Red";
    }
    else if (mouseX < width / 2 && mouseY > height / 2) {
        message = "Green";
    }
    else {
        message = "Blue"
    }

    textAlign(CENTER, CENTER);
    textSize(30);
    text(message, width / 2, height / 2);
}