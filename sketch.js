function setup() {
  createCanvas(640, 480);
  canvas.position(300, 1000);
}

function draw() {
  if (mouseIsPressed) {
    fill(0);
  } else {
    fill(255);
  }
  ellipse(mouseX, mouseY, 80, 80);
}