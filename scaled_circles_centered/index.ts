function setup() {
    createCanvas(400, 400);
    background("white");
    noFill();

    translate(150, 150)

    stroke("blue");
    strokeWeight(3);
    circle(0, 0, 50);
    
    push();
    stroke("red");
    scale(2);
    strokeWeight(3 / 2);
    circle(0, 0, 50);
    pop();
    
    push();
    stroke("green");
    scale(4.0);
    strokeWeight(3 / 4); 
    circle(0, 0, 50);
    pop();
}
