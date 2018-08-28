function preload() {
  img = loadImage('chicken.png')
  score = 0;
  eggs = [];
  offset = 100;
  xPos = rrandom(width);
  yPos = rrandom(height);
}
function setup() {
  createCanvas(700, 500);
}

function draw() {
  background(98, 257, 295);
  printEggs();
  printScore();
  printChicken();
}

function printScore() {
  strokeWeight(5);
  stroke(93, 212, 247);
  fill(255, 255, 255);
  ellipse(width/2, 40, 150, 60);
  stroke(93, 212, 247);
  textSize(28);
  textAlign(CENTER);
  text(score, width/2, 50);
}

function printEggs() {
  for (let i=0; i<eggs.length; i++) {
    strokeWeight(3);
    stroke(251, 201, 10);
    fill(255, 255, 204);
    ellipse(eggs[i][0], eggs[i][1], 30, 40);
  }
}

function printChicken() {
  imageMode(CENTER);
  image(img, xPos, yPos);
}

function makeEgg() {
  x = rrandom(width);
  y = rrandom(height);
  eggs.push([x, y]);
  xPos = x;
  yPos = y;
  score += 1;
}

function keyPressed() {
  makeEgg();
}

function mousePressed() {
  makeEgg();
}


function rrandom(max) {
  return random(offset, max-offset);
}
