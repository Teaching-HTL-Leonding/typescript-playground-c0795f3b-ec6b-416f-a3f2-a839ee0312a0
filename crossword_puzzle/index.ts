/**
* Animal Crossword Game
*
* This is a crossword puzzle game where players guess letters to reveal animal names.
* The game highlights a vertical solution word that is formed from a specific column.
* Players win when they've guessed all letters in the solution word.
*/
const cellwidth = 35;
const cellheight = 35;
 
let animals: string[] = [];
let startpoints: number[] = [];
let descriptions: string[] = [];
 
 
// Raw input data in format: animalName,startPosition,hint
const crossword = `krebs,0,Schalentier  
elefant,-1,Größtes Landtier  
schlange,-4,Lautloser Jäger  
papagei,-2,Bunter Sprachkünstler  
pinguin,0,Flugunfähiger Schwimmer  
esel,-2,Sturer Vierbeiner  
piranha,-2,Gefährlicher Schwarmfisch  
seestern,-3,Meerestier mit fünf Armen  
schildkröte,-1,Langsamer Panzerträger  
hund,0,Treuer Begleiter  
seelöwe,-3,Verspielter Meeressäuger  
aal,-1,Schlängelnder Stromleiter  
antilope,-1,Schneller Sprinter der Savanne  
regenwurm,-2,Bodenlockerer mit Ringeln  
seegurke,-2,Tarnkünstler der Tiefsee`;
 
// The word that players need to completely reveal to win
const solution = 'klapperschlange';
 
// === Write the necessary code starting here ===
function setup() {
    createCanvas(1000, 1000);
    background("white");
 
    parsedcrossword();
    drawcrossword();
 
 
}
let puzzle: string[][] = [];
 
function parsedcrossword(){
    for(const line of crossword.split("\n")){
        const chars = line.split(",");
        puzzle.push(chars);
 
    }
 
    for(let i = 0; i < puzzle.length; i ++){
        animals.push(puzzle[i][0]);
        startpoints.push(parseInt(puzzle[i][1]));
        descriptions.push(puzzle[i][2])
    }
 
}
 
function drawcrossword(){
    for(let i = 0; i < descriptions.length; i ++){
        text(descriptions[i], 500, i * cellheight + 30);        
    }
   
    for(let i = 0; i < startpoints.length; i ++){
        push();
        translate(200, 0);
        translate(startpoints[i] * cellwidth, i * cellheight + 5);
        rect(0, 0, cellwidth, cellheight);
        pop();

       
    }
 
}
 
 