class Mover {
  constructor(x, y, mass, color) {
    this.position = createVector(x, y);
    this.velocity = createVector();
    this.acceleration = createVector(0, 0);
    this.mass = mass;
    this.color = color;
  }

  applyForce(force) {
    let f = p5.Vector.div(force, this.mass);
    this.acceleration.add(f);
  }

  update() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.acceleration.mult(0);
  }
  show() {
    noStroke();
    fill(this.color[0], this.color[1], this.color[2], 90);
    circle(this.position.x, this.position.y, this.mass * 10);
  }

  checkEdges() {
    if (this.position.x > width) {
      this.position.x = width;
      this.velocity.x *= -1;
    } else if (this.position.x < 0) {
      this.velocity.x *= -1;
      this.position.x = 0;
    }
    if (this.position.y > height) {
      this.velocity.y *= -1;
      this.position.y = height;
    }
  }
}
