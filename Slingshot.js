class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness:0.01,
            length: 20
        }
        this.pointB = pointB
        this.body = Constraint.create(options);
       
        World.add(world, this.body);
    }

    fly(){
        this.body.bodyA = null;
    }

    attach(bodyA){
        this.sling.bodyA = bodyA
    }

    display(){

        if(this.body.bodyA){
            var pointA = this.body.bodyA.position;
            var pointB = this.pointB;
            stroke(48, 22, 8);
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
           
        }
        
    }
    
}