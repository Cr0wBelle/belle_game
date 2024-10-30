
var max = 600;
var min = 0;
var ballx = 400;
var bally = 400;
var score = 0;

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(0, 0, 120);
  text('Keep them contained! Score:' + score, 50, 50);
  incScore();
  difficulty();
  fill(255, 0, 0);
  moveMouse();
  ellipse(ballx, bally, 50, 50);
}

function incScore(){
  while(ballx < 600 && ballx > 0 && bally < 600 && bally > 0){
    score++
  }
}

function difficulty(){
  let time = frameCount;
  if (time < 500){
    ballJitter(3);
}
  else if(time > 500 && time < 1000){
    ballJitter(5);
  }
  else if (time > 1000 && time < 1200){
    ballJitter(10);
  }else{
    ballJitter(30);
  }
  
}

function ballJitter(mag){
  let randX = random(-mag, mag);
  let randY = random(-mag, mag);
  ballx += randX;
  bally += randY;
}

function moveMouse(){
  let ballDistance = dist(ballx, bally, mouseX, mouseY);
  if (ballDistance < 40){
    if(mouseX < ballx){
      ballx += 20;
    }else{
      ballx-=20;
    }
    if(mouseY < bally){
      bally += 20;
    }else{
      bally -= 20;
    }
  }
}
