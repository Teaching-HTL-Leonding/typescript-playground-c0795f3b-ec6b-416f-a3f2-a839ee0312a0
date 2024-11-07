// This program generates a simple math quiz in a graphical window, where the user selects the correct result
// of a randomly generated arithmetic operation.

// <<< TODO: Declare your GLOBAL variables here
let randomnum1 = 0;
let randomnum2 = 0;
let dice1 = 0;
let dice2 = 0;
let dice3 = 0;
let textmessage: string;


// setup function runs once and sets up the quiz elements on the canvas
function setup() {
    createCanvas(400, 400);
    background("black");

    randomnum1 = Math.floor(random(1,101));
    randomnum2 = Math.floor(random(1,101));

    const dice = Math.floor(random(1, 4));
    if (dice === 1 )
    textmessage = "+";

    if (dice === 2)
    textmessage = "-";

    if (dice === 3)
    textmessage = "*";

    fill("yellow");
    textSize(25);
    text(`${randomnum1} ${ textmessage} ${randomnum2}`, width / 2 - 70, 50);



    
    


    
}

// mouseClicked function checks if the user clicked on the correct answer
function mouseClicked() {
    // <<< TODO: Add your code here
}

// mouseMoved function displays mouse coordinates as feedback
function mouseMoved() {
    // This is a HELPER FUNCTION. It should make finding coordinates
    // easier for you. You DO NOT NEED to change this method!
    
    fill("black");
    noStroke();
    rect(0, height - 20, width, height); // Draws a rectangle to clear previous coordinates

    fill("white");
    textSize(10);
    textAlign(LEFT, BOTTOM); // Aligns coordinates text to bottom-left
    text(`${mouseX}/${mouseY}`, 5, height - 5); // Displays current mouse coordinates
}
