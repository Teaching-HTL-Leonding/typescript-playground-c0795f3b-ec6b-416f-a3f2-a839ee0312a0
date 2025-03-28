function setup() {
    createCanvas(601, 301);
    background("black");

    fill("aqua");
    noStroke();


    textSize(50);
    textAlign(CENTER, CENTER);
    text("Move the mouse to start", 0, 0, width, height);



}
function mouseMoved() {
    resetMatrix();
    background("black");
    strokeWeight(2);
    noStroke();
    textSize(15);
    textAlign(CENTER, CENTER);
    fill("white");
    let mousexnummer = Math.round(mouseX / 601 * 100);
    text(`${mouseX} of 601 = ${mousexnummer}%`, 70, 295);

    noFill();
    stroke("aqua");

    // <<< Add your code here
    let Heigh1 = 0;
    let Heigh2 = 5;
    let color = 0;
    for (let i = 0; i < 601; i++) {
        colorMode(HSB);
        stroke(color, 100, 100);
        for (let j = 0; j < 27; j += 1) {
            line(0, Heigh1, 10, Heigh2);
            Heigh1 += 10;
            line(10, Heigh2, 0, Heigh1);
            Heigh2 += 10;
            color = (color + 0.22) % 360;


        }
        translate(10, 0);
        Heigh1 = 0;
        Heigh2 = 5;
    }

}


