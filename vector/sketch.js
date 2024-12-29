let postion;
let velocity;
let size = 48;

function setup() 
{
	createCanvas(windowWidth-20, windowHeight-20);
	postion = createVector(100,100,100);
	velocity = createVector(random(1,10),random(1,10),random(1,10));
	
}

function draw()
{
	background(0);
	postion.add(velocity);
	size = map(postion.z , 0, width, 5, 64);
	stroke(255);
	strokeWeight(2);
	fill(127);
	ellipse(postion.x, postion.y, size, size);

	if (postion.x > width || postion.x < 0)
	{
		velocity.x = velocity.x * -1;
	}
	if (postion.z > width || postion.z < 0)
	{
		velocity.z = velocity.z * -1;
	}
	if (postion.y > height || postion.y < 0)
	{
		velocity.y = velocity.y * -1;
	}
}
