// create a variable to control the size of the ellipse
var control = false;
// make ellipse starting from the left end of the canvas
var i=30;
function setup() {
  // create canvas
  createCanvas(800,500);
  noLoop();
}
function draw () {
  // set background color
  background('#31bc33');
  // when ellipse is 30px change the control to false
  if (i==30) {
    control = false;
  }
  ellipse(width/2,height/2,i);
}
function mousePressed() {
  // if the ellipse size do no exceed the canvas height
  if (i<(height-30) && control ==false){
    // increase the size of the ellipse
    i=i+20;
  }
  else {
    // else control will change to true
    control = true;
    // decrease the size of the ellipse
    i=i-20;
  }
  // use redraw to update the size of ellipse
   redraw();
 }
