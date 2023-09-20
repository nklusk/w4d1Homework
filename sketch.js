//global variables
let topCircleMovement;
let bottomCircleMovement;
let topSpeed = 4;
let bottomSpeed = 4;
let diameter = 40; 

function setup() {
  createCanvas(400, 400)
  xPosition = width/2;
  topCircleMovement = width/2
  bottomCircleMovement = width/2
}

function draw() {
  background(200, 270, 23);

  //bottom circle
  ellipse(bottomCircleMovement, height/2, diameter);


  //top circle
  ellipse(topCircleMovement, height/3, diameter/2);

  topCircleMovement += topSpeed;

    if (topCircleMovement >= width || topCircleMovement <= 0) {
    topSpeed = topSpeed * -1;

  }

  bottomCircleMovement += bottomSpeed;
    
    if (bottomCircleMovement >= width || bottomCircleMovement <=0) {
        bottomSpeed = bottomSpeed * -1;
    }
   
   
    if (mouseIsPressed == true) {
      bottomSpeed = 0
    }

  }

  function mousePressed(){
  
  
  }
