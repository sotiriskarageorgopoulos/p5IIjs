//create variable for ellipse size
var size;

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(67,34,89);
  // the size of the ellipses will be between (20,200]
  var size = random(20, 200);
  // create random fill for the ellipses
  fill(random(1, 256),random(1, 256),random(1, 256));
  // all of x ,y and size of the ellipse will be random
  // the x position will be between (size,(width-size)] so that the ellipse will always be within canvas
  // the y position of the ellipse will also be always inside the canvas
  ellipse(random(size, (width-size)), random(size, (height-size)), size);
}