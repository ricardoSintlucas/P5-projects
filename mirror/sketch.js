let capture;

function setup() {
  createCanvas(800, 600);

  // Webcam capture (at the size of the window)
  video = createCapture(VIDEO);
  video.size(width, height);
  video.hide();
}

function draw() {
  background(255);
  image(video, 0, 0);
  // Try experimenting with this
  let gridSize = 10;

  // The video has pixels just like an image!
  image.loadPixels();
  for (let y = 0; y < video.height; y += gridSize) {
    for (let x = 0; x < video.width; x += gridSize) {}
  }
}

function mouseClicked() {
  console.log(image.get(mouseX, mouseY));
}
