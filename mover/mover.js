class Mover {
    constructor(x, y, mass, color) {
      this.mass = mass;
      this.radius = mass * 8;
      this.position = createVector(x, y);
      this.velocity = createVector(1, 0);
      this.acceleration = createVector(0, 0);
      this.color = color;
    }
    // Newton's 2nd law: F = M * A
    // or A = F / M
    applyForce(force) {
      let f = p5.Vector.div(force, this.mass);
      this.acceleration.add(f);
    }
  
    update() {
      // Velocity changes according to acceleration
      this.velocity.add(this.acceleration);
      // position changes by velocity
      this.position.add(this.velocity);
      // We must clear acceleration each frame
      this.acceleration.mult(0);
    }
  
    show() {
      noStroke();
      fill(this.color[0], this.color[1], this.color[2]);

      circle(this.position.x, this.position.y, this.radius * 2);
    }
  }