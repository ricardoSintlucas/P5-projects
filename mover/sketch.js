// A Mover and an Attractor
let movers=[];
let attractor;

// Gravitational constant (for global scaling)
let G = 1;

function setup() {
  createCanvas(800, 600);
  for (let i = 0; i < 10; i++) {
    movers[i] = new Mover(random(width), random(height), random(0.1, 4), [random(50, 255), random(50, 255), random(50, 255)]);
  }
  attractor = new Attractor();
}

function draw() {
  background(0);
  for(let i =0; i < movers.length; i++){
    let force = attractor.attract(movers[i]);
    movers[i].applyForce(force);
    movers[i].update();
    movers[i].show();
  }
  attractor.show();
}

function mouseMoved() {
  attractor.handleHover(mouseX, mouseY);
}

function mousePressed() {
  attractor.handlePress(mouseX, mouseY);
}

function mouseDragged() {
  attractor.handleHover(mouseX, mouseY);
  attractor.handleDrag(mouseX, mouseY);
}

function mouseReleased() {
  attractor.stopDragging();
}