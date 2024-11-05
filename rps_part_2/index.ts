// We declare constants to avoid repeating "magic numbers". 
// These numbers are used for positioning text and icons on the canvas.
// Note that we use all-caps for constants that represent 
// configuration values to make them easy to recognize.
const TEXT_LEFT = 30;
const STONE_LEFT = 50;
const PAPER_LEFT = 175;
const SCISSORS_LEFT = 300;
const ICON_WIDTH = 100;
const ICON_TOP = 75;
const ICON_HEIGHT = 100;
 
 
function setup() {
    createCanvas(500, 490);
    background("black");
 
    fill("yellow");
    textSize(30);
    text("Human:", TEXT_LEFT, 50);
 
 
    // Display the icons for "stone", "paper", and "scissors".
    textSize(75);
    text("🪨", STONE_LEFT, 150);
    text("📃", PAPER_LEFT, 150);
    text("✂️", SCISSORS_LEFT, 150);
 
 
    // <<< Add your code here
}
 
function mouseMoved() {
    // <<< Add your code here
    if (mouseX >= 50 && mouseX <= 50 + ICON_WIDTH && mouseY >= 75 && mouseY <= 50 + ICON_HEIGHT) {
        noFill();
        stroke("yellow");
        strokeWeight(5);
        rect(50, 75, 100, 100);
    } else {
        noFill();
        stroke("black");
        strokeWeight(5);
        rect(50, 75, 100, 100);
    }
    if (mouseX >= 175 && mouseX <= 175 + ICON_WIDTH && mouseY >= 75 && mouseY <= 50 + ICON_HEIGHT) {
        noFill();
        stroke("yellow");
        strokeWeight(5);
        rect(175, 75, 100, 100);
    } else {
        noFill();
        stroke("black");
        strokeWeight(5);
        rect(175, 75, 100, 100);
    }
    if (mouseX >= 300 && mouseX <= 300 + ICON_WIDTH && mouseY >= 75 && mouseY <= 50 + ICON_HEIGHT) {
        noFill();
        stroke("yellow");
        strokeWeight(5);
        rect(300, 75, 100, 100);
    } else {
        noFill();
        stroke("black");
        strokeWeight(5);
        rect(300, 75, 100, 100);
    }
}
let selected = "";
let computer = "";
function mouseClicked() {
    // <<< Add code here to let the user choose an option and find out the winner
    if (computer === "") {
        if (mouseX >= 50 && mouseX <= 50 + ICON_WIDTH && mouseY >= 75 && mouseY <= 50 + ICON_HEIGHT) {
            selected = "🪨";
 
        } if (mouseX >= 175 && mouseX <= 175 + ICON_WIDTH && mouseY >= 75 && mouseY <= 50 + ICON_HEIGHT) {
            selected = "📃";
 
        } if (mouseX >= 300 && mouseX <= 300 + ICON_WIDTH && mouseY >= 75 && mouseY <= 50 + ICON_HEIGHT) {
            selected = "✂️";
        }
        let computerpick = Math.floor(random(0, 3));
        if (computerpick === 0) {
            computer = "🪨";
        } else if (computerpick === 1) {
            computer = "📃";
        } else if (computerpick === 2) {
            computer = "✂️";
        }
        noStroke();
        textSize(30);
        fill("yellow");
        text("Computer:", TEXT_LEFT, 300);
        textSize(75);
        text(computer, 175, 300);
        textSize(30);
 
 
        let result = "";
        if (selected === computer) {
            result = "It`s a tie!";
        } else if (selected === "🪨" && computer === "📃") {
            result = "Computer wins!";
        } else if (selected === "🪨" && computer === "✂️") {
            result = "Human wins!";
        } else if (selected === "📃" && computer === "🪨") {
            result = "Human wins!";
        } else if (selected === "📃" && computer === "✂️") {
            result = "Computer wins!";
        } else if (selected === "✂️" && computer === "🪨") {
            result = "Computer wins!";
        } else if (selected === "✂️" && computer === "📃") {
            result = "Human wins!";
        }
        text(`${result}`, TEXT_LEFT, 450);
    }
 
}


