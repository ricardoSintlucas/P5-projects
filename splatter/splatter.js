let standardDeviation = 10;
let t = 0;
function setup() 
{ 
    standardDeviation = createSlider(1, 50,20);
	createCanvas(windowWidth-20, windowHeight-20);
    background(0);
    noStroke();
    fill(0,0,255,20);
   
}

function draw() {
    let x = noise(t);
    let y = noise(t+10);
    // console.log(x);
    circle(width*x, height*y,16);
    t += 0.005;
}


function mouseDragged() {
    let spray = new Spray(standardDeviation.value());
    spray.show();
    
}