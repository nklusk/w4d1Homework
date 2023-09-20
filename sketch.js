let xPosition;
let speed = 4;
let diameter = 40;

function setup() {
  createCanvas(400, 400);
  xPosition = width/2;
  
}

function draw() {
  background(70, 200, 70);
  ellipse(xPosition, height/2, diameter);
  xPosition += speed;

    if (xPosition >= width || xPosition <= 0){
      speed = speed *-1;
    }

  }
 
function keyPressed() {
  if (key == 'j' || key == 'J'){
  if(speed <0) {
    console.log('to the left')
  } else {
    console.log('to the right')
  }
}
  }


