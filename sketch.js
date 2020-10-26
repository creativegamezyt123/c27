
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;



function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof1 = new roof(10,100,500,10);
	bob1 = new bob (10,300,20,20);
	bob2 = new bob (30,300,20,20);
	bob3 = new bob (50,300,20,20);
	bob4 = new bob (70,300,20,20);
	bob5 = new bob (90,300,20,20);

	rope1 = new rope(bob1.body,roof1.body,-bobDiameter*2,0);
	rope2 = new rope(bob2.body,roof1.body,-bobDiameter*2,0);
	rope3 = new rope(bob3.body,roof1.body,-bobDiameter*2,0);
	rope4 = new rope(bob4.body,roof1.body,-bobDiameter*2,0);
	rope5 = new rope(bob5.body,roof1.body,-bobDiameter*2,0);

	Engine.run(engine);
   
}


function draw() {
  rectMode(CENTER);
  background(0);

  keyPressed();
  
  drawSprites();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
}
function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(bob1.body);
	}
	}


