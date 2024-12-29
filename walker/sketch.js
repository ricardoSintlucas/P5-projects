
// let walker;
// let stuff = [1,12,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
let walkers = [];
let imageCounter = 0;

function setup() 
{
	createCanvas(windowWidth-20, windowHeight-20);
    for(let i = 0; i < 12; i++){
        walkers.push(new Walker(10, 3));
    }
    // walker = new Walker(4, 5);
    // walker2 = new Walker(10, 10);
    background(0);

//     let value = random(stuff);
// console.log(value);
}

function draw()
{
    for(let i = 0; i < walkers.length; i++){
        walkers[i].step();
        walkers[i].show();
    }
    // walker.step();
    // walker.show();
    // walker2.step();
    // walker2.show();
}

function mouseClicked() {
    saveCanvas('myCanvas' + imageCounter, 'png');
    
  }