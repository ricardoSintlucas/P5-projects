class Spray{
    constructor(spread){
        this.spread = spread;
    }

    show(){
        noStroke();
        fill(0,0,255,map(this.spread,50,1,5,70));
        for(let i = 0; i < 50; i++){
            let x = randomGaussian(mouseX, this.spread);
            let y = randomGaussian(mouseY, this.spread);
            
            circle(x, y, randomGaussian(5,2));
        }
    }
}