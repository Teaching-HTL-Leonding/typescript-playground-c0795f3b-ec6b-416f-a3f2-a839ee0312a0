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
    let mousexnum = Math.round(mouseX / 601 * 100);
    text(`$(mouseX) of 601 = $(mousexnum)%`, 70, 295);

    noFill();
    stroke("aqua");

    // <<< Add your code here
    let Heighline1 = 0;
    let Heighline2 = 5;
    for (let i = 0; i < 601; i++) {
        for (let j = 0; j < 27; j += 1) {
            line(0, Heighline1, 10, Heighline2);
            Heighline1 += 10;
            line(10, Heighline2, 0, Heighline1);
            Heighline2 += 10;


        }
        translate(10, 0);
        Heighline1 = 0;
        Heighline2 = 5;
    }

}


