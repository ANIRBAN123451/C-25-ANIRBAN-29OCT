//Calling Matter functions
const Engine=Matter.Engine;//provides mechanics
const World=Matter.World;//provides background
const Bodies=Matter.Bodies;//provides objects
var engine,world,box1,box2,box3,box4,pig1,pig2,log1,log2,ground,bird1;
function setup() {
  createCanvas(800,800);
  //Creating our engine
  engine=Engine.create();
  //Connecting our world to our engine
  world=engine.world;

  //Adding objects and our world to the main world
  ground = new Ground(400,780,800,40);
  box1=new Box(200,700,20,50);
  box2=new Box(300,700,20,50);
  box3=new Box(200,650,20,50);
  box4=new Box(300,650,20,50);
  pig1=new Pig(250,700);
  pig2=new Pig(250,650);
  bird1=new Bird(100,100);
  log1=new Log(250,680,200,PI/2);
  log2=new Log(250,620,200,PI/2);
}

function draw() {
  background("white");
  //Updating the engine
  Engine.update(engine);
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  pig1.display();
  pig2.display();
  bird1.display();
  log1.display();
  log2.display();
  ground.display();
}