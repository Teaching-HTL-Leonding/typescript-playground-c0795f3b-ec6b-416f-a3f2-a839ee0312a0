function setup() {
    createCanvas(200, 200);
    background("black");

    // Roll the dice
    const dice = Math.floor(random(1, 7));

    let message: string;
    if (dice === 1) { message = "Eins"; }
    else if (dice === 2) { message = "Zwei"; }
    else if (dice === 3) { message = "Drei"; }
    else if (dice === 4) { message = "Vier"; }
    else if (dice === 5) { message = "Fünf"; }
    else { message = "Sechs"; }

    textAlign(CENTER, CENTER);
    noStroke();
    fill("yellow");
    textSize(50);
    text(message, width / 2, height / 2);
}