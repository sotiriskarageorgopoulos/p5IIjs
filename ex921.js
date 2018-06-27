// initial x and y positions of the circular movement
var x0= 100;
var y0= 100;
// this variable is used to make the ellipse moving
var t = 0;
function setup() {
  // make a canvas that's 800x600 pixels
  createCanvas(800, 500);
}
function draw() {
  // set background color
  background('#D66761');
  // write the appropiate equations for x and y to make the ellipse moving circular
  var xMove = (width/2) + x0*sin(2*PI*t);
  var yMove = (height / 2) + y0*cos(2*PI*t);
  // create the ellipse
  ellipse(xMove, yMove, 20, 20);
  // increase the value of t and thus make the ellipse moving
  t += 0.01;
}
// make the ellipse stop moving when the user presses the mouse
function mousePressed() {
  noLoop();
}
// make the ellipse continue moving when user releases the mouse
function mouseReleased() {
  loop();
}