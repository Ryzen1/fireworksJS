function Particle(x, y, hu, firework) {
    this.pos = createVector(x, y);
    this.firework = firework
    this.lifespan = 255;
    this.hu = hu;

    if (firework)
        this.velocity = createVector(0, random(-12, -8));
    else {
        this.velocity = p5.Vector.random2D();
        this.velocity.mult(random(2, 10));
    }

    this.acceleration = createVector();

    this.applyForce = function (force) {
        this.acceleration.add(force);
    }

    this.update = function () {
        if (!this.firework) {
            this.velocity.mult(0.9);
            this.lifespan -= 4;
        }
        this.velocity.add(this.acceleration);
        this.pos.add(this.velocity);
        this.acceleration.mult(0);
    }

    this.done = function () {
        return this.lifespan < 0;
    }

    this.show = function () {
        colorMode(HSB);
        if (!this.firework) {
            strokeWeight(2);
            stroke(hu, 255, 255, this.lifespan);
        } else {
            strokeWeight(4);
            stroke(hu, 255, 255);
        }
        point(this.pos.x, this.pos.y);
    }
}