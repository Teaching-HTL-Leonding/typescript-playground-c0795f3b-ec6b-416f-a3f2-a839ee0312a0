const RAILROAD_WIDTH = 225;
const RAILROAD_HEIGHT = 160;

const WAGON_WIDTH = 160;
const WAGON_HEIGHT = 113;

let railroad: p5.Image;
const trainCars: p5.Image[] = [];

/** Array of wagons for train (for base requirements) */
let train: p5.Image[] = [];

/** Array of trains on tracks (for ADVANCED requirements)
  * 
  * This is an array of arrays. The outer array contains the trains on the tracks.
  * Each inner array contains the train wagons of a single train.
  */
let trains: p5.Image[][] = [];

/** Input text for base requirements */
const TRAIN = "TLB,TCCG,TCTL,TCW,TCL,TCCR"

/** Input text for ADVANCED requirements */
const TRACKS = "TLB,TCCG,TCTL,TCW,TCL,TCCR;TEDA,TEDB,TEDB,TEDC,TEDB;TDA,TCF,TCC,TCC,TCB,TCD"

function preload() {
    railroad = loadImage(`${BASE_URL}/railroad-straight.png`);

    for (let i = 0; i < imageUrls.length; i++) {
        train.push(loadImage(`${BASE_URL}${imageUrls[i]}`))
    }

    // <<< Add code to load all images (see imageUrls in wagons.ts).
    //     Add the images to the trainCars array. After loading all image,
    //     the length of the trainCars array must be equal to the length of imageUrls.
}

function setup() {
    createCanvas(800, 550);

    // <<< Add code to parse the TRAIN string and store the result in the 
    //     train array (base requirements) or the trains array (ADVANCED requirements).
}

function draw() {
    background("#f0f0f0");

    scale(0.5, 0.5);

    translate(850, -100);

    // <<< Change this code accordingly for ADVANCED requirements

    for (let i = 0; i < 5; i++) {
        drawRailroad(i);
    }

    for (let ix = 0; ix < train.length; ix++) {
        drawTrainWagon(train[ix], ix);
    }
}

// <<< Add additional functions here

/** Draw a railroad segment */
function drawRailroad(ix: number) {
    image(railroad, -RAILROAD_WIDTH * ix, RAILROAD_HEIGHT * ix, railroad.width, railroad.height);

}

/** Draw a train wagon */
function drawTrainWagon(wagon: p5.Image, ix: number) {
    image(wagon, -WAGON_WIDTH * ix, WAGON_HEIGHT * ix, wagon.width, wagon.height);
}
function getWagonIndex(abrevatonwagon: string): number {

    for (let i = 0; i < abbreviations.length; i++) {
        if (abrevatonwagon === abbreviations[i]) {
            return i;
        }
    }
    return -1;

}
function parseTrain(trainString: string): p5.Image[] {
    const result: p5.Image[] = [];

     let wagen = "";
    for (let i = 0; i < trainString.length; i++) {
        if (trainString[i] === ",") {
            result.push(train[getWagonIndex(wagen)]);
            
            

        }
}
}