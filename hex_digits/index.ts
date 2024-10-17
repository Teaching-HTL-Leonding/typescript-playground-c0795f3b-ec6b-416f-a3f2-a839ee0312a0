function setup() {
  createCanvas(400, 400);
  background("black");
  const num = Math.floor(random(0, 4096));
  const lastDigit = num % 16;
  let numWithoutLastDigit = Math.floor(num / 16);

  const digit2 = numWithoutLastDigit % 16
  numWithoutLastDigit = Math.floor(numWithoutLastDigit / 16);

  const digit3 = numWithoutLastDigit % 16;
  numWithoutLastDigit = Math.floor(numWithoutLastDigit / 16);

  textAlign(CENTER, CENTER);
  fill("yellow");
  noStroke();
  text(num, width / 2, height - 20);

  noFill();
  stroke("gold");
  rect(100, height / 2, 30, 50);
  rect(200, height / 2, 30, 50);
  rect(300, height / 2, 30, 50);
if (lastDigit === 10) {
    text("A", 315, height / 2 + 25);
  }
  else if (lastDigit === 11) {
    text("B", 315, height / 2 + 25);
  }
  else if (lastDigit === 12) {
    text("C", 315, height / 2 + 25);
  }
  else if (lastDigit === 13) {
    text("D", 315, height / 2 + 25);
  }
  else if (lastDigit === 14) {
    text("E", 315, height / 2 + 25);
  }
  else if (lastDigit === 15) {
    text("F", 315, height / 2 + 25);
  }
  else {
    text(`${lastDigit}`, 315, height / 2 + 25);
  }


  if (digit2 === 10) {
    text("A", 215, height / 2 + 25);
  }
  else if (digit2 === 11) {
    text("B", 215, height / 2 + 25);
  }
  else if (digit2 === 12) {
    text("C", 215, height / 2 + 25);
  }
  else if (digit2 === 13) {
    text("D", 215, height / 2 + 25);
  }
  else if (digit2 === 14) {
    text("E", 215, height / 2 + 25);
  }
  else if (digit2 === 15) {
    text("F", 215, height / 2 + 25);
  }
  else {
    text(`${digit2}`, 215, height / 2 + 25);
  }


  if (digit3 === 10) {
    text("A", 115, height / 2 + 25);
  }
  else if (digit3 === 11) {
    text("B", 115, height / 2 + 25);
  }
  else if (digit3 === 12) {
    text("C", 115, height / 2 + 25);
  }
  else if (digit3 === 13) {
    text("D", 115, height / 2 + 25);
  }
  else if (digit3 === 14) {
    text("E", 115, height / 2 + 25);
  }
  else if (digit3 === 15) {
    text("F", 115, height / 2 + 25);
  }
  else {
    text(`${digit3}`, 115, height / 2 + 25);
  }
}
