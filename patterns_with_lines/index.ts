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

    noFill();
    stroke("aqua");

    // <<< Add your code here
    let Heigh1 = 0;
    let Heigh2 = 5;
    for (let i = 0; i < 601; i++) {
        for (let j = 0; j < 27; j += 1) {
            line(0, Heigh1, 10, Heigh2);
            Heigh1 += 10;
            line(0, Heigh2, 0, Heigh1);


        }
        Heigh1 = 0;
        Heigh2 = 5;
        translate(10, 0);
    }

}


