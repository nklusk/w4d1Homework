//global variables
let xPosition;
let speed = 4;
let diameter = 40;

function setup() {
  createCanvas(400, 400)
  xPosition = width/2;
  noLoop();

}



function draw() {
  background(200, 270, 23);
  ellipse(xPosition, height/2, diameter);

  






  xPosition += speed;

    if (xPosition >= width || xPosition <= 0) {
    speed = speed * -1;

  }

 
  }

  function mousePressed(){
    loop();
  }
