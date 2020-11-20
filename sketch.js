const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myEngine, myWorld;
var ground,ball;  

function setup() {
  createCanvas(800,400);

  
  myEngine = Engine.create();
  myWorld = myEngine.world;

  var ground_options = {

      isStatic : true

  }
  ground = Bodies.rectangle(400,380,800,20,ground_options);
  World.add(myWorld,ground);
  console.log(ground.position.x);
  console.log(ground.position.y);

  var ball_options = { 
    restitution : 2
  }

  ball = Bodies.circle(400,250,35,ball_options);
  World.add(myWorld,ball);

  

}

function draw() {
  background(0,0,0); 
  Engine.update(myEngine); 
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,20);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,35,35);
}