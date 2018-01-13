let circles = [];
let ncircles = 100;
let minRadius = 5;
let maxRadius = 35;
let secMargin = maxRadius + 5;

function setup() {
    createCanvas(600, 600);
    for(let i=0;i<ncircles;i++) {
        circles[i] = new Cir(secMargin, minRadius, maxRadius);
    }
    frameRate(1);
}

function draw() {
    background(22, 33, 44);
    for(let i=circles.length-1;i>0;i--) {
        for(let j=i-1;j>=0;j--) {
            if (circles[i].intersectsWith(circles[j])) {
                circles[i].show();
                circles[j].show();
                strokeWeight(1);
                stroke(171, 145, 68);
                line(circles[i].x, circles[i].y, circles[j].x, circles[j].y);
            }
        }
    }
    for(let i=circles.length-1;i>=0;i--) {
        circles[i].update();
    }
}
