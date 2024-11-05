const MARGIN_NUM = 10;

let num: number = 0;          // Current number entered by the user
let lineHeight: number = 0;   // Height of a line of the responsive layout
let cellWidth: number = 0;    // Width of a cell of the responsive layout
let displayNumber: number = 0;
function setup() {
    createCanvas(300, 500);
    lineHeight = height / 5;
    cellWidth = width / 3;
}

function draw() {
    background("lightgray");
    line(0, lineHeight, width, lineHeight);
    line(0, lineHeight * 2, width, lineHeight * 2);
    line(0, lineHeight * 3, width, lineHeight * 3);
    line(0, lineHeight * 4, width, lineHeight * 4);
 
    // Vertikale Linien
    line(cellWidth, lineHeight, cellWidth, lineHeight * 4);
    line(cellWidth * 2, lineHeight, cellWidth * 2, height);

textAlign(CENTER, CENTER);
    textSize(60);
    text("0", cellWidth , lineHeight * 4.5);
    text("C", cellWidth*2.5 , lineHeight * 4.5);
    text("1", cellWidth /2 , lineHeight * 3.5);
    text("2", cellWidth * 1.5 , lineHeight * 3.5);
    text("3", cellWidth * 2.5 , lineHeight * 3.5);
    text("4", cellWidth / 2 , lineHeight * 2.5);
    text("5", cellWidth * 1.5 , lineHeight * 2.5);
    text("6", cellWidth * 2.5 , lineHeight * 2.5);
    text("7", cellWidth / 2 , lineHeight * 1.5);
    text("8", cellWidth * 1.5 , lineHeight * 1.5);
    text("9", cellWidth * 2.5 , lineHeight * 1.5);
 
   
  textAlign(RIGHT, CENTER);
    textSize(40);
    text(displayNumber, width - MARGIN_NUM, lineHeight / 2);

}

function mouseClicked() {
if(mouseX > 0 && mouseX < cellWidth && mouseY > lineHeight && mouseY < lineHeight * 2){
displayNumber = displayNumber * 10 + 7
}
if(mouseX > cellWidth && mouseX < cellWidth * 2 && mouseY > lineHeight && mouseY < lineHeight * 2){
displayNumber = displayNumber * 10 + 8
}
if(mouseX > cellWidth * 2 && mouseX < cellWidth * 3 && mouseY > lineHeight && mouseY < lineHeight * 2){
displayNumber = displayNumber * 10 + 9
}
if(mouseX > 0 && mouseX < cellWidth && mouseY > lineHeight * 2 && mouseY < lineHeight * 3){
displayNumber = displayNumber * 10 + 4
}
if(mouseX > cellWidth && mouseX < cellWidth * 2 && mouseY > lineHeight * 2 && mouseY < lineHeight * 3){
displayNumber = displayNumber * 10 + 5
}
if(mouseX > cellWidth * 2 && mouseX < cellWidth * 3 && mouseY > lineHeight * 2 && mouseY < lineHeight * 3){
displayNumber = displayNumber * 10 + 6
}
if(mouseX > 0 && mouseX < cellWidth && mouseY > lineHeight * 3 && mouseY < lineHeight * 4){
displayNumber = displayNumber * 10 + 1
}
if(mouseX > cellWidth  && mouseX < cellWidth * 2 && mouseY > lineHeight * 3 && mouseY < lineHeight * 4){
displayNumber = displayNumber * 10 + 2
}
if(mouseX > cellWidth * 2 && mouseX < cellWidth * 3 && mouseY > lineHeight * 3 && mouseY < lineHeight * 4){
displayNumber = displayNumber * 10 + 3
}
if(mouseX > 0 && mouseX < cellWidth * 2 && mouseY > lineHeight * 4 && mouseY < lineHeight * 5){
displayNumber = displayNumber * 10 + 0
}
if(mouseX > cellWidth * 2 && mouseX < cellWidth * 3 && mouseY > lineHeight * 4 && mouseY < lineHeight * 5){
displayNumber = 0
}
 

         















}