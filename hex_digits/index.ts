function setup() {
createCanvas(400, 400); 
background ("black") 
const num = Math.floor(random(0, 4096));

 const lastDigit1 = num % 16
 let numWithoutLastDigit = Math.floor(num / 16);

 const digit2 = numWithoutLastDigit % 16;
  numWithoutLastDigit = Math.floor(numWithoutLastDigit / 16);

  const digit3 = numWithoutLastDigit % 16;
  numWithoutLastDigit = Math.floor(numWithoutLastDigit/ 16);

  const digit4 = numWithoutLastDigit % 16;
  numWithoutLastDigit = Math.floor(numWithoutLastDigit / 16);

  const digit5 = numWithoutLastDigit % 16;
  numWithoutLastDigit = Math.floor(numWithoutLastDigit / 2);

  const digit6 = numWithoutLastDigit % 16;

 textAlign(CENTER, CENTER);
  fill("yellow");
  noStroke();
  text(num, width / 2, height - 20);

 noFill();
 stroke("yellow"); 

}