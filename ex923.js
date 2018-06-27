function setup() {
    createCanvas(windowWidth, windowHeight);
    // set background color
    background('white');
  }
  function draw() {
     noStroke();
    fill(0, 0, 0, 30);
    if (mouseIsPressed) {
      // ellipse will be drawn to the mouseX and mouseY position
      ellipse(mouseX, mouseY, 30, 30);
    }
  }
  // clear the canvas every time the user presses a key
  function keyPressed() {
    clear();
  }