// This program generates a simple math quiz in a graphical window, where the user selects the correct result
// of a randomly generated arithmetic operation.

// <<< TODO: Declare your GLOBAL variables here
let randomnum1 = 0;
let randomnum2 = 0;

let randomnum3 = 0;
let randomnum4 = 0;
let randomnum5 = 0;


let dice = 0;
let dice2 = 0;
let dice3 = 0;
let textmessage: string;
let rightAnswer = 0;


// setup function runs once and sets up the quiz elements on the canvas
function setup() {
    createCanvas(400, 400);
    background("black");
    fill("yellow");
    textSize(40);

    randomnum1 = Math.floor(random(1, 101));
    randomnum2 = Math.floor(random(1, 101));

    randomnum3 = Math.floor(random(1, 101));
    randomnum4 = Math.floor(random(1, 101));
    randomnum5 = Math.floor(random(1, 101));


    dice = Math.floor(random(1, 4)); {
    } if (dice === 1) {
        textmessage = "+";
        rightAnswer = randomnum1 + randomnum2;

    } else if (dice === 2) {
        textmessage = "-";
        rightAnswer = randomnum1 - randomnum2;

    } else if (dice === 3) {
        textmessage = "*";
        rightAnswer = randomnum1 * randomnum2;
    }

    text(`${randomnum1} ${textmessage} ${randomnum2}`, width / 2 - 70, 50);
    text(`${randomnum3}`, width / 2 - 150, height / 2);
    text(`${randomnum4}`, width / 2 - 35, height / 2);
    text(`${randomnum5}`, width / 2 + 100, height / 2);


    const computersymbole = Math.floor(random(0, 3));
    if (computersymbole === 0) {
        randomnum3 = rightAnswer;
    } else if (computersymbole === 1) {
        randomnum4 = rightAnswer;
    } else if (computersymbole === 2) {
        randomnum5 = rightAnswer;
    }
    const position = Math.floor(random(1, 4));
    if (position === 1) {
        text(`${rightAnswer}`, width / 2 - 150, height / 2);

    } else if (position === 2) {
        text(`${rightAnswer}`, width / 2 - 35, height / 2);

    } else if (position === 3) {
        text(`${rightAnswer}`, width / 2 + 100, height / 2);

       } if (position !== 1) {
            text(`${randomnum3}`, width / 2 - 150, height / 2);

        } else if (position !== 2) {
            text(`${randomnum4}`, width / 2 - 35, height / 2);

        } else if (position !== 3) {
            text(`${randomnum5}`, width / 2 + 100, height / 2 + 0);
        }
        













        }

        // mouseClicked function checks if the user clicked on the correct answer
        function mouseClicked() {
            // <<< TODO: Add your code here
            if(position === 1 && mouseX > width / 2 - 150 && mouseX > width / 2 - 200 && mouseY )
            if(position === 2 && mouseX > width / 2 - 35 && mouseX < width / 2 + 85 && mouseY)
            if (position === 3 && mouseX > width / 2 + 100 && mouseX < width / 2 + 150 && mouseY)



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
    
