//create constant engine world and bodies
const Engine = Matter.Engine ;
const World = Matter.World; 
const Bodies = Matter.Bodies; 

//create my engine and my world
var myEngine, myWorld ; 

//variables
var ground ;
var box1, box2, box3, box4, box5;
var pig1, pig2;
var log1, log2, log3, log4;
var bird;
var backgroundImg;

function preload(){

  //load background image
  backgroundImg=loadImage("sprites/bg.png");

}

function setup() {
  createCanvas(1200,400);

  //this line of code will be constant and it is used to make the engine and world
  myEngine = Engine.create ();
  myWorld = myEngine.world;

  //create ground body and add options
  ground = new Ground (600,height,1200,20);

  //create 1st layer boxes
  box1 = new Box (700,320,70,70);
  box2=new Box (920,320,70,70);
  //create 1st layer pig using pig class
  pig1 = new Pig (810,350);
  //create 1st layer log
  log1= new Log (810,260,300,PI/2);
  

  //create 2nd layer boxes
  box3= new Box(700,240,70,70);
  box4= new Box(920,240,70,70);
  //2nd layer pig
  pig2 = new Pig (810,220);
  //2nd layer log
  log2=new Log(810,180,300,PI/2);

  //create 3rd layer box
  box5 = new Box(810,160,70,70);
  //create 3rd layer logs
  log3= new Log(760,120,150,PI/7);
  log4=new Log (870,120,150,-PI/7);

  //create bird
  bird = new Bird (100,100);
  
}

function draw() {
  background(backgroundImg); 
  
  //keep engine updated to make code work; this is also a constant line of code that you will repeat everytime 
  Engine.update (myEngine);

  //display ground
  ground.display();

  //display 1st layer box
  box1.display();
  box2.display();
  //display 1st layer pigs
  pig1.display();
  //display 1st layer log
  log1.display();

  //display 2nd layer box
  box3.display();
  box4.display();
  //display 2nd layer pigs
  pig2.display();
  //display 2nd layer log
  log2.display();

  //display 3rd layer box
  box5.display();
  //display 3rd layer logs
  log3.display();
  log4.display();

  //display bird
  bird.display();
  
}