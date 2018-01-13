class Cir {
    
    constructor(sm, minr, maxr) {
        this.x = random(sm, width-sm)
        this.y = random(sm, height-sm)
        this.r = random(minr, maxr);
        this.dir = 1;
        this.sm = sm;
    }

    intersectsWith(other) {
        console.log(other);
        if (dist(this.x, this.y, other.x, other.y) <= (this.r + other.r)) {
            return true;
        } else {
            return false;
        }
    }

    update() {
        this.x += this.dir*random(-5, 5);
        this.y += this.dir*random(-5, 5);
        if (this.x > width || this.x < 0 || this.y > height || this.y < 0) {
            this.dir *= -1;
        }
    }

    show() {
        noStroke();
        fill(6, 120, 122, 40);
        ellipse(this.x, this.y, this.r*2, this.r*2);
    }

}
