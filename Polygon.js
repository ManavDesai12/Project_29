class Polygon{
    constructor(x, y, radius) {
        var options = {
            'restitution':10,
            'friction':0,
            'density':10
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.image = loadImage("polygon.png");
        this.radius = radius;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.radius, this.radius);
        pop();
      }
}