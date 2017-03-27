var r, g, b;
function setup() {
  createCanvas(640, 480);
  r = random(255);
  g = random(255);
  b = random(255);

}

function draw() {
  if (mouseIsPressed) {
    fill(r, g, b, 127);
    r = random(255);
    g = random(255);
    b = random(255);

  } else {
    fill(255);
  }
  ellipse(mouseX, mouseY, 80, 80);
}