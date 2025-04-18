let cardImage: p5.Image;

const BASE_URL = 'https://cddataexchange.blob.core.windows.net/images/cards';

function preload() {
  // Generate random color (0 = clubs, 1 = diamonds, 2 = hearts, 3 = spades)
  const colorIx = Math.floor(random(0, 4));
  let colorname: string
  // Generate random card (1 = Ace, 2 = 2, ..., 10 = 10, 11 = Jack, 12 = Queen, 13 = King)
  

switch(colorIx){
case 0: colorname = "clubs"; break;
case 1: colorname = "diamonds"; break;
case 2: colorname = "hearts"; break;
case 3: colorname = "spades"; break;
}
 const cardIx = Math.floor(random(1, 14));
 let cardName: string;

switch(cardIx){
case 1: cardName = "A"; break;
case 11: cardName = "J"; break;
case 12: cardName = "Q"; break;
case 13: cardName = "K"; break;
default: cardName = `${cardIx}`; break;
}
cardImage = loadImage(`${BASE_URL}/${colorname}/${cardName}.png`);
  

}
function setup() {
  createCanvas(250, 250);
  background("darkgreen");

  imageMode(CENTER);
  image(cardImage, width / 2, height / 2);
}
