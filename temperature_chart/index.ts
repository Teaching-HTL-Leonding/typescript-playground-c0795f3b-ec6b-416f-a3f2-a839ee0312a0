const AVG_TEMP_LINZ: number[] = [
  -0.7, 0.5, 4.7, 9.9, 14.2, 17.9, 19.5, 19.3, 14.7, 10, 4.8, 0.6,
];

const AVG_TEMP_JOHANNESBURG: number[] = [
  20, 20, 18, 15, 12, 9, 9, 12, 16, 18, 18, 19,
];
const MONTHS: string[] = ["Jan", "Feb", "Mär", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"];

function setup() {
  createCanvas(460, 300);
  background(255);

  drawAxes();
  drawYLabels();
  drawXLabels();
  drawTemperatures(AVG_TEMP_JOHANNESBURG); // Johannesburg-Temperaturen zeichnen
}

function drawAxes() {
  stroke("black");
  strokeWeight(2);

  // Y-Achse
  line(50, 50, 50, 250);

  // X-Achse
  line(50, 225, 410, 225);
}

function drawYLabels() {
  for (let i = -5; i <= 35; i += 5) {
    let y = 225 - (i * 5); // Y-Wert entsprechend Skalierung

    // Tick-Markierungen
    stroke("black");
    strokeWeight(2);
    line(45, y, 55, y);

    // Label
    noStroke();
    textAlign(RIGHT, CENTER);
    textSize(10);
    text(i, 40, y);
  }
}

function drawXLabels() {
  for (let i = 0; i < MONTHS.length; i++) {
    let x = 65 + i * 30; // X-Wert entsprechend Position (weiter nach rechts korrigiert)

    // Tick-Markierungen
    stroke("black");
    strokeWeight(2);
    line(x, 220, x, 230);
  }
}

function drawTemperatures(temperatures: number[]) {
  for (let i = 0; i < temperatures.length; i++) {
    let x = 65 + i * 30; // X-Wert der Säule
    let y = 225 - temperatures[i] * 5; // Y-Wert entsprechend Temperatur
    let height = temperatures[i] * 5; // Höhe der Säule

    // Säule zeichnen
    fill("yellow");
    noStroke();
    rect(x - 10, y, 20, 223 - y);

    // Monatsnamen in die Säule schreiben
    fill("black");
    textSize(10);
    textAlign(CENTER, CENTER);
    text(MONTHS[i], x, y + height - 6); // Text in der Mitte der Säule
  }
}