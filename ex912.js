function setup() {
    createCanvas(800, 500);
    // set background color 
    background('#D66761');
  }
  function draw() {
    // we use mouseX in order to control the green value of the color
    // we divide it by 4 so that the value will not exceed 256
    // for the blue value we use mouseY divided by 2
    fill(241, mouseX/4, mouseY/2);
    // ellipse will change color according to mouseX and mouseY position
    ellipse(400, 250, 200);
  }