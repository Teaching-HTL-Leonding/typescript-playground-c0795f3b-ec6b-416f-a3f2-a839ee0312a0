function setup() {
    const SIZE = 425;
    const GRID = 25;

    createCanvas(SIZE, SIZE);
    background("black");

    noStroke();

    let i = GRID;
    while (i < SIZE - GRID) {
        fill("yellow");
        rect(i, i, 25, 25);
        i += GRID
    }

    i = GRID;
    while (i < SIZE - GRID) {
        fill("green");
        rect(i, SIZE - i - 25, 25, 25);
        i += GRID




    }

}

























