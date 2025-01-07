let postion;
let velocity;
let size = 20;
boxSize = 600;

function setup() {
  createCanvas(windowWidth - 20, windowHeight - 20, WEBGL);
  postion = createVector(0, 0, 0);
  velocity = createVector(random(1, 10), random(1, 10), random(1, 10));
}

function draw() {
  orbitControl();
  lights();
  background(0);
  postion.add(velocity);
  //size = map(postion.z, 0, width, 5, 64);
  push();
  noFill();
  stroke(255);
  translate(0, 0, -boxSize / 2);
  box(boxSize, boxSize, boxSize);

  pop();

  //ellipse(postion.x, postion.y, size, size);
  push();
  translate(-boxSize / 2 + postion.x, -boxSize / 2 + postion.y, -boxSize + postion.z);
  fill(255);
  sphere(size);
  pop();

  if (postion.x > boxSize || postion.x < 0) {
    velocity.x = velocity.x * -1;
  }
  if (postion.z > boxSize || postion.z < 0) {
    velocity.z = velocity.z * -1;
  }
  if (postion.y > boxSize || postion.y < 0) {
    velocity.y = velocity.y * -1;
  }
}
