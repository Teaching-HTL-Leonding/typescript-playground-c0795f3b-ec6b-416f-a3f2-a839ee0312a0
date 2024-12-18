const WIDTH = 500;
const HEIGHT = 300;

// Enter the word to guess here.
//                   vvv
//                   vvv
const wordToGuess = "apple";

function setup() {
  createCanvas(WIDTH, HEIGHT);
  background("black");

  // Lets copy the word to guess. wordToScramble will contain the remaining
  // characters during the scrambling process.
  let wordToScramble = wordToGuess;

  // scrambledWord receives the letters of the word to scramble.
  let scrambledWord = "";

  // Repeat until all letters will have been used.
  while (wordToScramble.length > 0) {
    // Get a random position in wordToScramble
    let letterIndex = Math.floor(random(wordToScramble.length));

    // Add the random letter to scrambledWord
    scrambledWord += wordToScramble[letterIndex];

    
    wordToScramble = wordToScramble.substring(0, letterIndex)
    
      + wordToScramble.substring(letterIndex + 1);
  }

  textAlign(CENTER, CENTER);
  fill("white");
  textSize(75);
  text(scrambledWord, WIDTH / 2, HEIGHT / 2);
}
function guess(textInput: string) {
  fill("white");

  if (textInput === wordToGuess) {
    background("green");
    textSize(75);
    text("Correct!", WIDTH / 2, HEIGHT / 2);
  } else {
    background("red");
    textSize(50);
    text(`Wrong! "${wordToGuess}"`, WIDTH / 2, HEIGHT / 2);
  }
}
