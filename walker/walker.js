class Walker{
    constructor(stepSize,circleSize){
        this.x = width/2;
        this.y = height/2;
        this.stepSize = stepSize;
        this.circleSize = circleSize;
    }

    show(){
        noStroke();
        fill(255,255,255, 20);
        circle(this.x,this.y, this.circleSize);
    }
    

    step(){
        let stepSize = 7;
        let xstep =random(-this.stepSize,this.stepSize);
        let ystep =random(-this.stepSize,this.stepSize);;
        this.x += xstep;
        this.y += ystep;

        // let choise = floor(random(4));
        // if(choise === 0){
        //     this.x++;
        // } else if(choise === 1){
        //     this.x--;
        // } else if(choise === 2){
        //     this.y++;
        // } else {
        //     this.y--;
        // }
    }


}