function setup() {
   createCanvas(800,500);
   background('#808080');
}

var mycolor,mycolor1,mycolor2,mycolor3 ;
var theta = 0;
var phi = 0;
var t = 0;



mycolor = (random(1,256),random(1,256),random(1,256));
mycolor1 = (random(1,256),random(1,256),random(1,256));
mycolor2 = (random(1,256),random(1,256),random(1,256));
mycolor3 = (random(1,256),random(1,256),random(1,256));


function draw() {

    ellipse(400, 200, 400);
    fill(mycolor);
   push();
    fill(mycolor1);
    translate(400, 200);
    rotate(radians(theta));
    rect(-15, -85, 20, 220);
    theta +=1;
   pop();

   push();
    fill(mycolor2); 
    translate(400, 200);
    rotate(radians(phi));
    rect(-15, -85, 20, 240);
    phi += 0.1;
  pop();

  push();
  fill(mycolor3);
   translate(400, 200);
   rotate(radians(t));
   rect(-15, -85, 20, 120);
   t += 0.01;
  pop();
}

var r1 = random(1,256);
var g1 = random(1,256);
var b1 = random(1,256);

function mouseClicked()
{
  if(mouseX >= 0 && mouseX <=800 && mouseY >= -200 && mouseY <=600)
  {
      mycolor = (r1,g1,b1);
  }
}
function mousePressed() {
    if(mouseX >= 0 && mouseX <=800 && mouseY >= -200 && mouseY <=600)
    {
    noLoop();
    }
  }

  function mouseReleased() {
    loop();
  }
