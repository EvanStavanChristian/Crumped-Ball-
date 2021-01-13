
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
Matter.Bodies.circle=Matter.circle;
function preload()
{
	
}

function setup() {
	createCanvas(800, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground=new Ground(400,450,200,25);
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("Green");
  
  drawSprites();
  
 
}
display(
   ground.display()
)
function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(papperObject.body,papperObject.body.position,{x:85,y:-85});
	}
}









