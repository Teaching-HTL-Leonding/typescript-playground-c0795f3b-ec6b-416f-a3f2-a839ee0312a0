function setup() {
    createCanvas(601, 301);
    background("black");

    fill("aqua");
    noStroke();
    const SIZE = 601;
    const lineHeight = 10;
    let Heigh1 = 0;
    let Heigh2 = 5;

    textSize(50);
    textAlign(CENTER, CENTER);
    text("Move the mouse to start", 0, 0, width, height);
    for (let i = 0; i < SIZE; i ++) {
        for(let j = 0; j < 50; j += 1){
            line(0, Heigh1, 0, Heigh2);
            line(0, Heigh2, 0, )

        }

        function mouseMoved() {
            resetMatrix();
            background("black");
            strokeWeight(2);

            noFill();
            stroke("aqua");

            // <<< Add your code here


        }
    }
}