function setup() {
createCanvas(400, 400); 
background ("black") 
const num = Math.floor(random(0, 1_000_000));

 const lastDigit1 = num % 10
 let numWithoutLastDigit = Math.floor(num / 10);

 const digit2 = numWithoutLastDigit % 10;
  numWithoutLastDigit = Math.floor(numWithoutLastDigit / 10);

  const digit3 = numWithoutLastDigit % 10;
  numWithoutLastDigit = Math.floor(numWithoutLastDigit/ 10);

  const digit4 = numWithoutLastDigit % 10;
  numWithoutLastDigit = Math.floor(numWithoutLastDigit / 10);

  const digit5 = numWithoutLastDigit % 10;
  numWithoutLastDigit = Math.floor(numWithoutLastDigit / 10);

  const digit6 = numWithoutLastDigit % 10;

 textAlign(CENTER, CENTER);
  fill("yellow");
  noStroke();
  text(num, width / 2, height - 20);


 









  
  textAlign(CENTER, CENTER);
  fill("yellow");
  noStroke();
  text(num, width / 2, height - 20);
}
