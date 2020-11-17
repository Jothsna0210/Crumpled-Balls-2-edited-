class Paper{
    constructor(x,y)
    {
        var options=
        {
            'friction':0.5,
            'isStatic':false,
            'restitution':0.3,
            'density':1.2
        } 
    //this.r=r;    
    this.body=Bodies.rectangle(x,y,60,60,options)
    this.image=loadImage('paper.png');
    World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        push();
        translate(pos.x,pos.y);
        imageMode(CENTER);
        //strokeWeight(2);
        //stroke("white");
        //fill("teal");
        image(this.image,0,0,60,60);
        pop();
    }
}