function setup() {
    createCanvas(601, 301);
    background("black");

    fill("aqua");
    noStroke();
    const SIZE = 601;
    const lineHeight = 50;

    textSize(50);
    textAlign(CENTER, CENTER);
    text("Move the mouse to start", 0, 0, width, height);
    for(let i = 0; i <= 601; i += lineHeight){
        line()

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