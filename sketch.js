//global variables
let xPosition;
let speed = 0;
let diameter = 40; 
let randomGray = 150

function setup() {
  createCanvas(400, 400)
  xPosition = width/2;
  
}

function draw() {
  background(200, 270, 23);
  
  fill(randomGray);
  
  ellipse(xPosition, height/2, diameter);


  xPosition += speed;

    if (xPosition >= width || xPosition <= 0) {
    speed = speed * -1;

  }

   if (mouseIsPressed == true){
    
   }

   if (mouseIsPressed == true && speed == 0){
    speed = 4;
    randomGray = random(1,255);
   } else if (mouseIsPressed == true){
      speed = 0;
   }
   
  
  }
