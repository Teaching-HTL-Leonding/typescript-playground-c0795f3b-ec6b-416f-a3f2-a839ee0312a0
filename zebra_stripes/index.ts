function setup() {
    const SIZE = 400;  // Size of canvas
    const STRIPE_THICKNESS = 50; // Thickness of the stripes

    createCanvas(SIZE, SIZE);
    background("black");

    noStroke();

    let i = STRIPE_THICKNESS;
    while(i < SIZE){
        fill("cyan");
        rect(0, 2 * i - 100, SIZE, STRIPE_THICKNESS);
        fill("hotpink");
        rect(0, 2 * i - 50, SIZE, STRIPE_THICKNESS);
        i += STRIPE_THICKNESS;
    }


    // <<< Add your code here
}