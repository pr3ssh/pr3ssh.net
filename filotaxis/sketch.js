// https://en.wikipedia.org/wiki/Phyllotaxis

var n = 0;
var c = 4;
var s = 5;

function setup() {
    createCanvas(600, 600);
    angleMode(DEGREES);
    background(29, 92, 8);
}

function draw() {
    var a = n * 137.5;
    var r = c * sqrt(n);
    var x = r * cos(a) + width/2;
    var y = r * sin(a) + height/2;
    fill(59, 183, 15, (255-(n*0.1))%255);
    noStroke();
    ellipse(x, y, s, s);
    n++;
}
