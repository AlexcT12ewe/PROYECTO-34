var ball;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function setup() {
  createCanvas(800, 700);

  engine = Engine.create();
  world = engine.world;
  
  var ball_options={
		isStatic:false,
		restitution:0.5,
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

  drawSprites();
 
}

function keyPressed() {
  if (keyCode === UP_ARROW) { 
    Matter.Body.applyForce(ball,ball.position,{x:65,y:-65}); 
   } 
}

