class Box{
  constructor(x, y, width, height, angle) {
      var options = {
          'restitution':0.04,
          'friction':0.3,
          'density':0.1
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      rectMode(CENTER);
      rect(0, 0, this.width, this.height);
      pop();
      if(this.body.speed < 3){
        super.display();
      }
      else{
        World.remove(world, this.body);
        push();
        this.visibility = this.visibility-5;
        tint(255, this.visibility);
        rect(0, 0, this.width, this.height);
        pop();
      }
    
    }
}