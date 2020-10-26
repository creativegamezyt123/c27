class rope{
    constructor(bodyA, bodyB,offsetX,offsetY){
      this.offsetX = offsetX
      this.offsetY = offsetY
      
        var options = {
            bodyA:bodyA,
            bodyB:bodyB,
            pointB:{x:this.offsetX, y:offsetY}
        }
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }
}