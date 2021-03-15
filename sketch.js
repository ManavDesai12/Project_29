const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10
var world, polygon;
var stand;
function preload(){
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;
	box1=new Box(330,235,30, 40);
	box2=new Box(360,235,30, 40);
	box3=new Box(390,235,30, 40);
	box4=new Box(420,235,30, 40);
  box5=new Box(450,235,30, 40);
	box6=new Box(400,235,30, 40);
	box7 = new Box(360, 195, 30, 40);
	box8 = new Box(390, 195, 30, 40);
	box9 = new Box(420, 195, 30, 40);
	box10 = new Box(390, 155, 30, 40);
	fill("green")

	
	polygon = new Polygon(50, 200, 30);
    launcherObject = new SlingShot(polygon.body, {x:100, y:200});
	 
    groundObject=new Ground(width/2,600,width,20);
    stand = new Ground(400, 400, 400, 10);
	

	
	
}

function draw() {
Engine.run(engine);
  background(230);
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
polygon.display();
launcherObject.display();

  stand.display();
  groundObject.display();

  
}

function mouseDragged(){
   Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
  
  }
 


function mouseReleased(){
  launcherObject.fly();
}

function keyPressed(){
  if (keyCode === 32){
      slingshot.attach(polygon.body);
  }
  
  }