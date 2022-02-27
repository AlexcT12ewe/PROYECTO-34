var ball;
var mago, magoImg;
var base;
var ground;

var engine, world;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
  createCanvas(800, 700);

  engine = Engine.create();
  world = engine.world;

  base = new Base(width / 2 - 200, height / 2 - 200, 250, 20);
  ground = new Ground(width / 2 + 200, height / 2 + 20, 250, 20);
  
  var ball_options={
		isStatic:false,
		restitution:0.9,
		friction:0,
		density:1.2
	}

	ball = Bodies.circle(100,10,20,ball_options);
	World.add(world,ball);

  Engine.run(engine);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  ellipse(ball.position.x,ball.position.y,20);

  base.show();
  ground.show();

 
}

function keyPressed() {
   Matter.Body.applyForce(ball,ball.position,{x:0,y:0}); 
  
}

