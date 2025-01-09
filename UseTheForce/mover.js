class Mover {
  constructor(x, y, mass, color) {
    this.position = createVector(x, y);
    this.velocity = createVector();
    this.acceleration = createVector(0, 0);
    this.mass = mass;
    this.color = color;
    this.radius = (mass * 10) / 2;
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
    circle(this.position.x, this.position.y, this.radius * 2);
  }

  contactEdge() {
    return this.position.y > height - this.radius - 1;
  }

  checkEdges() {
    let bounce = -0.9;
    if (this.position.x + this.radius > width) {
      this.position.x = width - this.radius;
      this.velocity.x *= bounce;
    } else if (this.position.x - this.radius < 0) {
      this.velocity.x *= bounce;
      this.position.x = this.radius;
    }
    if (this.position.y + this.radius > height) {
      this.velocity.y *= bounce;
      this.position.y = height - this.radius;
    }
  }
}
