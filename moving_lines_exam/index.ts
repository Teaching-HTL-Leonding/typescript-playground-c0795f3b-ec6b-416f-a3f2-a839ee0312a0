// Configuration for the number of lines, and the range of colors The format is:
// <number of lines>;<min hue>-<max hue>
//
// "number of lines" is the number of lines to draw, can be between 1 and 30
// "min hue" is the minimum hue (HSB color space), can be between 0 and 360
// "max hue" is the maximum hue (HSB color space), can be between 0 and 360
const CONFIGURATION = "5;0-360";

let lineStartX: number[] = [];     // Start coordinates of line
let lineStartY: number[] = [];
let lineEndX: number[] = [];       // End coordinates of line
let lineEndY: number[] = [];
let lineColor: number[] = [];

let lineStartDx: number[] = [];    // Movement of start point per frame in X and Y direction
let lineStartDy: number[] = [];
let lineEndDx: number[] = [];      // Movement of end point per frame in X and Y direction
let lineEndDy: number[] = [];

let minColor = 0;               // Lower bound of random hue value
let maxColor = 360;             // Upper bound of random hue value

let linie = 0;

function setup() {
    createCanvas(500, 500);
    colorMode(HSB);

    for (let i = 0; i < 10; i++) {
        // Set random start and end position
        lineStartX.push(random(50, 450));
        lineStartY.push(random(50, 450));
        lineEndX.push(random(50, 450));
        lineEndY.push(random(50, 450));

        // Set random movement
        lineStartDx.push(random(0, 5));
        lineStartDy.push(random(0, 5));
        lineEndDx.push(random(0, 5));
        lineEndDy.push(random(0, 5));

        // Set random color
        lineColor.push(random(minColor, maxColor));
    }
}

function draw() {
    background("black");
    for (let i = 0; i < 10; i++) {
        fill("grey");
        rect(0, 0, 50, 50)
        rect(50, 0, 50, 50)
        stroke("black");
        // Plus
        line(15, 25, 35, 25);
        line(25, 15, 25, 35);
        // Minus
        line(65, 25, 85, 25)

        push();
        // Draw current line
        stroke(lineColor[i], 100, 100);
        strokeWeight(2);
        line(lineStartX[i], lineStartY[i], lineEndX[i], lineEndY[i]);

        // Move start and end point
        lineStartX[i] += lineStartDx[i];
        lineStartY[i] += lineStartDy[i];
        lineEndX[i] += lineEndDx[i];
        lineEndY[i] += lineEndDy[i];

        // Reverse direction when edge has been reached
        if (lineStartX[i] < 0 || lineStartX[i] > width) {
            lineStartDx[i] = -lineStartDx[i];
        }
        if (lineStartY[i] < 0 || lineStartY[i] > height) {
            lineStartDy[i] = -lineStartDy[i];
        }

        if (lineEndX[i] < 0 || lineEndX[i] > width) {
            lineEndDx[i] = -lineEndDx[i];
        }
        if (lineEndY[i] < 0 || lineEndY[i] > height) {
            lineEndDy[i] = -lineEndDy[i];
        }

        pop();
    }
}
function mouseClicked() {
    if (mouseX > 0 && mouseX < 50 && mouseY > 0 && mouseY < 50) {
        linie = linie + 1
        lineStartX.push(random(50, 450));
        lineStartY.push(random(50, 450));
        lineEndX.push(random(50, 450));
        lineEndY.push(random(50, 450));


        lineStartDx.push(random(0, 5));
        lineStartDy.push(random(0, 5));
        lineEndDx.push(random(0, 5));
        lineEndDy.push(random(0, 5));

        lineColor.push(random(minColor, maxColor))
    }
    if (mouseX > 50 && mouseX < 100 && mouseY > 0 && mouseY < 50) {
           linie = linie - 1
        lineStartX.splice(linie, 1);
        lineStartY.splice(linie, 1);
        lineStartDx.splice(linie, 1);
        lineStartDy.splice(linie, 1);

        lineStartX.splice(linie, 1);
        lineStartY.splice(linie, 1);
        lineStartDx.splice(linie, 1);
        lineStartDy.splice(linie, 1);
    }

}


