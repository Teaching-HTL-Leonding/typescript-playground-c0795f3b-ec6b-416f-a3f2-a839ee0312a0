// The following string represents coordinates (x,y) of circles
// that you have to draw. Each circle must have a radius of 40.
const circles = "50,50 50,100 100,50 100,100";

function setup() {
    createCanvas(400, 400);
    background("white");
    noFill();
    stroke("black");
    strokeWeight(3);

    let x = 0; 
    let y = 0; 
    let coordinates = "";
    for (let ix = 0; ix < circles.length; ix++) {
        switch (circles[ix]) {
            case ",":
               
                x = parseInt(coordinates);
                coordinates = "";
                break;
            case " ":
               
                y = parseInt(coordinates);
                
                circle(x, y, 40);
                coordinates = "";
                break;
            default:
                
                coordinates += circles[ix];
                break;
        }
    }

    y = parseInt(coordinates);
    circle(x, y, 40);
}
