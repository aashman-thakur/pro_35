class Particle {
    constructor(x,y) {
      var options = {
          'restitution':.5,
          'friction':8,
          'density':0.1
      }
    
      this.body = Bodies.circle(x,y,10,options);
      this.radius = 10;
      World.add(world, this.body);
    }
    display(){
    var pos =this.body.position;
    ellipseMode(RADIUS);
    fill("yellow"); 
    circle(pos.x, pos.y,10);
    }
  };

 