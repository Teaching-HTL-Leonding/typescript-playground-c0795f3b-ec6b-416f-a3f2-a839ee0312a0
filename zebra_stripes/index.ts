function setup() {
    const SIZE = 400;  // Size of canvas
    const STRIPE_THICKNESS = 50; // Thickness of the stripes

    createCanvas(SIZE, SIZE);
    background("black");

    noStroke();

    // <<< Add your code here
    let x = STRIPE_THICKNESS;
    while (x < SIZE) {
        fill("pink");
        rect(0, 2 * x - 100, SIZE, STRIPE_THICKNESS)
        fill("blue");
        rect(0, 2 * x - 50 , SIZE, x);
        x += STRIPE_THICKNESS;
    }
}