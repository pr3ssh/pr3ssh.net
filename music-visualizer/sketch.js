// global variables

let bandwidth = 15;
let xoff = 0;
let bands = [];
let nbands = 60;


// Main methods

function setup() {
  createCanvas(window.windowWidth, window.windowHeight/2);
  for(i=0; i<nbands; i++) {
    bands[i] = new Band();
  }
}

function draw() {
  xoff += 0.1;
  clearScreen();
  for(i=0; i<nbands; i++) {
    bands[i].updateX((width/2)+i*20-xoff);
    bands[i].updateHeight(noise(i, (xoff/15)) * (height/2));
    bands[i].show();
  }
}


// Classes and Functions

function clearScreen() {
  background("#060063");
}


function Band() {
  this.xpos = 0;
  this.height = 0;
  
  this.updateX =function(newX) {
    this.xpos = newX;
  }
  
  this.updateHeight =function(newHeight) {
    this.height = newHeight;
  }
  
  this.show = function() {
    push();
    translate(0, height/2);
    if (this.xpos > ((width/2))) fill("#f12f45");
    else if (this.xpos > ((width/3)) && this.xpos < ((width/2))) fill("#080085");
    else fill("#060063");
    rectMode(CENTER);
    noStroke();
    rect(this.xpos, 0, bandwidth, this.height);
    pop();
  }
}
