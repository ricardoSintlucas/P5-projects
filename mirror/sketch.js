let video;
let setOfChars = ['@', '%', '#', '*', '+', '=', '-', ':', '.', ' '];
function setup() {
  createCanvas(800, 600);

  // Webcam capture (at the size of the window)
  video = createCapture(VIDEO);
  scale(-1,1); 
  video.size(800, 600);
  video.hide();
}

function draw() {
  background(0);
  translate(video.width, 0); // Move the origin to the right edge
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
      
      //Circle based on grayscale value
      //let size = map(grayscale, 0, 255, 2, gridSize);
      // ellipse(x, y, size, size);

      //rotate the rectangles based on grayscale value
      // let rotation = map(grayscale, 0, 255, 0, PI);
      // push();
      // fill(255);
      // noStroke();
      // translate(x, y);
      // rotate(rotation);
      // rectMode(CENTER);
      // rect(0, 0, 2, gridSize);
      // rect(0, 0, gridSize, 2); 
      // pop();

      //rotate the rectangle based on grayscale value
      // let rotation = map(grayscale, 0, 255, 0, PI);
      // push();
      // fill(255);
      // noStroke();
      // translate(x, y);
      // rotate(rotation);
      // rectMode(CENTER);
      // rect(0, 0, 2, gridSize);
      // pop();

      //character based on grayscale value
      push();
      translate(x, y);
      scale(-1, 1); // Flip the character horizontally
      let indexChar = floor(map(grayscale, 0, 255, 0, setOfChars.length));
      let char = setOfChars[indexChar];
      fill(255);
      textSize(gridSize);
      text(char, 0, 0);
      pop();

      // push();
      // let a = map(grayscale, 0, 255, 5, 50);
      // noStroke();
      // fill(255, a);
      //  ellipse(x, y, gridSize*3, gridSize*3);
      // pop();     

    }
  }
  
}
