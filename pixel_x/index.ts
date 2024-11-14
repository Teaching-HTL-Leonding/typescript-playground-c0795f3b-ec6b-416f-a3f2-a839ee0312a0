  function setup() {
    const SIZE = 425; // Canvas size
    const GRID = 25;  // Size of the squares

    createCanvas(SIZE, SIZE);
    background("black");

    noStroke();


    let i = GRID
    while (i < SIZE - GRID) {
        fill("yellow")
        rect(i, i, 25, 25)
        i += GRID
    }
    let x =  SIZE - GRID
    let y = GRID
    while (y < SIZE - GRID && x > GRID) {
        fill("green")
        rect(x, y, GRID, GRID)
        x -= GRID
        y += GRID
    }
}


