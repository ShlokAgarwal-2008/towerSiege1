class Block {
    constructor(x,y) {
      var options = {
          isStatic: false
      }
      this.body = Bodies.rectangle(x,y,40,40,options);
      this.width = 40;
      this.height = 40;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("green");
      rect(pos.x, pos.y, this.width, this.height);
    }
  };