function setup() {
createCanvas(400, 400); 
background ("black") 
const num = Math.floor(random(0, 1_000_000));

 const lastDigit1 = num % 2
 let numWithoutLastDigit = Math.floor(num / 2);

 const digit2 = numWithoutLastDigit % 2;
  numWithoutLastDigit = Math.floor(numWithoutLastDigit / 2);

  const digit3 = numWithoutLastDigit % 2;
  numWithoutLastDigit = Math.floor(numWithoutLastDigit/ 2);

  const digit4 = numWithoutLastDigit % 2;
  numWithoutLastDigit = Math.floor(numWithoutLastDigit / 2);

  const digit5 = numWithoutLastDigit % 2;
  numWithoutLastDigit = Math.floor(numWithoutLastDigit / 2);

  const digit6 = numWithoutLastDigit % 2;

 textAlign(CENTER, CENTER);
  fill("yellow");
  noStroke();
  text(num, width / 2, height - 20);

 noFill();
 stroke("yellow"); 

  rect(50, height / 2, 30, 50);
  rect(100, height / 2, 30, 50);
  rect(150, height / 2, 30, 50);
  rect(200, height / 2, 30, 50);
  rect(250, height / 2, 30, 50);
  rect(300, height / 2, 30, 50);

   fill("yellow");
  textSize(30);
  text(`${lastDigit1}`, 315, height / 2 + 25);
  text(`${digit2}`, 265, height / 2 + 25);
  text(`${digit3}`, 215, height / 2 + 25);
  text(`${digit4}`, 165, height / 2 + 25);
  text(`${digit5}`, 115, height / 2 + 25);
  text(`${digit6}`, 65, height / 2 + 25);
}


 









  
  
