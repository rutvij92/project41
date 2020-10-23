class Drop {
    constructor(x,y,radius){
 var   options={
        friction:0.001,
        restitution:0.01
    }
        this.body = Bodies.circle(x,y,5,options);
        World.add(world,this.body);
    }
    display(){

ellipseMode(RADIUS);
fill("blue");
ellipse(this.body.position.x,this.body.position.y,5,5);

    }
    
    }