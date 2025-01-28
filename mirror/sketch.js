let video;
let setOfChars = ["@", "%", "#", "*", "+", "=", "-", ":", ".", " "];
let partScreen;
let fontLoaded = false;
function setup() {
  createCanvas(800, 600, WEBGL);
  loadFont("Roboto-Regular.ttf", drawText);
  // Webcam capture (at the size of the window)
  video = createCapture(VIDEO);
  scale(-1, 1);
  video.size(800, 600);
  video.hide();
  partScreen = width / 6;
}

function drawText(font) {
  fontLoaded = true;
  textFont(font);
  fill(255);
}

function draw() {
  background(0);
  translate(video.width / 2 - 10, -height / 2 + 12); // Move the origin to the right edge
  scale(-1, 1); // Flip the canvas horizontally
  let gridSize = 20;

  // The video has pixels just like an image!
  video.loadPixels();

  for (let y = 0; y < video.height; y += gridSize) {
    for (let x = 0; x < video.width; x += gridSize) {
      let index = (x + y * video.width) * 4;
      let r = video.pixels[index];
      let g = video.pixels[index + 1];
      let b = video.pixels[index + 2];
      let grayscale = (r + g + b) / 3;
      let color = [video.pixels[index], video.pixels[index + 1], video.pixels[index + 2]];

      if (mouseX < partScreen && mouseX > 0) {
        //Circle based on grayscale value
        let size = map(grayscale, 0, 255, 2, gridSize);
        ellipse(x, y, size, size);
      } else if (mouseX > partScreen && mouseX < partScreen * 2) {
        //rotate the rectangles based on grayscale value
        let rotation = map(grayscale, 0, 255, 0, PI * 2);
        push();
        // fill(color[0], color[1], color[2]);
        fill(255);
        noStroke();
        translate(x, y);
        rotate(rotation);
        rectMode(CENTER);
        rect(0, 0, 2, gridSize);
        rect(0, 0, gridSize, 2);
        pop();
      } else if (mouseX > partScreen * 2 && mouseX < partScreen * 3) {
        //character based on grayscale value
        push();
        translate(x, y);
        scale(-1, 1); // Flip the character horizontally
        let indexChar = floor(map(grayscale, 0, 255, 0, setOfChars.length));
        let char = setOfChars[indexChar];
        fill(255);
        if (fontLoaded) {
          textSize(gridSize);
          text(char, 0, 0);
        }
        pop();
      } else if (mouseX > partScreen * 3 && mouseX < partScreen * 4) {
        push();
        let a = map(grayscale, 0, 255, 5, 100);
        noStroke();
        fill(color[0], color[1], color[2], a);
        ellipse(x, y, gridSize * 3, gridSize * 3);
        pop();
      } else if (mouseX > partScreen * 4 && mouseX < partScreen * 5) {
        //rotate the rectangles based on grayscale value
        let rotation = map(grayscale, 0, 255, 0, PI);
        push();
        // fill(color[0], color[1], color[2]);
        fill(255);
        noStroke();
        translate(x, y);
        rotate(rotation);
        rectMode(CENTER);
        rect(0, 0, 2, gridSize);
        pop();
      } else if (mouseX > partScreen * 5 && mouseX < partScreen * 6) {
        //Circle based on grayscale value
        push();
        noStroke();
        ambientLight(128, 128, 128);
        directionalLight(150, 150, 150, 0, 0, -1);
        rectMode(CENTER);
        let size = map(grayscale, 0, 255, 150, -150);
        translate(x, y, size);
        sphere(gridSize / 2);
        pop();
      } else {
        //Circle based on grayscale value
        push();
        ambientLight(128, 128, 128);
        directionalLight(255, 255, 255, 0, 0, -1);
        rectMode(CENTER);
        let size = map(grayscale, 0, 255, 150, -150);
        translate(x, y, size);
        box(gridSize);
        //square(x, y, size);
        pop();
      }
    }
  }
}
