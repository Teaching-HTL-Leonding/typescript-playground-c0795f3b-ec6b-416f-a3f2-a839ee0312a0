function setup() {
  createCanvas(300, 300);
  background("lightblue");
}

function mouseMoved() {
  const snap = 40; // marker must snap every 40 pixels
  const markerSize = 10; // size of marker
  
  background("lightblue");

  const x: number = Math.round(mouseX/40)*40
  const y: number = Math.round(mouseY/40)*40
  
  strokeWeight(5)
  stroke("white");
  line(x, y - 10, x, y  + 10);
  line(x - 10, y, x + 10, y);

  strokeWeight(2)
  text(` X: ${mouseX}, Y: ${mouseY}` , 5, height - 5);



  
}
