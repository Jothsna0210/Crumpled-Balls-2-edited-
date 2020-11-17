//variable declaration
var paper1,ground1,side1,side2,side3;

//const Render = Matter.Render;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
	//greenbin = loadImage("dustbingreen.png");

}

function setup() {
	createCanvas(800, 700);
	rectMode();

	//creating engine and adding to the world
	engine = Engine.create();
	world = engine.world;

	paper1 = new Paper(100,600);
	//paper1.debug=true;

	ground1 = new Ground(400,height,800,30);

	side1 = new Bin(420,563,20,243)
	side2 = new Bin(580,563,20,243)
	side3 = new Green(500,562,220,20)

	//var render = Render.create({ element: document.body, engine: engine, options: { width: 1600, height: 700, wireframes: false } });
	//Engine.run(engine); 
	//Render.run(render);

	//console.log(paper1.body)
  
}


function draw() {
  background(255);
  Engine.update(engine);
  
  paper1.display();
  //console.log("hello")
  
  ground1.display();

  side1.display();
  side2.display();
  side3.display();
 
}

function keyPressed()
{
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:90,y:-300})
	}
}

