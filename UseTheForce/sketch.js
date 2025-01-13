let movers = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 10; i++) {
    let mover = new Mover(random(width), random(height), random(1, 20), [random(100, 255), random(100, 255), random(100, 255)]);
    movers.push(mover);
  }
}

function draw() {
  background(0);
  for (let mover of movers) {
    let gravity = createVector(0, 0.3);
    mover.applyForce(gravity);
    mover.update();
    mover.show();
    if (mover.contactEdge()) {
      let c = 0.1;
      let friction = mover.velocity.copy();
      friction.mult(-1);
      friction.setMag(c);
      mover.applyForce(friction);
    }
    mover.checkEdges();
    if (mouseIsPressed) {
      let wind = createVector(0.1, 0);
      mover.applyForce(wind);
    }
  }
}
